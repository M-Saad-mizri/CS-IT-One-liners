// Structured question bank containing 220 BPSC/Lecturer Level Networking MCQs
// and a parser utility for imported custom questions.

const NETWORKING_MCQS = [
  // --- OSI Model (1–40) ---
  {
    id: 1,
    category: "OSI Model",
    question: "Which OSI layer is responsible for logical addressing?",
    options: ["Data Link Layer", "Transport Layer", "Network Layer", "Session Layer"],
    answerIndex: 2,
    explanation: {
    "correctReason": "The Network Layer (Layer 3) handles logical addressing using IP addresses (IPv4/IPv6) to route packets across disparate networks.",
    "optionReasons": {
        "A": "Data Link Layer handles physical addressing (MAC addresses) and node-to-node frame delivery within the same local network.",
        "B": "Transport Layer handles process-to-process communication, port numbers, flow control, and end-to-end reliability (TCP/UDP).",
        "C": "Network Layer is correct because logical IP addressing and inter-network routing occur exclusively at Layer 3.",
        "D": "Session Layer manages, establishes, and terminates active communication dialogues and sessions between applications."
    },
    "memoryTip": "Logical = Layer 3 = IP Address (Network Layer). Physical = Layer 2 = MAC Address (Data Link).",
    "examTrap": "BPSC frequently tricks students by swapping logical addressing (IP at Layer 3) with physical addressing (MAC at Layer 2).",
    "conceptSummary": "The OSI Network Layer provides logical addressing, packet encapsulation, and path determination (routing). IP addresses allow data packets to cross multiple network routers from source host to destination host.",
    "relatedConcepts": [
        "IP Addressing",
        "OSI Layer 3",
        "Packet Routing",
        "Logical vs Physical Address"
    ],
    "difficulty": "Easy",
    "bpscImportance": "High"
}
  },
  {
    id: 2,
    category: "OSI Model",
    question: "Which OSI layer is responsible for framing?",
    options: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"],
    answerIndex: 1,
    explanation: {
    "correctReason": "The Data Link Layer (Layer 2) takes network layer packets and encapsulates them into frames by adding header (MAC addresses) and trailer (FCS/CRC error check) fields.",
    "optionReasons": {
        "A": "Physical Layer converts bits into raw electrical signals, light pulses, or radio waves without any frame boundaries.",
        "B": "Data Link Layer is correct because framing, MAC addressing, and local error detection occur at Layer 2.",
        "C": "Network Layer deals with IP packets and routing across networks, prior to frame encapsulation.",
        "D": "Transport Layer breaks data into segments (TCP) or datagrams (UDP) and attaches source/destination port numbers."
    },
    "memoryTip": "Data Link Layer = Framing & MAC addresses (Layer 2).",
    "examTrap": "Remember that switches operate at Layer 2 because they process frames using MAC tables.",
    "conceptSummary": "Framing is the primary function of the Data Link Layer. It packages Layer 3 IP packets into Layer 2 frames with sender/receiver MAC addresses and a Frame Check Sequence (FCS) CRC code for error detection on local links.",
    "relatedConcepts": [
        "Framing",
        "MAC Address",
        "Layer 2 Switch",
        "CRC Error Checking"
    ],
    "difficulty": "Easy",
    "bpscImportance": "High"
}
  },
  {
    id: 3,
    category: "OSI Model",
    question: "Which OSI layer converts bits into electrical, optical, or radio signals?",
    options: ["Physical Layer", "Data Link Layer", "Session Layer", "Network Layer"],
    answerIndex: 0,
    explanation: {
    "correctReason": "The Physical Layer (Layer 1) defines mechanical, electrical, and functional specifications to transmit raw unstructured bit streams over physical transmission media.",
    "optionReasons": {
        "A": "Physical Layer is correct because signal encoding, voltage levels, and bit transmission over media occur at Layer 1.",
        "B": "Data Link Layer organizes raw bits into structured frames and handles medium access control.",
        "C": "Session Layer manages session establishment and dialogue control between software applications.",
        "D": "Network Layer handles logical IP addressing and packet routing."
    },
    "memoryTip": "Physical = Cables, Voltage, Bits, and Signals (Layer 1).",
    "examTrap": "Hubs and repeaters work at the Physical Layer because they simply regenerate electrical/optical signals without inspecting bit frames.",
    "conceptSummary": "The Physical Layer governs the physical cable interface, connector types (RJ-45), signaling techniques (NRZ, Manchester), and bit representation as voltage, pulse of light, or RF wave.",
    "relatedConcepts": [
        "Physical Layer",
        "Bit Stream",
        "Signal Encoding",
        "Media Transmission"
    ],
    "difficulty": "Easy",
    "bpscImportance": "High"
}
  },
  {
    id: 4,
    category: "OSI Model",
    question: "Which PDU belongs to the Transport Layer?",
    options: ["Frame", "Packet", "Segment", "Bit"],
    answerIndex: 2,
    explanation: {
    "correctReason": "At the Transport Layer (Layer 4), data is divided into Protocol Data Units (PDUs) known as Segments in TCP or Datagrams in UDP.",
    "optionReasons": {
        "A": "Frame is the Protocol Data Unit (PDU) at the Data Link Layer (Layer 2).",
        "B": "Packet is the Protocol Data Unit (PDU) at the Network Layer (Layer 3).",
        "C": "Segment is correct for Layer 4 because TCP appends sequence numbers and port numbers to form segments.",
        "D": "Bit is the unit of data at the Physical Layer (Layer 1)."
    },
    "memoryTip": "PDUs: Bits (L1) -> Frames (L2) -> Packets (L3) -> Segments (L4) -> Data (L5-L7).",
    "examTrap": "BPSC tests PDU hierarchy regularly. Remember the acronym 'Please Do Not Throw Sausage Pizza Away' (Physical to Application).",
    "conceptSummary": "Each OSI layer encapsulates data into a specific PDU format. Transport layer adds port headers to form Segments, which are passed down to Network layer to become Packets.",
    "relatedConcepts": [
        "Layer 4 PDU",
        "TCP Segment",
        "UDP Datagram",
        "OSI Encapsulation"
    ],
    "difficulty": "Easy",
    "bpscImportance": "High"
}
  },
  {
    id: 5,
    category: "OSI Model",
    question: "Which PDU belongs to the Network Layer?",
    options: ["Segment", "Frame", "Packet", "Bit"],
    answerIndex: 2,
    explanation: {
    "correctReason": "At the Network Layer (Layer 3), data units are encapsulated into Packets containing source and destination IP addresses.",
    "optionReasons": {
        "A": "Segment is the PDU of the Transport Layer (Layer 4).",
        "B": "Frame is the PDU of the Data Link Layer (Layer 2).",
        "C": "Packet is correct as the Network Layer PDU.",
        "D": "Bit is the PDU of the Physical Layer (Layer 1)."
    },
    "memoryTip": "Layer 3 = IP = Packet.",
    "examTrap": "Do not confuse Layer 3 Packets with Layer 2 Frames. Routers route Packets; Switches switch Frames.",
    "conceptSummary": "Network Layer receives segments from Transport Layer, prepends IP headers (containing logical source and destination IP addresses, TTL, protocol field) to create Packets.",
    "relatedConcepts": [
        "Network Layer PDU",
        "IP Packet",
        "IP Header",
        "Routing PDU"
    ],
    "difficulty": "Easy",
    "bpscImportance": "High"
}
  },
  {
    id: 6,
    category: "OSI Model",
    question: "Which OSI layer is responsible for MAC addressing?",
    options: ["Network Layer", "Data Link Layer", "Physical Layer", "Session Layer"],
    answerIndex: 1,
    explanation: {
    "correctReason": "MAC (Media Access Control) addresses are 48-bit hardware addresses baked into Network Interface Cards (NICs), operating at the Data Link Layer (Layer 2).",
    "optionReasons": {
        "A": "Network Layer operates using 32-bit (IPv4) or 128-bit (IPv6) logical IP addresses.",
        "B": "Data Link Layer is correct because MAC addressing resides in the MAC sublayer of Layer 2.",
        "C": "Physical Layer transmits raw electrical signals and has no address evaluation logic.",
        "D": "Session Layer manages session tokens and dialogue control, operating above network addressing."
    },
    "memoryTip": "MAC = Physical Hardware Address = Data Link Layer (Layer 2).",
    "examTrap": "Remember that MAC address is 48 bits (6 bytes) written in hexadecimal format (e.g., 00:1A:2B:3C:4D:5E).",
    "conceptSummary": "The Data Link Layer is divided into two sublayers: LLC (Logical Link Control) and MAC (Media Access Control). MAC handles node identification on a local ethernet segment.",
    "relatedConcepts": [
        "MAC Address",
        "Data Link Sublayers",
        "NIC Hardware Address",
        "Layer 2 Addressing"
    ],
    "difficulty": "Easy",
    "bpscImportance": "High"
}
  },
  {
    id: 7,
    category: "OSI Model",
    question: "Which OSI layer establishes, manages, and terminates communication sessions?",
    options: ["Session Layer", "Network Layer", "Presentation Layer", "Transport Layer"],
    answerIndex: 0,
    explanation: {
    "correctReason": "The Session Layer (Layer 5) establishes, manages, synchronizes, and terminates session connections between local and remote application processes.",
    "optionReasons": {
        "A": "Session Layer is correct as it handles dialogue control, checkpoints, and session teardowns.",
        "B": "Network Layer routes IP packets across network pathways.",
        "C": "Presentation Layer formats, encrypts, and compresses data.",
        "D": "Transport Layer ensures reliable end-to-end transport and flow control."
    },
    "memoryTip": "Session Layer = Dialogue Control & Checkpoints.",
    "examTrap": "Session layer handles half-duplex / full-duplex session synchronization checkpoints so downloads can resume after interruption.",
    "conceptSummary": "Session Layer allows two applications on different computers to establish, use, and end a connection called a session. It maintains session checkpoints for recovery.",
    "relatedConcepts": [
        "Session Layer",
        "Dialogue Control",
        "Session Synchronization",
        "OSI Layer 5"
    ],
    "difficulty": "Medium",
    "bpscImportance": "High"
}
  },
  {
    id: 8,
    category: "OSI Model",
    question: "Data encryption is mainly performed at which OSI layer?",
    options: ["Application", "Presentation", "Session", "Transport"],
    answerIndex: 1,
    explanation: {
    "correctReason": "The Presentation Layer (Layer 6) formats, translates, compresses, and encrypts/decrypts data so that applications receive data in a readable syntax.",
    "optionReasons": {
        "A": "Application Layer directly interacts with end-user software applications like web browsers.",
        "B": "Presentation Layer is correct because data encryption (SSL/TLS syntax), compression, and translation occur here.",
        "C": "Session Layer maintains session checkpoints and active connection state.",
        "D": "Transport Layer manages port numbers, segmentation, and reassembly."
    },
    "memoryTip": "Presentation Layer = Syntax, Encryption, Compression, Data Format.",
    "examTrap": "SSL/TLS data encryption and image formatting (JPEG, GIF, ASCII translation) belong to the Presentation Layer.",
    "conceptSummary": "Presentation Layer acts as the data translator for the network. It handles syntax formatting, data compression (ZIP, JPEG), and security encryption/decryption (SSL/TLS).",
    "relatedConcepts": [
        "Data Encryption",
        "Presentation Layer",
        "SSL/TLS Syntax",
        "Data Compression"
    ],
    "difficulty": "Easy",
    "bpscImportance": "High"
}
  },
  {
    id: 9,
    category: "OSI Model",
    question: "Which layer translates different data formats between systems?",
    options: ["Session", "Presentation", "Transport", "Data Link"],
    answerIndex: 1,
    explanation: {
    "correctReason": "The Presentation Layer handles code conversion and data translation between different computer syntax systems (such as ASCII to EBCDIC or little-endian to big-endian).",
    "optionReasons": {
        "A": "Session Layer handles session setup and dialogue management.",
        "B": "Presentation Layer is correct because it ensures syntax compatibility between heterogeneous systems.",
        "C": "Transport Layer provides port-to-port multiplexing and error control.",
        "D": "Data Link Layer manages framing and MAC address identification."
    },
    "memoryTip": "Presentation = Translator between different machine data formats.",
    "examTrap": "Questions asking about 'EBCDIC to ASCII conversion' or 'character encoding translation' point directly to Presentation Layer.",
    "conceptSummary": "Presentation layer ensures that information sent by the application layer of one system is readable by the application layer of another system via common transfer syntax.",
    "relatedConcepts": [
        "Character Encoding",
        "Data Translation",
        "Syntax Standard",
        "OSI Layer 6"
    ],
    "difficulty": "Medium",
    "bpscImportance": "High"
}
  },
  {
    id: 10,
    category: "OSI Model",
    question: "Which layer provides services directly to end-user applications?",
    options: ["Presentation", "Session", "Application", "Transport"],
    answerIndex: 2,
    explanation: {
    "correctReason": "The Application Layer (Layer 7) serves as the window for users and application processes to access network services (e.g., HTTP, FTP, SMTP, DNS).",
    "optionReasons": {
        "A": "Presentation Layer formats and encrypts data for application consumption.",
        "B": "Session Layer maintains session connections between software applications.",
        "C": "Application Layer is correct as it provides protocols directly utilized by end-user network applications.",
        "D": "Transport Layer manages port numbers, segmentation, and reassembly."
    },
    "memoryTip": "Application Layer = User Application Protocols (HTTP, FTP, SMTP, DNS).",
    "examTrap": "Note that Application Layer does NOT mean the user program itself (like Chrome browser), but rather the protocol services (HTTP/HTTPS) that Chrome uses.",
    "conceptSummary": "Application Layer is the top layer in the OSI model. It supplies network services directly to user applications, handling HTTP web browsing, FTP file transfer, and SMTP email.",
    "relatedConcepts": [
        "Application Layer",
        "Network Protocols",
        "HTTP/FTP/SMTP",
        "OSI Layer 7"
    ],
    "difficulty": "Easy",
    "bpscImportance": "High"
}
  },
  {
    id: 11,
    category: "OSI Model",
    question: "Which layer is mainly responsible for routing packets?",
    options: ["Data Link", "Transport", "Network", "Session"],
    answerIndex: 2,
    explanation: "Network Layer selects optimal routes and forwards IP packets across subnets."
  },
  {
    id: 12,
    category: "OSI Model",
    question: "Which device primarily works at the Network Layer?",
    options: ["Switch", "Hub", "Router", "Repeater"],
    answerIndex: 2,
    explanation: "Routers forward packets using IP addresses at Network Layer 3."
  },
  {
    id: 13,
    category: "OSI Model",
    question: "Which device mainly operates at the Data Link Layer?",
    options: ["Router", "Switch", "Repeater", "Modem"],
    answerIndex: 1,
    explanation: "Standard Layer-2 Switches forward frames using MAC addresses."
  },
  {
    id: 14,
    category: "OSI Model",
    question: "Which device only regenerates signals?",
    options: ["Router", "Switch", "Repeater", "Bridge"],
    answerIndex: 2,
    explanation: "Repeaters work at Layer 1 (Physical) to amplify or regenerate signals to extend cable reach."
  },
  {
    id: 15,
    category: "OSI Model",
    question: "Which OSI layer ensures reliable end-to-end communication?",
    options: ["Network", "Transport", "Session", "Data Link"],
    answerIndex: 1,
    explanation: "Transport Layer (Layer 4) handles end-to-end error checking, flow control, and segmentation."
  },
  {
    id: 16,
    category: "OSI Model",
    question: "Error detection using CRC is mainly performed at:",
    options: ["Network", "Data Link", "Transport", "Session"],
    answerIndex: 1,
    explanation: "Cyclic Redundancy Check (CRC) is appended to the Frame Check Sequence (FCS) at Data Link Layer."
  },
  {
    id: 17,
    category: "OSI Model",
    question: "Which OSI layer is closest to the user?",
    options: ["Physical", "Application", "Presentation", "Session"],
    answerIndex: 1,
    explanation: "Application Layer (Layer 7) interacts directly with software applications used by humans."
  },
  {
    id: 18,
    category: "OSI Model",
    question: "Which layer is closest to the transmission medium?",
    options: ["Network", "Physical", "Data Link", "Session"],
    answerIndex: 1,
    explanation: "Physical Layer (Layer 1) interfaces directly with copper cables, optical fibers, or wireless signals."
  },
  {
    id: 19,
    category: "OSI Model",
    question: "Which layer performs flow control between directly connected devices?",
    options: ["Data Link Layer", "Application Layer", "Network Layer", "Presentation Layer"],
    answerIndex: 0,
    explanation: "Data Link Layer manages node-to-node flow control across a physical link."
  },
  {
    id: 20,
    category: "OSI Model",
    question: "Which layer is responsible for process-to-process communication?",
    options: ["Data Link", "Network", "Transport", "Physical"],
    answerIndex: 2,
    explanation: "Transport Layer uses port numbers to deliver data to specific software processes on target hosts."
  },
  {
    id: 21,
    category: "OSI Model",
    question: "Which layer uses port numbers?",
    options: ["Network", "Transport", "Data Link", "Physical"],
    answerIndex: 1,
    explanation: "Transport Layer protocols (TCP and UDP) specify source and destination port numbers."
  },
  {
    id: 22,
    category: "OSI Model",
    question: "Which OSI layer receives segments and converts them into packets?",
    options: ["Transport", "Network", "Data Link", "Session"],
    answerIndex: 1,
    explanation: "Network Layer accepts segments from Transport Layer and encapsulates them into IP Packets."
  },
  {
    id: 23,
    category: "OSI Model",
    question: "Which OSI layer receives packets and converts them into frames?",
    options: ["Network", "Data Link", "Physical", "Session"],
    answerIndex: 1,
    explanation: "Data Link Layer accepts packets from Network Layer and encapsulates them into Frames."
  },
  {
    id: 24,
    category: "OSI Model",
    question: "Which OSI layer transmits bits over the medium?",
    options: ["Data Link", "Physical", "Session", "Presentation"],
    answerIndex: 1,
    explanation: "Physical Layer converts frames/bytes into raw bit signals transmitted over physical channels."
  },
  {
    id: 25,
    category: "OSI Model",
    question: "Which OSI layer is responsible for dialogue control?",
    options: ["Session", "Presentation", "Network", "Data Link"],
    answerIndex: 0,
    explanation: "Session Layer controls dialogue modes (simplex, half-duplex, or full-duplex) between applications."
  },
  {
    id: 26,
    category: "OSI Model",
    question: "Which OSI layer compresses data before transmission?",
    options: ["Application", "Presentation", "Session", "Network"],
    answerIndex: 1,
    explanation: "Presentation Layer performs data compression to reduce bandwidth usage."
  },
  {
    id: 27,
    category: "OSI Model",
    question: "Which layer hides network details from application programs?",
    options: ["Application", "Physical", "Network", "Data Link"],
    answerIndex: 0,
    explanation: "Application Layer abstracts networking mechanics so end-user apps don't need to manipulate low-level sockets manually."
  },
  {
    id: 28,
    category: "OSI Model",
    question: "Which PDU belongs to the Data Link Layer?",
    options: ["Bit", "Segment", "Frame", "Packet"],
    answerIndex: 2,
    explanation: "Data Link PDU = Frame."
  },
  {
    id: 29,
    category: "OSI Model",
    question: "Which PDU belongs to the Physical Layer?",
    options: ["Frame", "Packet", "Segment", "Bit"],
    answerIndex: 3,
    explanation: "Physical PDU = Bit."
  },
  {
    id: 30,
    category: "OSI Model",
    question: "Which OSI layer breaks large messages into smaller units?",
    options: ["Presentation", "Transport", "Network", "Session"],
    answerIndex: 1,
    explanation: "Transport Layer performs segmentation on large message streams."
  },
  {
    id: 31,
    category: "OSI Model",
    question: "Which layer reassembles segments into the original message?",
    options: ["Transport", "Data Link", "Session", "Network"],
    answerIndex: 0,
    explanation: "Transport Layer at receiving end uses sequence numbers to reassemble segments."
  },
  {
    id: 32,
    category: "OSI Model",
    question: "Which layer is responsible for path selection?",
    options: ["Data Link", "Network", "Session", "Presentation"],
    answerIndex: 1,
    explanation: "Network Layer determines optimal paths using routing protocols (OSPF, BGP, RIP)."
  },
  {
    id: 33,
    category: "OSI Model",
    question: "A switch forwards data based on:",
    options: ["IP Address", "MAC Address", "Port Number", "URL"],
    answerIndex: 1,
    explanation: "Layer-2 Switches maintain a MAC Address Table to switch frames to destination ports."
  },
  {
    id: 34,
    category: "OSI Model",
    question: "A router forwards packets based on:",
    options: ["MAC Address", "IP Address", "Port Number", "Hostname"],
    answerIndex: 1,
    explanation: "Routers examine destination IP addresses in packet headers."
  },
  {
    id: 35,
    category: "OSI Model",
    question: "Which layer identifies destination applications?",
    options: ["Physical", "Transport", "Network", "Session"],
    answerIndex: 1,
    explanation: "Transport Layer port numbers identify which specific application receives the segment."
  },
  {
    id: 36,
    category: "OSI Model",
    question: "Which OSI layer communicates with the corresponding layer on another host?",
    options: ["Peer Layer", "Lower Layer", "Physical Layer", "Adjacent Layer"],
    answerIndex: 0,
    explanation: "Logical horizontal communication occurs between Peer Layers across two network hosts."
  },
  {
    id: 37,
    category: "OSI Model",
    question: "Encapsulation occurs as data moves:",
    options: ["Up the OSI model", "Down the OSI model", "Randomly", "Horizontally"],
    answerIndex: 1,
    explanation: "As data travels down OSI layers (7 to 1), each layer adds its control header (encapsulation)."
  },
  {
    id: 38,
    category: "OSI Model",
    question: "Decapsulation occurs as data moves:",
    options: ["Down the OSI model", "Across the network", "Up the OSI model", "Horizontally"],
    answerIndex: 2,
    explanation: "On the receiving device, data moves up OSI layers (1 to 7), stripping headers at each layer (decapsulation)."
  },
  {
    id: 39,
    category: "OSI Model",
    question: "Which layer is responsible for adding IP headers?",
    options: ["Data Link", "Network", "Session", "Presentation"],
    answerIndex: 1,
    explanation: "Network Layer encapsulates segments into packets by prepending the IP header."
  },
  {
    id: 40,
    category: "OSI Model",
    question: "Which layer adds MAC addresses to transmitted data?",
    options: ["Physical", "Data Link", "Network", "Transport"],
    answerIndex: 1,
    explanation: "Data Link Layer prepends destination and source MAC addresses in the frame header."
  },

  // --- TCP/IP Model (41–50) ---
  {
    id: 41,
    category: "TCP/IP Model",
    question: "The TCP/IP model contains:",
    options: ["3 layers", "4 layers", "5 layers", "7 layers"],
    answerIndex: 1,
    explanation: "The standard DoD TCP/IP model comprises 4 layers: Application, Transport, Internet, and Network Access."
  },
  {
    id: 42,
    category: "TCP/IP Model",
    question: "Which TCP/IP layer corresponds to the OSI Network Layer?",
    options: ["Internet Layer", "Application Layer", "Transport Layer", "Network Access Layer"],
    answerIndex: 0,
    explanation: "The TCP/IP Internet Layer corresponds directly to Layer 3 (Network Layer) of the OSI model."
  },
  {
    id: 43,
    category: "TCP/IP Model",
    question: "Which TCP/IP layer combines OSI Physical and Data Link layers?",
    options: ["Application", "Internet", "Network Access", "Session"],
    answerIndex: 2,
    explanation: "Network Access Layer (or Link Layer) covers OSI Layers 1 and 2."
  },
  {
    id: 44,
    category: "TCP/IP Model",
    question: "Which TCP/IP layer combines Application, Presentation, and Session layers?",
    options: ["Internet", "Transport", "Application", "Network Access"],
    answerIndex: 2,
    explanation: "The TCP/IP Application layer handles functions of OSI Layers 5, 6, and 7."
  },
  {
    id: 45,
    category: "TCP/IP Model",
    question: "IP protocol belongs to which TCP/IP layer?",
    options: ["Transport", "Internet", "Application", "Network Access"],
    answerIndex: 1,
    explanation: "Internet Protocol (IP) operates at the Internet Layer."
  },
  {
    id: 46,
    category: "TCP/IP Model",
    question: "TCP belongs to which TCP/IP layer?",
    options: ["Internet", "Transport", "Application", "Network Access"],
    answerIndex: 1,
    explanation: "Transmission Control Protocol (TCP) operates at the Transport Layer."
  },
  {
    id: 47,
    category: "TCP/IP Model",
    question: "Ethernet operates at which TCP/IP layer?",
    options: ["Application", "Internet", "Network Access", "Transport"],
    answerIndex: 2,
    explanation: "Ethernet specifications govern hardware framing and physical signaling at Network Access Layer."
  },
  {
    id: 48,
    category: "TCP/IP Model",
    question: "Which TCP/IP layer is responsible for routing?",
    options: ["Internet", "Application", "Transport", "Network Access"],
    answerIndex: 0,
    explanation: "Routing IP packets between networks is managed by the Internet Layer."
  },
  {
    id: 49,
    category: "TCP/IP Model",
    question: "Which TCP/IP layer provides communication between applications?",
    options: ["Internet", "Transport", "Network Access", "Physical"],
    answerIndex: 1,
    explanation: "Transport Layer facilitates process-to-process communication between host applications."
  },
  {
    id: 50,
    category: "TCP/IP Model",
    question: "Which protocol suite is the foundation of the modern Internet?",
    options: ["OSI", "TCP/IP", "Novell NetWare", "AppleTalk"],
    answerIndex: 1,
    explanation: "TCP/IP protocol suite is the global standard powering the Internet."
  },

  // --- IPv4 Addressing (51–70) ---
  {
    id: 51,
    category: "IPv4 Addressing",
    question: "An IPv4 address consists of:",
    options: ["16 bits", "32 bits", "64 bits", "128 bits"],
    answerIndex: 1,
    explanation: "IPv4 addresses are 32-bit binary numbers divided into 4 octets."
  },
  {
    id: 52,
    category: "IPv4 Addressing",
    question: "Which IPv4 class provides the largest number of host addresses per network?",
    options: ["Class A", "Class B", "Class C", "Class D"],
    answerIndex: 0,
    explanation: "Class A uses 24 bits for hosts, allowing 2²⁴ − 2 = 16,777,214 hosts per network."
  },
  {
    id: 53,
    category: "IPv4 Addressing",
    question: "Which IP address belongs to Class A?",
    options: ["10.5.6.7", "172.20.1.1", "192.168.1.1", "224.0.0.1"],
    answerIndex: 0,
    explanation: "Class A IP addresses have a first octet in the range 1–126 (e.g. 10.5.6.7)."
  },
  {
    id: 54,
    category: "IPv4 Addressing",
    question: "Which IP address belongs to Class B?",
    options: ["11.0.0.1", "150.10.10.10", "200.10.10.10", "225.1.1.1"],
    answerIndex: 1,
    explanation: "Class B first octet range is 128–191 (150.10.10.10 falls in Class B)."
  },
  {
    id: 55,
    category: "IPv4 Addressing",
    question: "Which IP address belongs to Class C?",
    options: ["192.168.10.20", "172.16.1.1", "120.10.1.1", "15.1.1.1"],
    answerIndex: 0,
    explanation: "Class C first octet range is 192–223 (192.168.10.20 is Class C)."
  },
  {
    id: 56,
    category: "IPv4 Addressing",
    question: "Which IP class is reserved for multicast?",
    options: ["Class A", "Class B", "Class C", "Class D"],
    answerIndex: 3,
    explanation: "Class D addresses (224.0.0.0 to 239.255.255.255) are reserved for multicast group traffic."
  },
  {
    id: 57,
    category: "IPv4 Addressing",
    question: "Which IP class is reserved for experimental purposes?",
    options: ["Class C", "Class D", "Class E", "Class B"],
    answerIndex: 2,
    explanation: "Class E (240.0.0.0 to 255.255.255.255) is reserved for research and experimental use."
  },
  {
    id: 58,
    category: "IPv4 Addressing",
    question: "Which address is a private IP?",
    options: ["8.8.8.8", "172.31.10.1", "193.1.1.1", "150.100.1.1"],
    answerIndex: 1,
    explanation: "RFC 1918 defines 172.16.0.0 to 172.31.255.255 as private Class B addresses."
  },
  {
    id: 59,
    category: "IPv4 Addressing",
    question: "Which of the following is NOT a private IP address?",
    options: ["10.1.1.1", "172.20.10.10", "192.168.1.10", "11.1.1.1"],
    answerIndex: 3,
    explanation: "11.1.1.1 is a globally routable public IP address."
  },
  {
    id: 60,
    category: "IPv4 Addressing",
    question: "Which range represents private Class C addresses?",
    options: [
      "172.16.0.0–172.31.255.255",
      "192.168.0.0–192.168.255.255",
      "10.0.0.0–10.255.255.255",
      "169.254.0.0–169.254.255.255"
    ],
    answerIndex: 1,
    explanation: "192.168.0.0/16 is the RFC 1918 private address space for Class C."
  },
  {
    id: 61,
    category: "IPv4 Addressing",
    question: "Which range represents private Class B addresses?",
    options: [
      "172.16.0.0–172.31.255.255",
      "192.168.0.0–192.168.255.255",
      "10.0.0.0–10.255.255.255",
      "224.0.0.0–239.255.255.255"
    ],
    answerIndex: 0,
    explanation: "172.16.0.0 to 172.31.255.255 represents private Class B range."
  },
  {
    id: 62,
    category: "IPv4 Addressing",
    question: "Which range represents private Class A addresses?",
    options: [
      "10.0.0.0–10.255.255.255",
      "11.0.0.0–11.255.255.255",
      "172.16.0.0–172.31.255.255",
      "192.168.0.0–192.168.255.255"
    ],
    answerIndex: 0,
    explanation: "10.0.0.0/8 represents the private Class A address range."
  },
  {
    id: 63,
    category: "IPv4 Addressing",
    question: "Which IP address is the loopback address?",
    options: ["127.0.0.1", "169.254.1.1", "192.168.1.1", "255.255.255.255"],
    answerIndex: 0,
    explanation: "127.0.0.1 (part of 127.0.0.0/8) tests local internal TCP/IP software stack without sending traffic out."
  },
  {
    id: 64,
    category: "IPv4 Addressing",
    question: "Which IP address is used for limited broadcast?",
    options: ["255.255.255.255", "0.0.0.0", "127.0.0.1", "224.0.0.1"],
    answerIndex: 0,
    explanation: "255.255.255.255 sends data to all hosts on the local network segment without being forwarded by routers."
  },
  {
    id: 65,
    category: "IPv4 Addressing",
    question: "Which address represents 'this host on this network' before obtaining an IP?",
    options: ["255.255.255.255", "0.0.0.0", "127.0.0.1", "224.0.0.1"],
    answerIndex: 1,
    explanation: "0.0.0.0 represents an unassigned source host requesting an IP via DHCP."
  },
  {
    id: 66,
    category: "IPv4 Addressing",
    question: "APIPA addresses belong to:",
    options: ["169.254.0.0/16", "172.16.0.0/12", "10.0.0.0/8", "192.168.0.0/16"],
    answerIndex: 0,
    explanation: "Automatic Private IP Addressing (APIPA) assigns IPs from 169.254.0.0/16 when DHCP fails."
  },
  {
    id: 67,
    category: "IPv4 Addressing",
    question: "If a host receives an APIPA address, it most likely means:",
    options: ["DNS failure", "DHCP server unavailable", "FTP failure", "HTTP timeout"],
    answerIndex: 1,
    explanation: "Clients self-assign APIPA address (169.254.x.x) when a DHCP server cannot be reached."
  },
  {
    id: 68,
    category: "IPv4 Addressing",
    question: "Which address identifies a specific device on a network?",
    options: ["Network Address", "Broadcast Address", "Host Address", "Multicast Address"],
    answerIndex: 2,
    explanation: "Host Address uniquely identifies a single device interface."
  },
  {
    id: 69,
    category: "IPv4 Addressing",
    question: "Which address identifies an entire network?",
    options: ["Host Address", "Network Address", "Gateway Address", "MAC Address"],
    answerIndex: 1,
    explanation: "Network Address has all host bits set to 0 and represents the subnet."
  },
  {
    id: 70,
    category: "IPv4 Addressing",
    question: "Which address sends data to every host within the subnet?",
    options: ["Host Address", "Network Address", "Broadcast Address", "Gateway Address"],
    answerIndex: 2,
    explanation: "Subnet Broadcast Address has all host bits set to 1."
  },

  // --- Subnetting (71–100) ---
  {
    id: 71,
    category: "Subnetting",
    question: "What is the default subnet mask of Class A?",
    options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
    answerIndex: 0,
    explanation: "Class A uses 8 network bits (/8), giving mask 255.0.0.0."
  },
  {
    id: 72,
    category: "Subnetting",
    question: "What is the default subnet mask of Class B?",
    options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.192"],
    answerIndex: 1,
    explanation: "Class B uses 16 network bits (/16), giving mask 255.255.0.0."
  },
  {
    id: 73,
    category: "Subnetting",
    question: "What is the default subnet mask of Class C?",
    options: ["255.255.255.0", "255.255.0.0", "255.0.0.0", "255.255.255.224"],
    answerIndex: 0,
    explanation: "Class C uses 24 network bits (/24), giving mask 255.255.255.0."
  },
  {
    id: 74,
    category: "Subnetting",
    question: "CIDR notation '/24' represents:",
    options: ["255.255.255.0", "255.255.0.0", "255.0.0.0", "255.255.255.128"],
    answerIndex: 0,
    explanation: "/24 means 24 contiguous ones in binary = 255.255.255.0."
  },
  {
    id: 75,
    category: "Subnetting",
    question: "CIDR notation '/16' represents:",
    options: ["255.255.255.0", "255.255.0.0", "255.0.0.0", "255.255.255.192"],
    answerIndex: 1,
    explanation: "/16 means 16 ones in binary = 255.255.0.0."
  },
  {
    id: 76,
    category: "Subnetting",
    question: "CIDR notation '/8' represents:",
    options: ["255.255.255.0", "255.255.0.0", "255.0.0.0", "255.255.255.248"],
    answerIndex: 2,
    explanation: "/8 means 8 ones in binary = 255.0.0.0."
  },
  {
    id: 77,
    category: "Subnetting",
    question: "Which subnet mask provides the largest number of hosts?",
    options: ["/30", "/29", "/24", "/16"],
    answerIndex: 3,
    explanation: "/16 leaves 16 host bits (65,534 usable hosts), larger than /24 (254 hosts)."
  },
  {
    id: 78,
    category: "Subnetting",
    question: "Increasing the subnet prefix from /24 to /26 will:",
    options: ["Increase hosts per subnet", "Decrease hosts per subnet", "Leave hosts unchanged", "Double the network size"],
    answerIndex: 1,
    explanation: "Borrowing bits for prefix reduces remaining host bits from 8 (254 hosts) down to 6 (62 hosts)."
  },
  {
    id: 79,
    category: "Subnetting",
    question: "Borrowing host bits creates:",
    options: ["More hosts", "More subnets", "Larger packets", "Faster routing"],
    answerIndex: 1,
    explanation: "Converting host bits into network bits creates additional logical subnets (2ⁿ)."
  },
  {
    id: 80,
    category: "Subnetting",
    question: "Which subnet mask is commonly used for point-to-point links?",
    options: ["/24", "/16", "/30", "/8"],
    answerIndex: 2,
    explanation: "/30 prefix leaves 2 host bits (2² − 2 = 2 usable host IPs), perfect for point-to-point router links."
  },
  {
    id: 81,
    category: "Subnetting",
    question: "Which subnet mask allows only two usable host addresses?",
    options: ["/24", "/26", "/30", "/20"],
    answerIndex: 2,
    explanation: "/30 mask provides 4 total IPs (1 network, 1 broadcast, 2 usable host addresses)."
  },
  {
    id: 82,
    category: "Subnetting",
    question: "Which of the following is a valid subnet mask?",
    options: ["255.255.255.240", "255.0.255.0", "255.255.0.255", "255.255.255.250"],
    answerIndex: 0,
    explanation: "255.255.255.240 consists of contiguous binary 1s (11111111.11111111.11111111.11110000)."
  },
  {
    id: 83,
    category: "Subnetting",
    question: "Which subnet mask corresponds to /25?",
    options: ["255.255.255.128", "255.255.255.192", "255.255.255.224", "255.255.255.240"],
    answerIndex: 0,
    explanation: "/25 = 255.255.255.128 (10000000 in last octet)."
  },
  {
    id: 84,
    category: "Subnetting",
    question: "Which subnet mask corresponds to /26?",
    options: ["255.255.255.128", "255.255.255.192", "255.255.255.224", "255.255.255.240"],
    answerIndex: 1,
    explanation: "/26 = 255.255.255.192 (11000000 in last octet)."
  },
  {
    id: 85,
    category: "Subnetting",
    question: "Which subnet mask corresponds to /27?",
    options: ["255.255.255.192", "255.255.255.224", "255.255.255.240", "255.255.255.248"],
    answerIndex: 1,
    explanation: "/27 = 255.255.255.224 (11100000 in last octet)."
  },
  {
    id: 86,
    category: "Subnetting",
    question: "Which subnet mask corresponds to /28?",
    options: ["255.255.255.224", "255.255.255.240", "255.255.255.248", "255.255.255.252"],
    answerIndex: 1,
    explanation: "/28 = 255.255.255.240 (11110000 in last octet)."
  },
  {
    id: 87,
    category: "Subnetting",
    question: "Which subnet mask corresponds to /29?",
    options: ["255.255.255.248", "255.255.255.240", "255.255.255.252", "255.255.255.224"],
    answerIndex: 0,
    explanation: "/29 = 255.255.255.248 (11111000 in last octet)."
  },
  {
    id: 88,
    category: "Subnetting",
    question: "Which subnet mask corresponds to /30?",
    options: ["255.255.255.248", "255.255.255.252", "255.255.255.240", "255.255.255.224"],
    answerIndex: 1,
    explanation: "/30 = 255.255.255.252 (11111100 in last octet)."
  },
  {
    id: 89,
    category: "Subnetting",
    question: "A /24 network contains how many total IP addresses?",
    options: ["128", "256", "254", "512"],
    answerIndex: 1,
    explanation: "/24 leaves 8 host bits = 2⁸ = 256 total IP addresses (254 usable)."
  },
  {
    id: 90,
    category: "Subnetting",
    question: "A /30 network contains how many total IP addresses?",
    options: ["2", "4", "8", "16"],
    answerIndex: 1,
    explanation: "/30 leaves 2 host bits = 2² = 4 total IP addresses."
  },
  {
    id: 91,
    category: "Subnetting",
    question: "Which subnet has the fewest usable hosts?",
    options: ["/24", "/25", "/29", "/30"],
    answerIndex: 3,
    explanation: "/30 has only 2 usable hosts, fewer than /29 (6 hosts)."
  },
  {
    id: 92,
    category: "Subnetting",
    question: "Which subnet provides more usable hosts than /27?",
    options: ["/28", "/29", "/26", "/30"],
    answerIndex: 2,
    explanation: "/26 provides 62 usable hosts, which is more than /27 (30 usable hosts)."
  },
  {
    id: 93,
    category: "Subnetting",
    question: "What is the primary purpose of subnetting?",
    options: ["Increase Internet speed", "Divide a network into smaller logical networks", "Replace routers", "Encrypt packets"],
    answerIndex: 1,
    explanation: "Subnetting breaks large broadcast domains into smaller, manageable, efficient subnets."
  },
  {
    id: 94,
    category: "Subnetting",
    question: "Which device uses subnet masks to determine whether a destination is local or remote?",
    options: ["Switch", "Router", "Host", "Hub"],
    answerIndex: 2,
    explanation: "The sending Host applies its subnet mask to check if target IP is on local LAN or requires Default Gateway."
  },
  {
    id: 95,
    category: "Subnetting",
    question: "Which of the following is NOT used in subnet calculations?",
    options: ["IP Address", "Subnet Mask", "Prefix Length", "MAC Address"],
    answerIndex: 3,
    explanation: "Subnet calculations deal purely with Layer 3 IP parameters, not Layer 2 MAC addresses."
  },
  {
    id: 96,
    category: "Subnetting",
    question: "Which notation is another name for prefix length?",
    options: ["CIDR", "CRC", "ARP", "NAT"],
    answerIndex: 0,
    explanation: "Classless Inter-Domain Routing (CIDR) slash notation (e.g. /24) specifies prefix length."
  },
  {
    id: 97,
    category: "Subnetting",
    question: "Which notation represents 255.255.255.224?",
    options: ["/25", "/26", "/27", "/28"],
    answerIndex: 2,
    explanation: "255.255.255.224 = 24 + 3 = 27 network bits (/27)."
  },
  {
    id: 98,
    category: "Subnetting",
    question: "Which notation represents 255.255.255.248?",
    options: ["/28", "/29", "/30", "/31"],
    answerIndex: 1,
    explanation: "255.255.255.248 = 24 + 5 = 29 network bits (/29)."
  },
  {
    id: 99,
    category: "Subnetting",
    question: "Which notation represents 255.255.255.252?",
    options: ["/29", "/30", "/31", "/32"],
    answerIndex: 1,
    explanation: "255.255.255.252 = 24 + 6 = 30 network bits (/30)."
  },
  {
    id: 100,
    category: "Subnetting",
    question: "Which statement about subnetting is correct?",
    options: [
      "It increases the number of bits in an IPv4 address.",
      "It borrows host bits to create additional subnets.",
      "It converts IPv4 into IPv6.",
      "It removes the need for routers."
    ],
    answerIndex: 1,
    explanation: "Subnetting borrows bits from host field to expand network/subnet identifier bits."
  },

  // --- TCP vs UDP (101–130) ---
  {
    id: 101,
    category: "TCP vs UDP",
    question: "Which transport protocol establishes a connection before transmitting data?",
    options: ["UDP", "IP", "TCP", "ICMP"],
    answerIndex: 2,
    explanation: "TCP is a connection-oriented protocol requiring a 3-way handshake."
  },
  {
    id: 102,
    category: "TCP vs UDP",
    question: "Which protocol is known as a connectionless protocol?",
    options: ["TCP", "UDP", "HTTP", "FTP"],
    answerIndex: 1,
    explanation: "UDP sends packets immediately without establishing a prior connection."
  },
  {
    id: 103,
    category: "TCP vs UDP",
    question: "Which protocol guarantees reliable data delivery?",
    options: ["UDP", "TCP", "IP", "ARP"],
    answerIndex: 1,
    explanation: "TCP guarantees delivery via ACKs, sequence numbers, and retransmissions."
  },
  {
    id: 104,
    category: "TCP vs UDP",
    question: "Which protocol does NOT retransmit lost packets?",
    options: ["TCP", "UDP", "FTP", "HTTP"],
    answerIndex: 1,
    explanation: "UDP does not track lost datagrams or attempt retransmissions."
  },
  {
    id: 105,
    category: "TCP vs UDP",
    question: "Which protocol is generally faster because it has less overhead?",
    options: ["TCP", "UDP", "HTTP", "FTP"],
    answerIndex: 1,
    explanation: "UDP header size is only 8 bytes (vs TCP's 20+ bytes) and lacks connection state management."
  },
  {
    id: 106,
    category: "TCP vs UDP",
    question: "Which application commonly uses UDP due to its real-time requirements?",
    options: ["Email", "Live video streaming", "File transfer", "Web browsing"],
    answerIndex: 1,
    explanation: "Live video streaming values low latency over lost packet retransmission."
  },
  {
    id: 107,
    category: "TCP vs UDP",
    question: "Which application normally uses TCP?",
    options: ["DNS lookup", "Web browsing", "Online voice call", "Live gaming"],
    answerIndex: 1,
    explanation: "Web browsing (HTTP/HTTPS) requires complete, error-free HTML data via TCP."
  },
  {
    id: 108,
    category: "TCP vs UDP",
    question: "Which protocol uses acknowledgments (ACKs)?",
    options: ["UDP", "TCP", "IP", "ICMP"],
    answerIndex: 1,
    explanation: "TCP receivers send ACK flags to confirm frame/segment delivery."
  },
  {
    id: 109,
    category: "TCP vs UDP",
    question: "Which protocol performs flow control?",
    options: ["UDP", "TCP", "ARP", "Ethernet"],
    answerIndex: 1,
    explanation: "TCP uses a Sliding Window mechanism for receiver flow control."
  },
  {
    id: 110,
    category: "TCP vs UDP",
    question: "Which protocol performs congestion control?",
    options: ["UDP", "TCP", "IP", "DHCP"],
    answerIndex: 1,
    explanation: "TCP uses slow start and congestion avoidance algorithms to prevent network overload."
  },
  {
    id: 111,
    category: "TCP vs UDP",
    question: "Which protocol ensures packets arrive in the correct order?",
    options: ["UDP", "TCP", "IP", "DNS"],
    answerIndex: 1,
    explanation: "TCP sequence numbers allow in-order reassembly at target endpoint."
  },
  {
    id: 112,
    category: "TCP vs UDP",
    question: "Which protocol has a smaller header size?",
    options: ["TCP", "UDP", "IP", "HTTP"],
    answerIndex: 1,
    explanation: "UDP header is fixed at 8 bytes, compared to TCP's minimum 20-byte header."
  },
  {
    id: 113,
    category: "TCP vs UDP",
    question: "If packet loss is acceptable but delay must be minimized, which protocol is preferred?",
    options: ["TCP", "UDP", "FTP", "SMTP"],
    answerIndex: 1,
    explanation: "UDP minimizes transmission delay since it doesn't wait for ACKs."
  },
  {
    id: 114,
    category: "TCP vs UDP",
    question: "Which protocol performs the three-way handshake?",
    options: ["UDP", "TCP", "HTTP", "ICMP"],
    answerIndex: 1,
    explanation: "TCP handshake sequence: SYN → SYN-ACK → ACK."
  },
  {
    id: 115,
    category: "TCP vs UDP",
    question: "Which protocol is preferred for transferring confidential financial records?",
    options: ["UDP", "TCP", "RTP", "DNS"],
    answerIndex: 1,
    explanation: "Financial data transfers require 100% reliable, zero-loss delivery guaranteed by TCP."
  },
  {
    id: 116,
    category: "TCP vs UDP",
    question: "DNS queries typically use:",
    options: ["TCP only", "UDP", "ICMP", "ARP"],
    answerIndex: 1,
    explanation: "Standard DNS queries use UDP port 53 for speed and small payload size."
  },
  {
    id: 117,
    category: "TCP vs UDP",
    question: "Which protocol is better suited for online multiplayer games?",
    options: ["TCP", "UDP", "FTP", "SMTP"],
    answerIndex: 1,
    explanation: "Fast position updates in online gaming prioritize low latency via UDP."
  },
  {
    id: 118,
    category: "TCP vs UDP",
    question: "Which feature increases TCP overhead?",
    options: ["No acknowledgments", "Error recovery and retransmission", "No sequencing", "Broadcast communication"],
    answerIndex: 1,
    explanation: "Managing ACK timers, sequence buffers, and retransmissions adds processing & header overhead."
  },
  {
    id: 119,
    category: "TCP vs UDP",
    question: "Which protocol is more suitable for downloading software?",
    options: ["UDP", "TCP", "RTP", "DHCP"],
    answerIndex: 1,
    explanation: "Software downloads cannot tolerate corrupted or missing bytes; TCP ensures complete fidelity."
  },
  {
    id: 120,
    category: "TCP vs UDP",
    question: "Which transport protocol assigns sequence numbers to segments?",
    options: ["UDP", "TCP", "IP", "ICMP"],
    answerIndex: 1,
    explanation: "TCP headers contain 32-bit Sequence Numbers."
  },
  {
    id: 121,
    category: "TCP vs UDP",
    question: "Which protocol is generally chosen when data integrity is more important than speed?",
    options: ["UDP", "TCP", "ARP", "Ethernet"],
    answerIndex: 1,
    explanation: "TCP prioritizes data integrity and completeness over speed."
  },
  {
    id: 122,
    category: "TCP vs UDP",
    question: "Which protocol is more appropriate for Voice over IP (VoIP)?",
    options: ["TCP", "UDP", "FTP", "SMTP"],
    answerIndex: 1,
    explanation: "VoIP relies on UDP (often over RTP) to maintain smooth real-time voice streaming."
  },
  {
    id: 123,
    category: "TCP vs UDP",
    question: "Which protocol continues transmitting even if packets are lost?",
    options: ["TCP", "UDP", "HTTP", "FTP"],
    answerIndex: 1,
    explanation: "UDP doesn't stop or retransmit when datagrams drop along the path."
  },
  {
    id: 124,
    category: "TCP vs UDP",
    question: "Which protocol requires more bandwidth due to acknowledgments?",
    options: ["UDP", "TCP", "IP", "DNS"],
    answerIndex: 1,
    explanation: "Sending ACK packets back for received data consumes additional link bandwidth."
  },
  {
    id: 125,
    category: "TCP vs UDP",
    question: "Which protocol minimizes latency by avoiding connection setup?",
    options: ["TCP", "UDP", "FTP", "SSH"],
    answerIndex: 1,
    explanation: "UDP skips round-trip connection setup delays."
  },
  {
    id: 126,
    category: "TCP vs UDP",
    question: "Which protocol is more suitable for remote shell sessions?",
    options: ["UDP", "TCP", "RTP", "DHCP"],
    answerIndex: 1,
    explanation: "SSH / Telnet interactive shell sessions require reliable TCP transport."
  },
  {
    id: 127,
    category: "TCP vs UDP",
    question: "Which protocol is preferred when every byte of data must be delivered accurately?",
    options: ["UDP", "TCP", "RTP", "ICMP"],
    answerIndex: 1,
    explanation: "TCP guarantees exact Byte-Stream accuracy."
  },
  {
    id: 128,
    category: "TCP vs UDP",
    question: "Which transport protocol provides error recovery?",
    options: ["UDP", "TCP", "ARP", "IP"],
    answerIndex: 1,
    explanation: "TCP requests retransmission of missing/damaged segments."
  },
  {
    id: 129,
    category: "TCP vs UDP",
    question: "Which protocol sacrifices reliability to achieve lower delay?",
    options: ["TCP", "UDP", "FTP", "HTTP"],
    answerIndex: 1,
    explanation: "UDP prioritizes minimal delay over packet delivery guarantees."
  },
  {
    id: 130,
    category: "TCP vs UDP",
    question: "Which statement is correct?",
    options: [
      "UDP guarantees packet delivery.",
      "TCP provides reliable, ordered communication.",
      "TCP is connectionless.",
      "UDP performs congestion control."
    ],
    answerIndex: 1,
    explanation: "TCP delivers reliable, ordered, error-checked stream communication."
  },

  // --- Router vs Switch vs Hub (131–150) ---
  {
    id: 131,
    category: "Router vs Switch vs Hub",
    question: "Which device forwards packets using IP addresses?",
    options: ["Hub", "Switch", "Router", "Repeater"],
    answerIndex: 2,
    explanation: "Routers forward Layer 3 packets using destination IP addresses."
  },
  {
    id: 132,
    category: "Router vs Switch vs Hub",
    question: "Which device forwards frames using MAC addresses?",
    options: ["Router", "Switch", "Hub", "Gateway"],
    answerIndex: 1,
    explanation: "Switches forward Layer 2 frames using hardware MAC addresses."
  },
  {
    id: 133,
    category: "Router vs Switch vs Hub",
    question: "Which device simply broadcasts incoming signals to all ports?",
    options: ["Hub", "Router", "Switch", "Bridge"],
    answerIndex: 0,
    explanation: "Hubs are non-intelligent Layer 1 devices that flood electrical signals to all connected ports."
  },
  {
    id: 134,
    category: "Router vs Switch vs Hub",
    question: "Which device separates different IP networks?",
    options: ["Hub", "Switch", "Router", "Repeater"],
    answerIndex: 2,
    explanation: "Routers connect distinct IP subnets and route between them."
  },
  {
    id: 135,
    category: "Router vs Switch vs Hub",
    question: "Which device reduces unnecessary network traffic by learning MAC addresses?",
    options: ["Hub", "Switch", "Router", "Modem"],
    answerIndex: 1,
    explanation: "Switches build a MAC table dynamically to unicast frames only to target ports."
  },
  {
    id: 136,
    category: "Router vs Switch vs Hub",
    question: "Which device operates primarily at Layer 1 of the OSI model?",
    options: ["Router", "Switch", "Hub", "Bridge"],
    answerIndex: 2,
    explanation: "Hubs operate purely at Layer 1 (Physical)."
  },
  {
    id: 137,
    category: "Router vs Switch vs Hub",
    question: "Which device creates separate collision domains for each connected port?",
    options: ["Hub", "Switch", "Repeater", "Modem"],
    answerIndex: 1,
    explanation: "Each port on a switch forms an isolated Layer 2 collision domain."
  },
  {
    id: 138,
    category: "Router vs Switch vs Hub",
    question: "Which device is essential for communication between different subnets?",
    options: ["Hub", "Router", "Switch", "Bridge"],
    answerIndex: 1,
    explanation: "Subnet-to-subnet traffic requires a Layer 3 routing device."
  },
  {
    id: 139,
    category: "Router vs Switch vs Hub",
    question: "Which device maintains a MAC address table?",
    options: ["Router", "Switch", "Hub", "Repeater"],
    answerIndex: 1,
    explanation: "Layer-2 Switches maintain a CAM / MAC address table."
  },
  {
    id: 140,
    category: "Router vs Switch vs Hub",
    question: "Which device does NOT examine destination MAC or IP addresses?",
    options: ["Hub", "Router", "Switch", "Bridge"],
    answerIndex: 0,
    explanation: "Hubs repeat raw electrical bits without inspecting link or network headers."
  },
  {
    id: 141,
    category: "Router vs Switch vs Hub",
    question: "A company has three separate LANs that need to communicate. Which device is required?",
    options: ["Hub", "Router", "Switch", "Repeater"],
    answerIndex: 1,
    explanation: "Interconnecting separate LANs requires a Router."
  },
  {
    id: 142,
    category: "Router vs Switch vs Hub",
    question: "Which device provides the best performance in a modern LAN?",
    options: ["Hub", "Switch", "Repeater", "Coaxial cable"],
    answerIndex: 1,
    explanation: "Switches provide full-duplex, high-speed dedicated bandwidth per port."
  },
  {
    id: 143,
    category: "Router vs Switch vs Hub",
    question: "Which device can connect a home network to the Internet?",
    options: ["Switch", "Router", "Hub", "Bridge"],
    answerIndex: 1,
    explanation: "A Home Router routes packets between local LAN and WAN / ISP connection."
  },
  {
    id: 144,
    category: "Router vs Switch vs Hub",
    question: "If two computers are connected through a hub, what happens when one sends data?",
    options: [
      "Only the destination receives it.",
      "All connected devices receive it.",
      "The router filters it.",
      "The switch encrypts it."
    ],
    answerIndex: 1,
    explanation: "Hubs repeat traffic out of all active ports."
  },
  {
    id: 145,
    category: "Router vs Switch vs Hub",
    question: "Which device is responsible for selecting the best path for packet delivery?",
    options: ["Hub", "Switch", "Router", "Repeater"],
    answerIndex: 2,
    explanation: "Routers inspect metrics (cost, hop count, bandwidth) to choose best paths."
  },
  {
    id: 146,
    category: "Router vs Switch vs Hub",
    question: "Which device generally improves security because it forwards frames only to the intended destination?",
    options: ["Hub", "Switch", "Repeater", "Modem"],
    answerIndex: 1,
    explanation: "Switches prevent eavesdropping by unicasting frames to specific destination ports."
  },
  {
    id: 147,
    category: "Router vs Switch vs Hub",
    question: "Which device is considered an intelligent forwarding device within a LAN?",
    options: ["Hub", "Switch", "Repeater", "Cable"],
    answerIndex: 1,
    explanation: "Switches filter and forward traffic intelligently using learned MAC addresses."
  },
  {
    id: 148,
    category: "Router vs Switch vs Hub",
    question: "Which device is least efficient in large Ethernet networks?",
    options: ["Router", "Switch", "Hub", "Bridge"],
    answerIndex: 2,
    explanation: "Hubs cause frequent packet collisions in high-density networks due to shared bandwidth."
  },
  {
    id: 149,
    category: "Router vs Switch vs Hub",
    question: "A switch receives a frame with an unknown destination MAC address. What does it initially do?",
    options: [
      "Drops the frame.",
      "Sends it only to the router.",
      "Floods the frame to all ports except the incoming port.",
      "Converts it into an IP packet."
    ],
    answerIndex: 2,
    explanation: "Unicast flooding occurs when a target MAC address is missing from the switch table."
  },
  {
    id: 150,
    category: "Router vs Switch vs Hub",
    question: "Which statement is correct?",
    options: [
      "A hub forwards data based on IP addresses.",
      "A switch forwards frames using MAC addresses, while a router forwards packets using IP addresses.",
      "A router works only at the Physical Layer.",
      "A hub maintains a routing table."
    ],
    answerIndex: 1,
    explanation: "Layer-2 Switches use MAC addresses; Layer-3 Routers use IP addresses."
  },

  // --- Protocols (DNS, DHCP, HTTP, HTTPS, FTP, SMTP, POP3, IMAP) (151–180) ---
  {
    id: 151,
    category: "Protocols",
    question: "Which protocol translates a domain name into an IP address?",
    options: ["DHCP", "DNS", "HTTP", "FTP"],
    answerIndex: 1,
    explanation: "Domain Name System (DNS) resolves human-readable domain names into IP addresses."
  },
  {
    id: 152,
    category: "Protocols",
    question: "A computer cannot access websites using domain names but can access them using IP addresses. Which service is most likely failing?",
    options: ["FTP", "DNS", "DHCP", "SMTP"],
    answerIndex: 1,
    explanation: "When IP connection works but domain names fail, DNS server resolution is faulty."
  },
  {
    id: 153,
    category: "Protocols",
    question: "Which protocol automatically assigns IP addresses to hosts?",
    options: ["DNS", "DHCP", "HTTP", "FTP"],
    answerIndex: 1,
    explanation: "Dynamic Host Configuration Protocol (DHCP) dynamically leases IP parameters."
  },
  {
    id: 154,
    category: "Protocols",
    question: "If a DHCP server is unavailable, a Windows client will most likely:",
    options: [
      "Shut down immediately.",
      "Assign itself an APIPA address.",
      "Receive a DNS address only.",
      "Use the router's MAC address."
    ],
    answerIndex: 1,
    explanation: "Windows self-configures a 169.254.x.x APIPA address when DHCP fails."
  },
  {
    id: 155,
    category: "Protocols",
    question: "Which protocol is primarily used to browse websites?",
    options: ["FTP", "HTTP", "SMTP", "DHCP"],
    answerIndex: 1,
    explanation: "Hypertext Transfer Protocol (HTTP) transfers web page resources."
  },
  {
    id: 156,
    category: "Protocols",
    question: "Which protocol provides encrypted web communication?",
    options: ["HTTP", "HTTPS", "FTP", "Telnet"],
    answerIndex: 1,
    explanation: "HTTPS secures web traffic by encrypting HTTP over SSL/TLS."
  },
  {
    id: 157,
    category: "Protocols",
    question: "HTTPS mainly protects data using:",
    options: ["CRC", "SSL/TLS", "DHCP", "ARP"],
    answerIndex: 1,
    explanation: "HTTPS relies on SSL/TLS encryption protocols."
  },
  {
    id: 158,
    category: "Protocols",
    question: "Which protocol is specifically designed for file transfer?",
    options: ["FTP", "SMTP", "HTTP", "DNS"],
    answerIndex: 0,
    explanation: "File Transfer Protocol (FTP) transfers files between client and server."
  },
  {
    id: 159,
    category: "Protocols",
    question: "Which protocol is used to send email from a client to a mail server?",
    options: ["SMTP", "POP3", "IMAP", "FTP"],
    answerIndex: 0,
    explanation: "Simple Mail Transfer Protocol (SMTP) pushes outgoing emails."
  },
  {
    id: 160,
    category: "Protocols",
    question: "Which protocol is commonly used to receive email by downloading messages to the local computer?",
    options: ["SMTP", "POP3", "IMAP", "DNS"],
    answerIndex: 1,
    explanation: "POP3 downloads emails locally and usually deletes them from server."
  },
  {
    id: 161,
    category: "Protocols",
    question: "Which email protocol keeps messages synchronized between multiple devices?",
    options: ["POP3", "IMAP", "SMTP", "FTP"],
    answerIndex: 1,
    explanation: "Internet Message Access Protocol (IMAP) synchronizes mail state across devices."
  },
  {
    id: 162,
    category: "Protocols",
    question: "Which protocol allows users to continue managing email directly on the mail server?",
    options: ["SMTP", "POP3", "IMAP", "DHCP"],
    answerIndex: 2,
    explanation: "IMAP stores and manages mail folders directly on remote mail server."
  },
  {
    id: 163,
    category: "Protocols",
    question: "Which protocol is most suitable when a user checks email from both a laptop and a mobile phone?",
    options: ["POP3", "IMAP", "FTP", "HTTP"],
    answerIndex: 1,
    explanation: "IMAP ensures read/unread and folder states sync across multiple user devices."
  },
  {
    id: 164,
    category: "Protocols",
    question: "Which protocol usually removes downloaded emails from the server by default?",
    options: ["IMAP", "POP3", "SMTP", "HTTPS"],
    answerIndex: 1,
    explanation: "Default POP3 behavior downloads messages and deletes remote copies."
  },
  {
    id: 165,
    category: "Protocols",
    question: "Which protocol is responsible for resolving hostnames before a web page opens?",
    options: ["DHCP", "DNS", "FTP", "SMTP"],
    answerIndex: 1,
    explanation: "DNS resolves domain names into target server IP addresses."
  },
  {
    id: 166,
    category: "Protocols",
    question: "Which protocol must normally be contacted before HTTP can access a website by name?",
    options: ["FTP", "DNS", "SMTP", "POP3"],
    answerIndex: 1,
    explanation: "Browser contacts DNS server first to get target IP before issuing HTTP request."
  },
  {
    id: 167,
    category: "Protocols",
    question: "Which protocol is responsible for allocating subnet masks along with IP addresses?",
    options: ["DNS", "DHCP", "HTTP", "FTP"],
    answerIndex: 1,
    explanation: "DHCP options assign IP, Subnet Mask, Gateway, and DNS server address."
  },
  {
    id: 168,
    category: "Protocols",
    question: "Which protocol reduces administrative work by automatically configuring clients?",
    options: ["FTP", "DHCP", "DNS", "SMTP"],
    answerIndex: 1,
    explanation: "DHCP automates network TCP/IP client setup."
  },
  {
    id: 169,
    category: "Protocols",
    question: "Which protocol is NOT primarily used for email?",
    options: ["SMTP", "POP3", "IMAP", "FTP"],
    answerIndex: 3,
    explanation: "FTP is used for general file transfer, not mail delivery/retrieval."
  },
  {
    id: 170,
    category: "Protocols",
    question: "Which protocol is mainly responsible for uploading and downloading website files?",
    options: ["FTP", "HTTP", "DNS", "DHCP"],
    answerIndex: 0,
    explanation: "FTP is specialized for uploading/downloading web server files."
  },
  {
    id: 171,
    category: "Protocols",
    question: "A user types www.example.com into a browser. Which protocol is contacted first?",
    options: ["HTTP", "DNS", "FTP", "SMTP"],
    answerIndex: 1,
    explanation: "DNS query goes out first to look up target IP address."
  },
  {
    id: 172,
    category: "Protocols",
    question: "Which protocol does NOT normally encrypt transmitted data?",
    options: ["HTTPS", "HTTP", "SSH", "TLS"],
    answerIndex: 1,
    explanation: "Standard HTTP sends web data in unencrypted plaintext."
  },
  {
    id: 173,
    category: "Protocols",
    question: "Which protocol helps prevent attackers from reading passwords during web login?",
    options: ["FTP", "HTTPS", "HTTP", "DNS"],
    answerIndex: 1,
    explanation: "HTTPS encrypts login form data in transit."
  },
  {
    id: 174,
    category: "Protocols",
    question: "Which protocol primarily supports hypertext documents?",
    options: ["HTTP", "FTP", "SMTP", "DHCP"],
    answerIndex: 0,
    explanation: "HTTP (Hypertext Transfer Protocol) transfers HTML documents."
  },
  {
    id: 175,
    category: "Protocols",
    question: "Which protocol is responsible for maintaining an organization's IP address lease records?",
    options: ["DNS", "DHCP", "FTP", "POP3"],
    answerIndex: 1,
    explanation: "DHCP server tracks active IP leases."
  },
  {
    id: 176,
    category: "Protocols",
    question: "Which protocol maps domain names to IP addresses rather than assigning them?",
    options: ["DHCP", "DNS", "FTP", "SMTP"],
    answerIndex: 1,
    explanation: "DNS maps (resolves) names to IPs; DHCP assigns IPs."
  },
  {
    id: 177,
    category: "Protocols",
    question: "A browser displays '404 Not Found.' Which protocol returned this response?",
    options: ["HTTP", "DNS", "FTP", "DHCP"],
    answerIndex: 0,
    explanation: "HTTP 404 is a standard HTTP status code returned by web servers."
  },
  {
    id: 178,
    category: "Protocols",
    question: "Which protocol commonly works together with HTTPS to securely display web pages?",
    options: ["TLS", "DHCP", "ARP", "RIP"],
    answerIndex: 0,
    explanation: "Transport Layer Security (TLS) provides underlying encryption for HTTPS."
  },
  {
    id: 179,
    category: "Protocols",
    question: "Which protocol allows multiple users to maintain synchronized mailboxes?",
    options: ["POP3", "IMAP", "FTP", "SMTP"],
    answerIndex: 1,
    explanation: "IMAP maintains centralized, synchronized mailbox state."
  },
  {
    id: 180,
    category: "Protocols",
    question: "Which statement is correct?",
    options: [
      "DHCP translates domain names.",
      "DNS assigns IP addresses.",
      "DNS resolves names, while DHCP assigns IP addresses.",
      "FTP provides encrypted web browsing."
    ],
    answerIndex: 2,
    explanation: "DNS resolves hostnames to IPs; DHCP leases IP addresses to clients."
  },

  // --- Well-Known Ports (181–200) ---
  {
    id: 181,
    category: "Well-Known Ports",
    question: "Which port is the default for HTTP?",
    options: ["21", "53", "80", "443"],
    answerIndex: 2,
    explanation: "HTTP uses TCP port 80."
  },
  {
    id: 182,
    category: "Well-Known Ports",
    question: "Which port is the default for HTTPS?",
    options: ["80", "21", "443", "25"],
    answerIndex: 2,
    explanation: "HTTPS uses TCP port 443."
  },
  {
    id: 183,
    category: "Well-Known Ports",
    question: "Which port is used by FTP Control?",
    options: ["20", "21", "22", "23"],
    answerIndex: 1,
    explanation: "FTP commands/control connection uses TCP port 21."
  },
  {
    id: 184,
    category: "Well-Known Ports",
    question: "Which port is used by FTP Data?",
    options: ["20", "21", "23", "25"],
    answerIndex: 0,
    explanation: "FTP active data transfer uses TCP port 20."
  },
  {
    id: 185,
    category: "Well-Known Ports",
    question: "Which port is assigned to SSH?",
    options: ["21", "22", "23", "25"],
    answerIndex: 1,
    explanation: "Secure Shell (SSH) uses TCP port 22."
  },
  {
    id: 186,
    category: "Well-Known Ports",
    question: "Which port is associated with Telnet?",
    options: ["22", "23", "25", "53"],
    answerIndex: 1,
    explanation: "Telnet uses TCP port 23."
  },
  {
    id: 187,
    category: "Well-Known Ports",
    question: "Which port is used by SMTP?",
    options: ["20", "21", "25", "53"],
    answerIndex: 2,
    explanation: "Simple Mail Transfer Protocol (SMTP) uses TCP port 25."
  },
  {
    id: 188,
    category: "Well-Known Ports",
    question: "Which port is used for DNS queries?",
    options: ["25", "53", "67", "80"],
    answerIndex: 1,
    explanation: "DNS uses UDP/TCP port 53."
  },
  {
    id: 189,
    category: "Well-Known Ports",
    question: "DHCP servers typically listen on:",
    options: ["Port 67", "Port 68", "Port 69", "Port 70"],
    answerIndex: 0,
    explanation: "DHCP server listens on UDP port 67."
  },
  {
    id: 190,
    category: "Well-Known Ports",
    question: "DHCP clients typically use:",
    options: ["Port 67", "Port 68", "Port 53", "Port 80"],
    answerIndex: 1,
    explanation: "DHCP client listens on UDP port 68."
  },
  {
    id: 191,
    category: "Well-Known Ports",
    question: "Which port is associated with POP3?",
    options: ["110", "143", "25", "53"],
    answerIndex: 0,
    explanation: "Post Office Protocol v3 (POP3) uses TCP port 110."
  },
  {
    id: 192,
    category: "Well-Known Ports",
    question: "Which port is associated with IMAP?",
    options: ["110", "143", "80", "443"],
    answerIndex: 1,
    explanation: "IMAP4 uses TCP port 143."
  },
  {
    id: 193,
    category: "Well-Known Ports",
    question: "Which protocol uses port 443?",
    options: ["HTTP", "HTTPS", "FTP", "SMTP"],
    answerIndex: 1,
    explanation: "HTTPS encrypts traffic over TCP port 443."
  },
  {
    id: 194,
    category: "Well-Known Ports",
    question: "A network administrator blocks port 80. Which service is directly affected?",
    options: ["HTTPS", "HTTP", "FTP", "DNS"],
    answerIndex: 1,
    explanation: "Unencrypted HTTP web traffic over port 80 will be blocked."
  },
  {
    id: 195,
    category: "Well-Known Ports",
    question: "Which service will fail if port 53 is blocked?",
    options: ["DNS", "FTP", "SMTP", "HTTP"],
    answerIndex: 0,
    explanation: "Port 53 blocks DNS domain name resolution."
  },
  {
    id: 196,
    category: "Well-Known Ports",
    question: "Which service is directly affected if port 25 is blocked?",
    options: ["Sending email", "Browsing websites", "DNS resolution", "File sharing"],
    answerIndex: 0,
    explanation: "Port 25 is standard outbound port for SMTP mail delivery."
  },
  {
    id: 197,
    category: "Well-Known Ports",
    question: "Which port would you open to allow secure remote login to a Linux server?",
    options: ["20", "22", "23", "110"],
    answerIndex: 1,
    explanation: "SSH remote terminal access uses TCP port 22."
  },
  {
    id: 198,
    category: "Well-Known Ports",
    question: "Which pair correctly matches the protocol and its default port?",
    options: ["HTTP – 443", "HTTPS – 80", "DNS – 53", "SMTP – 110"],
    answerIndex: 2,
    explanation: "DNS correctly maps to port 53."
  },
  {
    id: 199,
    category: "Well-Known Ports",
    question: "Which protocol has separate default ports for control and data transfer?",
    options: ["HTTP", "FTP", "SMTP", "POP3"],
    answerIndex: 1,
    explanation: "FTP uses port 21 for Control signals and port 20 for Data transfer."
  },
  {
    id: 200,
    category: "Well-Known Ports",
    question: "Which statement is correct?",
    options: [
      "HTTP uses port 443.",
      "HTTPS uses port 80.",
      "FTP uses ports 20 and 21.",
      "SSH uses port 23."
    ],
    answerIndex: 2,
    explanation: "FTP uses TCP port 21 (control) and TCP port 20 (data)."
  },

  // --- Routing Basics (201–210) ---
  {
    id: 201,
    category: "Routing Basics",
    question: "What is the primary function of a router?",
    options: [
      "Convert digital signals into analog signals",
      "Forward packets between different networks",
      "Store web pages",
      "Assign MAC addresses"
    ],
    answerIndex: 1,
    explanation: "Routers interconnect different IP networks and forward packets based on network routing tables."
  },
  {
    id: 202,
    category: "Routing Basics",
    question: "A router primarily makes forwarding decisions based on:",
    options: ["MAC Address", "IP Address", "Port Number", "Domain Name"],
    answerIndex: 1,
    explanation: "Routers inspect Layer 3 IP Addresses to match against routing table entries."
  },
  {
    id: 203,
    category: "Routing Basics",
    question: "Which table does a router consult before forwarding a packet?",
    options: ["ARP Table", "MAC Address Table", "Routing Table", "DNS Cache"],
    answerIndex: 2,
    explanation: "Routers consult their Routing Table to determine next-hop interfaces."
  },
  {
    id: 204,
    category: "Routing Basics",
    question: "What is the default gateway on a host?",
    options: [
      "The DNS server",
      "The router used to reach remote networks",
      "The DHCP server",
      "The network switch"
    ],
    answerIndex: 1,
    explanation: "Default gateway is the local router IP address handling outbound traffic to remote subnets."
  },
  {
    id: 205,
    category: "Routing Basics",
    question: "If the destination IP belongs to the same subnet as the sender, the packet is normally sent:",
    options: [
      "To the default gateway",
      "Directly to the destination host using its MAC address",
      "To the DNS server",
      "To every host on the network"
    ],
    answerIndex: 1,
    explanation: "Intra-subnet packets are delivered directly via Layer 2 using ARP and destination MAC."
  },
  {
    id: 206,
    category: "Routing Basics",
    question: "A host sends data to its default gateway when:",
    options: [
      "The destination is on a different network",
      "The destination is on the same subnet",
      "DNS fails",
      "The switch is overloaded"
    ],
    answerIndex: 0,
    explanation: "Hosts send packets to default gateway whenever destination IP is outside local subnet."
  },
  {
    id: 207,
    category: "Routing Basics",
    question: "Which routing method requires administrators to manually configure routes?",
    options: ["Dynamic Routing", "Static Routing", "Broadcast Routing", "Flooding"],
    answerIndex: 1,
    explanation: "Static routes are manually entered and updated by network engineers."
  },
  {
    id: 208,
    category: "Routing Basics",
    question: "Which routing method automatically updates routes when the network changes?",
    options: ["Static Routing", "Dynamic Routing", "Manual Routing", "Source Routing"],
    answerIndex: 1,
    explanation: "Dynamic routing protocols (OSPF, BGP, EIGRP) automatically discover routes and recalculate paths during topology failures."
  },
  {
    id: 209,
    category: "Routing Basics",
    question: "Which statement about static routing is correct?",
    options: [
      "It automatically adapts to network failures.",
      "It requires manual configuration by the administrator.",
      "It uses routing protocols like RIP and OSPF.",
      "It creates routes automatically using DHCP."
    ],
    answerIndex: 1,
    explanation: "Static routes must be manually defined and maintained."
  },
  {
    id: 210,
    category: "Routing Basics",
    question: "Which statement about dynamic routing is correct?",
    options: [
      "It cannot adapt to topology changes.",
      "It exchanges routing information between routers.",
      "It uses MAC addresses instead of IP addresses.",
      "It eliminates the need for routing tables."
    ],
    answerIndex: 1,
    explanation: "Routers running dynamic routing protocols exchange routing updates with neighbor routers."
  },

  // --- Network Topologies (211–220) ---
  {
    id: 211,
    category: "Network Topologies",
    question: "In which topology is every device connected to a central device?",
    options: ["Bus", "Ring", "Star", "Mesh"],
    answerIndex: 2,
    explanation: "Star topology connects all node workstations directly to a central hub/switch."
  },
  {
    id: 212,
    category: "Network Topologies",
    question: "Which topology has the highest fault tolerance because multiple paths exist between devices?",
    options: ["Bus", "Ring", "Mesh", "Star"],
    answerIndex: 2,
    explanation: "Full or partial Mesh topology provides multiple redundant interconnections."
  },
  {
    id: 213,
    category: "Network Topologies",
    question: "Which topology uses a single backbone cable shared by all devices?",
    options: ["Ring", "Bus", "Star", "Mesh"],
    answerIndex: 1,
    explanation: "Bus topology links all nodes along a single shared trunk cable terminated at both ends."
  },
  {
    id: 214,
    category: "Network Topologies",
    question: "Which topology forms a closed loop where each device connects to exactly two neighboring devices?",
    options: ["Bus", "Ring", "Star", "Tree"],
    answerIndex: 1,
    explanation: "Ring topology forms a continuous point-to-point ring loop."
  },
  {
    id: 215,
    category: "Network Topologies",
    question: "In a Star topology, failure of one workstation usually:",
    options: [
      "Brings down the entire network.",
      "Affects only that workstation.",
      "Disconnects all switches.",
      "Causes routing loops."
    ],
    answerIndex: 1,
    explanation: "In Star topology, a broken cable or workstation NIC disconnects only that single node."
  },
  {
    id: 216,
    category: "Network Topologies",
    question: "In a Star topology, failure of the central switch will:",
    options: [
      "Affect only one computer.",
      "Disconnect the entire network.",
      "Affect only the router.",
      "Have no impact."
    ],
    answerIndex: 1,
    explanation: "The central switch is a single point of failure in Star topology."
  },
  {
    id: 217,
    category: "Network Topologies",
    question: "Which topology requires the least amount of cabling?",
    options: ["Mesh", "Star", "Bus", "Tree"],
    answerIndex: 2,
    explanation: "Bus topology uses a single shared backbone cable, minimizing overall cable length."
  },
  {
    id: 218,
    category: "Network Topologies",
    question: "Which topology requires the greatest amount of cabling?",
    options: ["Bus", "Ring", "Star", "Mesh"],
    answerIndex: 3,
    explanation: "Full Mesh topology requires n(n − 1) / 2 dedicated cables, maximizing cabling costs."
  },
  {
    id: 219,
    category: "Network Topologies",
    question: "A company requires maximum network availability even if one communication link fails. Which topology is the best choice?",
    options: ["Bus", "Ring", "Star", "Mesh"],
    answerIndex: 3,
    explanation: "Mesh topology provides redundant alternative routes for zero-downtime reliability."
  },
  {
    id: 220,
    category: "Network Topologies",
    question: "Which statement is correct?",
    options: [
      "A Bus topology provides the highest fault tolerance.",
      "A Mesh topology offers multiple redundant communication paths.",
      "A Ring topology uses a central switch.",
      "A Star topology requires the least amount of cabling."
    ],
    answerIndex: 1,
    explanation: "Mesh topology offers maximum redundancy and fault tolerance."
  }
];

// Helper to convert structured MCQs into legacy-compatible object window.factsData
const OPERATING_SYSTEMS_MCQS = [
  {
    "id": 1,
    "category": "Introduction to Operating Systems",
    "question": "Which of the following best describes an Operating System?",
    "options": [
      "A programming language",
      "System software that manages hardware and software resources",
      "An application software",
      "A database management system"
    ],
    "answerIndex": 1,
    "explanation": "An Operating System is system software that manages computer hardware, software resources, and provides common services for computer programs."
  },
  {
    "id": 2,
    "category": "Introduction to Operating Systems",
    "question": "Which is NOT a primary function of an Operating System?",
    "options": [
      "Process Management",
      "Memory Management",
      "File Management",
      "Web Development"
    ],
    "answerIndex": 3,
    "explanation": "Web development is an application layer activity, not a core function of an operating system kernel."
  },
  {
    "id": 3,
    "category": "Introduction to Operating Systems",
    "question": "Which OS component decides which process gets the CPU next?",
    "options": [
      "File Manager",
      "CPU Scheduler",
      "Memory Manager",
      "Device Driver"
    ],
    "answerIndex": 1,
    "explanation": "The CPU Scheduler (Short-Term Scheduler) selects a process from the ready queue and allocates CPU time to it."
  },
  {
    "id": 4,
    "category": "Introduction to Operating Systems",
    "question": "Which OS function is responsible for allocating RAM to running programs?",
    "options": [
      "Process Management",
      "Memory Management",
      "File System",
      "Device Management"
    ],
    "answerIndex": 1,
    "explanation": "Memory Management tracks each memory location and handles allocation/deallocation of RAM to processes."
  },
  {
    "id": 5,
    "category": "Introduction to Operating Systems",
    "question": "Which of the following is an example of system software?",
    "options": [
      "MS Word",
      "Adobe Photoshop",
      "Linux Operating System",
      "Google Chrome"
    ],
    "answerIndex": 2,
    "explanation": "Linux is system software (operating system) that manages system hardware and environment for application software."
  },
  {
    "id": 6,
    "category": "Introduction to Operating Systems",
    "question": "Which operating system allows multiple users to access the system simultaneously?",
    "options": [
      "Single-user OS",
      "Multi-user OS",
      "Embedded OS",
      "Stand-alone OS"
    ],
    "answerIndex": 1,
    "explanation": "Multi-user operating systems allow multiple users to access system resources and run processes concurrently."
  },
  {
    "id": 7,
    "category": "Introduction to Operating Systems",
    "question": "Which type of operating system guarantees task completion within a specified time?",
    "options": [
      "Batch OS",
      "Time-Sharing OS",
      "Real-Time Operating System",
      "Distributed OS"
    ],
    "answerIndex": 2,
    "explanation": "Real-Time Operating Systems (RTOS) guarantee determinism and strict deadline constraints for task completion."
  },
  {
    "id": 8,
    "category": "Introduction to Operating Systems",
    "question": "Which operating system executes jobs without user interaction after submission?",
    "options": [
      "Batch Operating System",
      "Interactive Operating System",
      "Network Operating System",
      "Mobile Operating System"
    ],
    "answerIndex": 0,
    "explanation": "Batch processing OS executes batches of jobs sequentially without requiring direct user interaction during execution."
  },
  {
    "id": 9,
    "category": "Introduction to Operating Systems",
    "question": "Which operating system gives each user a small time slice of CPU?",
    "options": [
      "Batch OS",
      "Time-Sharing OS",
      "Embedded OS",
      "Multiprogramming OS"
    ],
    "answerIndex": 1,
    "explanation": "Time-sharing OS allocates small time intervals (time quanta) to switch CPU rapidly among multiple interactive users."
  },
  {
    "id": 10,
    "category": "Introduction to Operating Systems",
    "question": "Which operating system is specifically designed for mobile devices?",
    "options": [
      "UNIX",
      "Android",
      "DOS",
      "Solaris"
    ],
    "answerIndex": 1,
    "explanation": "Android is a mobile operating system based on a modified version of the Linux kernel for touchscreen mobile devices."
  },
  {
    "id": 11,
    "category": "Introduction to Operating Systems",
    "question": "Which operating system component communicates directly with computer hardware?",
    "options": [
      "Shell",
      "Kernel",
      "Compiler",
      "Editor"
    ],
    "answerIndex": 1,
    "explanation": "The Kernel is the core component of an OS operating at the lowest level to manage direct hardware communication."
  },
  {
    "id": 12,
    "category": "Introduction to Operating Systems",
    "question": "Which of the following acts as an interface between the user and hardware?",
    "options": [
      "Compiler",
      "Operating System",
      "Assembler",
      "BIOS"
    ],
    "answerIndex": 1,
    "explanation": "An Operating System acts as an intermediary interface between user software applications and physical computer hardware."
  },
  {
    "id": 13,
    "category": "Introduction to Operating Systems",
    "question": "Which resource is NOT managed by an operating system?",
    "options": [
      "CPU",
      "Memory",
      "Input/Output Devices",
      "Internet Bandwidth"
    ],
    "answerIndex": 3,
    "explanation": "Internet bandwidth is provided by network infrastructure and ISPs, whereas hardware components (CPU, RAM, I/O) are directly managed by OS."
  },
  {
    "id": 14,
    "category": "Introduction to Operating Systems",
    "question": "Which of the following is an example of an open-source operating system?",
    "options": [
      "Windows",
      "Linux",
      "macOS",
      "iOS"
    ],
    "answerIndex": 1,
    "explanation": "Linux source code is freely available under open-source licenses allowing modification and redistribution."
  },
  {
    "id": 15,
    "category": "Introduction to Operating Systems",
    "question": "Which operating system supports multiple CPUs working together?",
    "options": [
      "Multiprocessing Operating System",
      "Batch Operating System",
      "Single-user Operating System",
      "Real-Time Operating System"
    ],
    "answerIndex": 0,
    "explanation": "Multiprocessing OS utilizes two or more CPUs (processors) within a single computer system to execute tasks simultaneously."
  },
  {
    "id": 16,
    "category": "Introduction to Operating Systems",
    "question": "Which operating system is designed to share resources across multiple computers?",
    "options": [
      "Stand-alone OS",
      "Distributed Operating System",
      "Batch OS",
      "Embedded OS"
    ],
    "answerIndex": 1,
    "explanation": "A Distributed OS coordinates a collection of independent networked computers to appear to users as a single unified system."
  },
  {
    "id": 17,
    "category": "Introduction to Operating Systems",
    "question": "Which type of operating system is commonly used in ATMs and washing machines?",
    "options": [
      "Embedded Operating System",
      "Time-Sharing OS",
      "Network Operating System",
      "Distributed OS"
    ],
    "answerIndex": 0,
    "explanation": "Embedded OS is a dedicated operating system optimized for specialized control hardware inside devices like ATMs and appliances."
  },
  {
    "id": 18,
    "category": "Introduction to Operating Systems",
    "question": "Which component interprets user commands in many operating systems?",
    "options": [
      "Shell",
      "PCB",
      "Scheduler",
      "Semaphore"
    ],
    "answerIndex": 0,
    "explanation": "The Shell is the command-line interface (CLI) or user-space program that interprets user commands and sends them to the kernel."
  },
  {
    "id": 19,
    "category": "Introduction to Operating Systems",
    "question": "Which statement is TRUE regarding the kernel?",
    "options": [
      "It is application software.",
      "It remains in memory while the system is running.",
      "It stores user documents.",
      "It only manages files."
    ],
    "answerIndex": 1,
    "explanation": "The OS kernel stays permanently loaded in physical RAM (resident memory) throughout active system uptime."
  },
  {
    "id": 20,
    "category": "Introduction to Operating Systems",
    "question": "Which operating system objective is MOST important?",
    "options": [
      "Increasing monitor resolution",
      "Efficient resource utilization",
      "Increasing Internet speed",
      "Improving printer quality"
    ],
    "answerIndex": 1,
    "explanation": "The fundamental objective of an operating system is efficient management, allocation, and utilization of hardware resources."
  },
  {
    "id": 21,
    "category": "Process vs Program",
    "question": "A program becomes a process when:",
    "options": [
      "It is compiled",
      "It is executed",
      "It is saved",
      "It is debugged"
    ],
    "answerIndex": 1,
    "explanation": "A program stored on disk is a passive entity; loading and executing it in memory makes it an active process."
  },
  {
    "id": 22,
    "category": "Process vs Program",
    "question": "Which statement correctly distinguishes a program from a process?",
    "options": [
      "Both are identical.",
      "A program is passive, while a process is active.",
      "A process is stored on disk.",
      "A program consumes CPU time."
    ],
    "answerIndex": 1,
    "explanation": "A program is passive code stored on disk, whereas a process is an active instance consuming CPU and memory resources."
  },
  {
    "id": 23,
    "category": "Process vs Program",
    "question": "Which of the following is an example of a process?",
    "options": [
      "MS Word stored on disk",
      "A running instance of MS Word",
      "Source code of MS Word",
      "Installation files"
    ],
    "answerIndex": 1,
    "explanation": "A process is a program in execution, such as an active running instance of MS Word in RAM."
  },
  {
    "id": 24,
    "category": "Process vs Program",
    "question": "Which of the following is NOT part of a process?",
    "options": [
      "Program Counter",
      "Stack",
      "CPU Registers",
      "Compiler Source Code"
    ],
    "answerIndex": 3,
    "explanation": "Compiler source code on disk is not part of an active process runtime image (which consists of text, data, heap, stack, PC, and registers)."
  },
  {
    "id": 25,
    "category": "Process vs Program",
    "question": "Two running instances of the same program are:",
    "options": [
      "One process",
      "Two separate processes",
      "Two threads",
      "One PCB"
    ],
    "answerIndex": 1,
    "explanation": "Launching a program twice creates two independent processes, each having its own PID, PCB, and address space."
  },
  {
    "id": 26,
    "category": "Process vs Program",
    "question": "Which component uniquely identifies a process?",
    "options": [
      "Process ID (PID)",
      "MAC Address",
      "Port Number",
      "IP Address"
    ],
    "answerIndex": 0,
    "explanation": "The Process Identifier (PID) is a unique integer assigned by the OS kernel to identify each active process."
  },
  {
    "id": 27,
    "category": "Process vs Program",
    "question": "Which of the following consumes system resources?",
    "options": [
      "Program",
      "Process",
      "Source Code",
      "Algorithm"
    ],
    "answerIndex": 1,
    "explanation": "Active processes consume CPU cycles, RAM address space, file handles, and I/O devices."
  },
  {
    "id": 28,
    "category": "Process vs Program",
    "question": "Which of the following is stored on secondary storage?",
    "options": [
      "Running Process",
      "Program",
      "CPU Registers",
      "Stack Pointer"
    ],
    "answerIndex": 1,
    "explanation": "A program file (executable) resides passively in non-volatile secondary storage (disk/SSD)."
  },
  {
    "id": 29,
    "category": "Process vs Program",
    "question": "Which statement is TRUE?",
    "options": [
      "Every process has exactly one program.",
      "One program can create multiple processes.",
      "Every process has multiple operating systems.",
      "A process never terminates."
    ],
    "answerIndex": 1,
    "explanation": "A single executable program can be launched multiple times simultaneously, spawning multiple separate processes."
  },
  {
    "id": 30,
    "category": "Process vs Program",
    "question": "A process terminates when:",
    "options": [
      "It is copied.",
      "Execution finishes.",
      "It is compiled.",
      "It is installed."
    ],
    "answerIndex": 1,
    "explanation": "A process finishes its execution flow (or encounters an unhandled exception) and invokes exit() to terminate."
  },
  {
    "id": 31,
    "category": "Process vs Program",
    "question": "Which resource belongs to a process during execution?",
    "options": [
      "CPU time",
      "Source code only",
      "Installation files",
      "Device manual"
    ],
    "answerIndex": 0,
    "explanation": "An active process is allocated CPU execution cycles by the operating system scheduler."
  },
  {
    "id": 32,
    "category": "Process vs Program",
    "question": "Which statement is FALSE?",
    "options": [
      "Programs are passive.",
      "Processes are active.",
      "Multiple processes can execute the same program.",
      "Programs have process states."
    ],
    "answerIndex": 3,
    "explanation": "Process states (Ready, Running, Waiting) belong to active processes, not passive programs."
  },
  {
    "id": 33,
    "category": "Process vs Program",
    "question": "Which of the following best represents multitasking?",
    "options": [
      "One process running",
      "Multiple processes executing concurrently",
      "Multiple hard disks",
      "Multiple monitors"
    ],
    "answerIndex": 1,
    "explanation": "Multitasking allows the operating system to execute multiple processes concurrently by context switching CPU time."
  },
  {
    "id": 34,
    "category": "Process vs Program",
    "question": "Which process attribute changes during execution?",
    "options": [
      "Program code",
      "Program Counter",
      "Source file",
      "Installation package"
    ],
    "answerIndex": 1,
    "explanation": "The Program Counter (PC) continuously updates to store the memory address of the next instruction to execute."
  },
  {
    "id": 35,
    "category": "Process vs Program",
    "question": "The operating system mainly manages:",
    "options": [
      "Programs stored on disk",
      "Running processes",
      "Source code comments",
      "IDE settings"
    ],
    "answerIndex": 1,
    "explanation": "Process management by the kernel focuses on creating, scheduling, synchronizing, and terminating running processes."
  },
  {
    "id": 36,
    "category": "Process States & PCB",
    "question": "Which process state indicates the process is currently executing?",
    "options": [
      "Ready",
      "Running",
      "Waiting",
      "New"
    ],
    "answerIndex": 1,
    "explanation": "The Running state indicates that instructions of the process are actively being executed on the CPU."
  },
  {
    "id": 37,
    "category": "Process States & PCB",
    "question": "Which state contains processes waiting for CPU allocation?",
    "options": [
      "Ready",
      "Blocked",
      "Exit",
      "Running"
    ],
    "answerIndex": 0,
    "explanation": "The Ready queue contains processes that are loaded into memory and ready to be assigned CPU time."
  },
  {
    "id": 38,
    "category": "Process States & PCB",
    "question": "Which process state indicates waiting for an I/O operation?",
    "options": [
      "Ready",
      "Running",
      "Waiting (Blocked)",
      "New"
    ],
    "answerIndex": 2,
    "explanation": "The Waiting (Blocked) state means the process cannot proceed until an I/O operation or event completes."
  },
  {
    "id": 39,
    "category": "Process States & PCB",
    "question": "Which process state is entered immediately after process creation?",
    "options": [
      "Running",
      "New",
      "Ready",
      "Waiting"
    ],
    "answerIndex": 1,
    "explanation": "A newly instantiated process begins in the New state while initial structures like PCB are allocated."
  },
  {
    "id": 40,
    "category": "Process States & PCB",
    "question": "Which process state is entered after successful completion?",
    "options": [
      "Ready",
      "Exit (Terminated)",
      "Running",
      "Waiting"
    ],
    "answerIndex": 1,
    "explanation": "Upon completing execution, a process enters the Terminated/Exit state before its resources are reaped."
  },
  {
    "id": 41,
    "category": "Process States & PCB",
    "question": "Which data structure stores information about a process?",
    "options": [
      "FAT",
      "PCB",
      "Page Table",
      "Semaphore"
    ],
    "answerIndex": 1,
    "explanation": "The Process Control Block (PCB) is the OS data structure storing state, PID, registers, PC, and memory limits for a process."
  },
  {
    "id": 42,
    "category": "Process States & PCB",
    "question": "PCB stands for:",
    "options": [
      "Process Control Block",
      "Primary Control Buffer",
      "Program Communication Block",
      "Process Command Buffer"
    ],
    "answerIndex": 0,
    "explanation": "PCB stands for Process Control Block, serving as the kernel repository for process context info."
  },
  {
    "id": 43,
    "category": "Process States & PCB",
    "question": "Which information is stored in a PCB?",
    "options": [
      "CPU registers",
      "Process state",
      "Program counter",
      "All of the above"
    ],
    "answerIndex": 3,
    "explanation": "A PCB contains CPU registers, process state, program counter, memory management info, accounting info, and I/O status."
  },
  {
    "id": 44,
    "category": "Process States & PCB",
    "question": "Which PCB field helps resume execution after a context switch?",
    "options": [
      "File Pointer",
      "Program Counter",
      "Username",
      "Cache Size"
    ],
    "answerIndex": 1,
    "explanation": "Saving the Program Counter (PC) in the PCB records exact execution location so context switching can resume seamlessly."
  },
  {
    "id": 45,
    "category": "Process States & PCB",
    "question": "Context switching mainly involves saving and restoring:",
    "options": [
      "Hard disk contents",
      "Process state information",
      "Source code",
      "Network packets"
    ],
    "answerIndex": 1,
    "explanation": "Context switching saves CPU register state/PC of the current process into its PCB and restores state from the target PCB."
  },
  {
    "id": 46,
    "category": "Process States & PCB",
    "question": "Which event typically moves a process from Running to Waiting?",
    "options": [
      "CPU allocation",
      "I/O request",
      "Program installation",
      "System shutdown"
    ],
    "answerIndex": 1,
    "explanation": "When a process requests an I/O operation or resource wait, the OS transitions it from Running to Waiting state."
  },
  {
    "id": 47,
    "category": "Process States & PCB",
    "question": "Which event moves a process from Waiting to Ready?",
    "options": [
      "CPU timeout",
      "Completion of I/O operation",
      "Process creation",
      "Context switch"
    ],
    "answerIndex": 1,
    "explanation": "Once an I/O request completes or an event occurs, the process moves from Waiting back to the Ready queue."
  },
  {
    "id": 48,
    "category": "Process States & PCB",
    "question": "Which event moves a process from Ready to Running?",
    "options": [
      "CPU scheduler dispatches it",
      "I/O completion",
      "Program compilation",
      "Process termination"
    ],
    "answerIndex": 0,
    "explanation": "The CPU scheduler dispatch action selects a Ready process and assigns CPU control to it."
  },
  {
    "id": 49,
    "category": "Process States & PCB",
    "question": "Which statement about context switching is correct?",
    "options": [
      "It executes two processes simultaneously.",
      "It switches the CPU from one process to another.",
      "It increases RAM size.",
      "It permanently deletes a process."
    ],
    "answerIndex": 1,
    "explanation": "Context switching transfers processor CPU execution from one active process context to another."
  },
  {
    "id": 50,
    "category": "Process States & PCB",
    "question": "Which statement is correct?",
    "options": [
      "PCB is shared by all processes.",
      "Every process has its own PCB maintained by the operating system.",
      "Programs have PCBs before execution.",
      "Only terminated processes have PCBs."
    ],
    "answerIndex": 1,
    "explanation": "The kernel creates and maintains a distinct PCB for every active process in the system."
  },
  {
    "id": 51,
    "category": "CPU Scheduling",
    "question": "What is the primary objective of CPU scheduling?",
    "options": [
      "Increase hard disk capacity",
      "Maximize CPU utilization",
      "Increase RAM size",
      "Reduce monitor resolution"
    ],
    "answerIndex": 1,
    "explanation": "CPU scheduling aims to keep the CPU as busy as possible (maximizing CPU utilization and throughput)."
  },
  {
    "id": 52,
    "category": "CPU Scheduling",
    "question": "CPU scheduling is mainly required because:",
    "options": [
      "The CPU is much slower than I/O devices.",
      "Processes compete for CPU time.",
      "Hard disks are slow.",
      "Files require scheduling."
    ],
    "answerIndex": 1,
    "explanation": "In multiprogramming systems, multiple concurrent processes compete for processor CPU time."
  },
  {
    "id": 53,
    "category": "CPU Scheduling",
    "question": "Which queue contains processes ready to execute?",
    "options": [
      "Job Queue",
      "Device Queue",
      "Ready Queue",
      "Waiting Queue"
    ],
    "answerIndex": 2,
    "explanation": "Processes loaded in main memory waiting to be assigned CPU time reside in the Ready Queue."
  },
  {
    "id": 54,
    "category": "CPU Scheduling",
    "question": "Which queue contains processes waiting for an I/O device?",
    "options": [
      "Ready Queue",
      "Device Queue",
      "Job Queue",
      "Exit Queue"
    ],
    "answerIndex": 1,
    "explanation": "Processes blocked waiting for a specific I/O device reside in that device's I/O queue."
  },
  {
    "id": 55,
    "category": "CPU Scheduling",
    "question": "Which scheduler selects a process from the Ready Queue?",
    "options": [
      "Long-Term Scheduler",
      "Medium-Term Scheduler",
      "Short-Term Scheduler (CPU Scheduler)",
      "Device Scheduler"
    ],
    "answerIndex": 2,
    "explanation": "The Short-Term Scheduler (CPU Scheduler) selects from the Ready Queue to grant CPU execution."
  },
  {
    "id": 56,
    "category": "CPU Scheduling",
    "question": "Which scheduler controls the degree of multiprogramming?",
    "options": [
      "Long-Term Scheduler",
      "CPU Scheduler",
      "Dispatcher",
      "Device Scheduler"
    ],
    "answerIndex": 0,
    "explanation": "The Long-Term Scheduler (Job Scheduler) determines which jobs are admitted into main memory, controlling multiprogramming degree."
  },
  {
    "id": 57,
    "category": "CPU Scheduling",
    "question": "Which component actually transfers CPU control to the selected process?",
    "options": [
      "Scheduler",
      "Dispatcher",
      "Compiler",
      "Linker"
    ],
    "answerIndex": 1,
    "explanation": "The Dispatcher module performs context switching, mode switching, and jumping to proper location to start selected process."
  },
  {
    "id": 58,
    "category": "CPU Scheduling",
    "question": "Dispatcher latency refers to:",
    "options": [
      "Time to load the operating system.",
      "Time taken to switch the CPU to another process.",
      "Hard disk access time.",
      "Network transmission delay."
    ],
    "answerIndex": 1,
    "explanation": "Dispatcher latency is the overhead time required by dispatcher to stop one process and start running another."
  },
  {
    "id": 59,
    "category": "CPU Scheduling",
    "question": "Which scheduling algorithm is the simplest?",
    "options": [
      "Round Robin",
      "FCFS",
      "SJF",
      "Priority"
    ],
    "answerIndex": 1,
    "explanation": "First-Come, First-Served (FCFS) is conceptually simplest, executing processes in order of arrival using a FIFO queue."
  },
  {
    "id": 60,
    "category": "CPU Scheduling",
    "question": "Which scheduling algorithm uses the concept of a time quantum?",
    "options": [
      "FCFS",
      "SJF",
      "Priority",
      "Round Robin"
    ],
    "answerIndex": 3,
    "explanation": "Round Robin (RR) scheduling allocates CPU execution in fixed equal time slices called time quanta."
  },
  {
    "id": 61,
    "category": "CPU Scheduling",
    "question": "Turnaround Time is:",
    "options": [
      "Execution Time only",
      "Completion Time \u2212 Arrival Time",
      "Waiting Time only",
      "Response Time only"
    ],
    "answerIndex": 1,
    "explanation": "Turnaround Time (TAT) is total interval from process submission to completion: TAT = Completion Time - Arrival Time."
  },
  {
    "id": 62,
    "category": "CPU Scheduling",
    "question": "Waiting Time refers to:",
    "options": [
      "Time spent executing",
      "Time spent waiting in the Ready Queue",
      "Disk access time",
      "Context switch time"
    ],
    "answerIndex": 1,
    "explanation": "Waiting Time is total sum of time intervals spent waiting in the Ready Queue for CPU allocation."
  },
  {
    "id": 63,
    "category": "CPU Scheduling",
    "question": "Response Time measures:",
    "options": [
      "Total execution time",
      "Time from submission until the first CPU allocation",
      "Waiting plus execution time",
      "Idle CPU time"
    ],
    "answerIndex": 1,
    "explanation": "Response Time is time elapsed from process submission until its first response / first CPU time allocation."
  },
  {
    "id": 64,
    "category": "CPU Scheduling",
    "question": "Throughput refers to:",
    "options": [
      "CPU frequency",
      "Number of processes completed per unit time",
      "Memory size",
      "Number of users"
    ],
    "answerIndex": 1,
    "explanation": "Throughput is a performance metric measuring number of processes completed per unit of time."
  },
  {
    "id": 65,
    "category": "CPU Scheduling",
    "question": "Which is generally considered the most desirable scheduling objective?",
    "options": [
      "Maximize waiting time",
      "Maximize turnaround time",
      "Maximize CPU utilization and throughput",
      "Increase context switching"
    ],
    "answerIndex": 2,
    "explanation": "Optimal scheduling maximizes CPU utilization and throughput while minimizing waiting time, turnaround time, and response time."
  },
  {
    "id": 66,
    "category": "CPU Scheduling",
    "question": "FCFS stands for:",
    "options": [
      "First Come First Serve",
      "First Compute First Schedule",
      "Fast CPU First System",
      "File Control First System"
    ],
    "answerIndex": 0,
    "explanation": "FCFS stands for First-Come, First-Served scheduling."
  },
  {
    "id": 67,
    "category": "CPU Scheduling",
    "question": "FCFS schedules processes according to:",
    "options": [
      "Burst Time",
      "Priority",
      "Arrival Time",
      "Process ID"
    ],
    "answerIndex": 2,
    "explanation": "FCFS assigns CPU time according to exact process arrival time in the ready queue."
  },
  {
    "id": 68,
    "category": "CPU Scheduling",
    "question": "FCFS is:",
    "options": [
      "Preemptive",
      "Non-preemptive",
      "Hybrid",
      "Dynamic"
    ],
    "answerIndex": 1,
    "explanation": "FCFS is non-preemptive: once a process is allocated CPU, it retains control until it completes or requests I/O."
  },
  {
    "id": 69,
    "category": "CPU Scheduling",
    "question": "Which disadvantage is associated with FCFS?",
    "options": [
      "Starvation",
      "Convoy Effect",
      "Deadlock",
      "Fragmentation"
    ],
    "answerIndex": 1,
    "explanation": "FCFS suffers from the Convoy Effect where small processes wait behind a long CPU-bound process."
  },
  {
    "id": 70,
    "category": "CPU Scheduling",
    "question": "The Convoy Effect occurs when:",
    "options": [
      "Many short processes wait behind one long process.",
      "All processes have equal priority.",
      "Context switching increases.",
      "Memory becomes fragmented."
    ],
    "answerIndex": 0,
    "explanation": "The Convoy Effect describes performance degradation when short processes wait behind a single CPU-heavy process."
  },
  {
    "id": 71,
    "category": "CPU Scheduling",
    "question": "FCFS is easiest to implement because it:",
    "options": [
      "Uses priorities.",
      "Uses a simple FIFO queue.",
      "Requires prediction.",
      "Uses time slices."
    ],
    "answerIndex": 1,
    "explanation": "FCFS requires only a simple First-In-First-Out (FIFO) queue data structure."
  },
  {
    "id": 72,
    "category": "CPU Scheduling",
    "question": "Which scheduling algorithm behaves like people standing in a ticket line?",
    "options": [
      "SJF",
      "FCFS",
      "Round Robin",
      "Priority"
    ],
    "answerIndex": 1,
    "explanation": "FCFS acts like a physical queue where first arrival is served first."
  },
  {
    "id": 73,
    "category": "CPU Scheduling",
    "question": "Which scheduling algorithm does NOT require knowledge of CPU burst time?",
    "options": [
      "FCFS",
      "SJF",
      "Priority",
      "Shortest Remaining Time First"
    ],
    "answerIndex": 0,
    "explanation": "FCFS only relies on arrival sequence, requiring zero estimation of CPU burst lengths."
  },
  {
    "id": 74,
    "category": "CPU Scheduling",
    "question": "Which statement about FCFS is TRUE?",
    "options": [
      "It minimizes average waiting time.",
      "It is fair based on arrival order.",
      "It always favors short jobs.",
      "It uses priorities."
    ],
    "answerIndex": 1,
    "explanation": "FCFS is strictly fair in terms of arrival chronology, though inefficient for average wait time."
  },
  {
    "id": 75,
    "category": "CPU Scheduling",
    "question": "Which workload performs poorly under FCFS?",
    "options": [
      "Many short jobs behind one long job",
      "Single process",
      "Equal burst times",
      "Idle CPU"
    ],
    "answerIndex": 0,
    "explanation": "A CPU-bound long process blocking multiple I/O-bound short jobs causes severe throughput drop under FCFS."
  },
  {
    "id": 76,
    "category": "CPU Scheduling",
    "question": "SJF stands for:",
    "options": [
      "Shortest Job First",
      "Simple Job First",
      "Scheduled Job First",
      "Small Job Function"
    ],
    "answerIndex": 0,
    "explanation": "SJF stands for Shortest Job First scheduling algorithm."
  },
  {
    "id": 77,
    "category": "CPU Scheduling",
    "question": "SJF selects the process with:",
    "options": [
      "Highest priority",
      "Smallest CPU burst time",
      "Earliest arrival",
      "Lowest PID"
    ],
    "answerIndex": 1,
    "explanation": "SJF selects the ready process having the smallest next CPU burst duration."
  },
  {
    "id": 78,
    "category": "CPU Scheduling",
    "question": "Which scheduling algorithm provides the minimum average waiting time (ideal case)?",
    "options": [
      "FCFS",
      "SJF",
      "Round Robin",
      "Priority"
    ],
    "answerIndex": 1,
    "explanation": "SJF is provably optimal for minimizing average waiting time for a given set of processes."
  },
  {
    "id": 79,
    "category": "CPU Scheduling",
    "question": "Which information must be estimated in SJF?",
    "options": [
      "Arrival time",
      "CPU burst time",
      "Process ID",
      "Memory size"
    ],
    "answerIndex": 1,
    "explanation": "SJF requires predicting/estimating future CPU burst lengths (often using exponential averaging)."
  },
  {
    "id": 80,
    "category": "CPU Scheduling",
    "question": "Which is the major limitation of SJF?",
    "options": [
      "Difficult to predict future CPU burst length",
      "Requires no calculations.",
      "Uses excessive memory.",
      "Requires multiple CPUs."
    ],
    "answerIndex": 0,
    "explanation": "Knowing exact upcoming CPU burst length in advance is difficult/impossible in general-purpose computing."
  },
  {
    "id": 81,
    "category": "CPU Scheduling",
    "question": "Preemptive SJF is also known as:",
    "options": [
      "FCFS",
      "Shortest Remaining Time First (SRTF)",
      "Priority Scheduling",
      "Round Robin"
    ],
    "answerIndex": 1,
    "explanation": "Preemptive SJF is known as Shortest Remaining Time First (SRTF)."
  },
  {
    "id": 82,
    "category": "CPU Scheduling",
    "question": "Which process may suffer starvation in SJF?",
    "options": [
      "Short processes",
      "Long processes",
      "I/O processes",
      "Parent processes"
    ],
    "answerIndex": 1,
    "explanation": "Long CPU-bound processes may starve in SJF if short processes continuously arrive."
  },
  {
    "id": 83,
    "category": "CPU Scheduling",
    "question": "SRTF differs from non-preemptive SJF because:",
    "options": [
      "It allows interruption of the running process.",
      "It ignores burst time.",
      "It uses priorities.",
      "It never preempts."
    ],
    "answerIndex": 0,
    "explanation": "SRTF preempts the current running process if a new process arrives with a shorter remaining CPU burst."
  },
  {
    "id": 84,
    "category": "CPU Scheduling",
    "question": "Which algorithm generally produces lower average waiting time than FCFS?",
    "options": [
      "SJF",
      "FIFO",
      "Round Robin (large quantum)",
      "Random Scheduling"
    ],
    "answerIndex": 0,
    "explanation": "SJF prioritizes shorter jobs, yielding significantly lower overall average waiting time compared to FCFS."
  },
  {
    "id": 85,
    "category": "CPU Scheduling",
    "question": "Which statement is correct?",
    "options": [
      "SJF always executes the first arriving process.",
      "SJF chooses the process with the shortest estimated CPU burst.",
      "SJF is always preemptive.",
      "SJF ignores burst time."
    ],
    "answerIndex": 1,
    "explanation": "SJF evaluates candidates based on shortest estimated upcoming CPU burst time."
  },
  {
    "id": 86,
    "category": "CPU Scheduling",
    "question": "Priority Scheduling executes:",
    "options": [
      "First arriving process",
      "Process with highest priority",
      "Shortest burst process only",
      "Largest process"
    ],
    "answerIndex": 1,
    "explanation": "Priority Scheduling assigns CPU to the process with the highest priority rank (highest priority value)."
  },
  {
    "id": 87,
    "category": "CPU Scheduling",
    "question": "In Priority Scheduling, starvation may occur for:",
    "options": [
      "High-priority processes",
      "Low-priority processes",
      "Parent processes",
      "Zombie processes"
    ],
    "answerIndex": 1,
    "explanation": "Low-priority processes can suffer indefinite postponement (starvation) if higher priority processes continuously arrive."
  },
  {
    "id": 88,
    "category": "CPU Scheduling",
    "question": "Which technique helps prevent starvation in Priority Scheduling?",
    "options": [
      "Paging",
      "Aging",
      "Swapping",
      "Segmentation"
    ],
    "answerIndex": 1,
    "explanation": "Aging prevents starvation by gradually increasing the priority of processes waiting in ready queue over time."
  },
  {
    "id": 89,
    "category": "CPU Scheduling",
    "question": "Aging means:",
    "options": [
      "Increasing memory size",
      "Gradually increasing the priority of waiting processes",
      "Decreasing CPU speed",
      "Increasing burst time"
    ],
    "answerIndex": 1,
    "explanation": "Aging increases waiting task priority incrementally as time passes so low-priority tasks eventually run."
  },
  {
    "id": 90,
    "category": "CPU Scheduling",
    "question": "Round Robin is primarily designed for:",
    "options": [
      "Batch systems",
      "Interactive systems",
      "Embedded systems",
      "Multiprocessor systems"
    ],
    "answerIndex": 1,
    "explanation": "Round Robin is optimized for time-sharing and interactive system responsiveness."
  },
  {
    "id": 91,
    "category": "CPU Scheduling",
    "question": "Round Robin allocates CPU for a fixed:",
    "options": [
      "Burst",
      "Time Quantum",
      "Priority",
      "Arrival Time"
    ],
    "answerIndex": 1,
    "explanation": "Round Robin grants CPU execution for a fixed interval known as time quantum or time slice."
  },
  {
    "id": 92,
    "category": "CPU Scheduling",
    "question": "If the time quantum is too large, Round Robin behaves like:",
    "options": [
      "SJF",
      "FCFS",
      "Priority",
      "Lottery Scheduling"
    ],
    "answerIndex": 1,
    "explanation": "If time quantum approaches infinity, no preemption occurs during execution, making RR degenerate into FCFS."
  },
  {
    "id": 93,
    "category": "CPU Scheduling",
    "question": "If the time quantum is too small:",
    "options": [
      "Context switching increases.",
      "CPU utilization becomes zero.",
      "Waiting time becomes zero.",
      "Burst time decreases."
    ],
    "answerIndex": 0,
    "explanation": "An extremely small time quantum causes context switching overhead to dominate, degrading CPU performance."
  },
  {
    "id": 94,
    "category": "CPU Scheduling",
    "question": "Which scheduling algorithm is considered the fairest because every process receives equal CPU time?",
    "options": [
      "FCFS",
      "Round Robin",
      "SJF",
      "Priority"
    ],
    "answerIndex": 1,
    "explanation": "Round Robin is fair as it allocates equal CPU time slices cyclically across all active processes."
  },
  {
    "id": 95,
    "category": "CPU Scheduling",
    "question": "Which scheduling algorithm is most suitable for time-sharing systems?",
    "options": [
      "FCFS",
      "Round Robin",
      "SJF",
      "Batch Scheduling"
    ],
    "answerIndex": 1,
    "explanation": "Round Robin provides fast initial response times essential for multi-user time-sharing systems."
  },
  {
    "id": 96,
    "category": "CPU Scheduling",
    "question": "Which scheduling algorithm can be both preemptive and non-preemptive?",
    "options": [
      "Priority Scheduling",
      "FCFS",
      "SJF only",
      "Round Robin only"
    ],
    "answerIndex": 0,
    "explanation": "Priority Scheduling can be implemented in either preemptive or non-preemptive modes."
  },
  {
    "id": 97,
    "category": "CPU Scheduling",
    "question": "Which scheduling algorithm is most likely to minimize response time for interactive users?",
    "options": [
      "Round Robin",
      "FCFS",
      "Non-preemptive SJF",
      "Batch Scheduling"
    ],
    "answerIndex": 0,
    "explanation": "Round Robin gives every process prompt initial access to CPU, minimizing interactive response time."
  },
  {
    "id": 98,
    "category": "CPU Scheduling",
    "question": "Which scheduling algorithm may lead to starvation without aging?",
    "options": [
      "FCFS",
      "Priority Scheduling",
      "Round Robin",
      "FIFO"
    ],
    "answerIndex": 1,
    "explanation": "Priority Scheduling suffers from starvation unless an aging mechanism is incorporated."
  },
  {
    "id": 99,
    "category": "CPU Scheduling",
    "question": "Which scheduling algorithm relies most heavily on selecting the process with the smallest CPU burst?",
    "options": [
      "FCFS",
      "SJF",
      "Round Robin",
      "Priority"
    ],
    "answerIndex": 1,
    "explanation": "Shortest Job First (SJF) is defined by picking the candidate with smallest burst length."
  },
  {
    "id": 100,
    "category": "CPU Scheduling",
    "question": "Which statement is correct?",
    "options": [
      "FCFS uses time quantum.",
      "Round Robin allocates CPU for fixed time slices, while SJF selects the shortest CPU burst.",
      "Priority Scheduling always prevents starvation.",
      "SJF never requires burst-time estimation."
    ],
    "answerIndex": 1,
    "explanation": "RR uses fixed time quanta whereas SJF prioritizes shortest estimated CPU burst duration."
  },
  {
    "id": 101,
    "category": "Threads",
    "question": "A thread is best described as:",
    "options": [
      "An independent operating system",
      "The smallest unit of CPU execution within a process",
      "A memory management technique",
      "A scheduling algorithm"
    ],
    "answerIndex": 1,
    "explanation": "A thread is a lightweight execution unit inside a process containing its own stack, registers, and PC."
  },
  {
    "id": 102,
    "category": "Threads",
    "question": "Which resource is shared by all threads of the same process?",
    "options": [
      "Program Counter",
      "Stack",
      "Registers",
      "Address Space"
    ],
    "answerIndex": 3,
    "explanation": "Threads of a single process share code segment, data segment, global variables, and memory address space."
  },
  {
    "id": 103,
    "category": "Threads",
    "question": "Each thread has its own:",
    "options": [
      "Code Segment",
      "Heap",
      "Program Counter and Stack",
      "Global Variables"
    ],
    "answerIndex": 2,
    "explanation": "Each thread maintains its private Program Counter, register set, and execution stack."
  },
  {
    "id": 104,
    "category": "Threads",
    "question": "Which statement about threads is TRUE?",
    "options": [
      "Threads belonging to the same process share memory.",
      "Threads have separate address spaces.",
      "Threads cannot communicate.",
      "Every thread is an independent process."
    ],
    "answerIndex": 0,
    "explanation": "Threads in the same process share memory address space enabling direct low-overhead communication."
  },
  {
    "id": 105,
    "category": "Threads",
    "question": "Creating a thread is generally:",
    "options": [
      "More expensive than creating a process.",
      "Less expensive than creating a process.",
      "Impossible in modern operating systems.",
      "Slower than context switching."
    ],
    "answerIndex": 1,
    "explanation": "Thread creation requires fewer OS allocations than process creation, making threads lightweight."
  },
  {
    "id": 106,
    "category": "Threads",
    "question": "Which is the major advantage of multithreading?",
    "options": [
      "Eliminates RAM usage.",
      "Improves responsiveness and resource utilization.",
      "Removes synchronization problems.",
      "Prevents deadlocks."
    ],
    "answerIndex": 1,
    "explanation": "Multithreading enhances UI responsiveness, parallelism, and resource sharing within application."
  },
  {
    "id": 107,
    "category": "Threads",
    "question": "Switching between threads of the same process is usually:",
    "options": [
      "Slower than process switching.",
      "Faster than process switching.",
      "Equal to rebooting.",
      "Impossible."
    ],
    "answerIndex": 1,
    "explanation": "Thread switching does not require changing virtual memory page tables, making it much faster than process context switching."
  },
  {
    "id": 108,
    "category": "Threads",
    "question": "Which of the following is NOT shared among threads?",
    "options": [
      "Heap",
      "Open files",
      "Stack",
      "Code"
    ],
    "answerIndex": 2,
    "explanation": "Stack memory is per-thread private storage for local variables and call frames."
  },
  {
    "id": 109,
    "category": "Threads",
    "question": "A web browser opening multiple tabs is commonly an example of:",
    "options": [
      "Paging",
      "Multithreading",
      "Fragmentation",
      "Deadlock"
    ],
    "answerIndex": 1,
    "explanation": "Modern software like browser tabs use multithreading (or multi-process threading) for parallel rendering."
  },
  {
    "id": 110,
    "category": "Threads",
    "question": "If one thread modifies a global variable, other threads of the same process:",
    "options": [
      "Cannot access it.",
      "Can access the updated value.",
      "Must restart.",
      "Create separate copies automatically."
    ],
    "answerIndex": 1,
    "explanation": "Because threads share global variables and heap in address space, modifications are visible across all threads."
  },
  {
    "id": 111,
    "category": "Threads",
    "question": "Which statement distinguishes a thread from a process?",
    "options": [
      "Threads have separate address spaces.",
      "Threads share the address space of their process.",
      "Threads cannot execute independently.",
      "Processes always share memory."
    ],
    "answerIndex": 1,
    "explanation": "Processes have isolated address spaces, while threads belonging to one process share their address space."
  },
  {
    "id": 112,
    "category": "Threads",
    "question": "Which is more lightweight?",
    "options": [
      "Process",
      "Thread",
      "Program",
      "PCB"
    ],
    "answerIndex": 1,
    "explanation": "A thread is lightweight because it shares process resources and requires minimal context overhead."
  },
  {
    "id": 113,
    "category": "Threads",
    "question": "Which scheduling entity usually receives CPU time?",
    "options": [
      "File",
      "Thread",
      "Hard Disk",
      "Compiler"
    ],
    "answerIndex": 1,
    "explanation": "In modern OS kernels, the thread is the basic dispatchable unit scheduled for CPU time."
  },
  {
    "id": 114,
    "category": "Threads",
    "question": "If one thread crashes due to illegal memory access, what usually happens?",
    "options": [
      "Only that thread terminates.",
      "The entire process may terminate.",
      "The operating system shuts down.",
      "The CPU resets."
    ],
    "answerIndex": 1,
    "explanation": "Because threads share memory space, an unhandled fault (like segfault) in one thread usually crashes the entire process."
  },
  {
    "id": 115,
    "category": "Threads",
    "question": "Which thread model is managed entirely by the operating system?",
    "options": [
      "User-Level Thread",
      "Kernel-Level Thread",
      "Hybrid Thread",
      "Virtual Thread"
    ],
    "answerIndex": 1,
    "explanation": "Kernel-Level Threads (KLT) are created, scheduled, and managed directly by the OS kernel."
  },
  {
    "id": 116,
    "category": "Threads",
    "question": "User-level threads are managed by:",
    "options": [
      "BIOS",
      "Thread Library",
      "File System",
      "Scheduler only"
    ],
    "answerIndex": 1,
    "explanation": "User-Level Threads (ULT) are created and managed by user-space thread libraries without kernel awareness."
  },
  {
    "id": 117,
    "category": "Threads",
    "question": "Which thread model generally has lower creation overhead?",
    "options": [
      "Kernel Threads",
      "User Threads",
      "Hybrid Threads",
      "Distributed Threads"
    ],
    "answerIndex": 1,
    "explanation": "User threads avoid kernel system call overhead during creation, yielding lower creation overhead."
  },
  {
    "id": 118,
    "category": "Threads",
    "question": "Which problem occurs when multiple threads access shared data simultaneously?",
    "options": [
      "Paging",
      "Race Condition",
      "Swapping",
      "Thrashing"
    ],
    "answerIndex": 1,
    "explanation": "Unsynchronized concurrent access to shared data by multiple threads can lead to race conditions."
  },
  {
    "id": 119,
    "category": "Threads",
    "question": "Which OS feature is most closely associated with threads?",
    "options": [
      "Concurrency",
      "Formatting",
      "Booting",
      "Segmentation"
    ],
    "answerIndex": 0,
    "explanation": "Threads provide concurrent execution within an application process."
  },
  {
    "id": 120,
    "category": "Threads",
    "question": "Which statement is correct?",
    "options": [
      "Every process contains exactly one thread.",
      "Multiple threads within a process execute concurrently and share resources.",
      "Threads never require synchronization.",
      "Threads cannot share memory."
    ],
    "answerIndex": 1,
    "explanation": "Multithreading enables concurrent thread execution while sharing process memory and resources."
  },
  {
    "id": 121,
    "category": "Process Synchronization",
    "question": "Process synchronization is required because:",
    "options": [
      "Processes share resources.",
      "Hard disks are slow.",
      "CPU speed is fixed.",
      "Programs are stored on disk."
    ],
    "answerIndex": 0,
    "explanation": "Synchronization is required to coordinate processes sharing access to data and resources safely."
  },
  {
    "id": 122,
    "category": "Process Synchronization",
    "question": "Which problem occurs when multiple processes modify shared data without coordination?",
    "options": [
      "Deadlock",
      "Race Condition",
      "Paging",
      "Swapping"
    ],
    "answerIndex": 1,
    "explanation": "Lack of coordination during concurrent shared data modification results in race conditions."
  },
  {
    "id": 123,
    "category": "Process Synchronization",
    "question": "A race condition occurs when:",
    "options": [
      "Processes execute in alphabetical order.",
      "The final result depends on execution timing.",
      "CPU utilization reaches 100%.",
      "Memory becomes fragmented."
    ],
    "answerIndex": 1,
    "explanation": "A race condition happens when output depends on non-deterministic order or timing of execution."
  },
  {
    "id": 124,
    "category": "Process Synchronization",
    "question": "The Critical Section is:",
    "options": [
      "A memory region.",
      "A code segment accessing shared resources.",
      "A scheduler queue.",
      "A disk partition."
    ],
    "answerIndex": 1,
    "explanation": "The Critical Section is a segment of code where shared resources (variables, files) are accessed."
  },
  {
    "id": 125,
    "category": "Process Synchronization",
    "question": "Only one process should execute inside the Critical Section at a time because:",
    "options": [
      "It improves graphics.",
      "It prevents inconsistent shared data.",
      "It reduces RAM.",
      "It increases processor speed."
    ],
    "answerIndex": 1,
    "explanation": "Mutual exclusion inside critical section prevents race conditions and data inconsistency."
  },
  {
    "id": 126,
    "category": "Process Synchronization",
    "question": "Which property requires only one process to enter the Critical Section at a time?",
    "options": [
      "Fairness",
      "Mutual Exclusion",
      "Starvation",
      "Thrashing"
    ],
    "answerIndex": 1,
    "explanation": "Mutual Exclusion dictates that if process P is executing in its critical section, no other process can enter theirs."
  },
  {
    "id": 127,
    "category": "Process Synchronization",
    "question": "Which is NOT a Critical Section requirement?",
    "options": [
      "Mutual Exclusion",
      "Progress",
      "Bounded Waiting",
      "Paging"
    ],
    "answerIndex": 3,
    "explanation": "The three canonical requirements for critical section solution are Mutual Exclusion, Progress, and Bounded Waiting."
  },
  {
    "id": 128,
    "category": "Process Synchronization",
    "question": "Which Critical Section requirement ensures no process waits forever?",
    "options": [
      "Progress",
      "Bounded Waiting",
      "Mutual Exclusion",
      "Preemption"
    ],
    "answerIndex": 1,
    "explanation": "Bounded Waiting sets a limit on times other processes can enter critical section after a request is made."
  },
  {
    "id": 129,
    "category": "Process Synchronization",
    "question": "Progress means:",
    "options": [
      "Waiting forever.",
      "Selection of the next process cannot be postponed indefinitely.",
      "Increasing memory.",
      "Switching threads."
    ],
    "answerIndex": 1,
    "explanation": "Progress ensures that if no process is in critical section, eligible candidates are not delayed indefinitely."
  },
  {
    "id": 130,
    "category": "Process Synchronization",
    "question": "Which issue may occur if synchronization is absent?",
    "options": [
      "Incorrect program output",
      "Better CPU utilization",
      "Faster scheduling",
      "Reduced memory usage"
    ],
    "answerIndex": 0,
    "explanation": "Absence of synchronization allows race conditions, causing corrupted state and incorrect program outputs."
  },
  {
    "id": 131,
    "category": "Process Synchronization",
    "question": "Which synchronization problem is demonstrated when two bank transactions update the same balance simultaneously?",
    "options": [
      "Fragmentation",
      "Race Condition",
      "Paging",
      "Deadlock"
    ],
    "answerIndex": 1,
    "explanation": "Simultaneous balance updates without locking cause lost updates due to race conditions."
  },
  {
    "id": 132,
    "category": "Process Synchronization",
    "question": "Which synchronization primitive directly provides mutual exclusion?",
    "options": [
      "Semaphore",
      "Mutex",
      "PCB",
      "Scheduler"
    ],
    "answerIndex": 1,
    "explanation": "A Mutex (Mutual Exclusion lock) is designed specifically to enforce exclusive single-thread locking."
  },
  {
    "id": 133,
    "category": "Process Synchronization",
    "question": "Which concept ensures safe access to shared variables?",
    "options": [
      "Synchronization",
      "Paging",
      "Swapping",
      "Virtual Memory"
    ],
    "answerIndex": 0,
    "explanation": "Synchronization primitives coordinate access to maintain consistency of shared variables."
  },
  {
    "id": 134,
    "category": "Process Synchronization",
    "question": "Busy Waiting means:",
    "options": [
      "A process repeatedly checks a condition instead of sleeping.",
      "CPU is powered off.",
      "Waiting for RAM.",
      "Waiting for network packets."
    ],
    "answerIndex": 0,
    "explanation": "Busy waiting (spin-locking) keeps a process repeatedly polling a condition in a loop, consuming CPU cycles."
  },
  {
    "id": 135,
    "category": "Process Synchronization",
    "question": "Which statement is TRUE?",
    "options": [
      "Synchronization is unnecessary in concurrent programs.",
      "Race conditions occur due to unsynchronized shared resource access.",
      "Critical Sections increase inconsistency.",
      "Threads never share resources."
    ],
    "answerIndex": 1,
    "explanation": "Unsynchronized access to shared memory among concurrent entities leads directly to race conditions."
  },
  {
    "id": 136,
    "category": "Semaphore & Mutex",
    "question": "A semaphore is primarily used for:",
    "options": [
      "Memory allocation",
      "Process synchronization",
      "Disk formatting",
      "Routing"
    ],
    "answerIndex": 1,
    "explanation": "A Semaphore is an integer variable used for process synchronization and controlling resource access."
  },
  {
    "id": 137,
    "category": "Semaphore & Mutex",
    "question": "Which semaphore operation decreases its value?",
    "options": [
      "Signal (V)",
      "Wait (P)",
      "Reset",
      "Lock"
    ],
    "answerIndex": 1,
    "explanation": "The Wait (or P / down) operation decrements the semaphore value (and blocks if value < 0)."
  },
  {
    "id": 138,
    "category": "Semaphore & Mutex",
    "question": "Which semaphore operation increases its value?",
    "options": [
      "Wait (P)",
      "Signal (V)",
      "Lock",
      "Sleep"
    ],
    "answerIndex": 1,
    "explanation": "The Signal (or V / up) operation increments the semaphore value (unblocking waiting processes)."
  },
  {
    "id": 139,
    "category": "Semaphore & Mutex",
    "question": "A binary semaphore can have values:",
    "options": [
      "Any positive integer",
      "0 or 1",
      "Only 10",
      "Unlimited"
    ],
    "answerIndex": 1,
    "explanation": "Binary semaphores are restricted strictly to values 0 and 1 (acting like a lock)."
  },
  {
    "id": 140,
    "category": "Semaphore & Mutex",
    "question": "Counting semaphores are mainly used when:",
    "options": [
      "Multiple identical resources exist.",
      "Only one resource exists.",
      "Memory is fragmented.",
      "Paging occurs."
    ],
    "answerIndex": 0,
    "explanation": "Counting semaphores control access to a resource pool containing multiple identical resource instances."
  },
  {
    "id": 141,
    "category": "Semaphore & Mutex",
    "question": "A mutex differs from a semaphore because:",
    "options": [
      "A mutex has ownership; only the locking thread can unlock it.",
      "Mutex allows unlimited owners.",
      "Semaphore has ownership.",
      "Mutex cannot synchronize threads."
    ],
    "answerIndex": 0,
    "explanation": "A Mutex has an ownership concept: only the thread that locked the mutex is allowed to unlock it."
  },
  {
    "id": 142,
    "category": "Semaphore & Mutex",
    "question": "Which synchronization primitive is generally preferred for protecting a single shared resource?",
    "options": [
      "Counting Semaphore",
      "Mutex",
      "PCB",
      "Page Table"
    ],
    "answerIndex": 1,
    "explanation": "A Mutex is optimized specifically for single shared resource mutual exclusion locking."
  },
  {
    "id": 143,
    "category": "Semaphore & Mutex",
    "question": "Which synchronization primitive can control access to multiple identical resources?",
    "options": [
      "Mutex",
      "Counting Semaphore",
      "Program Counter",
      "Stack"
    ],
    "answerIndex": 1,
    "explanation": "Counting Semaphores manage multiple instances of identical available resources."
  },
  {
    "id": 144,
    "category": "Semaphore & Mutex",
    "question": "If a semaphore value becomes zero and another process performs a Wait operation:",
    "options": [
      "It continues immediately.",
      "It blocks until a Signal operation occurs.",
      "It terminates.",
      "It gains higher priority."
    ],
    "answerIndex": 1,
    "explanation": "When semaphore value is 0, performing Wait() blocks the calling process until another calls Signal()."
  },
  {
    "id": 145,
    "category": "Semaphore & Mutex",
    "question": "Which synchronization mechanism is commonly used between independent processes?",
    "options": [
      "Semaphore",
      "Program Counter",
      "Stack",
      "Heap"
    ],
    "answerIndex": 0,
    "explanation": "Named semaphores are commonly used for synchronization between distinct independent processes."
  },
  {
    "id": 146,
    "category": "Semaphore & Mutex",
    "question": "Which synchronization mechanism is most suitable for protecting a printer used by only one process at a time?",
    "options": [
      "Mutex",
      "Counting Semaphore",
      "Paging",
      "Swapping"
    ],
    "answerIndex": 0,
    "explanation": "A Mutex ensures single exclusive access to a non-sharable resource like a printer."
  },
  {
    "id": 147,
    "category": "Semaphore & Mutex",
    "question": "Incorrect use of semaphores may lead to:",
    "options": [
      "Deadlock",
      "Paging",
      "Fragmentation",
      "Boot Failure"
    ],
    "answerIndex": 0,
    "explanation": "Improper order of wait/signal calls on semaphores can cause circular waits leading to Deadlock."
  },
  {
    "id": 148,
    "category": "Semaphore & Mutex",
    "question": "Which statement is TRUE?",
    "options": [
      "Mutex allows multiple owners simultaneously.",
      "Binary semaphore and mutex are conceptually similar, but mutex enforces ownership.",
      "Semaphore is used only for memory management.",
      "Mutex eliminates context switching."
    ],
    "answerIndex": 1,
    "explanation": "Binary semaphore and mutex both provide 0/1 locking, but mutex enforces strict lock ownership."
  },
  {
    "id": 149,
    "category": "Semaphore & Mutex",
    "question": "Which synchronization primitive is more general-purpose?",
    "options": [
      "Semaphore",
      "Mutex",
      "PCB",
      "Cache"
    ],
    "answerIndex": 0,
    "explanation": "Semaphores are versatile primitives capable of expressing mutual exclusion, resource counting, and signaling."
  },
  {
    "id": 150,
    "category": "Semaphore & Mutex",
    "question": "Which statement is correct?",
    "options": [
      "Semaphores and mutexes are synchronization mechanisms used to coordinate concurrent execution and protect shared resources.",
      "Mutex is used for paging.",
      "Semaphore performs CPU scheduling.",
      "Mutex stores process information."
    ],
    "answerIndex": 0,
    "explanation": "Both semaphores and mutexes serve as core primitives for coordinating concurrent tasks and shared resource access."
  },
  {
    "id": 151,
    "category": "Deadlock",
    "question": "A deadlock occurs when:",
    "options": [
      "The CPU becomes idle.",
      "Two or more processes wait indefinitely for resources held by each other.",
      "Memory becomes full.",
      "A process terminates unexpectedly."
    ],
    "answerIndex": 1,
    "explanation": "Deadlock is a state where set of processes are blocked because each holds a resource and waits for another held by another."
  },
  {
    "id": 152,
    "category": "Deadlock",
    "question": "Deadlock mainly occurs due to:",
    "options": [
      "Lack of CPU",
      "Competition for shared resources",
      "Slow hard disks",
      "Low network speed"
    ],
    "answerIndex": 1,
    "explanation": "Deadlocks arise from concurrent processes competing for non-shareable finite resources."
  },
  {
    "id": 153,
    "category": "Deadlock",
    "question": "Which of the following is NOT a resource commonly involved in deadlocks?",
    "options": [
      "Printer",
      "Tape Drive",
      "Semaphore",
      "Source Code File"
    ],
    "answerIndex": 3,
    "explanation": "Source code files on disk are read-only shareable data files, unlike non-shareable exclusive devices/locks."
  },
  {
    "id": 154,
    "category": "Deadlock",
    "question": "Which situation best illustrates a deadlock?",
    "options": [
      "One process waiting for CPU scheduling.",
      "Process P1 waits for a resource held by P2, while P2 waits for a resource held by P1.",
      "A process waiting for user input.",
      "A process performing disk I/O."
    ],
    "answerIndex": 1,
    "explanation": "P1 holding R1 waiting for R2 while P2 holds R2 waiting for R1 forms a classic circular deadlock."
  },
  {
    "id": 155,
    "category": "Deadlock",
    "question": "Which operating system component is mainly responsible for handling deadlocks?",
    "options": [
      "Compiler",
      "Operating System",
      "BIOS",
      "Linker"
    ],
    "answerIndex": 1,
    "explanation": "The Operating System resource manager is responsible for deadlock handling strategies."
  },
  {
    "id": 156,
    "category": "Deadlock",
    "question": "Deadlock can occur only when:",
    "options": [
      "At least two processes compete for resources.",
      "One process exists.",
      "Only one CPU is available.",
      "Memory is fragmented."
    ],
    "answerIndex": 0,
    "explanation": "A deadlock fundamentally requires competition between two or more processes over resources."
  },
  {
    "id": 157,
    "category": "Deadlock",
    "question": "Which statement is TRUE regarding deadlock?",
    "options": [
      "It always crashes the operating system.",
      "Processes involved stop making progress.",
      "It improves CPU utilization.",
      "It increases throughput."
    ],
    "answerIndex": 1,
    "explanation": "Processes locked in deadlock remain blocked indefinitely, halting their progress."
  },
  {
    "id": 158,
    "category": "Deadlock",
    "question": "Which resource characteristic increases the possibility of deadlock?",
    "options": [
      "Unlimited availability",
      "Exclusive use of resources",
      "Infinite memory",
      "Virtual memory"
    ],
    "answerIndex": 1,
    "explanation": "Mutual exclusion (exclusive non-sharable resource access) is a mandatory condition for deadlock."
  },
  {
    "id": 159,
    "category": "Deadlock",
    "question": "Which scheduling algorithm directly prevents deadlocks?",
    "options": [
      "FCFS",
      "Round Robin",
      "None of the above",
      "SJF"
    ],
    "answerIndex": 2,
    "explanation": "Standard CPU scheduling algorithms do not handle resource deadlocks directly."
  },
  {
    "id": 160,
    "category": "Deadlock",
    "question": "Which statement best defines a deadlock?",
    "options": [
      "Temporary CPU delay.",
      "Permanent waiting due to circular resource dependency.",
      "Fast execution.",
      "Memory swapping."
    ],
    "answerIndex": 1,
    "explanation": "Deadlock represents permanent blockage caused by circular dependencies among process resource allocations."
  },
  {
    "id": 161,
    "category": "Deadlock",
    "question": "Deadlock is primarily associated with:",
    "options": [
      "Resource allocation",
      "File compression",
      "Compilation",
      "Networking"
    ],
    "answerIndex": 0,
    "explanation": "Deadlock arises directly from allocation and requests of system hardware/software resources."
  },
  {
    "id": 162,
    "category": "Deadlock",
    "question": "Which of the following is an example of a reusable resource?",
    "options": [
      "CPU Register",
      "Printer",
      "Interrupt",
      "Signal"
    ],
    "answerIndex": 1,
    "explanation": "Printers are reusable resources used by one process and subsequently released for reuse by another."
  },
  {
    "id": 163,
    "category": "Deadlock",
    "question": "Which type of resource is generally NOT reusable?",
    "options": [
      "Printer",
      "Disk Drive",
      "Message/Event Signal",
      "Scanner"
    ],
    "answerIndex": 2,
    "explanation": "Messages and event signals are consumable (transient) resources created and consumed rather than reused."
  },
  {
    "id": 164,
    "category": "Deadlock",
    "question": "Deadlock causes:",
    "options": [
      "Better CPU utilization.",
      "Processes to wait indefinitely.",
      "Reduced memory usage.",
      "Faster execution."
    ],
    "answerIndex": 1,
    "explanation": "Deadlocked processes wait indefinitely, freezing progress until external intervention occurs."
  },
  {
    "id": 165,
    "category": "Deadlock",
    "question": "Which statement is correct?",
    "options": [
      "Every waiting process is deadlocked.",
      "A waiting process may simply be blocked, not deadlocked.",
      "Deadlock always involves one process.",
      "Deadlock improves fairness."
    ],
    "answerIndex": 1,
    "explanation": "A process waiting for I/O or timer is simply blocked; deadlock specifically requires circular resource dependency."
  },
  {
    "id": 166,
    "category": "Deadlock",
    "question": "How many necessary conditions must simultaneously exist for a deadlock?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answerIndex": 2,
    "explanation": "There are 4 necessary Coffman conditions: Mutual Exclusion, Hold & Wait, No Preemption, and Circular Wait."
  },
  {
    "id": 167,
    "category": "Deadlock",
    "question": "Which is NOT one of Coffman's conditions?",
    "options": [
      "Mutual Exclusion",
      "Hold and Wait",
      "Circular Wait",
      "Multiprogramming"
    ],
    "answerIndex": 3,
    "explanation": "Multiprogramming is an OS execution concept, not one of Coffman's 4 deadlock conditions."
  },
  {
    "id": 168,
    "category": "Deadlock",
    "question": "Mutual Exclusion means:",
    "options": [
      "Multiple processes may use the same resource simultaneously.",
      "Only one process can use a resource at a time.",
      "Resources are unlimited.",
      "Resources are virtual."
    ],
    "answerIndex": 1,
    "explanation": "Mutual exclusion specifies that at least one resource is held in a non-shareable mode."
  },
  {
    "id": 169,
    "category": "Deadlock",
    "question": "Hold and Wait means:",
    "options": [
      "A process holds at least one resource while waiting for others.",
      "Processes release resources before requesting new ones.",
      "Resources are shared.",
      "Processes never wait."
    ],
    "answerIndex": 0,
    "explanation": "Hold & Wait means a process holds currently allocated resources while awaiting additional requested ones."
  },
  {
    "id": 170,
    "category": "Deadlock",
    "question": "No Preemption means:",
    "options": [
      "The operating system cannot forcibly take a resource from a process.",
      "CPU scheduling is disabled.",
      "Interrupts are disabled.",
      "Processes never terminate."
    ],
    "answerIndex": 0,
    "explanation": "No preemption means resources cannot be forcibly confiscated from a process; they must be released voluntarily."
  },
  {
    "id": 171,
    "category": "Deadlock",
    "question": "Circular Wait exists when:",
    "options": [
      "Every process waits for a resource held by another process in a cycle.",
      "All processes wait for the CPU.",
      "Memory is exhausted.",
      "The scheduler stops."
    ],
    "answerIndex": 0,
    "explanation": "Circular Wait means a closed chain of processes exists such that each process holds resources needed by the next."
  },
  {
    "id": 172,
    "category": "Deadlock",
    "question": "Which condition can be eliminated by forcing processes to request all resources at once?",
    "options": [
      "Mutual Exclusion",
      "Hold and Wait",
      "Circular Wait",
      "No Preemption"
    ],
    "answerIndex": 1,
    "explanation": "Requiring a process to request all required resources simultaneously before execution eliminates Hold and Wait."
  },
  {
    "id": 173,
    "category": "Deadlock",
    "question": "Which condition is hardest to eliminate because many resources are inherently non-shareable?",
    "options": [
      "Circular Wait",
      "Mutual Exclusion",
      "Hold and Wait",
      "No Preemption"
    ],
    "answerIndex": 1,
    "explanation": "Mutual Exclusion is hardest to eliminate because hardware devices (printers, write locks) are inherently non-sharable."
  },
  {
    "id": 174,
    "category": "Deadlock",
    "question": "If even one Coffman condition is removed:",
    "options": [
      "Deadlock cannot occur.",
      "Deadlock always occurs.",
      "CPU utilization becomes zero.",
      "Scheduling stops."
    ],
    "answerIndex": 0,
    "explanation": "Because all 4 Coffman conditions are required for deadlock, breaking any single condition prevents deadlock."
  },
  {
    "id": 175,
    "category": "Deadlock",
    "question": "Which statement is correct?",
    "options": [
      "All four Coffman conditions are necessary for deadlock.",
      "Any one condition alone causes deadlock.",
      "Circular Wait alone guarantees deadlock.",
      "Hold and Wait alone guarantees deadlock."
    ],
    "answerIndex": 0,
    "explanation": "All four conditions must hold simultaneously for a deadlock state to occur."
  },
  {
    "id": 176,
    "category": "Deadlock",
    "question": "Deadlock Prevention works by:",
    "options": [
      "Eliminating at least one Coffman condition.",
      "Detecting deadlocks after they occur.",
      "Increasing RAM.",
      "Reducing CPU speed."
    ],
    "answerIndex": 0,
    "explanation": "Deadlock prevention restricts resource requests to ensure at least one Coffman condition cannot hold."
  },
  {
    "id": 177,
    "category": "Deadlock",
    "question": "Deadlock Avoidance requires:",
    "options": [
      "Knowledge of future resource requests.",
      "Additional CPUs.",
      "Disk scheduling.",
      "Thread synchronization only."
    ],
    "answerIndex": 0,
    "explanation": "Deadlock avoidance requires advance knowledge of maximum future resource demands of each process."
  },
  {
    "id": 178,
    "category": "Deadlock",
    "question": "Which algorithm is commonly associated with deadlock avoidance?",
    "options": [
      "FCFS",
      "Banker's Algorithm",
      "Round Robin",
      "FIFO"
    ],
    "answerIndex": 1,
    "explanation": "Banker's Algorithm (by Dijkstra) is the classic algorithm for deadlock avoidance."
  },
  {
    "id": 179,
    "category": "Deadlock",
    "question": "Banker's Algorithm attempts to keep the system in:",
    "options": [
      "Waiting State",
      "Safe State",
      "Idle State",
      "Critical Section"
    ],
    "answerIndex": 1,
    "explanation": "Banker's Algorithm dynamically tests resource allocations to ensure the system remains in a Safe State."
  },
  {
    "id": 180,
    "category": "Deadlock",
    "question": "A safe state means:",
    "options": [
      "Deadlock has already occurred.",
      "The system can allocate resources without causing deadlock.",
      "No processes exist.",
      "Memory is full."
    ],
    "answerIndex": 1,
    "explanation": "A Safe State has an execution sequence (safe sequence) allowing all processes to finish without deadlocking."
  },
  {
    "id": 181,
    "category": "Deadlock",
    "question": "An unsafe state means:",
    "options": [
      "Deadlock has definitely occurred.",
      "Deadlock may occur in the future.",
      "CPU utilization is zero.",
      "Scheduling has failed."
    ],
    "answerIndex": 1,
    "explanation": "An Unsafe State is not necessarily a deadlock yet, but the OS cannot guarantee preventing a deadlock."
  },
  {
    "id": 182,
    "category": "Deadlock",
    "question": "Which statement about safe and unsafe states is TRUE?",
    "options": [
      "Every unsafe state is already deadlocked.",
      "Every deadlocked state is unsafe.",
      "Safe states are deadlocked.",
      "Unsafe states guarantee deadlock."
    ],
    "answerIndex": 1,
    "explanation": "Deadlocked states are a subset of unsafe states; all deadlocks are unsafe, but not all unsafe states are deadlocked."
  },
  {
    "id": 183,
    "category": "Deadlock",
    "question": "Deadlock Avoidance is generally:",
    "options": [
      "Simpler than Prevention.",
      "More flexible but requires additional information.",
      "Independent of resource allocation.",
      "Based only on scheduling."
    ],
    "answerIndex": 1,
    "explanation": "Avoidance allows higher resource utilization than prevention, but requires knowing max resource claims upfront."
  },
  {
    "id": 184,
    "category": "Deadlock",
    "question": "Which strategy may reduce resource utilization?",
    "options": [
      "Deadlock Prevention",
      "Paging",
      "Round Robin",
      "Segmentation"
    ],
    "answerIndex": 0,
    "explanation": "Deadlock prevention conservatively restricts resource requests, which can lower resource utilization."
  },
  {
    "id": 185,
    "category": "Deadlock",
    "question": "Which technique requires knowing the maximum future resource requirement of each process?",
    "options": [
      "Prevention",
      "Detection",
      "Avoidance",
      "Recovery"
    ],
    "answerIndex": 2,
    "explanation": "Deadlock Avoidance requires processes to declare maximum resource needs in advance."
  },
  {
    "id": 186,
    "category": "Deadlock",
    "question": "Which statement is TRUE?",
    "options": [
      "Prevention avoids deadlock by restricting resource allocation.",
      "Avoidance ignores resource requests.",
      "Banker's Algorithm performs recovery.",
      "Avoidance eliminates Mutual Exclusion."
    ],
    "answerIndex": 0,
    "explanation": "Deadlock prevention works by designing system protocols that constrain how requests can be made."
  },
  {
    "id": 187,
    "category": "Deadlock",
    "question": "Which approach generally provides better resource utilization?",
    "options": [
      "Prevention",
      "Avoidance",
      "Recovery",
      "Ignoring Deadlocks"
    ],
    "answerIndex": 1,
    "explanation": "Avoidance dynamically grants requests if safe, yielding better resource utilization than static prevention."
  },
  {
    "id": 188,
    "category": "Deadlock",
    "question": "Which statement is correct?",
    "options": [
      "Prevention removes conditions for deadlock, whereas avoidance carefully grants requests to remain in a safe state.",
      "Prevention and avoidance are identical.",
      "Avoidance removes Mutual Exclusion.",
      "Prevention requires Banker's Algorithm."
    ],
    "answerIndex": 0,
    "explanation": "Prevention structurally disables Coffman conditions, while avoidance dynamically evaluates safe states."
  },
  {
    "id": 189,
    "category": "Deadlock",
    "question": "Deadlock Detection assumes:",
    "options": [
      "Deadlocks are impossible.",
      "Deadlocks may occur and should be detected afterward.",
      "Resources are unlimited.",
      "Scheduling prevents deadlock."
    ],
    "answerIndex": 1,
    "explanation": "Detection allows deadlocks to happen, running algorithms periodically to identify deadlocked processes."
  },
  {
    "id": 190,
    "category": "Deadlock",
    "question": "Deadlock Recovery begins:",
    "options": [
      "Before allocation.",
      "After deadlock has been detected.",
      "During compilation.",
      "During booting."
    ],
    "answerIndex": 1,
    "explanation": "Recovery algorithms kick in after a deadlock detection algorithm identifies a deadlocked state."
  },
  {
    "id": 191,
    "category": "Deadlock",
    "question": "Which is a recovery technique?",
    "options": [
      "Terminate one or more processes.",
      "Increase CPU frequency.",
      "Install antivirus software.",
      "Increase cache size."
    ],
    "answerIndex": 0,
    "explanation": "Process termination (aborting deadlocked processes) is a primary deadlock recovery mechanism."
  },
  {
    "id": 192,
    "category": "Deadlock",
    "question": "Another recovery technique is:",
    "options": [
      "Resource Preemption",
      "Paging",
      "Swapping",
      "Fragmentation"
    ],
    "answerIndex": 0,
    "explanation": "Resource preemption forcibly reclaims resources from processes and allocates them to others to break deadlock."
  },
  {
    "id": 193,
    "category": "Deadlock",
    "question": "Which recovery technique has the least impact if a low-priority process is selected?",
    "options": [
      "Terminating all processes.",
      "Terminating the lowest-cost victim process.",
      "Rebooting immediately.",
      "Ignoring the deadlock."
    ],
    "answerIndex": 1,
    "explanation": "Terminating the victim process with lowest cost minimizes overall impact on system work."
  },
  {
    "id": 194,
    "category": "Deadlock",
    "question": "Deadlock Detection mainly uses:",
    "options": [
      "Resource Allocation Graph (RAG)",
      "Binary Search Tree",
      "Hash Table",
      "Heap"
    ],
    "answerIndex": 0,
    "explanation": "Resource Allocation Graphs (RAG) and wait-for graphs are used to detect cycles signifying deadlocks."
  },
  {
    "id": 195,
    "category": "Deadlock",
    "question": "In a Resource Allocation Graph, a cycle:",
    "options": [
      "Always indicates deadlock in every system.",
      "Indicates deadlock when each resource has only one instance.",
      "Means CPU overload.",
      "Represents paging."
    ],
    "answerIndex": 1,
    "explanation": "If each resource type has single instance, a cycle in RAG is necessary and sufficient condition for deadlock."
  },
  {
    "id": 196,
    "category": "Deadlock",
    "question": "Which statement distinguishes starvation from deadlock?",
    "options": [
      "Starvation affects one or more processes waiting indefinitely due to scheduling, whereas deadlock involves circular waiting for resources.",
      "They are identical.",
      "Starvation requires four Coffman conditions.",
      "Deadlock is caused only by scheduling."
    ],
    "answerIndex": 0,
    "explanation": "Starvation is indefinite wait caused by scheduling bias; deadlock is mutual blockage due to circular resource waiting."
  },
  {
    "id": 197,
    "category": "Deadlock",
    "question": "Which technique helps reduce starvation?",
    "options": [
      "Aging",
      "Paging",
      "Swapping",
      "Segmentation"
    ],
    "answerIndex": 0,
    "explanation": "Aging prevents starvation by raising task priority as wait time accumulates."
  },
  {
    "id": 198,
    "category": "Deadlock",
    "question": "Which statement is TRUE?",
    "options": [
      "Deadlock always results from priority scheduling.",
      "Deadlock and starvation are different problems.",
      "Aging causes deadlock.",
      "Semaphore always prevents deadlock."
    ],
    "answerIndex": 1,
    "explanation": "Deadlock and starvation are distinct concurrent execution anomalies with different root causes."
  },
  {
    "id": 199,
    "category": "Deadlock",
    "question": "Which strategy is commonly used in general-purpose operating systems?",
    "options": [
      "Ignore deadlocks when they are very rare (Ostrich Algorithm).",
      "Eliminate all deadlocks completely.",
      "Disable multitasking.",
      "Use only one process."
    ],
    "answerIndex": 0,
    "explanation": "Most general-purpose OS (like Linux, Windows) use the Ostrich Algorithm, ignoring rare deadlocks due to performance costs."
  },
  {
    "id": 200,
    "category": "Deadlock",
    "question": "Which statement is correct?",
    "options": [
      "Deadlock prevention, avoidance, detection, and recovery are four major approaches for handling deadlocks.",
      "Banker's Algorithm is used for recovery.",
      "Deadlock detection prevents all deadlocks.",
      "Safe state means deadlock has already occurred."
    ],
    "answerIndex": 0,
    "explanation": "The four classic strategies for handling deadlocks are prevention, avoidance, detection, and recovery."
  },
  {
    "id": 201,
    "category": "Memory Management",
    "question": "The primary purpose of memory management is to:",
    "options": [
      "Increase CPU speed",
      "Manage allocation and deallocation of main memory efficiently",
      "Improve Internet speed",
      "Manage files only"
    ],
    "answerIndex": 1,
    "explanation": "Memory management efficiently allocates RAM blocks to active processes and reclaims memory when freed."
  },
  {
    "id": 202,
    "category": "Memory Management",
    "question": "Which OS component is responsible for allocating RAM to processes?",
    "options": [
      "File Manager",
      "Memory Manager",
      "CPU Scheduler",
      "Device Driver"
    ],
    "answerIndex": 1,
    "explanation": "The Memory Manager sub-component of OS kernel allocates physical memory frames/blocks to processes."
  },
  {
    "id": 203,
    "category": "Memory Management",
    "question": "Which memory is directly managed by the operating system during process execution?",
    "options": [
      "Cache only",
      "Main Memory (RAM)",
      "ROM",
      "Hard Disk"
    ],
    "answerIndex": 1,
    "explanation": "Main Memory (RAM) is the primary workspace managed dynamically by the OS memory manager."
  },
  {
    "id": 204,
    "category": "Memory Management",
    "question": "Which memory management goal improves CPU utilization?",
    "options": [
      "Keeping memory idle",
      "Maximizing memory utilization",
      "Increasing ROM size",
      "Reducing cache memory"
    ],
    "answerIndex": 1,
    "explanation": "Efficient memory allocation keeps more active processes in RAM, boosting CPU multiprogramming utilization."
  },
  {
    "id": 205,
    "category": "Memory Management",
    "question": "Which memory allocation strategy allocates one contiguous block to a process?",
    "options": [
      "Contiguous Allocation",
      "Paging",
      "Segmentation",
      "Virtual Memory"
    ],
    "answerIndex": 0,
    "explanation": "Contiguous Memory Allocation places each process in a single contiguous section of physical memory."
  },
  {
    "id": 206,
    "category": "Memory Management",
    "question": "Which problem commonly occurs in contiguous memory allocation?",
    "options": [
      "Packet loss",
      "Fragmentation",
      "Deadlock",
      "Starvation"
    ],
    "answerIndex": 1,
    "explanation": "Contiguous memory allocation suffers from internal and external fragmentation as processes are loaded and freed."
  },
  {
    "id": 207,
    "category": "Memory Management",
    "question": "Which address is generated by the CPU?",
    "options": [
      "Physical Address",
      "Logical (Virtual) Address",
      "MAC Address",
      "Network Address"
    ],
    "answerIndex": 1,
    "explanation": "Addresses generated by the CPU during instruction execution are Logical (Virtual) Addresses."
  },
  {
    "id": 208,
    "category": "Memory Management",
    "question": "Which address is used by the memory hardware?",
    "options": [
      "Logical Address",
      "Physical Address",
      "IP Address",
      "Virtual Address only"
    ],
    "answerIndex": 1,
    "explanation": "The physical memory bus and RAM hardware chips respond to Physical Addresses."
  },
  {
    "id": 209,
    "category": "Memory Management",
    "question": "Which hardware translates logical addresses into physical addresses?",
    "options": [
      "ALU",
      "MMU (Memory Management Unit)",
      "DMA Controller",
      "Cache Controller"
    ],
    "answerIndex": 1,
    "explanation": "The Memory Management Unit (MMU) hardware chip performs address translation from logical to physical."
  },
  {
    "id": 210,
    "category": "Memory Management",
    "question": "MMU stands for:",
    "options": [
      "Main Memory Unit",
      "Memory Management Unit",
      "Multiple Memory Utility",
      "Memory Mapping Utility"
    ],
    "answerIndex": 1,
    "explanation": "MMU stands for Memory Management Unit."
  },
  {
    "id": 211,
    "category": "Memory Management",
    "question": "Which statement is TRUE?",
    "options": [
      "Logical addresses are visible to user programs.",
      "Physical addresses are directly generated by programs.",
      "MMU generates source code.",
      "CPU executes physical addresses directly."
    ],
    "answerIndex": 0,
    "explanation": "User programs operate entirely within the logical address space generated by the CPU."
  },
  {
    "id": 212,
    "category": "Memory Management",
    "question": "Which address does a programmer normally use?",
    "options": [
      "Physical Address",
      "Logical Address",
      "MAC Address",
      "Bus Address"
    ],
    "answerIndex": 1,
    "explanation": "Programmers and compiled binaries reference logical (virtual) addresses, abstracted from physical RAM locations."
  },
  {
    "id": 213,
    "category": "Memory Management",
    "question": "Which address is NOT normally visible to application programs?",
    "options": [
      "Logical Address",
      "Physical Address",
      "Virtual Address",
      "Symbolic Address"
    ],
    "answerIndex": 1,
    "explanation": "Physical RAM addresses are hidden from user applications by the OS and MMU hardware for abstraction and security."
  },
  {
    "id": 214,
    "category": "Memory Management",
    "question": "Which statement correctly distinguishes logical and physical addresses?",
    "options": [
      "Logical addresses are generated by the CPU, while physical addresses refer to actual RAM locations.",
      "Both are always identical.",
      "Physical addresses are generated by applications.",
      "Logical addresses exist only in ROM."
    ],
    "answerIndex": 0,
    "explanation": "Logical addresses are generated by CPU execution, while physical addresses reference actual location hardware in RAM."
  },
  {
    "id": 215,
    "category": "Memory Management",
    "question": "Which OS feature provides protection between processes?",
    "options": [
      "Address Translation",
      "File Compression",
      "CPU Scheduling",
      "Routing"
    ],
    "answerIndex": 0,
    "explanation": "Address translation combined with base/limit registers ensures a process cannot access memory of another process."
  },
  {
    "id": 216,
    "category": "Address Binding & Relocation",
    "question": "Address binding is the process of:",
    "options": [
      "Assigning disk space",
      "Mapping logical addresses to physical addresses",
      "Scheduling processes",
      "Managing files"
    ],
    "answerIndex": 1,
    "explanation": "Address binding maps instruction and data addresses from one address space (symbolic/logical) to another (physical RAM)."
  },
  {
    "id": 217,
    "category": "Address Binding & Relocation",
    "question": "Which type of address binding occurs before program execution?",
    "options": [
      "Compile-Time Binding",
      "Execution-Time Binding",
      "Dynamic Binding",
      "Run-Time Paging"
    ],
    "answerIndex": 0,
    "explanation": "Compile-time binding fixes physical memory addresses during compilation if location is known beforehand."
  },
  {
    "id": 218,
    "category": "Address Binding & Relocation",
    "question": "Execution-time binding requires:",
    "options": [
      "MMU support",
      "Compiler optimization only",
      "Cache memory only",
      "Disk scheduling"
    ],
    "answerIndex": 0,
    "explanation": "Execution-time (run-time) binding requires MMU hardware support to map logical to physical addresses dynamically."
  },
  {
    "id": 219,
    "category": "Address Binding & Relocation",
    "question": "Dynamic relocation is possible mainly because of:",
    "options": [
      "MMU",
      "BIOS",
      "Compiler",
      "Loader only"
    ],
    "answerIndex": 0,
    "explanation": "The MMU uses relocation registers to map logical addresses to physical RAM addresses dynamically at runtime."
  },
  {
    "id": 220,
    "category": "Address Binding & Relocation",
    "question": "Which binding allows a process to be moved during execution?",
    "options": [
      "Compile-Time",
      "Load-Time",
      "Execution-Time",
      "Static-Time"
    ],
    "answerIndex": 2,
    "explanation": "Execution-time binding delays address resolution until instruction execution, allowing process movement in memory."
  },
  {
    "id": 221,
    "category": "Address Binding & Relocation",
    "question": "Which address changes after relocation?",
    "options": [
      "Logical Address",
      "Physical Address",
      "Source Address",
      "Symbolic Address"
    ],
    "answerIndex": 1,
    "explanation": "When a process is relocated in RAM, its physical memory address changes while its logical address remains unchanged."
  },
  {
    "id": 222,
    "category": "Address Binding & Relocation",
    "question": "Which technique allows programs to execute regardless of their actual physical location?",
    "options": [
      "Address Translation",
      "Fragmentation",
      "Scheduling",
      "Swapping"
    ],
    "answerIndex": 0,
    "explanation": "Address translation maps program logical addresses to wherever the process is currently placed in physical RAM."
  },
  {
    "id": 223,
    "category": "Address Binding & Relocation",
    "question": "Which hardware performs relocation during execution?",
    "options": [
      "CPU Scheduler",
      "MMU",
      "BIOS",
      "Compiler"
    ],
    "answerIndex": 1,
    "explanation": "The MMU dynamically adds relocation register values to logical addresses during runtime."
  },
  {
    "id": 224,
    "category": "Address Binding & Relocation",
    "question": "Which binding provides the greatest flexibility?",
    "options": [
      "Compile-Time",
      "Load-Time",
      "Execution-Time",
      "Static Binding"
    ],
    "answerIndex": 2,
    "explanation": "Execution-time binding gives maximum runtime flexibility, supporting virtual memory and dynamic process movement."
  },
  {
    "id": 225,
    "category": "Address Binding & Relocation",
    "question": "Which statement is TRUE?",
    "options": [
      "Compile-time binding requires no relocation.",
      "Execution-time binding supports dynamic relocation.",
      "Physical addresses are created by programmers.",
      "MMU performs scheduling."
    ],
    "answerIndex": 1,
    "explanation": "Execution-time address binding is the basis for dynamic relocation and modern virtual memory management."
  },
  {
    "id": 226,
    "category": "Paging",
    "question": "Paging divides physical memory into:",
    "options": [
      "Segments",
      "Frames",
      "Blocks",
      "Tracks"
    ],
    "answerIndex": 1,
    "explanation": "Paging divides physical memory (RAM) into fixed-size blocks called Frames."
  },
  {
    "id": 227,
    "category": "Paging",
    "question": "Paging divides logical memory into:",
    "options": [
      "Frames",
      "Pages",
      "Clusters",
      "Sectors"
    ],
    "answerIndex": 1,
    "explanation": "Paging divides logical memory (process address space) into fixed-size blocks called Pages."
  },
  {
    "id": 228,
    "category": "Paging",
    "question": "A page is mapped to:",
    "options": [
      "Segment",
      "Frame",
      "Register",
      "Cache"
    ],
    "answerIndex": 1,
    "explanation": "In paging, each logical Page is mapped into an available physical RAM Frame."
  },
  {
    "id": 229,
    "category": "Paging",
    "question": "Which data structure stores page-to-frame mappings?",
    "options": [
      "PCB",
      "Page Table",
      "FAT",
      "Routing Table"
    ],
    "answerIndex": 1,
    "explanation": "The Page Table is the per-process data structure storing page-to-frame translation entries."
  },
  {
    "id": 230,
    "category": "Paging",
    "question": "Which memory management technique completely eliminates external fragmentation?",
    "options": [
      "Contiguous Allocation",
      "Paging",
      "Swapping",
      "Partitioning"
    ],
    "answerIndex": 1,
    "explanation": "Paging allows non-contiguous physical allocation of fixed frames, eliminating external fragmentation entirely."
  },
  {
    "id": 231,
    "category": "Paging",
    "question": "Paging may still suffer from:",
    "options": [
      "External Fragmentation",
      "Internal Fragmentation",
      "Deadlock",
      "Starvation"
    ],
    "answerIndex": 1,
    "explanation": "Paging can suffer from internal fragmentation in the final page if allocated data does not fill the page frame."
  },
  {
    "id": 232,
    "category": "Paging",
    "question": "Which statement about page size is TRUE?",
    "options": [
      "All pages are usually the same size.",
      "Pages always have different sizes.",
      "Page size depends on process priority.",
      "Pages are larger than memory."
    ],
    "answerIndex": 0,
    "explanation": "Within an operating system architecture, page sizes (e.g. 4KB) are fixed and uniform across pages and frames."
  },
  {
    "id": 233,
    "category": "Paging",
    "question": "Which hardware speeds up page table access?",
    "options": [
      "Cache",
      "TLB (Translation Lookaside Buffer)",
      "BIOS",
      "DMA"
    ],
    "answerIndex": 1,
    "explanation": "The Translation Lookaside Buffer (TLB) is a high-speed hardware associative cache for page table entries."
  },
  {
    "id": 234,
    "category": "Paging",
    "question": "The main purpose of a TLB is to:",
    "options": [
      "Increase disk speed",
      "Reduce address translation time",
      "Compress memory",
      "Detect deadlocks"
    ],
    "answerIndex": 1,
    "explanation": "TLB caches recent page-to-frame mappings to dramatically speed up address translation."
  },
  {
    "id": 235,
    "category": "Paging",
    "question": "Which statement is TRUE?",
    "options": [
      "Every page has a fixed size.",
      "Pages have variable sizes.",
      "Frames have variable sizes.",
      "Paging uses segments only."
    ],
    "answerIndex": 0,
    "explanation": "Page size is a hardware-defined power of 2 (e.g. 4KB) and remains fixed across the system."
  },
  {
    "id": 236,
    "category": "Paging",
    "question": "Which problem is solved by paging?",
    "options": [
      "External Fragmentation",
      "Internal Fragmentation",
      "Starvation",
      "Deadlock"
    ],
    "answerIndex": 0,
    "explanation": "Paging solves external fragmentation by allowing pages to be loaded into any non-contiguous free frames."
  },
  {
    "id": 237,
    "category": "Paging",
    "question": "Which memory management technique uses fixed-size blocks?",
    "options": [
      "Segmentation",
      "Paging",
      "Swapping",
      "Dynamic Partitioning"
    ],
    "answerIndex": 1,
    "explanation": "Paging is characterized by fixed-size logical pages and physical frames."
  },
  {
    "id": 238,
    "category": "Paging",
    "question": "Which statement correctly compares pages and frames?",
    "options": [
      "Pages exist in logical memory, while frames exist in physical memory.",
      "Frames exist only on disk.",
      "Pages are physical memory.",
      "Both exist only in cache."
    ],
    "answerIndex": 0,
    "explanation": "Pages belong to logical memory address space; frames belong to physical RAM hardware."
  },
  {
    "id": 239,
    "category": "Paging",
    "question": "Which component uses the page table?",
    "options": [
      "MMU",
      "CPU Scheduler",
      "File Manager",
      "Compiler"
    ],
    "answerIndex": 0,
    "explanation": "The MMU uses page tables to translate logical addresses to physical memory addresses on every memory access."
  },
  {
    "id": 240,
    "category": "Paging",
    "question": "Which statement is correct?",
    "options": [
      "Paging uses fixed-size pages and frames.",
      "Paging uses variable-size segments.",
      "Paging eliminates internal fragmentation.",
      "Paging requires contiguous allocation."
    ],
    "answerIndex": 0,
    "explanation": "Paging relies on equal fixed-size logical pages and physical memory frames."
  },
  {
    "id": 241,
    "category": "Segmentation, Fragmentation & Swapping",
    "question": "Segmentation divides memory into:",
    "options": [
      "Fixed-size pages",
      "Variable-size logical segments",
      "Frames only",
      "Blocks only"
    ],
    "answerIndex": 1,
    "explanation": "Segmentation divides process memory into variable-sized logical units (code, data, stack, subroutines)."
  },
  {
    "id": 242,
    "category": "Segmentation, Fragmentation & Swapping",
    "question": "Segments usually represent:",
    "options": [
      "Logical program units such as code, data, and stack.",
      "Fixed-size memory blocks.",
      "Physical RAM.",
      "Cache lines."
    ],
    "answerIndex": 0,
    "explanation": "Segments correspond to user programmer views of a program (main module, objects, function call stack, data)."
  },
  {
    "id": 243,
    "category": "Segmentation, Fragmentation & Swapping",
    "question": "Which memory management technique uses variable-sized partitions?",
    "options": [
      "Paging",
      "Segmentation",
      "TLB",
      "MMU"
    ],
    "answerIndex": 1,
    "explanation": "Segmentation allocates variable-sized physical partitions matching segment lengths."
  },
  {
    "id": 244,
    "category": "Segmentation, Fragmentation & Swapping",
    "question": "External fragmentation occurs when:",
    "options": [
      "Free memory exists but is scattered into small non-contiguous blocks.",
      "Pages are too large.",
      "CPU becomes idle.",
      "Context switching increases."
    ],
    "answerIndex": 0,
    "explanation": "External fragmentation happens when total memory is sufficient for a request, but free blocks are non-contiguous."
  },
  {
    "id": 245,
    "category": "Segmentation, Fragmentation & Swapping",
    "question": "Internal fragmentation occurs when:",
    "options": [
      "Allocated memory contains unused space.",
      "Memory is completely full.",
      "Files become fragmented.",
      "Processes wait for CPU."
    ],
    "answerIndex": 0,
    "explanation": "Internal fragmentation occurs when memory allocated to a process is slightly larger than requested data."
  },
  {
    "id": 246,
    "category": "Segmentation, Fragmentation & Swapping",
    "question": "Which memory management technique is most susceptible to external fragmentation?",
    "options": [
      "Paging",
      "Segmentation",
      "Fixed Partitioning",
      "TLB"
    ],
    "answerIndex": 1,
    "explanation": "Segmentation allocates variable-sized segments contiguously, leading to severe external fragmentation over time."
  },
  {
    "id": 247,
    "category": "Segmentation, Fragmentation & Swapping",
    "question": "Swapping is the process of:",
    "options": [
      "Exchanging CPU registers.",
      "Moving processes between RAM and secondary storage.",
      "Changing page sizes.",
      "Compressing memory."
    ],
    "answerIndex": 1,
    "explanation": "Swapping temporarily moves inactive processes out of main memory (RAM) to secondary disk storage (swap space)."
  },
  {
    "id": 248,
    "category": "Segmentation, Fragmentation & Swapping",
    "question": "Swapping is mainly used to:",
    "options": [
      "Increase available main memory.",
      "Improve printer speed.",
      "Increase network bandwidth.",
      "Reduce page size."
    ],
    "answerIndex": 0,
    "explanation": "Swapping frees physical RAM space for active processes, increasing effective available main memory capacity."
  },
  {
    "id": 249,
    "category": "Segmentation, Fragmentation & Swapping",
    "question": "Which storage device temporarily holds swapped-out processes?",
    "options": [
      "Cache",
      "Secondary Storage (Disk/SSD)",
      "ROM",
      "Registers"
    ],
    "answerIndex": 1,
    "explanation": "Secondary storage devices (hard disk drive or SSD swap partitions) store swapped-out process memory pages."
  },
  {
    "id": 250,
    "category": "Segmentation, Fragmentation & Swapping",
    "question": "Which statement is correct?",
    "options": [
      "Paging uses fixed-size pages and eliminates external fragmentation, while segmentation uses variable-sized logical segments and may suffer from external fragmentation.",
      "Segmentation eliminates all fragmentation.",
      "Swapping permanently deletes inactive processes.",
      "MMU performs CPU scheduling."
    ],
    "answerIndex": 0,
    "explanation": "Paging avoids external fragmentation with fixed pages; segmentation uses variable segments vulnerable to external fragmentation."
  },
  {
    "id": 251,
    "category": "Virtual Memory",
    "question": "Virtual memory is a technique that:",
    "options": [
      "Increases the size of ROM",
      "Allows execution of programs larger than physical RAM",
      "Increases CPU speed",
      "Eliminates secondary storage"
    ],
    "answerIndex": 1,
    "explanation": "Virtual memory decouples logical memory from physical memory, enabling execution of programs exceeding RAM size."
  },
  {
    "id": 252,
    "category": "Virtual Memory",
    "question": "Virtual memory primarily uses:",
    "options": [
      "Cache Memory",
      "Secondary Storage (Disk/SSD) as an extension of RAM",
      "ROM",
      "CPU Registers"
    ],
    "answerIndex": 1,
    "explanation": "Virtual memory utilizes secondary storage (disk/SSD swap file) as an extended pool of physical RAM."
  },
  {
    "id": 253,
    "category": "Virtual Memory",
    "question": "The main advantage of virtual memory is:",
    "options": [
      "Faster CPU execution",
      "Better utilization of physical memory and support for larger programs",
      "Elimination of context switching",
      "Removal of fragmentation"
    ],
    "answerIndex": 1,
    "explanation": "Virtual memory allows larger address spaces, higher multiprogramming, and efficient RAM utilization."
  },
  {
    "id": 254,
    "category": "Virtual Memory",
    "question": "Which memory appears larger to the user than the actual physical RAM?",
    "options": [
      "Cache Memory",
      "Virtual Memory",
      "Register Memory",
      "ROM"
    ],
    "answerIndex": 1,
    "explanation": "Virtual memory presents programmers with an illusion of a vast contiguous memory space larger than physical RAM."
  },
  {
    "id": 255,
    "category": "Virtual Memory",
    "question": "Virtual memory allows:",
    "options": [
      "Only one process in memory",
      "More processes to execute concurrently than physical memory alone would allow",
      "Elimination of paging",
      "Removal of CPU scheduling"
    ],
    "answerIndex": 1,
    "explanation": "By keeping only active pages in RAM, virtual memory allows more processes to run concurrently."
  },
  {
    "id": 256,
    "category": "Virtual Memory",
    "question": "Which memory management technique is most closely associated with virtual memory?",
    "options": [
      "Paging",
      "FCFS",
      "Deadlock Detection",
      "Mutex"
    ],
    "answerIndex": 0,
    "explanation": "Demand Paging is the standard mechanism supporting modern virtual memory implementations."
  },
  {
    "id": 257,
    "category": "Virtual Memory",
    "question": "Which statement about virtual memory is TRUE?",
    "options": [
      "Entire programs must always remain in RAM.",
      "Only the required portions of a program need to be loaded.",
      "Virtual memory replaces RAM permanently.",
      "Virtual memory uses only cache."
    ],
    "answerIndex": 1,
    "explanation": "Virtual memory requires only currently executing portions of a process to reside in physical RAM."
  },
  {
    "id": 258,
    "category": "Virtual Memory",
    "question": "Virtual memory mainly improves:",
    "options": [
      "Flexibility in memory management",
      "Printer performance",
      "Internet speed",
      "CPU clock frequency"
    ],
    "answerIndex": 0,
    "explanation": "Virtual memory provides flexible, safe, and efficient memory allocation and process isolation."
  },
  {
    "id": 259,
    "category": "Virtual Memory",
    "question": "Which hardware feature supports virtual memory?",
    "options": [
      "MMU",
      "ALU",
      "BIOS",
      "GPU"
    ],
    "answerIndex": 0,
    "explanation": "The MMU (Memory Management Unit) provides mandatory hardware support for page translation and page faults."
  },
  {
    "id": 260,
    "category": "Virtual Memory",
    "question": "Which statement is correct?",
    "options": [
      "Virtual memory removes the need for RAM.",
      "Virtual memory uses secondary storage to extend available memory.",
      "Virtual memory stores files only.",
      "Virtual memory increases processor speed."
    ],
    "answerIndex": 1,
    "explanation": "Virtual memory extends physical RAM by paging data back and forth to secondary disk storage."
  },
  {
    "id": 261,
    "category": "Virtual Memory",
    "question": "Which of the following is NOT a benefit of virtual memory?",
    "options": [
      "Better memory utilization",
      "Larger logical address space",
      "Unlimited physical RAM",
      "Higher degree of multiprogramming"
    ],
    "answerIndex": 2,
    "explanation": "Virtual memory cannot increase physical hardware RAM; physical RAM remains hardware-bounded."
  },
  {
    "id": 262,
    "category": "Virtual Memory",
    "question": "Virtual memory mainly separates:",
    "options": [
      "Logical memory from physical memory",
      "CPU from RAM",
      "User from kernel",
      "Cache from registers"
    ],
    "answerIndex": 0,
    "explanation": "Virtual memory creates a complete separation between programmer logical address space and hardware physical memory."
  },
  {
    "id": 263,
    "category": "Virtual Memory",
    "question": "Which storage medium usually stores swapped or paged-out data?",
    "options": [
      "ROM",
      "Secondary Storage",
      "Registers",
      "Cache"
    ],
    "answerIndex": 1,
    "explanation": "Swapped or paged-out memory blocks are stored in swap space on secondary disk/SSD storage."
  },
  {
    "id": 264,
    "category": "Virtual Memory",
    "question": "Which operating system feature makes virtual memory transparent to user programs?",
    "options": [
      "Address Translation",
      "File Allocation",
      "Scheduling",
      "Interrupt Handling"
    ],
    "answerIndex": 0,
    "explanation": "MMU address translation makes virtual-to-physical mapping completely transparent to application binaries."
  },
  {
    "id": 265,
    "category": "Virtual Memory",
    "question": "Which statement is TRUE?",
    "options": [
      "Virtual memory is slower than RAM because it depends partly on disk access.",
      "Virtual memory is always faster than RAM.",
      "Virtual memory replaces the CPU.",
      "Virtual memory disables paging."
    ],
    "answerIndex": 0,
    "explanation": "Accessing secondary storage disk during page faults is orders of magnitude slower than direct RAM access."
  },
  {
    "id": 266,
    "category": "Demand Paging & Page Faults",
    "question": "Demand Paging means:",
    "options": [
      "Loading all pages before execution.",
      "Loading a page only when it is needed.",
      "Removing all pages from RAM.",
      "Executing programs directly from ROM."
    ],
    "answerIndex": 1,
    "explanation": "Demand Paging loads pages into physical memory only when referenced during execution (lazy loading)."
  },
  {
    "id": 267,
    "category": "Demand Paging & Page Faults",
    "question": "The main objective of demand paging is to:",
    "options": [
      "Reduce unnecessary memory loading",
      "Increase page size",
      "Eliminate virtual memory",
      "Increase CPU frequency"
    ],
    "answerIndex": 0,
    "explanation": "Demand paging avoids loading unneeded program pages into physical RAM, reducing I/O and memory overhead."
  },
  {
    "id": 268,
    "category": "Demand Paging & Page Faults",
    "question": "A page fault occurs when:",
    "options": [
      "The requested page is not currently in physical memory.",
      "The CPU fails.",
      "RAM becomes full.",
      "The disk crashes."
    ],
    "answerIndex": 0,
    "explanation": "A Page Fault is a hardware trap raised when an accessed virtual page is absent from physical RAM (invalid bit)."
  },
  {
    "id": 269,
    "category": "Demand Paging & Page Faults",
    "question": "When a page fault occurs, the operating system:",
    "options": [
      "Terminates the process immediately.",
      "Loads the required page from secondary storage into RAM.",
      "Reboots the system.",
      "Clears the cache."
    ],
    "answerIndex": 1,
    "explanation": "On a page fault, the OS handles the trap, fetches the missing page from disk into RAM, updates page table, and resumes instruction."
  },
  {
    "id": 270,
    "category": "Demand Paging & Page Faults",
    "question": "Which hardware detects a page fault?",
    "options": [
      "MMU together with CPU support",
      "Printer",
      "Keyboard",
      "Monitor"
    ],
    "answerIndex": 0,
    "explanation": "The MMU detects invalid page table entries during address translation and triggers a page fault interrupt."
  },
  {
    "id": 271,
    "category": "Demand Paging & Page Faults",
    "question": "Which event usually causes the greatest delay during memory access?",
    "options": [
      "TLB Hit",
      "Cache Hit",
      "Page Fault",
      "Register Access"
    ],
    "answerIndex": 2,
    "explanation": "A Page Fault involves slow secondary disk access (milliseconds), causing massive delay compared to RAM/cache hits."
  },
  {
    "id": 272,
    "category": "Demand Paging & Page Faults",
    "question": "If the required page is already present in RAM:",
    "options": [
      "A page fault occurs.",
      "No page fault occurs.",
      "The process terminates.",
      "Swapping begins."
    ],
    "answerIndex": 1,
    "explanation": "If valid bit is set in page table entry, MMU translates address directly without generating a page fault."
  },
  {
    "id": 273,
    "category": "Demand Paging & Page Faults",
    "question": "Excessive page faults usually indicate:",
    "options": [
      "Efficient memory utilization.",
      "Poor memory performance.",
      "Faster execution.",
      "Reduced CPU utilization only."
    ],
    "answerIndex": 1,
    "explanation": "High page fault rates cause disk thrashing, severely degrading system performance."
  },
  {
    "id": 274,
    "category": "Demand Paging & Page Faults",
    "question": "Demand paging reduces:",
    "options": [
      "Initial memory requirements",
      "CPU scheduling",
      "File size",
      "Network traffic"
    ],
    "answerIndex": 0,
    "explanation": "Processes start faster because initial memory footprint is small; pages are fetched on demand."
  },
  {
    "id": 275,
    "category": "Demand Paging & Page Faults",
    "question": "Which statement is TRUE?",
    "options": [
      "Every memory reference causes a page fault.",
      "Page faults occur only when the required page is absent from RAM.",
      "Page faults are compile-time errors.",
      "Page faults occur only in cache memory."
    ],
    "answerIndex": 1,
    "explanation": "Page faults occur exclusively when referenced virtual memory pages are not resident in RAM."
  },
  {
    "id": 276,
    "category": "Demand Paging & Page Faults",
    "question": "Which storage location normally contains the missing page before a page fault is serviced?",
    "options": [
      "CPU Register",
      "Secondary Storage",
      "Cache",
      "ROM"
    ],
    "answerIndex": 1,
    "explanation": "Missing pages reside in secondary storage (disk swap partition or executable file)."
  },
  {
    "id": 277,
    "category": "Demand Paging & Page Faults",
    "question": "Which page replacement activity may follow a page fault if RAM is already full?",
    "options": [
      "Remove an existing page from memory.",
      "Delete the process.",
      "Restart the operating system.",
      "Disable virtual memory."
    ],
    "answerIndex": 0,
    "explanation": "If no physical frame is free, a page replacement algorithm selects a victim page to evict from RAM."
  },
  {
    "id": 278,
    "category": "Demand Paging & Page Faults",
    "question": "Demand paging improves:",
    "options": [
      "Memory efficiency",
      "CPU clock speed",
      "Network throughput",
      "Disk capacity"
    ],
    "answerIndex": 0,
    "explanation": "Demand paging maximizes RAM efficiency by storing only actively used pages."
  },
  {
    "id": 279,
    "category": "Demand Paging & Page Faults",
    "question": "Which statement is correct?",
    "options": [
      "Demand paging loads pages only when referenced.",
      "Demand paging loads all pages before execution.",
      "Demand paging eliminates page faults.",
      "Demand paging requires no disk."
    ],
    "answerIndex": 0,
    "explanation": "Demand paging defers loading pages until explicit execution access occurs."
  },
  {
    "id": 280,
    "category": "Demand Paging & Page Faults",
    "question": "Which condition triggers a page fault?",
    "options": [
      "Reference to a page not currently in RAM.",
      "Process termination.",
      "CPU scheduling.",
      "Context switching."
    ],
    "answerIndex": 0,
    "explanation": "Attempting to access a page marked invalid (not resident in physical RAM) triggers a page fault."
  },
  {
    "id": 281,
    "category": "Page Replacement Algorithms",
    "question": "Page replacement is required when:",
    "options": [
      "RAM has no free frame available.",
      "CPU utilization is low.",
      "Cache is empty.",
      "Process finishes."
    ],
    "answerIndex": 0,
    "explanation": "When a page fault occurs and physical RAM contains no free frames, page replacement evicts an existing page."
  },
  {
    "id": 282,
    "category": "Page Replacement Algorithms",
    "question": "Which algorithm replaces the oldest loaded page?",
    "options": [
      "LRU",
      "FIFO",
      "Optimal",
      "Clock"
    ],
    "answerIndex": 1,
    "explanation": "First-In, First-Out (FIFO) page replacement selects the page that has been resident in memory the longest."
  },
  {
    "id": 283,
    "category": "Page Replacement Algorithms",
    "question": "FIFO stands for:",
    "options": [
      "First In First Out",
      "Fast Input Fast Output",
      "First Idle First Output",
      "Frame Input Frame Output"
    ],
    "answerIndex": 0,
    "explanation": "FIFO stands for First-In, First-Out."
  },
  {
    "id": 284,
    "category": "Page Replacement Algorithms",
    "question": "Which algorithm replaces the page that has not been used for the longest time?",
    "options": [
      "FIFO",
      "LRU",
      "Optimal",
      "FCFS"
    ],
    "answerIndex": 1,
    "explanation": "Least Recently Used (LRU) evicts the page that has not been referenced for the longest period of time."
  },
  {
    "id": 285,
    "category": "Page Replacement Algorithms",
    "question": "LRU stands for:",
    "options": [
      "Least Recently Used",
      "Last Removed Unit",
      "Logical Replacement Unit",
      "Lowest Reference Unit"
    ],
    "answerIndex": 0,
    "explanation": "LRU stands for Least Recently Used."
  },
  {
    "id": 286,
    "category": "Page Replacement Algorithms",
    "question": "Which page replacement algorithm provides the minimum possible number of page faults (theoretical)?",
    "options": [
      "FIFO",
      "Optimal",
      "LRU",
      "Clock"
    ],
    "answerIndex": 1,
    "explanation": "Optimal Page Replacement (OPT / Belady's OPT) yields lowest possible page fault rate by replacing page needed furthest in future."
  },
  {
    "id": 287,
    "category": "Page Replacement Algorithms",
    "question": "Which page replacement algorithm cannot be perfectly implemented in practice because it requires future knowledge?",
    "options": [
      "FIFO",
      "LRU",
      "Optimal",
      "Second Chance"
    ],
    "answerIndex": 2,
    "explanation": "Optimal algorithm requires knowing future page reference strings, which is impossible in general real-time systems."
  },
  {
    "id": 288,
    "category": "Page Replacement Algorithms",
    "question": "Which algorithm approximates Optimal by using past references?",
    "options": [
      "LRU",
      "FIFO",
      "FCFS",
      "Priority"
    ],
    "answerIndex": 0,
    "explanation": "LRU uses recent past reference history as an approximation of future page access probability."
  },
  {
    "id": 289,
    "category": "Page Replacement Algorithms",
    "question": "Which page replacement algorithm may suffer from Belady's Anomaly?",
    "options": [
      "FIFO",
      "LRU",
      "Optimal",
      "Clock"
    ],
    "answerIndex": 0,
    "explanation": "FIFO page replacement can exhibit Belady's Anomaly."
  },
  {
    "id": 290,
    "category": "Page Replacement Algorithms",
    "question": "Belady's Anomaly means:",
    "options": [
      "Increasing the number of frames may increase page faults.",
      "CPU speed decreases.",
      "RAM becomes fragmented.",
      "Threads stop executing."
    ],
    "answerIndex": 0,
    "explanation": "Belady's Anomaly is the counterintuitive phenomenon where adding physical frames causes more page faults under FIFO."
  },
  {
    "id": 291,
    "category": "Page Replacement Algorithms",
    "question": "Which algorithm generally performs better than FIFO?",
    "options": [
      "LRU",
      "Random",
      "FCFS",
      "Static"
    ],
    "answerIndex": 0,
    "explanation": "LRU consistently outperforms FIFO because it accounts for temporal locality of page access."
  },
  {
    "id": 292,
    "category": "Page Replacement Algorithms",
    "question": "The Second Chance (Clock) algorithm is mainly an improvement over:",
    "options": [
      "FIFO",
      "LRU",
      "Optimal",
      "Round Robin"
    ],
    "answerIndex": 0,
    "explanation": "The Second Chance (Clock) algorithm improves FIFO by using a reference bit to spare recently used pages."
  },
  {
    "id": 293,
    "category": "Page Replacement Algorithms",
    "question": "Which algorithm uses a reference bit?",
    "options": [
      "Clock (Second Chance)",
      "FCFS",
      "SJF",
      "Priority"
    ],
    "answerIndex": 0,
    "explanation": "Clock / Second Chance algorithm inspects a 1-bit reference flag per page frame in a circular queue."
  },
  {
    "id": 294,
    "category": "Page Replacement Algorithms",
    "question": "Which page replacement algorithm is easiest to implement?",
    "options": [
      "FIFO",
      "LRU",
      "Optimal",
      "Clock"
    ],
    "answerIndex": 0,
    "explanation": "FIFO is simplest to implement using a standard queue data structure."
  },
  {
    "id": 295,
    "category": "Page Replacement Algorithms",
    "question": "Which statement is TRUE?",
    "options": [
      "Optimal Page Replacement is mainly used as a benchmark for comparison.",
      "FIFO always gives the fewest page faults.",
      "LRU requires future knowledge.",
      "Belady's Anomaly affects Optimal."
    ],
    "answerIndex": 0,
    "explanation": "Optimal replacement serves as an ideal baseline benchmark to evaluate performance of real-world algorithms."
  },
  {
    "id": 296,
    "category": "Thrashing & Working Set",
    "question": "Thrashing occurs when:",
    "options": [
      "The system spends more time paging than executing processes.",
      "CPU utilization reaches 100%.",
      "Files become fragmented.",
      "Deadlock occurs."
    ],
    "answerIndex": 0,
    "explanation": "Thrashing occurs when a system spends more time servicing page faults than executing application instructions."
  },
  {
    "id": 297,
    "category": "Thrashing & Working Set",
    "question": "The primary cause of thrashing is:",
    "options": [
      "Insufficient physical memory",
      "Large cache",
      "Fast processor",
      "Large disk"
    ],
    "answerIndex": 0,
    "explanation": "Thrashing happens when total physical memory is smaller than sum of working sets of active processes."
  },
  {
    "id": 298,
    "category": "Thrashing & Working Set",
    "question": "Which symptom indicates thrashing?",
    "options": [
      "Frequent page faults",
      "Faster execution",
      "Reduced memory accesses",
      "Increased cache hits"
    ],
    "answerIndex": 0,
    "explanation": "A sudden surge in continuous page fault rate accompanied by near-zero CPU utilization signals thrashing."
  },
  {
    "id": 299,
    "category": "Thrashing & Working Set",
    "question": "The Working Set Model attempts to:",
    "options": [
      "Keep the actively used pages of a process in memory.",
      "Eliminate CPU scheduling.",
      "Increase disk capacity.",
      "Remove page tables."
    ],
    "answerIndex": 0,
    "explanation": "The Working Set Model tracks pages actively referenced by a process in a recent time delta to prevent thrashing."
  },
  {
    "id": 300,
    "category": "Thrashing & Working Set",
    "question": "Which statement is correct?",
    "options": [
      "Thrashing significantly reduces system performance, while the Working Set Model helps reduce it by keeping actively used pages in memory.",
      "Thrashing improves CPU utilization.",
      "Working Set increases page faults.",
      "FIFO completely eliminates thrashing."
    ],
    "answerIndex": 0,
    "explanation": "Thrashing degrades performance, whereas working set allocation prevents thrashing by ensuring sufficient frames per process."
  },
  {
    "id": 301,
    "category": "File System Basics",
    "question": "A file is:",
    "options": [
      "A collection of related data stored under a single name.",
      "A CPU register.",
      "A process.",
      "A page in memory."
    ],
    "answerIndex": 0,
    "explanation": "A file is a named, logical collection of contiguous related bytes saved on persistent storage."
  },
  {
    "id": 302,
    "category": "File System Basics",
    "question": "Which operating system component manages files and directories?",
    "options": [
      "CPU Scheduler",
      "File System",
      "Memory Manager",
      "Dispatcher"
    ],
    "answerIndex": 1,
    "explanation": "The File System sub-component manages files, directory trees, storage block allocation, and access rights."
  },
  {
    "id": 303,
    "category": "File System Basics",
    "question": "Which of the following is NOT a typical file attribute?",
    "options": [
      "File Size",
      "Creation Time",
      "Owner",
      "CPU Clock Speed"
    ],
    "answerIndex": 3,
    "explanation": "CPU clock speed is a hardware specification, not a file metadata attribute."
  },
  {
    "id": 304,
    "category": "File System Basics",
    "question": "Which file attribute uniquely identifies a file in many operating systems?",
    "options": [
      "File Name",
      "File Identifier (ID/Inode Number)",
      "Extension",
      "Folder Name"
    ],
    "answerIndex": 1,
    "explanation": "A unique file identifier (such as Inode number in POSIX filesystems) uniquely identifies a file internally."
  },
  {
    "id": 305,
    "category": "File System Basics",
    "question": "Which operation creates a new empty file?",
    "options": [
      "Delete",
      "Create",
      "Rename",
      "Seek"
    ],
    "answerIndex": 1,
    "explanation": "The create() system operation allocates directory entry and filesystem structures for a new file."
  },
  {
    "id": 306,
    "category": "File System Basics",
    "question": "Which file operation removes a file permanently from the file system?",
    "options": [
      "Open",
      "Delete",
      "Append",
      "Read"
    ],
    "answerIndex": 1,
    "explanation": "The delete() operation unlinks directory entries and releases occupied storage blocks."
  },
  {
    "id": 307,
    "category": "File System Basics",
    "question": "Which operation changes the current read/write position within a file?",
    "options": [
      "Seek",
      "Create",
      "Close",
      "Rename"
    ],
    "answerIndex": 0,
    "explanation": "The seek() operation repositions the file position pointer to a specified byte offset."
  },
  {
    "id": 308,
    "category": "File System Basics",
    "question": "Which operation is performed before reading data from most files?",
    "options": [
      "Open",
      "Delete",
      "Rename",
      "Compile"
    ],
    "answerIndex": 0,
    "explanation": "The open() call locates file metadata and returns a file descriptor before I/O operations occur."
  },
  {
    "id": 309,
    "category": "File System Basics",
    "question": "Which operation releases the file after use?",
    "options": [
      "Open",
      "Close",
      "Seek",
      "Append"
    ],
    "answerIndex": 1,
    "explanation": "The close() system call flushes buffers and frees file descriptor locks."
  },
  {
    "id": 310,
    "category": "File System Basics",
    "question": "Which operation adds data to the end of a file?",
    "options": [
      "Append",
      "Delete",
      "Rename",
      "Mount"
    ],
    "answerIndex": 0,
    "explanation": "The append operation writes new bytes strictly to the end of an existing file."
  },
  {
    "id": 311,
    "category": "File System Basics",
    "question": "Which statement is TRUE?",
    "options": [
      "Every file must have a unique name within the same directory.",
      "Two files in the same directory must always have identical names.",
      "Files cannot be renamed.",
      "Directories cannot contain files."
    ],
    "answerIndex": 0,
    "explanation": "File names within a single directory path must be unique."
  },
  {
    "id": 312,
    "category": "File System Basics",
    "question": "Which file attribute is mainly used for access control?",
    "options": [
      "Permissions",
      "File Size",
      "Creation Date",
      "Extension"
    ],
    "answerIndex": 0,
    "explanation": "File permissions (e.g. read, write, execute flags) govern access control security."
  },
  {
    "id": 313,
    "category": "File System Basics",
    "question": "Which operation retrieves data from a file?",
    "options": [
      "Write",
      "Read",
      "Delete",
      "Rename"
    ],
    "answerIndex": 1,
    "explanation": "The read() system call retrieves byte streams from a file into process memory."
  },
  {
    "id": 314,
    "category": "File System Basics",
    "question": "Which operation modifies existing file contents?",
    "options": [
      "Write",
      "Seek",
      "Open",
      "Mount"
    ],
    "answerIndex": 0,
    "explanation": "The write() operation modifies or overwrites file data."
  },
  {
    "id": 315,
    "category": "File System Basics",
    "question": "Which statement best describes a file system?",
    "options": [
      "It organizes and manages files on storage devices.",
      "It schedules CPU processes.",
      "It manages network routing.",
      "It performs memory allocation."
    ],
    "answerIndex": 0,
    "explanation": "A file system provides logical structure, persistence, retrieval, and protection for files on storage drives."
  },
  {
    "id": 316,
    "category": "File Access Methods",
    "question": "Which access method reads records one after another?",
    "options": [
      "Sequential Access",
      "Direct Access",
      "Indexed Access",
      "Random Scheduling"
    ],
    "answerIndex": 0,
    "explanation": "Sequential Access reads file records in strict linear order from start to end."
  },
  {
    "id": 317,
    "category": "File Access Methods",
    "question": "Which access method allows immediate access to any record?",
    "options": [
      "Sequential",
      "Direct (Random) Access",
      "FIFO",
      "Round Robin"
    ],
    "answerIndex": 1,
    "explanation": "Direct (Random) Access allows jumping directly to any arbitrary block/record using block numbers."
  },
  {
    "id": 318,
    "category": "File Access Methods",
    "question": "Sequential access is most suitable for:",
    "options": [
      "Audio/Video playback from beginning to end",
      "Database indexing",
      "Random record lookup",
      "CPU scheduling"
    ],
    "answerIndex": 0,
    "explanation": "Streaming continuous media (audio/video) from start to finish naturally aligns with sequential access."
  },
  {
    "id": 319,
    "category": "File Access Methods",
    "question": "Direct access is commonly used in:",
    "options": [
      "Databases",
      "Magnetic tape systems",
      "Printed books",
      "Process scheduling"
    ],
    "answerIndex": 0,
    "explanation": "Database engines use direct random access to fetch specific records rapidly by offset/block."
  },
  {
    "id": 320,
    "category": "File Access Methods",
    "question": "Which storage device naturally supports sequential access?",
    "options": [
      "Magnetic Tape",
      "SSD",
      "RAM",
      "Cache"
    ],
    "answerIndex": 0,
    "explanation": "Magnetic tape drives operate linearly, making them inherently sequential access media."
  },
  {
    "id": 321,
    "category": "File Access Methods",
    "question": "Which storage device efficiently supports direct access?",
    "options": [
      "Hard Disk / SSD",
      "Magnetic Tape",
      "Printer",
      "Plotter"
    ],
    "answerIndex": 0,
    "explanation": "Hard disks and SSDs allow direct block-level random read/write operations."
  },
  {
    "id": 322,
    "category": "File Access Methods",
    "question": "Which access method is generally slower when searching for the last record?",
    "options": [
      "Sequential Access",
      "Direct Access",
      "Indexed Access",
      "Random Access Memory"
    ],
    "answerIndex": 0,
    "explanation": "Sequential access must traverse all preceding records from the beginning to reach the end."
  },
  {
    "id": 323,
    "category": "File Access Methods",
    "question": "Indexed access improves:",
    "options": [
      "Record searching speed",
      "CPU clock speed",
      "Memory size",
      "Process synchronization"
    ],
    "answerIndex": 0,
    "explanation": "Indexed access uses an index lookup table to speed up target record locations."
  },
  {
    "id": 324,
    "category": "File Access Methods",
    "question": "Which access method combines an index with direct retrieval?",
    "options": [
      "Indexed Access",
      "Sequential",
      "FCFS",
      "Paging"
    ],
    "answerIndex": 0,
    "explanation": "Indexed Sequential Access Method (ISAM) uses index pointers to enable direct record retrieval."
  },
  {
    "id": 325,
    "category": "File Access Methods",
    "question": "Which statement is TRUE?",
    "options": [
      "Direct access allows records to be accessed without reading preceding records.",
      "Sequential access always uses indexes.",
      "Indexed access cannot improve search performance.",
      "Sequential access is always faster than direct access."
    ],
    "answerIndex": 0,
    "explanation": "Direct access enables reading block N directly without processing blocks 1 through N-1."
  },
  {
    "id": 326,
    "category": "Directory Structures",
    "question": "A directory is primarily used to:",
    "options": [
      "Store process states.",
      "Organize files and subdirectories.",
      "Allocate CPU time.",
      "Manage virtual memory."
    ],
    "answerIndex": 1,
    "explanation": "A directory is a container symbol table mapping human-readable file names to file control metadata/inodes."
  },
  {
    "id": 327,
    "category": "Directory Structures",
    "question": "Which directory structure is the simplest?",
    "options": [
      "Single-Level Directory",
      "Tree Directory",
      "Acyclic Graph",
      "General Graph"
    ],
    "answerIndex": 0,
    "explanation": "A Single-Level Directory contains all files in one single directory, making it simplest but prone to name collisions."
  },
  {
    "id": 328,
    "category": "Directory Structures",
    "question": "The major disadvantage of a single-level directory is:",
    "options": [
      "Name conflicts among users.",
      "Slow CPU scheduling.",
      "External fragmentation.",
      "Page faults."
    ],
    "answerIndex": 0,
    "explanation": "Single-level directory causes name collisions because distinct users cannot use identical file names."
  },
  {
    "id": 329,
    "category": "Directory Structures",
    "question": "A two-level directory mainly solves:",
    "options": [
      "File name conflicts between users.",
      "Deadlock.",
      "Paging.",
      "Swapping."
    ],
    "answerIndex": 0,
    "explanation": "Two-level directory creates distinct master directory folders per user, resolving name collisions."
  },
  {
    "id": 330,
    "category": "Directory Structures",
    "question": "Which directory structure allows subdirectories?",
    "options": [
      "Tree Directory",
      "Single-Level Directory",
      "Flat Directory",
      "FIFO Directory"
    ],
    "answerIndex": 0,
    "explanation": "Tree-Structured directory layout allows nesting arbitrary subdirectories."
  },
  {
    "id": 331,
    "category": "Directory Structures",
    "question": "Which directory structure most closely resembles modern operating systems?",
    "options": [
      "Tree Directory",
      "Single-Level",
      "Circular Directory",
      "Sequential Directory"
    ],
    "answerIndex": 0,
    "explanation": "Modern OS file systems use tree-structured hierarchical directory organization."
  },
  {
    "id": 332,
    "category": "Directory Structures",
    "question": "Which directory structure supports shared files without cycles?",
    "options": [
      "Acyclic Graph Directory",
      "Single-Level",
      "Two-Level",
      "Linear Directory"
    ],
    "answerIndex": 0,
    "explanation": "An Acyclic Graph Directory permits links/shared files while strictly prohibiting directory cycles."
  },
  {
    "id": 333,
    "category": "Directory Structures",
    "question": "Which directory structure may create cycles if not carefully managed?",
    "options": [
      "General Graph Directory",
      "Tree Directory",
      "Two-Level Directory",
      "Single-Level Directory"
    ],
    "answerIndex": 0,
    "explanation": "General Graph Directory allows unrestricted links, which can introduce cycles if not managed."
  },
  {
    "id": 334,
    "category": "Directory Structures",
    "question": "Which statement is TRUE?",
    "options": [
      "Every file belongs to exactly one directory in all systems.",
      "Graph-based directories can allow shared files.",
      "Tree directories cannot contain subdirectories.",
      "Directories cannot store file metadata."
    ],
    "answerIndex": 1,
    "explanation": "Graph-based directory structures support soft/hard links enabling shared files across directories."
  },
  {
    "id": 335,
    "category": "Directory Structures",
    "question": "Which directory structure offers the best balance between organization and simplicity?",
    "options": [
      "Tree Directory",
      "Single-Level",
      "Flat Directory",
      "FIFO Directory"
    ],
    "answerIndex": 0,
    "explanation": "Tree directory offers clean, intuitive organizational grouping for files and subfolders."
  },
  {
    "id": 336,
    "category": "File Allocation Methods & Protection",
    "question": "Contiguous allocation stores:",
    "options": [
      "File blocks in consecutive disk locations.",
      "File blocks randomly.",
      "Only indexes.",
      "Only pointers."
    ],
    "answerIndex": 0,
    "explanation": "Contiguous allocation requires placing file blocks in adjacent consecutive disk sectors."
  },
  {
    "id": 337,
    "category": "File Allocation Methods & Protection",
    "question": "Which allocation method provides the fastest sequential access?",
    "options": [
      "Contiguous Allocation",
      "Linked Allocation",
      "Indexed Allocation",
      "Random Allocation"
    ],
    "answerIndex": 0,
    "explanation": "Contiguous allocation minimizes disk head movement, providing maximum sequential read/write speed."
  },
  {
    "id": 338,
    "category": "File Allocation Methods & Protection",
    "question": "Which allocation method suffers from external fragmentation?",
    "options": [
      "Contiguous Allocation",
      "Indexed Allocation",
      "FAT only",
      "Inode only"
    ],
    "answerIndex": 0,
    "explanation": "Variable file sizing under contiguous allocation causes disk space external fragmentation."
  },
  {
    "id": 339,
    "category": "File Allocation Methods & Protection",
    "question": "Linked allocation stores:",
    "options": [
      "File blocks connected through pointers.",
      "Consecutive blocks only.",
      "Fixed segments.",
      "Frames."
    ],
    "answerIndex": 0,
    "explanation": "Linked allocation links non-contiguous file blocks using embedded pointers in each disk block."
  },
  {
    "id": 340,
    "category": "File Allocation Methods & Protection",
    "question": "Which allocation method provides efficient random access?",
    "options": [
      "Indexed Allocation",
      "Linked Allocation",
      "Sequential Allocation",
      "FIFO Allocation"
    ],
    "answerIndex": 0,
    "explanation": "Indexed Allocation brings all block pointers into an index block, enabling direct random block reads."
  },
  {
    "id": 341,
    "category": "File Allocation Methods & Protection",
    "question": "FAT stands for:",
    "options": [
      "File Allocation Table",
      "Fast Access Table",
      "File Access Tree",
      "File Address Translation"
    ],
    "answerIndex": 0,
    "explanation": "FAT stands for File Allocation Table."
  },
  {
    "id": 342,
    "category": "File Allocation Methods & Protection",
    "question": "The primary purpose of FAT is to:",
    "options": [
      "Track the allocation of disk blocks to files.",
      "Schedule CPU processes.",
      "Translate virtual addresses.",
      "Manage interrupts."
    ],
    "answerIndex": 0,
    "explanation": "The FAT table stores linked-list pointer entries tracking disk block chains for every file."
  },
  {
    "id": 343,
    "category": "File Allocation Methods & Protection",
    "question": "An inode in UNIX-like systems stores:",
    "options": [
      "File metadata (permissions, owner, timestamps, block pointers).",
      "File contents only.",
      "CPU registers.",
      "Memory pages."
    ],
    "answerIndex": 0,
    "explanation": "An inode (index node) stores file attributes, permissions, file size, timestamps, and direct/indirect block pointers."
  },
  {
    "id": 344,
    "category": "File Allocation Methods & Protection",
    "question": "Which information is NOT typically stored in an inode?",
    "options": [
      "Owner ID",
      "File permissions",
      "File size",
      "File name"
    ],
    "answerIndex": 3,
    "explanation": "In UNIX filesystems, file names are stored in directory entries, not inside the inode itself."
  },
  {
    "id": 345,
    "category": "File Allocation Methods & Protection",
    "question": "Which protection mechanism determines who can read, write, or execute a file?",
    "options": [
      "File Permissions",
      "CPU Scheduling",
      "Paging",
      "Swapping"
    ],
    "answerIndex": 0,
    "explanation": "File access permissions (Read, Write, Execute for Owner/Group/Others) govern access rights."
  },
  {
    "id": 346,
    "category": "File Allocation Methods & Protection",
    "question": "Which principle improves file security the most?",
    "options": [
      "Grant only the minimum required permissions.",
      "Give all users full access.",
      "Disable authentication.",
      "Remove file ownership."
    ],
    "answerIndex": 0,
    "explanation": "The Principle of Least Privilege dictates granting only essential permissions required for task execution."
  },
  {
    "id": 347,
    "category": "File Allocation Methods & Protection",
    "question": "Which statement correctly compares FAT and inodes?",
    "options": [
      "FAT tracks block allocation using a table, whereas inodes store metadata and block pointers for individual files.",
      "Both are identical.",
      "FAT exists only in RAM.",
      "Inodes store only file names."
    ],
    "answerIndex": 0,
    "explanation": "FAT maintains a centralized allocation table; inodes store individual file metadata and block maps per file."
  },
  {
    "id": 348,
    "category": "File Allocation Methods & Protection",
    "question": "Which file allocation method is generally easiest to implement but inefficient for random access?",
    "options": [
      "Linked Allocation",
      "Indexed Allocation",
      "Contiguous Allocation",
      "Paging"
    ],
    "answerIndex": 0,
    "explanation": "Linked allocation is simple to implement but slow for random access (must traverse pointers in sequence)."
  },
  {
    "id": 349,
    "category": "File Allocation Methods & Protection",
    "question": "Which allocation method eliminates external fragmentation but requires an index block?",
    "options": [
      "Indexed Allocation",
      "Contiguous Allocation",
      "Linked Allocation",
      "Sequential Allocation"
    ],
    "answerIndex": 0,
    "explanation": "Indexed Allocation eliminates external fragmentation by allowing arbitrary block placement, using an index block for pointers."
  },
  {
    "id": 350,
    "category": "File Allocation Methods & Protection",
    "question": "Which statement is correct?",
    "options": [
      "A file system organizes files, directories, allocation methods, metadata, and protection mechanisms to provide efficient and secure storage management.",
      "File systems perform CPU scheduling.",
      "File systems eliminate all fragmentation.",
      "Directories replace RAM."
    ],
    "answerIndex": 0,
    "explanation": "File systems combine metadata, directory trees, storage allocation algorithms, and security permissions for data storage."
  },
  {
    "id": 351,
    "category": "Kernel & Kernel Types",
    "question": "The kernel is:",
    "options": [
      "An application software",
      "The core component of an operating system that manages hardware and system resources.",
      "A programming language",
      "A compiler"
    ],
    "answerIndex": 1,
    "explanation": "The kernel is the essential core of an OS that interacts directly with hardware and manages processes/memory."
  },
  {
    "id": 352,
    "category": "Kernel & Kernel Types",
    "question": "Which operating system component always remains in memory while the system is running?",
    "options": [
      "Shell",
      "Kernel",
      "Compiler",
      "Editor"
    ],
    "answerIndex": 1,
    "explanation": "The kernel code stays permanently resident in kernel-space RAM as long as system power is active."
  },
  {
    "id": 353,
    "category": "Kernel & Kernel Types",
    "question": "Which kernel directly manages CPU scheduling, memory, and devices?",
    "options": [
      "Shell",
      "Kernel",
      "Assembler",
      "Loader"
    ],
    "answerIndex": 1,
    "explanation": "The kernel manages core sub-systems: process scheduler, memory manager, device drivers, and IPC."
  },
  {
    "id": 354,
    "category": "Kernel & Kernel Types",
    "question": "A Monolithic Kernel places:",
    "options": [
      "Most operating system services inside kernel space.",
      "All services in user space.",
      "Only the scheduler in kernel mode.",
      "Only device drivers in user mode."
    ],
    "answerIndex": 0,
    "explanation": "Monolithic architecture bundles virtually all OS services (drivers, filesystem, scheduler) inside a single kernel address space."
  },
  {
    "id": 355,
    "category": "Kernel & Kernel Types",
    "question": "Which operating system commonly uses a monolithic kernel?",
    "options": [
      "Linux",
      "MINIX",
      "QNX",
      "Mach"
    ],
    "answerIndex": 0,
    "explanation": "Linux is a prime example of a monolithic kernel architecture (with dynamic module loading)."
  },
  {
    "id": 356,
    "category": "Kernel & Kernel Types",
    "question": "A Microkernel keeps only essential services in kernel space, mainly:",
    "options": [
      "CPU scheduling, memory management, and IPC.",
      "File system and all device drivers.",
      "Web browser and compiler.",
      "User applications."
    ],
    "answerIndex": 0,
    "explanation": "Microkernels strip kernel space down to essential minimal services: basic thread scheduling, memory mapping, and IPC."
  },
  {
    "id": 357,
    "category": "Kernel & Kernel Types",
    "question": "Which is a major advantage of a microkernel?",
    "options": [
      "Better fault isolation and reliability.",
      "Larger kernel size.",
      "No IPC is required.",
      "Faster compilation."
    ],
    "answerIndex": 0,
    "explanation": "Microkernels offer high reliability and fault isolation: a crashing driver in user space won't crash the core kernel."
  },
  {
    "id": 358,
    "category": "Kernel & Kernel Types",
    "question": "Which is generally faster?",
    "options": [
      "Monolithic Kernel",
      "Microkernel",
      "Both are always identical.",
      "Neither supports multitasking."
    ],
    "answerIndex": 0,
    "explanation": "Monolithic kernels generally outperform microkernels because inter-service calls avoid user-kernel context-switch overhead."
  },
  {
    "id": 359,
    "category": "Kernel & Kernel Types",
    "question": "Which kernel usually has lower communication overhead?",
    "options": [
      "Monolithic Kernel",
      "Microkernel",
      "Hybrid Kernel",
      "Nanokernel"
    ],
    "answerIndex": 0,
    "explanation": "Monolithic kernels communicate via fast direct C function calls rather than user-space message-passing IPC."
  },
  {
    "id": 360,
    "category": "Kernel & Kernel Types",
    "question": "Which kernel relies heavily on message passing between services?",
    "options": [
      "Microkernel",
      "Monolithic Kernel",
      "Batch Kernel",
      "Distributed Kernel"
    ],
    "answerIndex": 0,
    "explanation": "Microkernel architectures rely heavily on Message Passing IPC to coordinate user-space drivers and servers."
  },
  {
    "id": 361,
    "category": "Kernel & Kernel Types",
    "question": "Which statement about a microkernel is TRUE?",
    "options": [
      "Device drivers can execute in user space.",
      "All services execute in kernel mode.",
      "IPC is unnecessary.",
      "It always outperforms monolithic kernels."
    ],
    "answerIndex": 0,
    "explanation": "In microkernels, device drivers and filesystems run as isolated unprivileged user-space daemons."
  },
  {
    "id": 362,
    "category": "Kernel & Kernel Types",
    "question": "Which statement about a monolithic kernel is TRUE?",
    "options": [
      "Most operating system services execute in kernel space.",
      "Every service executes in user space.",
      "It has no device drivers.",
      "It uses only message passing."
    ],
    "answerIndex": 0,
    "explanation": "Monolithic design runs filesystem, drivers, and network stack inside privileged kernel space."
  },
  {
    "id": 363,
    "category": "Kernel & Kernel Types",
    "question": "Which kernel design generally provides better modularity?",
    "options": [
      "Microkernel",
      "Monolithic Kernel",
      "DOS Kernel",
      "Embedded Kernel"
    ],
    "answerIndex": 0,
    "explanation": "Microkernels enforce clean modular architecture by decoupling services into user-space modules."
  },
  {
    "id": 364,
    "category": "Kernel & Kernel Types",
    "question": "Which statement correctly compares monolithic and microkernels?",
    "options": [
      "Monolithic kernels usually offer better performance, whereas microkernels emphasize modularity and reliability.",
      "Both are identical.",
      "Microkernels eliminate IPC.",
      "Monolithic kernels execute all services in user mode."
    ],
    "answerIndex": 0,
    "explanation": "Monolithic maximizes execution speed; microkernel prioritizes stability, security isolation, and modularity."
  },
  {
    "id": 365,
    "category": "Kernel & Kernel Types",
    "question": "Which operating system component provides the interface between applications and hardware?",
    "options": [
      "Kernel",
      "Compiler",
      "Linker",
      "IDE"
    ],
    "answerIndex": 0,
    "explanation": "The Kernel abstracts hardware interfaces for application programs."
  },
  {
    "id": 366,
    "category": "System Calls",
    "question": "A system call is:",
    "options": [
      "A request by a program for an operating system service.",
      "A compiler warning.",
      "A hardware interrupt.",
      "A process scheduler."
    ],
    "answerIndex": 0,
    "explanation": "A system call provides the programmatic interface for applications to request services from the OS kernel."
  },
  {
    "id": 367,
    "category": "System Calls",
    "question": "Applications communicate with the operating system primarily through:",
    "options": [
      "System Calls",
      "File Names",
      "BIOS only",
      "Registers"
    ],
    "answerIndex": 0,
    "explanation": "User-space applications invoke system calls (APIs like POSIX) to perform protected operations."
  },
  {
    "id": 368,
    "category": "System Calls",
    "question": "Which operation typically requires a system call?",
    "options": [
      "Reading a file",
      "Adding two numbers in a register.",
      "Multiplying integers.",
      "Comparing variables."
    ],
    "answerIndex": 0,
    "explanation": "I/O hardware access (like reading a file from disk) requires kernel-mode system call execution."
  },
  {
    "id": 369,
    "category": "System Calls",
    "question": "Which system call category includes creating a process?",
    "options": [
      "Process Control",
      "File Compression",
      "Routing",
      "Scheduling"
    ],
    "answerIndex": 0,
    "explanation": "Process control system calls include fork(), exec(), exit(), wait(), and process management."
  },
  {
    "id": 370,
    "category": "System Calls",
    "question": "Which system call category includes opening a file?",
    "options": [
      "File Management",
      "Memory Scheduling",
      "Device Scheduling",
      "CPU Allocation"
    ],
    "answerIndex": 0,
    "explanation": "File management system calls handle open(), read(), write(), close(), and stat() file operations."
  },
  {
    "id": 371,
    "category": "System Calls",
    "question": "Which system call category manages communication between processes?",
    "options": [
      "Communication",
      "Paging",
      "Segmentation",
      "Swapping"
    ],
    "answerIndex": 0,
    "explanation": "Communication system calls handle pipe(), socket(), shmget(), and message queues."
  },
  {
    "id": 372,
    "category": "System Calls",
    "question": "Which system call category allocates memory?",
    "options": [
      "Memory Management",
      "Device Scheduling",
      "File Protection",
      "Routing"
    ],
    "answerIndex": 0,
    "explanation": "Memory management system calls (brk, sbrk, mmap) allocate address space frames to processes."
  },
  {
    "id": 373,
    "category": "System Calls",
    "question": "Which operation usually requires switching from user mode to kernel mode?",
    "options": [
      "System Call",
      "Arithmetic calculation",
      "Variable assignment",
      "Function call within a program"
    ],
    "answerIndex": 0,
    "explanation": "Executing a system call triggers a software interrupt/trap switching execution from User Mode to Kernel Mode."
  },
  {
    "id": 374,
    "category": "System Calls",
    "question": "Why are system calls needed?",
    "options": [
      "User programs cannot directly access protected hardware resources.",
      "Programs cannot perform arithmetic.",
      "RAM is too small.",
      "CPU scheduling requires them."
    ],
    "answerIndex": 0,
    "explanation": "For security and hardware protection, applications run in unprivileged User Mode and rely on system calls for hardware access."
  },
  {
    "id": 375,
    "category": "System Calls",
    "question": "Which statement is TRUE?",
    "options": [
      "System calls provide controlled access to operating system services.",
      "Applications directly control hardware.",
      "System calls bypass kernel protection.",
      "They eliminate user mode."
    ],
    "answerIndex": 0,
    "explanation": "System calls offer a controlled, validated gateway into kernel services."
  },
  {
    "id": 376,
    "category": "System Calls",
    "question": "Which of the following is NOT typically a system call category?",
    "options": [
      "Process Control",
      "File Management",
      "Communication",
      "Compiler Optimization"
    ],
    "answerIndex": 3,
    "explanation": "Compiler optimization is performed offline by software compilers, not by kernel system calls."
  },
  {
    "id": 377,
    "category": "System Calls",
    "question": "Which mode executes most application programs?",
    "options": [
      "User Mode",
      "Kernel Mode",
      "Supervisor Mode only",
      "Boot Mode"
    ],
    "answerIndex": 0,
    "explanation": "Normal user applications execute in CPU User Mode (Ring 3) with restricted instruction access."
  },
  {
    "id": 378,
    "category": "System Calls",
    "question": "Which mode has unrestricted access to hardware?",
    "options": [
      "Kernel Mode",
      "User Mode",
      "Guest Mode",
      "Virtual Mode"
    ],
    "answerIndex": 0,
    "explanation": "Kernel Mode (Ring 0 / Supervisor Mode) grants execution of all CPU instructions and full hardware access."
  },
  {
    "id": 379,
    "category": "System Calls",
    "question": "Which transition occurs during a system call?",
    "options": [
      "User Mode \u2192 Kernel Mode",
      "Kernel Mode \u2192 User Mode only",
      "RAM \u2192 Cache",
      "Disk \u2192 Register"
    ],
    "answerIndex": 0,
    "explanation": "Executing a system call traps CPU execution from User Mode into privileged Kernel Mode."
  },
  {
    "id": 380,
    "category": "System Calls",
    "question": "Which statement is correct?",
    "options": [
      "System calls act as the interface between user applications and the operating system kernel.",
      "Applications communicate directly with hardware.",
      "System calls are scheduling algorithms.",
      "System calls exist only in Linux."
    ],
    "answerIndex": 0,
    "explanation": "System calls serve as the essential layer connecting application software to the OS kernel."
  },
  {
    "id": 381,
    "category": "Boot Process & IPC",
    "question": "Booting is:",
    "options": [
      "The process of starting a computer and loading the operating system.",
      "Formatting a disk.",
      "Installing software.",
      "Shutting down a computer."
    ],
    "answerIndex": 0,
    "explanation": "Booting is the startup sequence initializing hardware and loading OS kernel into memory from storage."
  },
  {
    "id": 382,
    "category": "Boot Process & IPC",
    "question": "Which firmware initializes hardware during startup?",
    "options": [
      "BIOS/UEFI",
      "Shell",
      "Compiler",
      "Loader"
    ],
    "answerIndex": 0,
    "explanation": "BIOS (Basic Input/Output System) or UEFI firmware performs hardware POST checks and launches bootloader."
  },
  {
    "id": 383,
    "category": "Boot Process & IPC",
    "question": "Which component loads the operating system kernel into memory?",
    "options": [
      "Bootloader",
      "Scheduler",
      "MMU",
      "Semaphore"
    ],
    "answerIndex": 0,
    "explanation": "The Bootloader (e.g. GRUB) locates, loads, and executes the OS kernel image in main memory."
  },
  {
    "id": 384,
    "category": "Boot Process & IPC",
    "question": "Which type of boot restarts the system without turning off power?",
    "options": [
      "Warm Boot",
      "Cold Boot",
      "Hard Boot",
      "Virtual Boot"
    ],
    "answerIndex": 0,
    "explanation": "A Warm Boot (reboot) restarts system software without cutting motherboard physical power."
  },
  {
    "id": 385,
    "category": "Boot Process & IPC",
    "question": "Which type of boot starts the computer from a powered-off state?",
    "options": [
      "Cold Boot",
      "Warm Boot",
      "Soft Boot",
      "Hybrid Boot"
    ],
    "answerIndex": 0,
    "explanation": "A Cold Boot powers on the system from complete powered-off state, running full POST hardware tests."
  },
  {
    "id": 386,
    "category": "Boot Process & IPC",
    "question": "IPC stands for:",
    "options": [
      "Inter-Process Communication",
      "Internal Process Control",
      "Internet Protocol Communication",
      "Interrupt Processing Center"
    ],
    "answerIndex": 0,
    "explanation": "IPC stands for Inter-Process Communication."
  },
  {
    "id": 387,
    "category": "Boot Process & IPC",
    "question": "IPC is mainly used for:",
    "options": [
      "Communication and synchronization between processes.",
      "CPU scheduling.",
      "File compression.",
      "Disk formatting."
    ],
    "answerIndex": 0,
    "explanation": "IPC mechanisms enable concurrent processes to exchange data and synchronize execution."
  },
  {
    "id": 388,
    "category": "Boot Process & IPC",
    "question": "Which IPC mechanism allows two related processes to communicate through a unidirectional channel?",
    "options": [
      "Pipe",
      "Socket",
      "Semaphore",
      "Shared Memory"
    ],
    "answerIndex": 0,
    "explanation": "A Pipe creates a unidirectional byte-stream communication channel between related processes."
  },
  {
    "id": 389,
    "category": "Boot Process & IPC",
    "question": "Which IPC mechanism generally provides the fastest communication because processes directly access the same memory?",
    "options": [
      "Shared Memory",
      "Pipe",
      "Message Queue",
      "Signal"
    ],
    "answerIndex": 0,
    "explanation": "Shared Memory offers maximum speed because processes access shared RAM directly without kernel copying overhead."
  },
  {
    "id": 390,
    "category": "Boot Process & IPC",
    "question": "Which IPC mechanism exchanges data as discrete messages?",
    "options": [
      "Message Queue",
      "Pipe",
      "Paging",
      "Swapping"
    ],
    "answerIndex": 0,
    "explanation": "Message Queues pass discrete structured message packets between processes via kernel queues."
  },
  {
    "id": 391,
    "category": "Boot Process & IPC",
    "question": "Which IPC mechanism is primarily used to notify a process of an event?",
    "options": [
      "Signal",
      "Page Table",
      "PCB",
      "Cache"
    ],
    "answerIndex": 0,
    "explanation": "Signals are asynchronous notifications delivered by OS to notify a process of specific events or exceptions."
  },
  {
    "id": 392,
    "category": "Boot Process & IPC",
    "question": "Which IPC mechanism is commonly used for communication across different computers?",
    "options": [
      "Socket",
      "Semaphore",
      "Shared Memory",
      "Mutex"
    ],
    "answerIndex": 0,
    "explanation": "Sockets (network sockets) support IPC across networked systems as well as local inter-process communication."
  },
  {
    "id": 393,
    "category": "Boot Process & IPC",
    "question": "Which IPC mechanism usually requires synchronization to avoid race conditions?",
    "options": [
      "Shared Memory",
      "Signal",
      "Bootloader",
      "Scheduler"
    ],
    "answerIndex": 0,
    "explanation": "Shared Memory access must be synchronized using semaphores/mutexes to prevent concurrent data corruption."
  },
  {
    "id": 394,
    "category": "Boot Process & IPC",
    "question": "Which statement is TRUE?",
    "options": [
      "Pipes are generally used between related processes.",
      "Shared memory is slower than message passing.",
      "Signals transfer large files.",
      "Sockets cannot communicate over networks."
    ],
    "answerIndex": 0,
    "explanation": "Traditional anonymous pipes require parent-child relationship between communicating processes."
  },
  {
    "id": 395,
    "category": "Boot Process & IPC",
    "question": "Which operating system service is responsible for communication between processes?",
    "options": [
      "IPC",
      "Paging",
      "Fragmentation",
      "Scheduling"
    ],
    "answerIndex": 0,
    "explanation": "Inter-Process Communication (IPC) is the dedicated OS subsystem enabling process data exchange."
  },
  {
    "id": 396,
    "category": "Boot Process & IPC",
    "question": "Which operating system concept provides protection by separating user mode from kernel mode?",
    "options": [
      "Dual-Mode Operation",
      "Paging",
      "Swapping",
      "Round Robin"
    ],
    "answerIndex": 0,
    "explanation": "Dual-Mode Operation hardware support enforces separation between unprivileged user mode and privileged kernel mode."
  },
  {
    "id": 397,
    "category": "Boot Process & IPC",
    "question": "Which statement correctly distinguishes user mode and kernel mode?",
    "options": [
      "User mode has restricted privileges, whereas kernel mode has full access to hardware resources.",
      "Both modes have identical privileges.",
      "Kernel mode cannot execute system calls.",
      "User mode directly controls devices."
    ],
    "answerIndex": 0,
    "explanation": "User mode restricts CPU instructions to safeguard stability; kernel mode has unrestricted hardware control."
  },
  {
    "id": 398,
    "category": "Boot Process & IPC",
    "question": "Which of the following is an example of a privileged instruction?",
    "options": [
      "Modifying page tables",
      "Adding two integers.",
      "Multiplying two numbers.",
      "Comparing variables."
    ],
    "answerIndex": 0,
    "explanation": "Modifying page table base registers, disabling interrupts, or accessing I/O ports are privileged instructions reserved for kernel mode."
  },
  {
    "id": 399,
    "category": "Boot Process & IPC",
    "question": "Which statement best summarizes the role of an operating system?",
    "options": [
      "It acts as a resource manager and an interface between users/applications and computer hardware.",
      "It is only a compiler.",
      "It only stores files.",
      "It replaces application software."
    ],
    "answerIndex": 0,
    "explanation": "An operating system manages system resources efficiently while providing a clean execution environment for application software."
  },
  {
    "id": 400,
    "category": "Boot Process & IPC",
    "question": "Which statement is correct?",
    "options": [
      "The operating system manages processes, memory, files, I/O devices, protection, communication, and resource allocation while providing services to applications through the kernel and system calls.",
      "The operating system performs only CPU scheduling.",
      "The operating system manages only files.",
      "The operating system is unnecessary in modern computers."
    ],
    "answerIndex": 0,
    "explanation": "The OS comprehensively manages processing, memory, files, I/O, security, and IPC while interfacing with hardware."
  }
];

const MICROPROCESSOR_MCQS = [
  {
    "id": 1,
    "category": "CPU Architecture & Buses",
    "question": "A microprocessor is primarily known as:",
    "options": [
      "Input device",
      "Memory unit",
      "CPU on a single chip",
      "Output device"
    ],
    "answerIndex": 2,
    "explanation": "A microprocessor integrates the Central Processing Unit (CPU) functions on a single integrated circuit (IC) chip."
  },
  {
    "id": 2,
    "category": "CPU Architecture & Buses",
    "question": "Which component performs arithmetic and logical operations?",
    "options": [
      "ALU",
      "Control Unit",
      "Cache",
      "Decoder"
    ],
    "answerIndex": 0,
    "explanation": "The Arithmetic Logic Unit (ALU) performs all arithmetic (ADD, SUB) and bitwise logical (AND, OR, XOR) operations."
  },
  {
    "id": 3,
    "category": "CPU Architecture & Buses",
    "question": "Which unit controls the execution of instructions?",
    "options": [
      "ALU",
      "Control Unit",
      "Register",
      "Stack"
    ],
    "answerIndex": 1,
    "explanation": "The Control Unit (CU) fetches, decodes, and manages the execution flow of instructions by generating control signals."
  },
  {
    "id": 4,
    "category": "CPU Architecture & Buses",
    "question": "Which register stores the result of arithmetic and logical operations in the 8085?",
    "options": [
      "Accumulator",
      "HL",
      "SP",
      "PC"
    ],
    "answerIndex": 0,
    "explanation": "In the 8085, the Accumulator (Register A) holds one operand and receives the result of all ALU operations."
  },
  {
    "id": 5,
    "category": "CPU Architecture & Buses",
    "question": "Which register always contains the address of the next instruction?",
    "options": [
      "Stack Pointer",
      "Accumulator",
      "Program Counter",
      "Flag Register"
    ],
    "answerIndex": 2,
    "explanation": "The Program Counter (PC) is a 16-bit register that holds the memory address of the next instruction to be fetched."
  },
  {
    "id": 6,
    "category": "CPU Architecture & Buses",
    "question": "Which register points to the top of the stack?",
    "options": [
      "Program Counter",
      "Stack Pointer",
      "HL",
      "Accumulator"
    ],
    "answerIndex": 1,
    "explanation": "The Stack Pointer (SP) is a 16-bit register that points to the current top memory location of the LIFO stack."
  },
  {
    "id": 7,
    "category": "CPU Architecture & Buses",
    "question": "The 8085 is a:",
    "options": [
      "8-bit microprocessor",
      "16-bit microprocessor",
      "32-bit microprocessor",
      "64-bit microprocessor"
    ],
    "answerIndex": 0,
    "explanation": "The Intel 8085 is an 8-bit microprocessor because its internal data bus and ALU process 8 bits in parallel."
  },
  {
    "id": 8,
    "category": "CPU Architecture & Buses",
    "question": "The 8086 is a:",
    "options": [
      "8-bit microprocessor",
      "16-bit microprocessor",
      "32-bit microprocessor",
      "64-bit microprocessor"
    ],
    "answerIndex": 1,
    "explanation": "The Intel 8086 is a 16-bit microprocessor with a 16-bit internal ALU and a 16-bit data bus."
  },
  {
    "id": 9,
    "category": "CPU Architecture & Buses",
    "question": "Which register pair is commonly used as a memory pointer in the 8085?",
    "options": [
      "BC",
      "DE",
      "HL",
      "PSW"
    ],
    "answerIndex": 2,
    "explanation": "The HL register pair (H and L registers combined) acts as a 16-bit memory pointer (M) in 8085 assembly instructions."
  },
  {
    "id": 10,
    "category": "CPU Architecture & Buses",
    "question": "Which of the following is NOT a general-purpose register pair?",
    "options": [
      "BC",
      "DE",
      "HL",
      "SP"
    ],
    "answerIndex": 3,
    "explanation": "SP (Stack Pointer) is a special-purpose 16-bit pointer register, whereas BC, DE, and HL are general-purpose register pairs."
  },
  {
    "id": 11,
    "category": "CPU Architecture & Buses",
    "question": "The Program Counter stores:",
    "options": [
      "Data",
      "Address of the next instruction",
      "ALU result",
      "Stack address"
    ],
    "answerIndex": 1,
    "explanation": "The Program Counter continuously holds the memory address of the next instruction byte to fetch from memory."
  },
  {
    "id": 12,
    "category": "CPU Architecture & Buses",
    "question": "Which bus carries address information?",
    "options": [
      "Address Bus",
      "Data Bus",
      "Control Bus",
      "System Bus"
    ],
    "answerIndex": 0,
    "explanation": "The Address Bus carries memory addresses generated by the CPU to locate memory cells or I/O devices."
  },
  {
    "id": 13,
    "category": "CPU Architecture & Buses",
    "question": "Which bus is unidirectional?",
    "options": [
      "Address Bus",
      "Data Bus",
      "Control Bus",
      "Memory Bus"
    ],
    "answerIndex": 0,
    "explanation": "The Address Bus is unidirectional because addresses flow in one direction only: from the CPU out to memory/IO."
  },
  {
    "id": 14,
    "category": "CPU Architecture & Buses",
    "question": "Which bus transfers data between CPU and memory?",
    "options": [
      "Address Bus",
      "Data Bus",
      "Control Bus",
      "I/O Bus"
    ],
    "answerIndex": 1,
    "explanation": "The Data Bus is used to transfer data bytes between the CPU, memory modules, and I/O peripherals."
  },
  {
    "id": 15,
    "category": "CPU Architecture & Buses",
    "question": "The Data Bus is generally:",
    "options": [
      "Unidirectional",
      "Bidirectional",
      "Half duplex",
      "Serial only"
    ],
    "answerIndex": 1,
    "explanation": "The Data Bus is bidirectional to allow reading data from memory into CPU and writing data from CPU to memory."
  },
  {
    "id": 16,
    "category": "CPU Architecture & Buses",
    "question": "Which bus carries control signals?",
    "options": [
      "Address Bus",
      "Data Bus",
      "Control Bus",
      "Memory Bus"
    ],
    "answerIndex": 2,
    "explanation": "The Control Bus carries control and timing signals (RD, WR, IO/M, CLK) generated by the Control Unit."
  },
  {
    "id": 17,
    "category": "8085 Instruction Set",
    "question": "Which instruction transfers data?",
    "options": [
      "ADD",
      "SUB",
      "MOV",
      "CMP"
    ],
    "answerIndex": 2,
    "explanation": "The MOV instruction copies data between registers or between a register and memory without altering the source."
  },
  {
    "id": 18,
    "category": "8085 Instruction Set",
    "question": "Which instruction loads immediate data into a register pair?",
    "options": [
      "MOV",
      "ADD",
      "LXI",
      "INR"
    ],
    "answerIndex": 2,
    "explanation": "LXI (Load Register Pair Immediate) loads 16-bit immediate data into a specified register pair (e.g., LXI H, 2050H)."
  },
  {
    "id": 19,
    "category": "8085 Instruction Set",
    "question": "Which instruction compares two values?",
    "options": [
      "MOV",
      "ADD",
      "CMP",
      "ANA"
    ],
    "answerIndex": 2,
    "explanation": "CMP compares an operand with the Accumulator by subtracting it internally and setting flag bits without altering data."
  },
  {
    "id": 20,
    "category": "8085 Instruction Set",
    "question": "Which instruction increments a register by one?",
    "options": [
      "DCR",
      "INR",
      "SUB",
      "CMP"
    ],
    "answerIndex": 1,
    "explanation": "INR (Increment Register) adds 1 to the contents of a designated 8-bit register or memory location."
  },
  {
    "id": 21,
    "category": "8085 Instruction Set",
    "question": "Which instruction decrements a register?",
    "options": [
      "INR",
      "ADD",
      "DCR",
      "MOV"
    ],
    "answerIndex": 2,
    "explanation": "DCR (Decrement Register) subtracts 1 from the specified 8-bit register or memory content."
  },
  {
    "id": 22,
    "category": "8085 Instruction Set",
    "question": "Which instruction performs addition?",
    "options": [
      "ADD",
      "CMP",
      "MOV",
      "JMP"
    ],
    "answerIndex": 0,
    "explanation": "ADD adds the contents of a register or memory location to the Accumulator and stores the sum in the Accumulator."
  },
  {
    "id": 23,
    "category": "8085 Instruction Set",
    "question": "Which instruction performs subtraction?",
    "options": [
      "MOV",
      "SUB",
      "CMP",
      "LXI"
    ],
    "answerIndex": 1,
    "explanation": "SUB subtracts the content of a register or memory location from the Accumulator and updates the Accumulator."
  },
  {
    "id": 24,
    "category": "8085 Instruction Set",
    "question": "Which instruction transfers program control unconditionally?",
    "options": [
      "CALL",
      "JMP",
      "RET",
      "PUSH"
    ],
    "answerIndex": 1,
    "explanation": "JMP (Unconditional Jump) breaks sequential execution and transfers program control directly to the target address."
  },
  {
    "id": 25,
    "category": "8085 Instruction Set",
    "question": "Which instruction returns from a subroutine?",
    "options": [
      "CALL",
      "JMP",
      "RET",
      "HLT"
    ],
    "answerIndex": 2,
    "explanation": "RET (Return from Subroutine) pops the 16-bit return address off the stack back into the Program Counter."
  },
  {
    "id": 26,
    "category": "8085 Instruction Set",
    "question": "Which instruction calls a subroutine?",
    "options": [
      "CALL",
      "RET",
      "MOV",
      "POP"
    ],
    "answerIndex": 0,
    "explanation": "CALL pushes the current Program Counter (return address) onto the stack and jumps to the subroutine address."
  },
  {
    "id": 27,
    "category": "8085 Instruction Set",
    "question": "Which register stores status information?",
    "options": [
      "Accumulator",
      "Program Counter",
      "Flag Register",
      "Stack Pointer"
    ],
    "answerIndex": 2,
    "explanation": "The Flag Register (Status Register) holds individual flip-flops that reflect status conditions of the last ALU result."
  },
  {
    "id": 28,
    "category": "Flags & Registers",
    "question": "Which flag becomes set when the result is zero?",
    "options": [
      "Carry Flag",
      "Zero Flag",
      "Sign Flag",
      "Overflow Flag"
    ],
    "answerIndex": 1,
    "explanation": "The Zero Flag (Z) is set to 1 if the result of an arithmetic or logical operation equals zero."
  },
  {
    "id": 29,
    "category": "Flags & Registers",
    "question": "Which flag indicates a carry out of the most significant bit?",
    "options": [
      "Carry Flag",
      "Zero Flag",
      "Sign Flag",
      "Parity Flag"
    ],
    "answerIndex": 0,
    "explanation": "The Carry Flag (CY) is set to 1 if an arithmetic operation generates a carry out of MSB (D7 or D15)."
  },
  {
    "id": 30,
    "category": "Flags & Registers",
    "question": "Which flag indicates whether the result is negative?",
    "options": [
      "Zero Flag",
      "Sign Flag",
      "Carry Flag",
      "Auxiliary Carry Flag"
    ],
    "answerIndex": 1,
    "explanation": "The Sign Flag (S) takes the value of the most significant bit (D7/D15); S = 1 indicates a negative number."
  },
  {
    "id": 31,
    "category": "Flags & Registers",
    "question": "Which flag checks whether the number of 1s is even or odd?",
    "options": [
      "Zero Flag",
      "Carry Flag",
      "Parity Flag",
      "Sign Flag"
    ],
    "answerIndex": 2,
    "explanation": "The Parity Flag (P) is set to 1 if the accumulator contains an even number of 1 bits (Even Parity)."
  },
  {
    "id": 32,
    "category": "Stack & Memory Operations",
    "question": "The stack follows which principle?",
    "options": [
      "FIFO",
      "LIFO",
      "FCFS",
      "Round Robin"
    ],
    "answerIndex": 1,
    "explanation": "A stack is a Last-In, First-Out (LIFO) memory structure managed by the Stack Pointer."
  },
  {
    "id": 33,
    "category": "Stack & Memory Operations",
    "question": "Which instruction stores data onto the stack?",
    "options": [
      "PUSH",
      "POP",
      "MOV",
      "JMP"
    ],
    "answerIndex": 0,
    "explanation": "PUSH decrements SP and writes a 16-bit register pair content onto the top of the stack."
  },
  {
    "id": 34,
    "category": "Stack & Memory Operations",
    "question": "Which instruction removes data from the stack?",
    "options": [
      "PUSH",
      "POP",
      "CALL",
      "RET"
    ],
    "answerIndex": 1,
    "explanation": "POP reads 16-bit data from the stack top into a register pair and increments the Stack Pointer by 2."
  },
  {
    "id": 35,
    "category": "Stack & Memory Operations",
    "question": "Which operation transfers data from memory to the CPU?",
    "options": [
      "Read Operation",
      "Write Operation",
      "Fetch Operation",
      "Execute Operation"
    ],
    "answerIndex": 0,
    "explanation": "A Read Operation transfers binary code/data from memory or input devices into CPU registers."
  },
  {
    "id": 36,
    "category": "Stack & Memory Operations",
    "question": "Which operation transfers data from the CPU to an output device?",
    "options": [
      "Read Operation",
      "Write Operation",
      "Fetch Operation",
      "Decode Operation"
    ],
    "answerIndex": 1,
    "explanation": "A Write Operation sends data from CPU registers to memory cells or output peripherals."
  },
  {
    "id": 37,
    "category": "8086 Architecture & BIU/EU",
    "question": "The first commercial microprocessor was:",
    "options": [
      "Intel 4004",
      "Intel 8085",
      "Intel 8086",
      "Intel 80386"
    ],
    "answerIndex": 0,
    "explanation": "The Intel 4004 released in 1971 was the world's first commercially available single-chip microprocessor."
  },
  {
    "id": 38,
    "category": "8086 Architecture & BIU/EU",
    "question": "The Intel 4004 was a:",
    "options": [
      "4-bit microprocessor",
      "8-bit microprocessor",
      "16-bit microprocessor",
      "32-bit microprocessor"
    ],
    "answerIndex": 0,
    "explanation": "The Intel 4004 was a 4-bit PMOS processor designed originally for Busicom calculators."
  },
  {
    "id": 39,
    "category": "8086 Architecture & BIU/EU",
    "question": "The 8086 can address:",
    "options": [
      "64 KB",
      "256 KB",
      "1 MB",
      "4 MB"
    ],
    "answerIndex": 2,
    "explanation": "The 8086 has a 20-bit address bus, enabling physical access to 2^20 bytes = 1 Megabyte (1 MB) of memory."
  },
  {
    "id": 40,
    "category": "8086 Architecture & BIU/EU",
    "question": "The 8086 has a:",
    "options": [
      "8-bit data bus",
      "16-bit data bus",
      "20-bit data bus",
      "32-bit data bus"
    ],
    "answerIndex": 1,
    "explanation": "The 8086 features a 16-bit data bus allowing 16 bits (1 word) of data to be accessed in a single bus cycle."
  },
  {
    "id": 41,
    "category": "8086 Architecture & BIU/EU",
    "question": "The address bus of the 8086 is:",
    "options": [
      "8-bit",
      "16-bit",
      "20-bit",
      "32-bit"
    ],
    "answerIndex": 2,
    "explanation": "The 8086 utilizes a 20-bit address bus (A0–A19) to generate physical addresses from 00000H to FFFFFH."
  },
  {
    "id": 42,
    "category": "8086 Architecture & BIU/EU",
    "question": "Which unit fetches instructions in the 8086?",
    "options": [
      "ALU",
      "Bus Interface Unit (BIU)",
      "Execution Unit",
      "Stack Unit"
    ],
    "answerIndex": 1,
    "explanation": "The Bus Interface Unit (BIU) handles instruction fetching, bus control, memory reading/writing, and prefetching."
  },
  {
    "id": 43,
    "category": "8086 Architecture & BIU/EU",
    "question": "Which unit executes instructions in the 8086?",
    "options": [
      "BIU",
      "Execution Unit (EU)",
      "Memory Unit",
      "DMA Controller"
    ],
    "answerIndex": 1,
    "explanation": "The Execution Unit (EU) contains the ALU, general registers, and control logic to decode and execute instructions."
  },
  {
    "id": 44,
    "category": "8086 Architecture & BIU/EU",
    "question": "Which register contains the offset of the next instruction in the 8086?",
    "options": [
      "SP",
      "BP",
      "IP",
      "SI"
    ],
    "answerIndex": 2,
    "explanation": "In the 8086, Instruction Pointer (IP) holds the 16-bit offset of the next instruction within Code Segment (CS)."
  },
  {
    "id": 45,
    "category": "8086 Architecture & BIU/EU",
    "question": "Which register stores the code segment address?",
    "options": [
      "CS",
      "DS",
      "ES",
      "SS"
    ],
    "answerIndex": 0,
    "explanation": "Code Segment (CS) register holds the base address of the 64 KB memory segment containing executable code."
  },
  {
    "id": 46,
    "category": "8086 Architecture & BIU/EU",
    "question": "Which segment register is associated with the stack?",
    "options": [
      "CS",
      "DS",
      "SS",
      "ES"
    ],
    "answerIndex": 2,
    "explanation": "Stack Segment (SS) register points to the base address of the 64 KB segment reserved for stack operations."
  },
  {
    "id": 47,
    "category": "8086 Architecture & BIU/EU",
    "question": "Which register points to the data segment?",
    "options": [
      "CS",
      "DS",
      "SS",
      "IP"
    ],
    "answerIndex": 1,
    "explanation": "Data Segment (DS) register holds the starting address of the 64 KB segment allocated for program data variables."
  },
  {
    "id": 48,
    "category": "8086 Architecture & BIU/EU",
    "question": "The physical address in the 8086 is calculated by:",
    "options": [
      "Segment + Offset",
      "Segment × 16 + Offset",
      "Segment × 8 + Offset",
      "Segment − Offset"
    ],
    "answerIndex": 1,
    "explanation": "8086 Physical Address = (Segment Register × 16) + Offset Address (or Segment << 4 + Offset)."
  },
  {
    "id": 49,
    "category": "8086 Architecture & BIU/EU",
    "question": "Which feature improves instruction execution speed in the 8086?",
    "options": [
      "Cache Memory",
      "Instruction Prefetch Queue",
      "DMA",
      "Virtual Memory"
    ],
    "answerIndex": 1,
    "explanation": "The 6-byte Instruction Prefetch Queue in BIU fetches upcoming instructions in parallel while EU executes current code."
  },
  {
    "id": 50,
    "category": "8086 Architecture & BIU/EU",
    "question": "Which statement is correct?",
    "options": [
      "8085 is a 16-bit processor.",
      "8086 is an 8-bit processor.",
      "8086 has a larger addressing capability than 8085.",
      "Both processors can address exactly the same memory."
    ],
    "answerIndex": 2,
    "explanation": "The 8086 has a 20-bit address bus (1 MB limit), whereas the 8085 has a 16-bit address bus (64 KB limit)."
  },
  {
    "id": 51,
    "category": "8085 Instructions & Logical Ops",
    "question": "Which register pair is generally used for arithmetic operations in the 8085?",
    "options": [
      "BC",
      "DE",
      "HL",
      "SP"
    ],
    "answerIndex": 2,
    "explanation": "Option C (HL) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 52,
    "category": "8085 Instructions & Logical Ops",
    "question": "Which register pair is used to hold the address of the stack?",
    "options": [
      "BC",
      "DE",
      "HL",
      "SP"
    ],
    "answerIndex": 3,
    "explanation": "Option D (SP) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 53,
    "category": "8085 Instructions & Logical Ops",
    "question": "Which instruction copies data from one register to another?",
    "options": [
      "MOV",
      "MVI",
      "ADD",
      "CMP"
    ],
    "answerIndex": 0,
    "explanation": "Option A (MOV) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 54,
    "category": "8085 Instructions & Logical Ops",
    "question": "Which instruction loads 8-bit immediate data into a register?",
    "options": [
      "MOV",
      "MVI",
      "LXI",
      "LDA"
    ],
    "answerIndex": 1,
    "explanation": "Option B (MVI) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 55,
    "category": "8085 Instructions & Logical Ops",
    "question": "Which instruction loads the accumulator directly from memory?",
    "options": [
      "STA",
      "LDA",
      "MOV",
      "PUSH"
    ],
    "answerIndex": 1,
    "explanation": "Option B (LDA) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 56,
    "category": "8085 Instructions & Logical Ops",
    "question": "Which instruction stores the contents of the accumulator into memory?",
    "options": [
      "STA",
      "LDA",
      "MOV",
      "POP"
    ],
    "answerIndex": 0,
    "explanation": "Option A (STA) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 57,
    "category": "8085 Instructions & Logical Ops",
    "question": "Which instruction exchanges the contents of HL and DE register pairs?",
    "options": [
      "XRA",
      "XCHG",
      "CMA",
      "RAL"
    ],
    "answerIndex": 1,
    "explanation": "Option B (XCHG) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 58,
    "category": "8085 Instructions & Logical Ops",
    "question": "Which instruction complements the contents of the accumulator?",
    "options": [
      "CMC",
      "CMA",
      "STC",
      "CMP"
    ],
    "answerIndex": 1,
    "explanation": "Option B (CMA) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 59,
    "category": "8085 Instructions & Logical Ops",
    "question": "Which instruction complements the Carry Flag?",
    "options": [
      "CMC",
      "CMA",
      "STC",
      "RLC"
    ],
    "answerIndex": 0,
    "explanation": "Option A (CMC) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 60,
    "category": "8085 Instructions & Logical Ops",
    "question": "Which instruction sets the Carry Flag?",
    "options": [
      "CMC",
      "STC",
      "CMA",
      "CMP"
    ],
    "answerIndex": 1,
    "explanation": "Option B (STC) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 61,
    "category": "8085 Instructions & Logical Ops",
    "question": "Which instruction rotates the accumulator to the left?",
    "options": [
      "RLC",
      "RRC",
      "RAL",
      "RAR"
    ],
    "answerIndex": 0,
    "explanation": "Option A (RLC) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 62,
    "category": "8085 Instructions & Logical Ops",
    "question": "Which instruction rotates the accumulator to the right?",
    "options": [
      "RLC",
      "RRC",
      "RAL",
      "RAR"
    ],
    "answerIndex": 1,
    "explanation": "Option B (RRC) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 63,
    "category": "8085 Instructions & Logical Ops",
    "question": "Which instruction halts the execution of a program?",
    "options": [
      "STOP",
      "EXIT",
      "HLT",
      "END"
    ],
    "answerIndex": 2,
    "explanation": "Option C (HLT) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 64,
    "category": "8085 Instructions & Logical Ops",
    "question": "Which instruction performs no operation?",
    "options": [
      "HLT",
      "NOP",
      "JMP",
      "RET"
    ],
    "answerIndex": 1,
    "explanation": "Option B (NOP) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 65,
    "category": "8085 Instructions & Logical Ops",
    "question": "Which instruction is used to restart execution from a predefined address?",
    "options": [
      "CALL",
      "JMP",
      "RST",
      "RET"
    ],
    "answerIndex": 2,
    "explanation": "Option C (RST) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 66,
    "category": "8085 Instructions & Logical Ops",
    "question": "Which of the following is a logical instruction?",
    "options": [
      "ADD",
      "SUB",
      "ANA",
      "INR"
    ],
    "answerIndex": 2,
    "explanation": "Option C (ANA) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 67,
    "category": "8085 Instructions & Logical Ops",
    "question": "Which instruction performs a logical OR operation?",
    "options": [
      "ANA",
      "ORA",
      "XRA",
      "CMP"
    ],
    "answerIndex": 1,
    "explanation": "Option B (ORA) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 68,
    "category": "8085 Instructions & Logical Ops",
    "question": "Which instruction performs an Exclusive-OR operation?",
    "options": [
      "ANA",
      "ORA",
      "XRA",
      "CMA"
    ],
    "answerIndex": 2,
    "explanation": "Option C (XRA) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 69,
    "category": "Addressing Modes",
    "question": "Which addressing mode contains the operand within the instruction itself?",
    "options": [
      "Immediate Addressing",
      "Direct Addressing",
      "Register Addressing",
      "Indirect Addressing"
    ],
    "answerIndex": 0,
    "explanation": "Option A (Immediate Addressing) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 70,
    "category": "Addressing Modes",
    "question": "In register addressing mode, the operand is stored in:",
    "options": [
      "Memory",
      "Register",
      "Cache",
      "ROM"
    ],
    "answerIndex": 1,
    "explanation": "Option B (Register) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 71,
    "category": "Addressing Modes",
    "question": "In direct addressing mode, the memory address is:",
    "options": [
      "Specified in the instruction",
      "Stored in SP",
      "Stored in PC",
      "Stored in ALU"
    ],
    "answerIndex": 0,
    "explanation": "Option A (Specified in the instruction) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 72,
    "category": "Addressing Modes",
    "question": "In register indirect addressing mode, the address is stored in:",
    "options": [
      "Memory",
      "Register Pair",
      "ROM",
      "ALU"
    ],
    "answerIndex": 1,
    "explanation": "Option B (Register Pair) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 73,
    "category": "Memory Systems (RAM/ROM)",
    "question": "Which memory is volatile?",
    "options": [
      "RAM",
      "ROM",
      "EEPROM",
      "Flash ROM"
    ],
    "answerIndex": 0,
    "explanation": "Option A (RAM) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 74,
    "category": "Memory Systems (RAM/ROM)",
    "question": "Which memory retains data after power is switched off?",
    "options": [
      "RAM",
      "ROM",
      "Cache",
      "Register"
    ],
    "answerIndex": 1,
    "explanation": "Option B (ROM) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 75,
    "category": "Memory Systems (RAM/ROM)",
    "question": "ROM stands for:",
    "options": [
      "Random Output Memory",
      "Read Only Memory",
      "Read Operation Memory",
      "Register Output Memory"
    ],
    "answerIndex": 1,
    "explanation": "Option B (Read Only Memory) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 76,
    "category": "Memory Systems (RAM/ROM)",
    "question": "RAM stands for:",
    "options": [
      "Random Access Memory",
      "Read Access Memory",
      "Rapid Access Module",
      "Read Address Memory"
    ],
    "answerIndex": 0,
    "explanation": "Option A (Random Access Memory) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 77,
    "category": "Memory Systems (RAM/ROM)",
    "question": "Which memory is mainly used for temporary storage?",
    "options": [
      "RAM",
      "ROM",
      "EEPROM",
      "PROM"
    ],
    "answerIndex": 0,
    "explanation": "Option A (RAM) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 78,
    "category": "Memory Systems (RAM/ROM)",
    "question": "Which of the following is a non-volatile memory?",
    "options": [
      "RAM",
      "ROM",
      "Cache",
      "Register"
    ],
    "answerIndex": 1,
    "explanation": "Option B (ROM) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 79,
    "category": "8085 Hardware Interrupts",
    "question": "Which interrupt has the highest priority in the 8085?",
    "options": [
      "INTR",
      "RST 5.5",
      "RST 7.5",
      "TRAP"
    ],
    "answerIndex": 3,
    "explanation": "Option D (TRAP) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 80,
    "category": "8085 Hardware Interrupts",
    "question": "Which interrupt cannot be disabled?",
    "options": [
      "INTR",
      "RST 5.5",
      "RST 6.5",
      "TRAP"
    ],
    "answerIndex": 3,
    "explanation": "Option D (TRAP) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 81,
    "category": "8085 Hardware Interrupts",
    "question": "Which interrupt has the lowest priority in the 8085?",
    "options": [
      "INTR",
      "TRAP",
      "RST 7.5",
      "RST 6.5"
    ],
    "answerIndex": 0,
    "explanation": "Option A (INTR) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 82,
    "category": "8085 Hardware Interrupts",
    "question": "Which interrupt is maskable?",
    "options": [
      "TRAP",
      "RST 7.5",
      "None",
      "RESET"
    ],
    "answerIndex": 1,
    "explanation": "Option B (RST 7.5) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 83,
    "category": "8085 Hardware Interrupts",
    "question": "Which instruction enables interrupts?",
    "options": [
      "DI",
      "EI",
      "HLT",
      "RIM"
    ],
    "answerIndex": 1,
    "explanation": "Option B (EI) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 84,
    "category": "8085 Hardware Interrupts",
    "question": "Which instruction disables interrupts?",
    "options": [
      "DI",
      "EI",
      "SIM",
      "NOP"
    ],
    "answerIndex": 0,
    "explanation": "Option A (DI) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 85,
    "category": "8085 Hardware Interrupts",
    "question": "The 8085 has how many hardware interrupts?",
    "options": [
      "3",
      "5",
      "6",
      "8"
    ],
    "answerIndex": 1,
    "explanation": "Option B (5) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 86,
    "category": "8085 Hardware Interrupts",
    "question": "Which interrupt is non-maskable?",
    "options": [
      "INTR",
      "RST 5.5",
      "RST 6.5",
      "TRAP"
    ],
    "answerIndex": 3,
    "explanation": "Option D (TRAP) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 87,
    "category": "Fetch-Decode-Execute & Interfacing",
    "question": "Which register pair is automatically used during stack operations?",
    "options": [
      "BC",
      "DE",
      "SP",
      "HL"
    ],
    "answerIndex": 2,
    "explanation": "Option C (SP) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 88,
    "category": "Fetch-Decode-Execute & Interfacing",
    "question": "During a PUSH instruction, the Stack Pointer is:",
    "options": [
      "Decremented",
      "Incremented",
      "Reset",
      "Unchanged"
    ],
    "answerIndex": 0,
    "explanation": "Option A (Decremented) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 89,
    "category": "Fetch-Decode-Execute & Interfacing",
    "question": "During a POP instruction, the Stack Pointer is:",
    "options": [
      "Decremented",
      "Incremented",
      "Reset",
      "Unchanged"
    ],
    "answerIndex": 1,
    "explanation": "Option B (Incremented) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 90,
    "category": "Fetch-Decode-Execute & Interfacing",
    "question": "Which operation is performed before executing an instruction?",
    "options": [
      "Fetch",
      "Store",
      "Output",
      "Reset"
    ],
    "answerIndex": 0,
    "explanation": "Option A (Fetch) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 91,
    "category": "Fetch-Decode-Execute & Interfacing",
    "question": "Which phase decodes the fetched instruction?",
    "options": [
      "Execute",
      "Decode",
      "Store",
      "Reset"
    ],
    "answerIndex": 1,
    "explanation": "Option B (Decode) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 92,
    "category": "Fetch-Decode-Execute & Interfacing",
    "question": "Which phase performs the actual operation of an instruction?",
    "options": [
      "Fetch",
      "Decode",
      "Execute",
      "Reset"
    ],
    "answerIndex": 2,
    "explanation": "Option C (Execute) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 93,
    "category": "Fetch-Decode-Execute & Interfacing",
    "question": "Which register temporarily stores instructions before execution?",
    "options": [
      "Program Counter",
      "Instruction Register",
      "Stack Pointer",
      "Accumulator"
    ],
    "answerIndex": 1,
    "explanation": "Option B (Instruction Register) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 94,
    "category": "Fetch-Decode-Execute & Interfacing",
    "question": "Which of the following is an input device?",
    "options": [
      "Keyboard",
      "Monitor",
      "Printer",
      "Plotter"
    ],
    "answerIndex": 0,
    "explanation": "Option A (Keyboard) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 95,
    "category": "Fetch-Decode-Execute & Interfacing",
    "question": "Which of the following is an output device?",
    "options": [
      "Scanner",
      "Keyboard",
      "Printer",
      "Mouse"
    ],
    "answerIndex": 2,
    "explanation": "Option C (Printer) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 96,
    "category": "Fetch-Decode-Execute & Interfacing",
    "question": "Which operation transfers data from an input device to the microprocessor?",
    "options": [
      "Read Operation",
      "Write Operation",
      "Execute Operation",
      "Decode Operation"
    ],
    "answerIndex": 0,
    "explanation": "Option A (Read Operation) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 97,
    "category": "Fetch-Decode-Execute & Interfacing",
    "question": "Which operation transfers data from the microprocessor to an output device?",
    "options": [
      "Read Operation",
      "Write Operation",
      "Decode Operation",
      "Fetch Operation"
    ],
    "answerIndex": 1,
    "explanation": "Option B (Write Operation) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 98,
    "category": "Fetch-Decode-Execute & Interfacing",
    "question": "Which of the following best defines interfacing?",
    "options": [
      "Memory allocation",
      "Connecting the microprocessor with external devices",
      "Program compilation",
      "Disk formatting"
    ],
    "answerIndex": 1,
    "explanation": "Option B (Connecting the microprocessor with external devices) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 99,
    "category": "Fetch-Decode-Execute & Interfacing",
    "question": "Which component acts as temporary storage inside the CPU?",
    "options": [
      "Register",
      "Hard Disk",
      "ROM",
      "Optical Disk"
    ],
    "answerIndex": 0,
    "explanation": "Option A (Register) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 100,
    "category": "Fetch-Decode-Execute & Interfacing",
    "question": "Which statement about the 8086 is correct?",
    "options": [
      "It is an 8-bit processor with a 16-bit address bus.",
      "It has only one segment register.",
      "It uses segmented memory and has a 20-bit address bus.",
      "It cannot execute arithmetic instructions."
    ],
    "answerIndex": 2,
    "explanation": "Option C (It uses segmented memory and has a 20-bit address bus.) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 101,
    "category": "8086 Registers & Segment Architecture",
    "question": "Which register in the 8086 is known as the Accumulator?",
    "options": [
      "AX",
      "BX",
      "CX",
      "DX"
    ],
    "answerIndex": 0,
    "explanation": "Option A (AX) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 102,
    "category": "8086 Registers & Segment Architecture",
    "question": "Which register is commonly used as the Base Register?",
    "options": [
      "AX",
      "BX",
      "CX",
      "DX"
    ],
    "answerIndex": 1,
    "explanation": "Option B (BX) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 103,
    "category": "8086 Registers & Segment Architecture",
    "question": "Which register is mainly used as the Count Register?",
    "options": [
      "AX",
      "BX",
      "CX",
      "DX"
    ],
    "answerIndex": 2,
    "explanation": "Option C (CX) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 104,
    "category": "8086 Registers & Segment Architecture",
    "question": "Which register is primarily used in multiplication and division operations?",
    "options": [
      "BX",
      "CX",
      "DX",
      "SI"
    ],
    "answerIndex": 2,
    "explanation": "Option C (DX) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 105,
    "category": "8086 Registers & Segment Architecture",
    "question": "Which segment register stores the address of the code segment?",
    "options": [
      "CS",
      "DS",
      "SS",
      "ES"
    ],
    "answerIndex": 0,
    "explanation": "Option A (CS) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 106,
    "category": "8086 Registers & Segment Architecture",
    "question": "Which segment register is primarily used to access data?",
    "options": [
      "CS",
      "DS",
      "SS",
      "ES"
    ],
    "answerIndex": 1,
    "explanation": "Option B (DS) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 107,
    "category": "8086 Registers & Segment Architecture",
    "question": "Which segment register points to the stack segment?",
    "options": [
      "CS",
      "DS",
      "SS",
      "ES"
    ],
    "answerIndex": 2,
    "explanation": "Option C (SS) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 108,
    "category": "8086 Registers & Segment Architecture",
    "question": "Which segment register is called the Extra Segment?",
    "options": [
      "CS",
      "DS",
      "SS",
      "ES"
    ],
    "answerIndex": 3,
    "explanation": "Option D (ES) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 109,
    "category": "8086 Registers & Segment Architecture",
    "question": "Which register contains the offset of the next instruction?",
    "options": [
      "SP",
      "BP",
      "IP",
      "SI"
    ],
    "answerIndex": 2,
    "explanation": "Option C (IP) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 110,
    "category": "8086 Registers & Segment Architecture",
    "question": "The physical address of the next instruction is obtained from:",
    "options": [
      "DS + SI",
      "SS + SP",
      "CS + IP",
      "ES + DI"
    ],
    "answerIndex": 2,
    "explanation": "Option C (CS + IP) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 111,
    "category": "8086 Registers & Segment Architecture",
    "question": "Which unit of the 8086 contains the ALU?",
    "options": [
      "BIU",
      "Execution Unit (EU)",
      "Memory Unit",
      "I/O Unit"
    ],
    "answerIndex": 1,
    "explanation": "Option B (Execution Unit (EU)) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 112,
    "category": "8086 Registers & Segment Architecture",
    "question": "Which unit fetches instructions from memory?",
    "options": [
      "Bus Interface Unit (BIU)",
      "Execution Unit (EU)",
      "ALU",
      "Control Unit"
    ],
    "answerIndex": 0,
    "explanation": "Option A (Bus Interface Unit (BIU)) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 113,
    "category": "8086 Registers & Segment Architecture",
    "question": "The Bus Interface Unit mainly performs:",
    "options": [
      "Arithmetic operations",
      "Instruction fetching",
      "Multiplication",
      "Interrupt handling"
    ],
    "answerIndex": 1,
    "explanation": "Option B (Instruction fetching) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 114,
    "category": "8086 Registers & Segment Architecture",
    "question": "Which unit executes the instructions fetched by the BIU?",
    "options": [
      "Control Bus",
      "Memory Unit",
      "Execution Unit",
      "DMA Controller"
    ],
    "answerIndex": 2,
    "explanation": "Option C (Execution Unit) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 115,
    "category": "8086 Registers & Segment Architecture",
    "question": "The instruction queue of the 8086 stores:",
    "options": [
      "Data",
      "Prefetched instructions",
      "Flags",
      "Interrupt vectors"
    ],
    "answerIndex": 1,
    "explanation": "Option B (Prefetched instructions) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 116,
    "category": "8086 Registers & Segment Architecture",
    "question": "The instruction queue in the 8086 has a size of:",
    "options": [
      "2 bytes",
      "4 bytes",
      "6 bytes",
      "8 bytes"
    ],
    "answerIndex": 2,
    "explanation": "Option C (6 bytes) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 117,
    "category": "8086 Registers & Segment Architecture",
    "question": "The purpose of the instruction queue is to:",
    "options": [
      "Increase RAM capacity",
      "Improve execution speed",
      "Reduce power consumption",
      "Store interrupt requests"
    ],
    "answerIndex": 1,
    "explanation": "Option B (Improve execution speed) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 118,
    "category": "8086 Registers & Segment Architecture",
    "question": "Which feature allows the 8086 to fetch one instruction while executing another?",
    "options": [
      "Multiprocessing",
      "Hyperthreading",
      "Pipelining",
      "Virtual Memory"
    ],
    "answerIndex": 2,
    "explanation": "Option C (Pipelining) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 119,
    "category": "8086 Registers & Segment Architecture",
    "question": "Which register is called the Source Index?",
    "options": [
      "DI",
      "SI",
      "BP",
      "SP"
    ],
    "answerIndex": 1,
    "explanation": "Option B (SI) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 120,
    "category": "8086 Registers & Segment Architecture",
    "question": "Which register is called the Destination Index?",
    "options": [
      "SI",
      "DI",
      "SP",
      "BP"
    ],
    "answerIndex": 1,
    "explanation": "Option B (DI) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 121,
    "category": "8086 Registers & Segment Architecture",
    "question": "BP stands for:",
    "options": [
      "Base Program",
      "Base Pointer",
      "Bus Pointer",
      "Buffer Pointer"
    ],
    "answerIndex": 1,
    "explanation": "Option B (Base Pointer) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 122,
    "category": "8086 Registers & Segment Architecture",
    "question": "SP stands for:",
    "options": [
      "Stack Program",
      "Stack Pointer",
      "Segment Pointer",
      "System Pointer"
    ],
    "answerIndex": 1,
    "explanation": "Option B (Stack Pointer) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 123,
    "category": "8086 Registers & Segment Architecture",
    "question": "Which register pair calculates the physical address of the next instruction?",
    "options": [
      "DS:SI",
      "SS:SP",
      "CS:IP",
      "ES:DI"
    ],
    "answerIndex": 2,
    "explanation": "Option C (CS:IP) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 124,
    "category": "8086 Registers & Segment Architecture",
    "question": "Which register pair is commonly associated with stack operations?",
    "options": [
      "DS:SI",
      "SS:SP",
      "ES:DI",
      "CS:IP"
    ],
    "answerIndex": 1,
    "explanation": "Option B (SS:SP) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 125,
    "category": "8086 Registers & Segment Architecture",
    "question": "Which register pair is mainly used for string source operations?",
    "options": [
      "CS:IP",
      "DS:SI",
      "SS:SP",
      "ES:BP"
    ],
    "answerIndex": 1,
    "explanation": "Option B (DS:SI) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 126,
    "category": "8086 Registers & Segment Architecture",
    "question": "Which register pair is mainly used for string destination operations?",
    "options": [
      "DS:SI",
      "ES:DI",
      "SS:SP",
      "CS:IP"
    ],
    "answerIndex": 1,
    "explanation": "Option B (ES:DI) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 127,
    "category": "8086 Flags & Physical Address",
    "question": "The 8086 uses memory segmentation mainly to:",
    "options": [
      "Reduce instruction size",
      "Access up to 1 MB of memory",
      "Improve graphics",
      "Increase cache memory"
    ],
    "answerIndex": 1,
    "explanation": "Option B (Access up to 1 MB of memory) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 128,
    "category": "8086 Flags & Physical Address",
    "question": "Which formula calculates the physical address in the 8086?",
    "options": [
      "Segment + Offset",
      "Segment × 8 + Offset",
      "Segment × 16 + Offset",
      "Segment − Offset"
    ],
    "answerIndex": 2,
    "explanation": "Option C (Segment × 16 + Offset) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 129,
    "category": "8086 Flags & Physical Address",
    "question": "What is the maximum memory addressable by the 8086?",
    "options": [
      "64 KB",
      "256 KB",
      "1 MB",
      "4 MB"
    ],
    "answerIndex": 2,
    "explanation": "Option C (1 MB) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 130,
    "category": "8086 Flags & Physical Address",
    "question": "The address bus of the 8086 is:",
    "options": [
      "16-bit",
      "18-bit",
      "20-bit",
      "24-bit"
    ],
    "answerIndex": 2,
    "explanation": "Option C (20-bit) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 131,
    "category": "8086 Flags & Physical Address",
    "question": "The data bus of the 8086 is:",
    "options": [
      "8-bit",
      "16-bit",
      "20-bit",
      "32-bit"
    ],
    "answerIndex": 1,
    "explanation": "Option B (16-bit) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 132,
    "category": "8086 Flags & Physical Address",
    "question": "Which register stores processor status information?",
    "options": [
      "AX",
      "BX",
      "Flag Register",
      "SI"
    ],
    "answerIndex": 2,
    "explanation": "Option C (Flag Register) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 133,
    "category": "8086 Flags & Physical Address",
    "question": "Which flag is set when an arithmetic operation generates a carry?",
    "options": [
      "Carry Flag",
      "Zero Flag",
      "Sign Flag",
      "Overflow Flag"
    ],
    "answerIndex": 0,
    "explanation": "Option A (Carry Flag) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 134,
    "category": "8086 Flags & Physical Address",
    "question": "Which flag becomes 1 when the result is zero?",
    "options": [
      "Carry Flag",
      "Zero Flag",
      "Sign Flag",
      "Parity Flag"
    ],
    "answerIndex": 1,
    "explanation": "Option B (Zero Flag) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 135,
    "category": "8086 Flags & Physical Address",
    "question": "Which flag indicates a negative result?",
    "options": [
      "Carry Flag",
      "Zero Flag",
      "Sign Flag",
      "Overflow Flag"
    ],
    "answerIndex": 2,
    "explanation": "Option C (Sign Flag) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 136,
    "category": "8086 Flags & Physical Address",
    "question": "Which flag checks whether the number of 1s is even?",
    "options": [
      "Zero Flag",
      "Carry Flag",
      "Parity Flag",
      "Sign Flag"
    ],
    "answerIndex": 2,
    "explanation": "Option C (Parity Flag) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 137,
    "category": "8086 Flags & Physical Address",
    "question": "Which flag indicates signed arithmetic overflow?",
    "options": [
      "Carry Flag",
      "Zero Flag",
      "Sign Flag",
      "Overflow Flag"
    ],
    "answerIndex": 3,
    "explanation": "Option D (Overflow Flag) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 138,
    "category": "8086 Flags & Physical Address",
    "question": "Which flag is mainly used in BCD arithmetic?",
    "options": [
      "Carry Flag",
      "Zero Flag",
      "Auxiliary Carry Flag",
      "Overflow Flag"
    ],
    "answerIndex": 2,
    "explanation": "Option C (Auxiliary Carry Flag) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 139,
    "category": "Comparison & Memory Organization",
    "question": "Which of the following is a general-purpose register in the 8086?",
    "options": [
      "CS",
      "DS",
      "BX",
      "IP"
    ],
    "answerIndex": 2,
    "explanation": "Option C (BX) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 140,
    "category": "Comparison & Memory Organization",
    "question": "Which of the following is NOT a segment register?",
    "options": [
      "CS",
      "DS",
      "ES",
      "AX"
    ],
    "answerIndex": 3,
    "explanation": "Option D (AX) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 141,
    "category": "Comparison & Memory Organization",
    "question": "Which of the following is NOT a general-purpose register?",
    "options": [
      "AX",
      "BX",
      "CX",
      "CS"
    ],
    "answerIndex": 3,
    "explanation": "Option D (CS) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 142,
    "category": "Comparison & Memory Organization",
    "question": "Which processor introduced memory segmentation?",
    "options": [
      "Intel 4004",
      "Intel 8085",
      "Intel 8086",
      "Intel 8051"
    ],
    "answerIndex": 2,
    "explanation": "Option C (Intel 8086) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 143,
    "category": "Comparison & Memory Organization",
    "question": "Which microprocessor is an 8-bit processor?",
    "options": [
      "8086",
      "8085",
      "80386",
      "Pentium"
    ],
    "answerIndex": 1,
    "explanation": "Option B (8085) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 144,
    "category": "Comparison & Memory Organization",
    "question": "Which microprocessor has a 16-bit ALU?",
    "options": [
      "Intel 4004",
      "Intel 8085",
      "Intel 8086",
      "Intel 8080"
    ],
    "answerIndex": 2,
    "explanation": "Option C (Intel 8086) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 145,
    "category": "Comparison & Memory Organization",
    "question": "Which of the following best describes a register?",
    "options": [
      "Permanent storage device",
      "High-speed storage inside the CPU",
      "Secondary memory",
      "Input device"
    ],
    "answerIndex": 1,
    "explanation": "Option B (High-speed storage inside the CPU) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 146,
    "category": "Comparison & Memory Organization",
    "question": "Which memory has the fastest access speed?",
    "options": [
      "Hard Disk",
      "RAM",
      "Register",
      "ROM"
    ],
    "answerIndex": 2,
    "explanation": "Option C (Register) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 147,
    "category": "Comparison & Memory Organization",
    "question": "Which operation is performed immediately after fetching an instruction?",
    "options": [
      "Execute",
      "Decode",
      "Store",
      "Reset"
    ],
    "answerIndex": 1,
    "explanation": "Option B (Decode) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 148,
    "category": "Comparison & Memory Organization",
    "question": "Which operation follows instruction decoding?",
    "options": [
      "Fetch",
      "Store",
      "Execute",
      "Reset"
    ],
    "answerIndex": 2,
    "explanation": "Option C (Execute) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 149,
    "category": "Comparison & Memory Organization",
    "question": "Which cycle is repeatedly performed by the CPU during program execution?",
    "options": [
      "Read–Write Cycle",
      "Fetch–Decode–Execute Cycle",
      "Input–Output Cycle",
      "Memory Refresh Cycle"
    ],
    "answerIndex": 1,
    "explanation": "Option B (Fetch–Decode–Execute Cycle) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 150,
    "category": "Comparison & Memory Organization",
    "question": "Which statement is correct regarding the 8086?",
    "options": [
      "It is an 8-bit microprocessor.",
      "It has a 16-bit address bus.",
      "It can address only 64 KB of memory.",
      "It has a 16-bit data bus and a 20-bit address bus."
    ],
    "answerIndex": 3,
    "explanation": "Option D (It has a 16-bit data bus and a 20-bit address bus.) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 151,
    "category": "Instruction Classification & ALU",
    "question": "Which microprocessor was introduced after the Intel 8085?",
    "options": [
      "Intel 4004",
      "Intel 8086",
      "Intel 8080",
      "Intel 8008"
    ],
    "answerIndex": 1,
    "explanation": "Option B (Intel 8086) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 152,
    "category": "Instruction Classification & ALU",
    "question": "Which microprocessor first introduced a 16-bit architecture in the Intel family?",
    "options": [
      "Intel 8080",
      "Intel 8085",
      "Intel 8086",
      "Intel 80286"
    ],
    "answerIndex": 2,
    "explanation": "Option C (Intel 8086) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 153,
    "category": "Instruction Classification & ALU",
    "question": "The primary function of the Control Unit (CU) is to:",
    "options": [
      "Perform arithmetic operations",
      "Coordinate and control all CPU operations",
      "Store data permanently",
      "Generate interrupts"
    ],
    "answerIndex": 1,
    "explanation": "Option B (Coordinate and control all CPU operations) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 154,
    "category": "Instruction Classification & ALU",
    "question": "Which CPU component interprets machine instructions?",
    "options": [
      "ALU",
      "Control Unit",
      "Memory Unit",
      "Cache"
    ],
    "answerIndex": 1,
    "explanation": "Option B (Control Unit) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 155,
    "category": "Instruction Classification & ALU",
    "question": "Registers are used because they are:",
    "options": [
      "Large in size",
      "Faster than main memory",
      "Cheaper than RAM",
      "Permanent storage"
    ],
    "answerIndex": 1,
    "explanation": "Option B (Faster than main memory) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 156,
    "category": "Instruction Classification & ALU",
    "question": "Which memory is directly accessible by the CPU for program execution?",
    "options": [
      "RAM",
      "Hard Disk",
      "CD-ROM",
      "Magnetic Tape"
    ],
    "answerIndex": 0,
    "explanation": "Option A (RAM) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 157,
    "category": "Instruction Classification & ALU",
    "question": "Which register stores intermediate arithmetic results?",
    "options": [
      "Accumulator",
      "Stack Pointer",
      "Program Counter",
      "Instruction Pointer"
    ],
    "answerIndex": 0,
    "explanation": "Option A (Accumulator) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 158,
    "category": "Instruction Classification & ALU",
    "question": "Which register is automatically updated after an instruction fetch?",
    "options": [
      "Program Counter",
      "Stack Pointer",
      "Accumulator",
      "Flag Register"
    ],
    "answerIndex": 0,
    "explanation": "Option A (Program Counter) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 159,
    "category": "Instruction Classification & ALU",
    "question": "Which register changes during PUSH and POP operations?",
    "options": [
      "Program Counter",
      "Stack Pointer",
      "Data Register",
      "Flag Register"
    ],
    "answerIndex": 1,
    "explanation": "Option B (Stack Pointer) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 160,
    "category": "Instruction Classification & ALU",
    "question": "A subroutine is normally terminated by which instruction?",
    "options": [
      "JMP",
      "CALL",
      "RET",
      "HLT"
    ],
    "answerIndex": 2,
    "explanation": "Option C (RET) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 161,
    "category": "Instruction Classification & ALU",
    "question": "Which instruction transfers execution to another part of the program without saving the return address?",
    "options": [
      "JMP",
      "CALL",
      "RET",
      "RST"
    ],
    "answerIndex": 0,
    "explanation": "Option A (JMP) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 162,
    "category": "Instruction Classification & ALU",
    "question": "Which instruction saves the return address before transferring control?",
    "options": [
      "JMP",
      "CALL",
      "RET",
      "NOP"
    ],
    "answerIndex": 1,
    "explanation": "Option B (CALL) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 163,
    "category": "Instruction Classification & ALU",
    "question": "Which instruction is commonly used for program delays?",
    "options": [
      "CALL",
      "NOP",
      "POP",
      "CMP"
    ],
    "answerIndex": 1,
    "explanation": "Option B (NOP) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 164,
    "category": "Instruction Classification & ALU",
    "question": "Which instruction stops the execution of the processor until reset or interrupt?",
    "options": [
      "RET",
      "JMP",
      "HLT",
      "MOV"
    ],
    "answerIndex": 2,
    "explanation": "Option C (HLT) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 165,
    "category": "Instruction Classification & ALU",
    "question": "Which operation is performed by the ALU?",
    "options": [
      "Fetching instructions",
      "Arithmetic and logical operations",
      "Memory allocation",
      "Bus control"
    ],
    "answerIndex": 1,
    "explanation": "Option B (Arithmetic and logical operations) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 166,
    "category": "Instruction Classification & ALU",
    "question": "Which of the following is NOT an arithmetic instruction?",
    "options": [
      "ADD",
      "SUB",
      "MOV",
      "INR"
    ],
    "answerIndex": 2,
    "explanation": "Option C (MOV) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 167,
    "category": "Instruction Classification & ALU",
    "question": "Which of the following is a logical instruction?",
    "options": [
      "SUB",
      "ADD",
      "ORA",
      "DCR"
    ],
    "answerIndex": 2,
    "explanation": "Option C (ORA) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 168,
    "category": "Instruction Classification & ALU",
    "question": "Which instruction only compares data without storing the result?",
    "options": [
      "ADD",
      "SUB",
      "CMP",
      "MOV"
    ],
    "answerIndex": 2,
    "explanation": "Option C (CMP) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 169,
    "category": "Instruction Classification & ALU",
    "question": "Which instruction decreases a register value by one?",
    "options": [
      "INR",
      "DCR",
      "CMP",
      "ADD"
    ],
    "answerIndex": 1,
    "explanation": "Option B (DCR) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 170,
    "category": "Instruction Classification & ALU",
    "question": "Which instruction increases a register value by one?",
    "options": [
      "INR",
      "DCR",
      "SUB",
      "CMP"
    ],
    "answerIndex": 0,
    "explanation": "Option A (INR) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 171,
    "category": "Buses, Interrupts & Interfacing",
    "question": "Which register pair is generally used during indirect memory access in the 8085?",
    "options": [
      "BC",
      "DE",
      "HL",
      "SP"
    ],
    "answerIndex": 2,
    "explanation": "Option C (HL) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 172,
    "category": "Buses, Interrupts & Interfacing",
    "question": "Which bus determines the maximum memory that a processor can access?",
    "options": [
      "Address Bus",
      "Data Bus",
      "Control Bus",
      "I/O Bus"
    ],
    "answerIndex": 0,
    "explanation": "Option A (Address Bus) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 173,
    "category": "Buses, Interrupts & Interfacing",
    "question": "Increasing the width of the address bus increases:",
    "options": [
      "Processing speed",
      "Memory addressing capability",
      "Number of ALUs",
      "Clock frequency"
    ],
    "answerIndex": 1,
    "explanation": "Option B (Memory addressing capability) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 174,
    "category": "Buses, Interrupts & Interfacing",
    "question": "Increasing the width of the data bus mainly improves:",
    "options": [
      "Memory size",
      "Amount of data transferred at one time",
      "Number of interrupts",
      "Program size"
    ],
    "answerIndex": 1,
    "explanation": "Option B (Amount of data transferred at one time) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 175,
    "category": "Buses, Interrupts & Interfacing",
    "question": "Which bus carries timing and control signals?",
    "options": [
      "Address Bus",
      "Data Bus",
      "Control Bus",
      "Expansion Bus"
    ],
    "answerIndex": 2,
    "explanation": "Option C (Control Bus) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 176,
    "category": "Buses, Interrupts & Interfacing",
    "question": "Which interrupt has the highest priority in the 8085?",
    "options": [
      "INTR",
      "RST 5.5",
      "RST 7.5",
      "TRAP"
    ],
    "answerIndex": 3,
    "explanation": "Option D (TRAP) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 177,
    "category": "Buses, Interrupts & Interfacing",
    "question": "Which interrupt is both hardware-generated and non-maskable?",
    "options": [
      "INTR",
      "RST 6.5",
      "RST 7.5",
      "TRAP"
    ],
    "answerIndex": 3,
    "explanation": "Option D (TRAP) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 178,
    "category": "Buses, Interrupts & Interfacing",
    "question": "Which instruction enables hardware interrupts?",
    "options": [
      "DI",
      "EI",
      "SIM",
      "RIM"
    ],
    "answerIndex": 1,
    "explanation": "Option B (EI) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 179,
    "category": "Buses, Interrupts & Interfacing",
    "question": "Which instruction disables hardware interrupts?",
    "options": [
      "DI",
      "EI",
      "HLT",
      "NOP"
    ],
    "answerIndex": 0,
    "explanation": "Option A (DI) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 180,
    "category": "Buses, Interrupts & Interfacing",
    "question": "Which device converts user input into signals understandable by the microprocessor?",
    "options": [
      "Input Device",
      "Output Device",
      "ROM",
      "Cache"
    ],
    "answerIndex": 0,
    "explanation": "Option A (Input Device) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 181,
    "category": "Buses, Interrupts & Interfacing",
    "question": "Which of the following is an output device?",
    "options": [
      "Keyboard",
      "Scanner",
      "Monitor",
      "Mouse"
    ],
    "answerIndex": 2,
    "explanation": "Option C (Monitor) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 182,
    "category": "Buses, Interrupts & Interfacing",
    "question": "Which operation transfers data from an input device to the processor?",
    "options": [
      "Read Operation",
      "Write Operation",
      "Execute Operation",
      "Fetch Operation"
    ],
    "answerIndex": 0,
    "explanation": "Option A (Read Operation) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 183,
    "category": "Buses, Interrupts & Interfacing",
    "question": "Which operation transfers data from the processor to an output device?",
    "options": [
      "Read Operation",
      "Write Operation",
      "Decode Operation",
      "Reset Operation"
    ],
    "answerIndex": 1,
    "explanation": "Option B (Write Operation) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 184,
    "category": "Buses, Interrupts & Interfacing",
    "question": "The process of connecting external devices to a microprocessor is called:",
    "options": [
      "Addressing",
      "Segmentation",
      "Interfacing",
      "Multiprocessing"
    ],
    "answerIndex": 2,
    "explanation": "Option C (Interfacing) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 185,
    "category": "8086 Segment-Register Pairs",
    "question": "Which memory is used for permanent firmware storage?",
    "options": [
      "RAM",
      "ROM",
      "Cache",
      "Register"
    ],
    "answerIndex": 1,
    "explanation": "Option B (ROM) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 186,
    "category": "8086 Segment-Register Pairs",
    "question": "Which memory loses its contents when power is turned OFF?",
    "options": [
      "RAM",
      "ROM",
      "EEPROM",
      "Flash Memory"
    ],
    "answerIndex": 0,
    "explanation": "Option A (RAM) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 187,
    "category": "8086 Segment-Register Pairs",
    "question": "Which memory is commonly used to store the BIOS firmware?",
    "options": [
      "RAM",
      "ROM",
      "Cache",
      "Register"
    ],
    "answerIndex": 1,
    "explanation": "Option B (ROM) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 188,
    "category": "8086 Segment-Register Pairs",
    "question": "Which register in the 8086 is used together with SS during stack operations?",
    "options": [
      "IP",
      "SI",
      "SP",
      "DI"
    ],
    "answerIndex": 2,
    "explanation": "Option C (SP) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 189,
    "category": "8086 Segment-Register Pairs",
    "question": "Which register pair is mainly associated with stack memory in the 8086?",
    "options": [
      "CS:IP",
      "DS:SI",
      "SS:SP",
      "ES:DI"
    ],
    "answerIndex": 2,
    "explanation": "Option C (SS:SP) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 190,
    "category": "8086 Segment-Register Pairs",
    "question": "Which register pair is associated with instruction fetching?",
    "options": [
      "CS:IP",
      "SS:SP",
      "DS:SI",
      "ES:DI"
    ],
    "answerIndex": 0,
    "explanation": "Option A (CS:IP) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 191,
    "category": "8086 Segment-Register Pairs",
    "question": "Which register pair is mainly used for string source operations?",
    "options": [
      "ES:DI",
      "DS:SI",
      "SS:SP",
      "CS:IP"
    ],
    "answerIndex": 1,
    "explanation": "Option B (DS:SI) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 192,
    "category": "8086 Segment-Register Pairs",
    "question": "Which register pair is mainly used for string destination operations?",
    "options": [
      "DS:SI",
      "ES:DI",
      "CS:IP",
      "SS:SP"
    ],
    "answerIndex": 1,
    "explanation": "Option B (ES:DI) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 193,
    "category": "Advanced Microprocessor Concepts",
    "question": "Which processor introduced the Bus Interface Unit (BIU)?",
    "options": [
      "Intel 8085",
      "Intel 8086",
      "Intel 8080",
      "Intel 8051"
    ],
    "answerIndex": 1,
    "explanation": "Option B (Intel 8086) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 194,
    "category": "Advanced Microprocessor Concepts",
    "question": "Which processor introduced the Execution Unit (EU)?",
    "options": [
      "Intel 4004",
      "Intel 8085",
      "Intel 8086",
      "Intel 8088"
    ],
    "answerIndex": 2,
    "explanation": "Option C (Intel 8086) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 195,
    "category": "Advanced Microprocessor Concepts",
    "question": "Which feature allows the 8086 to fetch upcoming instructions while executing the current one?",
    "options": [
      "Cache Memory",
      "DMA",
      "Instruction Prefetch Queue",
      "Paging"
    ],
    "answerIndex": 2,
    "explanation": "Option C (Instruction Prefetch Queue) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 196,
    "category": "Advanced Microprocessor Concepts",
    "question": "Which of the following is a major advantage of memory segmentation?",
    "options": [
      "Reduces CPU clock speed",
      "Enables addressing up to 1 MB of memory",
      "Eliminates interrupts",
      "Removes the need for registers"
    ],
    "answerIndex": 1,
    "explanation": "Option B (Enables addressing up to 1 MB of memory) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 197,
    "category": "Advanced Microprocessor Concepts",
    "question": "Which statement correctly differentiates the 8085 and 8086?",
    "options": [
      "Both are 8-bit processors.",
      "8085 is 8-bit, while 8086 is 16-bit.",
      "Both have a 20-bit address bus.",
      "8085 has segment registers."
    ],
    "answerIndex": 1,
    "explanation": "Option B (8085 is 8-bit, while 8086 is 16-bit.) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 198,
    "category": "Advanced Microprocessor Concepts",
    "question": "Which processor uses segment registers?",
    "options": [
      "Intel 4004",
      "Intel 8085",
      "Intel 8086",
      "Intel 8051"
    ],
    "answerIndex": 2,
    "explanation": "Option C (Intel 8086) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 199,
    "category": "Advanced Microprocessor Concepts",
    "question": "Which statement about the 8086 is TRUE?",
    "options": [
      "It has no Program Counter.",
      "It has an 8-bit data bus.",
      "It uses BIU and EU for parallel instruction fetch and execution.",
      "It cannot access more than 64 KB of memory."
    ],
    "answerIndex": 2,
    "explanation": "Option C (It uses BIU and EU for parallel instruction fetch and execution.) is the correct answer based on microprocessor fundamentals."
  },
  {
    "id": 200,
    "category": "Advanced Microprocessor Concepts",
    "question": "Which statement is correct?",
    "options": [
      "The Address Bus transfers data.",
      "The Data Bus carries memory addresses.",
      "The Control Bus stores instructions.",
      "The Address Bus carries addresses, the Data Bus carries data, and the Control Bus carries control signals."
    ],
    "answerIndex": 3,
    "explanation": "Option D (The Address Bus carries addresses, the Data Bus carries data, and the Control Bus carries control signals.) is the correct answer based on microprocessor fundamentals."
  }
];


const SOFTWARE_ENGINEERING_MCQS = [
  {
    "id": 1,
    "category": "SDLC Phases",
    "question": "Which phase of the Software Development Life Cycle (SDLC) identifies the needs and expectations of the users?",
    "options": [
      "System Design",
      "Requirements Analysis",
      "Testing",
      "Maintenance"
    ],
    "answerIndex": 1,
    "explanation": "Requirements Analysis identifies the needs and expectations of users."
  },
  {
    "id": 2,
    "category": "SDLC Phases",
    "question": "During which SDLC phase is the software architecture designed?",
    "options": [
      "Coding",
      "System Design",
      "Testing",
      "Deployment"
    ],
    "answerIndex": 1,
    "explanation": "System Design defines system architecture, database design, and high-level structure."
  },
  {
    "id": 3,
    "category": "SDLC Phases",
    "question": "Which SDLC phase converts the design into executable code?",
    "options": [
      "Design",
      "Testing",
      "Implementation",
      "Maintenance"
    ],
    "answerIndex": 2,
    "explanation": "Implementation (or Coding) converts system design into executable source code."
  },
  {
    "id": 4,
    "category": "SDLC Phases",
    "question": "The primary objective of the testing phase is to:",
    "options": [
      "Gather user requirements",
      "Improve documentation",
      "Detect defects before deployment",
      "Install software"
    ],
    "answerIndex": 2,
    "explanation": "Testing aims to uncover defects and verify system compliance before customer deployment."
  },
  {
    "id": 5,
    "category": "SDLC Phases",
    "question": "Which SDLC phase comes immediately after Requirements Analysis?",
    "options": [
      "Testing",
      "System Design",
      "Maintenance",
      "Deployment"
    ],
    "answerIndex": 1,
    "explanation": "System Design immediately follows Requirements Analysis in classical SDLC."
  },
  {
    "id": 6,
    "category": "SDLC Phases",
    "question": "Which phase determines whether a proposed software project is technically and economically feasible?",
    "options": [
      "Design",
      "Feasibility Study",
      "Coding",
      "Testing"
    ],
    "answerIndex": 1,
    "explanation": "Feasibility Study assesses technical, financial, and operational viability before full development."
  },
  {
    "id": 7,
    "category": "SDLC Phases",
    "question": "Which SDLC phase involves preparing database structures, interface layouts, and system architecture?",
    "options": [
      "Requirement Analysis",
      "System Design",
      "Implementation",
      "Maintenance"
    ],
    "answerIndex": 1,
    "explanation": "System Design produces DB schemas, UI layouts, and architectural blueprints."
  },
  {
    "id": 8,
    "category": "SDLC Phases",
    "question": "User interviews, questionnaires, and observations are commonly performed during:",
    "options": [
      "Coding",
      "Requirements Analysis",
      "Testing",
      "Deployment"
    ],
    "answerIndex": 1,
    "explanation": "Requirements Analysis utilizes interviews, questionnaires, and observations to gather user needs."
  },
  {
    "id": 9,
    "category": "SDLC Phases",
    "question": "Which phase verifies that the developed software satisfies the specified requirements?",
    "options": [
      "Design",
      "Coding",
      "Testing",
      "Maintenance"
    ],
    "answerIndex": 2,
    "explanation": "Testing validates and verifies that the software fulfills specified SRS requirements."
  },
  {
    "id": 10,
    "category": "SDLC Phases",
    "question": "Which SDLC phase begins after successful completion of testing?",
    "options": [
      "Requirement Analysis",
      "Design",
      "Deployment",
      "Maintenance"
    ],
    "answerIndex": 2,
    "explanation": "Deployment occurs right after successful testing and validation."
  },
  {
    "id": 11,
    "category": "SDLC Phases",
    "question": "Correcting software faults after it has been delivered is part of:",
    "options": [
      "Implementation",
      "Testing",
      "Deployment",
      "Maintenance"
    ],
    "answerIndex": 3,
    "explanation": "Maintenance encompasses fixing bugs and enhancing software post-delivery."
  },
  {
    "id": 12,
    "category": "SDLC Phases",
    "question": "During which phase are programming languages and development tools primarily used?",
    "options": [
      "Requirement Analysis",
      "Design",
      "Implementation",
      "Feasibility Study"
    ],
    "answerIndex": 2,
    "explanation": "Implementation is when developers write code using IDEs, compilers, and programming languages."
  },
  {
    "id": 13,
    "category": "SDLC Phases",
    "question": "A software engineer prepares UML diagrams and database schemas. Which SDLC phase is being performed?",
    "options": [
      "Requirement Analysis",
      "System Design",
      "Testing",
      "Maintenance"
    ],
    "answerIndex": 1,
    "explanation": "Creating UML diagrams and database schemas is part of System Design."
  },
  {
    "id": 14,
    "category": "SDLC Phases",
    "question": "Which SDLC phase produces the Software Requirements Specification (SRS)?",
    "options": [
      "Design",
      "Requirements Analysis",
      "Coding",
      "Testing"
    ],
    "answerIndex": 1,
    "explanation": "Requirements Analysis produces the formal SRS document."
  },
  {
    "id": 15,
    "category": "SDLC Phases",
    "question": "Installing software at the client's site is part of:",
    "options": [
      "Testing",
      "Requirement Analysis",
      "Deployment",
      "Maintenance"
    ],
    "answerIndex": 2,
    "explanation": "Deployment involves delivering and installing the application on customer servers."
  },
  {
    "id": 16,
    "category": "SDLC Phases",
    "question": "A client requests a new reporting feature after the software has been delivered. This request is handled during:",
    "options": [
      "Requirement Analysis",
      "Design",
      "Testing",
      "Maintenance"
    ],
    "answerIndex": 3,
    "explanation": "Handling new feature requests post-delivery is perfective maintenance."
  },
  {
    "id": 17,
    "category": "SDLC Phases",
    "question": "Which SDLC phase is mainly concerned with 'how the system will work'?",
    "options": [
      "Requirement Analysis",
      "System Design",
      "Testing",
      "Deployment"
    ],
    "answerIndex": 1,
    "explanation": "System Design determines HOW the system will operate."
  },
  {
    "id": 18,
    "category": "SDLC Phases",
    "question": "Which SDLC phase is mainly concerned with 'what the system should do'?",
    "options": [
      "Requirements Analysis",
      "System Design",
      "Implementation",
      "Testing"
    ],
    "answerIndex": 0,
    "explanation": "Requirements Analysis specifies WHAT the system must accomplish."
  },
  {
    "id": 19,
    "category": "SDLC Phases",
    "question": "Which deliverable is most commonly produced during the Design phase?",
    "options": [
      "Test Cases",
      "Source Code",
      "System Design Document (SDD)",
      "User Manual"
    ],
    "answerIndex": 2,
    "explanation": "System Design Document (SDD) is the main outcome of the design phase."
  },
  {
    "id": 20,
    "category": "SDLC Phases",
    "question": "Arrange the following SDLC phases in the correct order: 1. Testing 2. Requirement Analysis 3. Design 4. Implementation",
    "options": [
      "2 -> 4 -> 3 -> 1",
      "2 -> 3 -> 4 -> 1",
      "3 -> 2 -> 4 -> 1",
      "4 -> 2 -> 3 -> 1"
    ],
    "answerIndex": 1,
    "explanation": "Correct SDLC sequence: Requirement Analysis (2) -> Design (3) -> Implementation (4) -> Testing (1)."
  },
  {
    "id": 21,
    "category": "SDLC Models",
    "question": "In which SDLC model are all phases executed in a linear, sequential order?",
    "options": [
      "Spiral",
      "Waterfall",
      "Agile",
      "Prototype"
    ],
    "answerIndex": 1,
    "explanation": "The Waterfall model processes phase by phase in strict sequential order."
  },
  {
    "id": 22,
    "category": "SDLC Models",
    "question": "The Waterfall model is best suited for projects where:",
    "options": [
      "Requirements change frequently",
      "Requirements are well defined and stable",
      "Risk is very high",
      "Continuous customer feedback is required"
    ],
    "answerIndex": 1,
    "explanation": "Waterfall works best when requirements are clear, fixed, and unambiguous."
  },
  {
    "id": 23,
    "category": "SDLC Models",
    "question": "Which SDLC model does NOT normally allow returning to previous phases?",
    "options": [
      "Waterfall",
      "Agile",
      "Spiral",
      "Incremental"
    ],
    "answerIndex": 0,
    "explanation": "Waterfall is linear and does not easily allow backward iteration."
  },
  {
    "id": 24,
    "category": "SDLC Models",
    "question": "Which is a major disadvantage of the Waterfall model?",
    "options": [
      "Excessive customer involvement",
      "Difficult to accommodate changing requirements",
      "High development speed",
      "Frequent releases"
    ],
    "answerIndex": 1,
    "explanation": "Inability to adapt to late requirement changes is Waterfall's primary drawback."
  },
  {
    "id": 25,
    "category": "SDLC Models",
    "question": "Which project is most suitable for the Waterfall model?",
    "options": [
      "Social media application",
      "Startup MVP",
      "Payroll system with fixed requirements",
      "Research project"
    ],
    "answerIndex": 2,
    "explanation": "Payroll systems with stable, well-understood government rules fit Waterfall best."
  },
  {
    "id": 26,
    "category": "SDLC Models",
    "question": "Which SDLC model is best suited for changing requirements?",
    "options": [
      "Waterfall",
      "V-Model",
      "Agile",
      "RAD"
    ],
    "answerIndex": 2,
    "explanation": "Agile accommodates frequent requirement changes and iterative evolution."
  },
  {
    "id": 27,
    "category": "SDLC Models",
    "question": "Agile development emphasizes:",
    "options": [
      "Extensive documentation",
      "Customer collaboration",
      "Sequential execution",
      "One-time delivery"
    ],
    "answerIndex": 1,
    "explanation": "Agile prioritizes customer collaboration over heavy documentation."
  },
  {
    "id": 28,
    "category": "SDLC Models",
    "question": "Agile delivers software:",
    "options": [
      "Only after project completion",
      "In small iterative increments",
      "After documentation only",
      "After final testing only"
    ],
    "answerIndex": 1,
    "explanation": "Agile delivers working software in short, iterative release cycles."
  },
  {
    "id": 29,
    "category": "SDLC Models",
    "question": "Agile is based on:",
    "options": [
      "Long development cycles",
      "Fixed requirements",
      "Iterative and incremental development",
      "Single deployment"
    ],
    "answerIndex": 2,
    "explanation": "Agile combines iterative refinement with incremental functionality delivery."
  },
  {
    "id": 30,
    "category": "SDLC Models",
    "question": "Which is NOT a characteristic of Agile?",
    "options": [
      "Customer feedback",
      "Frequent releases",
      "Iterative development",
      "Rigid sequential phases"
    ],
    "answerIndex": 3,
    "explanation": "Rigid sequential phases belong to Waterfall, not Agile."
  },
  {
    "id": 31,
    "category": "SDLC Models",
    "question": "Which SDLC model is known as a risk-driven model?",
    "options": [
      "Agile",
      "Spiral",
      "Waterfall",
      "Prototype"
    ],
    "answerIndex": 1,
    "explanation": "The Spiral model incorporates explicit risk analysis in every iteration."
  },
  {
    "id": 32,
    "category": "SDLC Models",
    "question": "Spiral model is most appropriate for:",
    "options": [
      "Small school assignment",
      "Stable requirements",
      "Large high-risk projects",
      "Very short projects"
    ],
    "answerIndex": 2,
    "explanation": "Spiral is designed for complex, high-risk, mission-critical systems."
  },
  {
    "id": 33,
    "category": "SDLC Models",
    "question": "Risk analysis is performed repeatedly in:",
    "options": [
      "Waterfall",
      "Spiral",
      "RAD",
      "V-Model"
    ],
    "answerIndex": 1,
    "explanation": "Every loop of the Spiral model begins with risk evaluation."
  },
  {
    "id": 34,
    "category": "SDLC Models",
    "question": "Which activity distinguishes the Spiral model from most other SDLC models?",
    "options": [
      "Coding",
      "Testing",
      "Risk assessment",
      "Documentation"
    ],
    "answerIndex": 2,
    "explanation": "Formal risk assessment is the hallmark of the Spiral model."
  },
  {
    "id": 35,
    "category": "SDLC Models",
    "question": "Spiral combines the features of:",
    "options": [
      "Waterfall and Assembly",
      "Prototyping and Waterfall",
      "Agile and RAD",
      "V-Model and Scrum"
    ],
    "answerIndex": 1,
    "explanation": "Spiral combines the systematic step-by-step nature of Waterfall with Prototyping."
  },
  {
    "id": 36,
    "category": "SDLC Models",
    "question": "Which model is mainly used when requirements are unclear?",
    "options": [
      "Waterfall",
      "Spiral",
      "Prototype",
      "V-Model"
    ],
    "answerIndex": 2,
    "explanation": "Prototyping is ideal when users cannot clearly state requirements upfront."
  },
  {
    "id": 37,
    "category": "SDLC Models",
    "question": "The primary objective of a prototype is to:",
    "options": [
      "Deliver the final product",
      "Clarify user requirements",
      "Replace testing",
      "Improve coding speed"
    ],
    "answerIndex": 1,
    "explanation": "A prototype is built to help stakeholders visualize and refine requirements."
  },
  {
    "id": 38,
    "category": "SDLC Models",
    "question": "Which SDLC model encourages early customer feedback?",
    "options": [
      "Waterfall",
      "Incremental",
      "Spiral",
      "Prototype"
    ],
    "answerIndex": 3,
    "explanation": "Prototyping obtains early user feedback on mockups before full coding."
  },
  {
    "id": 39,
    "category": "SDLC Models",
    "question": "A customer is unsure about the system interface. Which model is most suitable?",
    "options": [
      "Waterfall",
      "Prototype",
      "V-Model",
      "Incremental"
    ],
    "answerIndex": 1,
    "explanation": "Building a sample interface prototype allows users to clarify UI expectations."
  },
  {
    "id": 40,
    "category": "SDLC Models",
    "question": "Which is a disadvantage of the Prototype model?",
    "options": [
      "Customer is never involved",
      "Users may mistake the prototype for the final product",
      "No requirement gathering",
      "No testing"
    ],
    "answerIndex": 1,
    "explanation": "Clients often confuse a demonstration prototype with a finished, production-ready system."
  },
  {
    "id": 41,
    "category": "SDLC Models",
    "question": "The V-Model mainly emphasizes:",
    "options": [
      "Rapid coding",
      "Verification and Validation",
      "Customer interviews",
      "Risk analysis"
    ],
    "answerIndex": 1,
    "explanation": "The V-Model maps every development phase directly to a corresponding testing phase."
  },
  {
    "id": 42,
    "category": "SDLC Models",
    "question": "In the V-Model, every development phase has a corresponding:",
    "options": [
      "Coding phase",
      "Testing phase",
      "Deployment phase",
      "Maintenance phase"
    ],
    "answerIndex": 1,
    "explanation": "Each left-side development phase pairs with a right-side testing phase."
  },
  {
    "id": 43,
    "category": "SDLC Models",
    "question": "Which model is considered an extension of the Waterfall model?",
    "options": [
      "Agile",
      "V-Model",
      "Spiral",
      "Prototype"
    ],
    "answerIndex": 1,
    "explanation": "The V-Model is a modified, testing-focused extension of the sequential Waterfall model."
  },
  {
    "id": 44,
    "category": "SDLC Models",
    "question": "Which testing activity corresponds to System Design in the V-Model?",
    "options": [
      "Unit Testing",
      "Acceptance Testing",
      "System Testing",
      "Smoke Testing"
    ],
    "answerIndex": 2,
    "explanation": "System Design is validated by System Testing in the V-Model."
  },
  {
    "id": 45,
    "category": "SDLC Models",
    "question": "Which testing activity corresponds to Requirements Analysis in the V-Model?",
    "options": [
      "Unit Testing",
      "Integration Testing",
      "System Testing",
      "Acceptance Testing"
    ],
    "answerIndex": 3,
    "explanation": "Requirements Analysis is validated by Acceptance Testing."
  },
  {
    "id": 46,
    "category": "SDLC Models",
    "question": "In the Incremental model, software is delivered:",
    "options": [
      "Only once",
      "In multiple working increments",
      "Without testing",
      "Without design"
    ],
    "answerIndex": 1,
    "explanation": "Software is built and released in functional parts over time."
  },
  {
    "id": 47,
    "category": "SDLC Models",
    "question": "Which model allows users to receive partial functionality early?",
    "options": [
      "Waterfall",
      "Incremental",
      "V-Model",
      "Prototype"
    ],
    "answerIndex": 1,
    "explanation": "Incremental development releases working core modules early to users."
  },
  {
    "id": 48,
    "category": "SDLC Models",
    "question": "Iterative development means:",
    "options": [
      "One-time development",
      "Repeated refinement of the product",
      "No customer feedback",
      "No testing"
    ],
    "answerIndex": 1,
    "explanation": "Iterative development repeatedly revisits and refines product builds."
  },
  {
    "id": 49,
    "category": "SDLC Models",
    "question": "Which model reduces overall project risk by delivering functionality gradually?",
    "options": [
      "Waterfall",
      "Incremental",
      "V-Model",
      "Prototype"
    ],
    "answerIndex": 1,
    "explanation": "Incremental delivery reduces risk by splitting project scope into smaller chunks."
  },
  {
    "id": 50,
    "category": "SDLC Models",
    "question": "Incremental development is useful because:",
    "options": [
      "All modules are completed together",
      "Users receive usable software earlier",
      "Testing is skipped",
      "Design is unnecessary"
    ],
    "answerIndex": 1,
    "explanation": "Delivering working subsets earlier provides immediate business value."
  },
  {
    "id": 51,
    "category": "SDLC Models",
    "question": "RAD stands for:",
    "options": [
      "Rapid Application Development",
      "Reliable Application Development",
      "Rapid Agile Design",
      "Requirement Analysis and Design"
    ],
    "answerIndex": 0,
    "explanation": "RAD = Rapid Application Development."
  },
  {
    "id": 52,
    "category": "SDLC Models",
    "question": "RAD primarily focuses on:",
    "options": [
      "Long development cycles",
      "Fast software development",
      "Risk analysis",
      "Sequential execution"
    ],
    "answerIndex": 1,
    "explanation": "RAD uses rapid prototyping and reusable components for speedy delivery."
  },
  {
    "id": 53,
    "category": "SDLC Models",
    "question": "Which approach is commonly associated with RAD?",
    "options": [
      "Slow documentation",
      "Manual coding only",
      "Rapid prototyping and reusable components",
      "Delayed customer feedback"
    ],
    "answerIndex": 2,
    "explanation": "RAD heavily relies on component reuse and quick GUI prototyping."
  },
  {
    "id": 54,
    "category": "SDLC Models",
    "question": "A software company releases a working version every two weeks and collects customer feedback. Which model is being followed?",
    "options": [
      "Waterfall",
      "Agile",
      "V-Model",
      "Waterfall"
    ],
    "answerIndex": 1,
    "explanation": "Short two-week sprint cycles with continuous feedback is Agile."
  },
  {
    "id": 55,
    "category": "SDLC Models",
    "question": "A bank is developing mission-critical software where risk assessment is performed before every iteration.",
    "options": [
      "Prototype",
      "Agile",
      "Spiral",
      "Waterfall"
    ],
    "answerIndex": 2,
    "explanation": "Repeated risk analysis before iterations indicates the Spiral model."
  },
  {
    "id": 56,
    "category": "SDLC Models",
    "question": "The client knows exactly what is required and does not expect requirement changes.",
    "options": [
      "Waterfall",
      "Agile",
      "Prototype",
      "Spiral"
    ],
    "answerIndex": 0,
    "explanation": "Fixed, fully-understood requirements fit the Waterfall model."
  },
  {
    "id": 57,
    "category": "SDLC Models",
    "question": "Developers first build a sample interface to understand customer expectations before starting actual development.",
    "options": [
      "Agile",
      "Prototype",
      "Waterfall",
      "V-Model"
    ],
    "answerIndex": 1,
    "explanation": "Building a sample interface first is prototyping."
  },
  {
    "id": 58,
    "category": "SDLC Models",
    "question": "Which SDLC model has the highest customer involvement?",
    "options": [
      "Waterfall",
      "V-Model",
      "Agile",
      "Incremental"
    ],
    "answerIndex": 2,
    "explanation": "Agile requires active, continuous customer involvement throughout the project."
  },
  {
    "id": 59,
    "category": "SDLC Models",
    "question": "Which SDLC model is least suitable when requirements change frequently?",
    "options": [
      "Waterfall",
      "Agile",
      "Prototype",
      "Spiral"
    ],
    "answerIndex": 0,
    "explanation": "Waterfall struggles most with changing requirements due to its rigid structure."
  },
  {
    "id": 60,
    "category": "SDLC Models",
    "question": "Which SDLC model is most likely to produce the earliest working version of software?",
    "options": [
      "Waterfall",
      "V-Model",
      "Agile",
      "Waterfall"
    ],
    "answerIndex": 2,
    "explanation": "Agile aims to produce working software increments in early sprints."
  },
  {
    "id": 61,
    "category": "Software Testing",
    "question": "Which testing technique examines the internal structure of the source code?",
    "options": [
      "Black-box Testing",
      "White-box Testing",
      "Acceptance Testing",
      "System Testing"
    ],
    "answerIndex": 1,
    "explanation": "White-box testing inspects internal code structure, paths, and logic."
  },
  {
    "id": 62,
    "category": "Software Testing",
    "question": "Which testing technique focuses only on software inputs and outputs?",
    "options": [
      "Black-box Testing",
      "White-box Testing",
      "Unit Testing",
      "Regression Testing"
    ],
    "answerIndex": 0,
    "explanation": "Black-box testing checks functional inputs vs outputs without viewing source code."
  },
  {
    "id": 63,
    "category": "Software Testing",
    "question": "Knowledge of source code is essential for:",
    "options": [
      "Black-box Testing",
      "White-box Testing",
      "Acceptance Testing",
      "Beta Testing"
    ],
    "answerIndex": 1,
    "explanation": "White-box testers must understand programming logic and code structure."
  },
  {
    "id": 64,
    "category": "Software Testing",
    "question": "Which testing method is generally performed from the user's perspective?",
    "options": [
      "Black-box Testing",
      "White-box Testing",
      "Unit Testing",
      "Integration Testing"
    ],
    "answerIndex": 0,
    "explanation": "Black-box testing evaluates system behavior from an end-user viewpoint."
  },
  {
    "id": 65,
    "category": "Software Testing",
    "question": "Which testing technique is also known as structural testing?",
    "options": [
      "Black-box Testing",
      "White-box Testing",
      "Functional Testing",
      "Acceptance Testing"
    ],
    "answerIndex": 1,
    "explanation": "White-box testing is also termed structural or glass-box testing."
  },
  {
    "id": 66,
    "category": "Software Testing",
    "question": "Which testing technique is also called behavioral testing?",
    "options": [
      "Black-box Testing",
      "White-box Testing",
      "Regression Testing",
      "Smoke Testing"
    ],
    "answerIndex": 0,
    "explanation": "Black-box testing evaluates external behavior, hence behavioral testing."
  },
  {
    "id": 67,
    "category": "Software Testing",
    "question": "Unit testing is mainly performed on:",
    "options": [
      "Entire system",
      "Individual modules",
      "Complete project",
      "Customer environment"
    ],
    "answerIndex": 1,
    "explanation": "Unit testing tests individual functions, classes, or modules in isolation."
  },
  {
    "id": 68,
    "category": "Software Testing",
    "question": "Unit testing is usually performed by:",
    "options": [
      "Developers",
      "Customers",
      "End users",
      "Project manager"
    ],
    "answerIndex": 0,
    "explanation": "Developers write and execute unit tests during implementation."
  },
  {
    "id": 69,
    "category": "Software Testing",
    "question": "Which testing type verifies the smallest testable part of software?",
    "options": [
      "Integration Testing",
      "Unit Testing",
      "System Testing",
      "Acceptance Testing"
    ],
    "answerIndex": 1,
    "explanation": "Unit testing tests the smallest individual software component."
  },
  {
    "id": 70,
    "category": "Software Testing",
    "question": "Which testing is normally completed before Integration Testing?",
    "options": [
      "Unit Testing",
      "Acceptance Testing",
      "Regression Testing",
      "Beta Testing"
    ],
    "answerIndex": 0,
    "explanation": "Unit testing must pass before combining modules into Integration Testing."
  },
  {
    "id": 71,
    "category": "Software Testing",
    "question": "Integration testing is performed to verify:",
    "options": [
      "User satisfaction",
      "Interaction between modules",
      "Software performance",
      "Hardware compatibility"
    ],
    "answerIndex": 1,
    "explanation": "Integration testing tests interfaces and data flow between connected modules."
  },
  {
    "id": 72,
    "category": "Software Testing",
    "question": "Integration testing is conducted after:",
    "options": [
      "Unit Testing",
      "System Testing",
      "Acceptance Testing",
      "Maintenance"
    ],
    "answerIndex": 0,
    "explanation": "Integration testing follows individual unit testing."
  },
  {
    "id": 73,
    "category": "Software Testing",
    "question": "Which defect is most likely to be found during Integration Testing?",
    "options": [
      "Typographical error",
      "Interface mismatch between modules",
      "Requirement ambiguity",
      "Hardware failure"
    ],
    "answerIndex": 1,
    "explanation": "Interface mismatches (e.g. data type mismatches) surface during integration."
  },
  {
    "id": 74,
    "category": "Software Testing",
    "question": "Which testing checks communication among integrated components?",
    "options": [
      "Unit Testing",
      "Integration Testing",
      "Acceptance Testing",
      "Load Testing"
    ],
    "answerIndex": 1,
    "explanation": "Integration testing validates module interactions."
  },
  {
    "id": 75,
    "category": "Software Testing",
    "question": "System Testing evaluates:",
    "options": [
      "Individual functions",
      "The complete integrated system",
      "Database only",
      "User documentation only"
    ],
    "answerIndex": 1,
    "explanation": "System testing evaluates the fully assembled, complete system."
  },
  {
    "id": 76,
    "category": "Software Testing",
    "question": "Which testing ensures that all integrated modules work together as one complete system?",
    "options": [
      "Unit Testing",
      "Integration Testing",
      "System Testing",
      "Smoke Testing"
    ],
    "answerIndex": 2,
    "explanation": "System testing tests end-to-end system operation."
  },
  {
    "id": 77,
    "category": "Software Testing",
    "question": "System testing is mainly performed before:",
    "options": [
      "Coding",
      "Design",
      "Acceptance Testing",
      "Maintenance"
    ],
    "answerIndex": 2,
    "explanation": "System testing precedes final user Acceptance Testing."
  },
  {
    "id": 78,
    "category": "Software Testing",
    "question": "Which testing confirms that software satisfies customer requirements?",
    "options": [
      "Unit Testing",
      "Regression Testing",
      "Acceptance Testing",
      "White-box Testing"
    ],
    "answerIndex": 2,
    "explanation": "Acceptance testing verifies compliance with customer business requirements."
  },
  {
    "id": 79,
    "category": "Software Testing",
    "question": "Acceptance testing is mainly performed by:",
    "options": [
      "Developers",
      "Test engineers",
      "Customers or end users",
      "Database administrators"
    ],
    "answerIndex": 2,
    "explanation": "Acceptance testing is conducted by clients/users before accepting delivery."
  },
  {
    "id": 80,
    "category": "Software Testing",
    "question": "The primary objective of Acceptance Testing is to:",
    "options": [
      "Detect syntax errors",
      "Measure execution speed",
      "Verify business requirements",
      "Improve source code"
    ],
    "answerIndex": 2,
    "explanation": "Acceptance testing confirms business readiness and customer agreement."
  },
  {
    "id": 81,
    "category": "Software Testing",
    "question": "Which testing is usually the final testing before software release?",
    "options": [
      "Integration Testing",
      "Unit Testing",
      "Acceptance Testing",
      "Smoke Testing"
    ],
    "answerIndex": 2,
    "explanation": "Acceptance testing is the final validation before release."
  },
  {
    "id": 82,
    "category": "Software Testing",
    "question": "Regression Testing is performed to:",
    "options": [
      "Test new requirements only",
      "Ensure existing functionality still works after changes",
      "Test hardware",
      "Test usability"
    ],
    "answerIndex": 1,
    "explanation": "Regression testing ensures bug fixes or edits didn't break working features."
  },
  {
    "id": 83,
    "category": "Software Testing",
    "question": "Which testing is repeated after bug fixing?",
    "options": [
      "Acceptance Testing",
      "Regression Testing",
      "Load Testing",
      "Unit Testing"
    ],
    "answerIndex": 1,
    "explanation": "Regression testing is run after code changes/fixes."
  },
  {
    "id": 84,
    "category": "Software Testing",
    "question": "Regression Testing helps identify:",
    "options": [
      "Requirement changes",
      "Database normalization",
      "New defects introduced after modification",
      "Coding standards"
    ],
    "answerIndex": 2,
    "explanation": "Regression testing catches unwanted side-effects of recent code modifications."
  },
  {
    "id": 85,
    "category": "Software Testing",
    "question": "Regression Testing is commonly required after:",
    "options": [
      "Requirement gathering",
      "Software modification",
      "Feasibility study",
      "Project planning"
    ],
    "answerIndex": 1,
    "explanation": "Software modifications require regression testing to ensure stability."
  },
  {
    "id": 86,
    "category": "Software Testing",
    "question": "Functional Testing verifies:",
    "options": [
      "Software functions according to requirements",
      "CPU utilization",
      "Network bandwidth",
      "Memory size"
    ],
    "answerIndex": 0,
    "explanation": "Functional testing verifies that software features perform specified tasks."
  },
  {
    "id": 87,
    "category": "Software Testing",
    "question": "Which is NOT a Functional Testing type?",
    "options": [
      "Unit Testing",
      "Integration Testing",
      "System Testing",
      "Load Testing"
    ],
    "answerIndex": 3,
    "explanation": "Load testing is a non-functional performance test."
  },
  {
    "id": 88,
    "category": "Software Testing",
    "question": "Non-functional Testing evaluates:",
    "options": [
      "User login",
      "Payment processing",
      "Performance, reliability, and usability",
      "Business logic"
    ],
    "answerIndex": 2,
    "explanation": "Non-functional testing evaluates quality attributes like speed and reliability."
  },
  {
    "id": 89,
    "category": "Software Testing",
    "question": "Which testing checks software speed under heavy workload?",
    "options": [
      "Functional Testing",
      "Load Testing",
      "Unit Testing",
      "Regression Testing"
    ],
    "answerIndex": 1,
    "explanation": "Load testing tests system behavior under high concurrent user loads."
  },
  {
    "id": 90,
    "category": "Software Testing",
    "question": "Which testing mainly measures system performance?",
    "options": [
      "Acceptance Testing",
      "Load Testing",
      "Unit Testing",
      "White-box Testing"
    ],
    "answerIndex": 1,
    "explanation": "Load testing measures response times and throughput performance."
  },
  {
    "id": 91,
    "category": "Software Testing",
    "question": "Smoke Testing verifies whether:",
    "options": [
      "Individual module is correct",
      "Basic system functions work after a new build",
      "Customer requirements are satisfied",
      "Software is secure"
    ],
    "answerIndex": 1,
    "explanation": "Smoke testing verifies if a build is stable enough for deeper testing."
  },
  {
    "id": 92,
    "category": "Software Testing",
    "question": "Smoke Testing is also known as:",
    "options": [
      "White-box Testing",
      "Build Verification Testing",
      "Integration Testing",
      "Load Testing"
    ],
    "answerIndex": 1,
    "explanation": "Smoke testing is also called Build Verification Testing (BVT)."
  },
  {
    "id": 93,
    "category": "Software Testing",
    "question": "Sanity Testing mainly checks:",
    "options": [
      "Entire application",
      "Specific modified functionality after minor changes",
      "Hardware",
      "Security"
    ],
    "answerIndex": 1,
    "explanation": "Sanity testing quickly verifies minor bug fixes or small code changes."
  },
  {
    "id": 94,
    "category": "Software Testing",
    "question": "Which testing is narrower in scope?",
    "options": [
      "Smoke Testing",
      "Sanity Testing",
      "System Testing",
      "Acceptance Testing"
    ],
    "answerIndex": 1,
    "explanation": "Sanity testing focuses tightly on specific changed features."
  },
  {
    "id": 95,
    "category": "Software Testing",
    "question": "Alpha Testing is usually performed:",
    "options": [
      "At the developer's site",
      "At the customer's site",
      "After maintenance",
      "During coding"
    ],
    "answerIndex": 0,
    "explanation": "Alpha testing is internal testing conducted at the developer's site."
  },
  {
    "id": 96,
    "category": "Software Testing",
    "question": "Beta Testing is mainly conducted:",
    "options": [
      "Inside development company",
      "By selected real users",
      "By database administrators",
      "By project managers"
    ],
    "answerIndex": 1,
    "explanation": "Beta testing is performed by external real users in real environment."
  },
  {
    "id": 97,
    "category": "Software Testing",
    "question": "Which testing provides real-world user feedback before official release?",
    "options": [
      "Alpha Testing",
      "Beta Testing",
      "Unit Testing",
      "Integration Testing"
    ],
    "answerIndex": 1,
    "explanation": "Beta testing collects real-world feedback from end users."
  },
  {
    "id": 98,
    "category": "Software Testing",
    "question": "A tester checks whether all menu buttons produce the expected results without viewing source code.",
    "options": [
      "Black-box Testing",
      "White-box Testing",
      "Unit Testing",
      "Regression Testing"
    ],
    "answerIndex": 0,
    "explanation": "Testing UI outputs without inspecting code is Black-box testing."
  },
  {
    "id": 99,
    "category": "Software Testing",
    "question": "A developer examines every decision path in the source code.",
    "options": [
      "Acceptance Testing",
      "White-box Testing",
      "Black-box Testing",
      "Load Testing"
    ],
    "answerIndex": 1,
    "explanation": "Testing all decision paths in source code is White-box testing."
  },
  {
    "id": 100,
    "category": "Software Testing",
    "question": "After integrating the payment module with the inventory module, engineers verify data exchange.",
    "options": [
      "Unit Testing",
      "Integration Testing",
      "System Testing",
      "Acceptance Testing"
    ],
    "answerIndex": 1,
    "explanation": "Testing data exchange between integrated modules is Integration testing."
  },
  {
    "id": 101,
    "category": "Software Testing",
    "question": "A software company fixes five bugs and wants to ensure old features still work correctly.",
    "options": [
      "Smoke Testing",
      "Regression Testing",
      "Acceptance Testing",
      "Alpha Testing"
    ],
    "answerIndex": 1,
    "explanation": "Testing old features after bug fixes is Regression testing."
  },
  {
    "id": 102,
    "category": "Software Testing",
    "question": "Customers verify that the completed software satisfies all agreed requirements.",
    "options": [
      "Unit Testing",
      "Integration Testing",
      "Acceptance Testing",
      "White-box Testing"
    ],
    "answerIndex": 2,
    "explanation": "Customer verification of agreed requirements is Acceptance testing."
  },
  {
    "id": 103,
    "category": "Software Testing",
    "question": "Developers test a newly compiled build to ensure basic features work before detailed testing.",
    "options": [
      "Regression Testing",
      "Smoke Testing",
      "System Testing",
      "Beta Testing"
    ],
    "answerIndex": 1,
    "explanation": "Quick initial build sanity check is Smoke testing."
  },
  {
    "id": 104,
    "category": "Software Testing",
    "question": "A tester checks only the updated search feature after a minor bug fix.",
    "options": [
      "Smoke Testing",
      "Sanity Testing",
      "Unit Testing",
      "System Testing"
    ],
    "answerIndex": 1,
    "explanation": "Targeted verification of a minor bug fix is Sanity testing."
  },
  {
    "id": 105,
    "category": "Software Testing",
    "question": "Thousands of users access an online portal simultaneously to evaluate response time.",
    "options": [
      "Functional Testing",
      "Load Testing",
      "Unit Testing",
      "White-box Testing"
    ],
    "answerIndex": 1,
    "explanation": "Simultaneous high user load testing is Load testing."
  },
  {
    "id": 106,
    "category": "Software Testing",
    "question": "A tester verifies the complete integrated application before it is handed to the customer.",
    "options": [
      "Integration Testing",
      "System Testing",
      "Unit Testing",
      "Beta Testing"
    ],
    "answerIndex": 1,
    "explanation": "Verifying the full integrated system prior to customer delivery is System testing."
  },
  {
    "id": 107,
    "category": "Software Testing",
    "question": "Which testing generally requires programming knowledge?",
    "options": [
      "Acceptance Testing",
      "White-box Testing",
      "Black-box Testing",
      "Beta Testing"
    ],
    "answerIndex": 1,
    "explanation": "White-box testing requires source code readability."
  },
  {
    "id": 108,
    "category": "Software Testing",
    "question": "Which testing usually does NOT require knowledge of source code?",
    "options": [
      "Black-box Testing",
      "White-box Testing",
      "Unit Testing",
      "Structural Testing"
    ],
    "answerIndex": 0,
    "explanation": "Black-box testing requires no code knowledge."
  },
  {
    "id": 109,
    "category": "Software Testing",
    "question": "Which testing is primarily intended to reveal defects in software functionality?",
    "options": [
      "Functional Testing",
      "Load Testing",
      "Stress Testing",
      "Performance Testing"
    ],
    "answerIndex": 0,
    "explanation": "Functional testing targets software feature correctness."
  },
  {
    "id": 110,
    "category": "Software Testing",
    "question": "Which testing type is most closely associated with customer satisfaction before software release?",
    "options": [
      "Regression Testing",
      "Unit Testing",
      "Acceptance Testing",
      "White-box Testing"
    ],
    "answerIndex": 2,
    "explanation": "Acceptance testing ensures customer approval prior to release."
  },
  {
    "id": 111,
    "category": "SRS & Requirements",
    "question": "What is the primary purpose of a Software Requirements Specification (SRS)?",
    "options": [
      "To write program code",
      "To define and document software requirements",
      "To perform software testing",
      "To install the software"
    ],
    "answerIndex": 1,
    "explanation": "An SRS defines complete software capabilities and constraints."
  },
  {
    "id": 112,
    "category": "SRS & Requirements",
    "question": "An SRS document mainly serves as:",
    "options": [
      "A user manual",
      "An agreement between the client and the developer",
      "A maintenance guide",
      "A testing report"
    ],
    "answerIndex": 1,
    "explanation": "The SRS forms the contractual agreement between client and development team."
  },
  {
    "id": 113,
    "category": "SRS & Requirements",
    "question": "Which phase of SDLC produces the SRS document?",
    "options": [
      "Design",
      "Requirements Analysis",
      "Coding",
      "Maintenance"
    ],
    "answerIndex": 1,
    "explanation": "Requirements Analysis yields the formal SRS."
  },
  {
    "id": 114,
    "category": "SRS & Requirements",
    "question": "Which IEEE standard is commonly associated with SRS?",
    "options": [
      "IEEE 802.11",
      "IEEE 488",
      "IEEE 830",
      "IEEE 754"
    ],
    "answerIndex": 2,
    "explanation": "IEEE 830 is the standard for Software Requirements Specifications."
  },
  {
    "id": 115,
    "category": "SRS & Requirements",
    "question": "The SRS document describes:",
    "options": [
      "How the software will be coded",
      "What the software should do",
      "Which language should be used",
      "Which IDE should be used"
    ],
    "answerIndex": 1,
    "explanation": "SRS documents WHAT the system must achieve."
  },
  {
    "id": 116,
    "category": "SRS & Requirements",
    "question": "Which stakeholder primarily approves the SRS?",
    "options": [
      "Tester",
      "Programmer",
      "Client/User",
      "Network Administrator"
    ],
    "answerIndex": 2,
    "explanation": "The Client/User approves SRS requirements."
  },
  {
    "id": 117,
    "category": "SRS & Requirements",
    "question": "Which of the following should NOT normally appear in an SRS?",
    "options": [
      "Functional requirements",
      "Non-functional requirements",
      "Constraints",
      "Source code"
    ],
    "answerIndex": 3,
    "explanation": "Source code belongs in implementation, not in SRS."
  },
  {
    "id": 118,
    "category": "SRS & Requirements",
    "question": "A complete and correct SRS helps to:",
    "options": [
      "Increase hardware cost",
      "Reduce misunderstandings between client and developer",
      "Replace testing",
      "Eliminate maintenance"
    ],
    "answerIndex": 1,
    "explanation": "Clear SRS prevents scope misunderstandings."
  },
  {
    "id": 119,
    "category": "SRS & Requirements",
    "question": "Which document acts as the foundation for software design?",
    "options": [
      "User Manual",
      "Test Report",
      "SRS",
      "Installation Guide"
    ],
    "answerIndex": 2,
    "explanation": "SRS provides requirements that guide System Design."
  },
  {
    "id": 120,
    "category": "SRS & Requirements",
    "question": "Which activity should be completed before writing an SRS?",
    "options": [
      "Coding",
      "Requirement Elicitation",
      "Testing",
      "Deployment"
    ],
    "answerIndex": 1,
    "explanation": "Requirement Elicitation gathers facts before drafting the SRS."
  },
  {
    "id": 121,
    "category": "SRS & Requirements",
    "question": "Functional requirements describe:",
    "options": [
      "What the system should do",
      "How fast it should run",
      "How secure it should be",
      "Hardware specifications"
    ],
    "answerIndex": 0,
    "explanation": "Functional requirements define system actions and behavior."
  },
  {
    "id": 122,
    "category": "SRS & Requirements",
    "question": "Which is a Functional Requirement?",
    "options": [
      "User Login",
      "Availability",
      "Reliability",
      "Performance"
    ],
    "answerIndex": 0,
    "explanation": "User Login is a specific system feature."
  },
  {
    "id": 123,
    "category": "SRS & Requirements",
    "question": "Which is a Functional Requirement?",
    "options": [
      "Security",
      "Portability",
      "Generate Monthly Report",
      "Maintainability"
    ],
    "answerIndex": 2,
    "explanation": "Generate Monthly Report is a functional service."
  },
  {
    "id": 124,
    "category": "SRS & Requirements",
    "question": "Which requirement specifies that users can reset forgotten passwords?",
    "options": [
      "Functional Requirement",
      "Non-functional Requirement",
      "Business Requirement",
      "Technical Requirement"
    ],
    "answerIndex": 0,
    "explanation": "Password reset is a functional feature."
  },
  {
    "id": 125,
    "category": "SRS & Requirements",
    "question": "Which is NOT a Functional Requirement?",
    "options": [
      "Print Invoice",
      "Search Product",
      "Register Student",
      "Response Time"
    ],
    "answerIndex": 3,
    "explanation": "Response time is a performance (non-functional) attribute."
  },
  {
    "id": 126,
    "category": "SRS & Requirements",
    "question": "Which requirement defines business operations performed by the software?",
    "options": [
      "Functional Requirement",
      "Non-functional Requirement",
      "Performance Requirement",
      "Security Requirement"
    ],
    "answerIndex": 0,
    "explanation": "Functional requirements encode operational business logic."
  },
  {
    "id": 127,
    "category": "SRS & Requirements",
    "question": "Which of the following belongs to Functional Requirements?",
    "options": [
      "Encryption",
      "Add New Employee",
      "Scalability",
      "Reliability"
    ],
    "answerIndex": 1,
    "explanation": "Add New Employee is a functional operation."
  },
  {
    "id": 128,
    "category": "SRS & Requirements",
    "question": "Functional requirements are mainly concerned with:",
    "options": [
      "Quality",
      "Services provided by the system",
      "Hardware",
      "Software cost"
    ],
    "answerIndex": 1,
    "explanation": "Functional requirements state the explicit services offered."
  },
  {
    "id": 129,
    "category": "SRS & Requirements",
    "question": "Non-functional requirements describe:",
    "options": [
      "Business functions",
      "Quality attributes of the software",
      "Source code",
      "Database schema"
    ],
    "answerIndex": 1,
    "explanation": "Non-functional requirements specify quality attributes (speed, security)."
  },
  {
    "id": 130,
    "category": "SRS & Requirements",
    "question": "Which is a Non-functional Requirement?",
    "options": [
      "Online Registration",
      "High Performance",
      "Generate Receipt",
      "Calculate Salary"
    ],
    "answerIndex": 1,
    "explanation": "High Performance is a quality metric."
  },
  {
    "id": 131,
    "category": "SRS & Requirements",
    "question": "Which of the following is a Non-functional Requirement?",
    "options": [
      "Print Report",
      "Login",
      "Security",
      "Search Record"
    ],
    "answerIndex": 2,
    "explanation": "Security is a non-functional constraint."
  },
  {
    "id": 132,
    "category": "SRS & Requirements",
    "question": "Which requirement specifies that the application should respond within 2 seconds?",
    "options": [
      "Functional",
      "Non-functional",
      "Business",
      "User"
    ],
    "answerIndex": 1,
    "explanation": "Performance criteria like response time are non-functional."
  },
  {
    "id": 133,
    "category": "SRS & Requirements",
    "question": "Which requirement deals with software reliability?",
    "options": [
      "Functional",
      "Non-functional",
      "Business",
      "User"
    ],
    "answerIndex": 1,
    "explanation": "Reliability is a non-functional attribute."
  },
  {
    "id": 134,
    "category": "SRS & Requirements",
    "question": "Which of the following is NOT a Non-functional Requirement?",
    "options": [
      "Usability",
      "Portability",
      "Maintainability",
      "User Registration"
    ],
    "answerIndex": 3,
    "explanation": "User Registration is a functional feature."
  },
  {
    "id": 135,
    "category": "SRS & Requirements",
    "question": "Scalability is an example of:",
    "options": [
      "Functional Requirement",
      "Non-functional Requirement",
      "Business Rule",
      "Design Constraint"
    ],
    "answerIndex": 1,
    "explanation": "Scalability measures quality under growth, hence non-functional."
  },
  {
    "id": 136,
    "category": "SRS & Requirements",
    "question": "Availability is classified as:",
    "options": [
      "Functional Requirement",
      "Non-functional Requirement",
      "User Requirement",
      "Business Requirement"
    ],
    "answerIndex": 1,
    "explanation": "Availability (uptime) is a non-functional metric."
  },
  {
    "id": 137,
    "category": "SRS & Requirements",
    "question": "Which requirement specifies that the software should be available 24/7?",
    "options": [
      "Functional",
      "Non-functional",
      "User",
      "Design"
    ],
    "answerIndex": 1,
    "explanation": "24/7 uptime is a non-functional availability requirement."
  },
  {
    "id": 138,
    "category": "SRS & Requirements",
    "question": "Usability is categorized as:",
    "options": [
      "Functional",
      "Non-functional",
      "Business",
      "Technical"
    ],
    "answerIndex": 1,
    "explanation": "Usability is a non-functional user experience quality."
  },
  {
    "id": 139,
    "category": "SRS & Requirements",
    "question": "Requirement elicitation means:",
    "options": [
      "Coding software",
      "Collecting requirements from stakeholders",
      "Testing software",
      "Deploying software"
    ],
    "answerIndex": 1,
    "explanation": "Elicitation is discovering and collecting needs from users."
  },
  {
    "id": 140,
    "category": "SRS & Requirements",
    "question": "Which is a common requirement elicitation technique?",
    "options": [
      "Compilation",
      "Interview",
      "Linking",
      "Scheduling"
    ],
    "answerIndex": 1,
    "explanation": "Interviews are a primary requirement gathering technique."
  },
  {
    "id": 141,
    "category": "SRS & Requirements",
    "question": "Which technique gathers requirements from multiple users through discussion?",
    "options": [
      "Observation",
      "Prototype",
      "Workshop",
      "Coding"
    ],
    "answerIndex": 2,
    "explanation": "Requirements workshops bring multiple stakeholders together for discussion."
  },
  {
    "id": 142,
    "category": "SRS & Requirements",
    "question": "Which requirement elicitation technique involves watching users perform their work?",
    "options": [
      "Brainstorming",
      "Observation",
      "Testing",
      "Deployment"
    ],
    "answerIndex": 1,
    "explanation": "Observation watches users in their natural environment."
  },
  {
    "id": 143,
    "category": "SRS & Requirements",
    "question": "Questionnaires are most suitable when:",
    "options": [
      "One user exists",
      "Many users are geographically distributed",
      "Coding begins",
      "Testing is completed"
    ],
    "answerIndex": 1,
    "explanation": "Surveys/questionnaires work best for large, dispersed user groups."
  },
  {
    "id": 144,
    "category": "SRS & Requirements",
    "question": "Requirement validation ensures that:",
    "options": [
      "Software is bug-free",
      "Requirements correctly represent customer needs",
      "Source code is optimized",
      "Database is normalized"
    ],
    "answerIndex": 1,
    "explanation": "Validation checks if requirements truly reflect what the client wants."
  },
  {
    "id": 145,
    "category": "SRS & Requirements",
    "question": "Requirement validation is performed before:",
    "options": [
      "Coding",
      "System Design",
      "Maintenance",
      "Deployment"
    ],
    "answerIndex": 1,
    "explanation": "Requirements must be validated before starting System Design."
  },
  {
    "id": 146,
    "category": "SRS & Requirements",
    "question": "Which activity checks whether requirements are complete and consistent?",
    "options": [
      "Coding",
      "Testing",
      "Requirement Validation",
      "Maintenance"
    ],
    "answerIndex": 2,
    "explanation": "Requirement Validation audits completeness, feasibility, and consistency."
  },
  {
    "id": 147,
    "category": "SRS & Requirements",
    "question": "A bank requires customers to transfer funds between accounts. This is:",
    "options": [
      "Functional Requirement",
      "Non-functional Requirement",
      "Performance Requirement",
      "Security Requirement"
    ],
    "answerIndex": 0,
    "explanation": "Funds transfer is an explicit system feature."
  },
  {
    "id": 148,
    "category": "SRS & Requirements",
    "question": "A mobile application must support 100,000 simultaneous users.",
    "options": [
      "Functional Requirement",
      "Non-functional Requirement",
      "User Requirement",
      "Business Rule"
    ],
    "answerIndex": 1,
    "explanation": "Supporting 100k concurrency is a non-functional scalability metric."
  },
  {
    "id": 149,
    "category": "SRS & Requirements",
    "question": "A customer signs a document confirming all software requirements before development begins. That document is:",
    "options": [
      "User Manual",
      "SRS",
      "Test Plan",
      "Design Document"
    ],
    "answerIndex": 1,
    "explanation": "The signed agreement document is the SRS."
  },
  {
    "id": 150,
    "category": "SRS & Requirements",
    "question": "During requirement gathering, developers meet users to understand business needs. This activity is called:",
    "options": [
      "Verification",
      "Validation",
      "Requirement Elicitation",
      "Deployment"
    ],
    "answerIndex": 2,
    "explanation": "Meeting stakeholders to gather needs is Requirement Elicitation."
  },
  {
    "id": 151,
    "category": "Software Maintenance",
    "question": "Which type of maintenance is performed to fix software bugs after delivery?",
    "options": [
      "Adaptive Maintenance",
      "Corrective Maintenance",
      "Perfective Maintenance",
      "Preventive Maintenance"
    ],
    "answerIndex": 1,
    "explanation": "Corrective maintenance fixes bugs discovered in production."
  },
  {
    "id": 152,
    "category": "Software Maintenance",
    "question": "Which maintenance modifies software to work with a new operating system?",
    "options": [
      "Corrective Maintenance",
      "Adaptive Maintenance",
      "Perfective Maintenance",
      "Preventive Maintenance"
    ],
    "answerIndex": 1,
    "explanation": "Adaptive maintenance updates software for changed hardware/OS environments."
  },
  {
    "id": 153,
    "category": "Software Maintenance",
    "question": "Which maintenance improves software performance or adds new features requested by users?",
    "options": [
      "Corrective Maintenance",
      "Adaptive Maintenance",
      "Perfective Maintenance",
      "Preventive Maintenance"
    ],
    "answerIndex": 2,
    "explanation": "Perfective maintenance adds features or enhances efficiency based on user requests."
  },
  {
    "id": 154,
    "category": "Software Maintenance",
    "question": "Which maintenance aims to reduce future software failures before they occur?",
    "options": [
      "Corrective Maintenance",
      "Adaptive Maintenance",
      "Perfective Maintenance",
      "Preventive Maintenance"
    ],
    "answerIndex": 3,
    "explanation": "Preventive maintenance refactors code to prevent future errors."
  },
  {
    "id": 155,
    "category": "Software Maintenance",
    "question": "Replacing obsolete libraries because the operating system has changed is an example of:",
    "options": [
      "Corrective Maintenance",
      "Adaptive Maintenance",
      "Perfective Maintenance",
      "Preventive Maintenance"
    ],
    "answerIndex": 1,
    "explanation": "Adapting to environment changes is Adaptive maintenance."
  },
  {
    "id": 156,
    "category": "Software Maintenance",
    "question": "Removing logical errors discovered after deployment is called:",
    "options": [
      "Perfective Maintenance",
      "Corrective Maintenance",
      "Adaptive Maintenance",
      "Preventive Maintenance"
    ],
    "answerIndex": 1,
    "explanation": "Fixing post-deployment errors is Corrective maintenance."
  },
  {
    "id": 157,
    "category": "Software Maintenance",
    "question": "Software maintenance is generally performed:",
    "options": [
      "Before testing",
      "During coding only",
      "After software delivery",
      "Before requirement analysis"
    ],
    "answerIndex": 2,
    "explanation": "Maintenance begins after software is delivered to clients."
  },
  {
    "id": 158,
    "category": "Software Maintenance",
    "question": "Which SDLC phase usually consumes the largest portion of software cost?",
    "options": [
      "Design",
      "Coding",
      "Testing",
      "Maintenance"
    ],
    "answerIndex": 3,
    "explanation": "Long-term Maintenance typically accounts for 60-80% of total lifecycle cost."
  },
  {
    "id": 159,
    "category": "Software Maintenance",
    "question": "The primary objective of software maintenance is to:",
    "options": [
      "Rewrite the software completely",
      "Keep the software useful and operational",
      "Eliminate documentation",
      "Replace requirement analysis"
    ],
    "answerIndex": 1,
    "explanation": "Maintenance preserves application value and operations over time."
  },
  {
    "id": 160,
    "category": "Software Maintenance",
    "question": "Which maintenance type is most closely associated with correcting defects?",
    "options": [
      "Adaptive",
      "Corrective",
      "Preventive",
      "Perfective"
    ],
    "answerIndex": 1,
    "explanation": "Corrective maintenance fixes bugs."
  },
  {
    "id": 161,
    "category": "Software Maintenance",
    "question": "A calculation error is reported after deployment. Which maintenance is required?",
    "options": [
      "Adaptive",
      "Corrective",
      "Perfective",
      "Preventive"
    ],
    "answerIndex": 1,
    "explanation": "Fixing calculation errors is Corrective maintenance."
  },
  {
    "id": 162,
    "category": "Software Maintenance",
    "question": "Corrective maintenance is mainly performed because of:",
    "options": [
      "Hardware upgrades",
      "Software defects",
      "User suggestions",
      "Performance improvements"
    ],
    "answerIndex": 1,
    "explanation": "Defects/bugs trigger corrective maintenance."
  },
  {
    "id": 163,
    "category": "Software Maintenance",
    "question": "Fixing an incorrect tax calculation in payroll software is an example of:",
    "options": [
      "Adaptive Maintenance",
      "Corrective Maintenance",
      "Perfective Maintenance",
      "Preventive Maintenance"
    ],
    "answerIndex": 1,
    "explanation": "Fixing incorrect logic is Corrective maintenance."
  },
  {
    "id": 164,
    "category": "Software Maintenance",
    "question": "Which maintenance responds to changes in the external environment?",
    "options": [
      "Corrective",
      "Adaptive",
      "Perfective",
      "Preventive"
    ],
    "answerIndex": 1,
    "explanation": "Adaptive maintenance handles external environment shifts."
  },
  {
    "id": 165,
    "category": "Software Maintenance",
    "question": "Software is modified because government tax regulations have changed. This is:",
    "options": [
      "Corrective Maintenance",
      "Adaptive Maintenance",
      "Perfective Maintenance",
      "Preventive Maintenance"
    ],
    "answerIndex": 1,
    "explanation": "Adapting to external regulatory changes is Adaptive maintenance."
  },
  {
    "id": 166,
    "category": "Software Maintenance",
    "question": "Updating software to support a newly released browser is:",
    "options": [
      "Corrective",
      "Adaptive",
      "Perfective",
      "Preventive"
    ],
    "answerIndex": 1,
    "explanation": "Supporting new browser versions is Adaptive maintenance."
  },
  {
    "id": 167,
    "category": "Software Maintenance",
    "question": "Adding a 'Dark Mode' feature after user requests is:",
    "options": [
      "Corrective",
      "Adaptive",
      "Perfective",
      "Preventive"
    ],
    "answerIndex": 2,
    "explanation": "Adding user-requested enhancements is Perfective maintenance."
  },
  {
    "id": 168,
    "category": "Software Maintenance",
    "question": "Improving system response time without fixing bugs is:",
    "options": [
      "Corrective",
      "Adaptive",
      "Perfective",
      "Preventive"
    ],
    "answerIndex": 2,
    "explanation": "Optimizing performance is Perfective maintenance."
  },
  {
    "id": 169,
    "category": "Software Maintenance",
    "question": "Enhancing the user interface based on customer feedback is:",
    "options": [
      "Corrective",
      "Adaptive",
      "Perfective",
      "Preventive"
    ],
    "answerIndex": 2,
    "explanation": "UI enhancements are Perfective maintenance."
  },
  {
    "id": 170,
    "category": "Software Maintenance",
    "question": "Refactoring poorly written code to reduce future maintenance effort is:",
    "options": [
      "Corrective",
      "Adaptive",
      "Perfective",
      "Preventive"
    ],
    "answerIndex": 3,
    "explanation": "Code refactoring for future maintainability is Preventive maintenance."
  },
  {
    "id": 171,
    "category": "Software Maintenance",
    "question": "Updating documentation to reduce future maintenance problems is considered:",
    "options": [
      "Corrective",
      "Adaptive",
      "Perfective",
      "Preventive"
    ],
    "answerIndex": 3,
    "explanation": "Preventive documentation updates lower future risk."
  },
  {
    "id": 172,
    "category": "Software Maintenance",
    "question": "Which maintenance focuses on improving software maintainability?",
    "options": [
      "Corrective",
      "Adaptive",
      "Perfective",
      "Preventive"
    ],
    "answerIndex": 3,
    "explanation": "Preventive maintenance improves future code health."
  },
  {
    "id": 173,
    "category": "Software Maintenance",
    "question": "A company upgrades its servers, requiring changes to the software so it can run properly.",
    "options": [
      "Corrective",
      "Adaptive",
      "Perfective",
      "Preventive"
    ],
    "answerIndex": 1,
    "explanation": "Server hardware/OS upgrade changes are Adaptive maintenance."
  },
  {
    "id": 174,
    "category": "Software Maintenance",
    "question": "Users request a new export-to-PDF feature.",
    "options": [
      "Corrective",
      "Adaptive",
      "Perfective",
      "Preventive"
    ],
    "answerIndex": 2,
    "explanation": "Adding new export features is Perfective maintenance."
  },
  {
    "id": 175,
    "category": "Software Maintenance",
    "question": "Developers repair a login failure reported by users.",
    "options": [
      "Adaptive",
      "Corrective",
      "Perfective",
      "Preventive"
    ],
    "answerIndex": 1,
    "explanation": "Repairing login failures is Corrective maintenance."
  },
  {
    "id": 176,
    "category": "Software Maintenance",
    "question": "Developers reorganize the source code to improve readability and reduce future errors.",
    "options": [
      "Corrective",
      "Adaptive",
      "Perfective",
      "Preventive"
    ],
    "answerIndex": 3,
    "explanation": "Reorganizing code for future readability is Preventive maintenance."
  },
  {
    "id": 177,
    "category": "Software Maintenance",
    "question": "An application is updated to comply with newly introduced banking regulations.",
    "options": [
      "Corrective",
      "Adaptive",
      "Perfective",
      "Preventive"
    ],
    "answerIndex": 1,
    "explanation": "Complying with external legal/banking shifts is Adaptive maintenance."
  },
  {
    "id": 178,
    "category": "Software Maintenance",
    "question": "Developers optimize database queries to improve application speed without changing functionality.",
    "options": [
      "Corrective",
      "Adaptive",
      "Perfective",
      "Preventive"
    ],
    "answerIndex": 2,
    "explanation": "Speed optimization is Perfective maintenance."
  },
  {
    "id": 179,
    "category": "Software Maintenance",
    "question": "Which of the following is NOT a recognized type of software maintenance?",
    "options": [
      "Corrective",
      "Adaptive",
      "Perfective",
      "Predictive"
    ],
    "answerIndex": 3,
    "explanation": "Predictive is not one of the 4 standard maintenance types."
  },
  {
    "id": 180,
    "category": "Software Maintenance",
    "question": "Which statement about software maintenance is correct?",
    "options": [
      "It is required only for failed projects.",
      "It ends immediately after software deployment.",
      "It continues throughout the operational life of the software.",
      "It replaces software testing."
    ],
    "answerIndex": 2,
    "explanation": "Maintenance spans the entire operational lifetime of software."
  },
  {
    "id": 181,
    "category": "Agile & DevOps",
    "question": "Agile software development primarily emphasizes:",
    "options": [
      "Extensive documentation",
      "Customer collaboration and adaptability",
      "Sequential development",
      "Fixed requirements"
    ],
    "answerIndex": 1,
    "explanation": "Agile values customer collaboration and responding to change."
  },
  {
    "id": 182,
    "category": "Agile & DevOps",
    "question": "Agile development follows:",
    "options": [
      "Linear development",
      "Iterative and incremental development",
      "One-time delivery",
      "Reverse engineering"
    ],
    "answerIndex": 1,
    "explanation": "Agile combines iterative refinement with incremental delivery."
  },
  {
    "id": 183,
    "category": "Agile & DevOps",
    "question": "Agile is best suited for projects with:",
    "options": [
      "Stable requirements",
      "Frequently changing requirements",
      "No customer involvement",
      "Fixed budget only"
    ],
    "answerIndex": 1,
    "explanation": "Agile excels when project scope and requirements evolve."
  },
  {
    "id": 184,
    "category": "Agile & DevOps",
    "question": "Which of the following is a core Agile principle?",
    "options": [
      "Deliver software only after complete documentation",
      "Deliver working software frequently",
      "Avoid customer feedback",
      "Complete all coding before testing"
    ],
    "answerIndex": 1,
    "explanation": "Frequent delivery of working software is a key Agile principle."
  },
  {
    "id": 185,
    "category": "Agile & DevOps",
    "question": "Which Agile characteristic distinguishes it from the Waterfall model?",
    "options": [
      "Sequential phases",
      "Continuous customer feedback",
      "One-time testing",
      "Fixed requirements"
    ],
    "answerIndex": 1,
    "explanation": "Continuous customer feedback throughout the loop sets Agile apart."
  },
  {
    "id": 186,
    "category": "Agile & DevOps",
    "question": "In Scrum, who represents the customer's interests?",
    "options": [
      "Scrum Master",
      "Product Owner",
      "Tester",
      "Developer"
    ],
    "answerIndex": 1,
    "explanation": "The Product Owner defines backlog items to represent customer interests."
  },
  {
    "id": 187,
    "category": "Agile & DevOps",
    "question": "Who ensures that Scrum practices are properly followed?",
    "options": [
      "Product Owner",
      "Scrum Master",
      "Client",
      "Database Administrator"
    ],
    "answerIndex": 1,
    "explanation": "The Scrum Master coaches the team and enforces Scrum process."
  },
  {
    "id": 188,
    "category": "Agile & DevOps",
    "question": "Who develops the software in Scrum?",
    "options": [
      "Product Owner",
      "Scrum Master",
      "Development Team",
      "Customer"
    ],
    "answerIndex": 2,
    "explanation": "The cross-functional Development Team builds working increments."
  },
  {
    "id": 189,
    "category": "Agile & DevOps",
    "question": "The Scrum Master is primarily responsible for:",
    "options": [
      "Writing source code",
      "Approving software licenses",
      "Facilitating the Scrum process",
      "Managing the database"
    ],
    "answerIndex": 2,
    "explanation": "The Scrum Master facilitates ceremonies and removes team blockers."
  },
  {
    "id": 190,
    "category": "Agile & DevOps",
    "question": "A Sprint is:",
    "options": [
      "A software testing technique",
      "A fixed time-boxed development iteration",
      "A programming language",
      "A design document"
    ],
    "answerIndex": 1,
    "explanation": "A Sprint is a 1 to 4 week time-boxed iteration in Scrum."
  },
  {
    "id": 191,
    "category": "Agile & DevOps",
    "question": "At the end of every Sprint, the team should deliver:",
    "options": [
      "Documentation only",
      "Source code only",
      "A working software increment",
      "Database schema only"
    ],
    "answerIndex": 2,
    "explanation": "Every sprint must yield a potentially shippable working increment."
  },
  {
    "id": 192,
    "category": "Agile & DevOps",
    "question": "Sprint duration is usually:",
    "options": [
      "Six months",
      "One year",
      "One to four weeks",
      "Five years"
    ],
    "answerIndex": 2,
    "explanation": "Scrum sprints typically run 1 to 4 weeks long."
  },
  {
    "id": 193,
    "category": "Agile & DevOps",
    "question": "Which event is held every day during a Sprint?",
    "options": [
      "Sprint Review",
      "Sprint Planning",
      "Daily Scrum",
      "Sprint Retrospective"
    ],
    "answerIndex": 2,
    "explanation": "The 15-minute Daily Standup/Scrum occurs every workday."
  },
  {
    "id": 194,
    "category": "Agile & DevOps",
    "question": "User Stories mainly describe:",
    "options": [
      "Database design",
      "User requirements from the user's perspective",
      "Test cases",
      "Source code"
    ],
    "answerIndex": 1,
    "explanation": "User stories capture functional requirements from end-user perspective."
  },
  {
    "id": 195,
    "category": "Agile & DevOps",
    "question": "User Stories are commonly associated with:",
    "options": [
      "Waterfall",
      "Agile",
      "Spiral",
      "V-Model"
    ],
    "answerIndex": 1,
    "explanation": "User stories are standard Agile backlog items."
  },
  {
    "id": 196,
    "category": "Agile & DevOps",
    "question": "A User Story typically begins with:",
    "options": [
      "'The database should...'",
      "'As a user, I want...'",
      "'The compiler should...'",
      "'The programmer will...'"
    ],
    "answerIndex": 1,
    "explanation": "Standard template: 'As a <user>, I want <feature> so that <benefit>'."
  },
  {
    "id": 197,
    "category": "Agile & DevOps",
    "question": "Which UML diagram is most closely related to User Stories?",
    "options": [
      "Sequence Diagram",
      "Activity Diagram",
      "Use Case Diagram",
      "Deployment Diagram"
    ],
    "answerIndex": 2,
    "explanation": "Use Case diagrams map directly to user interactions and stories."
  },
  {
    "id": 198,
    "category": "Agile & DevOps",
    "question": "The Product Backlog is:",
    "options": [
      "A testing document",
      "A prioritized list of project requirements",
      "A database",
      "A programming language"
    ],
    "answerIndex": 1,
    "explanation": "The Product Backlog holds all ordered project requirements."
  },
  {
    "id": 199,
    "category": "Agile & DevOps",
    "question": "Who prioritizes the Product Backlog?",
    "options": [
      "Scrum Master",
      "Product Owner",
      "Developer",
      "Tester"
    ],
    "answerIndex": 1,
    "explanation": "The Product Owner has sole authority to prioritize backlog items."
  },
  {
    "id": 200,
    "category": "Agile & DevOps",
    "question": "The Sprint Backlog contains:",
    "options": [
      "Completed software",
      "Tasks selected for the current Sprint",
      "Customer complaints",
      "Test reports"
    ],
    "answerIndex": 1,
    "explanation": "The Sprint Backlog contains work items committed for the active sprint."
  },
  {
    "id": 201,
    "category": "Agile & DevOps",
    "question": "DevOps mainly promotes collaboration between:",
    "options": [
      "Designers and customers",
      "Development and Operations teams",
      "Testers and clients",
      "Developers and accountants"
    ],
    "answerIndex": 1,
    "explanation": "DevOps bridges Development (Dev) and Operations (Ops)."
  },
  {
    "id": 202,
    "category": "Agile & DevOps",
    "question": "CI in DevOps stands for:",
    "options": [
      "Continuous Inspection",
      "Continuous Integration",
      "Continuous Installation",
      "Computer Integration"
    ],
    "answerIndex": 1,
    "explanation": "CI = Continuous Integration."
  },
  {
    "id": 203,
    "category": "Agile & DevOps",
    "question": "Continuous Integration means:",
    "options": [
      "Software is deployed once a year",
      "Developers frequently merge code into a shared repository",
      "Requirements never change",
      "Documentation is skipped"
    ],
    "answerIndex": 1,
    "explanation": "CI automatically builds and tests code whenever merged to main branch."
  },
  {
    "id": 204,
    "category": "Agile & DevOps",
    "question": "CD commonly stands for:",
    "options": [
      "Code Debugging",
      "Continuous Deployment",
      "Continuous Delivery",
      "Both B and C are commonly used depending on context"
    ],
    "answerIndex": 3,
    "explanation": "CD stands for Continuous Delivery or Continuous Deployment."
  },
  {
    "id": 205,
    "category": "Agile & DevOps",
    "question": "The primary objective of Continuous Delivery is to:",
    "options": [
      "Increase project documentation",
      "Release software quickly and reliably",
      "Delay testing",
      "Avoid automation"
    ],
    "answerIndex": 1,
    "explanation": "Continuous Delivery ensures software can be released reliably at any time."
  },
  {
    "id": 206,
    "category": "Agile & DevOps",
    "question": "A software company releases a working version every two weeks and receives customer feedback after each release.",
    "options": [
      "Waterfall",
      "Agile",
      "V-Model",
      "Prototype"
    ],
    "answerIndex": 1,
    "explanation": "Two-week iterations with continuous feedback is Agile."
  },
  {
    "id": 207,
    "category": "Agile & DevOps",
    "question": "Developers automatically build and test software whenever new code is committed.",
    "options": [
      "Reverse Engineering",
      "Continuous Integration",
      "Corrective Maintenance",
      "Requirement Validation"
    ],
    "answerIndex": 1,
    "explanation": "Automated build and test on commit is Continuous Integration (CI)."
  },
  {
    "id": 208,
    "category": "Agile & DevOps",
    "question": "A Product Owner rearranges project features according to customer priorities.",
    "options": [
      "Sprint Planning",
      "Product Backlog Management",
      "Integration Testing",
      "White-box Testing"
    ],
    "answerIndex": 1,
    "explanation": "Ordering backlog items by value is Product Backlog Management."
  },
  {
    "id": 209,
    "category": "Agile & DevOps",
    "question": "A Scrum team meets every morning for a 15-minute discussion of progress and blockers.",
    "options": [
      "Sprint Review",
      "Sprint Planning",
      "Daily Scrum",
      "Retrospective"
    ],
    "answerIndex": 2,
    "explanation": "Daily 15-minute sync is the Daily Scrum."
  },
  {
    "id": 210,
    "category": "Agile & DevOps",
    "question": "Which statement best describes Agile?",
    "options": [
      "Requirements must never change.",
      "Customers participate only after deployment.",
      "Software is developed in small increments with continuous customer feedback.",
      "All documentation must be completed before coding."
    ],
    "answerIndex": 2,
    "explanation": "Agile focuses on incremental delivery with constant feedback."
  },
  {
    "id": 211,
    "category": "Project Management",
    "question": "Software Project Management primarily deals with:",
    "options": [
      "Writing source code",
      "Planning, organizing, and controlling software projects",
      "Database normalization",
      "Network configuration"
    ],
    "answerIndex": 1,
    "explanation": "Project management handles planning, scoping, resources, and execution control."
  },
  {
    "id": 212,
    "category": "Project Management",
    "question": "The primary objective of project management is to:",
    "options": [
      "Increase project documentation only",
      "Complete the project within scope, time, and budget",
      "Eliminate software testing",
      "Replace system analysis"
    ],
    "answerIndex": 1,
    "explanation": "Project management aims to deliver agreed scope on schedule and within budget."
  },
  {
    "id": 213,
    "category": "Project Management",
    "question": "Which of the following is known as the 'triple constraint' of project management?",
    "options": [
      "Coding, Testing, Maintenance",
      "Scope, Time, Cost",
      "Design, Coding, Testing",
      "Quality, Security, Reliability"
    ],
    "answerIndex": 1,
    "explanation": "The triple constraint consists of Scope, Time, and Cost."
  },
  {
    "id": 214,
    "category": "Project Management",
    "question": "Who is primarily responsible for managing a software project?",
    "options": [
      "Database Administrator",
      "Project Manager",
      "Customer",
      "Tester"
    ],
    "answerIndex": 1,
    "explanation": "The Project Manager oversees project delivery."
  },
  {
    "id": 215,
    "category": "Project Management",
    "question": "Which activity is usually performed first in project management?",
    "options": [
      "Coding",
      "Project Planning",
      "Testing",
      "Deployment"
    ],
    "answerIndex": 1,
    "explanation": "Project Planning precedes operational execution."
  },
  {
    "id": 216,
    "category": "Project Management",
    "question": "The Critical Path is:",
    "options": [
      "The longest sequence of dependent tasks determining project duration",
      "The shortest path in the project",
      "The most expensive tasks",
      "The easiest project activities"
    ],
    "answerIndex": 0,
    "explanation": "Critical Path is the longest path of dependent tasks; it dictates minimum project duration."
  },
  {
    "id": 217,
    "category": "Project Management",
    "question": "Delay in a critical path activity will:",
    "options": [
      "Have no effect",
      "Delay the entire project",
      "Reduce project cost",
      "Eliminate project risk"
    ],
    "answerIndex": 1,
    "explanation": "Any delay on critical path directly delays the overall completion date."
  },
  {
    "id": 218,
    "category": "Project Management",
    "question": "Activities on the Critical Path have:",
    "options": [
      "Maximum flexibility",
      "Zero float (slack)",
      "Lowest priority",
      "Minimum cost"
    ],
    "answerIndex": 1,
    "explanation": "Critical path tasks have zero float (slack time)."
  },
  {
    "id": 219,
    "category": "Project Management",
    "question": "Which project management technique identifies the minimum project completion time?",
    "options": [
      "Scrum",
      "RAD",
      "Critical Path Method (CPM)",
      "Waterfall"
    ],
    "answerIndex": 2,
    "explanation": "CPM determines the shortest overall project schedule."
  },
  {
    "id": 220,
    "category": "Project Management",
    "question": "The main purpose of identifying the Critical Path is to:",
    "options": [
      "Reduce documentation",
      "Identify activities that directly affect project completion time",
      "Improve coding quality",
      "Eliminate software testing"
    ],
    "answerIndex": 1,
    "explanation": "Focuses management attention on schedule-critical activities."
  },
  {
    "id": 221,
    "category": "Project Management",
    "question": "A Gantt Chart is primarily used to:",
    "options": [
      "Test software",
      "Schedule and track project activities",
      "Design databases",
      "Normalize relations"
    ],
    "answerIndex": 1,
    "explanation": "Gantt Charts visually display project schedules and task timelines."
  },
  {
    "id": 222,
    "category": "Project Management",
    "question": "A Gantt Chart represents project tasks using:",
    "options": [
      "Pie charts",
      "Horizontal bars",
      "Flowcharts",
      "Decision trees"
    ],
    "answerIndex": 1,
    "explanation": "Gantt charts render timeline activities using horizontal bars."
  },
  {
    "id": 223,
    "category": "Project Management",
    "question": "Which information is commonly shown in a Gantt Chart?",
    "options": [
      "Source code",
      "Database schema",
      "Task duration and schedule",
      "Test cases"
    ],
    "answerIndex": 2,
    "explanation": "Task start dates, end dates, durations, and progress are shown."
  },
  {
    "id": 224,
    "category": "Project Management",
    "question": "Gantt Charts are mainly useful for:",
    "options": [
      "Network routing",
      "Monitoring project progress",
      "White-box testing",
      "Requirement elicitation"
    ],
    "answerIndex": 1,
    "explanation": "Gantt charts enable easy tracking of task execution vs schedule."
  },
  {
    "id": 225,
    "category": "Project Management",
    "question": "PERT stands for:",
    "options": [
      "Project Evaluation and Resource Technique",
      "Program Evaluation and Review Technique",
      "Project Execution and Review Tool",
      "Program Execution and Resource Tracking"
    ],
    "answerIndex": 1,
    "explanation": "PERT = Program Evaluation and Review Technique."
  },
  {
    "id": 226,
    "category": "Project Management",
    "question": "PERT is mainly used when:",
    "options": [
      "Activity durations are exactly known",
      "Activity durations are uncertain",
      "Software has already been delivered",
      "Coding is completed"
    ],
    "answerIndex": 1,
    "explanation": "PERT handles probabilistic/uncertain activity durations."
  },
  {
    "id": 227,
    "category": "Project Management",
    "question": "Which technique uses optimistic, most likely, and pessimistic time estimates?",
    "options": [
      "Gantt Chart",
      "CPM",
      "PERT",
      "Scrum"
    ],
    "answerIndex": 2,
    "explanation": "PERT uses 3-point estimation (optimistic, most likely, pessimistic)."
  },
  {
    "id": 228,
    "category": "Project Management",
    "question": "PERT is especially suitable for:",
    "options": [
      "Repetitive manufacturing",
      "Research and development projects",
      "Payroll processing",
      "Static websites"
    ],
    "answerIndex": 1,
    "explanation": "PERT suits R&D projects with high timeline uncertainty."
  },
  {
    "id": 229,
    "category": "Project Management",
    "question": "Which technique assumes deterministic activity durations?",
    "options": [
      "PERT",
      "CPM",
      "Scrum",
      "Agile"
    ],
    "answerIndex": 1,
    "explanation": "CPM assumes known, fixed (deterministic) task durations."
  },
  {
    "id": 230,
    "category": "Project Management",
    "question": "Which technique considers uncertainty in activity durations?",
    "options": [
      "CPM",
      "PERT",
      "Waterfall",
      "RAD"
    ],
    "answerIndex": 1,
    "explanation": "PERT incorporates probabilistic duration modeling."
  },
  {
    "id": 231,
    "category": "Project Management",
    "question": "Which statement is correct?",
    "options": [
      "CPM uses three time estimates.",
      "PERT uses three time estimates.",
      "Both use identical calculations.",
      "Neither estimates project duration."
    ],
    "answerIndex": 1,
    "explanation": "PERT uses 3 time estimates (O, M, P) whereas CPM uses 1."
  },
  {
    "id": 232,
    "category": "Project Management",
    "question": "Risk in software engineering refers to:",
    "options": [
      "Guaranteed project failure",
      "A potential event that may negatively affect the project",
      "Software documentation",
      "Coding standards"
    ],
    "answerIndex": 1,
    "explanation": "Risk is an uncertain future event that could harm project goals."
  },
  {
    "id": 233,
    "category": "Project Management",
    "question": "The first step in risk management is:",
    "options": [
      "Risk Identification",
      "Risk Mitigation",
      "Risk Monitoring",
      "Risk Recovery"
    ],
    "answerIndex": 0,
    "explanation": "Risk management begins by identifying potential risks."
  },
  {
    "id": 234,
    "category": "Project Management",
    "question": "The primary objective of risk management is to:",
    "options": [
      "Eliminate software testing",
      "Reduce the impact of potential project problems",
      "Increase documentation",
      "Delay project completion"
    ],
    "answerIndex": 1,
    "explanation": "Risk management minimizes likelihood and severity of negative risks."
  },
  {
    "id": 235,
    "category": "Project Management",
    "question": "A project activity is delayed by two days, causing the entire project to finish two days late. The activity belongs to:",
    "options": [
      "Non-critical path",
      "Critical Path",
      "Product Backlog",
      "Sprint"
    ],
    "answerIndex": 1,
    "explanation": "Activities whose delay extends project completion are on the Critical Path."
  },
  {
    "id": 236,
    "category": "Project Management",
    "question": "A manager wants a visual chart showing task durations across a calendar timeline.",
    "options": [
      "CPM",
      "Gantt Chart",
      "SRS",
      "UML"
    ],
    "answerIndex": 1,
    "explanation": "Gantt Charts visually display calendar-based activity schedules."
  },
  {
    "id": 237,
    "category": "Project Management",
    "question": "A project has uncertain activity durations because it involves research on a new technology.",
    "options": [
      "CPM",
      "PERT",
      "Waterfall",
      "Prototype"
    ],
    "answerIndex": 1,
    "explanation": "PERT accommodates schedule uncertainty in novel R&D tasks."
  },
  {
    "id": 238,
    "category": "Project Management",
    "question": "A project manager identifies possible cyberattacks, budget overruns, and staff shortages before development begins.",
    "options": [
      "Requirement Validation",
      "Quality Assurance",
      "Risk Identification",
      "Integration Testing"
    ],
    "answerIndex": 2,
    "explanation": "Recognizing future threats early is Risk Identification."
  },
  {
    "id": 239,
    "category": "Project Management",
    "question": "A software company prepares contingency plans in case key developers resign.",
    "options": [
      "Requirement Analysis",
      "Risk Mitigation",
      "White-box Testing",
      "Corrective Maintenance"
    ],
    "answerIndex": 1,
    "explanation": "Creating backup plans to reduce risk impact is Risk Mitigation."
  },
  {
    "id": 240,
    "category": "Project Management",
    "question": "Which statement best describes successful software project management?",
    "options": [
      "Completing the project with maximum documentation only.",
      "Finishing coding as quickly as possible.",
      "Delivering the required software within agreed scope, time, cost, and quality.",
      "Eliminating customer involvement."
    ],
    "answerIndex": 2,
    "explanation": "Success means meeting scope, schedule, budget, and quality standards."
  },
  {
    "id": 241,
    "category": "UML & Quality Attributes",
    "question": "UML stands for:",
    "options": [
      "Universal Modeling Language",
      "Unified Modeling Language",
      "Unified Management Language",
      "Universal Management Language"
    ],
    "answerIndex": 1,
    "explanation": "UML = Unified Modeling Language."
  },
  {
    "id": 242,
    "category": "UML & Quality Attributes",
    "question": "Which UML diagram represents the interaction between users and the system?",
    "options": [
      "Class Diagram",
      "Use Case Diagram",
      "Sequence Diagram",
      "Activity Diagram"
    ],
    "answerIndex": 1,
    "explanation": "Use Case diagrams illustrate system functionality from user perspective."
  },
  {
    "id": 243,
    "category": "UML & Quality Attributes",
    "question": "Which UML diagram shows the static structure of a system?",
    "options": [
      "Class Diagram",
      "Sequence Diagram",
      "Activity Diagram",
      "Use Case Diagram"
    ],
    "answerIndex": 0,
    "explanation": "Class diagrams depict system classes, attributes, methods, and static relationships."
  },
  {
    "id": 244,
    "category": "UML & Quality Attributes",
    "question": "Which UML diagram illustrates the flow of activities in a process?",
    "options": [
      "Class Diagram",
      "Sequence Diagram",
      "Activity Diagram",
      "Component Diagram"
    ],
    "answerIndex": 2,
    "explanation": "Activity diagrams model procedural workflow logic."
  },
  {
    "id": 245,
    "category": "UML & Quality Attributes",
    "question": "Which UML diagram emphasizes the sequence of messages exchanged between objects?",
    "options": [
      "Use Case Diagram",
      "Sequence Diagram",
      "Activity Diagram",
      "Deployment Diagram"
    ],
    "answerIndex": 1,
    "explanation": "Sequence diagrams detail time-ordered object interaction messages."
  },
  {
    "id": 246,
    "category": "UML & Quality Attributes",
    "question": "User Stories are most closely related to which UML diagram?",
    "options": [
      "Class Diagram",
      "Use Case Diagram",
      "State Diagram",
      "Deployment Diagram"
    ],
    "answerIndex": 1,
    "explanation": "Use Case diagrams align with User Story requirements."
  },
  {
    "id": 247,
    "category": "UML & Quality Attributes",
    "question": "Which UML diagram is most useful during requirement analysis?",
    "options": [
      "Class Diagram",
      "Use Case Diagram",
      "Component Diagram",
      "Deployment Diagram"
    ],
    "answerIndex": 1,
    "explanation": "Use Case diagrams capture user domain requirements."
  },
  {
    "id": 248,
    "category": "UML & Quality Attributes",
    "question": "Which UML diagram mainly describes object relationships?",
    "options": [
      "Class Diagram",
      "Activity Diagram",
      "Sequence Diagram",
      "Use Case Diagram"
    ],
    "answerIndex": 0,
    "explanation": "Class diagrams map static object/class associations, inheritance, and dependencies."
  },
  {
    "id": 249,
    "category": "UML & Quality Attributes",
    "question": "Verification answers the question:",
    "options": [
      "'Are we building the product right?'",
      "'Are we building the right product?'",
      "Is the software secure?",
      "Is the software maintainable?"
    ],
    "answerIndex": 0,
    "explanation": "Verification checks conformity to specifications ('Are we building the product right?')."
  },
  {
    "id": 250,
    "category": "UML & Quality Attributes",
    "question": "Validation answers the question:",
    "options": [
      "Are we building the product right?",
      "'Are we building the right product?'",
      "Is the software bug-free?",
      "Is the database normalized?"
    ],
    "answerIndex": 1,
    "explanation": "Validation checks if product meets customer needs ('Are we building the right product?')."
  },
  {
    "id": 251,
    "category": "UML & Quality Attributes",
    "question": "Verification mainly checks:",
    "options": [
      "Customer satisfaction",
      "Whether the product conforms to specifications",
      "Hardware compatibility",
      "Network performance"
    ],
    "answerIndex": 1,
    "explanation": "Verification checks compliance against specified design/SRS documents."
  },
  {
    "id": 252,
    "category": "UML & Quality Attributes",
    "question": "Validation mainly ensures:",
    "options": [
      "Correct source code formatting",
      "Software satisfies customer needs",
      "Efficient database indexing",
      "Memory optimization"
    ],
    "answerIndex": 1,
    "explanation": "Validation ensures the product solves actual user business needs."
  },
  {
    "id": 253,
    "category": "UML & Quality Attributes",
    "question": "Which activity is generally associated with verification?",
    "options": [
      "Reviews and inspections",
      "User Acceptance Testing",
      "Beta Testing",
      "Deployment"
    ],
    "answerIndex": 0,
    "explanation": "Code reviews, document inspections, and walkthroughs are verification tasks."
  },
  {
    "id": 254,
    "category": "UML & Quality Attributes",
    "question": "Which activity is most closely associated with validation?",
    "options": [
      "Code Review",
      "Walkthrough",
      "Acceptance Testing",
      "Inspection"
    ],
    "answerIndex": 2,
    "explanation": "User Acceptance Testing is the primary validation activity."
  },
  {
    "id": 255,
    "category": "UML & Quality Attributes",
    "question": "Alpha Testing is generally performed:",
    "options": [
      "Within the developer's organization",
      "At the customer's workplace",
      "After software retirement",
      "Before coding"
    ],
    "answerIndex": 0,
    "explanation": "Alpha testing occurs in-house at the developer's organization."
  },
  {
    "id": 256,
    "category": "UML & Quality Attributes",
    "question": "Beta Testing is usually performed:",
    "options": [
      "Only by developers",
      "By selected end users",
      "During coding",
      "During requirement analysis"
    ],
    "answerIndex": 1,
    "explanation": "Beta testing is performed by external target users."
  },
  {
    "id": 257,
    "category": "UML & Quality Attributes",
    "question": "The main objective of Beta Testing is:",
    "options": [
      "Measure CPU utilization",
      "Obtain real-world user feedback",
      "Improve source code readability",
      "Normalize databases"
    ],
    "answerIndex": 1,
    "explanation": "Beta testing gathers authentic user feedback prior to full launch."
  },
  {
    "id": 258,
    "category": "UML & Quality Attributes",
    "question": "Which testing occurs first?",
    "options": [
      "Alpha Testing",
      "Beta Testing",
      "Maintenance",
      "Retirement"
    ],
    "answerIndex": 0,
    "explanation": "Alpha testing precedes external Beta testing."
  },
  {
    "id": 259,
    "category": "UML & Quality Attributes",
    "question": "Smoke Testing verifies:",
    "options": [
      "Every feature in detail",
      "Basic functionality of a new build",
      "Customer requirements",
      "Performance"
    ],
    "answerIndex": 1,
    "explanation": "Smoke testing verifies basic build stability."
  },
  {
    "id": 260,
    "category": "UML & Quality Attributes",
    "question": "Sanity Testing mainly checks:",
    "options": [
      "Entire software",
      "Specific modified functionality",
      "Database backup",
      "Hardware installation"
    ],
    "answerIndex": 1,
    "explanation": "Sanity testing checks targeted fixes."
  },
  {
    "id": 261,
    "category": "UML & Quality Attributes",
    "question": "Smoke Testing is also known as:",
    "options": [
      "Functional Testing",
      "Build Verification Testing",
      "Structural Testing",
      "Acceptance Testing"
    ],
    "answerIndex": 1,
    "explanation": "Smoke testing = Build Verification Testing."
  },
  {
    "id": 262,
    "category": "UML & Quality Attributes",
    "question": "Which testing is narrower in scope?",
    "options": [
      "Smoke Testing",
      "Sanity Testing",
      "System Testing",
      "Integration Testing"
    ],
    "answerIndex": 1,
    "explanation": "Sanity testing is focused narrowly on specific changes."
  },
  {
    "id": 263,
    "category": "UML & Quality Attributes",
    "question": "Which quality attribute measures the probability of failure-free operation?",
    "options": [
      "Portability",
      "Reliability",
      "Usability",
      "Scalability"
    ],
    "answerIndex": 1,
    "explanation": "Reliability is probability of failure-free operation over a time period."
  },
  {
    "id": 264,
    "category": "UML & Quality Attributes",
    "question": "Which quality attribute refers to ease of learning and using software?",
    "options": [
      "Reliability",
      "Usability",
      "Portability",
      "Availability"
    ],
    "answerIndex": 1,
    "explanation": "Usability measures user-friendliness and learning ease."
  },
  {
    "id": 265,
    "category": "UML & Quality Attributes",
    "question": "Which quality attribute indicates that software can run on multiple platforms?",
    "options": [
      "Reliability",
      "Maintainability",
      "Portability",
      "Efficiency"
    ],
    "answerIndex": 2,
    "explanation": "Portability measures adaptability across different environments."
  },
  {
    "id": 266,
    "category": "UML & Quality Attributes",
    "question": "Which quality attribute measures how easily software can be modified?",
    "options": [
      "Availability",
      "Maintainability",
      "Reliability",
      "Performance"
    ],
    "answerIndex": 1,
    "explanation": "Maintainability measures ease of fixing bugs or adding updates."
  },
  {
    "id": 267,
    "category": "UML & Quality Attributes",
    "question": "Which quality attribute ensures software remains operational whenever needed?",
    "options": [
      "Performance",
      "Portability",
      "Availability",
      "Reusability"
    ],
    "answerIndex": 2,
    "explanation": "Availability ensures system uptime when accessed."
  },
  {
    "id": 268,
    "category": "UML & Quality Attributes",
    "question": "Which quality attribute refers to efficient use of system resources?",
    "options": [
      "Security",
      "Efficiency",
      "Availability",
      "Correctness"
    ],
    "answerIndex": 1,
    "explanation": "Efficiency measures optimal use of memory, CPU, and bandwidth."
  },
  {
    "id": 269,
    "category": "UML & Quality Attributes",
    "question": "Confidentiality, integrity, and authentication are mainly associated with:",
    "options": [
      "Performance",
      "Security",
      "Reliability",
      "Maintainability"
    ],
    "answerIndex": 1,
    "explanation": "Security protects data confidentiality, integrity, and access controls."
  },
  {
    "id": 270,
    "category": "UML & Quality Attributes",
    "question": "Which quality attribute measures the ability of software to handle increasing workload?",
    "options": [
      "Reliability",
      "Portability",
      "Scalability",
      "Correctness"
    ],
    "answerIndex": 2,
    "explanation": "Scalability is the capacity to handle growing workloads."
  },
  {
    "id": 271,
    "category": "UML & Quality Attributes",
    "question": "Which document serves as the foundation for software design?",
    "options": [
      "Test Plan",
      "SRS",
      "User Manual",
      "Installation Guide"
    ],
    "answerIndex": 1,
    "explanation": "SRS forms the baseline for architectural design."
  },
  {
    "id": 272,
    "category": "UML & Quality Attributes",
    "question": "Which SDLC model is most suitable when risk analysis is performed in every iteration?",
    "options": [
      "Waterfall",
      "Spiral",
      "Prototype",
      "V-Model"
    ],
    "answerIndex": 1,
    "explanation": "Spiral model integrates iterative risk assessment."
  },
  {
    "id": 273,
    "category": "UML & Quality Attributes",
    "question": "Which maintenance type improves software performance without changing its main functionality?",
    "options": [
      "Corrective",
      "Adaptive",
      "Perfective",
      "Preventive"
    ],
    "answerIndex": 2,
    "explanation": "Performance optimization is Perfective maintenance."
  },
  {
    "id": 274,
    "category": "UML & Quality Attributes",
    "question": "Which testing type examines internal program logic?",
    "options": [
      "Black-box Testing",
      "White-box Testing",
      "Acceptance Testing",
      "Load Testing"
    ],
    "answerIndex": 1,
    "explanation": "White-box testing inspects internal program logic."
  },
  {
    "id": 275,
    "category": "UML & Quality Attributes",
    "question": "Which requirement specifies that the system should respond within three seconds?",
    "options": [
      "Functional Requirement",
      "Non-functional Requirement",
      "Business Requirement",
      "User Story"
    ],
    "answerIndex": 1,
    "explanation": "Response time criteria are Non-functional requirements."
  },
  {
    "id": 276,
    "category": "UML & Quality Attributes",
    "question": "Which Scrum role prioritizes the Product Backlog?",
    "options": [
      "Scrum Master",
      "Product Owner",
      "Development Team",
      "Tester"
    ],
    "answerIndex": 1,
    "explanation": "The Product Owner prioritizes the backlog."
  },
  {
    "id": 277,
    "category": "UML & Quality Attributes",
    "question": "Which project management technique identifies activities with zero float?",
    "options": [
      "Gantt Chart",
      "Critical Path Method (CPM)",
      "Scrum",
      "RAD"
    ],
    "answerIndex": 1,
    "explanation": "CPM identifies critical activities with zero slack time."
  },
  {
    "id": 278,
    "category": "UML & Quality Attributes",
    "question": "Which DevOps practice automatically builds and tests software whenever developers commit code?",
    "options": [
      "Continuous Delivery",
      "Continuous Integration",
      "Acceptance Testing",
      "Corrective Maintenance"
    ],
    "answerIndex": 1,
    "explanation": "Continuous Integration (CI) automates builds and tests on commit."
  },
  {
    "id": 279,
    "category": "UML & Quality Attributes",
    "question": "Which statement about Agile is correct?",
    "options": [
      "Customer involvement is minimal.",
      "Requirements should never change.",
      "Working software is delivered in small increments.",
      "Testing occurs only at the end."
    ],
    "answerIndex": 2,
    "explanation": "Agile delivers working software in frequent, small increments."
  },
  {
    "id": 280,
    "category": "UML & Quality Attributes",
    "question": "Which statement best describes Software Engineering?",
    "options": [
      "Only writing computer programs.",
      "Only software testing.",
      "Applying engineering principles to the systematic development, operation, and maintenance of software.",
      "Managing computer hardware only."
    ],
    "answerIndex": 2,
    "explanation": "Software Engineering applies disciplined engineering principles to software development."
  }
];


const DBMS_MCQS = [
  {
    "id": 1,
    "category": "DBMS Basics",
    "question": "A shared collection of logically related data and its description is called:",
    "options": [
      "Table",
      "Database",
      "DBMS",
      "Data Warehouse"
    ],
    "answerIndex": 1,
    "explanation": "A database is a shared collection of logically related data and its descriptive metadata."
  },
  {
    "id": 2,
    "category": "DBMS Basics",
    "question": "DBMS stands for:",
    "options": [
      "Data Base Management Service",
      "Database Management System",
      "Data Backup Management System",
      "Database Memory System"
    ],
    "answerIndex": 1,
    "explanation": "DBMS stands for Database Management System."
  },
  {
    "id": 3,
    "category": "DBMS Basics",
    "question": "Which of the following acts as an interface between users and the database?",
    "options": [
      "Operating System",
      "Compiler",
      "DBMS",
      "CPU"
    ],
    "answerIndex": 2,
    "explanation": "DBMS serves as the software interface between end users/applications and the stored database."
  },
  {
    "id": 4,
    "category": "DBMS Basics",
    "question": "Which of the following is NOT a function of DBMS?",
    "options": [
      "Data Security",
      "Backup and Recovery",
      "Data Sharing",
      "Compiling Programs"
    ],
    "answerIndex": 3,
    "explanation": "Compiling programs is a task performed by a compiler, not a DBMS."
  },
  {
    "id": 5,
    "category": "Database Applications",
    "question": "Which of the following is an example of a database application?",
    "options": [
      "Microsoft Word",
      "Paint",
      "Point-of-Sale System",
      "Calculator"
    ],
    "answerIndex": 2,
    "explanation": "Point-of-Sale (POS) systems rely on database management systems to manage transactions and inventory."
  },
  {
    "id": 6,
    "category": "DBMS Basics",
    "question": "Which software manages data stored in a database?",
    "options": [
      "Database",
      "Spreadsheet",
      "DBMS",
      "Browser"
    ],
    "answerIndex": 2,
    "explanation": "A DBMS is the software responsible for storing, managing, retrieving, and manipulating database data."
  },
  {
    "id": 7,
    "category": "DBMS Basics",
    "question": "The main purpose of a DBMS is to:",
    "options": [
      "Increase RAM",
      "Design Web Pages",
      "Store and Manage Data Efficiently",
      "Compile Programs"
    ],
    "answerIndex": 2,
    "explanation": "DBMS provides efficient mechanisms for storing, retrieving, and managing structured data."
  },
  {
    "id": 8,
    "category": "Database Applications",
    "question": "Which of the following is NOT a database application?",
    "options": [
      "Banking System",
      "Airline Reservation System",
      "Library Management System",
      "Adobe Photoshop"
    ],
    "answerIndex": 3,
    "explanation": "Adobe Photoshop is a graphics editing application, not a database application."
  },
  {
    "id": 9,
    "category": "DBMS Basics",
    "question": "A database contains:",
    "options": [
      "Only tables",
      "Only records",
      "Related Data",
      "Programs Only"
    ],
    "answerIndex": 2,
    "explanation": "A database contains logically related data and schema descriptions."
  },
  {
    "id": 10,
    "category": "DBMS Basics",
    "question": "Which of the following is an example of DBMS software?",
    "options": [
      "Linux",
      "Windows",
      "MySQL",
      "Chrome"
    ],
    "answerIndex": 2,
    "explanation": "MySQL is a popular Relational Database Management System (RDBMS)."
  },
  {
    "id": 11,
    "category": "DBMS Basics",
    "question": "Which of the following is NOT a DBMS?",
    "options": [
      "Oracle",
      "PostgreSQL",
      "SQL Server",
      "Microsoft Excel"
    ],
    "answerIndex": 3,
    "explanation": "MS Excel is a spreadsheet application, whereas Oracle, PostgreSQL, and SQL Server are full DBMS software."
  },
  {
    "id": 12,
    "category": "Advantages & Disadvantages",
    "question": "Which of the following is an advantage of DBMS?",
    "options": [
      "Increased Redundancy",
      "Reduced Data Redundancy",
      "Increased Inconsistency",
      "Data Isolation"
    ],
    "answerIndex": 1,
    "explanation": "DBMS minimizes data redundancy by centralizing data storage."
  },
  {
    "id": 13,
    "category": "Advantages & Disadvantages",
    "question": "Data redundancy means:",
    "options": [
      "Data Compression",
      "Duplicate Copies of Data",
      "Data Encryption",
      "Data Backup"
    ],
    "answerIndex": 1,
    "explanation": "Data redundancy refers to storing duplicate copies of the same data across multiple files or tables."
  },
  {
    "id": 14,
    "category": "Advantages & Disadvantages",
    "question": "Data inconsistency occurs when:",
    "options": [
      "Data is encrypted",
      "Data is indexed",
      "Different Copies Have Different Values",
      "Database is Normalized"
    ],
    "answerIndex": 2,
    "explanation": "Inconsistency arises when redundant copies of data contain conflicting or non-matching values."
  },
  {
    "id": 15,
    "category": "Advantages & Disadvantages",
    "question": "Which of the following is a disadvantage of file processing systems?",
    "options": [
      "Easy Data Sharing",
      "Data Redundancy",
      "Centralized Control",
      "Better Security"
    ],
    "answerIndex": 1,
    "explanation": "Traditional file processing systems suffer from high data redundancy and inconsistency."
  },
  {
    "id": 16,
    "category": "Advantages & Disadvantages",
    "question": "Compared to file systems, DBMS provides:",
    "options": [
      "More Redundancy",
      "Better Data Sharing",
      "Less Security",
      "Less Integrity"
    ],
    "answerIndex": 1,
    "explanation": "DBMS supports multi-user data sharing, central access control, and high data integrity."
  },
  {
    "id": 17,
    "category": "Advantages & Disadvantages",
    "question": "Which feature allows multiple users to access the same database simultaneously?",
    "options": [
      "Backup",
      "Indexing",
      "Data Sharing",
      "Compilation"
    ],
    "answerIndex": 2,
    "explanation": "Concurrent data sharing mechanisms allow multiple users and applications to read/write data simultaneously."
  },
  {
    "id": 18,
    "category": "DBMS Basics",
    "question": "The collection of programs used to manage databases is called:",
    "options": [
      "Database",
      "DBMS",
      "Data Model",
      "Relation"
    ],
    "answerIndex": 1,
    "explanation": "DBMS is a suite of programs that manages database creation, maintenance, querying, and access control."
  },
  {
    "id": 19,
    "category": "Database Users",
    "question": "Which database user is responsible for database maintenance?",
    "options": [
      "Programmer",
      "End User",
      "Database Administrator (DBA)",
      "Operator"
    ],
    "answerIndex": 2,
    "explanation": "The Database Administrator (DBA) manages maintenance, performance, backups, security, and schema changes."
  },
  {
    "id": 20,
    "category": "Database Users",
    "question": "Who controls user authorization in a database?",
    "options": [
      "End User",
      "Application Programmer",
      "DBA",
      "Database Designer"
    ],
    "answerIndex": 2,
    "explanation": "The DBA grants and revokes access permissions and user authorizations."
  },
  {
    "id": 21,
    "category": "Database Users",
    "question": "Who is mainly responsible for database backup and recovery?",
    "options": [
      "Operator",
      "DBA",
      "Customer",
      "Analyst"
    ],
    "answerIndex": 1,
    "explanation": "DBA configures, tests, and executes database backup and disaster recovery plans."
  },
  {
    "id": 22,
    "category": "Database Users",
    "question": "Physical database implementation is mainly the responsibility of:",
    "options": [
      "End User",
      "DBA",
      "Cashier",
      "Tester"
    ],
    "answerIndex": 1,
    "explanation": "Physical storage allocation, indexing, and implementation are managed by the DBA."
  },
  {
    "id": 23,
    "category": "Database Users",
    "question": "Who identifies data requirements before database creation?",
    "options": [
      "End User",
      "Database Designer",
      "Operator",
      "Compiler"
    ],
    "answerIndex": 1,
    "explanation": "Database Designers gather requirements, create conceptual models (ER diagrams), and design logical schemas."
  },
  {
    "id": 24,
    "category": "Database Users",
    "question": "Which database user writes application programs?",
    "options": [
      "DBA",
      "Database Designer",
      "Application Programmer",
      "Customer"
    ],
    "answerIndex": 2,
    "explanation": "Application Programmers develop software modules (web/desktop apps) that query and interact with the DBMS."
  },
  {
    "id": 25,
    "category": "Database Users",
    "question": "Which database user interacts with the database through applications?",
    "options": [
      "DBA",
      "Programmer",
      "End User",
      "Designer"
    ],
    "answerIndex": 2,
    "explanation": "End Users interact with databases indirectly via user interfaces of application software."
  },
  {
    "id": 26,
    "category": "Database Users",
    "question": "Which database user defines relationships among tables?",
    "options": [
      "End User",
      "Database Designer",
      "Clerk",
      "Customer"
    ],
    "answerIndex": 1,
    "explanation": "Database Designers define entity sets, attributes, keys, and table relationships."
  },
  {
    "id": 27,
    "category": "Database Users",
    "question": "Which of the following is NOT a type of database user?",
    "options": [
      "DBA",
      "Application Programmer",
      "End User",
      "Compiler"
    ],
    "answerIndex": 3,
    "explanation": "A Compiler is system translation software, not a category of database user."
  },
  {
    "id": 28,
    "category": "Three-Schema Architecture",
    "question": "Which level of database architecture interacts directly with users?",
    "options": [
      "Internal Level",
      "External Level",
      "Physical Level",
      "Storage Level"
    ],
    "answerIndex": 1,
    "explanation": "The External Level (View Level) presents customized views directly to end users and applications."
  },
  {
    "id": 29,
    "category": "Three-Schema Architecture",
    "question": "The conceptual level describes:",
    "options": [
      "File Storage",
      "Overall Logical Structure of Database",
      "Disk Blocks",
      "Index Files"
    ],
    "answerIndex": 1,
    "explanation": "The Conceptual Level defines the entire database schema, entity structures, relationships, and constraints."
  },
  {
    "id": 30,
    "category": "Three-Schema Architecture",
    "question": "The internal level describes:",
    "options": [
      "User Views",
      "Relationships Only",
      "Physical Storage of Data",
      "SQL Statements"
    ],
    "answerIndex": 2,
    "explanation": "The Internal Level (Physical Level) details how data is physically stored on disk, including data structures and access paths."
  },
  {
    "id": 31,
    "category": "Three-Schema Architecture",
    "question": "The ANSI-SPARC architecture consists of:",
    "options": [
      "Two Levels",
      "Three Levels",
      "Four Levels",
      "Five Levels"
    ],
    "answerIndex": 1,
    "explanation": "The ANSI-SPARC architecture consists of 3 levels: External (View), Conceptual (Logical), and Internal (Physical)."
  },
  {
    "id": 32,
    "category": "Three-Schema Architecture",
    "question": "Which level hides physical storage details from users?",
    "options": [
      "Internal",
      "Conceptual",
      "Hardware",
      "Operating System"
    ],
    "answerIndex": 1,
    "explanation": "The Conceptual Level provides abstraction by hiding physical storage mechanisms from the view layer."
  },
  {
    "id": 33,
    "category": "Three-Schema Architecture",
    "question": "External level is also known as:",
    "options": [
      "Physical Level",
      "Internal Level",
      "View Level",
      "Storage Level"
    ],
    "answerIndex": 2,
    "explanation": "The External Level is commonly called the View Level as it contains individual user views."
  },
  {
    "id": 34,
    "category": "Data Independence",
    "question": "Physical storage details are hidden through:",
    "options": [
      "Programming",
      "Data Abstraction",
      "Debugging",
      "Compilation"
    ],
    "answerIndex": 1,
    "explanation": "Data Abstraction suppresses low-level technical details across internal, conceptual, and external levels."
  },
  {
    "id": 35,
    "category": "Three-Schema Architecture",
    "question": "Which of the following is NOT one of the three-schema architecture levels?",
    "options": [
      "External",
      "Conceptual",
      "Internal",
      "Network"
    ],
    "answerIndex": 3,
    "explanation": "The three levels are External, Conceptual, and Internal. Network is a data model type, not an architecture level."
  },
  {
    "id": 36,
    "category": "Data Independence",
    "question": "Logical data independence refers to:",
    "options": [
      "Changing Storage Devices",
      "Changing Conceptual Schema Without Affecting External Views",
      "Changing Operating System",
      "Changing SQL Language"
    ],
    "answerIndex": 1,
    "explanation": "Logical Data Independence is the capacity to modify the conceptual schema without altering external schemas or application programs."
  },
  {
    "id": 37,
    "category": "Data Independence",
    "question": "Physical data independence means:",
    "options": [
      "Modifying Queries",
      "Changing Internal Storage Without Affecting Conceptual Schema",
      "Changing Tables",
      "Changing Users"
    ],
    "answerIndex": 1,
    "explanation": "Physical Data Independence is the ability to change physical storage structures (e.g. indexes, file organizations) without changing the conceptual schema."
  },
  {
    "id": 38,
    "category": "Data Independence",
    "question": "Which type of data independence is easier to achieve?",
    "options": [
      "Logical",
      "Physical",
      "Both Equal",
      "Neither"
    ],
    "answerIndex": 1,
    "explanation": "Physical data independence is easier to achieve because user applications depend primarily on the logical schema."
  },
  {
    "id": 39,
    "category": "Data Models",
    "question": "Which data model is most widely used today?",
    "options": [
      "Hierarchical",
      "Network",
      "Relational",
      "Object"
    ],
    "answerIndex": 2,
    "explanation": "The Relational Model (RDBMS) remains the most widely adopted database model in industry."
  },
  {
    "id": 40,
    "category": "Data Models",
    "question": "The relational model was proposed by:",
    "options": [
      "Charles Bachman",
      "Edgar F. Codd",
      "James Gray",
      "Michael Stonebraker"
    ],
    "answerIndex": 1,
    "explanation": "E. F. Codd proposed the Relational Model in his landmark 1970 paper."
  },
  {
    "id": 41,
    "category": "Data Models",
    "question": "Which data model organizes data into tables?",
    "options": [
      "Hierarchical",
      "Network",
      "Relational",
      "Object-Oriented"
    ],
    "answerIndex": 2,
    "explanation": "The Relational Model stores all data as two-dimensional tables (relations) of rows and columns."
  },
  {
    "id": 42,
    "category": "Data Models",
    "question": "In the hierarchical model, each child has:",
    "options": [
      "One Parent",
      "Multiple Parents",
      "Unlimited Parents",
      "No Parent"
    ],
    "answerIndex": 0,
    "explanation": "Hierarchical models use tree structures where each child node can have only one parent node."
  },
  {
    "id": 43,
    "category": "Data Models",
    "question": "The network model allows:",
    "options": [
      "Only One Parent",
      "Multiple Parent Relationships",
      "No Relationships",
      "Flat Tables Only"
    ],
    "answerIndex": 1,
    "explanation": "The Network Model represents data using graph structures allowing a record to have multiple parent records."
  },
  {
    "id": 44,
    "category": "Data Models",
    "question": "Which data model represents real-world objects?",
    "options": [
      "Hierarchical",
      "Relational",
      "Object-Oriented",
      "Network"
    ],
    "answerIndex": 2,
    "explanation": "Object-Oriented database models combine object-oriented programming concepts (encapsulation, objects, classes) with database features."
  },
  {
    "id": 45,
    "category": "Data Models",
    "question": "Which data model came after the hierarchical model?",
    "options": [
      "Relational",
      "Network",
      "Object-Oriented",
      "NoSQL"
    ],
    "answerIndex": 1,
    "explanation": "The Network model was developed to overcome the rigid single-parent limitation of the Hierarchical model."
  },
  {
    "id": 46,
    "category": "Data Models",
    "question": "Which database model is based on parent-child relationships?",
    "options": [
      "Relational",
      "Object-Oriented",
      "Hierarchical",
      "Graph"
    ],
    "answerIndex": 2,
    "explanation": "The Hierarchical model explicitly uses parent-child tree links to represent data relationships."
  },
  {
    "id": 47,
    "category": "Data Models",
    "question": "Which database model supports many-to-many relationships naturally?",
    "options": [
      "Hierarchical",
      "Network",
      "Flat File",
      "Sequential"
    ],
    "answerIndex": 1,
    "explanation": "The Network model naturally represents N:M relationships through graph nodes and set types."
  },
  {
    "id": 48,
    "category": "Data Models",
    "question": "Which of the following is NOT a traditional database model?",
    "options": [
      "Hierarchical",
      "Network",
      "Relational",
      "Compiler Model"
    ],
    "answerIndex": 3,
    "explanation": "Compiler Model is not a database model."
  },
  {
    "id": 49,
    "category": "Data Models",
    "question": "Which database model is the foundation of modern SQL databases?",
    "options": [
      "Network",
      "Hierarchical",
      "Relational",
      "Object"
    ],
    "answerIndex": 2,
    "explanation": "Modern SQL databases (MySQL, PostgreSQL, Oracle, SQL Server) are built on the Relational Database Model."
  },
  {
    "id": 50,
    "category": "DBMS Basics",
    "question": "Which of the following is the primary objective of a DBMS?",
    "options": [
      "Increase Processor Speed",
      "Increase Disk Size",
      "Efficient Storage, Retrieval, and Management of Data",
      "Improve Internet Speed"
    ],
    "answerIndex": 2,
    "explanation": "The core objective of a DBMS is efficient, secure, and reliable storage, retrieval, and management of data."
  },
  {
    "id": 51,
    "category": "Relational Model",
    "question": "The Relational Database Model was proposed by:",
    "options": [
      "Charles Bachman",
      "Edgar F. Codd",
      "James Gray",
      "Peter Chen"
    ],
    "answerIndex": 1,
    "explanation": "E. F. Codd introduced the relational database model in 1970."
  },
  {
    "id": 52,
    "category": "Relational Model",
    "question": "In the relational model, data is organized into:",
    "options": [
      "Trees",
      "Graphs",
      "Tables",
      "Objects"
    ],
    "answerIndex": 2,
    "explanation": "Relational model organizes all structured data into two-dimensional tables."
  },
  {
    "id": 53,
    "category": "Relational Model",
    "question": "A table in the relational model is called a:",
    "options": [
      "Entity",
      "Relation",
      "Domain",
      "Schema"
    ],
    "answerIndex": 1,
    "explanation": "In formal database terminology, a table is called a Relation."
  },
  {
    "id": 54,
    "category": "Relational Model",
    "question": "A row in a relation is called:",
    "options": [
      "Attribute",
      "Tuple",
      "Domain",
      "Field"
    ],
    "answerIndex": 1,
    "explanation": "A row of data in a table is formally known as a Tuple."
  },
  {
    "id": 55,
    "category": "Relational Model",
    "question": "A column in a relation is called:",
    "options": [
      "Tuple",
      "Attribute",
      "Domain",
      "Relation"
    ],
    "answerIndex": 1,
    "explanation": "A column header representing a property is called an Attribute."
  },
  {
    "id": 56,
    "category": "Relational Model",
    "question": "The set of permissible values for an attribute is called:",
    "options": [
      "Schema",
      "Relation",
      "Domain",
      "Tuple"
    ],
    "answerIndex": 2,
    "explanation": "A Domain is the pool of valid, legal values permitted for a given attribute."
  },
  {
    "id": 57,
    "category": "Relational Model",
    "question": "The number of attributes in a relation is called:",
    "options": [
      "Cardinality",
      "Degree",
      "Dimension",
      "Order"
    ],
    "answerIndex": 1,
    "explanation": "Degree refers to the total count of columns/attributes in a relation."
  },
  {
    "id": 58,
    "category": "Relational Model",
    "question": "The number of tuples in a relation is called:",
    "options": [
      "Degree",
      "Cardinality",
      "Domain",
      "Dimension"
    ],
    "answerIndex": 1,
    "explanation": "Cardinality refers to the total count of rows/tuples present in a relation."
  },
  {
    "id": 59,
    "category": "Relational Model",
    "question": "If a table has 8 columns and 50 rows, its degree is:",
    "options": [
      "50",
      "8",
      "58",
      "400"
    ],
    "answerIndex": 1,
    "explanation": "Degree equals column count (8), whereas cardinality equals row count (50)."
  },
  {
    "id": 60,
    "category": "Relational Model",
    "question": "If a relation contains 12 tuples, its cardinality is:",
    "options": [
      "10",
      "11",
      "12",
      "Depends on attributes"
    ],
    "answerIndex": 2,
    "explanation": "Cardinality is defined directly as the total number of tuples (12)."
  },
  {
    "id": 61,
    "category": "Schema & Instance",
    "question": "The overall logical design of a database is called:",
    "options": [
      "Instance",
      "Schema",
      "Relation",
      "Domain"
    ],
    "answerIndex": 1,
    "explanation": "The overall logical design and description of a database structure is called Schema."
  },
  {
    "id": 62,
    "category": "Schema & Instance",
    "question": "Database schema changes:",
    "options": [
      "Frequently",
      "Rarely",
      "Every Transaction",
      "Every Query"
    ],
    "answerIndex": 1,
    "explanation": "A database schema represents fixed structural design and changes very infrequently."
  },
  {
    "id": 63,
    "category": "Schema & Instance",
    "question": "Database instance refers to:",
    "options": [
      "Database Structure",
      "Current Data Stored",
      "ER Diagram",
      "Schema Design"
    ],
    "answerIndex": 1,
    "explanation": "An instance is the collection of information/data stored in the database at a specific moment in time."
  },
  {
    "id": 64,
    "category": "Schema & Instance",
    "question": "Which changes more frequently?",
    "options": [
      "Schema",
      "Instance",
      "Both equally",
      "Neither"
    ],
    "answerIndex": 1,
    "explanation": "Database instances change dynamically with every INSERT, UPDATE, or DELETE operation."
  },
  {
    "id": 65,
    "category": "Schema & Instance",
    "question": "A relation schema defines:",
    "options": [
      "Stored Data Only",
      "Table Structure",
      "User Accounts",
      "SQL Queries"
    ],
    "answerIndex": 1,
    "explanation": "A relation schema defines table name, column attributes, and data types."
  },
  {
    "id": 66,
    "category": "Keys & Integrity",
    "question": "A key is mainly used to:",
    "options": [
      "Sort Records",
      "Encrypt Data",
      "Identify Tuples Uniquely",
      "Compress Data"
    ],
    "answerIndex": 2,
    "explanation": "Keys uniquely identify tuples (records) within a table and establish entity relationships."
  },
  {
    "id": 67,
    "category": "Keys & Integrity",
    "question": "Which key uniquely identifies each tuple?",
    "options": [
      "Foreign Key",
      "Primary Key",
      "Secondary Key",
      "Duplicate Key"
    ],
    "answerIndex": 1,
    "explanation": "A Primary Key uniquely identifies each row in a relation."
  },
  {
    "id": 68,
    "category": "Keys & Integrity",
    "question": "A Primary Key must be:",
    "options": [
      "Unique only",
      "Not Null only",
      "Unique and Not Null",
      "Numeric"
    ],
    "answerIndex": 2,
    "explanation": "Primary Key constraint requires every value to be unique and non-null."
  },
  {
    "id": 69,
    "category": "Keys & Integrity",
    "question": "Which key cannot contain NULL values?",
    "options": [
      "Foreign Key",
      "Candidate Key",
      "Primary Key",
      "Alternate Key"
    ],
    "answerIndex": 2,
    "explanation": "By Entity Integrity rule, Primary Keys can never contain NULL values."
  },
  {
    "id": 70,
    "category": "Keys & Integrity",
    "question": "Which key may contain NULL values?",
    "options": [
      "Primary Key",
      "Foreign Key",
      "Candidate Key",
      "Super Key"
    ],
    "answerIndex": 1,
    "explanation": "Foreign keys may contain NULL values unless explicitly defined with NOT NULL constraint."
  },
  {
    "id": 71,
    "category": "Keys & Integrity",
    "question": "A Super Key is:",
    "options": [
      "Smallest Unique Key",
      "Any Set of Attributes that Uniquely Identifies a Tuple",
      "Foreign Key",
      "Duplicate Key"
    ],
    "answerIndex": 1,
    "explanation": "A Super Key is any attribute or combination of attributes that uniquely identifies a row."
  },
  {
    "id": 72,
    "category": "Keys & Integrity",
    "question": "Every Primary Key is:",
    "options": [
      "Foreign Key",
      "Super Key",
      "Composite Key",
      "Alternate Key"
    ],
    "answerIndex": 1,
    "explanation": "Every Primary Key is a minimal Super Key."
  },
  {
    "id": 73,
    "category": "Keys & Integrity",
    "question": "Every Candidate Key is:",
    "options": [
      "Foreign Key",
      "Super Key",
      "Duplicate Key",
      "Weak Key"
    ],
    "answerIndex": 1,
    "explanation": "Candidate Keys are minimal Super Keys."
  },
  {
    "id": 74,
    "category": "Keys & Integrity",
    "question": "Which of the following is the minimal Super Key?",
    "options": [
      "Composite Key",
      "Candidate Key",
      "Foreign Key",
      "Secondary Key"
    ],
    "answerIndex": 1,
    "explanation": "A Candidate Key is defined as a minimal super key with no redundant attributes."
  },
  {
    "id": 75,
    "category": "Keys & Integrity",
    "question": "A Candidate Key that is not selected as Primary Key becomes:",
    "options": [
      "Foreign Key",
      "Composite Key",
      "Alternate Key",
      "Secondary Key"
    ],
    "answerIndex": 2,
    "explanation": "Unchosen candidate keys serve as Alternate Keys."
  },
  {
    "id": 76,
    "category": "Keys & Integrity",
    "question": "A Composite Key consists of:",
    "options": [
      "One Attribute",
      "Two or More Attributes",
      "One Foreign Key",
      "Duplicate Attributes"
    ],
    "answerIndex": 1,
    "explanation": "A Composite Key uses two or more attributes combined to uniquely identify a record."
  },
  {
    "id": 77,
    "category": "Keys & Integrity",
    "question": "Which key references the Primary Key of another table?",
    "options": [
      "Composite Key",
      "Candidate Key",
      "Foreign Key",
      "Alternate Key"
    ],
    "answerIndex": 2,
    "explanation": "A Foreign Key in a child table references the Primary Key in a parent table."
  },
  {
    "id": 78,
    "category": "Keys & Integrity",
    "question": "Foreign Keys are mainly used to:",
    "options": [
      "Speed Queries",
      "Establish Relationships Between Tables",
      "Encrypt Data",
      "Compress Tables"
    ],
    "answerIndex": 1,
    "explanation": "Foreign Keys link tables and enforce relational integrity constraints."
  },
  {
    "id": 79,
    "category": "Keys & Integrity",
    "question": "Which key enforces Referential Integrity?",
    "options": [
      "Candidate Key",
      "Super Key",
      "Foreign Key",
      "Composite Key"
    ],
    "answerIndex": 2,
    "explanation": "Referential Integrity ensures child foreign key values match valid parent primary key values."
  },
  {
    "id": 80,
    "category": "Keys & Integrity",
    "question": "Which key should remain stable over time?",
    "options": [
      "Foreign Key",
      "Composite Key",
      "Primary Key",
      "Alternate Key"
    ],
    "answerIndex": 2,
    "explanation": "Primary keys should be stable and unchanging to preserve foreign key references."
  },
  {
    "id": 81,
    "category": "Keys & Integrity",
    "question": "A system-generated unique key is called:",
    "options": [
      "Composite Key",
      "Natural Key",
      "Surrogate Key",
      "Foreign Key"
    ],
    "answerIndex": 2,
    "explanation": "A Surrogate Key is an artificial system-generated unique identifier (like auto-increment ID)."
  },
  {
    "id": 82,
    "category": "Keys & Integrity",
    "question": "An example of a Natural Key is:",
    "options": [
      "Auto Increment ID",
      "CNIC Number",
      "Serial Number Generated by DBMS",
      "Record Number"
    ],
    "answerIndex": 1,
    "explanation": "A Natural Key is formed from existing attributes that possess real-world meaning (e.g., CNIC, SSN)."
  },
  {
    "id": 83,
    "category": "Keys & Integrity",
    "question": "Which key is usually Auto Increment?",
    "options": [
      "Foreign Key",
      "Candidate Key",
      "Surrogate Key",
      "Alternate Key"
    ],
    "answerIndex": 2,
    "explanation": "Surrogate keys are typically implemented using DBMS auto-increment integer sequences."
  },
  {
    "id": 84,
    "category": "Keys & Integrity",
    "question": "Entity Integrity requires:",
    "options": [
      "Foreign Key must exist",
      "Primary Key cannot be NULL",
      "Duplicate Rows",
      "Composite Keys Only"
    ],
    "answerIndex": 1,
    "explanation": "Entity Integrity dictates that primary key attributes cannot contain NULL values."
  },
  {
    "id": 85,
    "category": "Keys & Integrity",
    "question": "Referential Integrity ensures:",
    "options": [
      "Tables have indexes",
      "Foreign Key References Existing Primary Key",
      "Queries are Fast",
      "Database is Normalized"
    ],
    "answerIndex": 1,
    "explanation": "Referential Integrity requires that foreign key values must match existing parent primary key values or be NULL."
  },
  {
    "id": 86,
    "category": "Keys & Integrity",
    "question": "Which integrity constraint prevents orphan records?",
    "options": [
      "Entity Integrity",
      "Referential Integrity",
      "Domain Integrity",
      "View Integrity"
    ],
    "answerIndex": 1,
    "explanation": "Referential Integrity prevents orphan records by disallowing child entries without matching parent keys."
  },
  {
    "id": 87,
    "category": "Keys & Integrity",
    "question": "Domain Integrity ensures:",
    "options": [
      "No Duplicate Rows",
      "Attribute Values Must Belong to Valid Domain",
      "Primary Key Exists",
      "Tables are Linked"
    ],
    "answerIndex": 1,
    "explanation": "Domain Integrity ensures that values stored in a column adhere to defined data types, ranges, and formats."
  },
  {
    "id": 88,
    "category": "Keys & Integrity",
    "question": "Which constraint ensures valid values for an attribute?",
    "options": [
      "Foreign Key",
      "Domain Constraint",
      "Join Constraint",
      "Transaction Constraint"
    ],
    "answerIndex": 1,
    "explanation": "Domain constraints enforce range, type, and valid value rules for attributes."
  },
  {
    "id": 89,
    "category": "Keys & Integrity",
    "question": "Which constraint prevents duplicate values?",
    "options": [
      "CHECK",
      "UNIQUE",
      "DEFAULT",
      "NOT NULL"
    ],
    "answerIndex": 1,
    "explanation": "The UNIQUE constraint ensures all non-null values in a column are distinct."
  },
  {
    "id": 90,
    "category": "Keys & Integrity",
    "question": "Which constraint prevents NULL values?",
    "options": [
      "UNIQUE",
      "NOT NULL",
      "CHECK",
      "DEFAULT"
    ],
    "answerIndex": 1,
    "explanation": "The NOT NULL constraint prevents NULL entries in specified columns."
  },
  {
    "id": 91,
    "category": "Keys & Integrity",
    "question": "Which constraint assigns a default value automatically?",
    "options": [
      "CHECK",
      "UNIQUE",
      "DEFAULT",
      "FOREIGN KEY"
    ],
    "answerIndex": 2,
    "explanation": "DEFAULT constraint supplies a predetermined value when no value is provided on INSERT."
  },
  {
    "id": 92,
    "category": "Keys & Integrity",
    "question": "Which constraint validates a condition before inserting data?",
    "options": [
      "UNIQUE",
      "DEFAULT",
      "CHECK",
      "PRIMARY KEY"
    ],
    "answerIndex": 2,
    "explanation": "CHECK constraint evaluates boolean expression conditions prior to inserting/updating rows."
  },
  {
    "id": 93,
    "category": "Keys & Integrity",
    "question": "Which constraint combines UNIQUE and NOT NULL?",
    "options": [
      "CHECK",
      "PRIMARY KEY",
      "FOREIGN KEY",
      "DEFAULT"
    ],
    "answerIndex": 1,
    "explanation": "PRIMARY KEY enforces both UNIQUE and NOT NULL constraints on key columns."
  },
  {
    "id": 94,
    "category": "Keys & Integrity",
    "question": "Which constraint establishes a relationship between two tables?",
    "options": [
      "UNIQUE",
      "CHECK",
      "FOREIGN KEY",
      "DEFAULT"
    ],
    "answerIndex": 2,
    "explanation": "FOREIGN KEY constraint enforces parent-child relational dependencies between tables."
  },
  {
    "id": 95,
    "category": "Relational Model",
    "question": "A relation should not contain:",
    "options": [
      "Attributes",
      "Tuples",
      "Duplicate Tuples",
      "Domains"
    ],
    "answerIndex": 2,
    "explanation": "In set theory, relations are sets of unique tuples; duplicate tuples are strictly forbidden."
  },
  {
    "id": 96,
    "category": "Relational Model",
    "question": "Attribute values in a relation should be:",
    "options": [
      "Multi-valued",
      "Atomic",
      "Repeated",
      "Ordered"
    ],
    "answerIndex": 1,
    "explanation": "First Normal Form requires attribute values to be atomic (indivisible single values)."
  },
  {
    "id": 97,
    "category": "Relational Model",
    "question": "Which property distinguishes a relation from a simple table?",
    "options": [
      "Rows have colors",
      "Rows have indexes",
      "Duplicate tuples are not allowed",
      "Columns are numbered"
    ],
    "answerIndex": 2,
    "explanation": "Mathematical relations prohibit duplicate tuples, whereas simple non-relational tables might contain duplicate rows."
  },
  {
    "id": 98,
    "category": "Relational Model",
    "question": "Which statement is TRUE about tuples in a relation?",
    "options": [
      "Their physical order is significant.",
      "Their logical order is not significant.",
      "They must always be sorted alphabetically.",
      "They cannot be deleted."
    ],
    "answerIndex": 1,
    "explanation": "In relational algebra, tuples form an unordered set; physical row ordering is irrelevant."
  },
  {
    "id": 99,
    "category": "Relational Model",
    "question": "Which statement is TRUE about attributes in a relation?",
    "options": [
      "Duplicate attribute names are allowed.",
      "Each attribute has a unique name within a relation.",
      "Every attribute must be numeric.",
      "Attributes cannot have NULL values."
    ],
    "answerIndex": 1,
    "explanation": "Attributes within a single relation schema must have distinct, unique column names."
  },
  {
    "id": 100,
    "category": "Relational Model",
    "question": "Which statement best describes a relation?",
    "options": [
      "A collection of SQL statements",
      "A set of database users",
      "A table consisting of rows and columns with unique tuples",
      "A programming language"
    ],
    "answerIndex": 2,
    "explanation": "A relation is a two-dimensional table structure containing rows and columns with unique tuples."
  },
  {
    "id": 101,
    "category": "ER & EER Model",
    "question": "An Entity is:",
    "options": [
      "A database table",
      "A real-world object with independent existence",
      "A SQL command",
      "A relationship"
    ],
    "answerIndex": 1,
    "explanation": "An entity represents an object, concept, or thing in the real world with independent existence."
  },
  {
    "id": 102,
    "category": "ER & EER Model",
    "question": "A collection of similar entities is called:",
    "options": [
      "Relation",
      "Entity Set",
      "Attribute Set",
      "Schema"
    ],
    "answerIndex": 1,
    "explanation": "An Entity Set is a collection of similar entity types sharing the same attributes."
  },
  {
    "id": 103,
    "category": "ER & EER Model",
    "question": "Which of the following is an entity?",
    "options": [
      "Age",
      "Salary",
      "Student",
      "Integer"
    ],
    "answerIndex": 2,
    "explanation": "Student is an entity object, whereas Age and Salary are attributes."
  },
  {
    "id": 104,
    "category": "ER & EER Model",
    "question": "In an ER diagram, an entity is represented by:",
    "options": [
      "Diamond",
      "Rectangle",
      "Oval",
      "Triangle"
    ],
    "answerIndex": 1,
    "explanation": "Entity sets are depicted as Rectangles in standard Chen ER diagrams."
  },
  {
    "id": 105,
    "category": "ER & EER Model",
    "question": "Which is an example of an entity set?",
    "options": [
      "Ali",
      "Roll Number",
      "Students",
      "Integer"
    ],
    "answerIndex": 2,
    "explanation": "Students is an entity set, while Ali is a specific entity instance."
  },
  {
    "id": 106,
    "category": "ER & EER Model",
    "question": "Which of the following is NOT an entity?",
    "options": [
      "Employee",
      "Customer",
      "Product",
      "Salary"
    ],
    "answerIndex": 3,
    "explanation": "Salary is an attribute describing an Employee entity, not an entity itself."
  },
  {
    "id": 107,
    "category": "ER & EER Model",
    "question": "An attribute is:",
    "options": [
      "A relationship",
      "A property of an entity",
      "A table",
      "A key"
    ],
    "answerIndex": 1,
    "explanation": "An attribute is a property or characteristic describing an entity set."
  },
  {
    "id": 108,
    "category": "ER & EER Model",
    "question": "In an ER diagram, an attribute is represented by:",
    "options": [
      "Rectangle",
      "Diamond",
      "Oval (Ellipse)",
      "Triangle"
    ],
    "answerIndex": 2,
    "explanation": "Attributes are represented by Ovals (Ellipses) in ER diagrams."
  },
  {
    "id": 109,
    "category": "ER & EER Model",
    "question": "Which of the following is an attribute of Student?",
    "options": [
      "Student",
      "Roll Number",
      "Course",
      "Department"
    ],
    "answerIndex": 1,
    "explanation": "Roll Number is a property/attribute describing a Student entity."
  },
  {
    "id": 110,
    "category": "ER & EER Model",
    "question": "Which attribute uniquely identifies an entity?",
    "options": [
      "Composite Attribute",
      "Derived Attribute",
      "Key Attribute",
      "Multivalued Attribute"
    ],
    "answerIndex": 2,
    "explanation": "A Key Attribute uniquely distinguishes individual entity instances in an entity set."
  },
  {
    "id": 111,
    "category": "ER & EER Model",
    "question": "A key attribute is shown by:",
    "options": [
      "Double Oval",
      "Dashed Oval",
      "Underlined Attribute",
      "Double Rectangle"
    ],
    "answerIndex": 2,
    "explanation": "Key attributes are drawn as Ovals with Underlined text."
  },
  {
    "id": 112,
    "category": "ER & EER Model",
    "question": "An attribute that cannot be divided further is called:",
    "options": [
      "Composite Attribute",
      "Simple Attribute",
      "Derived Attribute",
      "Multivalued Attribute"
    ],
    "answerIndex": 1,
    "explanation": "A Simple (Atomic) Attribute cannot be subdivided into smaller constituent parts."
  },
  {
    "id": 113,
    "category": "ER & EER Model",
    "question": "Which attribute can be divided into smaller components?",
    "options": [
      "Simple Attribute",
      "Composite Attribute",
      "Derived Attribute",
      "Key Attribute"
    ],
    "answerIndex": 1,
    "explanation": "A Composite Attribute can be divided into sub-components (e.g. Address -> Street, City, Zip)."
  },
  {
    "id": 114,
    "category": "ER & EER Model",
    "question": "Name can be divided into First Name and Last Name. It is a:",
    "options": [
      "Derived Attribute",
      "Composite Attribute",
      "Multivalued Attribute",
      "Key Attribute"
    ],
    "answerIndex": 1,
    "explanation": "Name composed of First Name and Last Name is a Composite Attribute."
  },
  {
    "id": 115,
    "category": "ER & EER Model",
    "question": "Age calculated from Date of Birth is:",
    "options": [
      "Composite Attribute",
      "Simple Attribute",
      "Derived Attribute",
      "Multivalued Attribute"
    ],
    "answerIndex": 2,
    "explanation": "Age is a Derived Attribute computed dynamically from Date of Birth."
  },
  {
    "id": 116,
    "category": "ER & EER Model",
    "question": "A derived attribute is represented by:",
    "options": [
      "Double Oval",
      "Dashed Oval",
      "Rectangle",
      "Diamond"
    ],
    "answerIndex": 1,
    "explanation": "Derived attributes are represented using Dashed Ovals in ER diagrams."
  },
  {
    "id": 117,
    "category": "ER & EER Model",
    "question": "Which attribute can have multiple values?",
    "options": [
      "Composite",
      "Multivalued Attribute",
      "Derived",
      "Key"
    ],
    "answerIndex": 1,
    "explanation": "A Multivalued Attribute can store more than one value for a single entity."
  },
  {
    "id": 118,
    "category": "ER & EER Model",
    "question": "Phone Numbers is an example of:",
    "options": [
      "Composite Attribute",
      "Multivalued Attribute",
      "Derived Attribute",
      "Key Attribute"
    ],
    "answerIndex": 1,
    "explanation": "A person having multiple phone numbers is a classic Multivalued Attribute."
  },
  {
    "id": 119,
    "category": "ER & EER Model",
    "question": "A multivalued attribute is represented by:",
    "options": [
      "Dashed Oval",
      "Double Oval",
      "Rectangle",
      "Diamond"
    ],
    "answerIndex": 1,
    "explanation": "Multivalued attributes are drawn with Double Ovals in ER diagrams."
  },
  {
    "id": 120,
    "category": "ER & EER Model",
    "question": "Which of the following is a simple attribute?",
    "options": [
      "Address",
      "Name",
      "Gender",
      "Full Name"
    ],
    "answerIndex": 2,
    "explanation": "Gender is an atomic (simple) attribute with indivisible values."
  },
  {
    "id": 121,
    "category": "ER & EER Model",
    "question": "A relationship represents:",
    "options": [
      "Attribute Values",
      "Association Between Entities",
      "SQL Commands",
      "Database Schema"
    ],
    "answerIndex": 1,
    "explanation": "A relationship is an association among two or more entity sets."
  },
  {
    "id": 122,
    "category": "ER & EER Model",
    "question": "In an ER diagram, a relationship is represented by:",
    "options": [
      "Rectangle",
      "Diamond",
      "Oval",
      "Triangle"
    ],
    "answerIndex": 1,
    "explanation": "Relationships are represented by Diamond shapes in ER diagrams."
  },
  {
    "id": 123,
    "category": "ER & EER Model",
    "question": " \"Student Enrolls in Course\" represents:",
    "options": [
      "Entity",
      "Attribute",
      "Relationship",
      "Domain"
    ],
    "answerIndex": 2,
    "explanation": "\"Enrolls\" represents a relationship associating Student and Course entities."
  },
  {
    "id": 124,
    "category": "ER & EER Model",
    "question": "A relationship may exist between:",
    "options": [
      "Attributes Only",
      "Two or More Entities",
      "SQL Statements",
      "Views"
    ],
    "answerIndex": 1,
    "explanation": "Relationships associate two or more entity sets."
  },
  {
    "id": 125,
    "category": "ER & EER Model",
    "question": "Which of the following is NOT a relationship?",
    "options": [
      "Works For",
      "Enrolls",
      "Purchases",
      "Salary"
    ],
    "answerIndex": 3,
    "explanation": "Salary is an attribute, whereas Works For, Enrolls, and Purchases are relationships."
  },
  {
    "id": 126,
    "category": "ER & EER Model",
    "question": "A relationship involving one entity set is called:",
    "options": [
      "Unary Relationship",
      "Binary Relationship",
      "Ternary Relationship",
      "Recursive Join"
    ],
    "answerIndex": 0,
    "explanation": "A Unary (Recursive) Relationship associates entities within the same single entity set."
  },
  {
    "id": 127,
    "category": "ER & EER Model",
    "question": "Most relationships in databases are:",
    "options": [
      "Unary",
      "Binary",
      "Ternary",
      "Quaternary"
    ],
    "answerIndex": 1,
    "explanation": "The vast majority of real-world database relationships are Binary (between 2 entity sets)."
  },
  {
    "id": 128,
    "category": "ER & EER Model",
    "question": "A relationship involving three entity sets is:",
    "options": [
      "Binary",
      "Ternary",
      "Unary",
      "Recursive"
    ],
    "answerIndex": 1,
    "explanation": "A relationship involving 3 participating entity sets is called a Ternary Relationship."
  },
  {
    "id": 129,
    "category": "ER & EER Model",
    "question": "Employee supervises Employee is an example of:",
    "options": [
      "Unary (Recursive) Relationship",
      "Binary Relationship",
      "Ternary Relationship",
      "Weak Relationship"
    ],
    "answerIndex": 0,
    "explanation": "Supervision within the Employee entity set is a Unary (Recursive) Relationship."
  },
  {
    "id": 130,
    "category": "ER & EER Model",
    "question": "One customer can place many orders. This is:",
    "options": [
      "One-to-One",
      "One-to-Many",
      "Many-to-One",
      "Many-to-Many"
    ],
    "answerIndex": 1,
    "explanation": "One customer linked to multiple orders exhibits a 1:N (One-to-Many) cardinality."
  },
  {
    "id": 131,
    "category": "ER & EER Model",
    "question": "Many students enroll in many courses. This is:",
    "options": [
      "One-to-One",
      "One-to-Many",
      "Many-to-One",
      "Many-to-Many"
    ],
    "answerIndex": 3,
    "explanation": "Multiple students enrolling in multiple courses is an M:N (Many-to-Many) cardinality."
  },
  {
    "id": 132,
    "category": "ER & EER Model",
    "question": "One passport belongs to one citizen. This relationship is:",
    "options": [
      "One-to-One",
      "One-to-Many",
      "Many-to-One",
      "Many-to-Many"
    ],
    "answerIndex": 0,
    "explanation": "One passport mapped strictly to one citizen is a 1:1 (One-to-One) cardinality."
  },
  {
    "id": 133,
    "category": "ER & EER Model",
    "question": "One department has many employees. This is:",
    "options": [
      "One-to-One",
      "One-to-Many",
      "Many-to-Many",
      "Recursive"
    ],
    "answerIndex": 1,
    "explanation": "A single department employing multiple workers is a One-to-Many relationship."
  },
  {
    "id": 134,
    "category": "ER & EER Model",
    "question": "Which cardinality is generally implemented using a junction (bridge) table in relational databases?",
    "options": [
      "One-to-One",
      "One-to-Many",
      "Many-to-Many",
      "Unary"
    ],
    "answerIndex": 2,
    "explanation": "Many-to-Many (M:N) relationships require an associative/junction table in RDBMS implementation."
  },
  {
    "id": 135,
    "category": "ER & EER Model",
    "question": "Total participation means:",
    "options": [
      "Some entities participate",
      "Every entity must participate",
      "No entity participates",
      "Participation is optional"
    ],
    "answerIndex": 1,
    "explanation": "Total participation (existence dependency) requires every entity instance to participate in the relationship."
  },
  {
    "id": 136,
    "category": "ER & EER Model",
    "question": "Partial participation means:",
    "options": [
      "All entities participate",
      "Participation is Optional",
      "Every entity is mandatory",
      "No relationship exists"
    ],
    "answerIndex": 1,
    "explanation": "Partial participation indicates that entity participation in the relationship is optional."
  },
  {
    "id": 137,
    "category": "ER & EER Model",
    "question": "Total participation is represented by:",
    "options": [
      "Single Line",
      "Double Line",
      "Dashed Line",
      "Double Diamond"
    ],
    "answerIndex": 1,
    "explanation": "Total participation is drawn using Double Lines connecting entity set to relationship."
  },
  {
    "id": 138,
    "category": "ER & EER Model",
    "question": "A weak entity:",
    "options": [
      "Has its own Primary Key",
      "Depends on another entity for identification",
      "Has no attributes",
      "Cannot participate in relationships"
    ],
    "answerIndex": 1,
    "explanation": "A Weak Entity does not have a primary key of its own and depends on an owner entity set."
  },
  {
    "id": 139,
    "category": "ER & EER Model",
    "question": "A weak entity is represented by:",
    "options": [
      "Single Rectangle",
      "Double Rectangle",
      "Diamond",
      "Oval"
    ],
    "answerIndex": 1,
    "explanation": "Weak entity sets are represented as Double Rectangles in ER diagrams."
  },
  {
    "id": 140,
    "category": "ER & EER Model",
    "question": "The identifying relationship of a weak entity is represented by:",
    "options": [
      "Rectangle",
      "Double Diamond",
      "Oval",
      "Triangle"
    ],
    "answerIndex": 1,
    "explanation": "The relationship linking a weak entity to its owner is represented by a Double Diamond."
  },
  {
    "id": 141,
    "category": "ER & EER Model",
    "question": "Which entity can exist independently?",
    "options": [
      "Strong Entity",
      "Weak Entity",
      "Composite Entity",
      "Associative Entity"
    ],
    "answerIndex": 0,
    "explanation": "A Strong Entity possesses its own primary key and exists independently."
  },
  {
    "id": 142,
    "category": "ER & EER Model",
    "question": "Which of the following is an example of a weak entity?",
    "options": [
      "Employee",
      "Student",
      "Dependent",
      "Department"
    ],
    "answerIndex": 2,
    "explanation": "Dependent is a classic Weak Entity dependent on the Employee primary key."
  },
  {
    "id": 143,
    "category": "ER & EER Model",
    "question": "Specialization is a:",
    "options": [
      "Bottom-up Process",
      "Top-down Process",
      "Query Optimization",
      "Data Compression"
    ],
    "answerIndex": 1,
    "explanation": "Specialization is a Top-down design process breaking superclasses into specialized subclasses."
  },
  {
    "id": 144,
    "category": "ER & EER Model",
    "question": "Generalization is a:",
    "options": [
      "Bottom-up Process",
      "Top-down Process",
      "Normalization Technique",
      "SQL Command"
    ],
    "answerIndex": 0,
    "explanation": "Generalization is a Bottom-up design process synthesizing common entity types into a higher-level superclass."
  },
  {
    "id": 145,
    "category": "ER & EER Model",
    "question": "Vehicle \u2192 Car, Bus, Bike is an example of:",
    "options": [
      "Generalization",
      "Specialization",
      "Aggregation",
      "Association"
    ],
    "answerIndex": 1,
    "explanation": "Subdividing Vehicle into Car, Bus, and Bike superclass-subclass hierarchies is Specialization."
  },
  {
    "id": 146,
    "category": "ER & EER Model",
    "question": "Car + Bus + Bike \u2192 Vehicle is an example of:",
    "options": [
      "Generalization",
      "Specialization",
      "Aggregation",
      "Composition"
    ],
    "answerIndex": 0,
    "explanation": "Combining Car, Bus, and Bike into a generalized Vehicle superclass is Generalization."
  },
  {
    "id": 147,
    "category": "ER & EER Model",
    "question": "Inheritance in EER allows a subclass to inherit:",
    "options": [
      "Queries Only",
      "Attributes and Relationships of Superclass",
      "SQL Commands",
      "Tables Only"
    ],
    "answerIndex": 1,
    "explanation": "Type Inheritance lets subclasses inherit all attributes and relationship participations of their superclass."
  },
  {
    "id": 148,
    "category": "ER & EER Model",
    "question": "Aggregation is mainly used to:",
    "options": [
      "Remove Redundancy",
      "Treat a Relationship as a Higher-Level Entity",
      "Create Keys",
      "Create Indexes"
    ],
    "answerIndex": 1,
    "explanation": "Aggregation abstracts relationships between entity sets into higher-level composite entities."
  },
  {
    "id": 149,
    "category": "ER & EER Model",
    "question": "Which EER concept allows subclasses to inherit properties from a superclass?",
    "options": [
      "Aggregation",
      "Composition",
      "Inheritance",
      "Participation"
    ],
    "answerIndex": 2,
    "explanation": "Inheritance allows subclasses to inherit superclass attributes and relationships."
  },
  {
    "id": 150,
    "category": "ER & EER Model",
    "question": "The main purpose of the ER model is to:",
    "options": [
      "Execute SQL Queries",
      "Optimize Transactions",
      "Design the Logical Structure of a Database",
      "Store Physical Data"
    ],
    "answerIndex": 2,
    "explanation": "The ER model is a conceptual schema design tool representing logical database structure."
  },
  {
    "id": 151,
    "category": "Normalization",
    "question": "Functional Dependency describes:",
    "options": [
      "Relationship between tables",
      "Relationship between attributes",
      "Relationship between users",
      "Relationship between databases"
    ],
    "answerIndex": 1,
    "explanation": "A Functional Dependency (FD) describes a constraint relationship between attributes in a relation."
  },
  {
    "id": 152,
    "category": "Normalization",
    "question": "If A \u2192 B, then:",
    "options": [
      "B determines A",
      "A uniquely determines B",
      "A and B are unrelated",
      "B is always a primary key"
    ],
    "answerIndex": 1,
    "explanation": "A \u2192 B means attribute A functionally and uniquely determines attribute B."
  },
  {
    "id": 153,
    "category": "Normalization",
    "question": "In a functional dependency X \u2192 Y, X is called the:",
    "options": [
      "Determinant",
      "Dependent",
      "Candidate Key",
      "Foreign Key"
    ],
    "answerIndex": 0,
    "explanation": "In X \u2192 Y, X is the Determinant attribute set."
  },
  {
    "id": 154,
    "category": "Normalization",
    "question": "In X \u2192 Y, Y is called the:",
    "options": [
      "Determinant",
      "Dependent Attribute",
      "Primary Key",
      "Domain"
    ],
    "answerIndex": 1,
    "explanation": "In X \u2192 Y, Y is the Dependent attribute."
  },
  {
    "id": 155,
    "category": "Normalization",
    "question": "Functional dependencies are mainly used in:",
    "options": [
      "SQL Programming",
      "Query Optimization",
      "Normalization",
      "Backup"
    ],
    "answerIndex": 2,
    "explanation": "Functional dependencies provide the formal mathematical foundation for database Normalization."
  },
  {
    "id": 156,
    "category": "Normalization",
    "question": "Which dependency forms the basis of normalization?",
    "options": [
      "Referential Dependency",
      "Functional Dependency",
      "Join Dependency",
      "Inclusion Dependency"
    ],
    "answerIndex": 1,
    "explanation": "Functional Dependency analysis forms the primary foundation for 1NF, 2NF, 3NF, and BCNF."
  },
  {
    "id": 157,
    "category": "Normalization",
    "question": "Which statement about functional dependency is TRUE?",
    "options": [
      "One attribute can determine every other attribute.",
      "A determinant uniquely determines another attribute.",
      "Every foreign key is a determinant.",
      "Functional dependency exists only between tables."
    ],
    "answerIndex": 1,
    "explanation": "Functional dependency means a given determinant value uniquely pinpoints a dependent value."
  },
  {
    "id": 158,
    "category": "Normalization",
    "question": "Functional dependency helps eliminate:",
    "options": [
      "Encryption",
      "Data Redundancy",
      "Indexes",
      "Transactions"
    ],
    "answerIndex": 1,
    "explanation": "Analyzing FDs helps decompose tables to eliminate duplicate data and redundant storage."
  },
  {
    "id": 159,
    "category": "Normalization",
    "question": "A dependency in which an attribute depends on the entire composite key is called:",
    "options": [
      "Partial Dependency",
      "Full Functional Dependency",
      "Transitive Dependency",
      "Join Dependency"
    ],
    "answerIndex": 1,
    "explanation": "Full Functional Dependency requires a non-prime attribute to depend on the whole candidate key, not a proper subset."
  },
  {
    "id": 160,
    "category": "Normalization",
    "question": "A dependency on only part of a composite key is called:",
    "options": [
      "Full Dependency",
      "Partial Dependency",
      "Transitive Dependency",
      "Multivalued Dependency"
    ],
    "answerIndex": 1,
    "explanation": "Partial Dependency occurs when a non-key attribute depends on a proper subset of a composite candidate key."
  },
  {
    "id": 161,
    "category": "Normalization",
    "question": "Partial dependency occurs when:",
    "options": [
      "Primary key has one attribute",
      "Primary key is composite",
      "There is no key",
      "Only foreign keys exist"
    ],
    "answerIndex": 1,
    "explanation": "Partial dependency can only occur when a relation has a composite primary key."
  },
  {
    "id": 162,
    "category": "Normalization",
    "question": "Which normal form removes partial dependency?",
    "options": [
      "1NF",
      "2NF",
      "3NF",
      "BCNF"
    ],
    "answerIndex": 1,
    "explanation": "Second Normal Form (2NF) eliminates partial functional dependencies."
  },
  {
    "id": 163,
    "category": "Normalization",
    "question": "Transitive dependency occurs when:",
    "options": [
      "A non-key attribute depends directly on the key",
      "A non-key attribute depends on another non-key attribute",
      "A key depends on another key",
      "A foreign key references a primary key"
    ],
    "answerIndex": 1,
    "explanation": "Transitive dependency X \u2192 Y and Y \u2192 Z exists when a non-key attribute Z depends on another non-key attribute Y."
  },
  {
    "id": 164,
    "category": "Normalization",
    "question": "Which normal form removes transitive dependency?",
    "options": [
      "1NF",
      "2NF",
      "3NF",
      "BCNF"
    ],
    "answerIndex": 2,
    "explanation": "Third Normal Form (3NF) eliminates transitive functional dependencies."
  },
  {
    "id": 165,
    "category": "Normalization",
    "question": "Which dependency is allowed in 2NF but not in 3NF?",
    "options": [
      "Full Dependency",
      "Transitive Dependency",
      "Candidate Dependency",
      "Domain Dependency"
    ],
    "answerIndex": 1,
    "explanation": "2NF permits transitive dependencies, but 3NF strictly forbids them."
  },
  {
    "id": 166,
    "category": "Normalization",
    "question": "Normalization is the process of:",
    "options": [
      "Compressing data",
      "Encrypting data",
      "Organizing data to reduce redundancy",
      "Backing up data"
    ],
    "answerIndex": 2,
    "explanation": "Normalization is the systematic process of structuring relation schemas to minimize redundancy and anomalies."
  },
  {
    "id": 167,
    "category": "Normalization",
    "question": "The primary objective of normalization is:",
    "options": [
      "Increase redundancy",
      "Minimize redundancy and anomalies",
      "Improve graphics",
      "Increase storage"
    ],
    "answerIndex": 1,
    "explanation": "Normalization minimizes data duplication and prevents insertion, update, and deletion anomalies."
  },
  {
    "id": 168,
    "category": "Normalization",
    "question": "Which of the following is NOT an objective of normalization?",
    "options": [
      "Reduce redundancy",
      "Improve consistency",
      "Increase duplicate data",
      "Eliminate anomalies"
    ],
    "answerIndex": 2,
    "explanation": "Increasing duplicate data contradicts the primary goal of normalization."
  },
  {
    "id": 169,
    "category": "Normalization",
    "question": "Normalization mainly improves:",
    "options": [
      "Monitor Speed",
      "Database Design",
      "Network Speed",
      "Processor Performance"
    ],
    "answerIndex": 1,
    "explanation": "Normalization refines database schema design for data consistency and logical integrity."
  },
  {
    "id": 170,
    "category": "Normalization",
    "question": "Which of the following is an insertion anomaly?",
    "options": [
      "Unable to update data",
      "Unable to insert data without unrelated information",
      "Unable to delete files",
      "Unable to create indexes"
    ],
    "answerIndex": 1,
    "explanation": "Insertion anomaly occurs when data cannot be recorded without artificially supplying unrelated attributes."
  },
  {
    "id": 171,
    "category": "Normalization",
    "question": "Deletion anomaly occurs when:",
    "options": [
      "Data is duplicated",
      "Deleting one record unintentionally removes useful information",
      "Index is deleted",
      "Schema is modified"
    ],
    "answerIndex": 1,
    "explanation": "Deletion anomaly happens when removing a row unintentionally destroys other vital business facts."
  },
  {
    "id": 172,
    "category": "Normalization",
    "question": "Update anomaly occurs because of:",
    "options": [
      "Encryption",
      "Redundant Data",
      "Views",
      "Constraints"
    ],
    "answerIndex": 1,
    "explanation": "Update anomaly occurs when inconsistent data modifications result from redundant data stored in multiple places."
  },
  {
    "id": 173,
    "category": "Normalization",
    "question": "First Normal Form requires:",
    "options": [
      "Composite attributes",
      "Atomic attribute values",
      "No foreign keys",
      "No primary key"
    ],
    "answerIndex": 1,
    "explanation": "1NF requires that all column attribute values must be scalar and atomic."
  },
  {
    "id": 174,
    "category": "Normalization",
    "question": "1NF eliminates:",
    "options": [
      "Partial dependency",
      "Transitive dependency",
      "Repeating groups",
      "Join dependency"
    ],
    "answerIndex": 2,
    "explanation": "1NF eliminates repeating groups, multi-valued attributes, and non-atomic fields."
  },
  {
    "id": 175,
    "category": "Normalization",
    "question": "Which violates 1NF?",
    "options": [
      "One phone number",
      "Multiple phone numbers in one field",
      "One roll number",
      "One CNIC"
    ],
    "answerIndex": 1,
    "explanation": "Storing multiple comma-separated values in a single cell violates atomic value rules of 1NF."
  },
  {
    "id": 176,
    "category": "Normalization",
    "question": "Atomicity in 1NF means:",
    "options": [
      "Fast transactions",
      "Indivisible attribute values",
      "Composite keys",
      "Data encryption"
    ],
    "answerIndex": 1,
    "explanation": "Atomicity means attribute values are single, indivisible fields."
  },
  {
    "id": 177,
    "category": "Normalization",
    "question": "A relation must first satisfy _____ before 2NF.",
    "options": [
      "BCNF",
      "1NF",
      "3NF",
      "4NF"
    ],
    "answerIndex": 1,
    "explanation": "A relation must satisfy 1NF before it can be evaluated for 2NF."
  },
  {
    "id": 178,
    "category": "Normalization",
    "question": "2NF removes:",
    "options": [
      "Repeating groups",
      "Partial Dependency",
      "Transitive Dependency",
      "Join Dependency"
    ],
    "answerIndex": 1,
    "explanation": "2NF requires 1NF compliance and the total elimination of partial dependencies."
  },
  {
    "id": 179,
    "category": "Normalization",
    "question": "2NF applies mainly when:",
    "options": [
      "Primary key is single",
      "Composite primary key exists",
      "Foreign key exists",
      "No keys exist"
    ],
    "answerIndex": 1,
    "explanation": "2NF is relevant when relations possess composite candidate keys."
  },
  {
    "id": 180,
    "category": "Normalization",
    "question": "Which dependency remains in 2NF?",
    "options": [
      "Partial Dependency",
      "Transitive Dependency",
      "Multivalued Dependency",
      "Join Dependency"
    ],
    "answerIndex": 1,
    "explanation": "2NF removes partial dependencies but allows transitive dependencies to remain."
  },
  {
    "id": 181,
    "category": "Normalization",
    "question": "A table in 3NF must already be in:",
    "options": [
      "1NF only",
      "2NF",
      "BCNF",
      "None"
    ],
    "answerIndex": 1,
    "explanation": "A table must satisfy 2NF requirements before achieving 3NF."
  },
  {
    "id": 182,
    "category": "Normalization",
    "question": "3NF removes:",
    "options": [
      "Partial Dependency",
      "Transitive Dependency",
      "Candidate Keys",
      "Foreign Keys"
    ],
    "answerIndex": 1,
    "explanation": "3NF removes transitive dependencies where a non-key attribute determines another non-key attribute."
  },
  {
    "id": 183,
    "category": "Normalization",
    "question": "In 3NF, every non-key attribute should depend on:",
    "options": [
      "Another non-key attribute",
      "The key, the whole key, and nothing but the key",
      "Foreign keys",
      "Composite attributes"
    ],
    "answerIndex": 1,
    "explanation": "In 3NF, non-key attributes depend directly on the primary key, the whole key, and nothing but the key."
  },
  {
    "id": 184,
    "category": "Normalization",
    "question": "Which dependency is NOT allowed in 3NF?",
    "options": [
      "Full Functional Dependency",
      "Transitive Dependency",
      "Candidate Key Dependency",
      "Primary Key Dependency"
    ],
    "answerIndex": 1,
    "explanation": "Transitive functional dependencies are prohibited in 3NF."
  },
  {
    "id": 185,
    "category": "Normalization",
    "question": "BCNF is a stronger version of:",
    "options": [
      "1NF",
      "2NF",
      "3NF",
      "4NF"
    ],
    "answerIndex": 2,
    "explanation": "Boyce-Codd Normal Form (BCNF) is a stricter, stronger variation of 3NF."
  },
  {
    "id": 186,
    "category": "Normalization",
    "question": "BCNF requires:",
    "options": [
      "Every determinant must be a foreign key",
      "Every determinant must be a candidate key",
      "Every table must have two primary keys",
      "Every attribute must be unique"
    ],
    "answerIndex": 1,
    "explanation": "BCNF requires that for every functional dependency X \u2192 Y, X must be a candidate key (super key)."
  },
  {
    "id": 187,
    "category": "Normalization",
    "question": "Which normal form is stricter?",
    "options": [
      "3NF",
      "BCNF",
      "2NF",
      "1NF"
    ],
    "answerIndex": 1,
    "explanation": "BCNF enforces stricter conditions than standard 3NF by handling overlapping candidate keys."
  },
  {
    "id": 188,
    "category": "Normalization",
    "question": "BCNF eliminates anomalies caused by:",
    "options": [
      "Composite attributes",
      "Non-candidate key determinants",
      "Primary keys",
      "Foreign keys"
    ],
    "answerIndex": 1,
    "explanation": "BCNF removes anomalies resulting from functional dependencies where determinants are not candidate keys."
  },
  {
    "id": 189,
    "category": "Normalization",
    "question": "A Prime Attribute is:",
    "options": [
      "Any foreign key",
      "An attribute that is part of a candidate key",
      "Any primary key",
      "Any unique attribute"
    ],
    "answerIndex": 1,
    "explanation": "A Prime Attribute is an attribute that belongs to any candidate key of the relation."
  },
  {
    "id": 190,
    "category": "Normalization",
    "question": "A Non-prime Attribute is:",
    "options": [
      "Part of candidate key",
      "Not part of any candidate key",
      "A foreign key",
      "A primary key"
    ],
    "answerIndex": 1,
    "explanation": "A Non-prime Attribute does not belong to any candidate key."
  },
  {
    "id": 191,
    "category": "Normalization",
    "question": "Candidate keys are identified during:",
    "options": [
      "Backup",
      "Database Design",
      "Query Execution",
      "Recovery"
    ],
    "answerIndex": 1,
    "explanation": "Candidate keys and functional dependencies are determined during conceptual/logical database design."
  },
  {
    "id": 192,
    "category": "Normalization",
    "question": "Which normal form is mainly concerned with atomic values?",
    "options": [
      "1NF",
      "2NF",
      "3NF",
      "BCNF"
    ],
    "answerIndex": 0,
    "explanation": "1NF focuses on atomicity of attribute values."
  },
  {
    "id": 193,
    "category": "Normalization",
    "question": "Which normal form specifically removes partial dependency?",
    "options": [
      "1NF",
      "2NF",
      "3NF",
      "BCNF"
    ],
    "answerIndex": 1,
    "explanation": "2NF specifically addresses and eliminates partial functional dependency."
  },
  {
    "id": 194,
    "category": "Normalization",
    "question": "Which normal form specifically removes transitive dependency?",
    "options": [
      "1NF",
      "2NF",
      "3NF",
      "BCNF"
    ],
    "answerIndex": 2,
    "explanation": "3NF specifically addresses and eliminates transitive functional dependency."
  },
  {
    "id": 195,
    "category": "Normalization",
    "question": "Which normal form requires every determinant to be a candidate key?",
    "options": [
      "2NF",
      "3NF",
      "BCNF",
      "4NF"
    ],
    "answerIndex": 2,
    "explanation": "BCNF strictly requires every functional determinant to be a super key/candidate key."
  },
  {
    "id": 196,
    "category": "Normalization",
    "question": "Which normal form is generally sufficient for most practical database designs?",
    "options": [
      "1NF",
      "2NF",
      "3NF",
      "5NF"
    ],
    "answerIndex": 2,
    "explanation": "3NF (or BCNF) provides an optimal balance of redundancy elimination and performance for real-world applications."
  },
  {
    "id": 197,
    "category": "Normalization",
    "question": "Which of the following best describes denormalization?",
    "options": [
      "Removing duplicate rows",
      "Intentionally introducing redundancy to improve performance",
      "Converting tables into views",
      "Creating indexes"
    ],
    "answerIndex": 1,
    "explanation": "Denormalization intentionally reintroduces controlled redundancy into normalized tables to speed up complex queries."
  },
  {
    "id": 198,
    "category": "Normalization",
    "question": "Denormalization is mainly performed to:",
    "options": [
      "Improve normalization",
      "Improve query performance",
      "Remove foreign keys",
      "Reduce storage"
    ],
    "answerIndex": 1,
    "explanation": "Denormalization reduces costly JOIN operations to optimize read query execution speed."
  },
  {
    "id": 199,
    "category": "Normalization",
    "question": "Which statement is TRUE?",
    "options": [
      "Every BCNF relation violates 3NF.",
      "Every BCNF relation is also in 3NF.",
      "Every 2NF relation is in BCNF.",
      "Every 1NF relation is in 3NF."
    ],
    "answerIndex": 1,
    "explanation": "BCNF is a stricter subset of 3NF; therefore, every relation in BCNF is automatically in 3NF."
  },
  {
    "id": 200,
    "category": "Normalization",
    "question": "Which sequence of normalization forms is correct?",
    "options": [
      "BCNF \u2192 3NF \u2192 2NF \u2192 1NF",
      "2NF \u2192 BCNF \u2192 1NF \u2192 3NF",
      "1NF \u2192 2NF \u2192 3NF \u2192 BCNF",
      "3NF \u2192 2NF \u2192 1NF \u2192 BCNF"
    ],
    "answerIndex": 2,
    "explanation": "The standard progression of normal forms is 1NF \u2192 2NF \u2192 3NF \u2192 BCNF."
  },
  {
    "id": 201,
    "category": "SQL Commands",
    "question": "SQL stands for:",
    "options": [
      "Structured Question Language",
      "Structured Query Language",
      "Standard Query Logic",
      "System Query Language"
    ],
    "answerIndex": 1,
    "explanation": "SQL stands for Structured Query Language."
  },
  {
    "id": 202,
    "category": "SQL Commands",
    "question": "SQL is primarily used to:",
    "options": [
      "Design Networks",
      "Compile Programs",
      "Manage and Query Databases",
      "Create Operating Systems"
    ],
    "answerIndex": 2,
    "explanation": "SQL is the standard language for defining, querying, and managing relational databases."
  },
  {
    "id": 203,
    "category": "SQL Commands",
    "question": "SQL is:",
    "options": [
      "A Programming Language",
      "A Database Query Language",
      "An Operating System",
      "A Compiler"
    ],
    "answerIndex": 1,
    "explanation": "SQL is a domain-specific database query and data manipulation language."
  },
  {
    "id": 204,
    "category": "SQL Commands",
    "question": "Which organization originally standardized SQL?",
    "options": [
      "IEEE",
      "Microsoft",
      "ANSI",
      "Oracle"
    ],
    "answerIndex": 2,
    "explanation": "ANSI (American National Standards Institute) first standardized SQL in 1986."
  },
  {
    "id": 205,
    "category": "SQL Commands",
    "question": "SQL is mainly used with:",
    "options": [
      "Hierarchical Databases",
      "Network Databases",
      "Relational Databases",
      "Graph Databases"
    ],
    "answerIndex": 2,
    "explanation": "SQL is used universally as the query interface for Relational Database Management Systems (RDBMS)."
  },
  {
    "id": 206,
    "category": "SQL Commands",
    "question": "Which category contains CREATE, ALTER and DROP?",
    "options": [
      "DML",
      "DCL",
      "DDL",
      "TCL"
    ],
    "answerIndex": 2,
    "explanation": "Data Definition Language (DDL) includes commands that define database schema structure."
  },
  {
    "id": 207,
    "category": "SQL Commands",
    "question": "DDL stands for:",
    "options": [
      "Data Design Language",
      "Data Definition Language",
      "Database Definition Logic",
      "Data Development Language"
    ],
    "answerIndex": 1,
    "explanation": "DDL stands for Data Definition Language."
  },
  {
    "id": 208,
    "category": "SQL Commands",
    "question": "Which command creates a new table?",
    "options": [
      "INSERT",
      "CREATE",
      "UPDATE",
      "SELECT"
    ],
    "answerIndex": 1,
    "explanation": "The CREATE TABLE statement creates a new database table."
  },
  {
    "id": 209,
    "category": "SQL Commands",
    "question": "Which command permanently removes a table?",
    "options": [
      "DELETE",
      "DROP",
      "REMOVE",
      "CLEAR"
    ],
    "answerIndex": 1,
    "explanation": "The DROP TABLE statement permanently deletes a table structure and all its data."
  },
  {
    "id": 210,
    "category": "SQL Commands",
    "question": "ALTER command is used to:",
    "options": [
      "Delete Records",
      "Modify Database Objects",
      "Retrieve Records",
      "Commit Transactions"
    ],
    "answerIndex": 1,
    "explanation": "ALTER is a DDL command used to modify existing table structures or database objects."
  },
  {
    "id": 211,
    "category": "SQL Commands",
    "question": "Which command removes all rows but keeps the table structure?",
    "options": [
      "DELETE",
      "TRUNCATE",
      "DROP",
      "REMOVE"
    ],
    "answerIndex": 1,
    "explanation": "TRUNCATE TABLE quickly removes all rows while keeping the table definition intact."
  },
  {
    "id": 212,
    "category": "SQL Commands",
    "question": "TRUNCATE is classified as:",
    "options": [
      "DML",
      "DCL",
      "DDL",
      "TCL"
    ],
    "answerIndex": 2,
    "explanation": "TRUNCATE is classified as a DDL statement because it deallocates data pages and resets table metadata."
  },
  {
    "id": 213,
    "category": "SQL Commands",
    "question": "DML stands for:",
    "options": [
      "Database Management Language",
      "Data Manipulation Language",
      "Data Modeling Language",
      "Data Maintenance Language"
    ],
    "answerIndex": 1,
    "explanation": "DML stands for Data Manipulation Language."
  },
  {
    "id": 214,
    "category": "SQL Commands",
    "question": "Which command inserts new records?",
    "options": [
      "CREATE",
      "INSERT",
      "UPDATE",
      "ALTER"
    ],
    "answerIndex": 1,
    "explanation": "The INSERT INTO statement adds new data records to a table."
  },
  {
    "id": 215,
    "category": "SQL Commands",
    "question": "UPDATE command is used to:",
    "options": [
      "Insert Records",
      "Modify Existing Records",
      "Delete Tables",
      "Create Views"
    ],
    "answerIndex": 1,
    "explanation": "The UPDATE statement modifies existing data values within table rows."
  },
  {
    "id": 216,
    "category": "SQL Commands",
    "question": "DELETE command removes:",
    "options": [
      "Table Structure",
      "Rows from a Table",
      "Database",
      "Indexes"
    ],
    "answerIndex": 1,
    "explanation": "DELETE is a DML command that removes specified rows from a table based on a condition."
  },
  {
    "id": 217,
    "category": "SQL Commands",
    "question": "Which command retrieves data?",
    "options": [
      "UPDATE",
      "DELETE",
      "SELECT",
      "ALTER"
    ],
    "answerIndex": 2,
    "explanation": "The SELECT statement retrieves data records matching query conditions."
  },
  {
    "id": 218,
    "category": "SQL Commands",
    "question": "SELECT belongs to:",
    "options": [
      "DDL",
      "DCL",
      "DQL",
      "TCL"
    ],
    "answerIndex": 2,
    "explanation": "SELECT belongs to Data Query Language (DQL), a subset of DML."
  },
  {
    "id": 219,
    "category": "SQL Commands",
    "question": "Which SQL category manipulates data?",
    "options": [
      "DDL",
      "DML",
      "DCL",
      "TCL"
    ],
    "answerIndex": 1,
    "explanation": "Data Manipulation Language (DML) statements (INSERT, UPDATE, DELETE) alter table data content."
  },
  {
    "id": 220,
    "category": "SQL Commands",
    "question": "DCL stands for:",
    "options": [
      "Data Configuration Language",
      "Data Control Language",
      "Database Command Language",
      "Data Connection Language"
    ],
    "answerIndex": 1,
    "explanation": "DCL stands for Data Control Language."
  },
  {
    "id": 221,
    "category": "SQL Commands",
    "question": "Which command grants user privileges?",
    "options": [
      "COMMIT",
      "GRANT",
      "UPDATE",
      "CREATE"
    ],
    "answerIndex": 1,
    "explanation": "GRANT is a DCL command used to assign security privileges and access permissions."
  },
  {
    "id": 222,
    "category": "SQL Commands",
    "question": "Which command removes user privileges?",
    "options": [
      "DROP",
      "DELETE",
      "REVOKE",
      "REMOVE"
    ],
    "answerIndex": 2,
    "explanation": "REVOKE is a DCL command used to take back assigned permissions from users."
  },
  {
    "id": 223,
    "category": "SQL Commands",
    "question": "GRANT and REVOKE belong to:",
    "options": [
      "DML",
      "DDL",
      "DCL",
      "TCL"
    ],
    "answerIndex": 2,
    "explanation": "GRANT and REVOKE are the principal DCL commands."
  },
  {
    "id": 224,
    "category": "SQL Commands",
    "question": "TCL stands for:",
    "options": [
      "Table Control Language",
      "Transaction Control Language",
      "Transaction Command Logic",
      "Table Command Language"
    ],
    "answerIndex": 1,
    "explanation": "TCL stands for Transaction Control Language."
  },
  {
    "id": 225,
    "category": "SQL Commands",
    "question": "Which command permanently saves a transaction?",
    "options": [
      "ROLLBACK",
      "COMMIT",
      "SAVEPOINT",
      "INSERT"
    ],
    "answerIndex": 1,
    "explanation": "COMMIT permanently saves all modifications made during the current transaction."
  },
  {
    "id": 226,
    "category": "SQL Commands",
    "question": "Which command restores the database to the previous committed state?",
    "options": [
      "COMMIT",
      "ROLLBACK",
      "DELETE",
      "DROP"
    ],
    "answerIndex": 1,
    "explanation": "ROLLBACK cancels uncommitted changes and reverts data to the last committed checkpoint state."
  },
  {
    "id": 227,
    "category": "SQL Commands",
    "question": "SAVEPOINT is used to:",
    "options": [
      "Delete Tables",
      "Create Intermediate Transaction Points",
      "Create Indexes",
      "Update Records"
    ],
    "answerIndex": 1,
    "explanation": "SAVEPOINT sets an intermediate marker within a transaction to allow partial rollback."
  },
  {
    "id": 228,
    "category": "SQL Commands",
    "question": "COMMIT belongs to:",
    "options": [
      "DDL",
      "DML",
      "DCL",
      "TCL"
    ],
    "answerIndex": 3,
    "explanation": "COMMIT is a Transaction Control Language (TCL) command."
  },
  {
    "id": 229,
    "category": "SQL Clauses & Functions",
    "question": "Which clause filters rows based on a condition?",
    "options": [
      "FROM",
      "SELECT",
      "WHERE",
      "GROUP BY"
    ],
    "answerIndex": 2,
    "explanation": "The WHERE clause filters individual rows before grouping or aggregation."
  },
  {
    "id": 230,
    "category": "SQL Clauses & Functions",
    "question": "WHERE clause is used with:",
    "options": [
      "Conditions",
      "Conditional Filtering",
      "Table Creation",
      "Transactions"
    ],
    "answerIndex": 1,
    "explanation": "WHERE provides row-level conditional filtering in SELECT, UPDATE, and DELETE queries."
  },
  {
    "id": 231,
    "category": "SQL Clauses & Functions",
    "question": "Which clause is evaluated before GROUP BY?",
    "options": [
      "ORDER BY",
      "WHERE",
      "HAVING",
      "LIMIT"
    ],
    "answerIndex": 1,
    "explanation": "In SQL query execution order, WHERE is evaluated before GROUP BY."
  },
  {
    "id": 232,
    "category": "SQL Clauses & Functions",
    "question": "ORDER BY is used to:",
    "options": [
      "Delete Rows",
      "Sort Query Results",
      "Create Tables",
      "Join Tables"
    ],
    "answerIndex": 1,
    "explanation": "The ORDER BY clause sorts the result set rows in ascending or descending order."
  },
  {
    "id": 233,
    "category": "SQL Clauses & Functions",
    "question": "Default sorting order of ORDER BY is:",
    "options": [
      "Ascending",
      "Descending",
      "Random",
      "Alphabetical Only"
    ],
    "answerIndex": 0,
    "explanation": "ORDER BY defaults to Ascending (ASC) order if unspecified."
  },
  {
    "id": 234,
    "category": "SQL Clauses & Functions",
    "question": "Which keyword sorts in descending order?",
    "options": [
      "ASC",
      "DESC",
      "DOWN",
      "REVERSE"
    ],
    "answerIndex": 1,
    "explanation": "The DESC keyword specifies descending sorting order in ORDER BY."
  },
  {
    "id": 235,
    "category": "SQL Clauses & Functions",
    "question": "GROUP BY is mainly used with:",
    "options": [
      "INSERT",
      "Aggregate Functions",
      "CREATE TABLE",
      "DELETE"
    ],
    "answerIndex": 1,
    "explanation": "GROUP BY arranges identical data into summary groups, commonly paired with Aggregate Functions."
  },
  {
    "id": 236,
    "category": "SQL Clauses & Functions",
    "question": "HAVING clause filters:",
    "options": [
      "Individual Rows",
      "Groups",
      "Tables",
      "Columns"
    ],
    "answerIndex": 1,
    "explanation": "HAVING filters aggregated groups created by GROUP BY, operating on summary values."
  },
  {
    "id": 237,
    "category": "SQL Clauses & Functions",
    "question": "Which clause is used after GROUP BY?",
    "options": [
      "WHERE",
      "HAVING",
      "ORDER",
      "JOIN"
    ],
    "answerIndex": 1,
    "explanation": "HAVING is evaluated after GROUP BY to filter grouped results."
  },
  {
    "id": 238,
    "category": "SQL Clauses & Functions",
    "question": "Which clause cannot use aggregate functions directly?",
    "options": [
      "WHERE",
      "HAVING",
      "GROUP BY",
      "ORDER BY"
    ],
    "answerIndex": 0,
    "explanation": "WHERE filters rows before aggregation occurs and cannot directly evaluate aggregate functions like COUNT() or SUM()."
  },
  {
    "id": 239,
    "category": "SQL Clauses & Functions",
    "question": "Which is an aggregate function?",
    "options": [
      "LENGTH()",
      "COUNT()",
      "UPPER()",
      "ROUND()"
    ],
    "answerIndex": 1,
    "explanation": "COUNT() is a standard SQL aggregate function operating on a set of rows."
  },
  {
    "id": 240,
    "category": "SQL Clauses & Functions",
    "question": "COUNT(*) returns:",
    "options": [
      "Number of Columns",
      "Number of Rows",
      "Number of Tables",
      "Number of Databases"
    ],
    "answerIndex": 1,
    "explanation": "COUNT(*) returns the total number of rows matching the query, including NULL values."
  },
  {
    "id": 241,
    "category": "SQL Clauses & Functions",
    "question": "Which function returns the highest value?",
    "options": [
      "MIN()",
      "AVG()",
      "MAX()",
      "COUNT()"
    ],
    "answerIndex": 2,
    "explanation": "MAX() calculates and returns the maximum value in a column."
  },
  {
    "id": 242,
    "category": "SQL Clauses & Functions",
    "question": "Which function returns the lowest value?",
    "options": [
      "MIN()",
      "MAX()",
      "SUM()",
      "AVG()"
    ],
    "answerIndex": 0,
    "explanation": "MIN() returns the minimum scalar value in a column."
  },
  {
    "id": 243,
    "category": "SQL Clauses & Functions",
    "question": "Which function calculates average?",
    "options": [
      "COUNT()",
      "AVG()",
      "MAX()",
      "SUM()"
    ],
    "answerIndex": 1,
    "explanation": "AVG() calculates the mathematical average of numeric column values."
  },
  {
    "id": 244,
    "category": "SQL Clauses & Functions",
    "question": "SUM() calculates:",
    "options": [
      "Average",
      "Largest Value",
      "Total of Numeric Values",
      "Number of Rows"
    ],
    "answerIndex": 2,
    "explanation": "SUM() computes the cumulative arithmetic sum of numeric values."
  },
  {
    "id": 245,
    "category": "SQL Clauses & Functions",
    "question": "Which aggregate function ignores NULL values?",
    "options": [
      "COUNT(column)",
      "SUM()",
      "AVG()",
      "All of them"
    ],
    "answerIndex": 3,
    "explanation": "All aggregate functions (SUM, AVG, MIN, MAX, COUNT(col)) ignore NULL values (except COUNT(*))."
  },
  {
    "id": 246,
    "category": "SQL Clauses & Functions",
    "question": "Which operator searches for a range of values?",
    "options": [
      "LIKE",
      "BETWEEN",
      "IN",
      "EXISTS"
    ],
    "answerIndex": 1,
    "explanation": "BETWEEN tests whether a value falls within an inclusive range."
  },
  {
    "id": 247,
    "category": "SQL Clauses & Functions",
    "question": "Which operator checks membership in a list?",
    "options": [
      "BETWEEN",
      "IN",
      "LIKE",
      "ALL"
    ],
    "answerIndex": 1,
    "explanation": "The IN operator checks if a value matches any entry in a discrete list or subquery result."
  },
  {
    "id": 248,
    "category": "SQL Clauses & Functions",
    "question": "Which operator is mainly used with wildcard characters?",
    "options": [
      "LIKE",
      "BETWEEN",
      "EXISTS",
      "UNION"
    ],
    "answerIndex": 0,
    "explanation": "LIKE performs pattern matching using wildcard characters (% and _)."
  },
  {
    "id": 249,
    "category": "SQL Clauses & Functions",
    "question": "Which wildcard represents any number of characters in SQL?",
    "options": [
      "_",
      "%",
      "*",
      "#"
    ],
    "answerIndex": 1,
    "explanation": "The percent sign (%) wildcard matches zero, one, or multiple arbitrary characters."
  },
  {
    "id": 250,
    "category": "SQL Clauses & Functions",
    "question": "Which wildcard represents exactly one character?",
    "options": [
      "%",
      "_",
      "*",
      "?"
    ],
    "answerIndex": 1,
    "explanation": "The underscore (_) wildcard matches exactly one single character."
  },
  {
    "id": 251,
    "category": "Joins & SQL Objects",
    "question": "A JOIN operation is used to:",
    "options": [
      "Delete records",
      "Create tables",
      "Retrieve related data from two or more tables",
      "Create indexes"
    ],
    "answerIndex": 2,
    "explanation": "A JOIN query combines rows from two or more tables based on related key columns."
  },
  {
    "id": 252,
    "category": "Joins & SQL Objects",
    "question": "Which join returns only matching rows from both tables?",
    "options": [
      "LEFT JOIN",
      "RIGHT JOIN",
      "INNER JOIN",
      "FULL OUTER JOIN"
    ],
    "answerIndex": 2,
    "explanation": "INNER JOIN returns only rows where matching values exist in both joined tables."
  },
  {
    "id": 253,
    "category": "Joins & SQL Objects",
    "question": "Which join is also known as Equi Join?",
    "options": [
      "LEFT JOIN",
      "INNER JOIN (using equality condition)",
      "CROSS JOIN",
      "SELF JOIN"
    ],
    "answerIndex": 1,
    "explanation": "An INNER JOIN performed using an equality operator (=) is known as an Equi Join."
  },
  {
    "id": 254,
    "category": "Joins & SQL Objects",
    "question": "Which join returns all rows from the left table and matching rows from the right table?",
    "options": [
      "LEFT OUTER JOIN",
      "RIGHT OUTER JOIN",
      "INNER JOIN",
      "CROSS JOIN"
    ],
    "answerIndex": 0,
    "explanation": "LEFT OUTER JOIN returns all records from left table, plus matched values from right table."
  },
  {
    "id": 255,
    "category": "Joins & SQL Objects",
    "question": "Which join returns all rows from the right table and matching rows from the left table?",
    "options": [
      "LEFT JOIN",
      "RIGHT OUTER JOIN",
      "INNER JOIN",
      "CROSS JOIN"
    ],
    "answerIndex": 1,
    "explanation": "RIGHT OUTER JOIN returns all records from right table, plus matching records from left table."
  },
  {
    "id": 256,
    "category": "Joins & SQL Objects",
    "question": "Which join returns all rows from both tables?",
    "options": [
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "FULL OUTER JOIN"
    ],
    "answerIndex": 3,
    "explanation": "FULL OUTER JOIN returns all rows when there is a match in left OR right table."
  },
  {
    "id": 257,
    "category": "Joins & SQL Objects",
    "question": "Which join returns the Cartesian Product?",
    "options": [
      "INNER JOIN",
      "NATURAL JOIN",
      "CROSS JOIN",
      "SELF JOIN"
    ],
    "answerIndex": 2,
    "explanation": "CROSS JOIN pairs every row of the first table with every row of the second, returning their Cartesian Product."
  },
  {
    "id": 258,
    "category": "Joins & SQL Objects",
    "question": "Cartesian Product means:",
    "options": [
      "Matching rows only",
      "Every row of one table combined with every row of another table",
      "Duplicate rows only",
      "Sorted rows"
    ],
    "answerIndex": 1,
    "explanation": "Cartesian product combines each row of table A with all rows of table B (M \u00d7 N rows)."
  },
  {
    "id": 259,
    "category": "Joins & SQL Objects",
    "question": "Which join joins a table with itself?",
    "options": [
      "INNER JOIN",
      "CROSS JOIN",
      "SELF JOIN",
      "OUTER JOIN"
    ],
    "answerIndex": 2,
    "explanation": "A SELF JOIN is a regular join in which a table is joined with itself using table aliases."
  },
  {
    "id": 260,
    "category": "Joins & SQL Objects",
    "question": "SELF JOIN is useful for:",
    "options": [
      "Joining unrelated tables",
      "Comparing rows within the same table",
      "Creating indexes",
      "Creating views"
    ],
    "answerIndex": 1,
    "explanation": "SELF JOIN compares rows within the same table (e.g., matching employees to managers)."
  },
  {
    "id": 261,
    "category": "Joins & SQL Objects",
    "question": "NATURAL JOIN automatically joins tables based on:",
    "options": [
      "Primary Keys only",
      "Columns having the same name and compatible data types",
      "Foreign Keys only",
      "Indexes"
    ],
    "answerIndex": 1,
    "explanation": "NATURAL JOIN joins tables automatically using all columns sharing identical names and data types."
  },
  {
    "id": 262,
    "category": "Joins & SQL Objects",
    "question": "Which join usually returns the smallest result set?",
    "options": [
      "CROSS JOIN",
      "FULL OUTER JOIN",
      "INNER JOIN",
      "LEFT JOIN"
    ],
    "answerIndex": 2,
    "explanation": "INNER JOIN filters out non-matching rows, usually producing the smallest result set."
  },
  {
    "id": 263,
    "category": "Views & Indexes",
    "question": "A View is:",
    "options": [
      "Physical table",
      "Virtual table based on a query",
      "Index",
      "Stored Procedure"
    ],
    "answerIndex": 1,
    "explanation": "A View is a virtual database table defined by an underlying SELECT query statement."
  },
  {
    "id": 264,
    "category": "Views & Indexes",
    "question": "A view stores:",
    "options": [
      "Actual data",
      "SQL query definition",
      "Index entries",
      "Transaction logs"
    ],
    "answerIndex": 1,
    "explanation": "A standard View does not store physical data; it stores the SQL query definition in the data dictionary."
  },
  {
    "id": 265,
    "category": "Views & Indexes",
    "question": "Which SQL command creates a view?",
    "options": [
      "CREATE TABLE",
      "CREATE VIEW",
      "CREATE INDEX",
      "CREATE DATABASE"
    ],
    "answerIndex": 1,
    "explanation": "The CREATE VIEW statement creates a new virtual view."
  },
  {
    "id": 266,
    "category": "Views & Indexes",
    "question": "The main advantage of a view is:",
    "options": [
      "More redundancy",
      "Data security and simplified queries",
      "Increased storage",
      "Faster INSERT operations"
    ],
    "answerIndex": 1,
    "explanation": "Views simplify complex query logic and enhance security by restricting column/row visibility."
  },
  {
    "id": 267,
    "category": "Views & Indexes",
    "question": "A view always contains:",
    "options": [
      "Independent data",
      "Data derived from one or more tables",
      "Backup files",
      "Transaction logs"
    ],
    "answerIndex": 1,
    "explanation": "A View dynamically displays data derived from underlying base tables."
  },
  {
    "id": 268,
    "category": "Views & Indexes",
    "question": "Which statement about views is TRUE?",
    "options": [
      "Every view stores data permanently.",
      "A view is generally a virtual table.",
      "A view cannot use joins.",
      "A view cannot contain WHERE clauses."
    ],
    "answerIndex": 1,
    "explanation": "Standard views are virtual windows dynamically computed from base queries."
  },
  {
    "id": 269,
    "category": "Views & Indexes",
    "question": "Which SQL statement removes a view?",
    "options": [
      "DELETE VIEW",
      "DROP VIEW",
      "REMOVE VIEW",
      "CLEAR VIEW"
    ],
    "answerIndex": 1,
    "explanation": "DROP VIEW removes a view definition from the data dictionary."
  },
  {
    "id": 270,
    "category": "Views & Indexes",
    "question": "The primary purpose of an index is to:",
    "options": [
      "Increase redundancy",
      "Speed up data retrieval",
      "Reduce table size",
      "Backup data"
    ],
    "answerIndex": 1,
    "explanation": "Indexes speed up data retrieval operations by providing fast lookup access paths."
  },
  {
    "id": 271,
    "category": "Views & Indexes",
    "question": "Which SQL command creates an index?",
    "options": [
      "CREATE VIEW",
      "ALTER TABLE",
      "CREATE INDEX",
      "CREATE USER"
    ],
    "answerIndex": 2,
    "explanation": "The CREATE INDEX statement creates an access index on specified columns."
  },
  {
    "id": 272,
    "category": "Views & Indexes",
    "question": "CREATE INDEX belongs to:",
    "options": [
      "DML",
      "DCL",
      "DDL",
      "TCL"
    ],
    "answerIndex": 2,
    "explanation": "CREATE INDEX is a DDL command modifying database structural objects."
  },
  {
    "id": 273,
    "category": "Views & Indexes",
    "question": "Which database object improves query performance?",
    "options": [
      "Trigger",
      "Index",
      "View",
      "Transaction"
    ],
    "answerIndex": 1,
    "explanation": "Indexes significantly improve query search and retrieval performance."
  },
  {
    "id": 274,
    "category": "Views & Indexes",
    "question": "An index is especially useful for:",
    "options": [
      "Frequently searched columns",
      "Primary key lookups",
      "Foreign key searches",
      "All of them"
    ],
    "answerIndex": 3,
    "explanation": "Indexes optimize lookups on primary keys, foreign key joins, and frequently searched filter columns."
  },
  {
    "id": 275,
    "category": "Views & Indexes",
    "question": "Which index determines the physical order of rows?",
    "options": [
      "Secondary Index",
      "Clustered Index",
      "Bitmap Index",
      "Hash Index"
    ],
    "answerIndex": 1,
    "explanation": "A Clustered Index sorts and determines the physical storage order of rows in a table."
  },
  {
    "id": 276,
    "category": "Views & Indexes",
    "question": "A non-clustered index:",
    "options": [
      "Changes physical row order",
      "Maintains a separate structure pointing to rows",
      "Removes duplicates",
      "Stores backup data"
    ],
    "answerIndex": 1,
    "explanation": "A Non-Clustered Index maintains a separate B-tree structure containing pointers to physical data rows."
  },
  {
    "id": 277,
    "category": "Views & Indexes",
    "question": "How many clustered indexes can a table typically have?",
    "options": [
      "One",
      "Two",
      "Unlimited",
      "Depends on DBMS version"
    ],
    "answerIndex": 0,
    "explanation": "A table can have only ONE Clustered Index because data rows can be physically ordered only once."
  },
  {
    "id": 278,
    "category": "Views & Indexes",
    "question": "Which statement is TRUE?",
    "options": [
      "More indexes always improve performance.",
      "Too many indexes can slow INSERT, UPDATE, and DELETE operations.",
      "Indexes only improve DELETE.",
      "Indexes reduce storage requirements."
    ],
    "answerIndex": 1,
    "explanation": "Excessive indexes slow down write operations (INSERT, UPDATE, DELETE) because indexes must be updated on write."
  },
  {
    "id": 279,
    "category": "Schema & Metadata",
    "question": "Database schema defines:",
    "options": [
      "Current records",
      "Logical structure of the database",
      "User passwords",
      "Backup strategy"
    ],
    "answerIndex": 1,
    "explanation": "Database schema defines the overall logical blueprint and table organization of a database."
  },
  {
    "id": 280,
    "category": "Schema & Metadata",
    "question": "Schema contains:",
    "options": [
      "Data values only",
      "Tables, relationships, constraints, and other objects",
      "Transaction logs",
      "Index pages only"
    ],
    "answerIndex": 1,
    "explanation": "A schema contains metadata definitions for tables, views, fields, constraints, and keys."
  },
  {
    "id": 281,
    "category": "Schema & Metadata",
    "question": "Which changes more frequently?",
    "options": [
      "Schema",
      "Database Instance",
      "Data Dictionary",
      "Constraints"
    ],
    "answerIndex": 1,
    "explanation": "The database instance changes dynamically whenever data is updated."
  },
  {
    "id": 282,
    "category": "Schema & Metadata",
    "question": "A schema is created during:",
    "options": [
      "Backup",
      "Database Design",
      "Recovery",
      "Query Execution"
    ],
    "answerIndex": 1,
    "explanation": "A schema is created during the database design and initial system setup phase."
  },
  {
    "id": 283,
    "category": "Schema & Metadata",
    "question": "Database instance represents:",
    "options": [
      "Database design",
      "Current state of the database",
      "SQL syntax",
      "ER diagram"
    ],
    "answerIndex": 1,
    "explanation": "An instance represents the actual data state stored in the database at any given snapshot in time."
  },
  {
    "id": 284,
    "category": "Schema & Metadata",
    "question": "Which statement is TRUE?",
    "options": [
      "Schema changes frequently.",
      "Instance changes whenever data changes.",
      "Schema and instance are identical.",
      "Instance stores SQL commands."
    ],
    "answerIndex": 1,
    "explanation": "The database instance mutates dynamically whenever data modifications occur."
  },
  {
    "id": 285,
    "category": "Schema & Metadata",
    "question": "Data Dictionary stores:",
    "options": [
      "User records only",
      "Metadata about database objects",
      "Backup files",
      "Transaction history"
    ],
    "answerIndex": 1,
    "explanation": "The Data Dictionary stores system metadata describing tables, columns, indexes, and constraints."
  },
  {
    "id": 286,
    "category": "Schema & Metadata",
    "question": "Metadata means:",
    "options": [
      "User data",
      "Data about data",
      "Temporary data",
      "Duplicate data"
    ],
    "answerIndex": 1,
    "explanation": "Metadata is defined as structural data that describes other data."
  },
  {
    "id": 287,
    "category": "Schema & Metadata",
    "question": "Which of the following is stored in a Data Dictionary?",
    "options": [
      "Table names",
      "Column names",
      "Data types",
      "All of them"
    ],
    "answerIndex": 3,
    "explanation": "Data Dictionaries hold definitions for table names, column data types, security roles, and constraints."
  },
  {
    "id": 288,
    "category": "Schema & Metadata",
    "question": "The Data Dictionary is maintained mainly by:",
    "options": [
      "End Users",
      "DBMS",
      "Compiler",
      "Operating System"
    ],
    "answerIndex": 1,
    "explanation": "The DBMS automatically maintains and updates system Data Dictionary tables."
  },
  {
    "id": 289,
    "category": "Triggers & Procedures",
    "question": "Which database object automatically executes when a specified event occurs?",
    "options": [
      "View",
      "Index",
      "Trigger",
      "Cursor"
    ],
    "answerIndex": 2,
    "explanation": "A Trigger is a procedural code block that automatically executes in response to database events (INSERT, UPDATE, DELETE)."
  },
  {
    "id": 290,
    "category": "Triggers & Procedures",
    "question": "Trigger is executed:",
    "options": [
      "Manually only",
      "Automatically",
      "Weekly",
      "After backup"
    ],
    "answerIndex": 1,
    "explanation": "Triggers fire automatically when associated DML/DDL events occur."
  },
  {
    "id": 291,
    "category": "Triggers & Procedures",
    "question": "Which event can activate a trigger?",
    "options": [
      "INSERT",
      "UPDATE",
      "DELETE",
      "All of them"
    ],
    "answerIndex": 3,
    "explanation": "Triggers can be attached to INSERT, UPDATE, or DELETE events."
  },
  {
    "id": 292,
    "category": "Triggers & Procedures",
    "question": "A stored procedure is:",
    "options": [
      "A table",
      "A stored collection of SQL statements",
      "An index",
      "A view"
    ],
    "answerIndex": 1,
    "explanation": "A Stored Procedure is a compiled group of reusable SQL statements stored on the server."
  },
  {
    "id": 293,
    "category": "Triggers & Procedures",
    "question": "Which object helps reuse SQL logic?",
    "options": [
      "View",
      "Index",
      "Stored Procedure",
      "Constraint"
    ],
    "answerIndex": 2,
    "explanation": "Stored procedures encapsulate business logic for modular execution and code reuse."
  },
  {
    "id": 294,
    "category": "Triggers & Procedures",
    "question": "Which database object is mainly used for security and simplifying complex queries?",
    "options": [
      "Trigger",
      "View",
      "Cursor",
      "Sequence"
    ],
    "answerIndex": 1,
    "explanation": "Views simplify complex query syntax and enforce data access security control."
  },
  {
    "id": 295,
    "category": "Query Processing",
    "question": "Query optimization aims to:",
    "options": [
      "Increase redundancy",
      "Execute queries efficiently",
      "Increase transaction time",
      "Create indexes automatically"
    ],
    "answerIndex": 1,
    "explanation": "Query Optimization selects the most cost-effective execution plan to process a SQL query efficiently."
  },
  {
    "id": 296,
    "category": "Query Processing",
    "question": "Which component selects the most efficient execution plan?",
    "options": [
      "Parser",
      "Compiler",
      "Query Optimizer",
      "Scheduler"
    ],
    "answerIndex": 2,
    "explanation": "The Query Optimizer evaluates execution strategies and selects the optimal query plan."
  },
  {
    "id": 297,
    "category": "Query Processing",
    "question": "Which factor most improves query speed?",
    "options": [
      "Large tables",
      "Proper indexing",
      "Duplicate records",
      "More NULL values"
    ],
    "answerIndex": 1,
    "explanation": "Proper indexing provides fast lookup paths, drastically accelerating query execution speed."
  },
  {
    "id": 298,
    "category": "Miscellaneous SQL",
    "question": "Which object occupies the least additional storage?",
    "options": [
      "Table",
      "View",
      "Index",
      "Materialized View"
    ],
    "answerIndex": 1,
    "explanation": "A standard View stores only its SQL text definition, consuming virtually zero additional data storage."
  },
  {
    "id": 299,
    "category": "Miscellaneous SQL",
    "question": "Materialized View differs from a normal view because it:",
    "options": [
      "Cannot be queried",
      "Physically stores query results",
      "Has no SQL definition",
      "Cannot use joins"
    ],
    "answerIndex": 1,
    "explanation": "A Materialized View physically saves and persists query results on disk for rapid retrieval."
  },
  {
    "id": 300,
    "category": "Miscellaneous SQL",
    "question": "Which database object is best suited for frequently executed complex queries without recalculating results every time?",
    "options": [
      "Trigger",
      "Standard View",
      "Materialized View",
      "Foreign Key"
    ],
    "answerIndex": 2,
    "explanation": "Materialized Views store precomputed query results on disk, avoiding repeated recalculations."
  },
  {
    "id": 301,
    "category": "Transactions",
    "question": "A database transaction is:",
    "options": [
      "A SQL keyword",
      "A logical unit of work",
      "A database table",
      "A backup file"
    ],
    "answerIndex": 1,
    "explanation": "A transaction is a logical unit of database processing that executes as an all-or-nothing unit."
  },
  {
    "id": 302,
    "category": "Transactions",
    "question": "A transaction normally consists of:",
    "options": [
      "One statement only",
      "One or more SQL statements executed as a single unit",
      "One table",
      "One index"
    ],
    "answerIndex": 1,
    "explanation": "A transaction combines one or multiple SQL operations executed atomically as a single operational unit."
  },
  {
    "id": 303,
    "category": "Transactions",
    "question": "Which of the following is an example of a transaction?",
    "options": [
      "Creating a database",
      "Transferring money from one bank account to another",
      "Installing MySQL",
      "Designing an ER diagram"
    ],
    "answerIndex": 1,
    "explanation": "Bank account fund transfer is a classic transaction requiring debit and credit operations to complete together."
  },
  {
    "id": 304,
    "category": "Transactions",
    "question": "A transaction ends successfully with:",
    "options": [
      "DELETE",
      "COMMIT",
      "SELECT",
      "DROP"
    ],
    "answerIndex": 1,
    "explanation": "A transaction ends successfully when a COMMIT command persists all modifications."
  },
  {
    "id": 305,
    "category": "Transactions",
    "question": "Which command cancels uncommitted changes?",
    "options": [
      "SAVEPOINT",
      "ROLLBACK",
      "COMMIT",
      "UPDATE"
    ],
    "answerIndex": 1,
    "explanation": "ROLLBACK aborts an active transaction and reverts uncommitted changes."
  },
  {
    "id": 306,
    "category": "Transactions",
    "question": "SAVEPOINT is used to:",
    "options": [
      "Permanently save data",
      "Mark an intermediate point within a transaction",
      "Delete records",
      "Create indexes"
    ],
    "answerIndex": 1,
    "explanation": "SAVEPOINT establishes intermediate checkpoints within a transaction for partial rollbacks."
  },
  {
    "id": 307,
    "category": "Transactions",
    "question": "Which command makes transaction changes permanent?",
    "options": [
      "ROLLBACK",
      "COMMIT",
      "DELETE",
      "ALTER"
    ],
    "answerIndex": 1,
    "explanation": "COMMIT permanently writes all transaction updates to persistent storage."
  },
  {
    "id": 308,
    "category": "Transactions",
    "question": "If a transaction fails before COMMIT, the DBMS should:",
    "options": [
      "Keep partial changes",
      "Undo all changes",
      "Delete the database",
      "Restart the operating system"
    ],
    "answerIndex": 1,
    "explanation": "By the Atomicity principle, if a transaction fails before commit, the DBMS must undo (rollback) all partial updates."
  },
  {
    "id": 309,
    "category": "ACID Properties",
    "question": "ACID stands for:",
    "options": [
      "Accuracy, Consistency, Isolation, Durability",
      "Atomicity, Consistency, Isolation, Durability",
      "Atomicity, Concurrency, Integrity, Durability",
      "Access, Consistency, Isolation, Data"
    ],
    "answerIndex": 1,
    "explanation": "ACID stands for Atomicity, Consistency, Isolation, and Durability."
  },
  {
    "id": 310,
    "category": "ACID Properties",
    "question": "Which ACID property ensures that a transaction is completed entirely or not at all?",
    "options": [
      "Atomicity",
      "Consistency",
      "Isolation",
      "Durability"
    ],
    "answerIndex": 0,
    "explanation": "Atomicity guarantees an 'all-or-nothing' execution rule for transaction operations."
  },
  {
    "id": 311,
    "category": "ACID Properties",
    "question": "The \"C\" in ACID stands for:",
    "options": [
      "Concurrency",
      "Consistency",
      "Control",
      "Cardinality"
    ],
    "answerIndex": 1,
    "explanation": "The 'C' in ACID stands for Consistency."
  },
  {
    "id": 312,
    "category": "ACID Properties",
    "question": "Consistency ensures that:",
    "options": [
      "Multiple users can access simultaneously",
      "The database moves from one valid state to another",
      "Transactions execute faster",
      "Data is compressed"
    ],
    "answerIndex": 1,
    "explanation": "Consistency guarantees that a transaction moves the database from one valid integrity state to another."
  },
  {
    "id": 313,
    "category": "ACID Properties",
    "question": "Which ACID property prevents one transaction from interfering with another?",
    "options": [
      "Atomicity",
      "Consistency",
      "Isolation",
      "Durability"
    ],
    "answerIndex": 2,
    "explanation": "Isolation ensures concurrent transactions execute independently without interfering with each other."
  },
  {
    "id": 314,
    "category": "ACID Properties",
    "question": "Durability guarantees that:",
    "options": [
      "Data remains encrypted",
      "Committed data survives system failures",
      "Queries execute faster",
      "Data is indexed"
    ],
    "answerIndex": 1,
    "explanation": "Durability ensures that once a transaction commits, its modifications persist permanently even during power outages or system crashes."
  },
  {
    "id": 315,
    "category": "ACID Properties",
    "question": "Which ACID property is most closely associated with COMMIT?",
    "options": [
      "Isolation",
      "Atomicity",
      "Durability",
      "Domain Integrity"
    ],
    "answerIndex": 2,
    "explanation": "COMMIT finalizes transaction updates, directly fulfilling the Durability property."
  },
  {
    "id": 316,
    "category": "ACID Properties",
    "question": "Which ACID property ensures no partial updates occur?",
    "options": [
      "Atomicity",
      "Consistency",
      "Isolation",
      "Durability"
    ],
    "answerIndex": 0,
    "explanation": "Atomicity ensures partial updates are rolled back if execution fails midway."
  },
  {
    "id": 317,
    "category": "Transaction States",
    "question": "Which is the first state of a transaction?",
    "options": [
      "Active",
      "Committed",
      "Failed",
      "Aborted"
    ],
    "answerIndex": 0,
    "explanation": "When a transaction begins execution, it enters the Active state."
  },
  {
    "id": 318,
    "category": "Transaction States",
    "question": "After successful completion, a transaction enters:",
    "options": [
      "Failed",
      "Committed",
      "Aborted",
      "Active"
    ],
    "answerIndex": 1,
    "explanation": "Upon successful completion of all operations, a transaction transitions to Committed state."
  },
  {
    "id": 319,
    "category": "Transaction States",
    "question": "If an error occurs during execution, the transaction enters:",
    "options": [
      "Committed",
      "Failed",
      "Active",
      "Ready"
    ],
    "answerIndex": 1,
    "explanation": "If a failure or system error occurs during active execution, the transaction enters Failed state."
  },
  {
    "id": 320,
    "category": "Transaction States",
    "question": "After ROLLBACK, the transaction becomes:",
    "options": [
      "Active",
      "Committed",
      "Aborted",
      "Running"
    ],
    "answerIndex": 2,
    "explanation": "Once a failed transaction has rolled back its changes, it enters the Aborted state."
  },
  {
    "id": 321,
    "category": "Concurrency Control",
    "question": "Concurrency Control is used to:",
    "options": [
      "Improve graphics",
      "Manage simultaneous transaction execution",
      "Compress databases",
      "Create indexes"
    ],
    "answerIndex": 1,
    "explanation": "Concurrency Control coordinates simultaneous transaction executions to prevent data conflicts."
  },
  {
    "id": 322,
    "category": "Concurrency Control",
    "question": "Concurrency problems occur mainly because:",
    "options": [
      "Large databases",
      "Multiple transactions execute simultaneously",
      "Small memory",
      "SQL syntax"
    ],
    "answerIndex": 1,
    "explanation": "Concurrency issues arise when multiple interleaved transactions access and modify the same data concurrently."
  },
  {
    "id": 323,
    "category": "Concurrency Control",
    "question": "The main objective of concurrency control is:",
    "options": [
      "Increase redundancy",
      "Maintain data consistency",
      "Delete duplicate records",
      "Improve storage"
    ],
    "answerIndex": 1,
    "explanation": "Concurrency control maintains database consistency during concurrent multi-user execution."
  },
  {
    "id": 324,
    "category": "Concurrency Control",
    "question": "Which problem occurs when two transactions update the same data simultaneously?",
    "options": [
      "Lost Update",
      "Dirty Read",
      "Phantom Read",
      "Cascading Rollback"
    ],
    "answerIndex": 0,
    "explanation": "Lost Update occurs when concurrent transaction T2 overwrites an uncommitted update made by T1."
  },
  {
    "id": 325,
    "category": "Concurrency Control",
    "question": "A Dirty Read occurs when:",
    "options": [
      "Reading deleted data",
      "Reading uncommitted data",
      "Reading duplicate rows",
      "Reading NULL values"
    ],
    "answerIndex": 1,
    "explanation": "A Dirty Read occurs when transaction T2 reads uncommitted modifications written by transaction T1."
  },
  {
    "id": 326,
    "category": "Concurrency Control",
    "question": "Phantom Read occurs when:",
    "options": [
      "Data disappears",
      "Re-executing a query returns additional or missing rows due to another committed transaction",
      "Index is deleted",
      "Primary key changes"
    ],
    "answerIndex": 1,
    "explanation": "Phantom Read occurs when re-running a query returns a different set of rows because another transaction inserted or deleted matching rows."
  },
  {
    "id": 327,
    "category": "Concurrency Control",
    "question": "Which problem is prevented by proper isolation?",
    "options": [
      "Backup Failure",
      "Dirty Read",
      "Disk Failure",
      "Schema Change"
    ],
    "answerIndex": 1,
    "explanation": "Enforcing transaction Isolation levels (Read Committed/Serializable) prevents Dirty Reads."
  },
  {
    "id": 328,
    "category": "Locking",
    "question": "Locking is primarily used for:",
    "options": [
      "Encryption",
      "Concurrency Control",
      "Backup",
      "Indexing"
    ],
    "answerIndex": 1,
    "explanation": "Locking mechanisms serialize data access to enforce concurrency control and transaction isolation."
  },
  {
    "id": 329,
    "category": "Locking",
    "question": "A Shared Lock allows:",
    "options": [
      "Multiple transactions to read the same data",
      "Multiple transactions to update simultaneously",
      "One transaction to delete all rows",
      "Only database administrators to read data"
    ],
    "answerIndex": 0,
    "explanation": "A Shared Lock (S-lock) allows multiple concurrent transactions to read a data item."
  },
  {
    "id": 330,
    "category": "Locking",
    "question": "An Exclusive Lock allows:",
    "options": [
      "Multiple writers",
      "Only one transaction to modify data",
      "Everyone to update",
      "Only SELECT operations"
    ],
    "answerIndex": 1,
    "explanation": "An Exclusive Lock (X-lock) permits only a single transaction to write/update a data item."
  },
  {
    "id": 331,
    "category": "Locking",
    "question": "Which lock is required before updating a record?",
    "options": [
      "Shared Lock",
      "Exclusive Lock",
      "Intent Lock",
      "Read Lock"
    ],
    "answerIndex": 1,
    "explanation": "An Exclusive Lock (X-lock) must be acquired before performing write/update operations."
  },
  {
    "id": 332,
    "category": "Locking",
    "question": "Which lock is generally compatible with another Shared Lock?",
    "options": [
      "Shared Lock",
      "Exclusive Lock",
      "Update Lock",
      "None"
    ],
    "answerIndex": 0,
    "explanation": "Shared Locks are compatible with other Shared Locks (multiple readers allowed)."
  },
  {
    "id": 333,
    "category": "Two-Phase Locking",
    "question": "Two-Phase Locking consists of:",
    "options": [
      "Read Phase & Write Phase",
      "Growing Phase & Shrinking Phase",
      "Lock Phase & Unlock Phase",
      "Insert Phase & Delete Phase"
    ],
    "answerIndex": 1,
    "explanation": "2PL protocol consists of two distinct phases: Growing Phase and Shrinking Phase."
  },
  {
    "id": 334,
    "category": "Two-Phase Locking",
    "question": "During the Growing Phase:",
    "options": [
      "Locks are acquired but not released",
      "Locks are released only",
      "Data is deleted",
      "Transactions are committed"
    ],
    "answerIndex": 0,
    "explanation": "In the Growing Phase, a transaction may acquire new locks but cannot release any locks."
  },
  {
    "id": 335,
    "category": "Two-Phase Locking",
    "question": "During the Shrinking Phase:",
    "options": [
      "New locks can be acquired",
      "Locks are released but no new locks are acquired",
      "Tables are created",
      "Data is encrypted"
    ],
    "answerIndex": 1,
    "explanation": "In the Shrinking Phase, a transaction releases existing locks but cannot acquire new ones."
  },
  {
    "id": 336,
    "category": "Deadlock",
    "question": "Deadlock occurs when:",
    "options": [
      "Database crashes",
      "Two or more transactions wait indefinitely for each other",
      "SQL syntax is wrong",
      "Primary key is duplicated"
    ],
    "answerIndex": 1,
    "explanation": "Deadlock is a blockage occurring when two or more transactions indefinitely wait for locks held by each other."
  },
  {
    "id": 337,
    "category": "Deadlock",
    "question": "Which condition is necessary for deadlock?",
    "options": [
      "No locking",
      "Circular Wait",
      "Data redundancy",
      "Backup failure"
    ],
    "answerIndex": 1,
    "explanation": "Circular Wait is a fundamental necessary condition for deadlock occurrence."
  },
  {
    "id": 338,
    "category": "Deadlock",
    "question": "Deadlock can be resolved by:",
    "options": [
      "Creating indexes",
      "Aborting one of the transactions",
      "Adding foreign keys",
      "Deleting tables"
    ],
    "answerIndex": 1,
    "explanation": "Deadlocks are resolved by selecting a victim transaction and aborting/rolling it back."
  },
  {
    "id": 339,
    "category": "Deadlock",
    "question": "Which locking approach generally reduces deadlocks?",
    "options": [
      "Exclusive Locking Only",
      "Optimistic Concurrency Control",
      "No Locking",
      "Random Locking"
    ],
    "answerIndex": 1,
    "explanation": "Optimistic Concurrency Control reduces lock contention and deadlocks by validating transactions prior to commit."
  },
  {
    "id": 340,
    "category": "Recovery & Logs",
    "question": "Database recovery aims to:",
    "options": [
      "Improve query speed",
      "Restore the database after failure",
      "Create indexes",
      "Normalize tables"
    ],
    "answerIndex": 1,
    "explanation": "Database recovery techniques restore the database to a consistent state following a crash or failure."
  },
  {
    "id": 341,
    "category": "Recovery & Logs",
    "question": "Which recovery technique uses a transaction log?",
    "options": [
      "Replication",
      "Log-based Recovery",
      "Partitioning",
      "Normalization"
    ],
    "answerIndex": 1,
    "explanation": "Log-based recovery uses sequential transaction log records to perform UNDO and REDO operations."
  },
  {
    "id": 342,
    "category": "Recovery & Logs",
    "question": "A transaction log stores:",
    "options": [
      "SQL keywords",
      "Records of database changes",
      "ER diagrams",
      "Indexes"
    ],
    "answerIndex": 1,
    "explanation": "A transaction log sequentially records all data modifications, transaction starts, commits, and aborts."
  },
  {
    "id": 343,
    "category": "Recovery & Logs",
    "question": "Which operation reverses changes made by an incomplete transaction?",
    "options": [
      "UNDO",
      "REDO",
      "COMMIT",
      "SAVEPOINT"
    ],
    "answerIndex": 0,
    "explanation": "The UNDO operation reverses (rolls back) uncommitted changes made by incomplete transactions."
  },
  {
    "id": 344,
    "category": "Recovery & Logs",
    "question": "Which operation reapplies committed transactions after a crash?",
    "options": [
      "UNDO",
      "REDO",
      "DELETE",
      "UPDATE"
    ],
    "answerIndex": 1,
    "explanation": "The REDO operation reapplies changes made by committed transactions that were not flushed to disk before failure."
  },
  {
    "id": 345,
    "category": "Recovery & Logs",
    "question": "A checkpoint is used to:",
    "options": [
      "Delete logs",
      "Reduce recovery time",
      "Create views",
      "Encrypt transactions"
    ],
    "answerIndex": 1,
    "explanation": "Checkpoints periodically sync memory to disk, reducing the amount of transaction log needed during crash recovery."
  },
  {
    "id": 346,
    "category": "Recovery & Logs",
    "question": "During recovery, checkpoints help because they:",
    "options": [
      "Increase redundancy",
      "Reduce the amount of log that must be processed",
      "Remove indexes",
      "Create backups"
    ],
    "answerIndex": 1,
    "explanation": "Checkpoints ensure earlier committed log records can be skipped, shortening recovery duration."
  },
  {
    "id": 347,
    "category": "ACID & Transactions",
    "question": "Which ACID property is most directly related to concurrency control?",
    "options": [
      "Durability",
      "Isolation",
      "Atomicity",
      "Consistency"
    ],
    "answerIndex": 1,
    "explanation": "Concurrency Control mechanisms directly enforce the Isolation property."
  },
  {
    "id": 348,
    "category": "ACID & Transactions",
    "question": "Which statement is TRUE?",
    "options": [
      "COMMIT can be undone.",
      "ROLLBACK cannot undo a committed transaction.",
      "COMMIT deletes data.",
      "SAVEPOINT permanently stores data."
    ],
    "answerIndex": 1,
    "explanation": "Once a transaction is committed, ROLLBACK cannot undo it; recovery tools are required."
  },
  {
    "id": 349,
    "category": "ACID & Transactions",
    "question": "Which component is responsible for maintaining database consistency during concurrent execution?",
    "options": [
      "Query Optimizer",
      "Parser",
      "Concurrency Control Manager",
      "Data Dictionary"
    ],
    "answerIndex": 2,
    "explanation": "The Concurrency Control Manager handles locks and schedules to preserve database consistency."
  },
  {
    "id": 350,
    "category": "ACID & Transactions",
    "question": "Which statement best summarizes the purpose of transactions?",
    "options": [
      "Increase storage efficiency",
      "Improve SQL syntax",
      "Ensure reliable, consistent, and recoverable execution of database operations",
      "Replace normalization"
    ],
    "answerIndex": 2,
    "explanation": "Transactions guarantee reliable, consistent, isolated, and recoverable database operations."
  },
  {
    "id": 351,
    "category": "NoSQL Databases",
    "question": "NoSQL stands for:",
    "options": [
      "No Structured Query Language",
      "Not Only SQL",
      "New SQL",
      "Non-Standard Query Language"
    ],
    "answerIndex": 1,
    "explanation": "NoSQL stands for 'Not Only SQL', representing non-relational, highly scalable databases."
  },
  {
    "id": 352,
    "category": "NoSQL Databases",
    "question": "NoSQL databases are mainly designed for:",
    "options": [
      "Small fixed datasets",
      "Large-scale, flexible and distributed data",
      "Spreadsheet processing",
      "Word processing"
    ],
    "answerIndex": 1,
    "explanation": "NoSQL databases are engineered for massive scale, high throughput, and unstructured/semi-structured flexible data models."
  },
  {
    "id": 353,
    "category": "NoSQL Databases",
    "question": "Which of the following is NOT a NoSQL database?",
    "options": [
      "MongoDB",
      "Cassandra",
      "MySQL",
      "Redis"
    ],
    "answerIndex": 2,
    "explanation": "MySQL is a relational database (RDBMS), whereas MongoDB, Cassandra, and Redis are NoSQL databases."
  },
  {
    "id": 354,
    "category": "NoSQL Databases",
    "question": "MongoDB is a:",
    "options": [
      "Key-Value Database",
      "Document Database",
      "Graph Database",
      "Relational Database"
    ],
    "answerIndex": 1,
    "explanation": "MongoDB is a document-oriented NoSQL database storing JSON/BSON document structures."
  },
  {
    "id": 355,
    "category": "NoSQL Databases",
    "question": "Cassandra is a:",
    "options": [
      "Document Database",
      "Column-Family Database",
      "Graph Database",
      "Object-Oriented Database"
    ],
    "answerIndex": 1,
    "explanation": "Apache Cassandra is a wide-column family NoSQL database built for high scalability."
  },
  {
    "id": 356,
    "category": "NoSQL Databases",
    "question": "Redis is a:",
    "options": [
      "Key-Value Database",
      "Document Database",
      "Relational Database",
      "Graph Database"
    ],
    "answerIndex": 0,
    "explanation": "Redis is an in-memory key-value data store used as a cache and database."
  },
  {
    "id": 357,
    "category": "NoSQL Databases",
    "question": "Neo4j is mainly classified as a:",
    "options": [
      "Relational Database",
      "Column Database",
      "Graph Database",
      "Document Database"
    ],
    "answerIndex": 2,
    "explanation": "Neo4j is a graph database optimized for storing nodes, edges, and complex interconnected relationships."
  },
  {
    "id": 358,
    "category": "NoSQL Databases",
    "question": "Which NoSQL database is best suited for graph relationships?",
    "options": [
      "Redis",
      "MongoDB",
      "Cassandra",
      "Neo4j"
    ],
    "answerIndex": 3,
    "explanation": "Neo4j is purpose-built for querying graph structures and network relationships."
  },
  {
    "id": 359,
    "category": "NoSQL Databases",
    "question": "Which feature is commonly associated with NoSQL databases?",
    "options": [
      "Fixed schema only",
      "Flexible schema",
      "Tables only",
      "SQL only"
    ],
    "answerIndex": 1,
    "explanation": "NoSQL databases feature dynamic/flexible schemas allowing fields to vary per record."
  },
  {
    "id": 360,
    "category": "NoSQL Databases",
    "question": "NoSQL databases are generally preferred for:",
    "options": [
      "Small payroll systems only",
      "Big Data and highly scalable web applications",
      "Text editing",
      "Operating systems"
    ],
    "answerIndex": 1,
    "explanation": "NoSQL is preferred for big data processing, real-time analytics, and horizontally scalable web apps."
  },
  {
    "id": 361,
    "category": "Distributed DB & Warehousing",
    "question": "A Distributed Database stores data:",
    "options": [
      "On one computer only",
      "Across multiple networked computers",
      "In RAM only",
      "On removable media only"
    ],
    "answerIndex": 1,
    "explanation": "A Distributed Database manages data distributed physically across multiple networked computer nodes."
  },
  {
    "id": 362,
    "category": "Distributed DB & Warehousing",
    "question": "The primary advantage of distributed databases is:",
    "options": [
      "Reduced security",
      "High availability and scalability",
      "Increased redundancy only",
      "Slower processing"
    ],
    "answerIndex": 1,
    "explanation": "Distributed databases offer high availability, fault tolerance, and horizontal scalability."
  },
  {
    "id": 363,
    "category": "Distributed DB & Warehousing",
    "question": "Which of the following is an advantage of distributed databases?",
    "options": [
      "Single point of failure",
      "Improved fault tolerance",
      "No network communication",
      "No replication"
    ],
    "answerIndex": 1,
    "explanation": "Distributed architecture improves fault tolerance by removing single points of system failure."
  },
  {
    "id": 364,
    "category": "Distributed DB & Warehousing",
    "question": "Data replication means:",
    "options": [
      "Data deletion",
      "Maintaining copies of data at multiple locations",
      "Data compression",
      "Data normalization"
    ],
    "answerIndex": 1,
    "explanation": "Replication maintains duplicate copies of data across multiple geographic/network locations."
  },
  {
    "id": 365,
    "category": "Distributed DB & Warehousing",
    "question": "Replication mainly improves:",
    "options": [
      "Query complexity",
      "Availability and reliability",
      "Redundancy elimination",
      "SQL syntax"
    ],
    "answerIndex": 1,
    "explanation": "Replication ensures data remains accessible even if individual server nodes experience outages."
  },
  {
    "id": 366,
    "category": "Distributed DB & Warehousing",
    "question": "A Data Warehouse is primarily used for:",
    "options": [
      "Daily transaction processing",
      "Decision support and analysis",
      "Operating systems",
      "Web hosting"
    ],
    "answerIndex": 1,
    "explanation": "A Data Warehouse centralizes historical data for analytical processing and decision support (BI)."
  },
  {
    "id": 367,
    "category": "Distributed DB & Warehousing",
    "question": "Data warehouses mainly store:",
    "options": [
      "Temporary data",
      "Historical data",
      "Program code",
      "Operating system files"
    ],
    "answerIndex": 1,
    "explanation": "Data warehouses store large volumes of historical, time-variant data collected over time."
  },
  {
    "id": 368,
    "category": "Distributed DB & Warehousing",
    "question": "Data Warehouse is:",
    "options": [
      "Subject-oriented",
      "Integrated",
      "Time-variant",
      "All of them"
    ],
    "answerIndex": 3,
    "explanation": "Bill Inmon defined a Data Warehouse as a subject-oriented, integrated, time-variant, non-volatile data repository."
  },
  {
    "id": 369,
    "category": "Distributed DB & Warehousing",
    "question": "Which process extracts, transforms and loads data into a warehouse?",
    "options": [
      "SQL",
      "ETL",
      "DDL",
      "DML"
    ],
    "answerIndex": 1,
    "explanation": "ETL (Extract, Transform, Load) pipelines process and ingest data into a warehouse."
  },
  {
    "id": 370,
    "category": "Distributed DB & Warehousing",
    "question": "ETL stands for:",
    "options": [
      "Execute, Transfer, Load",
      "Extract, Transform, Load",
      "Extract, Translate, Link",
      "Execute, Transform, Link"
    ],
    "answerIndex": 1,
    "explanation": "ETL stands for Extract, Transform, Load."
  },
  {
    "id": 371,
    "category": "OLTP vs OLAP",
    "question": "OLTP stands for:",
    "options": [
      "Online Transaction Processing",
      "Online Table Processing",
      "Offline Transaction Processing",
      "Online Transfer Processing"
    ],
    "answerIndex": 0,
    "explanation": "OLTP stands for Online Transaction Processing."
  },
  {
    "id": 372,
    "category": "OLTP vs OLAP",
    "question": "OLAP stands for:",
    "options": [
      "Online Logical Access Processing",
      "Online Analytical Processing",
      "Offline Analytical Processing",
      "Online Application Processing"
    ],
    "answerIndex": 1,
    "explanation": "OLAP stands for Online Analytical Processing."
  },
  {
    "id": 373,
    "category": "OLTP vs OLAP",
    "question": "OLTP systems are mainly designed for:",
    "options": [
      "Data Analysis",
      "Day-to-day Transactions",
      "Machine Learning",
      "Data Mining"
    ],
    "answerIndex": 1,
    "explanation": "OLTP systems process fast, high-volume day-to-day operational transactions (e.g., banking, sales)."
  },
  {
    "id": 374,
    "category": "OLTP vs OLAP",
    "question": "OLAP systems are mainly designed for:",
    "options": [
      "Banking Transactions",
      "Analytical Queries and Reporting",
      "Record Insertion",
      "Transaction Recovery"
    ],
    "answerIndex": 1,
    "explanation": "OLAP systems optimize complex analytical queries, aggregations, and business reporting."
  },
  {
    "id": 375,
    "category": "OLTP vs OLAP",
    "question": "Which system generally handles fewer but more complex queries?",
    "options": [
      "OLTP",
      "OLAP",
      "File System",
      "FTP"
    ],
    "answerIndex": 1,
    "explanation": "OLAP databases process fewer, long-running, complex analytical aggregation queries."
  },
  {
    "id": 376,
    "category": "Advanced DBMS Concepts",
    "question": "Data Mining is the process of:",
    "options": [
      "Storing data",
      "Discovering useful patterns from large datasets",
      "Deleting duplicate records",
      "Creating indexes"
    ],
    "answerIndex": 1,
    "explanation": "Data Mining uses algorithmic techniques to extract patterns and knowledge from large datasets."
  },
  {
    "id": 377,
    "category": "Advanced DBMS Concepts",
    "question": "Data Mining is commonly performed on:",
    "options": [
      "Word Documents",
      "Data Warehouses",
      "Operating Systems",
      "ER Diagrams"
    ],
    "answerIndex": 1,
    "explanation": "Data Mining algorithms run against consolidated historical data stored in Data Warehouses."
  },
  {
    "id": 378,
    "category": "Advanced DBMS Concepts",
    "question": "CAP Theorem consists of:",
    "options": [
      "Consistency, Accuracy, Performance",
      "Consistency, Availability, Partition Tolerance",
      "Compression, Access, Protection",
      "Concurrency, Accuracy, Persistence"
    ],
    "answerIndex": 1,
    "explanation": "CAP Theorem states a distributed system can guarantee at most 2 of: Consistency, Availability, and Partition Tolerance."
  },
  {
    "id": 379,
    "category": "Advanced DBMS Concepts",
    "question": "According to CAP theorem, during a network partition a distributed system must choose between:",
    "options": [
      "SQL and NoSQL",
      "Consistency and Availability",
      "Backup and Recovery",
      "OLTP and OLAP"
    ],
    "answerIndex": 1,
    "explanation": "When a network partition occurs (P), a system must trade off between Consistency (C) and Availability (A)."
  },
  {
    "id": 380,
    "category": "Advanced DBMS Concepts",
    "question": "RAID is mainly used for:",
    "options": [
      "SQL optimization",
      "Improving storage reliability and/or performance",
      "Database normalization",
      "Query optimization"
    ],
    "answerIndex": 1,
    "explanation": "RAID (Redundant Array of Independent Disks) combines physical hard drives to boost storage reliability and performance."
  },
  {
    "id": 381,
    "category": "Advanced DBMS Concepts",
    "question": "RAID stands for:",
    "options": [
      "Random Access Independent Drives",
      "Redundant Array of Independent Disks",
      "Reliable Access Internal Disks",
      "Random Array of Indexed Disks"
    ],
    "answerIndex": 1,
    "explanation": "RAID stands for Redundant Array of Independent Disks."
  },
  {
    "id": 382,
    "category": "Advanced DBMS Concepts",
    "question": "XML is mainly used to:",
    "options": [
      "Create indexes",
      "Store and exchange structured/semi-structured data",
      "Normalize databases",
      "Create transactions"
    ],
    "answerIndex": 1,
    "explanation": "XML (eXtensible Markup Language) formats structured and semi-structured data for storage and web exchange."
  },
  {
    "id": 383,
    "category": "Advanced DBMS Concepts",
    "question": "XML is considered:",
    "options": [
      "Relational Data",
      "Semi-Structured Data",
      "Binary Data",
      "Temporary Data"
    ],
    "answerIndex": 1,
    "explanation": "XML data features self-describing tags and is classified as Semi-Structured Data."
  },
  {
    "id": 384,
    "category": "Advanced DBMS Concepts",
    "question": "Hashing primarily helps in:",
    "options": [
      "Normalization",
      "Fast record retrieval",
      "Backup",
      "Data Warehousing"
    ],
    "answerIndex": 1,
    "explanation": "Hashing uses hash functions for direct, constant time O(1) record location retrieval."
  },
  {
    "id": 385,
    "category": "Advanced DBMS Concepts",
    "question": "A hash function maps:",
    "options": [
      "Queries to indexes",
      "Keys to storage locations",
      "Tables to views",
      "Transactions to logs"
    ],
    "answerIndex": 1,
    "explanation": "A Hash Function maps search keys directly to specific hash bucket storage locations."
  },
  {
    "id": 386,
    "category": "Advanced DBMS Concepts",
    "question": "A cursor is used to:",
    "options": [
      "Create tables",
      "Process query results row by row",
      "Create indexes",
      "Backup databases"
    ],
    "answerIndex": 1,
    "explanation": "A Cursor is a database control structure used to iterate and process query result sets row by row."
  },
  {
    "id": 387,
    "category": "Advanced DBMS Concepts",
    "question": "Cursors are mainly associated with:",
    "options": [
      "Views",
      "Stored Procedures and SQL Programming",
      "Constraints",
      "Transactions"
    ],
    "answerIndex": 1,
    "explanation": "Cursors are used within Stored Procedures and embedded SQL for sequential row processing."
  },
  {
    "id": 388,
    "category": "Advanced DBMS Concepts",
    "question": "Embedded SQL means:",
    "options": [
      "SQL stored in indexes",
      "SQL statements embedded within a programming language",
      "SQL inside operating systems",
      "SQL inside browsers"
    ],
    "answerIndex": 1,
    "explanation": "Embedded SQL refers to SQL queries embedded inside procedural host programming code (C, COAP, Java)."
  },
  {
    "id": 389,
    "category": "Advanced DBMS Concepts",
    "question": "In a client-server DBMS:",
    "options": [
      "Client stores the entire database",
      "Client requests services from the database server",
      "Server has no database",
      "Client performs recovery"
    ],
    "answerIndex": 1,
    "explanation": "In client-server architecture, client applications request database services from a centralized database server."
  },
  {
    "id": 390,
    "category": "Advanced DBMS Concepts",
    "question": "Which component executes SQL queries?",
    "options": [
      "Client only",
      "Database Server",
      "Browser",
      "Compiler"
    ],
    "answerIndex": 1,
    "explanation": "The Database Server receives, compiles, optimizes, and executes SQL queries."
  },
  {
    "id": 391,
    "category": "Advanced DBMS Concepts",
    "question": "Metadata is:",
    "options": [
      "Duplicate data",
      "Data describing other data",
      "Backup data",
      "Transaction data"
    ],
    "answerIndex": 1,
    "explanation": "Metadata is structural information describing database schemas, data types, and objects."
  },
  {
    "id": 392,
    "category": "Advanced DBMS Concepts",
    "question": "Which of the following is metadata?",
    "options": [
      "Student Marks",
      "Column Data Types",
      "Salary Records",
      "Attendance Data"
    ],
    "answerIndex": 1,
    "explanation": "Column Data Types describe structural properties of fields and represent Metadata."
  },
  {
    "id": 393,
    "category": "Advanced DBMS Concepts",
    "question": "Which database is best suited for highly connected data like social networks?",
    "options": [
      "Relational Database",
      "Document Database",
      "Graph Database",
      "Key-Value Database"
    ],
    "answerIndex": 2,
    "explanation": "Graph Databases excel at traversing highly interconnected network node relationships like social networks."
  },
  {
    "id": 394,
    "category": "Advanced DBMS Concepts",
    "question": "Which database model provides the greatest schema flexibility?",
    "options": [
      "Relational",
      "NoSQL",
      "Hierarchical",
      "Network"
    ],
    "answerIndex": 1,
    "explanation": "NoSQL database models provide schema-less dynamic flexibility for changing data structures."
  },
  {
    "id": 395,
    "category": "Advanced DBMS Concepts",
    "question": "Which technology is commonly used for large-scale analytics?",
    "options": [
      "OLTP",
      "Data Warehouse",
      "Trigger",
      "Cursor"
    ],
    "answerIndex": 1,
    "explanation": "Data Warehouses are built specifically to support high-volume analytical business intelligence."
  },
  {
    "id": 396,
    "category": "Advanced DBMS Concepts",
    "question": "Which of the following is TRUE about Data Warehouses?",
    "options": [
      "Frequently updated with every transaction",
      "Optimized for querying and reporting",
      "Used only for backups",
      "Cannot store historical data"
    ],
    "answerIndex": 1,
    "explanation": "Data Warehouses are optimized for complex analytical queries, reporting, and historical trend analysis."
  },
  {
    "id": 397,
    "category": "Advanced DBMS Concepts",
    "question": "Which database is most suitable for storing JSON documents?",
    "options": [
      "MySQL",
      "MongoDB",
      "Neo4j",
      "Oracle (Traditional RDBMS)"
    ],
    "answerIndex": 1,
    "explanation": "MongoDB natively stores semi-structured BSON/JSON document collections."
  },
  {
    "id": 398,
    "category": "Advanced DBMS Concepts",
    "question": "Which concept mainly improves database scalability?",
    "options": [
      "Normalization only",
      "Distribution and Partitioning",
      "Views",
      "Constraints"
    ],
    "answerIndex": 1,
    "explanation": "Distribution and Horizontal Partitioning (Sharding) enable linear database scaling across clusters."
  },
  {
    "id": 399,
    "category": "Advanced DBMS Concepts",
    "question": "Which DBMS feature provides high availability by maintaining multiple copies of data?",
    "options": [
      "Normalization",
      "Replication",
      "Hashing",
      "Cursor"
    ],
    "answerIndex": 1,
    "explanation": "Data Replication distributes redundant copies across nodes to ensure high service availability."
  },
  {
    "id": 400,
    "category": "Advanced DBMS Concepts",
    "question": "Which statement best summarizes modern DBMS evolution?",
    "options": [
      "Relational databases have completely replaced NoSQL databases.",
      "NoSQL databases have completely replaced relational databases.",
      "Relational and NoSQL databases complement each other depending on application requirements.",
      "Data warehouses are replacing operational databases."
    ],
    "answerIndex": 2,
    "explanation": "Relational RDBMS and NoSQL systems complement each other in modern polyglot persistence architectures."
  }
];


const DSP_MCQS = [
  {
    "id": 1,
    "category": "Signals & Systems",
    "question": "A signal is best defined as:",
    "options": [
      "A mathematical equation only",
      "A function that conveys information about a phenomenon",
      "A computer program",
      "A digital circuit"
    ],
    "answerIndex": 1,
    "explanation": "A signal is a function of one or more independent variables that conveys information about a physical phenomenon."
  },
  {
    "id": 2,
    "category": "Signals & Systems",
    "question": "Which of the following is an example of a continuous-time signal?",
    "options": [
      "Daily stock prices",
      "ECG waveform measured continuously",
      "Sequence {1,2,3,4}",
      "Digital clock output"
    ],
    "answerIndex": 1,
    "explanation": "Continuous-time signals are defined for every instant of time, such as an ECG waveform measured continuously."
  },
  {
    "id": 3,
    "category": "Signals & Systems",
    "question": "A discrete-time signal is defined only at:",
    "options": [
      "Every instant of time",
      "Discrete time instants",
      "Continuous frequencies",
      "Infinite amplitudes"
    ],
    "answerIndex": 1,
    "explanation": "Discrete-time signals are defined only at specific discrete instants of time n."
  },
  {
    "id": 4,
    "category": "Signals & Systems",
    "question": "Which signal has both discrete time and discrete amplitude?",
    "options": [
      "Analog Signal",
      "Continuous Signal",
      "Digital Signal",
      "Periodic Signal"
    ],
    "answerIndex": 2,
    "explanation": "A digital signal is discrete in both time and amplitude (quantized)."
  },
  {
    "id": 5,
    "category": "Signals & Systems",
    "question": "An analog signal has:",
    "options": [
      "Continuous time and continuous amplitude",
      "Continuous time and discrete amplitude",
      "Discrete time and continuous amplitude",
      "Discrete time and discrete amplitude"
    ],
    "answerIndex": 0,
    "explanation": "An analog signal is continuous in both time and amplitude."
  },
  {
    "id": 6,
    "category": "Signals & Systems",
    "question": "Which of the following is a digital signal?",
    "options": [
      "Human voice",
      "Analog voltage",
      "Binary data (0s and 1s)",
      "Temperature variation"
    ],
    "answerIndex": 2,
    "explanation": "Binary data (0s and 1s) is a digital signal discrete in both time and amplitude."
  },
  {
    "id": 7,
    "category": "Signals & Systems",
    "question": "A signal represented as x(t) is generally:",
    "options": [
      "Continuous-time signal",
      "Discrete-time signal",
      "Digital signal",
      "Random signal"
    ],
    "answerIndex": 0,
    "explanation": "Independent variable t in parentheses x(t) denotes a continuous-time signal."
  },
  {
    "id": 8,
    "category": "Signals & Systems",
    "question": "A signal represented as x[n] is generally:",
    "options": [
      "Continuous-time signal",
      "Discrete-time signal",
      "Analog signal",
      "Periodic waveform"
    ],
    "answerIndex": 1,
    "explanation": "Independent variable n in square brackets x[n] denotes a discrete-time signal."
  },
  {
    "id": 9,
    "category": "Signals & Systems",
    "question": "A periodic signal satisfies:",
    "options": [
      "x(t)=0",
      "x(t)=x(t+T)",
      "x(t)=-x(t)",
      "x(t)=t"
    ],
    "answerIndex": 1,
    "explanation": "A continuous-time signal is periodic if it satisfies x(t) = x(t+T) for all t."
  },
  {
    "id": 10,
    "category": "Signals & Systems",
    "question": "T is called:",
    "options": [
      "Frequency",
      "Fundamental Period",
      "Amplitude",
      "Sampling Time"
    ],
    "answerIndex": 1,
    "explanation": "The smallest positive value of T that satisfies periodicity is the Fundamental Period."
  },
  {
    "id": 11,
    "category": "Signals & Systems",
    "question": "Which of the following is periodic?",
    "options": [
      "e^(-t)",
      "t^2",
      "sin(wt)",
      "ln(t)"
    ],
    "answerIndex": 2,
    "explanation": "Sinusoidal functions such as sin(wt) repeat at fixed intervals T = 2pi/w."
  },
  {
    "id": 12,
    "category": "Signals & Systems",
    "question": "Which of the following is generally aperiodic?",
    "options": [
      "cos(wt)",
      "e^(-t)u(t)",
      "sin(wt)",
      "Square wave"
    ],
    "answerIndex": 1,
    "explanation": "Exponentially decaying signals like e^(-t)u(t) do not repeat and are aperiodic."
  },
  {
    "id": 13,
    "category": "Signals & Systems",
    "question": "A periodic discrete-time signal must satisfy:",
    "options": [
      "x[n]=0",
      "x[n]=x[n+N]",
      "x[n]=-x[n]",
      "x[n]=1"
    ],
    "answerIndex": 1,
    "explanation": "A discrete-time sequence is periodic if x[n] = x[n+N] for integer period N."
  },
  {
    "id": 14,
    "category": "Signals & Systems",
    "question": "Which signal repeats after a fixed interval?",
    "options": [
      "Random Signal",
      "Periodic Signal",
      "Energy Signal",
      "Causal Signal"
    ],
    "answerIndex": 1,
    "explanation": "Periodic signals repeat identical patterns after regular fixed intervals."
  },
  {
    "id": 15,
    "category": "Signals & Systems",
    "question": "An energy signal has:",
    "options": [
      "Finite energy and zero average power",
      "Infinite energy and finite power",
      "Infinite energy and infinite power",
      "Zero energy"
    ],
    "answerIndex": 0,
    "explanation": "An energy signal has non-zero finite energy (0 < E < infinity) and zero average power (P = 0)."
  },
  {
    "id": 16,
    "category": "Signals & Systems",
    "question": "A power signal has:",
    "options": [
      "Zero power",
      "Finite average power and infinite energy",
      "Finite energy only",
      "Infinite power"
    ],
    "answerIndex": 1,
    "explanation": "A power signal has non-zero finite average power (0 < P < infinity) and infinite total energy."
  },
  {
    "id": 17,
    "category": "Signals & Systems",
    "question": "Which of the following is typically an energy signal?",
    "options": [
      "Finite-duration pulse",
      "Infinite sine wave",
      "Periodic square wave",
      "Constant signal"
    ],
    "answerIndex": 0,
    "explanation": "Signals restricted to a finite time duration possess finite total energy."
  },
  {
    "id": 18,
    "category": "Signals & Systems",
    "question": "Which of the following is generally a power signal?",
    "options": [
      "Pulse",
      "Infinite sinusoidal signal",
      "Exponentially decaying pulse",
      "Finite-duration signal"
    ],
    "answerIndex": 1,
    "explanation": "Sinusoids extending indefinitely have infinite energy but constant finite average power."
  },
  {
    "id": 19,
    "category": "Signals & Systems",
    "question": "An even signal satisfies:",
    "options": [
      "x(t)=x(-t)",
      "x(t)=-x(-t)",
      "x(t)=0",
      "x(t)=1"
    ],
    "answerIndex": 0,
    "explanation": "An even signal exhibits symmetry about the vertical axis: x(t) = x(-t)."
  },
  {
    "id": 20,
    "category": "Signals & Systems",
    "question": "An odd signal satisfies:",
    "options": [
      "x(t)=x(-t)",
      "x(t)=-x(-t)",
      "x(t)=0",
      "x(t)=t^2"
    ],
    "answerIndex": 1,
    "explanation": "An odd signal exhibits anti-symmetry about the origin: x(t) = -x(-t)."
  },
  {
    "id": 21,
    "category": "Signals & Systems",
    "question": "cos(t) is:",
    "options": [
      "Even",
      "Odd",
      "Neither",
      "Random"
    ],
    "answerIndex": 0,
    "explanation": "cos(-t) = cos(t), making cos(t) an even signal."
  },
  {
    "id": 22,
    "category": "Signals & Systems",
    "question": "sin(t) is:",
    "options": [
      "Even",
      "Odd",
      "Neither",
      "Periodic only"
    ],
    "answerIndex": 1,
    "explanation": "sin(-t) = -sin(t), making sin(t) an odd signal."
  },
  {
    "id": 23,
    "category": "Signals & Systems",
    "question": "Every signal can be decomposed into:",
    "options": [
      "Analog and Digital parts",
      "Even and Odd components",
      "Real and Imaginary parts only",
      "Power and Energy parts"
    ],
    "answerIndex": 1,
    "explanation": "Any arbitrary signal x(t) can be decomposed into sum of even x_e(t) and odd x_o(t) parts."
  },
  {
    "id": 24,
    "category": "Signals & Systems",
    "question": "A deterministic signal is:",
    "options": [
      "Completely unpredictable",
      "Completely specified mathematically",
      "Random in nature",
      "Periodic only"
    ],
    "answerIndex": 1,
    "explanation": "A deterministic signal can be modeled completely by a explicit mathematical expression."
  },
  {
    "id": 25,
    "category": "Signals & Systems",
    "question": "Noise is generally considered:",
    "options": [
      "Deterministic",
      "Random Signal",
      "Even Signal",
      "Energy Signal"
    ],
    "answerIndex": 1,
    "explanation": "Noise cannot be predicted with certainty and is modeled as a random signal."
  },
  {
    "id": 26,
    "category": "Signals & Systems",
    "question": "Which signal cannot be predicted exactly?",
    "options": [
      "Deterministic",
      "Random Signal",
      "Continuous Signal",
      "Periodic Signal"
    ],
    "answerIndex": 1,
    "explanation": "Random signals exhibit uncertainty and cannot be predicted precisely in advance."
  },
  {
    "id": 27,
    "category": "Signals & Systems",
    "question": "x(t-2) represents:",
    "options": [
      "Time Advance",
      "Time Delay",
      "Amplitude Scaling",
      "Time Reversal"
    ],
    "answerIndex": 1,
    "explanation": "x(t-t0) with t0 > 0 shifts the signal right by t0 units, representing a Time Delay."
  },
  {
    "id": 28,
    "category": "Signals & Systems",
    "question": "x(t+2) represents:",
    "options": [
      "Time Advance",
      "Time Delay",
      "Reflection",
      "Compression"
    ],
    "answerIndex": 0,
    "explanation": "x(t+t0) with t0 > 0 shifts the signal left by t0 units, representing a Time Advance."
  },
  {
    "id": 29,
    "category": "Signals & Systems",
    "question": "x(2t) represents:",
    "options": [
      "Expansion",
      "Time Compression",
      "Delay",
      "Reflection"
    ],
    "answerIndex": 1,
    "explanation": "x(at) with a > 1 compresses the signal in time by factor a."
  },
  {
    "id": 30,
    "category": "Signals & Systems",
    "question": "x(t/2) represents:",
    "options": [
      "Time Expansion",
      "Compression",
      "Delay",
      "Shift"
    ],
    "answerIndex": 0,
    "explanation": "x(at) with 0 < a < 1 expands the signal in time."
  },
  {
    "id": 31,
    "category": "Signals & Systems",
    "question": "-x(t) represents:",
    "options": [
      "Time Shift",
      "Amplitude Inversion",
      "Time Scaling",
      "Delay"
    ],
    "answerIndex": 1,
    "explanation": "-x(t) flips the signal amplitude upside down across the horizontal time axis."
  },
  {
    "id": 32,
    "category": "Signals & Systems",
    "question": "3x(t) represents:",
    "options": [
      "Time Compression",
      "Amplitude Scaling",
      "Reflection",
      "Delay"
    ],
    "answerIndex": 1,
    "explanation": "Multiplying by a scalar c increases amplitude (Amplitude Scaling)."
  },
  {
    "id": 33,
    "category": "Signals & Systems",
    "question": "x(-t) represents:",
    "options": [
      "Delay",
      "Compression",
      "Time Reversal (Reflection)",
      "Expansion"
    ],
    "answerIndex": 2,
    "explanation": "x(-t) reflects the signal across the vertical axis (Time Reversal)."
  },
  {
    "id": 34,
    "category": "Signals & Systems",
    "question": "The unit impulse signal is denoted by:",
    "options": [
      "u(t)",
      "delta(t)",
      "r(t)",
      "s(t)"
    ],
    "answerIndex": 1,
    "explanation": "The Dirac delta (unit impulse) function is represented by delta(t)."
  },
  {
    "id": 35,
    "category": "Signals & Systems",
    "question": "The area under delta(t) equals:",
    "options": [
      "0",
      "1",
      "infinity",
      "-1"
    ],
    "answerIndex": 1,
    "explanation": "By definition, the integral of unit impulse delta(t) over time equals 1."
  },
  {
    "id": 36,
    "category": "Signals & Systems",
    "question": "Unit step signal is denoted by:",
    "options": [
      "u(t)",
      "delta(t)",
      "r(t)",
      "x(t)"
    ],
    "answerIndex": 0,
    "explanation": "The unit step function is denoted by u(t)."
  },
  {
    "id": 37,
    "category": "Signals & Systems",
    "question": "The derivative of unit step is:",
    "options": [
      "Ramp",
      "Unit Impulse",
      "Constant",
      "Sine Wave"
    ],
    "answerIndex": 1,
    "explanation": "du(t)/dt = delta(t). The derivative of the unit step is the unit impulse."
  },
  {
    "id": 38,
    "category": "Signals & Systems",
    "question": "The integral of unit impulse is:",
    "options": [
      "Ramp",
      "Unit Step",
      "Constant",
      "Zero"
    ],
    "answerIndex": 1,
    "explanation": "The running integral of delta(t) from -infinity to t equals the unit step u(t)."
  },
  {
    "id": 39,
    "category": "Signals & Systems",
    "question": "Ramp signal is represented by:",
    "options": [
      "delta(t)",
      "u(t)",
      "r(t)=tu(t)",
      "sin(t)"
    ],
    "answerIndex": 2,
    "explanation": "The unit ramp signal is r(t) = t for t >= 0, i.e., r(t) = tu(t)."
  },
  {
    "id": 40,
    "category": "Signals & Systems",
    "question": "A system is:",
    "options": [
      "A signal",
      "A device or process that transforms an input signal into an output signal",
      "A frequency response",
      "A sampling circuit"
    ],
    "answerIndex": 1,
    "explanation": "A system takes an input signal x(t) and produces an output signal y(t)."
  },
  {
    "id": 41,
    "category": "Signals & Systems",
    "question": "If y(t)=2x(t), the system is:",
    "options": [
      "Linear",
      "Nonlinear",
      "Time-varying",
      "Unstable"
    ],
    "answerIndex": 0,
    "explanation": "y(t)=2x(t) satisfies additivity and homogeneity, making it Linear."
  },
  {
    "id": 42,
    "category": "Signals & Systems",
    "question": "A linear system satisfies:",
    "options": [
      "Only causality",
      "Superposition Principle",
      "Only stability",
      "Memorylessness"
    ],
    "answerIndex": 1,
    "explanation": "Linearity requires compliance with the Principle of Superposition."
  },
  {
    "id": 43,
    "category": "Signals & Systems",
    "question": "Superposition consists of:",
    "options": [
      "Time invariance only",
      "Additivity and Homogeneity",
      "Stability and causality",
      "Memory and linearity"
    ],
    "answerIndex": 1,
    "explanation": "Superposition combines Additivity (f(x+y)=f(x)+f(y)) and Homogeneity (f(ax)=af(x))."
  },
  {
    "id": 44,
    "category": "Signals & Systems",
    "question": "A system is time invariant if:",
    "options": [
      "Output is always zero",
      "A time shift in input produces the same time shift in output",
      "Input equals output",
      "Frequency changes"
    ],
    "answerIndex": 1,
    "explanation": "Time-invariance means a shift in input x(t-t0) results in an identical shift in output y(t-t0)."
  },
  {
    "id": 45,
    "category": "Signals & Systems",
    "question": "A causal system depends on:",
    "options": [
      "Present and past inputs only",
      "Future inputs only",
      "Future outputs",
      "Random inputs"
    ],
    "answerIndex": 0,
    "explanation": "A system is causal if output y(t) depends only on current and past inputs."
  },
  {
    "id": 46,
    "category": "Signals & Systems",
    "question": "A non-causal system depends on:",
    "options": [
      "Past inputs only",
      "Future inputs",
      "Present inputs only",
      "Constants"
    ],
    "answerIndex": 1,
    "explanation": "A non-causal system relies on future input values."
  },
  {
    "id": 47,
    "category": "Signals & Systems",
    "question": "A stable system produces:",
    "options": [
      "Infinite output for finite input",
      "Finite output for every bounded input",
      "Zero output always",
      "Random output"
    ],
    "answerIndex": 1,
    "explanation": "BIBO stability guarantees every bounded input produces a bounded output."
  },
  {
    "id": 48,
    "category": "Signals & Systems",
    "question": "BIBO stability stands for:",
    "options": [
      "Binary Input Binary Output",
      "Bounded Input Bounded Output",
      "Baseband Input Baseband Output",
      "Balanced Input Balanced Output"
    ],
    "answerIndex": 1,
    "explanation": "BIBO stands for Bounded-Input Bounded-Output stability."
  },
  {
    "id": 49,
    "category": "Signals & Systems",
    "question": "A memoryless system depends only on:",
    "options": [
      "Present input value",
      "Past inputs",
      "Future inputs",
      "Entire signal"
    ],
    "answerIndex": 0,
    "explanation": "A memoryless (static) system's output at time t depends strictly on input at time t."
  },
  {
    "id": 50,
    "category": "Signals & Systems",
    "question": "Which of the following properties is essential for an LTI system?",
    "options": [
      "Randomness",
      "Periodicity",
      "Linearity and Time Invariance",
      "Memorylessness"
    ],
    "answerIndex": 2,
    "explanation": "An LTI system must satisfy both Linearity and Time-Invariance."
  },
  {
    "id": 51,
    "category": "Convolution",
    "question": "Convolution is primarily used to determine:",
    "options": [
      "Frequency spectrum",
      "Output of an LTI system",
      "Sampling rate",
      "Signal energy"
    ],
    "answerIndex": 1,
    "explanation": "Convolution calculates the response y(t) or y[n] of an LTI system to an arbitrary input."
  },
  {
    "id": 52,
    "category": "Convolution",
    "question": "The output of an LTI system is obtained by convolving:",
    "options": [
      "Input with Output",
      "Input Signal with Impulse Response",
      "Output with Frequency",
      "Two Random Signals"
    ],
    "answerIndex": 1,
    "explanation": "y(t) = x(t) * h(t); system output is the convolution of input x(t) and impulse response h(t)."
  },
  {
    "id": 53,
    "category": "Convolution",
    "question": "The mathematical symbol commonly used for convolution is:",
    "options": [
      "+",
      "x",
      "* (asterisk)",
      "(+)"
    ],
    "answerIndex": 2,
    "explanation": "The asterisk (*) represents the convolution operator."
  },
  {
    "id": 54,
    "category": "Convolution",
    "question": "Continuous-time convolution is represented by:",
    "options": [
      "Multiplication",
      "Integral",
      "Differentiation",
      "Summation only"
    ],
    "answerIndex": 1,
    "explanation": "Continuous-time convolution integral is integral of x(tau)h(t-tau)d(tau)."
  },
  {
    "id": 55,
    "category": "Convolution",
    "question": "Discrete-time convolution is represented by:",
    "options": [
      "Integration",
      "Summation",
      "Differentiation",
      "Multiplication only"
    ],
    "answerIndex": 1,
    "explanation": "Discrete-time convolution sum is sum of x[k]h[n-k]."
  },
  {
    "id": 56,
    "category": "Convolution",
    "question": "Which operation combines two signals to produce a third signal?",
    "options": [
      "Sampling",
      "Convolution",
      "Quantization",
      "Modulation"
    ],
    "answerIndex": 1,
    "explanation": "Convolution combines an input signal and an impulse response to produce an output signal."
  },
  {
    "id": 57,
    "category": "Convolution",
    "question": "The impulse response of a system is usually denoted by:",
    "options": [
      "x(t)",
      "h(t)",
      "y(t)",
      "f(t)"
    ],
    "answerIndex": 1,
    "explanation": "Impulse response is conventionally denoted by h(t) or h[n]."
  },
  {
    "id": 58,
    "category": "Convolution",
    "question": "In an LTI system, h(t) represents:",
    "options": [
      "Input Signal",
      "System Characteristics",
      "Output Signal",
      "Sampling Function"
    ],
    "answerIndex": 1,
    "explanation": "h(t) captures the complete dynamic characteristics of an LTI system."
  },
  {
    "id": 59,
    "category": "Convolution",
    "question": "If the impulse response of an LTI system is known, the output can be determined using:",
    "options": [
      "Fourier Series",
      "Convolution",
      "Sampling",
      "Quantization"
    ],
    "answerIndex": 1,
    "explanation": "Knowing h(t) allows computing output y(t) for any input x(t) via convolution."
  },
  {
    "id": 60,
    "category": "Convolution",
    "question": "The impulse response completely characterizes:",
    "options": [
      "Any nonlinear system",
      "An LTI system",
      "Random systems only",
      "Time-varying systems"
    ],
    "answerIndex": 1,
    "explanation": "An LTI system is completely and uniquely characterized by its impulse response."
  },
  {
    "id": 61,
    "category": "Convolution",
    "question": "Convolution satisfies the commutative property.:",
    "options": [
      "False",
      "True",
      "Only for continuous signals",
      "Only for discrete signals"
    ],
    "answerIndex": 1,
    "explanation": "x * h = h * x. Convolution is commutative for LTI systems."
  },
  {
    "id": 62,
    "category": "Convolution",
    "question": "The commutative property is:",
    "options": [
      "x*h != h*x",
      "x*h = h*x",
      "x+h=h+x",
      "x-h=h-x"
    ],
    "answerIndex": 1,
    "explanation": "Commutative property: order of signals in convolution does not alter the result."
  },
  {
    "id": 63,
    "category": "Convolution",
    "question": "Convolution also satisfies:",
    "options": [
      "Periodicity only",
      "Associative Property",
      "Sampling Property",
      "Nyquist Property"
    ],
    "answerIndex": 1,
    "explanation": "Convolution satisfies associative property: (x * h1) * h2 = x * (h1 * h2)."
  },
  {
    "id": 64,
    "category": "Convolution",
    "question": "Associative property is expressed as:",
    "options": [
      "x+h=h+x",
      "(x*h1)*h2 = x*(h1*h2)",
      "x-h=h-x",
      "x*h=h*x"
    ],
    "answerIndex": 1,
    "explanation": "(x * h1) * h2 = x * (h1 * h2) demonstrates associativity."
  },
  {
    "id": 65,
    "category": "Convolution",
    "question": "Which property allows grouping of convolution operations?",
    "options": [
      "Commutative",
      "Associative",
      "Symmetric",
      "Time Scaling"
    ],
    "answerIndex": 1,
    "explanation": "The Associative property permits re-grouping cascaded LTI system stages."
  },
  {
    "id": 66,
    "category": "Convolution",
    "question": "Convolution also satisfies:",
    "options": [
      "Sampling Property",
      "Distributive Property",
      "Periodic Property",
      "Aliasing Property"
    ],
    "answerIndex": 1,
    "explanation": "Convolution satisfies distributive property over addition."
  },
  {
    "id": 67,
    "category": "Convolution",
    "question": "Distributive property is:",
    "options": [
      "x*h=x+h",
      "x*(h1+h2)=x*h1+x*h2",
      "x+h=h+x",
      "x=h"
    ],
    "answerIndex": 1,
    "explanation": "x * (h1 + h2) = x * h1 + x * h2."
  },
  {
    "id": 68,
    "category": "Convolution",
    "question": "The identity element for convolution is:",
    "options": [
      "Unit Step",
      "Unit Impulse",
      "Ramp",
      "Constant Signal"
    ],
    "answerIndex": 1,
    "explanation": "x(t) * delta(t) = x(t). The unit impulse is the identity element."
  },
  {
    "id": 69,
    "category": "Convolution",
    "question": "Convolution of any signal with delta(t) results in:",
    "options": [
      "Zero",
      "The Original Signal",
      "Impulse Response",
      "Constant"
    ],
    "answerIndex": 1,
    "explanation": "Convolving any signal with delta(t) leaves the signal unchanged."
  },
  {
    "id": 70,
    "category": "Convolution",
    "question": "x(t)*delta(t)=",
    "options": [
      "0",
      "h(t)",
      "x(t)",
      "1"
    ],
    "answerIndex": 2,
    "explanation": "x(t) * delta(t) = x(t)."
  },
  {
    "id": 71,
    "category": "Convolution",
    "question": "Convolution is valid primarily for:",
    "options": [
      "Random Systems",
      "Linear Time-Invariant Systems",
      "Time-Varying Systems",
      "Chaotic Systems"
    ],
    "answerIndex": 1,
    "explanation": "Convolution integral/sum applies specifically to Linear Time-Invariant (LTI) systems."
  },
  {
    "id": 72,
    "category": "Convolution",
    "question": "In an LTI system:",
    "options": [
      "Output depends only on frequency",
      "Output is convolution of input and impulse response",
      "Output equals input always",
      "Output is differentiation of input"
    ],
    "answerIndex": 1,
    "explanation": "Output y(t) is determined by convolving input x(t) with system impulse response h(t)."
  },
  {
    "id": 73,
    "category": "Convolution",
    "question": "Which system property makes convolution applicable?",
    "options": [
      "Causality only",
      "Linearity and Time Invariance",
      "Stability only",
      "Memorylessness"
    ],
    "answerIndex": 1,
    "explanation": "Both linearity and time invariance are required for convolution representation."
  },
  {
    "id": 74,
    "category": "Convolution",
    "question": "The first step in graphical convolution is:",
    "options": [
      "Integrate",
      "Fold one signal",
      "Differentiate",
      "Normalize"
    ],
    "answerIndex": 1,
    "explanation": "Graphical convolution steps: Fold (Time Reverse), Shift, Multiply, and Sum/Integrate."
  },
  {
    "id": 75,
    "category": "Convolution",
    "question": "Folding means:",
    "options": [
      "Scaling amplitude",
      "Time Reversal",
      "Compression",
      "Expansion"
    ],
    "answerIndex": 1,
    "explanation": "Folding a signal h(tau) creates h(-tau) via time reversal."
  },
  {
    "id": 76,
    "category": "Convolution",
    "question": "After folding, the next step is generally:",
    "options": [
      "Sampling",
      "Shift",
      "Quantize",
      "Normalize"
    ],
    "answerIndex": 1,
    "explanation": "After folding h(-tau), we shift it by t to obtain h(t-tau)."
  },
  {
    "id": 77,
    "category": "Convolution",
    "question": "Graphical convolution mainly consists of:",
    "options": [
      "Shift and Multiply only",
      "Fold, Shift, Multiply and Integrate/Sum",
      "Differentiate only",
      "Sample and Quantize"
    ],
    "answerIndex": 1,
    "explanation": "The complete steps are Fold, Shift, Multiply, and Integrate (or Sum)."
  },
  {
    "id": 78,
    "category": "Convolution",
    "question": "Linear convolution gives:",
    "options": [
      "Circular Output",
      "Actual output of an LTI system",
      "Frequency Response",
      "FFT"
    ],
    "answerIndex": 1,
    "explanation": "Linear convolution evaluates the true physical response of an LTI system to an input sequence."
  },
  {
    "id": 79,
    "category": "Convolution",
    "question": "If one sequence has length M and another has length N, the linear convolution length is:",
    "options": [
      "M+N",
      "M+N-1",
      "MN",
      "Max(M,N)"
    ],
    "answerIndex": 1,
    "explanation": "The length of linear convolution between length M and N sequences is M + N - 1."
  },
  {
    "id": 80,
    "category": "Convolution",
    "question": "Linear convolution assumes:",
    "options": [
      "Signals are periodic",
      "Signals are not wrapped around",
      "Signals are random",
      "Signals are sampled twice"
    ],
    "answerIndex": 1,
    "explanation": "Linear convolution treats sequences as aperiodic non-wrapping finite signals."
  },
  {
    "id": 81,
    "category": "Convolution",
    "question": "Circular convolution assumes sequences are:",
    "options": [
      "Infinite",
      "Periodic",
      "Random",
      "Continuous"
    ],
    "answerIndex": 1,
    "explanation": "Circular convolution inherently assumes periodic extension of input sequences."
  },
  {
    "id": 82,
    "category": "Convolution",
    "question": "Circular convolution is mainly associated with:",
    "options": [
      "Laplace Transform",
      "DFT",
      "ZOH",
      "FIR Design"
    ],
    "answerIndex": 1,
    "explanation": "Multiplication of DFTs in frequency domain corresponds to circular convolution in time domain."
  },
  {
    "id": 83,
    "category": "Convolution",
    "question": "Circular convolution differs from linear convolution because:",
    "options": [
      "It uses integration",
      "It wraps around the sequence",
      "It ignores impulse response",
      "It uses differentiation"
    ],
    "answerIndex": 1,
    "explanation": "Circular convolution wraps sequence indices modulo N."
  },
  {
    "id": 84,
    "category": "Convolution",
    "question": "Linear and circular convolution become identical when:",
    "options": [
      "No sampling",
      "Proper zero-padding is applied",
      "FFT is avoided",
      "Signal is analog"
    ],
    "answerIndex": 1,
    "explanation": "Zero-padding sequences to length >= M + N - 1 makes circular convolution equal to linear convolution."
  },
  {
    "id": 85,
    "category": "Convolution",
    "question": "Convolution in the time domain corresponds to:",
    "options": [
      "Addition in frequency domain",
      "Multiplication in frequency domain",
      "Differentiation",
      "Sampling"
    ],
    "answerIndex": 1,
    "explanation": "Time-domain convolution x(t) * h(t) translates to multiplication X(f)H(f) in frequency domain."
  },
  {
    "id": 86,
    "category": "Convolution",
    "question": "Multiplication in time domain corresponds to:",
    "options": [
      "Addition in frequency domain",
      "Convolution in frequency domain",
      "Integration",
      "Sampling"
    ],
    "answerIndex": 1,
    "explanation": "Time-domain multiplication x(t)h(t) translates to frequency-domain convolution X(f) * H(f)."
  },
  {
    "id": 87,
    "category": "Convolution",
    "question": "Convolution theorem simplifies computation using:",
    "options": [
      "Quantization",
      "Fourier Transform",
      "Modulation",
      "Coding"
    ],
    "answerIndex": 1,
    "explanation": "Fourier Transform allows replacing costly convolution operations with simple multiplications."
  },
  {
    "id": 88,
    "category": "Convolution",
    "question": "Convolution mainly combines:",
    "options": [
      "Two frequencies",
      "Two signals",
      "Two databases",
      "Two processors"
    ],
    "answerIndex": 1,
    "explanation": "Convolution operates on two time-domain signals."
  },
  {
    "id": 89,
    "category": "Convolution",
    "question": "Which signal is convolved with the input?",
    "options": [
      "Output Signal",
      "Impulse Response",
      "Frequency Response",
      "Transfer Function"
    ],
    "answerIndex": 1,
    "explanation": "The input signal x(t) is convolved with the system's impulse response h(t)."
  },
  {
    "id": 90,
    "category": "Convolution",
    "question": "Convolution is an operation performed in:",
    "options": [
      "Time Domain",
      "Discrete Domain",
      "Continuous Domain",
      "Both Time and Discrete-Time Domains"
    ],
    "answerIndex": 3,
    "explanation": "Convolution is applicable to both continuous-time x(t)*h(t) and discrete-time x[n]*h[n] signals."
  },
  {
    "id": 91,
    "category": "Convolution",
    "question": "Which statement is TRUE?",
    "options": [
      "Convolution is applicable only to analog signals.",
      "Convolution applies to both continuous-time and discrete-time signals.",
      "Convolution is used only with FFT.",
      "Convolution requires periodic signals."
    ],
    "answerIndex": 1,
    "explanation": "Convolution operates across both continuous-time and discrete-time domains."
  },
  {
    "id": 92,
    "category": "Convolution",
    "question": "Which property allows changing the order of convolution?",
    "options": [
      "Associative",
      "Commutative",
      "Distributive",
      "Identity"
    ],
    "answerIndex": 1,
    "explanation": "Commutativity (x * h = h * x) allows changing signal order."
  },
  {
    "id": 93,
    "category": "Convolution",
    "question": "Which property allows distributing convolution over addition?",
    "options": [
      "Commutative",
      "Associative",
      "Distributive",
      "Scaling"
    ],
    "answerIndex": 2,
    "explanation": "Distributive property: x * (h1 + h2) = x * h1 + x * h2."
  },
  {
    "id": 94,
    "category": "Convolution",
    "question": "Which operation is closely related to system response?",
    "options": [
      "Sampling",
      "Convolution",
      "Quantization",
      "Encoding"
    ],
    "answerIndex": 1,
    "explanation": "System output response to an input is computed via convolution."
  },
  {
    "id": 95,
    "category": "Convolution",
    "question": "A causal LTI system has an impulse response that is:",
    "options": [
      "Nonzero for t < 0",
      "Zero for t < 0",
      "Always periodic",
      "Constant"
    ],
    "answerIndex": 1,
    "explanation": "For a causal system, h(t) = 0 for t < 0 (or h[n] = 0 for n < 0)."
  },
  {
    "id": 96,
    "category": "Convolution",
    "question": "If h(t)=delta(t), then the system behaves as:",
    "options": [
      "Integrator",
      "Identity System",
      "Differentiator",
      "Low-pass Filter"
    ],
    "answerIndex": 1,
    "explanation": "y(t) = x(t) * delta(t) = x(t), acting as an identity pass-through system."
  },
  {
    "id": 97,
    "category": "Convolution",
    "question": "Convolution is useful because it:",
    "options": [
      "Increases sampling frequency",
      "Predicts system output without solving differential equations directly",
      "Eliminates quantization noise",
      "Converts analog signals to digital"
    ],
    "answerIndex": 1,
    "explanation": "Convolution calculates LTI system response directly from input and impulse response."
  },
  {
    "id": 98,
    "category": "Convolution",
    "question": "Which concept is most closely linked with convolution?",
    "options": [
      "Nyquist Rate",
      "Quantization",
      "Impulse Response",
      "Window Function"
    ],
    "answerIndex": 2,
    "explanation": "Impulse response is the fundamental kernel used in LTI system convolution."
  },
  {
    "id": 99,
    "category": "Convolution",
    "question": "Which of the following is NOT a property of convolution?",
    "options": [
      "Commutative",
      "Associative",
      "Distributive",
      "Anti-Commutative"
    ],
    "answerIndex": 3,
    "explanation": "Convolution is commutative, not anti-commutative."
  },
  {
    "id": 100,
    "category": "Convolution",
    "question": "Which statement best summarizes convolution?",
    "options": [
      "It converts analog signals into digital signals.",
      "It calculates the sampling frequency.",
      "It determines the output of an LTI system by combining the input signal with the system's impulse response.",
      "It measures signal power only."
    ],
    "answerIndex": 2,
    "explanation": "Convolution evaluates LTI system response by combining input with impulse response."
  },
  {
    "id": 101,
    "category": "Sampling Theory",
    "question": "Sampling is the process of:",
    "options": [
      "Amplifying a signal",
      "Converting a continuous-time signal into a discrete-time signal",
      "Compressing a signal",
      "Encrypting a signal"
    ],
    "answerIndex": 1,
    "explanation": "Sampling discretizes continuous time by taking values at discrete time intervals."
  },
  {
    "id": 102,
    "category": "Sampling Theory",
    "question": "Sampling converts:",
    "options": [
      "Digital signal into analog signal",
      "Analog signal into discrete-time signal",
      "Frequency into amplitude",
      "Voltage into current"
    ],
    "answerIndex": 1,
    "explanation": "Sampling converts a continuous analog signal x(t) into a discrete-time signal x[n]."
  },
  {
    "id": 103,
    "category": "Sampling Theory",
    "question": "The primary purpose of sampling is:",
    "options": [
      "Increase signal amplitude",
      "Enable digital processing of analog signals",
      "Reduce frequency",
      "Increase bandwidth"
    ],
    "answerIndex": 1,
    "explanation": "Sampling enables continuous real-world signals to be processed using digital computers and DSPs."
  },
  {
    "id": 104,
    "category": "Sampling Theory",
    "question": "Which device performs sampling?",
    "options": [
      "Oscillator",
      "Analog-to-Digital Converter (ADC)",
      "Amplifier",
      "Modulator"
    ],
    "answerIndex": 1,
    "explanation": "An ADC performs sampling and quantization to convert analog signals to digital."
  },
  {
    "id": 105,
    "category": "Sampling Theory",
    "question": "A sampled signal consists of:",
    "options": [
      "Continuous values at every instant",
      "Values taken at discrete time intervals",
      "Random amplitudes only",
      "Infinite frequencies"
    ],
    "answerIndex": 1,
    "explanation": "Sampling retains signal amplitude values strictly at discrete time steps Ts."
  },
  {
    "id": 106,
    "category": "Sampling Theory",
    "question": "Sampling interval is commonly represented by:",
    "options": [
      "f",
      "Ts",
      "w",
      "lambda"
    ],
    "answerIndex": 1,
    "explanation": "Ts represents the sampling period or sampling interval."
  },
  {
    "id": 107,
    "category": "Sampling Theory",
    "question": "Sampling frequency is denoted by:",
    "options": [
      "T",
      "fs",
      "A",
      "H"
    ],
    "answerIndex": 1,
    "explanation": "fs denotes sampling frequency (samples per second)."
  },
  {
    "id": 108,
    "category": "Sampling Theory",
    "question": "Sampling frequency is the:",
    "options": [
      "Frequency of the original signal",
      "Number of samples taken per second",
      "Signal amplitude",
      "Filter bandwidth"
    ],
    "answerIndex": 1,
    "explanation": "fs = 1/Ts is the total number of samples taken per second (Hz)."
  },
  {
    "id": 109,
    "category": "Sampling Theory",
    "question": "The relationship between sampling period and sampling frequency is:",
    "options": [
      "fs = Ts",
      "fs = 1/Ts",
      "fs = 2Ts",
      "Ts = 2fs"
    ],
    "answerIndex": 1,
    "explanation": "Sampling rate fs and sampling interval Ts are inversely related: fs = 1/Ts."
  },
  {
    "id": 110,
    "category": "Sampling Theory",
    "question": "Increasing the sampling frequency means:",
    "options": [
      "Increasing the sampling interval",
      "Decreasing the sampling interval",
      "Increasing quantization error",
      "Increasing aliasing"
    ],
    "answerIndex": 1,
    "explanation": "Higher sampling frequency fs decreases time interval Ts between consecutive samples."
  },
  {
    "id": 111,
    "category": "Sampling Theory",
    "question": "Nyquist Sampling Theorem states that the sampling frequency must be at least:",
    "options": [
      "Equal to the highest frequency",
      "Twice the highest frequency component",
      "Half the highest frequency",
      "Four times the highest frequency"
    ],
    "answerIndex": 1,
    "explanation": "fs >= 2 * fmax to prevent spectral overlap (aliasing)."
  },
  {
    "id": 112,
    "category": "Sampling Theory",
    "question": "Nyquist rate is:",
    "options": [
      "fmax",
      "2fmax",
      "fmax/2",
      "4fmax"
    ],
    "answerIndex": 1,
    "explanation": "The minimum sampling rate to avoid aliasing is the Nyquist Rate = 2 * fmax."
  },
  {
    "id": 113,
    "category": "Sampling Theory",
    "question": "If the maximum frequency is 5 kHz, the minimum sampling frequency is:",
    "options": [
      "5 kHz",
      "10 kHz",
      "2.5 kHz",
      "20 kHz"
    ],
    "answerIndex": 1,
    "explanation": "Nyquist rate = 2 * 5 kHz = 10 kHz."
  },
  {
    "id": 114,
    "category": "Sampling Theory",
    "question": "A signal containing frequencies up to 8 kHz should be sampled at a minimum rate of:",
    "options": [
      "8 kHz",
      "12 kHz",
      "16 kHz",
      "24 kHz"
    ],
    "answerIndex": 2,
    "explanation": "Minimum sampling rate = 2 * 8 kHz = 16 kHz."
  },
  {
    "id": 115,
    "category": "Sampling Theory",
    "question": "Nyquist theorem prevents:",
    "options": [
      "Quantization",
      "Aliasing",
      "Filtering",
      "Amplification"
    ],
    "answerIndex": 1,
    "explanation": "Sampling above the Nyquist rate prevents spectral overlap (aliasing)."
  },
  {
    "id": 116,
    "category": "Sampling Theory",
    "question": "Who proposed the sampling theorem commonly known as the Nyquist-Shannon theorem?",
    "options": [
      "Fourier",
      "Nyquist and Shannon",
      "Laplace",
      "Euler"
    ],
    "answerIndex": 1,
    "explanation": "Harry Nyquist and Claude Shannon formulated the sampling theorem."
  },
  {
    "id": 117,
    "category": "Sampling Theory",
    "question": "Aliasing occurs when:",
    "options": [
      "Sampling frequency is too high",
      "Sampling frequency is below the Nyquist rate",
      "Quantization levels are increased",
      "Noise is removed"
    ],
    "answerIndex": 1,
    "explanation": "Undersampling (fs < 2fmax) causes high-frequency components to alias into lower frequencies."
  },
  {
    "id": 118,
    "category": "Sampling Theory",
    "question": "Aliasing causes:",
    "options": [
      "Better reconstruction",
      "Different frequencies to become indistinguishable",
      "Higher resolution",
      "Reduced storage"
    ],
    "answerIndex": 1,
    "explanation": "Aliasing overlaps spectral copies, rendering high and low frequency components indistinguishable."
  },
  {
    "id": 119,
    "category": "Sampling Theory",
    "question": "Which of the following is the main cause of aliasing?",
    "options": [
      "Oversampling",
      "Undersampling",
      "Filtering",
      "Compression"
    ],
    "answerIndex": 1,
    "explanation": "Undersampling (sampling below Nyquist rate) causes aliasing."
  },
  {
    "id": 120,
    "category": "Sampling Theory",
    "question": "Aliasing results in:",
    "options": [
      "Accurate signal reconstruction",
      "Distortion in the reconstructed signal",
      "Increased bandwidth",
      "Better quality"
    ],
    "answerIndex": 1,
    "explanation": "Aliasing distorts signal spectrum, causing irreversible waveform degradation."
  },
  {
    "id": 121,
    "category": "Sampling Theory",
    "question": "Which filter is used before sampling to prevent aliasing?",
    "options": [
      "High-pass Filter",
      "Low-pass (Anti-Aliasing) Filter",
      "Band-stop Filter",
      "Notch Filter"
    ],
    "answerIndex": 1,
    "explanation": "A low-pass anti-aliasing filter attenuates frequencies above fs/2 prior to sampling."
  },
  {
    "id": 122,
    "category": "Sampling Theory",
    "question": "The anti-aliasing filter removes:",
    "options": [
      "Low-frequency components",
      "Frequencies above the Nyquist frequency",
      "Quantization noise",
      "DC components"
    ],
    "answerIndex": 1,
    "explanation": "Anti-aliasing low-pass filters eliminate frequencies above the Nyquist frequency fs/2."
  },
  {
    "id": 123,
    "category": "Sampling Theory",
    "question": "Sampling below the Nyquist rate is called:",
    "options": [
      "Oversampling",
      "Undersampling",
      "Uniform Sampling",
      "Sequential Sampling"
    ],
    "answerIndex": 1,
    "explanation": "Sampling at fs < 2fmax is termed undersampling."
  },
  {
    "id": 124,
    "category": "Sampling Theory",
    "question": "Oversampling means:",
    "options": [
      "Sampling below Nyquist rate",
      "Sampling above the Nyquist rate",
      "Sampling exactly at Nyquist rate",
      "Random sampling"
    ],
    "answerIndex": 1,
    "explanation": "Oversampling samples at fs significantly greater than 2fmax."
  },
  {
    "id": 125,
    "category": "Sampling Theory",
    "question": "Oversampling generally:",
    "options": [
      "Increases aliasing",
      "Reduces the risk of aliasing",
      "Reduces signal quality",
      "Eliminates filtering"
    ],
    "answerIndex": 1,
    "explanation": "Oversampling widens transition bands and reduces aliasing risk."
  },
  {
    "id": 126,
    "category": "Sampling Theory",
    "question": "Which statement is TRUE?",
    "options": [
      "Oversampling always causes distortion.",
      "Oversampling provides more samples than the minimum required.",
      "Oversampling reduces resolution.",
      "Oversampling increases aliasing."
    ],
    "answerIndex": 1,
    "explanation": "Oversampling gathers more samples per second than the minimum Nyquist requirement."
  },
  {
    "id": 127,
    "category": "Sampling Theory",
    "question": "Quantization is the process of:",
    "options": [
      "Sampling time",
      "Converting continuous amplitudes into discrete levels",
      "Amplifying signals",
      "Filtering noise"
    ],
    "answerIndex": 1,
    "explanation": "Quantization discretizes continuous signal amplitude into finite discrete representation levels."
  },
  {
    "id": 128,
    "category": "Sampling Theory",
    "question": "Quantization occurs after:",
    "options": [
      "Reconstruction",
      "Sampling",
      "Modulation",
      "Filtering"
    ],
    "answerIndex": 1,
    "explanation": "In ADC, sampling discretizes time first, followed by quantization of amplitude."
  },
  {
    "id": 129,
    "category": "Sampling Theory",
    "question": "Quantization converts:",
    "options": [
      "Continuous time into discrete time",
      "Continuous amplitude into discrete amplitude",
      "Analog frequency into digital frequency",
      "Voltage into current"
    ],
    "answerIndex": 1,
    "explanation": "Quantization maps continuous voltage amplitudes into discrete digital binary steps."
  },
  {
    "id": 130,
    "category": "Sampling Theory",
    "question": "Quantization error is also called:",
    "options": [
      "Sampling Error",
      "Quantization Noise",
      "Aliasing",
      "White Noise"
    ],
    "answerIndex": 1,
    "explanation": "The difference between actual continuous amplitude and quantized value is Quantization Noise."
  },
  {
    "id": 131,
    "category": "Sampling Theory",
    "question": "Increasing the number of quantization levels generally:",
    "options": [
      "Increases quantization error",
      "Reduces quantization error",
      "Increases aliasing",
      "Reduces sampling frequency"
    ],
    "answerIndex": 1,
    "explanation": "More quantization levels reduce step size L, decreasing quantization noise error."
  },
  {
    "id": 132,
    "category": "Sampling Theory",
    "question": "An 8-bit ADC provides:",
    "options": [
      "8 quantization levels",
      "64 levels",
      "128 levels",
      "256 levels"
    ],
    "answerIndex": 3,
    "explanation": "2^8 = 256 discrete quantization levels."
  },
  {
    "id": 133,
    "category": "Sampling Theory",
    "question": "ADC stands for:",
    "options": [
      "Analog Data Converter",
      "Analog-to-Digital Converter",
      "Automatic Data Circuit",
      "Analog Detection Circuit"
    ],
    "answerIndex": 1,
    "explanation": "ADC stands for Analog-to-Digital Converter."
  },
  {
    "id": 134,
    "category": "Sampling Theory",
    "question": "DAC stands for:",
    "options": [
      "Digital Analog Circuit",
      "Digital-to-Analog Converter",
      "Data Access Converter",
      "Digital Amplitude Controller"
    ],
    "answerIndex": 1,
    "explanation": "DAC stands for Digital-to-Analog Converter."
  },
  {
    "id": 135,
    "category": "Sampling Theory",
    "question": "ADC performs:",
    "options": [
      "Reconstruction",
      "Sampling and Quantization",
      "Amplification only",
      "Filtering only"
    ],
    "answerIndex": 1,
    "explanation": "ADCs perform time sampling followed by amplitude quantization and encoding."
  },
  {
    "id": 136,
    "category": "Sampling Theory",
    "question": "DAC is mainly used for:",
    "options": [
      "Sampling",
      "Converting digital signals back into analog form",
      "Quantization",
      "Aliasing"
    ],
    "answerIndex": 1,
    "explanation": "DAC reconstructs continuous analog signals from discrete digital numbers."
  },
  {
    "id": 137,
    "category": "Sampling Theory",
    "question": "Reconstruction means:",
    "options": [
      "Sampling again",
      "Recovering the original analog signal from its samples",
      "Quantization",
      "Encoding"
    ],
    "answerIndex": 1,
    "explanation": "Reconstruction converts discrete-time sample sequence back to continuous-time analog signal."
  },
  {
    "id": 138,
    "category": "Sampling Theory",
    "question": "Perfect reconstruction is possible when:",
    "options": [
      "Sampling frequency is below Nyquist rate",
      "Sampling theorem is satisfied",
      "Aliasing occurs",
      "Quantization error is maximum"
    ],
    "answerIndex": 1,
    "explanation": "If fs >= 2fmax (Nyquist satisfied), ideal low-pass filtering yields perfect signal reconstruction."
  },
  {
    "id": 139,
    "category": "Sampling Theory",
    "question": "Which filter is commonly used after DAC for reconstruction?",
    "options": [
      "High-pass Filter",
      "Low-pass Reconstruction Filter",
      "Notch Filter",
      "Band-stop Filter"
    ],
    "answerIndex": 1,
    "explanation": "A low-pass reconstruction filter removes high frequency images created by DAC steps."
  },
  {
    "id": 140,
    "category": "Sampling Theory",
    "question": "Reconstruction filter is also called:",
    "options": [
      "Sampling Filter",
      "Smoothing Filter",
      "Quantization Filter",
      "Alias Filter"
    ],
    "answerIndex": 1,
    "explanation": "Reconstruction filters smooth DAC stair-step outputs and are called Smoothing Filters."
  },
  {
    "id": 141,
    "category": "Sampling Theory",
    "question": "The Nyquist frequency is equal to:",
    "options": [
      "fs",
      "fs/2",
      "2fs",
      "fs^2"
    ],
    "answerIndex": 1,
    "explanation": "The Nyquist Frequency is half the sampling rate (fs/2)."
  },
  {
    "id": 142,
    "category": "Sampling Theory",
    "question": "If sampling frequency increases, the sampling interval:",
    "options": [
      "Increases",
      "Decreases",
      "Remains constant",
      "Doubles"
    ],
    "answerIndex": 1,
    "explanation": "Ts = 1/fs; as fs increases, sampling interval Ts decreases."
  },
  {
    "id": 143,
    "category": "Sampling Theory",
    "question": "Which statement is TRUE?",
    "options": [
      "Aliasing improves signal quality.",
      "Aliasing makes different frequency components appear identical after sampling.",
      "Aliasing occurs only in digital filters.",
      "Aliasing is caused by quantization."
    ],
    "answerIndex": 1,
    "explanation": "Aliasing causes higher frequencies to mimic lower frequencies after sampling."
  },
  {
    "id": 144,
    "category": "Sampling Theory",
    "question": "Which process introduces quantization noise?",
    "options": [
      "Sampling",
      "Quantization",
      "Reconstruction",
      "Filtering"
    ],
    "answerIndex": 1,
    "explanation": "Quantization rounds continuous amplitudes to discrete levels, producing quantization noise."
  },
  {
    "id": 145,
    "category": "Sampling Theory",
    "question": "Which process changes only the time axis?",
    "options": [
      "Sampling",
      "Quantization",
      "Filtering",
      "Amplification"
    ],
    "answerIndex": 0,
    "explanation": "Sampling discretizes the time axis without quantizing amplitude levels."
  },
  {
    "id": 146,
    "category": "Sampling Theory",
    "question": "Which process changes only the amplitude axis?",
    "options": [
      "Sampling",
      "Quantization",
      "Reconstruction",
      "Modulation"
    ],
    "answerIndex": 1,
    "explanation": "Quantization discretizes the amplitude axis."
  },
  {
    "id": 147,
    "category": "Sampling Theory",
    "question": "The minimum sampling frequency depends on:",
    "options": [
      "Signal amplitude",
      "Highest frequency component of the signal",
      "Signal duration",
      "Signal power"
    ],
    "answerIndex": 1,
    "explanation": "Nyquist rate relies on highest frequency component fmax in the signal."
  },
  {
    "id": 148,
    "category": "Sampling Theory",
    "question": "Which statement about the Sampling Theorem is correct?",
    "options": [
      "It applies only to digital signals.",
      "It provides the condition for faithful reconstruction of a band-limited signal.",
      "It eliminates quantization noise.",
      "It increases signal amplitude."
    ],
    "answerIndex": 1,
    "explanation": "Sampling theorem defines conditions (fs >= 2fmax) for complete signal reconstruction."
  },
  {
    "id": 149,
    "category": "Sampling Theory",
    "question": "Which sequence correctly represents analog-to-digital conversion?",
    "options": [
      "Quantization -> Sampling -> Encoding",
      "Sampling -> Quantization -> Encoding",
      "Encoding -> Sampling -> Quantization",
      "Filtering -> Encoding -> Quantization"
    ],
    "answerIndex": 1,
    "explanation": "A-to-D conversion pipeline: Sampling -> Quantization -> Encoding."
  },
  {
    "id": 150,
    "category": "Sampling Theory",
    "question": "Which statement best summarizes sampling?",
    "options": [
      "It converts digital data into analog form.",
      "It increases signal bandwidth.",
      "It converts a continuous-time signal into a discrete-time representation suitable for digital processing.",
      "It removes all noise from a signal."
    ],
    "answerIndex": 2,
    "explanation": "Sampling converts continuous-time signals into discrete-time representations for digital systems."
  },
  {
    "id": 151,
    "category": "Fourier Series & Transform",
    "question": "The Fourier Transform is mainly used to:",
    "options": [
      "Sample a signal",
      "Convert a signal from the time domain to the frequency domain",
      "Quantize a signal",
      "Encode a signal"
    ],
    "answerIndex": 1,
    "explanation": "Fourier Transform analyzes frequency components by transforming signals from time to frequency domain."
  },
  {
    "id": 152,
    "category": "Fourier Series & Transform",
    "question": "The inverse Fourier Transform converts a signal from:",
    "options": [
      "Time domain to time domain",
      "Frequency domain to time domain",
      "Digital to analog",
      "Analog to digital"
    ],
    "answerIndex": 1,
    "explanation": "Inverse Fourier Transform reconstructs time-domain signals from frequency-domain spectra."
  },
  {
    "id": 153,
    "category": "Fourier Series & Transform",
    "question": "The frequency-domain representation of a signal is called its:",
    "options": [
      "Waveform",
      "Spectrum",
      "Impulse Response",
      "Sampling Pattern"
    ],
    "answerIndex": 1,
    "explanation": "The distribution of signal amplitudes/phases across frequencies is its Spectrum."
  },
  {
    "id": 154,
    "category": "Fourier Series & Transform",
    "question": "Fourier analysis is based on the idea that a signal can be represented as:",
    "options": [
      "Polynomial functions only",
      "A sum of sinusoidal components",
      "Random noise",
      "Impulse functions only"
    ],
    "answerIndex": 1,
    "explanation": "Fourier analysis decomposes complex signals into sums of orthogonal sinusoids/complex exponentials."
  },
  {
    "id": 155,
    "category": "Fourier Series & Transform",
    "question": "Fourier analysis decomposes signals into:",
    "options": [
      "Exponential growth functions",
      "Different frequency components",
      "Only square waves",
      "Only triangular waves"
    ],
    "answerIndex": 1,
    "explanation": "Fourier analysis resolves arbitrary signals into constituent frequency components."
  },
  {
    "id": 156,
    "category": "Fourier Series & Transform",
    "question": "Fourier Transform is applicable to:",
    "options": [
      "Periodic signals only",
      "Digital signals only",
      "Aperiodic (non-periodic) signals",
      "Constant signals only"
    ],
    "answerIndex": 2,
    "explanation": "Continuous Fourier Transform extends frequency analysis to non-periodic (aperiodic) signals."
  },
  {
    "id": 157,
    "category": "Fourier Series & Transform",
    "question": "Fourier Series is mainly used for:",
    "options": [
      "Periodic signals",
      "Aperiodic signals",
      "Random signals",
      "Noise signals"
    ],
    "answerIndex": 0,
    "explanation": "Fourier Series expands periodic signals into discrete harmonic frequency components."
  },
  {
    "id": 158,
    "category": "Fourier Series & Transform",
    "question": "Fourier Series represents a periodic signal as:",
    "options": [
      "Impulses only",
      "A sum of sine and cosine (or complex exponential) terms",
      "Step functions",
      "Random sequences"
    ],
    "answerIndex": 1,
    "explanation": "Fourier Series represents periodic functions as linear combinations of sines and cosines."
  },
  {
    "id": 159,
    "category": "Fourier Series & Transform",
    "question": "Which statement is TRUE?",
    "options": [
      "Fourier Series is used only for non-periodic signals.",
      "Fourier Series represents periodic signals.",
      "Fourier Series removes harmonics.",
      "Fourier Series is identical to the Z-transform."
    ],
    "answerIndex": 1,
    "explanation": "Fourier Series applies specifically to periodic waveforms."
  },
  {
    "id": 160,
    "category": "Fourier Series & Transform",
    "question": "Fourier Series coefficients represent:",
    "options": [
      "Sampling instants",
      "Amplitudes of harmonic frequency components",
      "Quantization levels",
      "Filter coefficients"
    ],
    "answerIndex": 1,
    "explanation": "Fourier series coefficients specify amplitudes and phases of fundamental and harmonic components."
  },
  {
    "id": 161,
    "category": "Fourier Series & Transform",
    "question": "A periodic square wave can be represented using:",
    "options": [
      "Laplace Transform",
      "Fourier Series",
      "Z-transform",
      "Convolution only"
    ],
    "answerIndex": 1,
    "explanation": "Periodic square waves are decomposed into infinite odd-harmonic sinusoids via Fourier Series."
  },
  {
    "id": 162,
    "category": "Fourier Series & Transform",
    "question": "Fourier Transform is an extension of:",
    "options": [
      "Z-transform",
      "Fourier Series",
      "Laplace Equation",
      "Nyquist Theorem"
    ],
    "answerIndex": 1,
    "explanation": "Fourier Transform extends Fourier Series by letting period T approach infinity."
  },
  {
    "id": 163,
    "category": "Fourier Series & Transform",
    "question": "Fourier Transform is generally used for:",
    "options": [
      "Periodic signals only",
      "Non-periodic signals",
      "Constant signals",
      "Quantized signals"
    ],
    "answerIndex": 1,
    "explanation": "Fourier Transform handles non-periodic continuous signals."
  },
  {
    "id": 164,
    "category": "Fourier Series & Transform",
    "question": "Which domain is represented by X(f)?",
    "options": [
      "Time Domain",
      "Frequency Domain",
      "Spatial Domain",
      "Sampling Domain"
    ],
    "answerIndex": 1,
    "explanation": "X(f) or X(w) represents frequency-domain spectrum."
  },
  {
    "id": 165,
    "category": "Fourier Series & Transform",
    "question": "Which notation usually represents a signal in the time domain?",
    "options": [
      "x(t)",
      "X(f)",
      "H(f)",
      "Y(f)"
    ],
    "answerIndex": 0,
    "explanation": "x(t) denotes continuous time-domain signal."
  },
  {
    "id": 166,
    "category": "Fourier Series & Transform",
    "question": "Which notation usually represents the Fourier Transform?",
    "options": [
      "x(t)",
      "X(f)",
      "h(t)",
      "y(t)"
    ],
    "answerIndex": 1,
    "explanation": "Capitalized X(f) or X(w) represents Fourier Transform."
  },
  {
    "id": 167,
    "category": "Fourier Series & Transform",
    "question": "The time domain describes:",
    "options": [
      "Frequency distribution",
      "Signal variation with time",
      "Harmonic content only",
      "Filter response"
    ],
    "answerIndex": 1,
    "explanation": "Time domain represents signal amplitude variation as a function of time t."
  },
  {
    "id": 168,
    "category": "Fourier Series & Transform",
    "question": "The frequency domain describes:",
    "options": [
      "Signal amplitude versus time",
      "Distribution of frequencies present in a signal",
      "Signal delay",
      "Quantization levels"
    ],
    "answerIndex": 1,
    "explanation": "Frequency domain details individual frequency components and spectral energy distribution."
  },
  {
    "id": 169,
    "category": "Fourier Series & Transform",
    "question": "Which domain is generally easier for filter analysis?",
    "options": [
      "Time Domain",
      "Frequency Domain",
      "Spatial Domain",
      "Sample Domain"
    ],
    "answerIndex": 1,
    "explanation": "Frequency domain simplifies differential equations and convolution into algebraic operations."
  },
  {
    "id": 170,
    "category": "Fourier Series & Transform",
    "question": "Which transform helps analyze frequency components?",
    "options": [
      "Z-transform only",
      "Fourier Transform",
      "Sampling Theorem",
      "Quantization"
    ],
    "answerIndex": 1,
    "explanation": "Fourier Transform converts time-domain signals to inspect frequency content."
  },
  {
    "id": 171,
    "category": "Fourier Series & Transform",
    "question": "A spectrum shows:",
    "options": [
      "Signal power versus time",
      "Amplitude versus frequency",
      "Time versus voltage",
      "Sampling interval"
    ],
    "answerIndex": 1,
    "explanation": "Frequency spectrum plots signal amplitude (or power) as a function of frequency."
  },
  {
    "id": 172,
    "category": "Fourier Series & Transform",
    "question": "Frequency spectrum is obtained using:",
    "options": [
      "Convolution",
      "Fourier Transform",
      "Quantization",
      "Interpolation"
    ],
    "answerIndex": 1,
    "explanation": "Applying Fourier Transform yields frequency spectrum of a signal."
  },
  {
    "id": 173,
    "category": "Fourier Series & Transform",
    "question": "Which statement is TRUE?",
    "options": [
      "A pure sine wave contains many frequencies.",
      "A pure sine wave contains only one frequency component.",
      "Every signal has only one frequency.",
      "Frequency spectrum is always continuous."
    ],
    "answerIndex": 1,
    "explanation": "A single pure sinusoid sin(w0 t) contains a single frequency component at w0."
  },
  {
    "id": 174,
    "category": "Fourier Series & Transform",
    "question": "A complex signal generally consists of:",
    "options": [
      "One frequency only",
      "Multiple frequency components",
      "No frequencies",
      "Constant values only"
    ],
    "answerIndex": 1,
    "explanation": "Arbitrary real-world signals consist of multiple superimposed frequency components."
  },
  {
    "id": 175,
    "category": "Fourier Series & Transform",
    "question": "Fourier Transform is a linear transformation.",
    "options": [
      "False",
      "True",
      "Only for periodic signals",
      "Only for discrete signals"
    ],
    "answerIndex": 1,
    "explanation": "FT{a x1(t) + b x2(t)} = a X1(f) + b X2(f). Fourier Transform is linear."
  },
  {
    "id": 176,
    "category": "Fourier Series & Transform",
    "question": "If two signals are added in the time domain, their Fourier Transforms are:",
    "options": [
      "Multiplied",
      "Added",
      "Differentiated",
      "Integrated"
    ],
    "answerIndex": 1,
    "explanation": "Linearity property: FT of sum of two signals equals sum of their individual FTs."
  },
  {
    "id": 177,
    "category": "Fourier Series & Transform",
    "question": "Time shifting in the time domain mainly causes:",
    "options": [
      "Change in frequency values",
      "Phase shift in the frequency domain",
      "Aliasing",
      "Quantization"
    ],
    "answerIndex": 1,
    "explanation": "x(t-t0) <-> X(f) e^(-j 2pi f t0). Time shift introduces a linear phase shift."
  },
  {
    "id": 178,
    "category": "Fourier Series & Transform",
    "question": "Time scaling affects:",
    "options": [
      "Only amplitude",
      "Frequency distribution",
      "Sampling interval only",
      "Quantization levels"
    ],
    "answerIndex": 1,
    "explanation": "x(at) <-> (1/|a|) X(f/a). Time scaling inversely expands or compresses frequency spectrum."
  },
  {
    "id": 179,
    "category": "Fourier Series & Transform",
    "question": "Convolution in the time domain becomes:",
    "options": [
      "Addition",
      "Multiplication in the frequency domain",
      "Sampling",
      "Integration"
    ],
    "answerIndex": 1,
    "explanation": "x(t) * h(t) <-> X(f) H(f). Convolution in time corresponds to multiplication in frequency."
  },
  {
    "id": 180,
    "category": "Fourier Series & Transform",
    "question": "Multiplication in the time domain corresponds to:",
    "options": [
      "Addition in frequency domain",
      "Convolution in frequency domain",
      "Differentiation",
      "Filtering only"
    ],
    "answerIndex": 1,
    "explanation": "x(t) h(t) <-> X(f) * H(f). Time-domain multiplication corresponds to frequency convolution."
  },
  {
    "id": 181,
    "category": "Fourier Series & Transform",
    "question": "Parseval's theorem relates:",
    "options": [
      "Sampling and Quantization",
      "Energy in the time domain and frequency domain",
      "Time and Delay",
      "Nyquist and Shannon"
    ],
    "answerIndex": 1,
    "explanation": "Parseval's theorem states total energy computed in time domain equals total energy in frequency domain."
  },
  {
    "id": 182,
    "category": "Fourier Series & Transform",
    "question": "Parseval's theorem implies that:",
    "options": [
      "Energy changes after transformation.",
      "Total energy is preserved under the Fourier Transform.",
      "Frequency doubles.",
      "Sampling frequency changes."
    ],
    "answerIndex": 1,
    "explanation": "Fourier Transform is unitary and preserves total signal energy across domains."
  },
  {
    "id": 183,
    "category": "Fourier Series & Transform",
    "question": "Fourier Transform is widely used in:",
    "options": [
      "Image Processing",
      "Audio Processing",
      "Communication Systems",
      "All of them"
    ],
    "answerIndex": 3,
    "explanation": "Fourier analysis is fundamental to audio filtering, image compression (JPEG), and communications."
  },
  {
    "id": 184,
    "category": "Fourier Series & Transform",
    "question": "Noise removal is commonly performed in:",
    "options": [
      "Time domain only",
      "Frequency domain",
      "Quantization domain",
      "Sampling domain"
    ],
    "answerIndex": 1,
    "explanation": "Filtering undesirable noise frequencies is standard practice in frequency domain."
  },
  {
    "id": 185,
    "category": "Fourier Series & Transform",
    "question": "Frequency-domain analysis is especially useful for:",
    "options": [
      "Identifying frequency components",
      "Filter design",
      "Spectrum analysis",
      "All of them"
    ],
    "answerIndex": 3,
    "explanation": "Frequency domain simplifies filter design, spectral inspection, and frequency isolation."
  },
  {
    "id": 186,
    "category": "Fourier Series & Transform",
    "question": "Audio equalizers mainly operate by modifying:",
    "options": [
      "Time samples",
      "Frequency components",
      "Quantization levels",
      "Sampling interval"
    ],
    "answerIndex": 1,
    "explanation": "Equalizers boost or cut selected frequency bands in the frequency domain."
  },
  {
    "id": 187,
    "category": "Fourier Series & Transform",
    "question": "Which statement is TRUE?",
    "options": [
      "Fourier Transform destroys information.",
      "Fourier Transform changes only the representation of a signal.",
      "Fourier Transform changes analog signals into digital signals.",
      "Fourier Transform removes noise automatically."
    ],
    "answerIndex": 1,
    "explanation": "Fourier Transform changes representation from time to frequency without losing underlying signal information."
  },
  {
    "id": 188,
    "category": "Fourier Series & Transform",
    "question": "Which transform is more suitable for periodic signals?",
    "options": [
      "Fourier Series",
      "Fourier Transform",
      "Z-transform",
      "Laplace Transform"
    ],
    "answerIndex": 0,
    "explanation": "Fourier Series efficiently represents periodic signals with discrete line spectra."
  },
  {
    "id": 189,
    "category": "Fourier Series & Transform",
    "question": "Which transform is more suitable for non-periodic signals?",
    "options": [
      "Fourier Series",
      "Fourier Transform",
      "Sampling",
      "Quantization"
    ],
    "answerIndex": 1,
    "explanation": "Fourier Transform handles continuous non-periodic spectra."
  },
  {
    "id": 190,
    "category": "Fourier Series & Transform",
    "question": "The inverse Fourier Transform is used to:",
    "options": [
      "Remove harmonics",
      "Recover the original time-domain signal",
      "Increase sampling frequency",
      "Remove aliasing"
    ],
    "answerIndex": 1,
    "explanation": "Inverse FT transforms frequency spectra back to continuous time-domain signals."
  },
  {
    "id": 191,
    "category": "Fourier Series & Transform",
    "question": "Harmonics are:",
    "options": [
      "Random frequencies",
      "Integer multiples of the fundamental frequency",
      "Quantization levels",
      "Sampling intervals"
    ],
    "answerIndex": 1,
    "explanation": "Harmonics are frequencies that are integer multiples (2f0, 3f0, ...) of fundamental frequency f0."
  },
  {
    "id": 192,
    "category": "Fourier Series & Transform",
    "question": "The first harmonic is also called the:",
    "options": [
      "Fundamental Frequency",
      "Nyquist Frequency",
      "Carrier Frequency",
      "Alias Frequency"
    ],
    "answerIndex": 0,
    "explanation": "The first harmonic (1 * f0) is the Fundamental Frequency."
  },
  {
    "id": 193,
    "category": "Fourier Series & Transform",
    "question": "Fourier analysis assumes signals can be represented using:",
    "options": [
      "Only impulses",
      "Sinusoids (or complex exponentials)",
      "Only ramps",
      "Only random signals"
    ],
    "answerIndex": 1,
    "explanation": "Sinusoids/complex exponentials are fundamental basis functions of Fourier analysis."
  },
  {
    "id": 194,
    "category": "Fourier Series & Transform",
    "question": "Which of the following is NOT an application of Fourier Transform?",
    "options": [
      "Spectrum analysis",
      "Filter design",
      "Signal processing",
      "Database normalization"
    ],
    "answerIndex": 3,
    "explanation": "Database normalization is a relational database concept, not a Fourier Transform application."
  },
  {
    "id": 195,
    "category": "Fourier Series & Transform",
    "question": "Which transform helps identify dominant frequencies in a signal?",
    "options": [
      "Laplace Transform",
      "Fourier Transform",
      "Convolution",
      "Sampling"
    ],
    "answerIndex": 1,
    "explanation": "Fourier Transform maps signal energy across frequencies to reveal dominant peaks."
  },
  {
    "id": 196,
    "category": "Fourier Series & Transform",
    "question": "Which representation is easier for understanding signal composition?",
    "options": [
      "Time domain only",
      "Frequency domain",
      "Quantization domain",
      "Spatial domain"
    ],
    "answerIndex": 1,
    "explanation": "Frequency domain clearly displays constituent frequencies, amplitudes, and spectral bands."
  },
  {
    "id": 197,
    "category": "Fourier Series & Transform",
    "question": "Which statement best distinguishes Fourier Series and Fourier Transform?",
    "options": [
      "Both are used only for periodic signals.",
      "Fourier Series is for periodic signals, while Fourier Transform is generally for non-periodic signals.",
      "Fourier Transform is only for discrete-time signals.",
      "Fourier Series cannot represent sinusoidal signals."
    ],
    "answerIndex": 1,
    "explanation": "Fourier Series applies to periodic signals; Fourier Transform applies to aperiodic continuous signals."
  },
  {
    "id": 198,
    "category": "Fourier Series & Transform",
    "question": "Which concept is most directly associated with harmonics?",
    "options": [
      "Quantization",
      "Fourier Series",
      "Sampling",
      "Convolution"
    ],
    "answerIndex": 1,
    "explanation": "Fourier Series decomposes periodic signals into discrete harmonic spectral lines."
  },
  {
    "id": 199,
    "category": "Fourier Series & Transform",
    "question": "Which mathematical operation converts a signal back to the time domain?",
    "options": [
      "Sampling",
      "Quantization",
      "Inverse Fourier Transform",
      "Convolution"
    ],
    "answerIndex": 2,
    "explanation": "Inverse Fourier Transform converts frequency-domain representations back to time domain."
  },
  {
    "id": 200,
    "category": "Fourier Series & Transform",
    "question": "Which statement best summarizes the purpose of Fourier analysis?",
    "options": [
      "It converts analog signals to digital signals.",
      "It increases sampling frequency.",
      "It reveals the frequency components that make up a signal, making analysis and processing easier.",
      "It eliminates all noise from a signal."
    ],
    "answerIndex": 2,
    "explanation": "Fourier analysis decomposes signals into frequency components for easier filter design and spectral analysis."
  },
  {
    "id": 201,
    "category": "DFT & FFT",
    "question": "DFT stands for:",
    "options": [
      "Digital Fourier Theory",
      "Discrete Fourier Transform",
      "Digital Frequency Transform",
      "Discrete Frequency Theory"
    ],
    "answerIndex": 1,
    "explanation": "DFT stands for Discrete Fourier Transform."
  },
  {
    "id": 202,
    "category": "DFT & FFT",
    "question": "DFT is mainly used for:",
    "options": [
      "Sampling",
      "Frequency analysis of discrete-time signals",
      "Quantization",
      "Signal amplification"
    ],
    "answerIndex": 1,
    "explanation": "DFT evaluates discrete frequency spectra of discrete-time sequences."
  },
  {
    "id": 203,
    "category": "DFT & FFT",
    "question": "The input to the DFT is generally:",
    "options": [
      "Continuous-time signal",
      "Discrete-time sequence",
      "Analog waveform only",
      "Continuous frequency spectrum"
    ],
    "answerIndex": 1,
    "explanation": "DFT accepts a finite-length discrete-time sequence x[n]."
  },
  {
    "id": 204,
    "category": "DFT & FFT",
    "question": "The output of the DFT is:",
    "options": [
      "Time-domain sequence",
      "Frequency-domain representation",
      "Continuous analog signal",
      "Impulse response"
    ],
    "answerIndex": 1,
    "explanation": "DFT produces discrete frequency-domain samples X[k]."
  },
  {
    "id": 205,
    "category": "DFT & FFT",
    "question": "DFT converts:",
    "options": [
      "Frequency domain to time domain",
      "Time-domain discrete sequence to frequency domain",
      "Analog signal to digital signal",
      "Continuous signal to sampled signal"
    ],
    "answerIndex": 1,
    "explanation": "DFT maps a discrete time-domain sequence x[n] to discrete frequency domain samples X[k]."
  },
  {
    "id": 206,
    "category": "DFT & FFT",
    "question": "DFT is the discrete counterpart of:",
    "options": [
      "Laplace Transform",
      "Fourier Transform",
      "Z-transform",
      "Hilbert Transform"
    ],
    "answerIndex": 1,
    "explanation": "DFT is the sampled discrete counterpart of the continuous Fourier Transform."
  },
  {
    "id": 207,
    "category": "DFT & FFT",
    "question": "DFT assumes the input sequence is:",
    "options": [
      "Random",
      "Periodic",
      "Continuous",
      "Infinite and non-periodic"
    ],
    "answerIndex": 1,
    "explanation": "DFT mathematically treats finite-length sequences as one period of a periodic sequence."
  },
  {
    "id": 208,
    "category": "DFT & FFT",
    "question": "A DFT of an N-point sequence produces:",
    "options": [
      "N-1 frequency samples",
      "N frequency samples",
      "2N samples",
      "Infinite samples"
    ],
    "answerIndex": 1,
    "explanation": "An N-point DFT converts N time-domain samples into N discrete frequency samples X[k]."
  },
  {
    "id": 209,
    "category": "DFT & FFT",
    "question": "The frequency spectrum produced by DFT is:",
    "options": [
      "Continuous",
      "Discrete",
      "Analog",
      "Random"
    ],
    "answerIndex": 1,
    "explanation": "DFT spectrum consists of discrete frequency bins k = 0, 1, ..., N-1."
  },
  {
    "id": 210,
    "category": "DFT & FFT",
    "question": "Which transform is mainly implemented on digital computers?",
    "options": [
      "Fourier Series",
      "Continuous Fourier Transform",
      "Discrete Fourier Transform (DFT)",
      "Laplace Transform"
    ],
    "answerIndex": 2,
    "explanation": "DFT operates on finite discrete numbers, making it ideally suited for digital computers."
  },
  {
    "id": 211,
    "category": "DFT & FFT",
    "question": "The DFT uses:",
    "options": [
      "Differential equations",
      "Complex exponential functions",
      "Boolean algebra",
      "Matrix inversion only"
    ],
    "answerIndex": 1,
    "explanation": "DFT formula uses complex exponentials W_N^(kn) = exp(-j 2pi k n / N)."
  },
  {
    "id": 212,
    "category": "DFT & FFT",
    "question": "The imaginary unit used in DFT is:",
    "options": [
      "k",
      "j (or i in mathematics)",
      "n",
      "N"
    ],
    "answerIndex": 1,
    "explanation": "j (or i) represents sqrt(-1) in complex twiddle factors."
  },
  {
    "id": 213,
    "category": "DFT & FFT",
    "question": "In an N-point DFT, the index n usually represents:",
    "options": [
      "Frequency sample",
      "Time-domain sample",
      "Filter coefficient",
      "Harmonic number"
    ],
    "answerIndex": 1,
    "explanation": "Index n (0 <= n < N) indexes time-domain samples x[n]."
  },
  {
    "id": 214,
    "category": "DFT & FFT",
    "question": "In an N-point DFT, the index k usually represents:",
    "options": [
      "Time sample",
      "Frequency bin",
      "Sampling interval",
      "Quantization level"
    ],
    "answerIndex": 1,
    "explanation": "Index k (0 <= k < N) indexes discrete frequency bins X[k]."
  },
  {
    "id": 215,
    "category": "DFT & FFT",
    "question": "IDFT stands for:",
    "options": [
      "Inverse Digital Fourier Theory",
      "Inverse Discrete Fourier Transform",
      "Integrated Discrete Fourier Transform",
      "Internal DFT"
    ],
    "answerIndex": 1,
    "explanation": "IDFT stands for Inverse Discrete Fourier Transform."
  },
  {
    "id": 216,
    "category": "DFT & FFT",
    "question": "IDFT converts:",
    "options": [
      "Time domain into frequency domain",
      "Frequency domain into time domain",
      "Analog into digital",
      "Continuous into discrete"
    ],
    "answerIndex": 1,
    "explanation": "IDFT transforms discrete frequency samples X[k] back to discrete time sequence x[n]."
  },
  {
    "id": 217,
    "category": "DFT & FFT",
    "question": "Which operation reconstructs the original sequence?",
    "options": [
      "FFT",
      "DFT",
      "IDFT",
      "Sampling"
    ],
    "answerIndex": 2,
    "explanation": "IDFT reconstructs original discrete time sequence from frequency samples X[k]."
  },
  {
    "id": 218,
    "category": "DFT & FFT",
    "question": "The term W_N in DFT is commonly known as:",
    "options": [
      "Window Function",
      "Twiddle Factor",
      "Weight Function",
      "Walsh Function"
    ],
    "answerIndex": 1,
    "explanation": "W_N = exp(-j 2pi / N) is called the Twiddle Factor or phase factor."
  },
  {
    "id": 219,
    "category": "DFT & FFT",
    "question": "Twiddle factors are based on:",
    "options": [
      "Logarithms",
      "Complex roots of unity",
      "Differential equations",
      "Binary numbers"
    ],
    "answerIndex": 1,
    "explanation": "Twiddle factors W_N^k represent complex N-th roots of unity on the unit circle."
  },
  {
    "id": 220,
    "category": "DFT & FFT",
    "question": "Twiddle factors mainly simplify:",
    "options": [
      "Sampling",
      "DFT calculations",
      "Quantization",
      "Filtering"
    ],
    "answerIndex": 1,
    "explanation": "Symmetry and periodicity properties of twiddle factors allow fast algorithms like FFT."
  },
  {
    "id": 221,
    "category": "DFT & FFT",
    "question": "FFT stands for:",
    "options": [
      "Fast Frequency Theory",
      "Fast Fourier Transform",
      "Frequency Fourier Technique",
      "Fast Frequency Transform"
    ],
    "answerIndex": 1,
    "explanation": "FFT stands for Fast Fourier Transform."
  },
  {
    "id": 222,
    "category": "DFT & FFT",
    "question": "FFT is:",
    "options": [
      "A different transform from DFT",
      "An efficient algorithm to compute the DFT",
      "A filtering technique",
      "A sampling method"
    ],
    "answerIndex": 1,
    "explanation": "FFT is not a different mathematical transform; it is an efficient algorithm for computing the DFT."
  },
  {
    "id": 223,
    "category": "DFT & FFT",
    "question": "FFT produces:",
    "options": [
      "Different results from DFT",
      "The same result as DFT, but faster",
      "Only approximate results",
      "Continuous spectra only"
    ],
    "answerIndex": 1,
    "explanation": "FFT computes exact DFT results with dramatically fewer arithmetic operations."
  },
  {
    "id": 224,
    "category": "DFT & FFT",
    "question": "The main advantage of FFT is:",
    "options": [
      "Better accuracy",
      "Reduced computation time",
      "Higher sampling frequency",
      "Less memory only"
    ],
    "answerIndex": 1,
    "explanation": "FFT reduces computational complexity from O(N^2) to O(N log N)."
  },
  {
    "id": 225,
    "category": "DFT & FFT",
    "question": "FFT is especially useful when:",
    "options": [
      "Very small datasets are processed",
      "Large numbers of DFT computations are required",
      "Analog signals are sampled",
      "Quantization is performed"
    ],
    "answerIndex": 1,
    "explanation": "FFT computational savings become enormous for large values of N."
  },
  {
    "id": 226,
    "category": "DFT & FFT",
    "question": "The computational complexity of a direct DFT is:",
    "options": [
      "O(N)",
      "O(N^2)",
      "O(log N)",
      "O(N^3)"
    ],
    "answerIndex": 1,
    "explanation": "Direct N-point DFT requires N^2 complex multiplications, so complexity is O(N^2)."
  },
  {
    "id": 227,
    "category": "DFT & FFT",
    "question": "The computational complexity of FFT is:",
    "options": [
      "O(N^2)",
      "O(N log N)",
      "O(N^3)",
      "O(log N)"
    ],
    "answerIndex": 1,
    "explanation": "Cooley-Tukey Radix-2 FFT achieves O(N log2 N) complexity."
  },
  {
    "id": 228,
    "category": "DFT & FFT",
    "question": "FFT is faster because it:",
    "options": [
      "Ignores frequency components",
      "Eliminates redundant computations",
      "Uses fewer samples",
      "Reduces signal length"
    ],
    "answerIndex": 1,
    "explanation": "FFT exploits twiddle factor symmetry (W_N^(k+N/2) = -W_N^k) to avoid redundant calculations."
  },
  {
    "id": 229,
    "category": "DFT & FFT",
    "question": "Which algorithm dramatically reduced DFT computation?",
    "options": [
      "Nyquist Algorithm",
      "Cooley-Tukey FFT Algorithm",
      "Shannon Algorithm",
      "Kalman Algorithm"
    ],
    "answerIndex": 1,
    "explanation": "James Cooley and John Tukey published the famous FFT algorithm in 1965."
  },
  {
    "id": 230,
    "category": "DFT & FFT",
    "question": "The Radix-2 FFT algorithm requires the number of samples to be:",
    "options": [
      "A prime number",
      "A power of 2",
      "An odd number",
      "A multiple of 3"
    ],
    "answerIndex": 1,
    "explanation": "Radix-2 decimation-in-time/frequency FFT requires N = 2^M (power of 2)."
  },
  {
    "id": 231,
    "category": "DFT & FFT",
    "question": "Radix-2 FFT divides the DFT into:",
    "options": [
      "Three smaller DFTs",
      "Two smaller DFTs",
      "Four equal matrices",
      "One larger DFT"
    ],
    "answerIndex": 1,
    "explanation": "Radix-2 recursively divides an N-point DFT into two N/2-point DFTs (even and odd samples)."
  },
  {
    "id": 232,
    "category": "DFT & FFT",
    "question": "Radix-2 FFT follows the:",
    "options": [
      "Divide-and-Conquer approach",
      "Divide-and-Conquer algorithm",
      "Greedy algorithm",
      "Dynamic programming"
    ],
    "answerIndex": 1,
    "explanation": "Radix-2 FFT is a classic Divide-and-Conquer algorithm."
  },
  {
    "id": 233,
    "category": "DFT & FFT",
    "question": "Radix-2 FFT repeatedly breaks the problem into:",
    "options": [
      "Larger subproblems",
      "Smaller subproblems",
      "Random blocks",
      "Equal frequencies"
    ],
    "answerIndex": 1,
    "explanation": "It recursively decomposes N-point DFTs into smaller half-size subproblems down to 2-point butterflies."
  },
  {
    "id": 234,
    "category": "DFT & FFT",
    "question": "DFT naturally performs:",
    "options": [
      "Linear convolution",
      "Circular convolution",
      "Time reversal",
      "Quantization"
    ],
    "answerIndex": 1,
    "explanation": "Multiplying DFTs X[k]H[k] and taking IDFT produces circular convolution in time domain."
  },
  {
    "id": 235,
    "category": "DFT & FFT",
    "question": "Circular convolution assumes sequences are:",
    "options": [
      "Finite and non-periodic",
      "Periodic",
      "Continuous",
      "Analog"
    ],
    "answerIndex": 1,
    "explanation": "DFT inherently assumes input sequences repeat periodically."
  },
  {
    "id": 236,
    "category": "DFT & FFT",
    "question": "Linear convolution can be obtained using DFT by:",
    "options": [
      "Ignoring FFT",
      "Zero-padding the sequences",
      "Increasing quantization",
      "Doubling amplitude"
    ],
    "answerIndex": 1,
    "explanation": "Zero-padding sequences to length >= L + M - 1 makes circular convolution match linear convolution."
  },
  {
    "id": 237,
    "category": "DFT & FFT",
    "question": "DFT is widely used in:",
    "options": [
      "Spectrum analysis",
      "Filter design",
      "Speech processing",
      "All of them"
    ],
    "answerIndex": 3,
    "explanation": "DFT/FFT is heavily used across spectrum analysis, audio/speech processing, and digital filter design."
  },
  {
    "id": 238,
    "category": "DFT & FFT",
    "question": "FFT is commonly used because:",
    "options": [
      "It changes signal information",
      "It computes DFT efficiently",
      "It removes noise automatically",
      "It replaces ADC"
    ],
    "answerIndex": 1,
    "explanation": "FFT makes real-time digital frequency analysis computationally practical."
  },
  {
    "id": 239,
    "category": "DFT & FFT",
    "question": "Which field heavily relies on FFT?",
    "options": [
      "Image Processing",
      "Audio Processing",
      "Communications",
      "All of them"
    ],
    "answerIndex": 3,
    "explanation": "FFT powers OFDM in modern wireless systems, JPEG/MPEG compression, and digital audio equalizers."
  },
  {
    "id": 240,
    "category": "DFT & FFT",
    "question": "Which transform is most practical for computer implementation?",
    "options": [
      "Fourier Series",
      "Continuous Fourier Transform",
      "DFT (computed efficiently using FFT)",
      "Laplace Transform"
    ],
    "answerIndex": 2,
    "explanation": "FFT-computed DFT is the universal choice for digital computer implementations."
  },
  {
    "id": 241,
    "category": "DFT & FFT",
    "question": "Which statement is TRUE?",
    "options": [
      "FFT and DFT produce different spectra.",
      "FFT is an algorithm for efficiently computing the DFT.",
      "FFT is slower than DFT.",
      "FFT is used only for analog signals."
    ],
    "answerIndex": 1,
    "explanation": "FFT is an algorithm, whereas DFT is the mathematical transform definition."
  },
  {
    "id": 242,
    "category": "DFT & FFT",
    "question": "The main limitation of direct DFT is:",
    "options": [
      "Low accuracy",
      "High computational complexity",
      "Aliasing",
      "Quantization"
    ],
    "answerIndex": 1,
    "explanation": "Direct DFT requires O(N^2) operations, which is prohibitively slow for large sample lengths N."
  },
  {
    "id": 243,
    "category": "DFT & FFT",
    "question": "Which transform is generally preferred for real-time signal processing?",
    "options": [
      "Direct DFT",
      "FFT",
      "Fourier Series",
      "Laplace Transform"
    ],
    "answerIndex": 1,
    "explanation": "FFT's speed enables real-time signal processing."
  },
  {
    "id": 244,
    "category": "DFT & FFT",
    "question": "Which statement best distinguishes DFT and FFT?",
    "options": [
      "They produce different outputs.",
      "DFT is the transform, while FFT is a fast algorithm to compute it.",
      "FFT is only for continuous-time signals.",
      "DFT is only for analog signals."
    ],
    "answerIndex": 1,
    "explanation": "DFT defines the mathematical mapping; FFT is the fast algorithm computing it."
  },
  {
    "id": 245,
    "category": "DFT & FFT",
    "question": "Which operation converts frequency samples back into the original sequence?",
    "options": [
      "DFT",
      "FFT",
      "IDFT",
      "Convolution"
    ],
    "answerIndex": 2,
    "explanation": "Inverse Discrete Fourier Transform (IDFT) converts frequency samples X[k] back to time sequence x[n]."
  },
  {
    "id": 246,
    "category": "DFT & FFT",
    "question": "Which concept is directly associated with the DFT?",
    "options": [
      "Nyquist Rate",
      "Frequency Bins",
      "Quantization Noise",
      "Anti-aliasing Filter"
    ],
    "answerIndex": 1,
    "explanation": "DFT samples frequency at discrete index bins k."
  },
  {
    "id": 247,
    "category": "DFT & FFT",
    "question": "Why is FFT preferred over direct DFT?",
    "options": [
      "It changes the spectrum.",
      "It significantly reduces the number of arithmetic operations.",
      "It eliminates aliasing.",
      "It avoids sampling."
    ],
    "answerIndex": 1,
    "explanation": "FFT reduces complex multiplications from N^2 to (N/2) log2(N)."
  },
  {
    "id": 248,
    "category": "DFT & FFT",
    "question": "Which statement about DFT is correct?",
    "options": [
      "It is applicable only to continuous-time signals.",
      "It analyzes discrete-time signals in the frequency domain.",
      "It performs analog-to-digital conversion.",
      "It is identical to the Z-transform."
    ],
    "answerIndex": 1,
    "explanation": "DFT transforms finite discrete-time sequences into discrete frequency-domain samples."
  },
  {
    "id": 249,
    "category": "DFT & FFT",
    "question": "Which transform pair is correct?",
    "options": [
      "DFT <-> Continuous signal",
      "DFT <-> Discrete-time sequence",
      "FFT <-> Analog signal",
      "Fourier Series <-> Random noise"
    ],
    "answerIndex": 1,
    "explanation": "DFT operates on discrete-time sequences x[n]."
  },
  {
    "id": 250,
    "category": "DFT & FFT",
    "question": "Which statement best summarizes FFT?",
    "options": [
      "FFT is a different transform from DFT.",
      "FFT replaces the Fourier Transform.",
      "FFT is a computationally efficient algorithm for calculating the DFT, making frequency analysis practical for real-time and large-scale applications.",
      "FFT is used only for periodic analog signals."
    ],
    "answerIndex": 2,
    "explanation": "FFT provides a computationally efficient algorithm for computing the DFT in real-time systems."
  },
  {
    "id": 251,
    "category": "Z-Transform",
    "question": "The Z-transform is primarily used for analyzing:",
    "options": [
      "Continuous-time systems",
      "Discrete-time systems",
      "Analog filters only",
      "Continuous signals only"
    ],
    "answerIndex": 1,
    "explanation": "Z-transform is the discrete-time equivalent of Laplace transform for discrete LTI system analysis."
  },
  {
    "id": 252,
    "category": "Z-Transform",
    "question": "The Z-transform is to discrete-time signals what the ______ is to continuous-time signals.",
    "options": [
      "DFT",
      "Laplace Transform",
      "Sampling Theorem",
      "Fourier Series"
    ],
    "answerIndex": 1,
    "explanation": "Z-transform analyzes discrete-time systems just as Laplace transform analyzes continuous-time systems."
  },
  {
    "id": 253,
    "category": "Z-Transform",
    "question": "The Z-transform converts a sequence from:",
    "options": [
      "Frequency domain to time domain",
      "Time domain to the z-domain",
      "Analog to digital",
      "Continuous to discrete"
    ],
    "answerIndex": 1,
    "explanation": "Z-transform maps discrete time domain sequence x[n] to complex z-domain function X(z)."
  },
  {
    "id": 254,
    "category": "Z-Transform",
    "question": "The variable used in the Z-transform is:",
    "options": [
      "s",
      "z",
      "t",
      "f"
    ],
    "answerIndex": 1,
    "explanation": "z = r e^(j w) is the complex frequency variable in Z-transform."
  },
  {
    "id": 255,
    "category": "Z-Transform",
    "question": "Which notation commonly represents the Z-transform of x[n]?",
    "options": [
      "x(t)",
      "X(z)",
      "H(f)",
      "Y(t)"
    ],
    "answerIndex": 1,
    "explanation": "X(z) = Z{x[n]} represents Z-transform."
  },
  {
    "id": 256,
    "category": "Z-Transform",
    "question": "The Z-transform is especially useful for studying:",
    "options": [
      "Sampling only",
      "Stability and system behavior",
      "Quantization only",
      "Aliasing only"
    ],
    "answerIndex": 1,
    "explanation": "Z-transform enables checking pole-zero locations for stability, causality, and frequency response."
  },
  {
    "id": 257,
    "category": "Z-Transform",
    "question": "ROC stands for:",
    "options": [
      "Rate of Conversion",
      "Region of Convergence",
      "Range of Convolution",
      "Region of Computation"
    ],
    "answerIndex": 1,
    "explanation": "ROC stands for Region of Convergence."
  },
  {
    "id": 258,
    "category": "Z-Transform",
    "question": "The Region of Convergence (ROC) is associated with:",
    "options": [
      "Fourier coefficients",
      "Values of z for which the Z-transform converges",
      "Sampling interval",
      "Quantization levels"
    ],
    "answerIndex": 1,
    "explanation": "ROC is the set of values of z in the complex z-plane for which the summation sum(x[n] z^-n) converges absolutely."
  },
  {
    "id": 259,
    "category": "Z-Transform",
    "question": "ROC never contains:",
    "options": [
      "Unit circle",
      "Poles",
      "Zeros",
      "Origin (in some cases)"
    ],
    "answerIndex": 1,
    "explanation": "By definition, X(z) goes to infinity at poles, so ROC cannot contain any poles."
  },
  {
    "id": 260,
    "category": "Z-Transform",
    "question": "Which statement about ROC is TRUE?",
    "options": [
      "ROC always includes poles.",
      "ROC cannot contain any pole.",
      "ROC always contains all zeros.",
      "ROC is independent of poles."
    ],
    "answerIndex": 1,
    "explanation": "ROC is bounded by poles and can never include any pole."
  },
  {
    "id": 261,
    "category": "Z-Transform",
    "question": "For a right-sided (causal) sequence, the ROC lies:",
    "options": [
      "Inside the innermost pole",
      "Outside the outermost pole",
      "Between poles only",
      "At the origin"
    ],
    "answerIndex": 1,
    "explanation": "For right-sided/causal sequences, ROC extends outwards beyond the outermost finite pole: |z| > r_max."
  },
  {
    "id": 262,
    "category": "Z-Transform",
    "question": "For a left-sided sequence, the ROC lies:",
    "options": [
      "Inside the innermost pole",
      "Outside the outermost pole",
      "On the unit circle",
      "At infinity"
    ],
    "answerIndex": 0,
    "explanation": "For left-sided anti-causal sequences, ROC extends inwards inside the innermost pole: |z| < r_min."
  },
  {
    "id": 263,
    "category": "Z-Transform",
    "question": "A pole is a value of z that makes:",
    "options": [
      "The numerator zero",
      "The denominator zero",
      "The transform constant",
      "The ROC infinite"
    ],
    "answerIndex": 1,
    "explanation": "Poles are roots of denominator polynomial A(z) where X(z) -> infinity."
  },
  {
    "id": 264,
    "category": "Z-Transform",
    "question": "A zero is a value of z that makes:",
    "options": [
      "The numerator zero",
      "The denominator zero",
      "The ROC zero",
      "The sequence periodic"
    ],
    "answerIndex": 0,
    "explanation": "Zeros are roots of numerator polynomial B(z) where X(z) = 0."
  },
  {
    "id": 265,
    "category": "Z-Transform",
    "question": "Poles mainly determine:",
    "options": [
      "Signal amplitude only",
      "Stability and system behavior",
      "Sampling rate",
      "Quantization error"
    ],
    "answerIndex": 1,
    "explanation": "Pole positions in the z-plane dictate system stability, transient response, and causality."
  },
  {
    "id": 266,
    "category": "Z-Transform",
    "question": "Zeros mainly affect:",
    "options": [
      "Sampling frequency",
      "Frequency response",
      "ADC resolution",
      "Aliasing"
    ],
    "answerIndex": 1,
    "explanation": "Zero positions create notches or dips in the frequency response spectrum."
  },
  {
    "id": 267,
    "category": "Z-Transform",
    "question": "The pole-zero plot is drawn in the:",
    "options": [
      "Time domain",
      "z-plane",
      "Frequency domain only",
      "Spatial domain"
    ],
    "answerIndex": 1,
    "explanation": "Poles and zeros are plotted on the two-dimensional complex z-plane."
  },
  {
    "id": 268,
    "category": "Z-Transform",
    "question": "In a pole-zero plot, poles are commonly represented by:",
    "options": [
      "O",
      "x",
      "^",
      "square"
    ],
    "answerIndex": 1,
    "explanation": "In z-plane diagrams, poles are denoted by 'x' crosses."
  },
  {
    "id": 269,
    "category": "Z-Transform",
    "question": "In a pole-zero plot, zeros are commonly represented by:",
    "options": [
      "O",
      "x",
      "+",
      "square"
    ],
    "answerIndex": 0,
    "explanation": "In z-plane diagrams, zeros are denoted by 'O' circles."
  },
  {
    "id": 270,
    "category": "Z-Transform",
    "question": "A discrete-time LTI system is stable if:",
    "options": [
      "All poles lie outside the unit circle",
      "The ROC includes the unit circle",
      "All zeros are inside the unit circle",
      "All poles are at the origin"
    ],
    "answerIndex": 1,
    "explanation": "An LTI system is BIBO stable if and only if the ROC of its transfer function H(z) includes the unit circle |z| = 1."
  },
  {
    "id": 271,
    "category": "Z-Transform",
    "question": "The unit circle in the z-plane has a radius of:",
    "options": [
      "0",
      "1",
      "2",
      "pi"
    ],
    "answerIndex": 1,
    "explanation": "The unit circle is defined by equation |z| = 1 (radius r = 1)."
  },
  {
    "id": 272,
    "category": "Z-Transform",
    "question": "A stable causal system has all poles:",
    "options": [
      "Outside the unit circle",
      "Inside the unit circle",
      "On the unit circle",
      "At infinity"
    ],
    "answerIndex": 1,
    "explanation": "For a causal system (ROC |z| > r_max) to be stable (|z|=1 in ROC), all poles must lie strictly inside the unit circle (|p_i| < 1)."
  },
  {
    "id": 273,
    "category": "Z-Transform",
    "question": "Which statement is TRUE?",
    "options": [
      "Stability depends only on zeros.",
      "Stability is determined primarily by the locations of poles.",
      "Stability depends only on sampling frequency.",
      "Stability is independent of ROC."
    ],
    "answerIndex": 1,
    "explanation": "Poles determine system stability and bounds of convergence."
  },
  {
    "id": 274,
    "category": "Z-Transform",
    "question": "A causal discrete-time system depends on:",
    "options": [
      "Present and past inputs only",
      "Future inputs",
      "Future outputs",
      "Random inputs"
    ],
    "answerIndex": 0,
    "explanation": "Causality requires system output at index n to rely only on input samples at index <= n."
  },
  {
    "id": 275,
    "category": "Z-Transform",
    "question": "A causal system has an ROC:",
    "options": [
      "Inside the innermost pole",
      "Outside the outermost pole",
      "Between poles only",
      "Passing through poles"
    ],
    "answerIndex": 1,
    "explanation": "Causal systems have an ROC of the form |z| > r_max."
  },
  {
    "id": 276,
    "category": "Z-Transform",
    "question": "A non-causal system may depend on:",
    "options": [
      "Past inputs only",
      "Future inputs",
      "Present inputs only",
      "Constants"
    ],
    "answerIndex": 1,
    "explanation": "Non-causal systems depend on future input samples."
  },
  {
    "id": 277,
    "category": "Z-Transform",
    "question": "The inverse Z-transform is used to:",
    "options": [
      "Find the frequency response",
      "Recover the original sequence x[n]",
      "Compute FFT",
      "Perform sampling"
    ],
    "answerIndex": 1,
    "explanation": "Inverse Z-transform converts z-domain expression X(z) back to discrete sequence x[n]."
  },
  {
    "id": 278,
    "category": "Z-Transform",
    "question": "Which transform pair is correct?",
    "options": [
      "x[n] -> Fourier Series",
      "x[n] <-> X(z)",
      "x[n] <-> Laplace",
      "x[n] <-> Sampling"
    ],
    "answerIndex": 1,
    "explanation": "X(z) is the Z-transform representation of discrete-time sequence x[n]."
  },
  {
    "id": 279,
    "category": "Z-Transform",
    "question": "The inverse Z-transform converts:",
    "options": [
      "Time domain to z-domain",
      "z-domain to time domain",
      "Analog to digital",
      "Continuous to discrete"
    ],
    "answerIndex": 1,
    "explanation": "Inverse Z-transform maps complex z-domain functions back to time-domain sequences x[n]."
  },
  {
    "id": 280,
    "category": "Z-Transform",
    "question": "The Initial Value Theorem is used to determine:",
    "options": [
      "Final value of the sequence",
      "First value of the sequence",
      "Sampling frequency",
      "Filter order"
    ],
    "answerIndex": 1,
    "explanation": "Initial Value Theorem determines x[0] = lim(z -> infinity) X(z) for causal sequences."
  },
  {
    "id": 281,
    "category": "Z-Transform",
    "question": "The Final Value Theorem is used to determine:",
    "options": [
      "Initial sample",
      "Steady-state value of the sequence",
      "Frequency spectrum",
      "Impulse response"
    ],
    "answerIndex": 1,
    "explanation": "Final Value Theorem computes long-term steady state value x[infinity] = lim(z -> 1) (z-1) X(z)."
  },
  {
    "id": 282,
    "category": "Z-Transform",
    "question": "Before applying the Final Value Theorem, the system should be:",
    "options": [
      "Periodic",
      "Stable",
      "Analog",
      "Continuous"
    ],
    "answerIndex": 1,
    "explanation": "Final Value Theorem is valid only if all poles of (z-1)X(z) lie inside the unit circle (stable system)."
  },
  {
    "id": 283,
    "category": "Z-Transform",
    "question": "The transfer function of a discrete-time LTI system is commonly denoted by:",
    "options": [
      "x[n]",
      "H(z)",
      "y[n]",
      "T(s)"
    ],
    "answerIndex": 1,
    "explanation": "H(z) = Y(z)/X(z) denotes discrete-time system transfer function."
  },
  {
    "id": 284,
    "category": "Z-Transform",
    "question": "The transfer function is defined as:",
    "options": [
      "Output x Input",
      "Output/Input in the z-domain",
      "Input - Output",
      "Frequency x Time"
    ],
    "answerIndex": 1,
    "explanation": "H(z) = Y(z) / X(z), ratio of output Z-transform to input Z-transform."
  },
  {
    "id": 285,
    "category": "Z-Transform",
    "question": "H(z) describes:",
    "options": [
      "Sampling frequency",
      "Input-output relationship of a system",
      "Quantization levels",
      "Signal energy"
    ],
    "answerIndex": 1,
    "explanation": "System transfer function H(z) completely characterizes the input-output behavior of an LTI system."
  },
  {
    "id": 286,
    "category": "Z-Transform",
    "question": "The Z-transform is widely used in:",
    "options": [
      "Digital filter analysis",
      "Stability analysis",
      "System design",
      "All of them"
    ],
    "answerIndex": 3,
    "explanation": "Z-transform is central to digital filter design, stability checking, and difference equation solving."
  },
  {
    "id": 287,
    "category": "Z-Transform",
    "question": "Which transform is most suitable for analyzing recursive digital filters?",
    "options": [
      "Fourier Series",
      "Sampling Theorem",
      "Z-transform",
      "Convolution"
    ],
    "answerIndex": 2,
    "explanation": "Z-transform converts recursive difference equations into simple algebraic ratios."
  },
  {
    "id": 288,
    "category": "Z-Transform",
    "question": "Which plot provides a graphical view of poles and zeros?",
    "options": [
      "Spectrum Plot",
      "Pole-Zero Plot",
      "Histogram",
      "Bode Plot"
    ],
    "answerIndex": 1,
    "explanation": "A Pole-Zero Plot displays pole crosses and zero circles on the z-plane."
  },
  {
    "id": 289,
    "category": "Z-Transform",
    "question": "Which statement is TRUE?",
    "options": [
      "Z-transform applies only to continuous signals.",
      "Z-transform is the discrete-time counterpart of the Laplace Transform.",
      "Z-transform replaces sampling.",
      "Z-transform computes DFT."
    ],
    "answerIndex": 1,
    "explanation": "Z-transform plays the same fundamental role for discrete systems as Laplace transform plays for continuous systems."
  },
  {
    "id": 290,
    "category": "Z-Transform",
    "question": "Which component determines whether the ROC includes the unit circle?",
    "options": [
      "Zeros",
      "Poles",
      "Harmonics",
      "Samples"
    ],
    "answerIndex": 1,
    "explanation": "Poles dictate boundaries of ROC, determining whether |z|=1 is enclosed."
  },
  {
    "id": 291,
    "category": "Z-Transform",
    "question": "The unit circle is important because:",
    "options": [
      "It determines sampling frequency.",
      "It is used to test stability and obtain the frequency response.",
      "It defines quantization levels.",
      "It removes aliasing."
    ],
    "answerIndex": 1,
    "explanation": "Evaluating X(z) along unit circle z = e^(j w) gives DTFT frequency response."
  },
  {
    "id": 292,
    "category": "Z-Transform",
    "question": "Which statement about poles is correct?",
    "options": [
      "Poles always lie inside the ROC.",
      "Poles are excluded from the ROC.",
      "Poles are identical to zeros.",
      "Poles always lie on the unit circle."
    ],
    "answerIndex": 1,
    "explanation": "Poles are explicitly excluded from the Region of Convergence."
  },
  {
    "id": 293,
    "category": "Z-Transform",
    "question": "Which statement about zeros is correct?",
    "options": [
      "Zeros determine ROC boundaries.",
      "Zeros affect the frequency response but do not define the ROC.",
      "Zeros always cause instability.",
      "Zeros are excluded from the z-plane."
    ],
    "answerIndex": 1,
    "explanation": "Zeros shape frequency response but do not restrict ROC boundaries."
  },
  {
    "id": 294,
    "category": "Z-Transform",
    "question": "Which theorem helps determine the steady-state value of a sequence?",
    "options": [
      "Nyquist Theorem",
      "Parseval's Theorem",
      "Final Value Theorem",
      "Sampling Theorem"
    ],
    "answerIndex": 2,
    "explanation": "Final Value Theorem calculates asymptotic value x[infinity]."
  },
  {
    "id": 295,
    "category": "Z-Transform",
    "question": "Which theorem helps determine the first sample of a sequence?",
    "options": [
      "Fourier Theorem",
      "Initial Value Theorem",
      "Convolution Theorem",
      "Shannon Theorem"
    ],
    "answerIndex": 1,
    "explanation": "Initial Value Theorem calculates first sample value x[0]."
  },
  {
    "id": 296,
    "category": "Z-Transform",
    "question": "Which concept is directly associated with H(z)?",
    "options": [
      "Sampling interval",
      "System transfer function",
      "Quantization error",
      "Harmonic distortion"
    ],
    "answerIndex": 1,
    "explanation": "H(z) represents the system transfer function."
  },
  {
    "id": 297,
    "category": "Z-Transform",
    "question": "Which statement best distinguishes poles and zeros?",
    "options": [
      "Both are roots of the denominator.",
      "Poles are roots of the denominator, while zeros are roots of the numerator.",
      "Both determine the ROC directly.",
      "Both always lie on the unit circle."
    ],
    "answerIndex": 1,
    "explanation": "Poles make H(z)->infinity (roots of denominator); Zeros make H(z)=0 (roots of numerator)."
  },
  {
    "id": 298,
    "category": "Z-Transform",
    "question": "Which of the following is NOT directly associated with the Z-transform?",
    "options": [
      "ROC",
      "Pole-Zero Plot",
      "Stability",
      "Nyquist Sampling Rate"
    ],
    "answerIndex": 3,
    "explanation": "Nyquist Sampling Rate belongs to sampling theory, not Z-transform definitions."
  },
  {
    "id": 299,
    "category": "Z-Transform",
    "question": "Which representation is most useful for analyzing discrete-time systems?",
    "options": [
      "Time-domain waveform only",
      "Z-domain representation",
      "Analog spectrum only",
      "Continuous-time graph"
    ],
    "answerIndex": 1,
    "explanation": "Z-domain representations turn linear difference equations into easily manipulated algebraic polynomials."
  },
  {
    "id": 300,
    "category": "Z-Transform",
    "question": "Which statement best summarizes the purpose of the Z-transform?",
    "options": [
      "It converts analog signals into digital signals.",
      "It eliminates quantization noise.",
      "It provides a powerful mathematical tool for analyzing and designing discrete-time systems, particularly with respect to stability, causality, and system response.",
      "It calculates the sampling frequency."
    ],
    "answerIndex": 2,
    "explanation": "Z-transform provides the core framework for discrete LTI system analysis, stability testing, and filter design."
  },
  {
    "id": 301,
    "category": "FIR Filters",
    "question": "FIR stands for:",
    "options": [
      "Fast Impulse Response",
      "Finite Impulse Response",
      "Frequency Impulse Response",
      "Fixed Impulse Response"
    ],
    "answerIndex": 1,
    "explanation": "FIR stands for Finite Impulse Response."
  },
  {
    "id": 302,
    "category": "FIR Filters",
    "question": "An FIR filter has:",
    "options": [
      "Infinite impulse response",
      "Finite-duration impulse response",
      "Continuous impulse response",
      "Random impulse response"
    ],
    "answerIndex": 1,
    "explanation": "An FIR filter's impulse response h[n] drops to zero after a finite number of terms N."
  },
  {
    "id": 303,
    "category": "FIR Filters",
    "question": "FIR filters are primarily used in:",
    "options": [
      "Digital signal processing",
      "Audio processing",
      "Image processing",
      "All of them"
    ],
    "answerIndex": 3,
    "explanation": "FIR filters are widely deployed across DSP, digital audio processing, and image filtering."
  },
  {
    "id": 304,
    "category": "FIR Filters",
    "question": "FIR filters are classified as:",
    "options": [
      "Analog filters",
      "Digital filters",
      "Mechanical filters",
      "Optical filters"
    ],
    "answerIndex": 1,
    "explanation": "FIR filters are digital filters implemented via delay elements, multipliers, and adders."
  },
  {
    "id": 305,
    "category": "FIR Filters",
    "question": "Which equation generally describes an FIR filter?",
    "options": [
      "Differential equation",
      "Difference equation without feedback",
      "Laplace equation",
      "Wave equation"
    ],
    "answerIndex": 1,
    "explanation": "FIR difference equation y[n] = sum(b_k x[n-k]) contains no past output feedback terms."
  },
  {
    "id": 306,
    "category": "FIR Filters",
    "question": "FIR filters are generally:",
    "options": [
      "Recursive",
      "Non-recursive",
      "Continuous",
      "Analog"
    ],
    "answerIndex": 1,
    "explanation": "FIR filters are non-recursive because output depends only on present and past inputs."
  },
  {
    "id": 307,
    "category": "FIR Filters",
    "question": "A non-recursive filter means:",
    "options": [
      "Output is fed back to the input.",
      "No feedback is used.",
      "Infinite impulse response exists.",
      "Filter is unstable."
    ],
    "answerIndex": 1,
    "explanation": "Non-recursive means there is no feedback of previous output values into current calculation."
  },
  {
    "id": 308,
    "category": "FIR Filters",
    "question": "FIR filters depend on:",
    "options": [
      "Present outputs only",
      "Present and past input samples only",
      "Future outputs",
      "Future inputs"
    ],
    "answerIndex": 1,
    "explanation": "FIR filter output y[n] depends solely on present and past input samples x[n-k]."
  },
  {
    "id": 309,
    "category": "FIR Filters",
    "question": "Which component is absent in a basic FIR filter?",
    "options": [
      "Delay elements",
      "Multipliers",
      "Adders",
      "Feedback path"
    ],
    "answerIndex": 3,
    "explanation": "FIR filters lack feedback loops; they consist strictly of feedforward delay taps, multipliers, and adders."
  },
  {
    "id": 310,
    "category": "FIR Filters",
    "question": "FIR filters use:",
    "options": [
      "Feedback loops",
      "Feedforward structure",
      "Oscillators",
      "Integrators only"
    ],
    "answerIndex": 1,
    "explanation": "FIR filters utilize a tapped-delay line feedforward architecture."
  },
  {
    "id": 311,
    "category": "FIR Filters",
    "question": "FIR filters are always:",
    "options": [
      "Unstable",
      "Stable",
      "Marginally stable",
      "Conditionally stable"
    ],
    "answerIndex": 1,
    "explanation": "Because FIR filters have no feedback and all poles lie at the origin z=0, they are inherently and unconditionally stable."
  },
  {
    "id": 312,
    "category": "FIR Filters",
    "question": "Why are FIR filters always stable?",
    "options": [
      "They use recursive equations.",
      "They have no feedback path.",
      "They have infinite impulse response.",
      "They ignore input samples."
    ],
    "answerIndex": 1,
    "explanation": "Absence of feedback guarantees BIBO stability for any bounded input."
  },
  {
    "id": 313,
    "category": "FIR Filters",
    "question": "Which filter type can achieve exact linear phase?",
    "options": [
      "IIR only",
      "FIR",
      "Analog RC filter",
      "Butterworth only"
    ],
    "answerIndex": 1,
    "explanation": "FIR filters can achieve exact linear phase response by imposing symmetric or anti-symmetric coefficient constraints."
  },
  {
    "id": 314,
    "category": "FIR Filters",
    "question": "Linear phase means:",
    "options": [
      "Constant amplitude",
      "Equal delay for all frequency components",
      "Infinite gain",
      "Constant frequency"
    ],
    "answerIndex": 1,
    "explanation": "Linear phase ensures constant group delay, imparting equal delay to all frequency components."
  },
  {
    "id": 315,
    "category": "FIR Filters",
    "question": "Linear-phase filters preserve:",
    "options": [
      "Signal amplitude only",
      "Signal waveform (shape)",
      "Sampling rate",
      "Quantization levels"
    ],
    "answerIndex": 1,
    "explanation": "Constant group delay preserves original signal waveform shape and prevents phase distortion."
  },
  {
    "id": 316,
    "category": "FIR Filters",
    "question": "Which property makes FIR filters attractive for communication systems?",
    "options": [
      "Recursive structure",
      "Linear phase response",
      "Infinite impulse response",
      "High feedback gain"
    ],
    "answerIndex": 1,
    "explanation": "Linear phase response prevents phase distortion in digital data transmissions."
  },
  {
    "id": 317,
    "category": "FIR Filters",
    "question": "The impulse response of an FIR filter becomes zero after:",
    "options": [
      "Infinite time",
      "A finite number of samples",
      "One second",
      "One period"
    ],
    "answerIndex": 1,
    "explanation": "By definition, h[n] = 0 for n < 0 and n >= N (finite length N)."
  },
  {
    "id": 318,
    "category": "FIR Filters",
    "question": "The word \"finite\" in FIR refers to:",
    "options": [
      "Finite bandwidth",
      "Finite impulse response duration",
      "Finite sampling frequency",
      "Finite gain"
    ],
    "answerIndex": 1,
    "explanation": "Finite refers to the limited duration of impulse response samples."
  },
  {
    "id": 319,
    "category": "FIR Filters",
    "question": "A commonly used method for FIR filter design is:",
    "options": [
      "Bilinear transformation",
      "Window method",
      "Impulse invariance only",
      "Euler approximation"
    ],
    "answerIndex": 1,
    "explanation": "The Window Method truncates ideal infinite impulse responses using smooth windows (Hamming, Hanning, etc.)."
  },
  {
    "id": 320,
    "category": "FIR Filters",
    "question": "Which window is widely used in FIR filter design?",
    "options": [
      "Blackman",
      "Hamming",
      "Hanning (Hann)",
      "All of them"
    ],
    "answerIndex": 3,
    "explanation": "Rectangular, Hamming, Hann, Blackman, and Kaiser are all standard FIR design windows."
  },
  {
    "id": 321,
    "category": "FIR Filters",
    "question": "Which window provides a good balance between main-lobe width and side-lobe attenuation?",
    "options": [
      "Rectangular",
      "Hamming",
      "Kaiser",
      "Bartlett"
    ],
    "answerIndex": 1,
    "explanation": "Hamming window is popular for its excellent trade-off between main-lobe resolution and side-lobe suppression (-43 dB)."
  },
  {
    "id": 322,
    "category": "FIR Filters",
    "question": "Which window has the narrowest main lobe but the highest side lobes?",
    "options": [
      "Rectangular",
      "Hamming",
      "Blackman",
      "Kaiser"
    ],
    "answerIndex": 0,
    "explanation": "Rectangular window has narrowest main lobe width (4pi/N) but highest peak side lobes (-13 dB)."
  },
  {
    "id": 323,
    "category": "FIR Filters",
    "question": "The Kaiser window is popular because:",
    "options": [
      "It is the simplest window.",
      "It provides adjustable performance using a parameter (beta).",
      "It is used only in analog filters.",
      "It removes aliasing automatically."
    ],
    "answerIndex": 1,
    "explanation": "Kaiser window allows tuning side-lobe attenuation vs main-lobe width using parameter beta."
  },
  {
    "id": 324,
    "category": "FIR Filters",
    "question": "The frequency sampling method is another technique for:",
    "options": [
      "ADC design",
      "FIR filter design",
      "Quantization",
      "Modulation"
    ],
    "answerIndex": 1,
    "explanation": "Frequency Sampling Method designs FIR filters by sampling desired frequency response H(w)."
  },
  {
    "id": 325,
    "category": "FIR Filters",
    "question": "The frequency response of an FIR filter depends on:",
    "options": [
      "Sampling interval only",
      "Filter coefficients",
      "Quantization error only",
      "Signal power"
    ],
    "answerIndex": 1,
    "explanation": "Filter coefficients b_k uniquely dictate the magnitude and phase response of an FIR filter."
  },
  {
    "id": 326,
    "category": "FIR Filters",
    "question": "Changing the filter coefficients mainly changes:",
    "options": [
      "Sampling frequency",
      "Frequency response",
      "ADC resolution",
      "Quantization noise"
    ],
    "answerIndex": 1,
    "explanation": "Modifying b_k alters the filter's frequency response H(w)."
  },
  {
    "id": 327,
    "category": "FIR Filters",
    "question": "A low-pass FIR filter allows:",
    "options": [
      "High frequencies only",
      "Low frequencies to pass while attenuating high frequencies",
      "All frequencies equally",
      "No frequencies"
    ],
    "answerIndex": 1,
    "explanation": "Low-pass filter passes low frequencies below cutoff and attenuates high frequencies."
  },
  {
    "id": 328,
    "category": "FIR Filters",
    "question": "A high-pass FIR filter mainly passes:",
    "options": [
      "Low frequencies",
      "High frequencies",
      "DC only",
      "All frequencies"
    ],
    "answerIndex": 1,
    "explanation": "High-pass filter passes frequencies above cutoff and blocks lower frequencies."
  },
  {
    "id": 329,
    "category": "FIR Filters",
    "question": "A band-pass FIR filter passes:",
    "options": [
      "Low frequencies only",
      "High frequencies only",
      "Frequencies within a specific range",
      "All frequencies"
    ],
    "answerIndex": 2,
    "explanation": "Band-pass filter passes frequencies between lower and upper cutoff frequencies."
  },
  {
    "id": 330,
    "category": "FIR Filters",
    "question": "A band-stop filter is also known as a:",
    "options": [
      "Low-pass filter",
      "High-pass filter",
      "Band-reject filter",
      "Integrator"
    ],
    "answerIndex": 2,
    "explanation": "Band-stop filters attenuate a specific frequency band and are also called Band-Reject filters."
  },
  {
    "id": 331,
    "category": "FIR Filters",
    "question": "Which is an advantage of FIR filters?",
    "options": [
      "Lower computation than IIR",
      "Guaranteed stability",
      "Infinite impulse response",
      "Requires feedback"
    ],
    "answerIndex": 1,
    "explanation": "Absence of feedback guarantees absolute stability for all FIR designs."
  },
  {
    "id": 332,
    "category": "FIR Filters",
    "question": "Another important advantage of FIR filters is:",
    "options": [
      "Recursive implementation",
      "Exact linear phase can be achieved",
      "Fewer coefficients than IIR in every case",
      "Higher instability"
    ],
    "answerIndex": 1,
    "explanation": "FIR filters achieve exact linear phase, avoiding phase distortion."
  },
  {
    "id": 333,
    "category": "FIR Filters",
    "question": "FIR filters are less sensitive to:",
    "options": [
      "Sampling frequency",
      "Quantization errors",
      "Nyquist rate",
      "Aliasing"
    ],
    "answerIndex": 1,
    "explanation": "FIR non-recursive structures are far less sensitive to coefficient quantization and finite word-length effects."
  },
  {
    "id": 334,
    "category": "FIR Filters",
    "question": "Which is a disadvantage of FIR filters?",
    "options": [
      "Instability",
      "Higher computational complexity for sharp responses",
      "Infinite impulse response",
      "Uses feedback"
    ],
    "answerIndex": 1,
    "explanation": "Achieving sharp transition bands requires high filter order N, raising computational complexity."
  },
  {
    "id": 335,
    "category": "FIR Filters",
    "question": "Compared with IIR filters, FIR filters generally require:",
    "options": [
      "Fewer coefficients",
      "More coefficients",
      "No coefficients",
      "Analog components"
    ],
    "answerIndex": 1,
    "explanation": "To meet identical sharp magnitude specs, FIR filters require significantly higher order (more coefficients) than IIR filters."
  },
  {
    "id": 336,
    "category": "FIR Filters",
    "question": "Because FIR filters often require more coefficients, they generally require:",
    "options": [
      "Less memory",
      "More memory",
      "No storage",
      "Lower sampling rates"
    ],
    "answerIndex": 1,
    "explanation": "Higher order N requires storing more coefficient weights and delay line values in memory."
  },
  {
    "id": 337,
    "category": "FIR Filters",
    "question": "Which filter uses feedback?",
    "options": [
      "FIR",
      "IIR",
      "Both",
      "Neither"
    ],
    "answerIndex": 1,
    "explanation": "IIR (Infinite Impulse Response) filters use output feedback loops."
  },
  {
    "id": 338,
    "category": "FIR Filters",
    "question": "Which filter is always stable?",
    "options": [
      "FIR",
      "IIR",
      "Both",
      "Neither"
    ],
    "answerIndex": 0,
    "explanation": "FIR filters are non-recursive with all poles at z=0, guaranteeing stability."
  },
  {
    "id": 339,
    "category": "FIR Filters",
    "question": "Which filter can achieve exact linear phase more easily?",
    "options": [
      "FIR",
      "IIR",
      "Both",
      "Neither"
    ],
    "answerIndex": 0,
    "explanation": "Symmetric/antisymmetric FIR coefficient structures guarantee exact linear phase."
  },
  {
    "id": 340,
    "category": "FIR Filters",
    "question": "Which filter generally requires fewer coefficients?",
    "options": [
      "FIR",
      "IIR",
      "Both",
      "Neither"
    ],
    "answerIndex": 1,
    "explanation": "IIR filters achieve sharp cutoff transitions with much lower filter orders."
  },
  {
    "id": 341,
    "category": "FIR Filters",
    "question": "FIR filters are commonly used for:",
    "options": [
      "Audio equalization",
      "Image enhancement",
      "Noise reduction",
      "All of them"
    ],
    "answerIndex": 3,
    "explanation": "FIR filters are extensively used in digital audio, video, communications, and image processing."
  },
  {
    "id": 342,
    "category": "FIR Filters",
    "question": "Which application benefits greatly from linear-phase FIR filters?",
    "options": [
      "Speech processing",
      "Biomedical signals",
      "Data communications",
      "All of them"
    ],
    "answerIndex": 3,
    "explanation": "Biomedical signals (ECG/EEG), modem communications, and speech processing require zero phase distortion."
  },
  {
    "id": 343,
    "category": "FIR Filters",
    "question": "FIR filters are preferred when:",
    "options": [
      "Minimum computation is the only goal.",
      "Signal waveform preservation is important.",
      "Feedback is required.",
      "Infinite impulse response is needed."
    ],
    "answerIndex": 1,
    "explanation": "Linear-phase FIR filters preserve waveform shapes without phase dispersion."
  },
  {
    "id": 344,
    "category": "FIR Filters",
    "question": "Which statement is TRUE?",
    "options": [
      "FIR filters are recursive.",
      "FIR filters are non-recursive.",
      "FIR filters are always unstable.",
      "FIR filters use poles outside the unit circle."
    ],
    "answerIndex": 1,
    "explanation": "FIR filters are non-recursive digital filters."
  },
  {
    "id": 345,
    "category": "FIR Filters",
    "question": "Which statement about FIR filters is correct?",
    "options": [
      "They use feedback loops.",
      "They depend only on present and past input samples.",
      "They always require fewer computations than IIR filters.",
      "They are analog filters."
    ],
    "answerIndex": 1,
    "explanation": "FIR output depends strictly on present and past input samples."
  },
  {
    "id": 346,
    "category": "FIR Filters",
    "question": "Why are FIR filters widely used in digital communications?",
    "options": [
      "They amplify signals.",
      "They can provide linear phase and guaranteed stability.",
      "They eliminate sampling.",
      "They increase bandwidth."
    ],
    "answerIndex": 1,
    "explanation": "Linear phase preserves pulse shapes, and guaranteed stability avoids system oscillation."
  },
  {
    "id": 347,
    "category": "FIR Filters",
    "question": "Which concept is directly associated with FIR filter design?",
    "options": [
      "Bilinear transformation only",
      "Window method",
      "Nyquist rate",
      "Quantization"
    ],
    "answerIndex": 1,
    "explanation": "Window Method (Hamming, Hanning, Blackman, etc.) is a standard FIR design approach."
  },
  {
    "id": 348,
    "category": "FIR Filters",
    "question": "Which of the following is NOT a characteristic of FIR filters?",
    "options": [
      "Finite impulse response",
      "Non-recursive implementation",
      "Guaranteed stability",
      "Feedback structure"
    ],
    "answerIndex": 3,
    "explanation": "FIR filters do not possess a feedback structure."
  },
  {
    "id": 349,
    "category": "FIR Filters",
    "question": "Which factor mainly determines the performance of an FIR filter?",
    "options": [
      "Sampling interval",
      "Filter coefficients",
      "ADC resolution",
      "Nyquist frequency"
    ],
    "answerIndex": 1,
    "explanation": "Filter coefficients b_k dictate magnitude response, passband ripple, and stopband attenuation."
  },
  {
    "id": 350,
    "category": "FIR Filters",
    "question": "Which statement best summarizes FIR filters?",
    "options": [
      "FIR filters are recursive digital filters with infinite impulse responses.",
      "FIR filters are unstable but computationally efficient.",
      "FIR filters are non-recursive digital filters with finite impulse responses, guaranteed stability, and the ability to achieve exact linear phase.",
      "FIR filters are used only for analog signal processing."
    ],
    "answerIndex": 2,
    "explanation": "FIR filters are non-recursive, finite impulse response digital filters providing guaranteed stability and linear phase."
  },
  {
    "id": 351,
    "category": "IIR Filters & Mixed",
    "question": "IIR stands for:",
    "options": [
      "Infinite Input Response",
      "Infinite Impulse Response",
      "Internal Impulse Response",
      "Integrated Impulse Response"
    ],
    "answerIndex": 1,
    "explanation": "IIR stands for Infinite Impulse Response."
  },
  {
    "id": 352,
    "category": "IIR Filters & Mixed",
    "question": "An IIR filter has:",
    "options": [
      "Finite impulse response",
      "Infinite impulse response",
      "Zero impulse response",
      "Continuous impulse response only"
    ],
    "answerIndex": 1,
    "explanation": "An IIR filter's impulse response h[n] continues theoretically indefinitely due to output feedback."
  },
  {
    "id": 353,
    "category": "IIR Filters & Mixed",
    "question": "IIR filters are generally:",
    "options": [
      "Non-recursive",
      "Recursive",
      "Memoryless",
      "Continuous only"
    ],
    "answerIndex": 1,
    "explanation": "IIR filters are recursive because current output depends on previous output feedback terms."
  },
  {
    "id": 354,
    "category": "IIR Filters & Mixed",
    "question": "Recursive filters use:",
    "options": [
      "Feedforward only",
      "Feedback",
      "Sampling only",
      "Window functions only"
    ],
    "answerIndex": 1,
    "explanation": "Recursive filters incorporate feedback of previous output values."
  },
  {
    "id": 355,
    "category": "IIR Filters & Mixed",
    "question": "The output of an IIR filter depends on:",
    "options": [
      "Present input only",
      "Past inputs only",
      "Present/past inputs and past outputs",
      "Future inputs"
    ],
    "answerIndex": 2,
    "explanation": "y[n] = sum(b_k x[n-k]) - sum(a_m y[n-m]); depends on inputs and past outputs."
  },
  {
    "id": 356,
    "category": "IIR Filters & Mixed",
    "question": "Which is a major advantage of IIR filters?",
    "options": [
      "Exact linear phase",
      "Fewer coefficients for a given response",
      "Guaranteed stability",
      "No feedback"
    ],
    "answerIndex": 1,
    "explanation": "IIR filters satisfy sharp frequency response specifications using much lower filter orders."
  },
  {
    "id": 357,
    "category": "IIR Filters & Mixed",
    "question": "Compared to FIR filters, IIR filters usually require:",
    "options": [
      "More coefficients",
      "Fewer coefficients",
      "No coefficients",
      "Infinite coefficients"
    ],
    "answerIndex": 1,
    "explanation": "IIR filters achieve equivalent magnitude selectivity with far fewer coefficients."
  },
  {
    "id": 358,
    "category": "IIR Filters & Mixed",
    "question": "IIR filters are computationally:",
    "options": [
      "More expensive",
      "More efficient for similar specifications",
      "Impossible to implement",
      "Slower than FIR in all cases"
    ],
    "answerIndex": 1,
    "explanation": "Fewer coefficients translate into fewer multiplications and additions per sample."
  },
  {
    "id": 359,
    "category": "IIR Filters & Mixed",
    "question": "Which property is generally difficult to achieve with IIR filters?",
    "options": [
      "Stability",
      "Exact linear phase",
      "Recursive implementation",
      "Low computational cost"
    ],
    "answerIndex": 1,
    "explanation": "IIR filters exhibit non-linear phase response; exact linear phase cannot be achieved across all frequencies."
  },
  {
    "id": 360,
    "category": "IIR Filters & Mixed",
    "question": "An improperly designed IIR filter may become:",
    "options": [
      "Linear phase",
      "Unstable",
      "Memoryless",
      "Non-causal"
    ],
    "answerIndex": 1,
    "explanation": "Because IIR filters use feedback, poles placed outside the unit circle cause instability."
  },
  {
    "id": 361,
    "category": "IIR Filters & Mixed",
    "question": "Which filter has a maximally flat passband?",
    "options": [
      "Chebyshev",
      "Butterworth",
      "Elliptic",
      "Bessel"
    ],
    "answerIndex": 1,
    "explanation": "Butterworth filter magnitude response is maximally flat in the passband with no ripples."
  },
  {
    "id": 362,
    "category": "IIR Filters & Mixed",
    "question": "Which filter has ripple in the passband?",
    "options": [
      "Butterworth",
      "Chebyshev Type-I",
      "Bessel",
      "Gaussian"
    ],
    "answerIndex": 1,
    "explanation": "Chebyshev Type-I filter features equiripple behavior in passband and monotonic response in stopband."
  },
  {
    "id": 363,
    "category": "IIR Filters & Mixed",
    "question": "Which filter has ripple in the stopband only?",
    "options": [
      "Butterworth",
      "Chebyshev Type-II",
      "Bessel",
      "Gaussian"
    ],
    "answerIndex": 1,
    "explanation": "Chebyshev Type-II (Inverse Chebyshev) has monotonic passband and equiripple stopband."
  },
  {
    "id": 364,
    "category": "IIR Filters & Mixed",
    "question": "Which filter has ripple in both passband and stopband?",
    "options": [
      "Butterworth",
      "Chebyshev Type-I",
      "Elliptic (Cauer)",
      "Bessel"
    ],
    "answerIndex": 2,
    "explanation": "Elliptic (Cauer) filter features equiripples in both passband and stopband."
  },
  {
    "id": 365,
    "category": "IIR Filters & Mixed",
    "question": "Which classical filter provides the sharpest transition band for a given filter order?",
    "options": [
      "Butterworth",
      "Bessel",
      "Elliptic",
      "Moving Average"
    ],
    "answerIndex": 2,
    "explanation": "Elliptic filters yield the steepest transition cutoff band for a given order N."
  },
  {
    "id": 366,
    "category": "IIR Filters & Mixed",
    "question": "Which filter is known for a smooth, ripple-free magnitude response?",
    "options": [
      "Butterworth",
      "Chebyshev",
      "Elliptic",
      "Comb"
    ],
    "answerIndex": 0,
    "explanation": "Butterworth response decreases monotonically without any passband or stopband ripples."
  },
  {
    "id": 367,
    "category": "IIR Filters & Mixed",
    "question": "Bilinear Transformation is mainly used to design:",
    "options": [
      "FIR filters",
      "IIR digital filters from analog prototypes",
      "ADCs",
      "FFT algorithms"
    ],
    "answerIndex": 1,
    "explanation": "Bilinear Transformation maps continuous s-plane analog filter designs to discrete z-plane IIR digital filters."
  },
  {
    "id": 368,
    "category": "IIR Filters & Mixed",
    "question": "Bilinear Transformation converts:",
    "options": [
      "Digital filters into analog filters",
      "Analog filter designs into digital filter designs",
      "Time domain into frequency domain",
      "Continuous signals into sampled signals"
    ],
    "answerIndex": 1,
    "explanation": "It transforms continuous analog transfer functions H(s) into discrete digital filter transfer functions H(z)."
  },
  {
    "id": 369,
    "category": "IIR Filters & Mixed",
    "question": "Bilinear Transformation avoids:",
    "options": [
      "Quantization",
      "Aliasing",
      "Convolution",
      "Sampling"
    ],
    "answerIndex": 1,
    "explanation": "Bilinear Transformation nonlinearly compresses continuous frequency axis (-inf, inf) onto unit circle (-pi, pi), preventing aliasing."
  },
  {
    "id": 370,
    "category": "IIR Filters & Mixed",
    "question": "Which mapping is used in Bilinear Transformation?",
    "options": [
      "z-plane -> s-plane",
      "s-plane -> z-plane",
      "Time -> Frequency",
      "Frequency -> Time"
    ],
    "answerIndex": 1,
    "explanation": "Bilinear transformation uses substitution s = (2/T)(z-1)/(z+1) to map s-plane to z-plane."
  },
  {
    "id": 371,
    "category": "IIR Filters & Mixed",
    "question": "Impulse Invariance is used for:",
    "options": [
      "FIR design",
      "Converting analog filters into digital filters",
      "Sampling only",
      "FFT computation"
    ],
    "answerIndex": 1,
    "explanation": "Impulse Invariance designs digital IIR filters by sampling the continuous analog impulse response h(t)."
  },
  {
    "id": 372,
    "category": "IIR Filters & Mixed",
    "question": "Impulse Invariance preserves the:",
    "options": [
      "Frequency response exactly",
      "Impulse response at sampling instants",
      "Quantization levels",
      "Nyquist frequency"
    ],
    "answerIndex": 1,
    "explanation": "Impulse Invariance matches discrete impulse response h[n] to continuous impulse response h(n Ts)."
  },
  {
    "id": 373,
    "category": "IIR Filters & Mixed",
    "question": "A limitation of Impulse Invariance is:",
    "options": [
      "Instability",
      "Aliasing",
      "Feedback removal",
      "High memory usage"
    ],
    "answerIndex": 1,
    "explanation": "Direct sampling of h(t) causes frequency aliasing unless the analog filter is strictly band-limited."
  },
  {
    "id": 374,
    "category": "IIR Filters & Mixed",
    "question": "Which filter always has a finite impulse response?",
    "options": [
      "FIR",
      "IIR",
      "Both",
      "Neither"
    ],
    "answerIndex": 0,
    "explanation": "FIR filters inherently possess a finite-duration impulse response."
  },
  {
    "id": 375,
    "category": "IIR Filters & Mixed",
    "question": "Which filter uses recursion?",
    "options": [
      "FIR",
      "IIR",
      "Both",
      "Neither"
    ],
    "answerIndex": 1,
    "explanation": "IIR filters use output feedback recursion."
  },
  {
    "id": 376,
    "category": "IIR Filters & Mixed",
    "question": "Which filter is always BIBO stable?",
    "options": [
      "FIR",
      "IIR",
      "Both",
      "Neither"
    ],
    "answerIndex": 0,
    "explanation": "FIR filters are guaranteed BIBO stable; IIR filters can become unstable if poles move outside unit circle."
  },
  {
    "id": 377,
    "category": "IIR Filters & Mixed",
    "question": "Which filter generally requires fewer arithmetic operations?",
    "options": [
      "FIR",
      "IIR",
      "Both",
      "Neither"
    ],
    "answerIndex": 1,
    "explanation": "IIR filters achieve equivalent magnitude specifications with far lower filter orders and fewer arithmetic operations."
  },
  {
    "id": 378,
    "category": "IIR Filters & Mixed",
    "question": "Which filter is preferred when exact linear phase is essential?",
    "options": [
      "FIR",
      "IIR",
      "Butterworth",
      "Elliptic"
    ],
    "answerIndex": 0,
    "explanation": "FIR filters can achieve exact linear phase; IIR filters introduce non-linear phase distortion."
  },
  {
    "id": 379,
    "category": "IIR Filters & Mixed",
    "question": "Which filter is preferred when computational efficiency is the primary concern?",
    "options": [
      "FIR",
      "IIR",
      "Both equally",
      "Neither"
    ],
    "answerIndex": 1,
    "explanation": "IIR filters require significantly fewer computations for sharp magnitude cutoffs."
  },
  {
    "id": 380,
    "category": "IIR Filters & Mixed",
    "question": "Which statement correctly compares FIR and IIR filters?",
    "options": [
      "FIR filters use feedback, whereas IIR filters do not.",
      "FIR filters are non-recursive, while IIR filters are recursive.",
      "Both always have linear phase.",
      "Both always require the same filter order."
    ],
    "answerIndex": 1,
    "explanation": "FIR filters are non-recursive (no feedback); IIR filters are recursive (feedback)."
  },
  {
    "id": 381,
    "category": "IIR Filters & Mixed",
    "question": "Nyquist theorem is related to:",
    "options": [
      "Convolution",
      "Sampling",
      "FFT",
      "Filtering"
    ],
    "answerIndex": 1,
    "explanation": "Nyquist theorem establishes minimum sampling rate fs >= 2fmax for alias-free sampling."
  },
  {
    "id": 382,
    "category": "IIR Filters & Mixed",
    "question": "Aliasing occurs because of:",
    "options": [
      "Oversampling",
      "Undersampling",
      "Windowing",
      "Convolution"
    ],
    "answerIndex": 1,
    "explanation": "Undersampling (sampling below Nyquist rate) causes high frequencies to alias."
  },
  {
    "id": 383,
    "category": "IIR Filters & Mixed",
    "question": "Fourier Transform converts:",
    "options": [
      "Frequency domain to time domain",
      "Time domain to frequency domain",
      "Analog to digital",
      "Continuous to discrete"
    ],
    "answerIndex": 1,
    "explanation": "Fourier Transform maps time-domain signals to frequency-domain spectrum."
  },
  {
    "id": 384,
    "category": "IIR Filters & Mixed",
    "question": "Which transform is mainly used for discrete-time system analysis?",
    "options": [
      "Laplace Transform",
      "Z-Transform",
      "Fourier Series",
      "Hilbert Transform"
    ],
    "answerIndex": 1,
    "explanation": "Z-transform is the primary mathematical tool for analyzing discrete-time systems."
  },
  {
    "id": 385,
    "category": "IIR Filters & Mixed",
    "question": "FFT is mainly used because it:",
    "options": [
      "Produces different results than DFT",
      "Computes the DFT efficiently",
      "Eliminates quantization noise",
      "Removes aliasing"
    ],
    "answerIndex": 1,
    "explanation": "FFT reduces computational complexity of DFT calculation."
  },
  {
    "id": 386,
    "category": "IIR Filters & Mixed",
    "question": "Which transform is used for periodic signals?",
    "options": [
      "Fourier Series",
      "Fourier Transform",
      "Z-transform",
      "DFT"
    ],
    "answerIndex": 0,
    "explanation": "Fourier Series represents periodic signals using discrete harmonic frequency series."
  },
  {
    "id": 387,
    "category": "IIR Filters & Mixed",
    "question": "Convolution determines:",
    "options": [
      "Sampling interval",
      "Output of an LTI system",
      "Quantization levels",
      "Filter order"
    ],
    "answerIndex": 1,
    "explanation": "Convolution combines input signal with impulse response to determine LTI system output."
  },
  {
    "id": 388,
    "category": "IIR Filters & Mixed",
    "question": "Which property is essential for an LTI system?",
    "options": [
      "Randomness",
      "Linearity and Time Invariance",
      "Quantization",
      "Modulation"
    ],
    "answerIndex": 1,
    "explanation": "An LTI system must satisfy both Linearity and Time Invariance."
  },
  {
    "id": 389,
    "category": "IIR Filters & Mixed",
    "question": "A stable discrete-time system requires:",
    "options": [
      "Poles outside the unit circle",
      "ROC including the unit circle",
      "Zeros on the unit circle",
      "Infinite bandwidth"
    ],
    "answerIndex": 1,
    "explanation": "For BIBO stability, the transfer function's ROC must include the unit circle |z|=1."
  },
  {
    "id": 390,
    "category": "IIR Filters & Mixed",
    "question": "Which theorem relates signal energy in time and frequency domains?",
    "options": [
      "Sampling Theorem",
      "Parseval's Theorem",
      "Shannon's Theorem",
      "Convolution Theorem"
    ],
    "answerIndex": 1,
    "explanation": "Parseval's Theorem asserts energy conservation across time and frequency domains."
  },
  {
    "id": 391,
    "category": "IIR Filters & Mixed",
    "question": "Which operation corresponds to multiplication in the frequency domain?",
    "options": [
      "Sampling",
      "Convolution in the time domain",
      "Quantization",
      "Encoding"
    ],
    "answerIndex": 1,
    "explanation": "Time-domain convolution corresponds to frequency-domain multiplication."
  },
  {
    "id": 392,
    "category": "IIR Filters & Mixed",
    "question": "The impulse response of an FIR filter is:",
    "options": [
      "Infinite",
      "Finite",
      "Continuous only",
      "Undefined"
    ],
    "answerIndex": 1,
    "explanation": "FIR filter impulse response consists of a finite number of non-zero sample terms."
  },
  {
    "id": 393,
    "category": "IIR Filters & Mixed",
    "question": "Which window provides adjustable characteristics using a parameter beta?",
    "options": [
      "Hamming",
      "Blackman",
      "Kaiser",
      "Bartlett"
    ],
    "answerIndex": 2,
    "explanation": "Kaiser window features parameter beta to tune main-lobe width vs side-lobe attenuation."
  },
  {
    "id": 394,
    "category": "IIR Filters & Mixed",
    "question": "The DFT naturally computes:",
    "options": [
      "Linear convolution",
      "Circular convolution",
      "Time reversal",
      "Sampling"
    ],
    "answerIndex": 1,
    "explanation": "Multiplication of DFTs produces circular convolution in the discrete-time domain."
  },
  {
    "id": 395,
    "category": "IIR Filters & Mixed",
    "question": "Which device converts analog signals into digital form?",
    "options": [
      "DAC",
      "ADC",
      "FFT",
      "Oscillator"
    ],
    "answerIndex": 1,
    "explanation": "ADC (Analog-to-Digital Converter) converts continuous analog signals to digital form."
  },
  {
    "id": 396,
    "category": "IIR Filters & Mixed",
    "question": "Which filter removes frequency components above the Nyquist frequency before sampling?",
    "options": [
      "High-pass filter",
      "Anti-aliasing (Low-pass) filter",
      "Band-stop filter",
      "Comb filter"
    ],
    "answerIndex": 1,
    "explanation": "Low-pass anti-aliasing filter suppresses frequencies above fs/2 prior to sampling."
  },
  {
    "id": 397,
    "category": "IIR Filters & Mixed",
    "question": "Which statement about FFT is correct?",
    "options": [
      "FFT is a different transform than DFT.",
      "FFT is a fast algorithm for computing the DFT.",
      "FFT applies only to analog signals.",
      "FFT replaces the Fourier Transform mathematically."
    ],
    "answerIndex": 1,
    "explanation": "FFT is an efficient algorithm to compute the Discrete Fourier Transform."
  },
  {
    "id": 398,
    "category": "IIR Filters & Mixed",
    "question": "Which DSP operation decomposes a signal into its constituent frequency components?",
    "options": [
      "Sampling",
      "Quantization",
      "Fourier Analysis",
      "Modulation"
    ],
    "answerIndex": 2,
    "explanation": "Fourier Analysis decomposes signals into constituent sinusoidal frequency components."
  },
  {
    "id": 399,
    "category": "IIR Filters & Mixed",
    "question": "Which of the following is NOT a property of convolution?",
    "options": [
      "Commutative",
      "Associative",
      "Distributive",
      "Anti-Commutative"
    ],
    "answerIndex": 3,
    "explanation": "Convolution is commutative, not anti-commutative."
  },
  {
    "id": 400,
    "category": "IIR Filters & Mixed",
    "question": "Which statement best summarizes Digital Signal Processing?",
    "options": [
      "DSP is limited to audio applications only.",
      "DSP is used only for analog communication systems.",
      "DSP involves the analysis, modification, and processing of digital signals using mathematical techniques such as sampling, transforms, filtering, and convolution.",
      "DSP is used only for converting analog signals into digital signals."
    ],
    "answerIndex": 2,
    "explanation": "DSP encompasses processing digital signals via sampling, transforms, digital filters, and convolution."
  }
];




const DSD_MCQS = [
  {
    "id": 1,
    "category": "Number Systems & Codes",
    "question": "The base (radix) of the binary number system is:",
    "options": [
      "8",
      "10",
      "2",
      "16"
    ],
    "answerIndex": 2,
    "explanation": {
      "correctReason": "Option C (2) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (8) is incorrect for this specific question context.",
        "B": "Option B (10) is incorrect for this specific question context.",
        "C": "Option C (2) is the correct choice.",
        "D": "Option D (16) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: The base (radix) of the binary number system is: -> 2.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 2,
    "category": "Number Systems & Codes",
    "question": "Which digits are used in the binary number system?",
    "options": [
      "0-7",
      "0-9",
      "0 and 1",
      "1 and 2"
    ],
    "answerIndex": 2,
    "explanation": {
      "correctReason": "Option C (0 and 1) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (0-7) is incorrect for this specific question context.",
        "B": "Option B (0-9) is incorrect for this specific question context.",
        "C": "Option C (0 and 1) is the correct choice.",
        "D": "Option D (1 and 2) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Which digits are used in the binary number system? -> 0 and 1.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 3,
    "category": "Number Systems & Codes",
    "question": "The decimal equivalent of binary (1010)\u2082 is:",
    "options": [
      "8",
      "9",
      "10",
      "12"
    ],
    "answerIndex": 2,
    "explanation": {
      "correctReason": "Option C (10) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (8) is incorrect for this specific question context.",
        "B": "Option B (9) is incorrect for this specific question context.",
        "C": "Option C (10) is the correct choice.",
        "D": "Option D (12) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: The decimal equivalent of binary (1010)\u2082 is: -> 10.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 4,
    "category": "Number Systems & Codes",
    "question": "The binary equivalent of decimal 15 is:",
    "options": [
      "1110",
      "1111",
      "1011",
      "1101"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (1111) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (1110) is incorrect for this specific question context.",
        "B": "Option B (1111) is the correct choice.",
        "C": "Option C (1011) is incorrect for this specific question context.",
        "D": "Option D (1101) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: The binary equivalent of decimal 15 is: -> 1111.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 5,
    "category": "Number Systems & Codes",
    "question": "The decimal equivalent of binary (10011)\u2082 is:",
    "options": [
      "17",
      "18",
      "19",
      "20"
    ],
    "answerIndex": 2,
    "explanation": {
      "correctReason": "Option C (19) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (17) is incorrect for this specific question context.",
        "B": "Option B (18) is incorrect for this specific question context.",
        "C": "Option C (19) is the correct choice.",
        "D": "Option D (20) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: The decimal equivalent of binary (10011)\u2082 is: -> 19.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 6,
    "category": "Number Systems & Codes",
    "question": "Which number system has radix 8?",
    "options": [
      "Binary",
      "Octal",
      "Decimal",
      "Hexadecimal"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (Octal) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (Binary) is incorrect for this specific question context.",
        "B": "Option B (Octal) is the correct choice.",
        "C": "Option C (Decimal) is incorrect for this specific question context.",
        "D": "Option D (Hexadecimal) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Which number system has radix 8? -> Octal.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 7,
    "category": "Number Systems & Codes",
    "question": "Which number system has radix 16?",
    "options": [
      "Binary",
      "Decimal",
      "Octal",
      "Hexadecimal"
    ],
    "answerIndex": 3,
    "explanation": {
      "correctReason": "Option D (Hexadecimal) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (Binary) is incorrect for this specific question context.",
        "B": "Option B (Decimal) is incorrect for this specific question context.",
        "C": "Option C (Octal) is incorrect for this specific question context.",
        "D": "Option D (Hexadecimal) is the correct choice."
      },
      "memoryTip": "Remember: Which number system has radix 16? -> Hexadecimal.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 8,
    "category": "Number Systems & Codes",
    "question": "The hexadecimal digit A represents decimal:",
    "options": [
      "9",
      "10",
      "11",
      "12"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (10) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (9) is incorrect for this specific question context.",
        "B": "Option B (10) is the correct choice.",
        "C": "Option C (11) is incorrect for this specific question context.",
        "D": "Option D (12) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: The hexadecimal digit A represents decimal: -> 10.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 9,
    "category": "Number Systems & Codes",
    "question": "The hexadecimal digit F is equal to decimal:",
    "options": [
      "12",
      "13",
      "14",
      "15"
    ],
    "answerIndex": 3,
    "explanation": {
      "correctReason": "Option D (15) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (12) is incorrect for this specific question context.",
        "B": "Option B (13) is incorrect for this specific question context.",
        "C": "Option C (14) is incorrect for this specific question context.",
        "D": "Option D (15) is the correct choice."
      },
      "memoryTip": "Remember: The hexadecimal digit F is equal to decimal: -> 15.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 10,
    "category": "Number Systems & Codes",
    "question": "Decimal 25 in binary is:",
    "options": [
      "11001",
      "10101",
      "10011",
      "11100"
    ],
    "answerIndex": 0,
    "explanation": {
      "correctReason": "Option A (11001) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (11001) is the correct choice.",
        "B": "Option B (10101) is incorrect for this specific question context.",
        "C": "Option C (10011) is incorrect for this specific question context.",
        "D": "Option D (11100) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Decimal 25 in binary is: -> 11001.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 11,
    "category": "Number Systems & Codes",
    "question": "Binary (11111111)\u2082 is equal to decimal:",
    "options": [
      "127",
      "128",
      "254",
      "255"
    ],
    "answerIndex": 3,
    "explanation": {
      "correctReason": "Option D (255) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (127) is incorrect for this specific question context.",
        "B": "Option B (128) is incorrect for this specific question context.",
        "C": "Option C (254) is incorrect for this specific question context.",
        "D": "Option D (255) is the correct choice."
      },
      "memoryTip": "Remember: Binary (11111111)\u2082 is equal to decimal: -> 255.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 12,
    "category": "Number Systems & Codes",
    "question": "Decimal 32 in binary is:",
    "options": [
      "11111",
      "100000",
      "100001",
      "101000"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (100000) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (11111) is incorrect for this specific question context.",
        "B": "Option B (100000) is the correct choice.",
        "C": "Option C (100001) is incorrect for this specific question context.",
        "D": "Option D (101000) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Decimal 32 in binary is: -> 100000.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 13,
    "category": "Number Systems & Codes",
    "question": "Binary (100000)\u2082 is equal to:",
    "options": [
      "16",
      "32",
      "64",
      "128"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (32) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (16) is incorrect for this specific question context.",
        "B": "Option B (32) is the correct choice.",
        "C": "Option C (64) is incorrect for this specific question context.",
        "D": "Option D (128) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Binary (100000)\u2082 is equal to: -> 32.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 14,
    "category": "Number Systems & Codes",
    "question": "The binary equivalent of decimal 50 is:",
    "options": [
      "110000",
      "110010",
      "111010",
      "101010"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (110010) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (110000) is incorrect for this specific question context.",
        "B": "Option B (110010) is the correct choice.",
        "C": "Option C (111010) is incorrect for this specific question context.",
        "D": "Option D (101010) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: The binary equivalent of decimal 50 is: -> 110010.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 15,
    "category": "Number Systems & Codes",
    "question": "Which number system is commonly used as a shorthand representation of binary?",
    "options": [
      "Decimal",
      "Octal only",
      "Hexadecimal only",
      "Octal and Hexadecimal"
    ],
    "answerIndex": 3,
    "explanation": {
      "correctReason": "Option D (Octal and Hexadecimal) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (Decimal) is incorrect for this specific question context.",
        "B": "Option B (Octal only) is incorrect for this specific question context.",
        "C": "Option C (Hexadecimal only) is incorrect for this specific question context.",
        "D": "Option D (Octal and Hexadecimal) is the correct choice."
      },
      "memoryTip": "Remember: Which number system is commonly used as a shorthand representation of binary? -> Octal and Hexadecimal.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 16,
    "category": "Number Systems & Codes",
    "question": "One hexadecimal digit represents:",
    "options": [
      "2 bits",
      "3 bits",
      "4 bits",
      "8 bits"
    ],
    "answerIndex": 2,
    "explanation": {
      "correctReason": "Option C (4 bits) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (2 bits) is incorrect for this specific question context.",
        "B": "Option B (3 bits) is incorrect for this specific question context.",
        "C": "Option C (4 bits) is the correct choice.",
        "D": "Option D (8 bits) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: One hexadecimal digit represents: -> 4 bits.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 17,
    "category": "Number Systems & Codes",
    "question": "One octal digit represents:",
    "options": [
      "2 bits",
      "3 bits",
      "4 bits",
      "5 bits"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (3 bits) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (2 bits) is incorrect for this specific question context.",
        "B": "Option B (3 bits) is the correct choice.",
        "C": "Option C (4 bits) is incorrect for this specific question context.",
        "D": "Option D (5 bits) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: One octal digit represents: -> 3 bits.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 18,
    "category": "Number Systems & Codes",
    "question": "Binary (1111)\u2082 is equal to hexadecimal:",
    "options": [
      "E",
      "F",
      "A",
      "C"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (F) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (E) is incorrect for this specific question context.",
        "B": "Option B (F) is the correct choice.",
        "C": "Option C (A) is incorrect for this specific question context.",
        "D": "Option D (C) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Binary (1111)\u2082 is equal to hexadecimal: -> F.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 19,
    "category": "Number Systems & Codes",
    "question": "Hexadecimal (1A)\u2081\u2086 is equal to decimal:",
    "options": [
      "24",
      "25",
      "26",
      "27"
    ],
    "answerIndex": 2,
    "explanation": {
      "correctReason": "Option C (26) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (24) is incorrect for this specific question context.",
        "B": "Option B (25) is incorrect for this specific question context.",
        "C": "Option C (26) is the correct choice.",
        "D": "Option D (27) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Hexadecimal (1A)\u2081\u2086 is equal to decimal: -> 26.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 20,
    "category": "Number Systems & Codes",
    "question": "Decimal 64 is represented in hexadecimal as:",
    "options": [
      "30",
      "40",
      "50",
      "60"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (40) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (30) is incorrect for this specific question context.",
        "B": "Option B (40) is the correct choice.",
        "C": "Option C (50) is incorrect for this specific question context.",
        "D": "Option D (60) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Decimal 64 is represented in hexadecimal as: -> 40.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 21,
    "category": "Number Systems & Codes",
    "question": "One's complement is obtained by:",
    "options": [
      "Adding 1",
      "Inverting all bits",
      "Removing the MSB",
      "Multiplying by 2"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (Inverting all bits) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (Adding 1) is incorrect for this specific question context.",
        "B": "Option B (Inverting all bits) is the correct choice.",
        "C": "Option C (Removing the MSB) is incorrect for this specific question context.",
        "D": "Option D (Multiplying by 2) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: One's complement is obtained by: -> Inverting all bits.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 22,
    "category": "Number Systems & Codes",
    "question": "Two's complement is obtained by:",
    "options": [
      "Inverting bits only",
      "Adding 1 to the one's complement",
      "Subtracting 1",
      "Shifting left"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (Adding 1 to the one's complement) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (Inverting bits only) is incorrect for this specific question context.",
        "B": "Option B (Adding 1 to the one's complement) is the correct choice.",
        "C": "Option C (Subtracting 1) is incorrect for this specific question context.",
        "D": "Option D (Shifting left) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Two's complement is obtained by: -> Adding 1 to the one's complement.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 23,
    "category": "Number Systems & Codes",
    "question": "The one's complement of 1010 is:",
    "options": [
      "1011",
      "0100",
      "0101",
      "0011"
    ],
    "answerIndex": 2,
    "explanation": {
      "correctReason": "Option C (0101) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (1011) is incorrect for this specific question context.",
        "B": "Option B (0100) is incorrect for this specific question context.",
        "C": "Option C (0101) is the correct choice.",
        "D": "Option D (0011) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: The one's complement of 1010 is: -> 0101.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 24,
    "category": "Number Systems & Codes",
    "question": "The two's complement of 1010 is:",
    "options": [
      "0101",
      "0110",
      "1110",
      "1000"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (0110) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (0101) is incorrect for this specific question context.",
        "B": "Option B (0110) is the correct choice.",
        "C": "Option C (1110) is incorrect for this specific question context.",
        "D": "Option D (1000) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: The two's complement of 1010 is: -> 0110.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 25,
    "category": "Number Systems & Codes",
    "question": "The two's complement of 1101 is:",
    "options": [
      "0010",
      "0011",
      "0100",
      "0101"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (0011) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (0010) is incorrect for this specific question context.",
        "B": "Option B (0011) is the correct choice.",
        "C": "Option C (0100) is incorrect for this specific question context.",
        "D": "Option D (0101) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: The two's complement of 1101 is: -> 0011.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 26,
    "category": "Number Systems & Codes",
    "question": "Which representation is widely used for signed integers in computers?",
    "options": [
      "BCD",
      "Gray Code",
      "Two's Complement",
      "ASCII"
    ],
    "answerIndex": 2,
    "explanation": {
      "correctReason": "Option C (Two's Complement) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (BCD) is incorrect for this specific question context.",
        "B": "Option B (Gray Code) is incorrect for this specific question context.",
        "C": "Option C (Two's Complement) is the correct choice.",
        "D": "Option D (ASCII) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Which representation is widely used for signed integers in computers? -> Two's Complement.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 27,
    "category": "Number Systems & Codes",
    "question": "The two's complement representation of decimal -6 using 4 bits is:",
    "options": [
      "0110",
      "1001",
      "1010",
      "1110"
    ],
    "answerIndex": 2,
    "explanation": {
      "correctReason": "Option C (1010) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (0110) is incorrect for this specific question context.",
        "B": "Option B (1001) is incorrect for this specific question context.",
        "C": "Option C (1010) is the correct choice.",
        "D": "Option D (1110) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: The two's complement representation of decimal -6 using 4 bits is: -> 1010.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 28,
    "category": "Number Systems & Codes",
    "question": "In an 8-bit signed two's complement system, the maximum positive number is:",
    "options": [
      "128",
      "127",
      "255",
      "256"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (127) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (128) is incorrect for this specific question context.",
        "B": "Option B (127) is the correct choice.",
        "C": "Option C (255) is incorrect for this specific question context.",
        "D": "Option D (256) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: In an 8-bit signed two's complement system, the maximum positive number is: -> 127.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 29,
    "category": "Number Systems & Codes",
    "question": "In an 8-bit signed two's complement system, the minimum number is:",
    "options": [
      "-127",
      "-128",
      "-255",
      "-256"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (-128) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (-127) is incorrect for this specific question context.",
        "B": "Option B (-128) is the correct choice.",
        "C": "Option C (-255) is incorrect for this specific question context.",
        "D": "Option D (-256) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: In an 8-bit signed two's complement system, the minimum number is: -> -128.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 30,
    "category": "Number Systems & Codes",
    "question": "Which bit indicates the sign in signed binary representation?",
    "options": [
      "LSB",
      "MSB",
      "Carry bit",
      "Parity bit"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (MSB) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (LSB) is incorrect for this specific question context.",
        "B": "Option B (MSB) is the correct choice.",
        "C": "Option C (Carry bit) is incorrect for this specific question context.",
        "D": "Option D (Parity bit) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Which bit indicates the sign in signed binary representation? -> MSB.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 31,
    "category": "Number Systems & Codes",
    "question": "BCD stands for:",
    "options": [
      "Binary Code Digit",
      "Binary Coded Decimal",
      "Binary Computer Data",
      "Binary Control Digit"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (Binary Coded Decimal) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (Binary Code Digit) is incorrect for this specific question context.",
        "B": "Option B (Binary Coded Decimal) is the correct choice.",
        "C": "Option C (Binary Computer Data) is incorrect for this specific question context.",
        "D": "Option D (Binary Control Digit) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: BCD stands for: -> Binary Coded Decimal.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 32,
    "category": "Number Systems & Codes",
    "question": "In BCD, decimal digit 9 is represented as:",
    "options": [
      "1000",
      "1001",
      "1010",
      "1111"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (1001) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (1000) is incorrect for this specific question context.",
        "B": "Option B (1001) is the correct choice.",
        "C": "Option C (1010) is incorrect for this specific question context.",
        "D": "Option D (1111) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: In BCD, decimal digit 9 is represented as: -> 1001.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 33,
    "category": "Number Systems & Codes",
    "question": "Which code changes only one bit between successive numbers?",
    "options": [
      "ASCII",
      "BCD",
      "Gray Code",
      "Excess-3"
    ],
    "answerIndex": 2,
    "explanation": {
      "correctReason": "Option C (Gray Code) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (ASCII) is incorrect for this specific question context.",
        "B": "Option B (BCD) is incorrect for this specific question context.",
        "C": "Option C (Gray Code) is the correct choice.",
        "D": "Option D (Excess-3) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Which code changes only one bit between successive numbers? -> Gray Code.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 34,
    "category": "Number Systems & Codes",
    "question": "Gray code is mainly used to:",
    "options": [
      "Increase memory",
      "Compress data",
      "Reduce transition errors",
      "Encrypt data"
    ],
    "answerIndex": 2,
    "explanation": {
      "correctReason": "Option C (Reduce transition errors) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (Increase memory) is incorrect for this specific question context.",
        "B": "Option B (Compress data) is incorrect for this specific question context.",
        "C": "Option C (Reduce transition errors) is the correct choice.",
        "D": "Option D (Encrypt data) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Gray code is mainly used to: -> Reduce transition errors.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 35,
    "category": "Number Systems & Codes",
    "question": "Which code is widely used in rotary encoders?",
    "options": [
      "ASCII",
      "Unicode",
      "Gray Code",
      "BCD"
    ],
    "answerIndex": 2,
    "explanation": {
      "correctReason": "Option C (Gray Code) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (ASCII) is incorrect for this specific question context.",
        "B": "Option B (Unicode) is incorrect for this specific question context.",
        "C": "Option C (Gray Code) is the correct choice.",
        "D": "Option D (BCD) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Which code is widely used in rotary encoders? -> Gray Code.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 36,
    "category": "Number Systems & Codes",
    "question": "ASCII is primarily used to represent:",
    "options": [
      "Images",
      "Audio",
      "Characters",
      "Floating-point numbers"
    ],
    "answerIndex": 2,
    "explanation": {
      "correctReason": "Option C (Characters) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (Images) is incorrect for this specific question context.",
        "B": "Option B (Audio) is incorrect for this specific question context.",
        "C": "Option C (Characters) is the correct choice.",
        "D": "Option D (Floating-point numbers) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: ASCII is primarily used to represent: -> Characters.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 37,
    "category": "Number Systems & Codes",
    "question": "ASCII stands for:",
    "options": [
      "American Standard Code for Information Interface",
      "American Standard Code for Information Interchange",
      "American System Code for Internet Information",
      "Automatic Standard Code for Information"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (American Standard Code for Information Interchange) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (American Standard Code for Information Interface) is incorrect for this specific question context.",
        "B": "Option B (American Standard Code for Information Interchange) is the correct choice.",
        "C": "Option C (American System Code for Internet Information) is incorrect for this specific question context.",
        "D": "Option D (Automatic Standard Code for Information) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: ASCII stands for: -> American Standard Code for Information Interchange.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 38,
    "category": "Number Systems & Codes",
    "question": "Which code represents decimal digits separately in binary form?",
    "options": [
      "Gray Code",
      "BCD",
      "ASCII",
      "Unicode"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (BCD) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (Gray Code) is incorrect for this specific question context.",
        "B": "Option B (BCD) is the correct choice.",
        "C": "Option C (ASCII) is incorrect for this specific question context.",
        "D": "Option D (Unicode) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Which code represents decimal digits separately in binary form? -> BCD.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 39,
    "category": "Number Systems & Codes",
    "question": "Which code is not a weighted code?",
    "options": [
      "BCD",
      "Gray Code",
      "8421 Code",
      "2421 Code"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (Gray Code) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (BCD) is incorrect for this specific question context.",
        "B": "Option B (Gray Code) is the correct choice.",
        "C": "Option C (8421 Code) is incorrect for this specific question context.",
        "D": "Option D (2421 Code) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Which code is not a weighted code? -> Gray Code.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 40,
    "category": "Number Systems & Codes",
    "question": "Which code is a weighted code?",
    "options": [
      "Gray Code",
      "ASCII",
      "BCD",
      "Unicode"
    ],
    "answerIndex": 2,
    "explanation": {
      "correctReason": "Option C (BCD) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (Gray Code) is incorrect for this specific question context.",
        "B": "Option B (ASCII) is incorrect for this specific question context.",
        "C": "Option C (BCD) is the correct choice.",
        "D": "Option D (Unicode) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Which code is a weighted code? -> BCD.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 41,
    "category": "Number Systems & Codes",
    "question": "The largest decimal number represented by 4 unsigned bits is:",
    "options": [
      "14",
      "15",
      "16",
      "31"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (15) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (14) is incorrect for this specific question context.",
        "B": "Option B (15) is the correct choice.",
        "C": "Option C (16) is incorrect for this specific question context.",
        "D": "Option D (31) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: The largest decimal number represented by 4 unsigned bits is: -> 15.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 42,
    "category": "Number Systems & Codes",
    "question": "The smallest unsigned 8-bit binary number is:",
    "options": [
      "0",
      "1",
      "-1",
      "-128"
    ],
    "answerIndex": 0,
    "explanation": {
      "correctReason": "Option A (0) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (0) is the correct choice.",
        "B": "Option B (1) is incorrect for this specific question context.",
        "C": "Option C (-1) is incorrect for this specific question context.",
        "D": "Option D (-128) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: The smallest unsigned 8-bit binary number is: -> 0.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 43,
    "category": "Number Systems & Codes",
    "question": "Overflow occurs when:",
    "options": [
      "Division is performed",
      "Multiplication is performed",
      "The result cannot be represented with the available bits",
      "A carry is generated"
    ],
    "answerIndex": 2,
    "explanation": {
      "correctReason": "Option C (The result cannot be represented with the available bits) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (Division is performed) is incorrect for this specific question context.",
        "B": "Option B (Multiplication is performed) is incorrect for this specific question context.",
        "C": "Option C (The result cannot be represented with the available bits) is the correct choice.",
        "D": "Option D (A carry is generated) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Overflow occurs when: -> The result cannot be represented with the available bits.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 44,
    "category": "Number Systems & Codes",
    "question": "How many different values can be represented using 5 bits?",
    "options": [
      "16",
      "25",
      "31",
      "32"
    ],
    "answerIndex": 3,
    "explanation": {
      "correctReason": "Option D (32) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (16) is incorrect for this specific question context.",
        "B": "Option B (25) is incorrect for this specific question context.",
        "C": "Option C (31) is incorrect for this specific question context.",
        "D": "Option D (32) is the correct choice."
      },
      "memoryTip": "Remember: How many different values can be represented using 5 bits? -> 32.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 45,
    "category": "Number Systems & Codes",
    "question": "Eight bits are collectively called a:",
    "options": [
      "Nibble",
      "Byte",
      "Word",
      "Double Word"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (Byte) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (Nibble) is incorrect for this specific question context.",
        "B": "Option B (Byte) is the correct choice.",
        "C": "Option C (Word) is incorrect for this specific question context.",
        "D": "Option D (Double Word) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Eight bits are collectively called a: -> Byte.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 46,
    "category": "Number Systems & Codes",
    "question": "Four bits are called a:",
    "options": [
      "Nibble",
      "Byte",
      "Word",
      "Cell"
    ],
    "answerIndex": 0,
    "explanation": {
      "correctReason": "Option A (Nibble) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (Nibble) is the correct choice.",
        "B": "Option B (Byte) is incorrect for this specific question context.",
        "C": "Option C (Word) is incorrect for this specific question context.",
        "D": "Option D (Cell) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Four bits are called a: -> Nibble.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 47,
    "category": "Number Systems & Codes",
    "question": "Which binary number is even?",
    "options": [
      "1011",
      "1111",
      "1101",
      "1010"
    ],
    "answerIndex": 3,
    "explanation": {
      "correctReason": "Option D (1010) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (1011) is incorrect for this specific question context.",
        "B": "Option B (1111) is incorrect for this specific question context.",
        "C": "Option C (1101) is incorrect for this specific question context.",
        "D": "Option D (1010) is the correct choice."
      },
      "memoryTip": "Remember: Which binary number is even? -> 1010.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 48,
    "category": "Number Systems & Codes",
    "question": "A binary number ending with 1 is always:",
    "options": [
      "Even",
      "Odd",
      "Prime",
      "Negative"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (Odd) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (Even) is incorrect for this specific question context.",
        "B": "Option B (Odd) is the correct choice.",
        "C": "Option C (Prime) is incorrect for this specific question context.",
        "D": "Option D (Negative) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: A binary number ending with 1 is always: -> Odd.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 49,
    "category": "Number Systems & Codes",
    "question": "Which of the following is an invalid hexadecimal number?",
    "options": [
      "A9",
      "2F",
      "1G",
      "FF"
    ],
    "answerIndex": 2,
    "explanation": {
      "correctReason": "Option C (1G) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (A9) is incorrect for this specific question context.",
        "B": "Option B (2F) is incorrect for this specific question context.",
        "C": "Option C (1G) is the correct choice.",
        "D": "Option D (FF) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Which of the following is an invalid hexadecimal number? -> 1G.",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 50,
    "category": "Number Systems & Codes",
    "question": "Which statement is correct?",
    "options": [
      "Binary uses digits 0-9.",
      "Octal uses digits 0-9.",
      "Hexadecimal uses digits 0-9 only.",
      "Hexadecimal uses digits 0-9 and A-F."
    ],
    "answerIndex": 3,
    "explanation": {
      "correctReason": "Option D (Hexadecimal uses digits 0-9 and A-F.) is correct because it accurately satisfies the principles of Number Systems & Codes.",
      "optionReasons": {
        "A": "Option A (Binary uses digits 0-9.) is incorrect for this specific question context.",
        "B": "Option B (Octal uses digits 0-9.) is incorrect for this specific question context.",
        "C": "Option C (Hexadecimal uses digits 0-9 only.) is incorrect for this specific question context.",
        "D": "Option D (Hexadecimal uses digits 0-9 and A-F.) is the correct choice."
      },
      "memoryTip": "Remember: Which statement is correct? -> Hexadecimal uses digits 0-9 and A-F..",
      "examTrap": "BPSC examiners frequently test Number Systems & Codes definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Number Systems & Codes forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Number Systems & Codes",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 51,
    "category": "Boolean Algebra & Gates",
    "question": "Boolean algebra deals with variables that have:",
    "options": [
      "Three values",
      "Four values",
      "Two values (0 and 1)",
      "Infinite values"
    ],
    "answerIndex": 2,
    "explanation": {
      "correctReason": "Option C (Two values (0 and 1)) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (Three values) is incorrect for this specific question context.",
        "B": "Option B (Four values) is incorrect for this specific question context.",
        "C": "Option C (Two values (0 and 1)) is the correct choice.",
        "D": "Option D (Infinite values) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Boolean algebra deals with variables that have: -> Two values (0 and 1).",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 52,
    "category": "Boolean Algebra & Gates",
    "question": "Which are the three basic Boolean operations?",
    "options": [
      "Addition, Subtraction, Multiplication",
      "AND, OR, NOT",
      "XOR, NAND, NOR",
      "Shift, Rotate, Complement"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (AND, OR, NOT) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (Addition, Subtraction, Multiplication) is incorrect for this specific question context.",
        "B": "Option B (AND, OR, NOT) is the correct choice.",
        "C": "Option C (XOR, NAND, NOR) is incorrect for this specific question context.",
        "D": "Option D (Shift, Rotate, Complement) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Which are the three basic Boolean operations? -> AND, OR, NOT.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 53,
    "category": "Boolean Algebra & Gates",
    "question": "In Boolean algebra, '+' represents:",
    "options": [
      "Arithmetic addition",
      "OR operation",
      "AND operation",
      "NOT operation"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (OR operation) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (Arithmetic addition) is incorrect for this specific question context.",
        "B": "Option B (OR operation) is the correct choice.",
        "C": "Option C (AND operation) is incorrect for this specific question context.",
        "D": "Option D (NOT operation) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: In Boolean algebra, '+' represents: -> OR operation.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 54,
    "category": "Boolean Algebra & Gates",
    "question": "In Boolean algebra, '.' represents:",
    "options": [
      "OR",
      "AND",
      "XOR",
      "NOR"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (AND) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (OR) is incorrect for this specific question context.",
        "B": "Option B (AND) is the correct choice.",
        "C": "Option C (XOR) is incorrect for this specific question context.",
        "D": "Option D (NOR) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: In Boolean algebra, '.' represents: -> AND.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 55,
    "category": "Boolean Algebra & Gates",
    "question": "The complement of A is represented as:",
    "options": [
      "A+",
      "Ax",
      "A'",
      "A#"
    ],
    "answerIndex": 2,
    "explanation": {
      "correctReason": "Option C (A') is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (A+) is incorrect for this specific question context.",
        "B": "Option B (Ax) is incorrect for this specific question context.",
        "C": "Option C (A') is the correct choice.",
        "D": "Option D (A#) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: The complement of A is represented as: -> A'.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 56,
    "category": "Boolean Algebra & Gates",
    "question": "If A = 1, then A' equals:",
    "options": [
      "1",
      "0",
      "2",
      "Undefined"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (0) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (1) is incorrect for this specific question context.",
        "B": "Option B (0) is the correct choice.",
        "C": "Option C (2) is incorrect for this specific question context.",
        "D": "Option D (Undefined) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: If A = 1, then A' equals: -> 0.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 57,
    "category": "Boolean Algebra & Gates",
    "question": "If A = 0, then A' equals:",
    "options": [
      "1",
      "0",
      "-1",
      "Undefined"
    ],
    "answerIndex": 0,
    "explanation": {
      "correctReason": "Option A (1) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (1) is the correct choice.",
        "B": "Option B (0) is incorrect for this specific question context.",
        "C": "Option C (-1) is incorrect for this specific question context.",
        "D": "Option D (Undefined) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: If A = 0, then A' equals: -> 1.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 58,
    "category": "Boolean Algebra & Gates",
    "question": "According to the Identity Law:",
    "options": [
      "A + A = A",
      "A + 0 = A",
      "A + 1 = 0",
      "A . 0 = 1"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (A + 0 = A) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (A + A = A) is incorrect for this specific question context.",
        "B": "Option B (A + 0 = A) is the correct choice.",
        "C": "Option C (A + 1 = 0) is incorrect for this specific question context.",
        "D": "Option D (A . 0 = 1) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: According to the Identity Law: -> A + 0 = A.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 59,
    "category": "Boolean Algebra & Gates",
    "question": "According to the Null Law:",
    "options": [
      "A + 0 = A",
      "A + 1 = 1",
      "A . 1 = 0",
      "A + A = 0"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (A + 1 = 1) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (A + 0 = A) is incorrect for this specific question context.",
        "B": "Option B (A + 1 = 1) is the correct choice.",
        "C": "Option C (A . 1 = 0) is incorrect for this specific question context.",
        "D": "Option D (A + A = 0) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: According to the Null Law: -> A + 1 = 1.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 60,
    "category": "Boolean Algebra & Gates",
    "question": "According to the Identity Law for AND:",
    "options": [
      "A . 0 = A",
      "A . 1 = A",
      "A + 1 = A",
      "A + 0 = 1"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (A . 1 = A) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (A . 0 = A) is incorrect for this specific question context.",
        "B": "Option B (A . 1 = A) is the correct choice.",
        "C": "Option C (A + 1 = A) is incorrect for this specific question context.",
        "D": "Option D (A + 0 = 1) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: According to the Identity Law for AND: -> A . 1 = A.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 61,
    "category": "Boolean Algebra & Gates",
    "question": "According to the Null Law:",
    "options": [
      "A . 1 = 0",
      "A . 0 = 0",
      "A + 0 = 1",
      "A . A = 0"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (A . 0 = 0) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (A . 1 = 0) is incorrect for this specific question context.",
        "B": "Option B (A . 0 = 0) is the correct choice.",
        "C": "Option C (A + 0 = 1) is incorrect for this specific question context.",
        "D": "Option D (A . A = 0) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: According to the Null Law: -> A . 0 = 0.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 62,
    "category": "Boolean Algebra & Gates",
    "question": "The Idempotent Law states:",
    "options": [
      "A + 1 = A",
      "A + A = A",
      "A + 0 = 0",
      "A . 0 = A"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (A + A = A) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (A + 1 = A) is incorrect for this specific question context.",
        "B": "Option B (A + A = A) is the correct choice.",
        "C": "Option C (A + 0 = 0) is incorrect for this specific question context.",
        "D": "Option D (A . 0 = A) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: The Idempotent Law states: -> A + A = A.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 63,
    "category": "Boolean Algebra & Gates",
    "question": "Which expression is equal to A?",
    "options": [
      "A + A'",
      "A . 1",
      "A . 0",
      "A + 1"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (A . 1) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (A + A') is incorrect for this specific question context.",
        "B": "Option B (A . 1) is the correct choice.",
        "C": "Option C (A . 0) is incorrect for this specific question context.",
        "D": "Option D (A + 1) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Which expression is equal to A? -> A . 1.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 64,
    "category": "Boolean Algebra & Gates",
    "question": "Which expression always equals 1?",
    "options": [
      "A . A'",
      "A + A'",
      "A . 0",
      "A + 0"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (A + A') is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (A . A') is incorrect for this specific question context.",
        "B": "Option B (A + A') is the correct choice.",
        "C": "Option C (A . 0) is incorrect for this specific question context.",
        "D": "Option D (A + 0) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Which expression always equals 1? -> A + A'.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 65,
    "category": "Boolean Algebra & Gates",
    "question": "Which expression always equals 0?",
    "options": [
      "A . A'",
      "A + A'",
      "A + 1",
      "A . 1"
    ],
    "answerIndex": 0,
    "explanation": {
      "correctReason": "Option A (A . A') is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (A . A') is the correct choice.",
        "B": "Option B (A + A') is incorrect for this specific question context.",
        "C": "Option C (A + 1) is incorrect for this specific question context.",
        "D": "Option D (A . 1) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Which expression always equals 0? -> A . A'.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 66,
    "category": "Boolean Algebra & Gates",
    "question": "Which law states A + B = B + A?",
    "options": [
      "Associative",
      "Commutative",
      "Distributive",
      "Absorption"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (Commutative) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (Associative) is incorrect for this specific question context.",
        "B": "Option B (Commutative) is the correct choice.",
        "C": "Option C (Distributive) is incorrect for this specific question context.",
        "D": "Option D (Absorption) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Which law states A + B = B + A? -> Commutative.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 67,
    "category": "Boolean Algebra & Gates",
    "question": "Which law states (A + B) + C = A + (B + C)?",
    "options": [
      "Commutative",
      "Associative",
      "Identity",
      "Null"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (Associative) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (Commutative) is incorrect for this specific question context.",
        "B": "Option B (Associative) is the correct choice.",
        "C": "Option C (Identity) is incorrect for this specific question context.",
        "D": "Option D (Null) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Which law states (A + B) + C = A + (B + C)? -> Associative.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 68,
    "category": "Boolean Algebra & Gates",
    "question": "Which law states A(B + C) = AB + AC?",
    "options": [
      "Commutative",
      "Identity",
      "Distributive",
      "DeMorgan"
    ],
    "answerIndex": 2,
    "explanation": {
      "correctReason": "Option C (Distributive) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (Commutative) is incorrect for this specific question context.",
        "B": "Option B (Identity) is incorrect for this specific question context.",
        "C": "Option C (Distributive) is the correct choice.",
        "D": "Option D (DeMorgan) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Which law states A(B + C) = AB + AC? -> Distributive.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 69,
    "category": "Boolean Algebra & Gates",
    "question": "The Absorption Law is:",
    "options": [
      "A + A = A",
      "A + AB = A",
      "A + 0 = 0",
      "A . 1 = 0"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (A + AB = A) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (A + A = A) is incorrect for this specific question context.",
        "B": "Option B (A + AB = A) is the correct choice.",
        "C": "Option C (A + 0 = 0) is incorrect for this specific question context.",
        "D": "Option D (A . 1 = 0) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: The Absorption Law is: -> A + AB = A.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 70,
    "category": "Boolean Algebra & Gates",
    "question": "The expression AA' simplifies to:",
    "options": [
      "A",
      "1",
      "0",
      "B"
    ],
    "answerIndex": 2,
    "explanation": {
      "correctReason": "Option C (0) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (A) is incorrect for this specific question context.",
        "B": "Option B (1) is incorrect for this specific question context.",
        "C": "Option C (0) is the correct choice.",
        "D": "Option D (B) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: The expression AA' simplifies to: -> 0.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 71,
    "category": "Boolean Algebra & Gates",
    "question": "The Boolean expression AA'B simplifies to:",
    "options": [
      "B",
      "AB",
      "0",
      "A"
    ],
    "answerIndex": 2,
    "explanation": {
      "correctReason": "Option C (0) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (B) is incorrect for this specific question context.",
        "B": "Option B (AB) is incorrect for this specific question context.",
        "C": "Option C (0) is the correct choice.",
        "D": "Option D (A) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: The Boolean expression AA'B simplifies to: -> 0.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 72,
    "category": "Boolean Algebra & Gates",
    "question": "The Boolean expression A + AB simplifies to:",
    "options": [
      "A",
      "AB",
      "B",
      "1"
    ],
    "answerIndex": 0,
    "explanation": {
      "correctReason": "Option A (A) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (A) is the correct choice.",
        "B": "Option B (AB) is incorrect for this specific question context.",
        "C": "Option C (B) is incorrect for this specific question context.",
        "D": "Option D (1) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: The Boolean expression A + AB simplifies to: -> A.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 73,
    "category": "Boolean Algebra & Gates",
    "question": "The Boolean expression A(A + B) simplifies to:",
    "options": [
      "A",
      "AB",
      "A+B",
      "B"
    ],
    "answerIndex": 0,
    "explanation": {
      "correctReason": "Option A (A) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (A) is the correct choice.",
        "B": "Option B (AB) is incorrect for this specific question context.",
        "C": "Option C (A+B) is incorrect for this specific question context.",
        "D": "Option D (B) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: The Boolean expression A(A + B) simplifies to: -> A.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 74,
    "category": "Boolean Algebra & Gates",
    "question": "The expression A + 0 equals:",
    "options": [
      "A",
      "1",
      "0",
      "A'"
    ],
    "answerIndex": 0,
    "explanation": {
      "correctReason": "Option A (A) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (A) is the correct choice.",
        "B": "Option B (1) is incorrect for this specific question context.",
        "C": "Option C (0) is incorrect for this specific question context.",
        "D": "Option D (A') is incorrect for this specific question context."
      },
      "memoryTip": "Remember: The expression A + 0 equals: -> A.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 75,
    "category": "Boolean Algebra & Gates",
    "question": "The expression A . 1 equals:",
    "options": [
      "A",
      "0",
      "1",
      "A'"
    ],
    "answerIndex": 0,
    "explanation": {
      "correctReason": "Option A (A) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (A) is the correct choice.",
        "B": "Option B (0) is incorrect for this specific question context.",
        "C": "Option C (1) is incorrect for this specific question context.",
        "D": "Option D (A') is incorrect for this specific question context."
      },
      "memoryTip": "Remember: The expression A . 1 equals: -> A.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 76,
    "category": "Boolean Algebra & Gates",
    "question": "DeMorgan's First Theorem is:",
    "options": [
      "(AB)' = AB",
      "(AB)' = A' + B'",
      "(A+B)' = A+B",
      "(AB)' = A'B'"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B ((AB)' = A' + B') is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A ((AB)' = AB) is incorrect for this specific question context.",
        "B": "Option B ((AB)' = A' + B') is the correct choice.",
        "C": "Option C ((A+B)' = A+B) is incorrect for this specific question context.",
        "D": "Option D ((AB)' = A'B') is incorrect for this specific question context."
      },
      "memoryTip": "Remember: DeMorgan's First Theorem is: -> (AB)' = A' + B'.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 77,
    "category": "Boolean Algebra & Gates",
    "question": "DeMorgan's Second Theorem is:",
    "options": [
      "(AB)' = A+B",
      "(A+B)' = A'B'",
      "(A+B)' = A'+B'",
      "(AB)' = AB"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B ((A+B)' = A'B') is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A ((AB)' = A+B) is incorrect for this specific question context.",
        "B": "Option B ((A+B)' = A'B') is the correct choice.",
        "C": "Option C ((A+B)' = A'+B') is incorrect for this specific question context.",
        "D": "Option D ((AB)' = AB) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: DeMorgan's Second Theorem is: -> (A+B)' = A'B'.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 78,
    "category": "Boolean Algebra & Gates",
    "question": "DeMorgan's theorems are mainly used for:",
    "options": [
      "Number conversion",
      "Boolean simplification",
      "Binary subtraction",
      "Memory design"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (Boolean simplification) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (Number conversion) is incorrect for this specific question context.",
        "B": "Option B (Boolean simplification) is the correct choice.",
        "C": "Option C (Binary subtraction) is incorrect for this specific question context.",
        "D": "Option D (Memory design) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: DeMorgan's theorems are mainly used for: -> Boolean simplification.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 79,
    "category": "Boolean Algebra & Gates",
    "question": "The complement of (A+B) is:",
    "options": [
      "A+B",
      "A'+B'",
      "A'B'",
      "AB"
    ],
    "answerIndex": 2,
    "explanation": {
      "correctReason": "Option C (A'B') is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (A+B) is incorrect for this specific question context.",
        "B": "Option B (A'+B') is incorrect for this specific question context.",
        "C": "Option C (A'B') is the correct choice.",
        "D": "Option D (AB) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: The complement of (A+B) is: -> A'B'.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 80,
    "category": "Boolean Algebra & Gates",
    "question": "The complement of AB is:",
    "options": [
      "AB",
      "A'+B'",
      "A'B'",
      "A+B"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (A'+B') is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (AB) is incorrect for this specific question context.",
        "B": "Option B (A'+B') is the correct choice.",
        "C": "Option C (A'B') is incorrect for this specific question context.",
        "D": "Option D (A+B) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: The complement of AB is: -> A'+B'.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 81,
    "category": "Boolean Algebra & Gates",
    "question": "Which gate produces HIGH only when all inputs are HIGH?",
    "options": [
      "AND",
      "OR",
      "NAND",
      "XOR"
    ],
    "answerIndex": 0,
    "explanation": {
      "correctReason": "Option A (AND) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (AND) is the correct choice.",
        "B": "Option B (OR) is incorrect for this specific question context.",
        "C": "Option C (NAND) is incorrect for this specific question context.",
        "D": "Option D (XOR) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Which gate produces HIGH only when all inputs are HIGH? -> AND.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 82,
    "category": "Boolean Algebra & Gates",
    "question": "Which gate produces LOW only when all inputs are HIGH?",
    "options": [
      "OR",
      "NAND",
      "NOR",
      "XOR"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (NAND) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (OR) is incorrect for this specific question context.",
        "B": "Option B (NAND) is the correct choice.",
        "C": "Option C (NOR) is incorrect for this specific question context.",
        "D": "Option D (XOR) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Which gate produces LOW only when all inputs are HIGH? -> NAND.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 83,
    "category": "Boolean Algebra & Gates",
    "question": "Which gate produces HIGH if at least one input is HIGH?",
    "options": [
      "AND",
      "OR",
      "NOR",
      "XNOR"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (OR) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (AND) is incorrect for this specific question context.",
        "B": "Option B (OR) is the correct choice.",
        "C": "Option C (NOR) is incorrect for this specific question context.",
        "D": "Option D (XNOR) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Which gate produces HIGH if at least one input is HIGH? -> OR.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 84,
    "category": "Boolean Algebra & Gates",
    "question": "Which gate is the complement of OR?",
    "options": [
      "NAND",
      "NOR",
      "XOR",
      "XNOR"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (NOR) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (NAND) is incorrect for this specific question context.",
        "B": "Option B (NOR) is the correct choice.",
        "C": "Option C (XOR) is incorrect for this specific question context.",
        "D": "Option D (XNOR) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Which gate is the complement of OR? -> NOR.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 85,
    "category": "Boolean Algebra & Gates",
    "question": "Which gate has only one input?",
    "options": [
      "AND",
      "OR",
      "NOT",
      "XOR"
    ],
    "answerIndex": 2,
    "explanation": {
      "correctReason": "Option C (NOT) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (AND) is incorrect for this specific question context.",
        "B": "Option B (OR) is incorrect for this specific question context.",
        "C": "Option C (NOT) is the correct choice.",
        "D": "Option D (XOR) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Which gate has only one input? -> NOT.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 86,
    "category": "Boolean Algebra & Gates",
    "question": "A NOT gate is also known as:",
    "options": [
      "Buffer",
      "Inverter",
      "Decoder",
      "Encoder"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (Inverter) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (Buffer) is incorrect for this specific question context.",
        "B": "Option B (Inverter) is the correct choice.",
        "C": "Option C (Decoder) is incorrect for this specific question context.",
        "D": "Option D (Encoder) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: A NOT gate is also known as: -> Inverter.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 87,
    "category": "Boolean Algebra & Gates",
    "question": "If the input to a NOT gate is 0, the output is:",
    "options": [
      "0",
      "1",
      "Undefined",
      "High impedance"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (1) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (0) is incorrect for this specific question context.",
        "B": "Option B (1) is the correct choice.",
        "C": "Option C (Undefined) is incorrect for this specific question context.",
        "D": "Option D (High impedance) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: If the input to a NOT gate is 0, the output is: -> 1.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 88,
    "category": "Boolean Algebra & Gates",
    "question": "If the input to a NOT gate is 1, the output is:",
    "options": [
      "0",
      "1",
      "Undefined",
      "Floating"
    ],
    "answerIndex": 0,
    "explanation": {
      "correctReason": "Option A (0) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (0) is the correct choice.",
        "B": "Option B (1) is incorrect for this specific question context.",
        "C": "Option C (Undefined) is incorrect for this specific question context.",
        "D": "Option D (Floating) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: If the input to a NOT gate is 1, the output is: -> 0.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 89,
    "category": "Boolean Algebra & Gates",
    "question": "Which gate produces HIGH only when inputs are different?",
    "options": [
      "XNOR",
      "NAND",
      "XOR",
      "NOR"
    ],
    "answerIndex": 2,
    "explanation": {
      "correctReason": "Option C (XOR) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (XNOR) is incorrect for this specific question context.",
        "B": "Option B (NAND) is incorrect for this specific question context.",
        "C": "Option C (XOR) is the correct choice.",
        "D": "Option D (NOR) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Which gate produces HIGH only when inputs are different? -> XOR.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 90,
    "category": "Boolean Algebra & Gates",
    "question": "XOR gate is commonly used for:",
    "options": [
      "Data storage",
      "Multiplication",
      "Comparison of bits",
      "Clock generation"
    ],
    "answerIndex": 2,
    "explanation": {
      "correctReason": "Option C (Comparison of bits) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (Data storage) is incorrect for this specific question context.",
        "B": "Option B (Multiplication) is incorrect for this specific question context.",
        "C": "Option C (Comparison of bits) is the correct choice.",
        "D": "Option D (Clock generation) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: XOR gate is commonly used for: -> Comparison of bits.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 91,
    "category": "Boolean Algebra & Gates",
    "question": "Which gate produces HIGH when both inputs are the same?",
    "options": [
      "XOR",
      "XNOR",
      "NAND",
      "NOR"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (XNOR) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (XOR) is incorrect for this specific question context.",
        "B": "Option B (XNOR) is the correct choice.",
        "C": "Option C (NAND) is incorrect for this specific question context.",
        "D": "Option D (NOR) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Which gate produces HIGH when both inputs are the same? -> XNOR.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 92,
    "category": "Boolean Algebra & Gates",
    "question": "The output of AND gate for inputs (1,1) is:",
    "options": [
      "0",
      "1",
      "Depends on clock",
      "Undefined"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (1) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (0) is incorrect for this specific question context.",
        "B": "Option B (1) is the correct choice.",
        "C": "Option C (Depends on clock) is incorrect for this specific question context.",
        "D": "Option D (Undefined) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: The output of AND gate for inputs (1,1) is: -> 1.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 93,
    "category": "Boolean Algebra & Gates",
    "question": "The output of OR gate for inputs (0,1) is:",
    "options": [
      "0",
      "1",
      "Undefined",
      "Depends on carry"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (1) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (0) is incorrect for this specific question context.",
        "B": "Option B (1) is the correct choice.",
        "C": "Option C (Undefined) is incorrect for this specific question context.",
        "D": "Option D (Depends on carry) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: The output of OR gate for inputs (0,1) is: -> 1.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 94,
    "category": "Boolean Algebra & Gates",
    "question": "The output of NAND gate for inputs (1,1) is:",
    "options": [
      "0",
      "1",
      "Undefined",
      "High impedance"
    ],
    "answerIndex": 0,
    "explanation": {
      "correctReason": "Option A (0) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (0) is the correct choice.",
        "B": "Option B (1) is incorrect for this specific question context.",
        "C": "Option C (Undefined) is incorrect for this specific question context.",
        "D": "Option D (High impedance) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: The output of NAND gate for inputs (1,1) is: -> 0.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 95,
    "category": "Boolean Algebra & Gates",
    "question": "The output of NOR gate for inputs (0,0) is:",
    "options": [
      "0",
      "1",
      "Depends on clock",
      "Undefined"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (1) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (0) is incorrect for this specific question context.",
        "B": "Option B (1) is the correct choice.",
        "C": "Option C (Depends on clock) is incorrect for this specific question context.",
        "D": "Option D (Undefined) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: The output of NOR gate for inputs (0,0) is: -> 1.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 96,
    "category": "Boolean Algebra & Gates",
    "question": "Which gate is called a universal gate?",
    "options": [
      "AND only",
      "OR only",
      "NAND",
      "XOR"
    ],
    "answerIndex": 2,
    "explanation": {
      "correctReason": "Option C (NAND) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (AND only) is incorrect for this specific question context.",
        "B": "Option B (OR only) is incorrect for this specific question context.",
        "C": "Option C (NAND) is the correct choice.",
        "D": "Option D (XOR) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Which gate is called a universal gate? -> NAND.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 97,
    "category": "Boolean Algebra & Gates",
    "question": "Which other gate is also a universal gate?",
    "options": [
      "XOR",
      "NOR",
      "AND",
      "OR"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (NOR) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (XOR) is incorrect for this specific question context.",
        "B": "Option B (NOR) is the correct choice.",
        "C": "Option C (AND) is incorrect for this specific question context.",
        "D": "Option D (OR) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Which other gate is also a universal gate? -> NOR.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 98,
    "category": "Boolean Algebra & Gates",
    "question": "Universal gates can be used to implement:",
    "options": [
      "Only AND gates",
      "Only OR gates",
      "Any Boolean function",
      "Only NOT gates"
    ],
    "answerIndex": 2,
    "explanation": {
      "correctReason": "Option C (Any Boolean function) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (Only AND gates) is incorrect for this specific question context.",
        "B": "Option B (Only OR gates) is incorrect for this specific question context.",
        "C": "Option C (Any Boolean function) is the correct choice.",
        "D": "Option D (Only NOT gates) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: Universal gates can be used to implement: -> Any Boolean function.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 99,
    "category": "Boolean Algebra & Gates",
    "question": "How many NAND gates are required to implement a NOT gate?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answerIndex": 0,
    "explanation": {
      "correctReason": "Option A (1) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (1) is the correct choice.",
        "B": "Option B (2) is incorrect for this specific question context.",
        "C": "Option C (3) is incorrect for this specific question context.",
        "D": "Option D (4) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: How many NAND gates are required to implement a NOT gate? -> 1.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 100,
    "category": "Boolean Algebra & Gates",
    "question": "How many NAND gates are required to implement an AND gate?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answerIndex": 1,
    "explanation": {
      "correctReason": "Option B (2) is correct because it accurately satisfies the principles of Boolean Algebra & Gates.",
      "optionReasons": {
        "A": "Option A (1) is incorrect for this specific question context.",
        "B": "Option B (2) is the correct choice.",
        "C": "Option C (3) is incorrect for this specific question context.",
        "D": "Option D (4) is incorrect for this specific question context."
      },
      "memoryTip": "Remember: How many NAND gates are required to implement an AND gate? -> 2.",
      "examTrap": "BPSC examiners frequently test Boolean Algebra & Gates definitions; pay close attention to exact bit values and operator properties.",
      "conceptSummary": "Boolean Algebra & Gates forms a core foundation in Digital Logic Design and computer arithmetic.",
      "relatedConcepts": [
        "Boolean Algebra & Gates",
        "Digital Logic",
        "BPSC CS"
      ],
      "difficulty": "Medium",
      "bpscImportance": "High"
    }
  },
  {
    "id": 101,
    "category": "K-Maps & Simplification",
    "question": "The primary purpose of a Karnaugh Map (K-map) is:",
    "options": [
      "Convert decimal to binary",
      "Design sequential circuits",
      "Simplify Boolean expressions",
      "Perform binary multiplication"
    ],
    "answerIndex": 2,
    "explanation": "K-maps provide a graphical tool to minimize Boolean functions to minimal SOP/POS form."
  },
  {
    "id": 102,
    "category": "K-Maps & Simplification",
    "question": "Karnaugh Map is an alternative to:",
    "options": [
      "Binary addition",
      "Boolean algebra simplification",
      "Decimal conversion",
      "Data encoding"
    ],
    "answerIndex": 1,
    "explanation": "K-maps visually simplify Boolean logic without algebraic manipulation."
  },
  {
    "id": 103,
    "category": "K-Maps & Simplification",
    "question": "A K-map helps reduce:",
    "options": [
      "Memory size",
      "Number of logic gates",
      "Clock frequency",
      "CPU speed"
    ],
    "answerIndex": 1,
    "explanation": "Minimizing Boolean functions reduces gate count and circuit complexity."
  },
  {
    "id": 104,
    "category": "K-Maps & Simplification",
    "question": "Simplifying a Boolean expression mainly reduces:",
    "options": [
      "Number of inputs",
      "Hardware complexity",
      "Number of outputs",
      "Number of variables"
    ],
    "answerIndex": 1,
    "explanation": "Fewer terms and literals directly translate to lower hardware cost and chip area."
  },
  {
    "id": 105,
    "category": "K-Maps & Simplification",
    "question": "A simplified logic circuit generally has:",
    "options": [
      "More gates",
      "More wiring",
      "Fewer gates",
      "More flip-flops"
    ],
    "answerIndex": 2,
    "explanation": "Logic minimization produces circuits with fewer gates and connections."
  },
  {
    "id": 106,
    "category": "K-Maps & Simplification",
    "question": "A 2-variable K-map contains:",
    "options": [
      "2 cells",
      "4 cells",
      "8 cells",
      "16 cells"
    ],
    "answerIndex": 1,
    "explanation": "2^2 = 4 cells."
  },
  {
    "id": 107,
    "category": "K-Maps & Simplification",
    "question": "A 3-variable K-map contains:",
    "options": [
      "4 cells",
      "8 cells",
      "12 cells",
      "16 cells"
    ],
    "answerIndex": 1,
    "explanation": "2^3 = 8 cells."
  },
  {
    "id": 108,
    "category": "K-Maps & Simplification",
    "question": "A 4-variable K-map contains:",
    "options": [
      "8 cells",
      "12 cells",
      "16 cells",
      "32 cells"
    ],
    "answerIndex": 2,
    "explanation": "2^4 = 16 cells."
  },
  {
    "id": 109,
    "category": "K-Maps & Simplification",
    "question": "A 5-variable K-map contains:",
    "options": [
      "16 cells",
      "32 cells",
      "64 cells",
      "8 cells"
    ],
    "answerIndex": 1,
    "explanation": "2^5 = 32 cells."
  },
  {
    "id": 110,
    "category": "K-Maps & Simplification",
    "question": "The number of cells in an n-variable K-map is:",
    "options": [
      "n",
      "n^2",
      "2^n",
      "n + 2"
    ],
    "answerIndex": 2,
    "explanation": "An n-variable K-map has 2^n grid cells."
  },
  {
    "id": 111,
    "category": "K-Maps & Simplification",
    "question": "The rows and columns of a K-map are arranged using:",
    "options": [
      "Binary code",
      "ASCII",
      "Gray code",
      "BCD"
    ],
    "answerIndex": 2,
    "explanation": "Gray code ensures adjacent cells differ by only 1 bit."
  },
  {
    "id": 112,
    "category": "K-Maps & Simplification",
    "question": "Gray code is used in K-maps because:",
    "options": [
      "It is easier to remember",
      "Adjacent cells differ by only one bit",
      "It uses fewer bits",
      "It is faster to compute"
    ],
    "answerIndex": 1,
    "explanation": "Unit distance property allows visual grouping of adjacent 1s."
  },
  {
    "id": 113,
    "category": "K-Maps & Simplification",
    "question": "In a K-map, adjacent cells differ in:",
    "options": [
      "Only one variable",
      "Two variables",
      "Three variables",
      "All variables"
    ],
    "answerIndex": 0,
    "explanation": "Geometrically adjacent K-map cells differ in exactly one binary variable."
  },
  {
    "id": 114,
    "category": "K-Maps & Simplification",
    "question": "Which sequence follows Gray code?",
    "options": [
      "00, 01, 10, 11",
      "00, 01, 11, 10",
      "00, 10, 11, 01",
      "01, 10, 00, 11"
    ],
    "answerIndex": 1,
    "explanation": "00 -> 01 -> 11 -> 10 changes 1 bit at a time."
  },
  {
    "id": 115,
    "category": "K-Maps & Simplification",
    "question": "Gray code is also widely used in:",
    "options": [
      "RAM",
      "Rotary encoders",
      "ALU",
      "Registers"
    ],
    "answerIndex": 1,
    "explanation": "Rotary encoders use Gray code to prevent erroneous multi-bit transition readouts."
  },
  {
    "id": 116,
    "category": "K-Maps & Simplification",
    "question": "In K-map simplification, groups must contain:",
    "options": [
      "Any number of cells",
      "Powers of two",
      "Prime numbers",
      "Odd numbers only"
    ],
    "answerIndex": 1,
    "explanation": "Groups must have 1, 2, 4, 8, 16, ... (2^k) cells."
  },
  {
    "id": 117,
    "category": "K-Maps & Simplification",
    "question": "Which of the following is NOT a valid group size?",
    "options": [
      "2",
      "4",
      "8",
      "6"
    ],
    "answerIndex": 3,
    "explanation": "6 is not a power of 2."
  },
  {
    "id": 118,
    "category": "K-Maps & Simplification",
    "question": "Which group size is valid?",
    "options": [
      "3",
      "5",
      "8",
      "7"
    ],
    "answerIndex": 2,
    "explanation": "8 is 2^3, a valid group size."
  },
  {
    "id": 119,
    "category": "K-Maps & Simplification",
    "question": "The largest possible group should be selected because it:",
    "options": [
      "Increases variables",
      "Produces simpler expressions",
      "Increases hardware",
      "Increases outputs"
    ],
    "answerIndex": 1,
    "explanation": "Larger groups eliminate more variables, producing simpler product terms."
  },
  {
    "id": 120,
    "category": "K-Maps & Simplification",
    "question": "K-map grouping aims to eliminate:",
    "options": [
      "Variables",
      "Outputs",
      "Gates",
      "Inputs"
    ],
    "answerIndex": 0,
    "explanation": "Combining adjacent minterms cancels out variables that appear in true and complemented forms."
  },
  {
    "id": 121,
    "category": "K-Maps & Simplification",
    "question": "Larger groups in a K-map produce:",
    "options": [
      "More literals",
      "Fewer literals",
      "More gates",
      "More outputs"
    ],
    "answerIndex": 1,
    "explanation": "Grouping 2^k cells eliminates k variables, yielding fewer literals per term."
  },
  {
    "id": 122,
    "category": "K-Maps & Simplification",
    "question": "Overlapping groups in a K-map are:",
    "options": [
      "Not allowed",
      "Allowed when beneficial",
      "Required",
      "Allowed only in 2-variable maps"
    ],
    "answerIndex": 1,
    "explanation": "Minterms can be shared across groups if it helps form larger power-of-2 groups."
  },
  {
    "id": 123,
    "category": "K-Maps & Simplification",
    "question": "Corner cells in a K-map are:",
    "options": [
      "Never adjacent",
      "Adjacent to each other",
      "Ignored",
      "Invalid"
    ],
    "answerIndex": 1,
    "explanation": "K-map edges wrap around, so all 4 corners are adjacent to each other."
  },
  {
    "id": 124,
    "category": "K-Maps & Simplification",
    "question": "Leftmost and rightmost cells in the same row are:",
    "options": [
      "Different",
      "Adjacent",
      "Never grouped",
      "Opposite"
    ],
    "answerIndex": 1,
    "explanation": "K-map grid wraps horizontally, making end-of-row cells adjacent."
  },
  {
    "id": 125,
    "category": "K-Maps & Simplification",
    "question": "Top and bottom cells in the same column are:",
    "options": [
      "Separate",
      "Adjacent",
      "Invalid",
      "Complementary"
    ],
    "answerIndex": 1,
    "explanation": "K-map grid wraps vertically, making top and bottom column cells adjacent."
  },
  {
    "id": 126,
    "category": "K-Maps & Simplification",
    "question": "SOP stands for:",
    "options": [
      "Sum of Products",
      "System of Products",
      "Standard Output Product",
      "Signal Output Process"
    ],
    "answerIndex": 0,
    "explanation": "SOP = Sum of Products (OR of AND terms)."
  },
  {
    "id": 127,
    "category": "K-Maps & Simplification",
    "question": "POS stands for:",
    "options": [
      "Product of Signals",
      "Product of Sums",
      "Process of Sum",
      "Power of Sum"
    ],
    "answerIndex": 1,
    "explanation": "POS = Product of Sums (AND of OR terms)."
  },
  {
    "id": 128,
    "category": "K-Maps & Simplification",
    "question": "SOP expression is formed using:",
    "options": [
      "Maxterms",
      "Minterms",
      "Variables only",
      "Don't cares"
    ],
    "answerIndex": 1,
    "explanation": "SOP expressions sum (OR) minterm product terms where output = 1."
  },
  {
    "id": 129,
    "category": "K-Maps & Simplification",
    "question": "POS expression is formed using:",
    "options": [
      "Minterms",
      "Maxterms",
      "Variables only",
      "Complements only"
    ],
    "answerIndex": 1,
    "explanation": "POS expressions multiply (AND) maxterm sum terms where output = 0."
  },
  {
    "id": 130,
    "category": "K-Maps & Simplification",
    "question": "In SOP, grouping is performed for:",
    "options": [
      "0's",
      "1's",
      "X's only",
      "All cells"
    ],
    "answerIndex": 1,
    "explanation": "SOP groups 1-cells in the K-map."
  },
  {
    "id": 131,
    "category": "K-Maps & Simplification",
    "question": "In POS, grouping is performed for:",
    "options": [
      "0's",
      "1's",
      "X's only",
      "Adjacent variables"
    ],
    "answerIndex": 0,
    "explanation": "POS groups 0-cells in the K-map."
  },
  {
    "id": 132,
    "category": "K-Maps & Simplification",
    "question": "Don't-care conditions are represented by:",
    "options": [
      "Y",
      "Z",
      "X",
      "D"
    ],
    "answerIndex": 2,
    "explanation": "Don't-care cells are marked with 'X' or 'd'."
  },
  {
    "id": 133,
    "category": "K-Maps & Simplification",
    "question": "A don't-care condition means:",
    "options": [
      "Output must be 1",
      "Output must be 0",
      "Output can be either 0 or 1",
      "Output is undefined forever"
    ],
    "answerIndex": 2,
    "explanation": "Output value does not matter for that input combination and can be chosen as 0 or 1."
  },
  {
    "id": 134,
    "category": "K-Maps & Simplification",
    "question": "Don't-care conditions are used to:",
    "options": [
      "Increase complexity",
      "Simplify Boolean expressions",
      "Increase variables",
      "Remove outputs"
    ],
    "answerIndex": 1,
    "explanation": "Don't-cares can be included in groups to form larger groups and simpler terms."
  },
  {
    "id": 135,
    "category": "K-Maps & Simplification",
    "question": "A don't-care cell may be:",
    "options": [
      "Always ignored",
      "Included if it helps simplification",
      "Used only in POS",
      "Used only in SOP"
    ],
    "answerIndex": 1,
    "explanation": "Include 'X' as 1 (or 0) only if it helps enlarge a group."
  },
  {
    "id": 136,
    "category": "K-Maps & Simplification",
    "question": "The expression A + A simplifies to:",
    "options": [
      "A",
      "1",
      "0",
      "A'"
    ],
    "answerIndex": 0,
    "explanation": "Idempotent Law: A + A = A."
  },
  {
    "id": 137,
    "category": "K-Maps & Simplification",
    "question": "The expression A . A simplifies to:",
    "options": [
      "A",
      "0",
      "1",
      "A'"
    ],
    "answerIndex": 0,
    "explanation": "Idempotent Law: A . A = A."
  },
  {
    "id": 138,
    "category": "K-Maps & Simplification",
    "question": "The expression A + A' equals:",
    "options": [
      "A",
      "1",
      "0",
      "A'"
    ],
    "answerIndex": 1,
    "explanation": "Complement Law: A + A' = 1."
  },
  {
    "id": 139,
    "category": "K-Maps & Simplification",
    "question": "The expression A . A' equals:",
    "options": [
      "A",
      "1",
      "0",
      "A'"
    ],
    "answerIndex": 2,
    "explanation": "Complement Law: A . A' = 0."
  },
  {
    "id": 140,
    "category": "K-Maps & Simplification",
    "question": "The expression A + AB simplifies to:",
    "options": [
      "A",
      "AB",
      "B",
      "1"
    ],
    "answerIndex": 0,
    "explanation": "Absorption Law: A + AB = A."
  },
  {
    "id": 141,
    "category": "K-Maps & Simplification",
    "question": "The expression A(A+B) simplifies to:",
    "options": [
      "A",
      "AB",
      "A+B",
      "B"
    ],
    "answerIndex": 0,
    "explanation": "Absorption Law: A(A+B) = A."
  },
  {
    "id": 142,
    "category": "K-Maps & Simplification",
    "question": "Which law is applied in A + AB = A?",
    "options": [
      "Identity",
      "Absorption",
      "Commutative",
      "DeMorgan"
    ],
    "answerIndex": 1,
    "explanation": "Absorption Law."
  },
  {
    "id": 143,
    "category": "K-Maps & Simplification",
    "question": "Which law is applied in A(A+B)=A?",
    "options": [
      "Identity",
      "Absorption",
      "Associative",
      "Null"
    ],
    "answerIndex": 1,
    "explanation": "Absorption Law."
  },
  {
    "id": 144,
    "category": "K-Maps & Simplification",
    "question": "Simplifying Boolean expressions mainly reduces:",
    "options": [
      "Voltage",
      "Current",
      "Hardware cost",
      "Frequency"
    ],
    "answerIndex": 2,
    "explanation": "Fewer gates and interconnections lower hardware production cost."
  },
  {
    "id": 145,
    "category": "K-Maps & Simplification",
    "question": "Which method provides a graphical technique for Boolean simplification?",
    "options": [
      "Truth Table",
      "Flowchart",
      "Karnaugh Map",
      "Binary Tree"
    ],
    "answerIndex": 2,
    "explanation": "Karnaugh Map is a visual array technique."
  },
  {
    "id": 146,
    "category": "K-Maps & Simplification",
    "question": "K-map is most practical for simplifying functions with:",
    "options": [
      "10-15 variables",
      "2-6 variables",
      "More than 20 variables",
      "Unlimited variables"
    ],
    "answerIndex": 1,
    "explanation": "K-maps are practical up to 4-6 variables; larger inputs use Quine-McCluskey or CAD algorithms."
  },
  {
    "id": 147,
    "category": "K-Maps & Simplification",
    "question": "Which of the following cannot be a valid K-map group?",
    "options": [
      "1 cell",
      "2 cells",
      "4 cells",
      "7 cells"
    ],
    "answerIndex": 3,
    "explanation": "7 is not a power of 2."
  },
  {
    "id": 148,
    "category": "K-Maps & Simplification",
    "question": "If no adjacent 1's exist in a K-map, each 1 forms:",
    "options": [
      "Pair",
      "Quad",
      "Single-cell group",
      "Octet"
    ],
    "answerIndex": 2,
    "explanation": "Isolated 1s cannot be combined and remain single-cell 1-groups."
  },
  {
    "id": 149,
    "category": "K-Maps & Simplification",
    "question": "Which of the following is TRUE?",
    "options": [
      "K-map increases circuit complexity.",
      "K-map minimizes the number of logic gates.",
      "K-map is used only for sequential circuits.",
      "K-map converts decimal numbers."
    ],
    "answerIndex": 1,
    "explanation": "K-map minimization yields optimal logic expressions with minimal gate count."
  },
  {
    "id": 150,
    "category": "K-Maps & Simplification",
    "question": "Which statement about Karnaugh Maps is correct?",
    "options": [
      "Adjacent cells differ in two variables.",
      "Groups can contain any number of cells.",
      "SOP groups 0's.",
      "Gray code ordering ensures adjacent cells differ by only one bit."
    ],
    "answerIndex": 3,
    "explanation": "Gray code ordering is essential for K-map cell adjacency."
  },
  {
    "id": 151,
    "category": "Combinational Circuits",
    "question": "A half adder is used to add:",
    "options": [
      "Two multi-bit numbers",
      "Two single-bit binary numbers",
      "Three binary bits",
      "Four binary bits"
    ],
    "answerIndex": 1,
    "explanation": "A half adder adds two 1-bit inputs A and B."
  },
  {
    "id": 152,
    "category": "Combinational Circuits",
    "question": "A half adder has:",
    "options": [
      "1 input and 2 outputs",
      "2 inputs and 2 outputs",
      "3 inputs and 1 output",
      "4 inputs and 2 outputs"
    ],
    "answerIndex": 1,
    "explanation": "2 inputs (A, B) and 2 outputs (Sum, Carry)."
  },
  {
    "id": 153,
    "category": "Combinational Circuits",
    "question": "The outputs of a half adder are:",
    "options": [
      "Sum and Borrow",
      "Sum and Carry",
      "Carry and Difference",
      "Difference and Borrow"
    ],
    "answerIndex": 1,
    "explanation": "Half adder produces Sum (S) and Carry (C)."
  },
  {
    "id": 154,
    "category": "Combinational Circuits",
    "question": "The Sum output of a half adder is produced by:",
    "options": [
      "AND gate",
      "OR gate",
      "XOR gate",
      "NAND gate"
    ],
    "answerIndex": 2,
    "explanation": "Sum = A XOR B."
  },
  {
    "id": 155,
    "category": "Combinational Circuits",
    "question": "The Carry output of a half adder is produced by:",
    "options": [
      "AND gate",
      "XOR gate",
      "OR gate",
      "NOR gate"
    ],
    "answerIndex": 0,
    "explanation": "Carry = A AND B."
  },
  {
    "id": 156,
    "category": "Combinational Circuits",
    "question": "A half adder cannot add:",
    "options": [
      "Two binary bits",
      "A carry input",
      "Logic 0",
      "Logic 1"
    ],
    "answerIndex": 1,
    "explanation": "Half adder lacks an input for a Carry-in from a previous stage."
  },
  {
    "id": 157,
    "category": "Combinational Circuits",
    "question": "Which expression represents the Sum output of a half adder?",
    "options": [
      "A + B",
      "A XOR B",
      "AB",
      "A'B"
    ],
    "answerIndex": 1,
    "explanation": "Sum S = A XOR B."
  },
  {
    "id": 158,
    "category": "Combinational Circuits",
    "question": "Which expression represents the Carry output of a half adder?",
    "options": [
      "A + B",
      "A XOR B",
      "AB",
      "A' + B"
    ],
    "answerIndex": 2,
    "explanation": "Carry C = AB."
  },
  {
    "id": 159,
    "category": "Combinational Circuits",
    "question": "A full adder adds:",
    "options": [
      "Two binary bits only",
      "Two binary bits and a carry input",
      "Three decimal digits",
      "Four binary bits"
    ],
    "answerIndex": 1,
    "explanation": "Full adder adds 3 bits: A, B, and Cin."
  },
  {
    "id": 160,
    "category": "Combinational Circuits",
    "question": "A full adder has:",
    "options": [
      "2 inputs",
      "3 inputs",
      "4 inputs",
      "5 inputs"
    ],
    "answerIndex": 1,
    "explanation": "3 inputs (A, B, Cin)."
  },
  {
    "id": 161,
    "category": "Combinational Circuits",
    "question": "A full adder has:",
    "options": [
      "One output",
      "Two outputs",
      "Three outputs",
      "Four outputs"
    ],
    "answerIndex": 1,
    "explanation": "2 outputs (Sum and Cout)."
  },
  {
    "id": 162,
    "category": "Combinational Circuits",
    "question": "The outputs of a full adder are:",
    "options": [
      "Sum and Borrow",
      "Sum and Carry",
      "Difference and Borrow",
      "Product and Carry"
    ],
    "answerIndex": 1,
    "explanation": "Full adder generates Sum and Carry-out."
  },
  {
    "id": 163,
    "category": "Combinational Circuits",
    "question": "A full adder can be implemented using:",
    "options": [
      "One half adder",
      "Two half adders and one OR gate",
      "Two XOR gates only",
      "One decoder"
    ],
    "answerIndex": 1,
    "explanation": "2 Half Adders + 1 OR gate construct a complete Full Adder."
  },
  {
    "id": 164,
    "category": "Combinational Circuits",
    "question": "Which circuit is more powerful?",
    "options": [
      "Half adder",
      "Full adder",
      "Decoder",
      "Encoder"
    ],
    "answerIndex": 1,
    "explanation": "Full adder accommodates previous stage carry inputs."
  },
  {
    "id": 165,
    "category": "Combinational Circuits",
    "question": "The carry input of a full adder is denoted by:",
    "options": [
      "Cout",
      "S",
      "Cin",
      "D"
    ],
    "answerIndex": 2,
    "explanation": "Cin denotes input carry."
  },
  {
    "id": 166,
    "category": "Combinational Circuits",
    "question": "The carry output of a full adder is denoted by:",
    "options": [
      "Cin",
      "Cout",
      "Sum",
      "D"
    ],
    "answerIndex": 1,
    "explanation": "Cout denotes output carry."
  },
  {
    "id": 167,
    "category": "Combinational Circuits",
    "question": "Which circuit is used to build multi-bit binary adders?",
    "options": [
      "Half adders only",
      "Full adders",
      "Multiplexers",
      "Decoders"
    ],
    "answerIndex": 1,
    "explanation": "Cascading full adders constructs parallel multi-bit adders (e.g. 4-bit ripple carry adder)."
  },
  {
    "id": 168,
    "category": "Combinational Circuits",
    "question": "A half subtractor performs subtraction of:",
    "options": [
      "Three bits",
      "Two single-bit binary numbers",
      "Four bits",
      "Decimal numbers"
    ],
    "answerIndex": 1,
    "explanation": "Half subtractor subtracts bit B from bit A."
  },
  {
    "id": 169,
    "category": "Combinational Circuits",
    "question": "The outputs of a half subtractor are:",
    "options": [
      "Sum and Carry",
      "Difference and Borrow",
      "Carry and Borrow",
      "Product and Difference"
    ],
    "answerIndex": 1,
    "explanation": "Difference D = A XOR B, Borrow = A'B."
  },
  {
    "id": 170,
    "category": "Combinational Circuits",
    "question": "A full subtractor has:",
    "options": [
      "Two inputs",
      "Three inputs",
      "Four inputs",
      "One input"
    ],
    "answerIndex": 1,
    "explanation": "3 inputs (A, B, Bin)."
  },
  {
    "id": 171,
    "category": "Combinational Circuits",
    "question": "A full subtractor produces:",
    "options": [
      "Sum and Carry",
      "Difference and Borrow",
      "Carry only",
      "Difference only"
    ],
    "answerIndex": 1,
    "explanation": "Full subtractor generates Difference and Borrow-out."
  },
  {
    "id": 172,
    "category": "Combinational Circuits",
    "question": "A multiplexer is also called:",
    "options": [
      "Distributor",
      "Data Selector",
      "Data Generator",
      "Data Encoder"
    ],
    "answerIndex": 1,
    "explanation": "A Multiplexer (MUX) selects one of several input lines to route to a single output."
  },
  {
    "id": 173,
    "category": "Combinational Circuits",
    "question": "A multiplexer selects:",
    "options": [
      "One output from many outputs",
      "One input from many inputs",
      "Many inputs simultaneously",
      "Two outputs"
    ],
    "answerIndex": 1,
    "explanation": "MUX channels one selected input signal among 2^n inputs to its 1 output."
  },
  {
    "id": 174,
    "category": "Combinational Circuits",
    "question": "A 4-to-1 multiplexer has:",
    "options": [
      "1 input",
      "4 inputs",
      "8 inputs",
      "16 inputs"
    ],
    "answerIndex": 1,
    "explanation": "4 data inputs."
  },
  {
    "id": 175,
    "category": "Combinational Circuits",
    "question": "A 4-to-1 multiplexer requires:",
    "options": [
      "1 select line",
      "2 select lines",
      "3 select lines",
      "4 select lines"
    ],
    "answerIndex": 1,
    "explanation": "2^2 = 4 inputs, so 2 select lines."
  },
  {
    "id": 176,
    "category": "Combinational Circuits",
    "question": "An 8-to-1 multiplexer requires:",
    "options": [
      "2 select lines",
      "3 select lines",
      "4 select lines",
      "5 select lines"
    ],
    "answerIndex": 1,
    "explanation": "2^3 = 8 inputs, so 3 select lines."
  },
  {
    "id": 177,
    "category": "Combinational Circuits",
    "question": "A 16-to-1 multiplexer requires:",
    "options": [
      "2 select lines",
      "3 select lines",
      "4 select lines",
      "5 select lines"
    ],
    "answerIndex": 2,
    "explanation": "2^4 = 16 inputs, so 4 select lines."
  },
  {
    "id": 178,
    "category": "Combinational Circuits",
    "question": "The number of select lines required for a multiplexer with 2^n inputs is:",
    "options": [
      "2n",
      "n^2",
      "n",
      "n+1"
    ],
    "answerIndex": 2,
    "explanation": "2^n inputs require n select lines."
  },
  {
    "id": 179,
    "category": "Combinational Circuits",
    "question": "A multiplexer has:",
    "options": [
      "Many outputs",
      "One output",
      "No output",
      "Two outputs"
    ],
    "answerIndex": 1,
    "explanation": "MUX always has exactly 1 output line."
  },
  {
    "id": 180,
    "category": "Combinational Circuits",
    "question": "Which combinational circuit selects one of many inputs and sends it to one output?",
    "options": [
      "Decoder",
      "Encoder",
      "Multiplexer",
      "Comparator"
    ],
    "answerIndex": 2,
    "explanation": "Multiplexer."
  },
  {
    "id": 181,
    "category": "Combinational Circuits",
    "question": "A demultiplexer is also known as:",
    "options": [
      "Data Selector",
      "Data Distributor",
      "Data Comparator",
      "Data Encoder"
    ],
    "answerIndex": 1,
    "explanation": "A Demultiplexer (DEMUX) distributes 1 input line to one of 2^n outputs."
  },
  {
    "id": 182,
    "category": "Combinational Circuits",
    "question": "A demultiplexer transfers:",
    "options": [
      "Many inputs to one output",
      "One input to many outputs",
      "Two inputs to two outputs",
      "Many inputs to many outputs"
    ],
    "answerIndex": 1,
    "explanation": "1 input -> selected 1-of-N outputs."
  },
  {
    "id": 183,
    "category": "Combinational Circuits",
    "question": "A demultiplexer performs the opposite function of a:",
    "options": [
      "Decoder",
      "Encoder",
      "Multiplexer",
      "Comparator"
    ],
    "answerIndex": 2,
    "explanation": "DEMUX is the inverse operation of MUX."
  },
  {
    "id": 184,
    "category": "Combinational Circuits",
    "question": "A 1-to-8 demultiplexer has:",
    "options": [
      "8 inputs",
      "8 outputs",
      "16 outputs",
      "2 outputs"
    ],
    "answerIndex": 1,
    "explanation": "1 data input and 8 data outputs."
  },
  {
    "id": 185,
    "category": "Combinational Circuits",
    "question": "Select lines in a demultiplexer are used to:",
    "options": [
      "Increase inputs",
      "Select the output line",
      "Increase outputs",
      "Store data"
    ],
    "answerIndex": 1,
    "explanation": "Select lines determine which output line receives the input data."
  },
  {
    "id": 186,
    "category": "Combinational Circuits",
    "question": "An encoder converts:",
    "options": [
      "Binary to decimal",
      "Many input lines into a binary code",
      "Binary to Gray",
      "Gray to Binary"
    ],
    "answerIndex": 1,
    "explanation": "Encoder compresses 2^n active input lines into an n-bit binary code."
  },
  {
    "id": 187,
    "category": "Combinational Circuits",
    "question": "A basic encoder has:",
    "options": [
      "More outputs than inputs",
      "More inputs than outputs",
      "Equal inputs and outputs",
      "One input only"
    ],
    "answerIndex": 1,
    "explanation": "2^n input lines and n output lines (Inputs > Outputs)."
  },
  {
    "id": 188,
    "category": "Combinational Circuits",
    "question": "A 4-to-2 encoder has:",
    "options": [
      "2 inputs and 4 outputs",
      "4 inputs and 2 outputs",
      "4 inputs and 4 outputs",
      "2 inputs and 2 outputs"
    ],
    "answerIndex": 1,
    "explanation": "4 inputs, 2 binary outputs."
  },
  {
    "id": 189,
    "category": "Combinational Circuits",
    "question": "The output of an encoder is generally:",
    "options": [
      "Decimal",
      "Binary",
      "Gray",
      "ASCII"
    ],
    "answerIndex": 1,
    "explanation": "Coded binary output."
  },
  {
    "id": 190,
    "category": "Combinational Circuits",
    "question": "Which device converts active input lines into coded binary output?",
    "options": [
      "Decoder",
      "Encoder",
      "Comparator",
      "Multiplexer"
    ],
    "answerIndex": 1,
    "explanation": "Encoder."
  },
  {
    "id": 191,
    "category": "Combinational Circuits",
    "question": "A decoder converts:",
    "options": [
      "Decimal into binary",
      "Binary input into one active output",
      "Gray into binary",
      "ASCII into binary"
    ],
    "answerIndex": 1,
    "explanation": "Decoder takes n-bit binary code and activates 1 of 2^n output lines."
  },
  {
    "id": 192,
    "category": "Combinational Circuits",
    "question": "A decoder generally has:",
    "options": [
      "More outputs than inputs",
      "More inputs than outputs",
      "Equal inputs and outputs",
      "One output only"
    ],
    "answerIndex": 0,
    "explanation": "n inputs and 2^n outputs (Outputs > Inputs)."
  },
  {
    "id": 193,
    "category": "Combinational Circuits",
    "question": "A 2-to-4 decoder has:",
    "options": [
      "4 inputs",
      "2 inputs",
      "8 inputs",
      "16 inputs"
    ],
    "answerIndex": 1,
    "explanation": "2 binary inputs and 4 outputs."
  },
  {
    "id": 194,
    "category": "Combinational Circuits",
    "question": "A 3-to-8 decoder has:",
    "options": [
      "8 inputs",
      "3 inputs",
      "5 inputs",
      "16 inputs"
    ],
    "answerIndex": 1,
    "explanation": "3 binary inputs and 8 outputs."
  },
  {
    "id": 195,
    "category": "Combinational Circuits",
    "question": "Which device activates only one output line corresponding to the input code?",
    "options": [
      "Encoder",
      "Decoder",
      "Multiplexer",
      "Comparator"
    ],
    "answerIndex": 1,
    "explanation": "Decoder."
  },
  {
    "id": 196,
    "category": "Combinational Circuits",
    "question": "A digital comparator is used to:",
    "options": [
      "Add binary numbers",
      "Subtract binary numbers",
      "Compare two binary numbers",
      "Store binary numbers"
    ],
    "answerIndex": 2,
    "explanation": "A magnitude comparator tests if A > B, A < B, or A = B."
  },
  {
    "id": 197,
    "category": "Combinational Circuits",
    "question": "A comparator determines whether one binary number is:",
    "options": [
      "Only equal",
      "Greater than, less than, or equal to another",
      "Even or odd",
      "Positive or negative"
    ],
    "answerIndex": 1,
    "explanation": "Outputs A=B, A>B, and A<B status lines."
  },
  {
    "id": 198,
    "category": "Combinational Circuits",
    "question": "Which of the following is a combinational circuit?",
    "options": [
      "Flip-flop",
      "Register",
      "Counter",
      "Comparator"
    ],
    "answerIndex": 3,
    "explanation": "Comparator output depends strictly on current inputs (combinational)."
  },
  {
    "id": 199,
    "category": "Combinational Circuits",
    "question": "Which of the following is NOT a combinational circuit?",
    "options": [
      "Decoder",
      "Encoder",
      "Multiplexer",
      "Register"
    ],
    "answerIndex": 3,
    "explanation": "Register contains flip-flops (sequential circuit)."
  },
  {
    "id": 200,
    "category": "Combinational Circuits",
    "question": "Which statement is correct regarding combinational circuits?",
    "options": [
      "They require previous state information.",
      "They contain memory elements.",
      "Their outputs depend only on present inputs.",
      "They always require a clock signal."
    ],
    "answerIndex": 2,
    "explanation": "Combinational circuit outputs depend solely on present input values, without memory or clocks."
  },
  {
    "id": 201,
    "category": "Sequential Circuits",
    "question": "A sequential circuit differs from a combinational circuit because it:",
    "options": [
      "Uses only logic gates",
      "Has no outputs",
      "Has memory",
      "Uses only AND gates"
    ],
    "answerIndex": 2,
    "explanation": "Sequential circuits contain memory elements (flip-flops/latches)."
  },
  {
    "id": 202,
    "category": "Sequential Circuits",
    "question": "The output of a sequential circuit depends on:",
    "options": [
      "Present input only",
      "Present input and previous state",
      "Previous state only",
      "Clock pulse only"
    ],
    "answerIndex": 1,
    "explanation": "y(t) = f(x(t), state(t-1))."
  },
  {
    "id": 203,
    "category": "Sequential Circuits",
    "question": "Which of the following is a sequential circuit?",
    "options": [
      "Decoder",
      "Multiplexer",
      "Comparator",
      "Flip-flop"
    ],
    "answerIndex": 3,
    "explanation": "Flip-flop is a 1-bit sequential memory cell."
  },
  {
    "id": 204,
    "category": "Sequential Circuits",
    "question": "Sequential circuits generally require:",
    "options": [
      "No inputs",
      "A clock signal",
      "A decoder",
      "An encoder"
    ],
    "answerIndex": 1,
    "explanation": "Clock signals synchronize state transitions in synchronous sequential circuits."
  },
  {
    "id": 205,
    "category": "Sequential Circuits",
    "question": "The basic memory element in digital electronics is:",
    "options": [
      "Multiplexer",
      "Decoder",
      "Flip-flop",
      "Comparator"
    ],
    "answerIndex": 2,
    "explanation": "Bistable multivibrator / Flip-flop."
  },
  {
    "id": 206,
    "category": "Sequential Circuits",
    "question": "A flip-flop stores:",
    "options": [
      "8 bits",
      "4 bits",
      "1 bit",
      "2 bits"
    ],
    "answerIndex": 2,
    "explanation": "A single flip-flop stores 1 binary bit of information."
  },
  {
    "id": 207,
    "category": "Sequential Circuits",
    "question": "Flip-flops are widely used in:",
    "options": [
      "Number conversion",
      "Memory and registers",
      "Arithmetic operations",
      "Encoding only"
    ],
    "answerIndex": 1,
    "explanation": "Flip-flops build registers, counters, SRAM cells, and control units."
  },
  {
    "id": 208,
    "category": "Sequential Circuits",
    "question": "SR stands for:",
    "options": [
      "Shift-Reset",
      "Set-Reset",
      "Serial-Reset",
      "Shift-Register"
    ],
    "answerIndex": 1,
    "explanation": "SR = Set-Reset."
  },
  {
    "id": 209,
    "category": "Sequential Circuits",
    "question": "The inputs of an SR flip-flop are:",
    "options": [
      "J and K",
      "S and R",
      "D and C",
      "T and C"
    ],
    "answerIndex": 1,
    "explanation": "S (Set) and R (Reset)."
  },
  {
    "id": 210,
    "category": "Sequential Circuits",
    "question": "In an SR flip-flop, S = 1 and R = 0 will:",
    "options": [
      "Set the output",
      "Reset the output",
      "Toggle the output",
      "Produce an invalid state"
    ],
    "answerIndex": 0,
    "explanation": "S=1, R=0 sets output Q = 1."
  },
  {
    "id": 211,
    "category": "Sequential Circuits",
    "question": "In an SR flip-flop, S = 0 and R = 1 will:",
    "options": [
      "Set the output",
      "Reset the output",
      "Toggle the output",
      "Hold the output"
    ],
    "answerIndex": 1,
    "explanation": "S=0, R=1 resets output Q = 0."
  },
  {
    "id": 212,
    "category": "Sequential Circuits",
    "question": "In an SR flip-flop, S = 0 and R = 0 will:",
    "options": [
      "Set",
      "Reset",
      "No change",
      "Invalid"
    ],
    "answerIndex": 2,
    "explanation": "S=0, R=0 maintains previous state (Hold/No Change)."
  },
  {
    "id": 213,
    "category": "Sequential Circuits",
    "question": "Which input combination is invalid for a basic SR flip-flop?",
    "options": [
      "00",
      "01",
      "10",
      "11"
    ],
    "answerIndex": 3,
    "explanation": "S=1, R=1 causes race condition / undefined invalid state."
  },
  {
    "id": 214,
    "category": "Sequential Circuits",
    "question": "The JK flip-flop was developed to eliminate the:",
    "options": [
      "Carry problem",
      "Overflow problem",
      "Invalid state of the SR flip-flop",
      "Memory problem"
    ],
    "answerIndex": 2,
    "explanation": "JK flip-flop defines J=1, K=1 as a toggle state, removing invalid S=1, R=1 state."
  },
  {
    "id": 215,
    "category": "Sequential Circuits",
    "question": "The inputs of a JK flip-flop are:",
    "options": [
      "S and R",
      "J and K",
      "D and T",
      "X and Y"
    ],
    "answerIndex": 1,
    "explanation": "J and K."
  },
  {
    "id": 216,
    "category": "Sequential Circuits",
    "question": "If J = 1 and K = 0, the JK flip-flop will:",
    "options": [
      "Set",
      "Reset",
      "Toggle",
      "Hold"
    ],
    "answerIndex": 0,
    "explanation": "J=1, K=0 sets Q = 1."
  },
  {
    "id": 217,
    "category": "Sequential Circuits",
    "question": "If J = 0 and K = 1, the JK flip-flop will:",
    "options": [
      "Set",
      "Reset",
      "Toggle",
      "Hold"
    ],
    "answerIndex": 1,
    "explanation": "J=0, K=1 resets Q = 0."
  },
  {
    "id": 218,
    "category": "Sequential Circuits",
    "question": "If J = 0 and K = 0, the output:",
    "options": [
      "Toggles",
      "Remains unchanged",
      "Becomes 1",
      "Becomes 0"
    ],
    "answerIndex": 1,
    "explanation": "J=0, K=0 holds state (No Change)."
  },
  {
    "id": 219,
    "category": "Sequential Circuits",
    "question": "If J = 1 and K = 1, the output:",
    "options": [
      "Sets",
      "Resets",
      "Toggles",
      "Holds"
    ],
    "answerIndex": 2,
    "explanation": "J=1, K=1 toggles output Q(n+1) = Q'(n)."
  },
  {
    "id": 220,
    "category": "Sequential Circuits",
    "question": "Which flip-flop suffers from the race-around condition?",
    "options": [
      "D",
      "T",
      "JK",
      "SR"
    ],
    "answerIndex": 2,
    "explanation": "Level-triggered JK flip-flop toggles uncontrollably when clock width > propagation delay."
  },
  {
    "id": 221,
    "category": "Sequential Circuits",
    "question": "The race-around condition occurs when:",
    "options": [
      "Clock pulse is too short",
      "Clock pulse is longer than the propagation delay",
      "Inputs are zero",
      "Output is constant"
    ],
    "answerIndex": 1,
    "explanation": "tp_clock > tp_gate causes multiple toggle flips during single high clock pulse."
  },
  {
    "id": 222,
    "category": "Sequential Circuits",
    "question": "Race-around condition can be eliminated using:",
    "options": [
      "Half adder",
      "Master-Slave JK Flip-Flop",
      "Decoder",
      "Encoder"
    ],
    "answerIndex": 1,
    "explanation": "Master-Slave configuration or edge-triggering eliminates race-around."
  },
  {
    "id": 223,
    "category": "Sequential Circuits",
    "question": "The Master-Slave JK flip-flop uses:",
    "options": [
      "One JK flip-flop",
      "Two JK flip-flops connected in cascade",
      "One D flip-flop",
      "Two T flip-flops"
    ],
    "answerIndex": 1,
    "explanation": "Master flip-flop responds to clock high, Slave updates on inverted clock edge."
  },
  {
    "id": 224,
    "category": "Sequential Circuits",
    "question": "D stands for:",
    "options": [
      "Digital",
      "Data",
      "Delay",
      "Decimal"
    ],
    "answerIndex": 1,
    "explanation": "D = Data (or Delay) flip-flop."
  },
  {
    "id": 225,
    "category": "Sequential Circuits",
    "question": "A D flip-flop has:",
    "options": [
      "Two data inputs",
      "One data input",
      "Three inputs",
      "Four inputs"
    ],
    "answerIndex": 1,
    "explanation": "Single data input D."
  },
  {
    "id": 226,
    "category": "Sequential Circuits",
    "question": "A D flip-flop transfers the input to the output:",
    "options": [
      "Continuously",
      "On the active clock edge",
      "Only when reset",
      "Only when set"
    ],
    "answerIndex": 1,
    "explanation": "Output Q next state equals D at active clock edge."
  },
  {
    "id": 227,
    "category": "Sequential Circuits",
    "question": "The primary advantage of the D flip-flop is:",
    "options": [
      "Two outputs",
      "No invalid input condition",
      "No clock required",
      "Two clocks"
    ],
    "answerIndex": 1,
    "explanation": "Single D input guarantees no ambiguous or invalid state combinations."
  },
  {
    "id": 228,
    "category": "Sequential Circuits",
    "question": "Which flip-flop is commonly used in registers?",
    "options": [
      "SR",
      "JK",
      "D",
      "T"
    ],
    "answerIndex": 2,
    "explanation": "D flip-flops store and shift multi-bit data in registers."
  },
  {
    "id": 229,
    "category": "Sequential Circuits",
    "question": "Which flip-flop has a single data input?",
    "options": [
      "JK",
      "SR",
      "D",
      "T"
    ],
    "answerIndex": 2,
    "explanation": "D flip-flop."
  },
  {
    "id": 230,
    "category": "Sequential Circuits",
    "question": "T stands for:",
    "options": [
      "Transfer",
      "Toggle",
      "Timing",
      "Temporary"
    ],
    "answerIndex": 1,
    "explanation": "T = Toggle flip-flop."
  },
  {
    "id": 231,
    "category": "Sequential Circuits",
    "question": "When T = 1, the T flip-flop:",
    "options": [
      "Holds",
      "Toggles",
      "Resets",
      "Sets"
    ],
    "answerIndex": 1,
    "explanation": "T=1 flips output Q(n+1) = Q'(n)."
  },
  {
    "id": 232,
    "category": "Sequential Circuits",
    "question": "When T = 0, the T flip-flop:",
    "options": [
      "Sets",
      "Resets",
      "Holds its previous state",
      "Toggles"
    ],
    "answerIndex": 2,
    "explanation": "T=0 holds state Q(n+1) = Q(n)."
  },
  {
    "id": 233,
    "category": "Sequential Circuits",
    "question": "A T flip-flop can be obtained from a JK flip-flop by:",
    "options": [
      "J=0, K=1",
      "J=1, K=0",
      "Connecting J and K together",
      "Removing the clock"
    ],
    "answerIndex": 2,
    "explanation": "Tying J and K together forms a T flip-flop (T = J = K)."
  },
  {
    "id": 234,
    "category": "Sequential Circuits",
    "question": "Which flip-flop is commonly used in counters?",
    "options": [
      "SR",
      "D",
      "T",
      "Encoder"
    ],
    "answerIndex": 2,
    "explanation": "T flip-flops divide clock frequency by 2 and build binary counters."
  },
  {
    "id": 235,
    "category": "Sequential Circuits",
    "question": "A clock signal is generally:",
    "options": [
      "Analog",
      "Periodic digital pulse",
      "Random",
      "Continuous DC"
    ],
    "answerIndex": 1,
    "explanation": "Periodic square wave / pulse train."
  },
  {
    "id": 236,
    "category": "Sequential Circuits",
    "question": "The clock signal synchronizes:",
    "options": [
      "Arithmetic operations",
      "State changes in sequential circuits",
      "Number conversion",
      "Memory allocation"
    ],
    "answerIndex": 1,
    "explanation": "Clock forces simultaneous state transitions across flip-flops."
  },
  {
    "id": 237,
    "category": "Sequential Circuits",
    "question": "Flip-flops change state in response to:",
    "options": [
      "Data only",
      "Clock pulse",
      "Carry",
      "Borrow"
    ],
    "answerIndex": 1,
    "explanation": "Clock edge / pulse triggers state change."
  },
  {
    "id": 238,
    "category": "Sequential Circuits",
    "question": "Which type of flip-flop changes output only on the clock edge?",
    "options": [
      "Combinational circuit",
      "Edge-triggered flip-flop",
      "Decoder",
      "Encoder"
    ],
    "answerIndex": 1,
    "explanation": "Edge-triggered flip-flops update on rising or falling clock transitions."
  },
  {
    "id": 239,
    "category": "Sequential Circuits",
    "question": "A characteristic table describes:",
    "options": [
      "Circuit cost",
      "Next state for given inputs and present state",
      "Number of gates",
      "Power consumption"
    ],
    "answerIndex": 1,
    "explanation": "Tabulates Q(n+1) as a function of inputs and present state Q(n)."
  },
  {
    "id": 240,
    "category": "Sequential Circuits",
    "question": "An excitation table is mainly used for:",
    "options": [
      "Testing hardware",
      "Designing sequential circuits",
      "Binary conversion",
      "K-map simplification"
    ],
    "answerIndex": 1,
    "explanation": "Maps required present-to-next state transitions to necessary input values."
  },
  {
    "id": 241,
    "category": "Sequential Circuits",
    "question": "The present state of a flip-flop is commonly denoted by:",
    "options": [
      "Q(n+1)",
      "Q(n)",
      "Cin",
      "Cout"
    ],
    "answerIndex": 1,
    "explanation": "Q(n) or Q_t represents current state."
  },
  {
    "id": 242,
    "category": "Sequential Circuits",
    "question": "The next state is commonly denoted by:",
    "options": [
      "Q(n)",
      "Q(n+1)",
      "D",
      "T"
    ],
    "answerIndex": 1,
    "explanation": "Q(n+1) or Q_(t+1) represents state after clock pulse."
  },
  {
    "id": 243,
    "category": "Sequential Circuits",
    "question": "Which flip-flop has no invalid input condition?",
    "options": [
      "SR",
      "JK",
      "Decoder",
      "Encoder"
    ],
    "answerIndex": 1,
    "explanation": "JK flip-flop handles all 4 input combinations (00, 01, 10, 11)."
  },
  {
    "id": 244,
    "category": "Sequential Circuits",
    "question": "Which flip-flop directly transfers the input to the output at the active clock edge?",
    "options": [
      "SR",
      "JK",
      "D",
      "T"
    ],
    "answerIndex": 2,
    "explanation": "D flip-flop Q(n+1) = D."
  },
  {
    "id": 245,
    "category": "Sequential Circuits",
    "question": "Which flip-flop naturally performs the toggle operation?",
    "options": [
      "SR",
      "D",
      "T",
      "Decoder"
    ],
    "answerIndex": 2,
    "explanation": "T flip-flop toggles when T=1."
  },
  {
    "id": 246,
    "category": "Sequential Circuits",
    "question": "Which flip-flop is best suited for storing a single data bit?",
    "options": [
      "JK",
      "D",
      "Half Adder",
      "Decoder"
    ],
    "answerIndex": 1,
    "explanation": "D flip-flop."
  },
  {
    "id": 247,
    "category": "Sequential Circuits",
    "question": "Flip-flops are the building blocks of:",
    "options": [
      "Encoders",
      "Decoders",
      "Registers and counters",
      "Multiplexers"
    ],
    "answerIndex": 2,
    "explanation": "Flip-flops assemble registers, shift registers, and counters."
  },
  {
    "id": 248,
    "category": "Sequential Circuits",
    "question": "Which statement is TRUE about sequential circuits?",
    "options": [
      "They never use memory.",
      "They never require clocks.",
      "Their outputs depend on present inputs and previous states.",
      "They are always faster than combinational circuits."
    ],
    "answerIndex": 2,
    "explanation": "Sequential logic incorporates memory and past state feedback."
  },
  {
    "id": 249,
    "category": "Sequential Circuits",
    "question": "Which flip-flop is most commonly used in shift registers?",
    "options": [
      "JK",
      "SR",
      "D",
      "T"
    ],
    "answerIndex": 2,
    "explanation": "D flip-flops form shift register chains."
  },
  {
    "id": 250,
    "category": "Sequential Circuits",
    "question": "Which of the following is FALSE?",
    "options": [
      "A flip-flop stores one bit.",
      "JK flip-flop removes the invalid state of SR flip-flop.",
      "D flip-flop has one data input.",
      "A T flip-flop has two independent data inputs."
    ],
    "answerIndex": 3,
    "explanation": "T flip-flop has 1 input T, not 2."
  },
  {
    "id": 251,
    "category": "Registers & Counters",
    "question": "A register is primarily used to:",
    "options": [
      "Perform arithmetic operations",
      "Store binary data",
      "Convert analog signals",
      "Generate clock pulses"
    ],
    "answerIndex": 1,
    "explanation": "Registers store n-bit binary words."
  },
  {
    "id": 252,
    "category": "Registers & Counters",
    "question": "A register is constructed using:",
    "options": [
      "Logic gates only",
      "Multiplexers",
      "Flip-flops",
      "Decoders"
    ],
    "answerIndex": 2,
    "explanation": "Group of flip-flops sharing a clock line."
  },
  {
    "id": 253,
    "category": "Registers & Counters",
    "question": "An n-bit register requires:",
    "options": [
      "n/2 flip-flops",
      "2n flip-flops",
      "n flip-flops",
      "n+1 flip-flops"
    ],
    "answerIndex": 2,
    "explanation": "1 flip-flop per stored bit."
  },
  {
    "id": 254,
    "category": "Registers & Counters",
    "question": "A 4-bit register contains:",
    "options": [
      "2 flip-flops",
      "3 flip-flops",
      "4 flip-flops",
      "8 flip-flops"
    ],
    "answerIndex": 2,
    "explanation": "4 flip-flops store 4 bits."
  },
  {
    "id": 255,
    "category": "Registers & Counters",
    "question": "Registers are commonly used for:",
    "options": [
      "Data storage",
      "Temporary data transfer",
      "CPU operations",
      "All of the above"
    ],
    "answerIndex": 3,
    "explanation": "Registers serve in CPU registers (accumulator, PC, IR), memory buffers, and data transfer."
  },
  {
    "id": 256,
    "category": "Registers & Counters",
    "question": "Which flip-flop is most commonly used to construct registers?",
    "options": [
      "SR",
      "JK",
      "D Flip-Flop",
      "T Flip-Flop"
    ],
    "answerIndex": 2,
    "explanation": "D flip-flops directly latch data on clock edges."
  },
  {
    "id": 257,
    "category": "Registers & Counters",
    "question": "A register can store:",
    "options": [
      "One bit only",
      "Multiple bits",
      "Decimal numbers only",
      "Analog signals"
    ],
    "answerIndex": 1,
    "explanation": "n-bit registers store multi-bit binary data."
  },
  {
    "id": 258,
    "category": "Registers & Counters",
    "question": "The number of bits stored by a register equals:",
    "options": [
      "Number of inputs",
      "Number of outputs",
      "Number of flip-flops",
      "Number of gates"
    ],
    "answerIndex": 2,
    "explanation": "Storage capacity = number of flip-flops N."
  },
  {
    "id": 259,
    "category": "Registers & Counters",
    "question": "A shift register is mainly used to:",
    "options": [
      "Perform subtraction",
      "Shift binary data",
      "Compare numbers",
      "Decode signals"
    ],
    "answerIndex": 1,
    "explanation": "Shift registers move binary data laterally bit-by-bit."
  },
  {
    "id": 260,
    "category": "Registers & Counters",
    "question": "A shift register shifts data:",
    "options": [
      "Randomly",
      "Left or right",
      "Upward only",
      "Downward only"
    ],
    "answerIndex": 1,
    "explanation": "Data shifts left (SHL) or right (SHR) per clock pulse."
  },
  {
    "id": 261,
    "category": "Registers & Counters",
    "question": "SISO stands for:",
    "options": [
      "Serial Input, Simultaneous Output",
      "Serial Input, Serial Output",
      "Single Input, Single Output",
      "Serial Input, Separate Output"
    ],
    "answerIndex": 1,
    "explanation": "SISO = Serial-In Serial-Out."
  },
  {
    "id": 262,
    "category": "Registers & Counters",
    "question": "SIPO stands for:",
    "options": [
      "Simultaneous Input, Parallel Output",
      "Serial Input, Parallel Output",
      "Single Input, Parallel Output",
      "Serial Input, Primary Output"
    ],
    "answerIndex": 1,
    "explanation": "SIPO = Serial-In Parallel-Out."
  },
  {
    "id": 263,
    "category": "Registers & Counters",
    "question": "PISO stands for:",
    "options": [
      "Parallel Input, Serial Output",
      "Primary Input, Serial Output",
      "Parallel Input, Simultaneous Output",
      "Parallel Internal Serial Output"
    ],
    "answerIndex": 0,
    "explanation": "PISO = Parallel-In Serial-Out."
  },
  {
    "id": 264,
    "category": "Registers & Counters",
    "question": "PIPO stands for:",
    "options": [
      "Parallel Input, Primary Output",
      "Parallel Input, Parallel Output",
      "Parallel Internal Parallel Output",
      "Primary Input, Parallel Output"
    ],
    "answerIndex": 1,
    "explanation": "PIPO = Parallel-In Parallel-Out."
  },
  {
    "id": 265,
    "category": "Registers & Counters",
    "question": "Which shift register converts serial data into parallel data?",
    "options": [
      "SISO",
      "SIPO",
      "PISO",
      "PIPO"
    ],
    "answerIndex": 1,
    "explanation": "SIPO shifts data in serially and reads all bits out in parallel."
  },
  {
    "id": 266,
    "category": "Registers & Counters",
    "question": "Which shift register converts parallel data into serial data?",
    "options": [
      "SISO",
      "SIPO",
      "PISO",
      "PIPO"
    ],
    "answerIndex": 2,
    "explanation": "PISO loads data in parallel and shifts it out one bit per clock."
  },
  {
    "id": 267,
    "category": "Registers & Counters",
    "question": "Which shift register stores and outputs data in parallel?",
    "options": [
      "SISO",
      "SIPO",
      "PISO",
      "PIPO"
    ],
    "answerIndex": 3,
    "explanation": "PIPO loads and reads data in parallel."
  },
  {
    "id": 268,
    "category": "Registers & Counters",
    "question": "Which shift register is commonly used in serial communication?",
    "options": [
      "SISO",
      "PIPO",
      "Decoder",
      "Encoder"
    ],
    "answerIndex": 0,
    "explanation": "SISO acts as a serial delay line / buffer in communication channels."
  },
  {
    "id": 269,
    "category": "Registers & Counters",
    "question": "Shift registers are widely used for:",
    "options": [
      "Data transfer",
      "Data conversion",
      "Temporary storage",
      "All of the above"
    ],
    "answerIndex": 3,
    "explanation": "Shift registers convert serial/parallel formats, delay data, and store words."
  },
  {
    "id": 270,
    "category": "Registers & Counters",
    "question": "Which device is commonly used for serial-to-parallel conversion?",
    "options": [
      "Decoder",
      "Multiplexer",
      "SIPO Register",
      "Comparator"
    ],
    "answerIndex": 2,
    "explanation": "SIPO register."
  },
  {
    "id": 271,
    "category": "Registers & Counters",
    "question": "A counter is a:",
    "options": [
      "Combinational circuit",
      "Sequential circuit",
      "Arithmetic circuit",
      "Memoryless circuit"
    ],
    "answerIndex": 1,
    "explanation": "Counters use flip-flops to sequence through a fixed state order."
  },
  {
    "id": 272,
    "category": "Registers & Counters",
    "question": "A counter is mainly used to:",
    "options": [
      "Store data",
      "Count clock pulses",
      "Convert binary numbers",
      "Compare data"
    ],
    "answerIndex": 1,
    "explanation": "Counters count input clock pulses or events."
  },
  {
    "id": 273,
    "category": "Registers & Counters",
    "question": "Counters are constructed using:",
    "options": [
      "Multiplexers",
      "Decoders",
      "Flip-flops",
      "Comparators"
    ],
    "answerIndex": 2,
    "explanation": "Cascaded flip-flops (T or JK)."
  },
  {
    "id": 274,
    "category": "Registers & Counters",
    "question": "A 3-bit binary counter has:",
    "options": [
      "4 states",
      "6 states",
      "8 states",
      "16 states"
    ],
    "answerIndex": 2,
    "explanation": "2^3 = 8 states (000 to 111)."
  },
  {
    "id": 275,
    "category": "Registers & Counters",
    "question": "An n-bit binary counter has:",
    "options": [
      "n states",
      "2n states",
      "2^n states",
      "n^2 states"
    ],
    "answerIndex": 2,
    "explanation": "2^n distinct counting states."
  },
  {
    "id": 276,
    "category": "Registers & Counters",
    "question": "The modulus (MOD) of a counter refers to:",
    "options": [
      "Number of inputs",
      "Number of outputs",
      "Number of distinct states",
      "Number of gates"
    ],
    "answerIndex": 2,
    "explanation": "MOD number = total number of unique states in the counter cycle."
  },
  {
    "id": 277,
    "category": "Registers & Counters",
    "question": "A 4-bit binary counter has a modulus of:",
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "answerIndex": 2,
    "explanation": "2^4 = 16 (MOD-16 counter)."
  },
  {
    "id": 278,
    "category": "Registers & Counters",
    "question": "A MOD-10 counter counts from:",
    "options": [
      "0 to 9",
      "1 to 10",
      "0 to 10",
      "1 to 9"
    ],
    "answerIndex": 0,
    "explanation": "MOD-10 cycles through 10 states: 0, 1, 2, ..., 9."
  },
  {
    "id": 279,
    "category": "Registers & Counters",
    "question": "Which counter is also called a decade counter?",
    "options": [
      "MOD-8",
      "MOD-10",
      "MOD-16",
      "MOD-2"
    ],
    "answerIndex": 1,
    "explanation": "MOD-10 counter is a Decade Counter."
  },
  {
    "id": 280,
    "category": "Registers & Counters",
    "question": "A MOD-16 counter requires:",
    "options": [
      "2 flip-flops",
      "3 flip-flops",
      "4 flip-flops",
      "5 flip-flops"
    ],
    "answerIndex": 2,
    "explanation": "2^4 = 16, so 4 flip-flops are needed."
  },
  {
    "id": 281,
    "category": "Registers & Counters",
    "question": "An asynchronous counter is also called a:",
    "options": [
      "Parallel counter",
      "Ripple counter",
      "Ring counter",
      "Johnson counter"
    ],
    "answerIndex": 1,
    "explanation": "Asynchronous counter = Ripple counter."
  },
  {
    "id": 282,
    "category": "Registers & Counters",
    "question": "In a ripple counter:",
    "options": [
      "All flip-flops receive the clock simultaneously.",
      "Each flip-flop is triggered by the previous flip-flop.",
      "No clock is required.",
      "All outputs change randomly."
    ],
    "answerIndex": 1,
    "explanation": "Clock ripples through: stage Q output triggers the next stage's clock."
  },
  {
    "id": 283,
    "category": "Registers & Counters",
    "question": "The main disadvantage of ripple counters is:",
    "options": [
      "High cost",
      "Propagation delay",
      "Large size",
      "High power consumption"
    ],
    "answerIndex": 1,
    "explanation": "Accumulated propagation delay across stages limits max operating frequency."
  },
  {
    "id": 284,
    "category": "Registers & Counters",
    "question": "In ripple counters, outputs change:",
    "options": [
      "Simultaneously",
      "One after another",
      "Randomly",
      "Without a clock"
    ],
    "answerIndex": 1,
    "explanation": "Outputs change sequentially as the clock ripples through."
  },
  {
    "id": 285,
    "category": "Registers & Counters",
    "question": "In a synchronous counter:",
    "options": [
      "Only the first flip-flop receives the clock.",
      "All flip-flops receive the clock simultaneously.",
      "No flip-flop receives the clock.",
      "Clock pulses are random."
    ],
    "answerIndex": 1,
    "explanation": "All flip-flops are connected to a common global clock line."
  },
  {
    "id": 286,
    "category": "Registers & Counters",
    "question": "Synchronous counters are:",
    "options": [
      "Slower than ripple counters",
      "Faster than ripple counters",
      "Identical to ripple counters",
      "Clockless"
    ],
    "answerIndex": 1,
    "explanation": "Synchronous counters eliminate ripple delay and operate faster."
  },
  {
    "id": 287,
    "category": "Registers & Counters",
    "question": "Which counter has less propagation delay?",
    "options": [
      "Ripple counter",
      "Synchronous counter",
      "Ring counter",
      "Johnson counter"
    ],
    "answerIndex": 1,
    "explanation": "Synchronous counter propagation delay equals single flip-flop delay."
  },
  {
    "id": 288,
    "category": "Registers & Counters",
    "question": "Which counter is preferred in high-speed applications?",
    "options": [
      "Ripple counter",
      "Synchronous counter",
      "MOD-2 counter",
      "Ring counter"
    ],
    "answerIndex": 1,
    "explanation": "Synchronous counters handle high frequencies without accumulated ripple lag."
  },
  {
    "id": 289,
    "category": "Registers & Counters",
    "question": "A ring counter is formed using:",
    "options": [
      "Decoder",
      "Multiplexer",
      "Shift register",
      "Comparator"
    ],
    "answerIndex": 2,
    "explanation": "Circular shift register with Q_last fed back to D_first."
  },
  {
    "id": 290,
    "category": "Registers & Counters",
    "question": "A ring counter circulates:",
    "options": [
      "Decimal digits",
      "A single binary 1 (or 0)",
      "Gray code",
      "ASCII characters"
    ],
    "answerIndex": 1,
    "explanation": "Circulates a single HIGH bit (1000 -> 0100 -> 0010 -> 0001)."
  },
  {
    "id": 291,
    "category": "Registers & Counters",
    "question": "A Johnson counter is also known as:",
    "options": [
      "Ripple counter",
      "Twisted Ring Counter",
      "Binary counter",
      "Decade counter"
    ],
    "answerIndex": 1,
    "explanation": "Johnson / Switch-tail / Twisted Ring counter."
  },
  {
    "id": 292,
    "category": "Registers & Counters",
    "question": "Compared to a ring counter with the same number of flip-flops, a Johnson counter has:",
    "options": [
      "Half the states",
      "Twice the number of states",
      "The same number of states",
      "Four times the states"
    ],
    "answerIndex": 1,
    "explanation": "N flip-flops: Ring counter has N states; Johnson counter has 2N states."
  },
  {
    "id": 293,
    "category": "Registers & Counters",
    "question": "A 4-bit ring counter has:",
    "options": [
      "4 states",
      "8 states",
      "16 states",
      "2 states"
    ],
    "answerIndex": 0,
    "explanation": "N bits = N states = 4 states."
  },
  {
    "id": 294,
    "category": "Registers & Counters",
    "question": "A 4-bit Johnson counter has:",
    "options": [
      "4 states",
      "8 states",
      "16 states",
      "32 states"
    ],
    "answerIndex": 1,
    "explanation": "2N states = 2 * 4 = 8 states."
  },
  {
    "id": 295,
    "category": "Registers & Counters",
    "question": "Which device temporarily stores binary information?",
    "options": [
      "Decoder",
      "Register",
      "Encoder",
      "Comparator"
    ],
    "answerIndex": 1,
    "explanation": "Register."
  },
  {
    "id": 296,
    "category": "Registers & Counters",
    "question": "Which register performs serial-to-parallel conversion?",
    "options": [
      "SISO",
      "SIPO",
      "PISO",
      "PIPO"
    ],
    "answerIndex": 1,
    "explanation": "SIPO register."
  },
  {
    "id": 297,
    "category": "Registers & Counters",
    "question": "Which counter suffers from ripple delay?",
    "options": [
      "Synchronous counter",
      "Asynchronous counter",
      "Ring counter",
      "Johnson counter"
    ],
    "answerIndex": 1,
    "explanation": "Asynchronous / Ripple counter."
  },
  {
    "id": 298,
    "category": "Registers & Counters",
    "question": "Which statement about synchronous counters is TRUE?",
    "options": [
      "Flip-flops are triggered one after another.",
      "All flip-flops are clocked simultaneously.",
      "They do not require flip-flops.",
      "They are slower than ripple counters."
    ],
    "answerIndex": 1,
    "explanation": "Simultaneous clocking eliminates ripple delay."
  },
  {
    "id": 299,
    "category": "Registers & Counters",
    "question": "Which statement is TRUE regarding a MOD-n counter?",
    "options": [
      "It has n flip-flops.",
      "It always counts to 16.",
      "It has n distinct counting states.",
      "It is always synchronous."
    ],
    "answerIndex": 2,
    "explanation": "MOD-n counter cycles through n distinct states."
  },
  {
    "id": 300,
    "category": "Registers & Counters",
    "question": "Which of the following is FALSE?",
    "options": [
      "Registers are built from flip-flops.",
      "Ripple counters are asynchronous.",
      "SIPO converts serial input to parallel output.",
      "A ring counter is a combinational circuit."
    ],
    "answerIndex": 3,
    "explanation": "A ring counter is a sequential circuit built with flip-flops."
  },
  {
    "id": 301,
    "category": "Memory, Logic & PLDs",
    "question": "Computer memory is primarily used to:",
    "options": [
      "Perform arithmetic operations",
      "Store data and instructions",
      "Generate clock signals",
      "Compare binary numbers"
    ],
    "answerIndex": 1,
    "explanation": "Memory stores data and executable software program instructions."
  },
  {
    "id": 302,
    "category": "Memory, Logic & PLDs",
    "question": "Memory stores information in the form of:",
    "options": [
      "Analog signals",
      "Binary bits",
      "Decimal digits",
      "ASCII characters only"
    ],
    "answerIndex": 1,
    "explanation": "Binary bits (0s and 1s)."
  },
  {
    "id": 303,
    "category": "Memory, Logic & PLDs",
    "question": "The smallest unit of memory is:",
    "options": [
      "Byte",
      "Bit",
      "Nibble",
      "Word"
    ],
    "answerIndex": 1,
    "explanation": "A Bit (binary digit) is the atomic memory unit."
  },
  {
    "id": 304,
    "category": "Memory, Logic & PLDs",
    "question": "One byte consists of:",
    "options": [
      "4 bits",
      "8 bits",
      "16 bits",
      "32 bits"
    ],
    "answerIndex": 1,
    "explanation": "8 bits = 1 Byte."
  },
  {
    "id": 305,
    "category": "Memory, Logic & PLDs",
    "question": "Which memory loses its contents when power is turned OFF?",
    "options": [
      "ROM",
      "PROM",
      "RAM",
      "EEPROM"
    ],
    "answerIndex": 2,
    "explanation": "RAM is volatile memory."
  },
  {
    "id": 306,
    "category": "Memory, Logic & PLDs",
    "question": "Memory that retains data after power is removed is called:",
    "options": [
      "Volatile memory",
      "Non-volatile memory",
      "Temporary memory",
      "Dynamic memory"
    ],
    "answerIndex": 1,
    "explanation": "Non-volatile memory (ROM, Flash)."
  },
  {
    "id": 307,
    "category": "Memory, Logic & PLDs",
    "question": "RAM stands for:",
    "options": [
      "Random Arithmetic Memory",
      "Random Access Memory",
      "Read Arithmetic Memory",
      "Read Access Memory"
    ],
    "answerIndex": 1,
    "explanation": "RAM = Random Access Memory."
  },
  {
    "id": 308,
    "category": "Memory, Logic & PLDs",
    "question": "RAM is classified as:",
    "options": [
      "Non-volatile memory",
      "Volatile memory",
      "Permanent memory",
      "Optical memory"
    ],
    "answerIndex": 1,
    "explanation": "RAM loses data when powered down (Volatile)."
  },
  {
    "id": 309,
    "category": "Memory, Logic & PLDs",
    "question": "RAM allows:",
    "options": [
      "Read operation only",
      "Both read and write operations",
      "Write operation only",
      "Programming only"
    ],
    "answerIndex": 1,
    "explanation": "Read and write memory (R/W memory)."
  },
  {
    "id": 310,
    "category": "Memory, Logic & PLDs",
    "question": "RAM is mainly used as:",
    "options": [
      "Permanent storage",
      "Main memory",
      "Backup storage",
      "Firmware storage"
    ],
    "answerIndex": 1,
    "explanation": "Main system memory (RAM)."
  },
  {
    "id": 311,
    "category": "Memory, Logic & PLDs",
    "question": "Which memory is directly accessed by the CPU during program execution?",
    "options": [
      "ROM",
      "RAM",
      "DVD",
      "Flash drive"
    ],
    "answerIndex": 1,
    "explanation": "CPU reads/writes main system RAM directly during execution."
  },
  {
    "id": 312,
    "category": "Memory, Logic & PLDs",
    "question": "ROM stands for:",
    "options": [
      "Random Output Memory",
      "Read Only Memory",
      "Read Operation Memory",
      "Register Output Memory"
    ],
    "answerIndex": 1,
    "explanation": "ROM = Read Only Memory."
  },
  {
    "id": 313,
    "category": "Memory, Logic & PLDs",
    "question": "ROM is:",
    "options": [
      "Volatile memory",
      "Non-volatile memory",
      "Temporary memory",
      "Dynamic memory"
    ],
    "answerIndex": 1,
    "explanation": "ROM retains data without power (Non-volatile)."
  },
  {
    "id": 314,
    "category": "Memory, Logic & PLDs",
    "question": "ROM is mainly used to store:",
    "options": [
      "Temporary variables",
      "Firmware and boot programs",
      "User documents",
      "Cache data"
    ],
    "answerIndex": 1,
    "explanation": "Stores BIOS, firmware, and system boot loaders."
  },
  {
    "id": 315,
    "category": "Memory, Logic & PLDs",
    "question": "Data stored in ROM:",
    "options": [
      "Is lost when power fails",
      "Remains after power is removed",
      "Changes every clock pulse",
      "Is always writable"
    ],
    "answerIndex": 1,
    "explanation": "Non-volatile contents persist permanently."
  },
  {
    "id": 316,
    "category": "Memory, Logic & PLDs",
    "question": "PROM stands for:",
    "options": [
      "Permanent Read Only Memory",
      "Programmable Read Only Memory",
      "Primary Read Only Memory",
      "Parallel Read Only Memory"
    ],
    "answerIndex": 1,
    "explanation": "PROM = Programmable Read-Only Memory."
  },
  {
    "id": 317,
    "category": "Memory, Logic & PLDs",
    "question": "A PROM can be programmed:",
    "options": [
      "Unlimited times",
      "Only once",
      "Twice",
      "Only after erasing"
    ],
    "answerIndex": 1,
    "explanation": "Field-programmable once by burning internal fuses."
  },
  {
    "id": 318,
    "category": "Memory, Logic & PLDs",
    "question": "EPROM stands for:",
    "options": [
      "Electrical Programmable ROM",
      "Erasable Programmable Read Only Memory",
      "Extended Programmable ROM",
      "External Programmable ROM"
    ],
    "answerIndex": 1,
    "explanation": "EPROM = Erasable Programmable Read-Only Memory."
  },
  {
    "id": 319,
    "category": "Memory, Logic & PLDs",
    "question": "EPROM can be erased using:",
    "options": [
      "Heat",
      "Electricity",
      "Ultraviolet (UV) light",
      "Magnetic field"
    ],
    "answerIndex": 2,
    "explanation": "Exposing EPROM quartz window to UV light erases all floating-gate charges."
  },
  {
    "id": 320,
    "category": "Memory, Logic & PLDs",
    "question": "EEPROM stands for:",
    "options": [
      "Electronic EPROM",
      "Electrically Erasable Programmable Read Only Memory",
      "Extended EEPROM",
      "External EEPROM"
    ],
    "answerIndex": 1,
    "explanation": "EEPROM = Electrically Erasable Programmable Read-Only Memory."
  },
  {
    "id": 321,
    "category": "Memory, Logic & PLDs",
    "question": "EEPROM can be erased by:",
    "options": [
      "UV light",
      "Electrical signals",
      "Heat",
      "Sunlight"
    ],
    "answerIndex": 1,
    "explanation": "Erased in-circuit using electrical voltage pulses."
  },
  {
    "id": 322,
    "category": "Memory, Logic & PLDs",
    "question": "Which memory type can be erased and reprogrammed electrically without removing it from the circuit?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "ROM"
    ],
    "answerIndex": 2,
    "explanation": "EEPROM (and Flash memory)."
  },
  {
    "id": 323,
    "category": "Memory, Logic & PLDs",
    "question": "SRAM stands for:",
    "options": [
      "Static Read Access Memory",
      "Static Random Access Memory",
      "Sequential RAM",
      "Standard RAM"
    ],
    "answerIndex": 1,
    "explanation": "SRAM = Static Random Access Memory."
  },
  {
    "id": 324,
    "category": "Memory, Logic & PLDs",
    "question": "DRAM stands for:",
    "options": [
      "Dynamic Read Access Memory",
      "Dynamic Random Access Memory",
      "Digital RAM",
      "Direct RAM"
    ],
    "answerIndex": 1,
    "explanation": "DRAM = Dynamic Random Access Memory."
  },
  {
    "id": 325,
    "category": "Memory, Logic & PLDs",
    "question": "Which RAM requires periodic refreshing?",
    "options": [
      "SRAM",
      "DRAM",
      "ROM",
      "PROM"
    ],
    "answerIndex": 1,
    "explanation": "DRAM stores data on parasitic capacitors that leak charge, requiring periodic refresh cycles."
  },
  {
    "id": 326,
    "category": "Memory, Logic & PLDs",
    "question": "Which RAM does NOT require refreshing?",
    "options": [
      "SRAM",
      "DRAM",
      "PROM",
      "EEPROM"
    ],
    "answerIndex": 0,
    "explanation": "SRAM uses flip-flop latches and holds data continuously while powered."
  },
  {
    "id": 327,
    "category": "Memory, Logic & PLDs",
    "question": "Which memory is generally faster?",
    "options": [
      "SRAM",
      "DRAM",
      "ROM",
      "EPROM"
    ],
    "answerIndex": 0,
    "explanation": "SRAM access times are much faster (ns) than DRAM."
  },
  {
    "id": 328,
    "category": "Memory, Logic & PLDs",
    "question": "Which memory is commonly used to implement cache memory?",
    "options": [
      "SRAM",
      "DRAM",
      "PROM",
      "EEPROM"
    ],
    "answerIndex": 0,
    "explanation": "High-speed SRAM builds CPU L1/L2/L3 cache."
  },
  {
    "id": 329,
    "category": "Memory, Logic & PLDs",
    "question": "Which memory is commonly used as the main system memory?",
    "options": [
      "SRAM",
      "DRAM",
      "ROM",
      "Cache"
    ],
    "answerIndex": 1,
    "explanation": "High-density, low-cost DRAM builds computer main RAM."
  },
  {
    "id": 330,
    "category": "Memory, Logic & PLDs",
    "question": "DRAM is preferred over SRAM for main memory because it is:",
    "options": [
      "Faster",
      "Less expensive and higher density",
      "Non-volatile",
      "Permanent"
    ],
    "answerIndex": 1,
    "explanation": "DRAM uses 1 transistor + 1 capacitor per cell, providing higher capacity per area."
  },
  {
    "id": 331,
    "category": "Memory, Logic & PLDs",
    "question": "Cache memory is located:",
    "options": [
      "On the hard disk",
      "Between the CPU and main memory",
      "Inside ROM",
      "Inside EEPROM"
    ],
    "answerIndex": 1,
    "explanation": "Cache sits between CPU registers and main RAM to bridge speed gaps."
  },
  {
    "id": 332,
    "category": "Memory, Logic & PLDs",
    "question": "Cache memory is mainly used to:",
    "options": [
      "Store firmware",
      "Increase processing speed",
      "Store operating systems permanently",
      "Convert binary numbers"
    ],
    "answerIndex": 1,
    "explanation": "Caches frequently accessed instructions/data to reduce CPU wait states."
  },
  {
    "id": 333,
    "category": "Memory, Logic & PLDs",
    "question": "Cache memory is generally built using:",
    "options": [
      "DRAM",
      "SRAM",
      "PROM",
      "EEPROM"
    ],
    "answerIndex": 1,
    "explanation": "Built with fast Static RAM (SRAM)."
  },
  {
    "id": 334,
    "category": "Memory, Logic & PLDs",
    "question": "TTL stands for:",
    "options": [
      "Total Transfer Logic",
      "Transistor-Transistor Logic",
      "Transistor Timing Logic",
      "Temporary Transistor Logic"
    ],
    "answerIndex": 1,
    "explanation": "TTL = Transistor-Transistor Logic."
  },
  {
    "id": 335,
    "category": "Memory, Logic & PLDs",
    "question": "CMOS stands for:",
    "options": [
      "Complementary Metal Oxide System",
      "Complementary Metal-Oxide Semiconductor",
      "Computer Metal Oxide Semiconductor",
      "Complementary Memory Operating System"
    ],
    "answerIndex": 1,
    "explanation": "CMOS = Complementary Metal-Oxide Semiconductor."
  },
  {
    "id": 336,
    "category": "Memory, Logic & PLDs",
    "question": "Which logic family generally consumes less power?",
    "options": [
      "TTL",
      "CMOS",
      "ECL",
      "RTL"
    ],
    "answerIndex": 1,
    "explanation": "CMOS consumes near-zero static power."
  },
  {
    "id": 337,
    "category": "Memory, Logic & PLDs",
    "question": "Which logic family is widely used in modern digital ICs?",
    "options": [
      "RTL",
      "DTL",
      "CMOS",
      "TTL only"
    ],
    "answerIndex": 2,
    "explanation": "CMOS is the dominant technology for modern microprocessors and microcontrollers."
  },
  {
    "id": 338,
    "category": "Memory, Logic & PLDs",
    "question": "Compared with TTL, CMOS generally offers:",
    "options": [
      "Higher power consumption",
      "Lower power consumption",
      "Lower noise immunity",
      "Slower technology in all cases"
    ],
    "answerIndex": 1,
    "explanation": "CMOS offers lower power consumption and higher noise margins."
  },
  {
    "id": 339,
    "category": "Memory, Logic & PLDs",
    "question": "Noise immunity refers to a circuit's ability to:",
    "options": [
      "Increase speed",
      "Resist unwanted electrical noise",
      "Store more bits",
      "Reduce memory size"
    ],
    "answerIndex": 1,
    "explanation": "Margin of tolerance against spurious voltage spikes on input lines."
  },
  {
    "id": 340,
    "category": "Memory, Logic & PLDs",
    "question": "Fan-out refers to:",
    "options": [
      "Number of inputs of a gate",
      "Number of gate inputs driven by one output",
      "Number of outputs",
      "Number of clock pulses"
    ],
    "answerIndex": 1,
    "explanation": "Maximum number of standard load inputs a single gate output can drive."
  },
  {
    "id": 341,
    "category": "Memory, Logic & PLDs",
    "question": "PLD stands for:",
    "options": [
      "Parallel Logic Device",
      "Programmable Logic Device",
      "Primary Logic Device",
      "Permanent Logic Device"
    ],
    "answerIndex": 1,
    "explanation": "PLD = Programmable Logic Device."
  },
  {
    "id": 342,
    "category": "Memory, Logic & PLDs",
    "question": "A PLD is mainly used to:",
    "options": [
      "Store operating systems",
      "Implement custom digital logic",
      "Increase RAM capacity",
      "Replace cache memory"
    ],
    "answerIndex": 1,
    "explanation": "Reconfigurable ICs that implement custom user logic circuits."
  },
  {
    "id": 343,
    "category": "Memory, Logic & PLDs",
    "question": "Which of the following is a Programmable Logic Device?",
    "options": [
      "DRAM",
      "SRAM",
      "PAL",
      "Cache"
    ],
    "answerIndex": 2,
    "explanation": "PAL (Programmable Array Logic)."
  },
  {
    "id": 344,
    "category": "Memory, Logic & PLDs",
    "question": "PAL stands for:",
    "options": [
      "Parallel Array Logic",
      "Programmable Array Logic",
      "Primary Array Logic",
      "Programmed Arithmetic Logic"
    ],
    "answerIndex": 1,
    "explanation": "PAL = Programmable Array Logic (programmable AND array, fixed OR array)."
  },
  {
    "id": 345,
    "category": "Memory, Logic & PLDs",
    "question": "PLA stands for:",
    "options": [
      "Programmable Logic Array",
      "Parallel Logic Array",
      "Primary Logic Array",
      "Programmable Linear Array"
    ],
    "answerIndex": 0,
    "explanation": "PLA = Programmable Logic Array (programmable AND array, programmable OR array)."
  },
  {
    "id": 346,
    "category": "Memory, Logic & PLDs",
    "question": "FPGA stands for:",
    "options": [
      "Fast Programmable Gate Array",
      "Field Programmable Gate Array",
      "Field Programmed General Array",
      "Flexible Programmable Gate Architecture"
    ],
    "answerIndex": 1,
    "explanation": "FPGA = Field Programmable Gate Array."
  },
  {
    "id": 347,
    "category": "Memory, Logic & PLDs",
    "question": "FPGA is primarily used for:",
    "options": [
      "Permanent data storage",
      "Implementing complex digital circuits",
      "Binary addition only",
      "Memory refreshing"
    ],
    "answerIndex": 1,
    "explanation": "High-density reconfigurable logic blocks for complex digital prototypes."
  },
  {
    "id": 348,
    "category": "Memory, Logic & PLDs",
    "question": "Compared to PAL and PLA, FPGA generally provides:",
    "options": [
      "Less flexibility",
      "Greater flexibility",
      "Fewer logic resources",
      "Lower complexity only"
    ],
    "answerIndex": 1,
    "explanation": "FPGAs contain millions of logic gates and RAM blocks with higher routing flexibility."
  },
  {
    "id": 349,
    "category": "Memory, Logic & PLDs",
    "question": "Which of the following memories is both non-volatile and electrically erasable?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "DRAM"
    ],
    "answerIndex": 2,
    "explanation": "EEPROM."
  },
  {
    "id": 350,
    "category": "Memory, Logic & PLDs",
    "question": "Which statement is TRUE?",
    "options": [
      "DRAM is faster than SRAM.",
      "RAM is non-volatile.",
      "ROM is used as temporary memory.",
      "CMOS generally consumes less power than TTL."
    ],
    "answerIndex": 3,
    "explanation": "CMOS has significantly lower static power dissipation than TTL."
  },
  {
    "id": 351,
    "category": "Mixed Revision",
    "question": "Which of the following is NOT a number system?",
    "options": [
      "Binary",
      "Octal",
      "Decimal",
      "ASCII"
    ],
    "answerIndex": 3,
    "explanation": "ASCII is a character encoding standard, not a positional number system."
  },
  {
    "id": 352,
    "category": "Mixed Revision",
    "question": "Which binary code is designed so that adjacent numbers differ by only one bit?",
    "options": [
      "BCD",
      "ASCII",
      "Gray Code",
      "Excess-3"
    ],
    "answerIndex": 2,
    "explanation": "Gray code."
  },
  {
    "id": 353,
    "category": "Mixed Revision",
    "question": "Which code is mainly used to represent alphanumeric characters?",
    "options": [
      "Gray Code",
      "BCD",
      "ASCII",
      "Excess-3"
    ],
    "answerIndex": 2,
    "explanation": "ASCII encodes alphanumeric characters."
  },
  {
    "id": 354,
    "category": "Mixed Revision",
    "question": "The decimal value represented by hexadecimal FF is:",
    "options": [
      "127",
      "128",
      "240",
      "255"
    ],
    "answerIndex": 3,
    "explanation": "15*16 + 15 = 255."
  },
  {
    "id": 355,
    "category": "Mixed Revision",
    "question": "Which representation is most commonly used for signed integers in computers?",
    "options": [
      "BCD",
      "Gray Code",
      "Two's Complement",
      "ASCII"
    ],
    "answerIndex": 2,
    "explanation": "2's complement."
  },
  {
    "id": 356,
    "category": "Mixed Revision",
    "question": "The Boolean expression A + A'B simplifies to:",
    "options": [
      "A + B",
      "AB",
      "A",
      "B"
    ],
    "answerIndex": 0,
    "explanation": "A + A'B = (A + A')(A + B) = (1)(A + B) = A + B."
  },
  {
    "id": 357,
    "category": "Mixed Revision",
    "question": "Which Boolean law is used in simplifying A + A'B = A + B?",
    "options": [
      "Identity Law",
      "DeMorgan's Law",
      "Absorption (Redundancy) Law",
      "Commutative Law"
    ],
    "answerIndex": 2,
    "explanation": "Redundancy / Absorption Law."
  },
  {
    "id": 358,
    "category": "Mixed Revision",
    "question": "Which Boolean expression always evaluates to 1?",
    "options": [
      "A . A'",
      "A + A'",
      "A . 0",
      "A + 0"
    ],
    "answerIndex": 1,
    "explanation": "A + A' = 1."
  },
  {
    "id": 359,
    "category": "Mixed Revision",
    "question": "Which logic gate is called an inverter?",
    "options": [
      "NAND",
      "NOR",
      "NOT",
      "XOR"
    ],
    "answerIndex": 2,
    "explanation": "NOT gate."
  },
  {
    "id": 360,
    "category": "Mixed Revision",
    "question": "Which gate is commonly used to detect inequality between two bits?",
    "options": [
      "AND",
      "OR",
      "XOR",
      "NOR"
    ],
    "answerIndex": 2,
    "explanation": "XOR produces 1 when inputs differ."
  },
  {
    "id": 361,
    "category": "Mixed Revision",
    "question": "Which pair of gates are known as universal gates?",
    "options": [
      "AND and OR",
      "XOR and XNOR",
      "NAND and NOR",
      "AND and NOT"
    ],
    "answerIndex": 2,
    "explanation": "NAND and NOR."
  },
  {
    "id": 362,
    "category": "Mixed Revision",
    "question": "The primary advantage of using universal gates is that:",
    "options": [
      "They consume no power.",
      "Any Boolean function can be implemented using only one type of gate.",
      "They eliminate the need for clocks.",
      "They store binary data."
    ],
    "answerIndex": 1,
    "explanation": "Standardized IC design using a single gate type."
  },
  {
    "id": 363,
    "category": "Mixed Revision",
    "question": "In Karnaugh Maps, a group of 8 cells is:",
    "options": [
      "Invalid",
      "Valid because it is a power of two",
      "Allowed only for 3-variable maps",
      "Allowed only for POS simplification"
    ],
    "answerIndex": 1,
    "explanation": "8 = 2^3, valid K-map group size."
  },
  {
    "id": 364,
    "category": "Mixed Revision",
    "question": "Which statement about K-map grouping is TRUE?",
    "options": [
      "Groups must always contain exactly four cells.",
      "Groups cannot overlap.",
      "Groups may overlap if it leads to further simplification.",
      "Groups must contain odd numbers of cells."
    ],
    "answerIndex": 2,
    "explanation": "Overlapping is allowed to form larger power-of-2 groups."
  },
  {
    "id": 365,
    "category": "Mixed Revision",
    "question": "Which combinational circuit converts binary input into one active output?",
    "options": [
      "Encoder",
      "Comparator",
      "Decoder",
      "Register"
    ],
    "answerIndex": 2,
    "explanation": "Decoder."
  },
  {
    "id": 366,
    "category": "Mixed Revision",
    "question": "Which combinational circuit converts one active input into binary output?",
    "options": [
      "Decoder",
      "Encoder",
      "Multiplexer",
      "Comparator"
    ],
    "answerIndex": 1,
    "explanation": "Encoder."
  },
  {
    "id": 367,
    "category": "Mixed Revision",
    "question": "A 32-to-1 multiplexer requires how many select lines?",
    "options": [
      "4",
      "5",
      "6",
      "8"
    ],
    "answerIndex": 1,
    "explanation": "2^5 = 32, so 5 select lines."
  },
  {
    "id": 368,
    "category": "Mixed Revision",
    "question": "A multiplexer with 2^n input lines requires:",
    "options": [
      "2n select lines",
      "n select lines",
      "n + 1 select lines",
      "n - 1 select lines"
    ],
    "answerIndex": 1,
    "explanation": "n select lines."
  },
  {
    "id": 369,
    "category": "Mixed Revision",
    "question": "Which combinational circuit is commonly used for data routing?",
    "options": [
      "Decoder",
      "Multiplexer",
      "Counter",
      "Register"
    ],
    "answerIndex": 1,
    "explanation": "Multiplexer routes data from multiple sources to a single destination."
  },
  {
    "id": 370,
    "category": "Mixed Revision",
    "question": "Which device performs the reverse operation of a multiplexer?",
    "options": [
      "Decoder",
      "Encoder",
      "Demultiplexer",
      "Comparator"
    ],
    "answerIndex": 2,
    "explanation": "Demultiplexer."
  },
  {
    "id": 371,
    "category": "Mixed Revision",
    "question": "Which flip-flop has no invalid state?",
    "options": [
      "SR",
      "JK",
      "D",
      "T"
    ],
    "answerIndex": 1,
    "explanation": "JK flip-flop handles all input combinations."
  },
  {
    "id": 372,
    "category": "Mixed Revision",
    "question": "Which flip-flop is commonly used to eliminate race-around problems?",
    "options": [
      "SR Flip-Flop",
      "D Flip-Flop",
      "Master-Slave JK Flip-Flop",
      "T Flip-Flop"
    ],
    "answerIndex": 2,
    "explanation": "Master-Slave JK Flip-Flop."
  },
  {
    "id": 373,
    "category": "Mixed Revision",
    "question": "Which flip-flop copies its input directly to the output on the active clock edge?",
    "options": [
      "JK",
      "SR",
      "D",
      "T"
    ],
    "answerIndex": 2,
    "explanation": "D flip-flop Q(n+1) = D."
  },
  {
    "id": 374,
    "category": "Mixed Revision",
    "question": "Which flip-flop is most suitable for binary counters?",
    "options": [
      "SR",
      "D",
      "T",
      "Encoder"
    ],
    "answerIndex": 2,
    "explanation": "T flip-flop toggles output."
  },
  {
    "id": 375,
    "category": "Mixed Revision",
    "question": "Which sequential circuit stores exactly one binary digit?",
    "options": [
      "Register",
      "Counter",
      "Flip-Flop",
      "Decoder"
    ],
    "answerIndex": 2,
    "explanation": "Flip-Flop."
  },
  {
    "id": 376,
    "category": "Mixed Revision",
    "question": "A register is best described as:",
    "options": [
      "A combinational circuit",
      "A group of flip-flops used for data storage",
      "A binary decoder",
      "A data selector"
    ],
    "answerIndex": 1,
    "explanation": "Group of flip-flops."
  },
  {
    "id": 377,
    "category": "Mixed Revision",
    "question": "Which register converts serial input into parallel output?",
    "options": [
      "SISO",
      "SIPO",
      "PISO",
      "PIPO"
    ],
    "answerIndex": 1,
    "explanation": "SIPO."
  },
  {
    "id": 378,
    "category": "Mixed Revision",
    "question": "Which register converts parallel input into serial output?",
    "options": [
      "SISO",
      "SIPO",
      "PISO",
      "PIPO"
    ],
    "answerIndex": 2,
    "explanation": "PISO."
  },
  {
    "id": 379,
    "category": "Mixed Revision",
    "question": "Which counter is faster?",
    "options": [
      "Ripple Counter",
      "Synchronous Counter",
      "Ring Counter",
      "Johnson Counter"
    ],
    "answerIndex": 1,
    "explanation": "Synchronous Counter."
  },
  {
    "id": 380,
    "category": "Mixed Revision",
    "question": "The main disadvantage of ripple counters is:",
    "options": [
      "High cost",
      "Low modulus",
      "Propagation delay",
      "High power consumption"
    ],
    "answerIndex": 2,
    "explanation": "Accumulated ripple propagation delay."
  },
  {
    "id": 381,
    "category": "Mixed Revision",
    "question": "A Johnson counter is also called:",
    "options": [
      "Ripple Counter",
      "Binary Counter",
      "Twisted Ring Counter",
      "Up Counter"
    ],
    "answerIndex": 2,
    "explanation": "Twisted Ring Counter."
  },
  {
    "id": 382,
    "category": "Mixed Revision",
    "question": "A 5-bit ring counter has:",
    "options": [
      "4 states",
      "5 states",
      "10 states",
      "32 states"
    ],
    "answerIndex": 1,
    "explanation": "N bits = 5 states."
  },
  {
    "id": 383,
    "category": "Mixed Revision",
    "question": "A 5-bit Johnson counter has:",
    "options": [
      "5 states",
      "10 states",
      "16 states",
      "32 states"
    ],
    "answerIndex": 1,
    "explanation": "2N bits = 2 * 5 = 10 states."
  },
  {
    "id": 384,
    "category": "Mixed Revision",
    "question": "Which memory is volatile?",
    "options": [
      "ROM",
      "EEPROM",
      "RAM",
      "PROM"
    ],
    "answerIndex": 2,
    "explanation": "RAM."
  },
  {
    "id": 385,
    "category": "Mixed Revision",
    "question": "Which memory retains its contents without electrical power?",
    "options": [
      "RAM",
      "ROM",
      "Cache",
      "DRAM"
    ],
    "answerIndex": 1,
    "explanation": "ROM."
  },
  {
    "id": 386,
    "category": "Mixed Revision",
    "question": "Which RAM requires periodic refreshing?",
    "options": [
      "SRAM",
      "DRAM",
      "EEPROM",
      "PROM"
    ],
    "answerIndex": 1,
    "explanation": "DRAM."
  },
  {
    "id": 387,
    "category": "Mixed Revision",
    "question": "Which RAM is faster?",
    "options": [
      "SRAM",
      "DRAM",
      "ROM",
      "EEPROM"
    ],
    "answerIndex": 0,
    "explanation": "SRAM."
  },
  {
    "id": 388,
    "category": "Mixed Revision",
    "question": "Cache memory is generally implemented using:",
    "options": [
      "DRAM",
      "SRAM",
      "PROM",
      "ROM"
    ],
    "answerIndex": 1,
    "explanation": "SRAM."
  },
  {
    "id": 389,
    "category": "Mixed Revision",
    "question": "Which memory type is electrically erasable and reprogrammable?",
    "options": [
      "PROM",
      "EPROM",
      "EEPROM",
      "SRAM"
    ],
    "answerIndex": 2,
    "explanation": "EEPROM."
  },
  {
    "id": 390,
    "category": "Mixed Revision",
    "question": "CMOS technology is preferred mainly because it:",
    "options": [
      "Requires more power",
      "Consumes less power",
      "Is slower than TTL",
      "Uses analog signals"
    ],
    "answerIndex": 1,
    "explanation": "Low static power dissipation."
  },
  {
    "id": 391,
    "category": "Mixed Revision",
    "question": "Fan-out of a logic gate refers to:",
    "options": [
      "Number of outputs",
      "Number of gate inputs that one output can drive",
      "Number of flip-flops",
      "Number of clock pulses"
    ],
    "answerIndex": 1,
    "explanation": "Number of load gate inputs one output can drive."
  },
  {
    "id": 392,
    "category": "Mixed Revision",
    "question": "Which programmable device offers the greatest flexibility?",
    "options": [
      "PAL",
      "PLA",
      "FPGA",
      "ROM"
    ],
    "answerIndex": 2,
    "explanation": "FPGA."
  },
  {
    "id": 393,
    "category": "Mixed Revision",
    "question": "FPGA stands for:",
    "options": [
      "Fast Programmable Gate Array",
      "Field Programmable Gate Array",
      "Flexible Program Gate Architecture",
      "Field Program General Array"
    ],
    "answerIndex": 1,
    "explanation": "Field Programmable Gate Array."
  },
  {
    "id": 394,
    "category": "Mixed Revision",
    "question": "Which of the following is NOT a combinational circuit?",
    "options": [
      "Encoder",
      "Decoder",
      "Multiplexer",
      "Counter"
    ],
    "answerIndex": 3,
    "explanation": "Counter is a sequential circuit."
  },
  {
    "id": 395,
    "category": "Mixed Revision",
    "question": "Which of the following is NOT a sequential circuit?",
    "options": [
      "Register",
      "Counter",
      "Flip-Flop",
      "Comparator"
    ],
    "answerIndex": 3,
    "explanation": "Comparator is a combinational circuit."
  },
  {
    "id": 396,
    "category": "Mixed Revision",
    "question": "The output of a combinational circuit depends on:",
    "options": [
      "Present inputs only",
      "Previous state only",
      "Clock signal only",
      "Present inputs and previous state"
    ],
    "answerIndex": 0,
    "explanation": "Present inputs only."
  },
  {
    "id": 397,
    "category": "Mixed Revision",
    "question": "The output of a sequential circuit depends on:",
    "options": [
      "Present inputs only",
      "Present inputs and previous state",
      "Previous state only",
      "Clock signal only"
    ],
    "answerIndex": 1,
    "explanation": "Present inputs and previous state."
  },
  {
    "id": 398,
    "category": "Mixed Revision",
    "question": "Which device is the basic building block of digital memory?",
    "options": [
      "Decoder",
      "Multiplexer",
      "Flip-Flop",
      "Comparator"
    ],
    "answerIndex": 2,
    "explanation": "Flip-Flop."
  },
  {
    "id": 399,
    "category": "Mixed Revision",
    "question": "The basic building block of modern digital integrated circuits is:",
    "options": [
      "Transistor",
      "Capacitor",
      "Diode",
      "Resistor"
    ],
    "answerIndex": 0,
    "explanation": "Transistor (MOSFET/CMOS)."
  },
  {
    "id": 400,
    "category": "Mixed Revision",
    "question": "Which statement is correct?",
    "options": [
      "Registers are combinational circuits.",
      "RAM is non-volatile.",
      "Multiplexers have multiple outputs and one input.",
      "Synchronous counters receive the clock signal simultaneously on all flip-flops."
    ],
    "answerIndex": 3,
    "explanation": "Synchronous counters clock all flip-flops simultaneously."
  }
];


const builtInSubjects = {
  "Digital System Design": DSD_MCQS,
  "Computer Networking": NETWORKING_MCQS,
  "Database Management Systems": DBMS_MCQS,
  "Digital Signal Processing": DSP_MCQS,
  "Operating Systems": OPERATING_SYSTEMS_MCQS,
  "Microprocessor": MICROPROCESSOR_MCQS,
  "Software Engineering": SOFTWARE_ENGINEERING_MCQS
};

// Parser utility for user-pasted custom MCQs or facts
function parseRawSubject(subjectName, rawText) {
  if (!rawText || typeof rawText !== "string") return [];

  const lines = rawText.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const parsed = [];
  let currentQ = null;

  lines.forEach((line) => {
    // Check if line starts with a number like "1." or "15." or "Q1:"
    const qMatch = line.match(/^(?:Q|\d+[\.\)]|\#\d+)\s*(.*)/i);
    
    // Check if line is an option like "a)" or "A." or "1)"
    const optMatch = line.match(/^([a-dA-D1-4])[\.\)]\s*(.*)/);
    
    // Check if line indicates correct answer like "Answer: A" or "Correct: b" or marked with checkmark
    const ansMatch = line.match(/^(?:Answer|Correct|Key):\s*([a-dA-D1-4])/i) || line.includes("✅");

    if (qMatch && !optMatch) {
      if (currentQ && currentQ.question) {
        // Finalize previous question
        if (currentQ.options.length < 4) {
          // Pad options if missing
          while (currentQ.options.length < 4) {
            currentQ.options.push(`Option ${String.fromCharCode(65 + currentQ.options.length)}`);
          }
        }
        parsed.push(currentQ);
      }
      currentQ = {
        id: parsed.length + 1,
        category: subjectName || "Custom",
        question: qMatch[1] || line,
        options: [],
        answerIndex: 0,
        explanation: "Custom Imported MCQ"
      };
    } else if (optMatch && currentQ) {
      const optText = optMatch[2].replace("✅", "").trim();
      currentQ.options.push(optText);
      if (line.includes("✅")) {
        currentQ.answerIndex = currentQ.options.length - 1;
      }
    } else if (ansMatch && currentQ) {
      if (typeof ansMatch === "object" && ansMatch[1]) {
        const letter = ansMatch[1].toUpperCase();
        const idx = letter.charCodeAt(0) - 65;
        if (idx >= 0 && idx < 4) currentQ.answerIndex = idx;
      }
    } else if (currentQ) {
      // Append to current question statement if no options yet
      if (currentQ.options.length === 0) {
        currentQ.question += " " + line;
      }
    } else {
      // Standalone simple line fallback
      currentQ = {
        id: parsed.length + 1,
        category: subjectName || "General",
        question: line,
        options: ["True", "False", "Both", "None"],
        answerIndex: 0,
        explanation: "Simple Fact"
      };
      parsed.push(currentQ);
      currentQ = null;
    }
  });

  if (currentQ && currentQ.question) {
    while (currentQ.options.length < 4) {
      currentQ.options.push(`Option ${String.fromCharCode(65 + currentQ.options.length)}`);
    }
    parsed.push(currentQ);
  }

  return parsed;
}

// Expose on global window object
window.factsData = builtInSubjects;
window.parseRawSubject = parseRawSubject;
window.NETWORKING_MCQS = NETWORKING_MCQS;
window.DBMS_MCQS = DBMS_MCQS;
window.DSP_MCQS = DSP_MCQS;
window.OPERATING_SYSTEMS_MCQS = OPERATING_SYSTEMS_MCQS;
window.MICROPROCESSOR_MCQS = MICROPROCESSOR_MCQS;
window.SOFTWARE_ENGINEERING_MCQS = SOFTWARE_ENGINEERING_MCQS;
window.DSD_MCQS = DSD_MCQS;
