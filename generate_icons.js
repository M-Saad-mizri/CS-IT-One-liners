const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

function crc32(buf) {
  let c;
  const table = [];
  for (let n = 0; n < 256; n++) {
    c = n;
    for (let k = 0; k < 8; k++) {
      if (c & 1) c = 0xedb88320 ^ (c >>> 1);
      else c = c >>> 1;
    }
    table[n] = c;
  }
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = table[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const typeBuf = Buffer.from(type, 'ascii');
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(data.length, 0);
  
  const crcBuf = Buffer.alloc(4);
  const crcVal = crc32(Buffer.concat([typeBuf, data]));
  crcBuf.writeUInt32BE(crcVal, 0);
  
  return Buffer.concat([lenBuf, typeBuf, data, crcBuf]);
}

function generatePNG(size) {
  const width = size;
  const height = size;

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;  // bit depth
  ihdr[9] = 6;  // RGBA
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace

  const rawData = Buffer.alloc(height * (1 + width * 4));
  let pos = 0;

  const center = size / 2;
  const radius = size * 0.42;

  for (let y = 0; y < height; y++) {
    rawData[pos++] = 0; // filter byte
    for (let x = 0; x < width; x++) {
      const dx = x - center;
      const dy = y - center;
      const dist = Math.sqrt(dx * dx + dy * dy);

      let r = 9, g = 13, b = 22, a = 255; // #090D16

      if (dist <= radius) {
        const t = (x + y) / (width + height);
        r = Math.round(99 + (139 - 99) * t);
        g = Math.round(102 + (92 - 102) * t);
        b = Math.round(241 + (246 - 241) * t);

        const innerRadius = radius * 0.68;
        const holeRadius = radius * 0.38;
        if (dist <= innerRadius && dist >= holeRadius) {
          r = 255; g = 255; b = 255;
        } else if (dist < holeRadius) {
          r = 15; g = 23; b = 42;
        }

        if (dx > 0 && dy > 0 && Math.abs(dx - dy) < size * 0.08 && dist <= radius * 0.78 && dist >= radius * 0.22) {
          r = 255; g = 255; b = 255;
        }
      }

      rawData[pos++] = r;
      rawData[pos++] = g;
      rawData[pos++] = b;
      rawData[pos++] = a;
    }
  }

  const compressed = zlib.deflateSync(rawData);

  const pngHeader = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdrChunk = makeChunk('IHDR', ihdr);
  const idatChunk = makeChunk('IDAT', compressed);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([pngHeader, ihdrChunk, idatChunk, iendChunk]);
}

const iconsDir = path.join(__dirname, 'icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

fs.writeFileSync(path.join(iconsDir, 'icon-192.png'), generatePNG(192));
fs.writeFileSync(path.join(iconsDir, 'icon-512.png'), generatePNG(512));
fs.writeFileSync(path.join(iconsDir, 'icon-maskable.png'), generatePNG(512));
console.log('PNG Icons generated successfully!');
