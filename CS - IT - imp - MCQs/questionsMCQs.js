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
const builtInSubjects = {
  "Computer Networking": NETWORKING_MCQS
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
