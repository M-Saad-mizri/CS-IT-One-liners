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
    explanation: "Network Layer (Layer 3) handles logical addressing (IPv4/IPv6) and packet routing."
  },
  {
    id: 2,
    category: "OSI Model",
    question: "Which OSI layer is responsible for framing?",
    options: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"],
    answerIndex: 1,
    explanation: "Data Link Layer (Layer 2) packages network layer packets into frames for physical transmission."
  },
  {
    id: 3,
    category: "OSI Model",
    question: "Which OSI layer converts bits into electrical, optical, or radio signals?",
    options: ["Physical Layer", "Data Link Layer", "Session Layer", "Network Layer"],
    answerIndex: 0,
    explanation: "Physical Layer (Layer 1) deals with transmitting raw bit streams over physical media."
  },
  {
    id: 4,
    category: "OSI Model",
    question: "Which PDU belongs to the Transport Layer?",
    options: ["Frame", "Packet", "Segment", "Bit"],
    answerIndex: 2,
    explanation: "The Protocol Data Unit (PDU) at Transport Layer is called a Segment (or Datagram for UDP)."
  },
  {
    id: 5,
    category: "OSI Model",
    question: "Which PDU belongs to the Network Layer?",
    options: ["Segment", "Frame", "Packet", "Bit"],
    answerIndex: 2,
    explanation: "The PDU at Network Layer is called a Packet."
  },
  {
    id: 6,
    category: "OSI Model",
    question: "Which OSI layer is responsible for MAC addressing?",
    options: ["Network Layer", "Data Link Layer", "Physical Layer", "Session Layer"],
    answerIndex: 1,
    explanation: "MAC (Media Access Control) addresses reside at the Data Link Layer (Sublayer MAC)."
  },
  {
    id: 7,
    category: "OSI Model",
    question: "Which OSI layer establishes, manages, and terminates communication sessions?",
    options: ["Session Layer", "Network Layer", "Presentation Layer", "Transport Layer"],
    answerIndex: 0,
    explanation: "Session Layer (Layer 5) maintains connection checkpoints, dialogues, and session teardowns."
  },
  {
    id: 8,
    category: "OSI Model",
    question: "Data encryption is mainly performed at which OSI layer?",
    options: ["Application", "Presentation", "Session", "Transport"],
    answerIndex: 1,
    explanation: "Presentation Layer (Layer 6) manages syntax, data formatting, compression, and encryption/decryption."
  },
  {
    id: 9,
    category: "OSI Model",
    question: "Which layer translates different data formats between systems?",
    options: ["Session", "Presentation", "Transport", "Data Link"],
    answerIndex: 1,
    explanation: "Presentation Layer standardizes formats (ASCII, EBCDIC, JPEG, SSL/TLS data representations)."
  },
  {
    id: 10,
    category: "OSI Model",
    question: "Which layer provides services directly to end-user applications?",
    options: ["Presentation", "Session", "Application", "Transport"],
    answerIndex: 2,
    explanation: "Application Layer (Layer 7) provides protocols directly used by user software (HTTP, FTP, SMTP)."
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

const builtInSubjects = {
  "Computer Networking": NETWORKING_MCQS,
  "Operating Systems": OPERATING_SYSTEMS_MCQS
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
window.OPERATING_SYSTEMS_MCQS = OPERATING_SYSTEMS_MCQS;
