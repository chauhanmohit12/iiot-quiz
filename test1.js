const testset1 = {
  title: "test set 1",
  questions: [
    {
      q: "In a distributed IoT system, what is the primary architectural trade-off when deciding between Fog Computing and pure Cloud Computing for data processing?",
      options: [
        "a. Fog requires higher latency but better data security.",
        "b. Cloud offers better scalability but Fog provides lower latency and edge processing.",
        "c. Fog is only suitable for static data while Cloud handles dynamic data.",
        "d. There is no trade-off; they are interchangeable."
      ],
      answer: 1 // Focus on the latency vs. scalability trade-off
    },
    {
      q: "When migrating an application from IaaS to PaaS, what is the most significant shift in the operational responsibility of the client?",
      options: [
        "a. The client is now responsible for managing the entire OS and runtime environment.",
        "b. The client shifts focus from infrastructure management (OS, middleware) to application code and deployment.",
        "c. The client loses control over the underlying network configuration.",
        "d. The client must now implement custom security protocols for the physical hardware."
      ],
      answer: 1 // Focus on the shift in responsibility
    },
    {
      q: "In the context of VANETs, what distinguishes an Ad-hoc network from a DSRC (Dedicated Short Range Communication) network regarding routing and infrastructure?",
      options: [
        "a. Ad-hoc networks require fixed infrastructure, whereas DSRC is purely decentralized.",
        "b. Ad-hoc networks rely on dynamic, multi-hop routing protocols, while DSRC specifies a communication standard layer.",
        "c. DSRC only supports in-vehicle communication, while Ad-hoc supports general IoT devices.",
        "d. There is no difference; they are synonyms for vehicular networking."
      ],
      answer: 1 // Focus on the difference between routing/protocol vs. communication standard
    },
    {
      q: "Which security mechanism is most effective for establishing trust and ensuring data integrity in a multi-entity IoT environment?",
      options: [
        "a. Simple password-based authentication",
        "b. End-to-end encryption combined with dynamic reputation scoring",
        "c. Relying solely on IP address filtering",
        "d. Implementing only physical access controls"
      ],
      answer: 1 // Focus on the combination of cryptographic security and reputation (drawing from Citation 2 themes)
    },
    {
      q: "A cloud simulation platform like GreenCloud primarily aims to model which aspect of cloud environments?",
      options: [
        "a. The physical limitations of server hardware.",
        "b. The dynamic resource allocation, energy consumption, and networking of simulated cloud deployments.",
        "c. The specific code deployment process for enterprise applications.",
        "d. The legal and regulatory framework for data storage."
      ],
      answer: 1 // Focus on the simulation/monitoring aspect
    },
    {
      q: "If a system is designed to handle extremely time-sensitive data streams (e.g., autonomous vehicle control), which constraint must be prioritized over maximizing data volume?",
      options: [
        "a. Maximizing data volume",
        "b. Minimizing latency",
        "c. Maximizing energy efficiency",
        "d. Minimizing storage costs"
      ],
      answer: 1 // Focus on the priority of time-sensitivity
    },
    {
      q: "Which of the following statements best describes the role of an IoT Gateway in a complex industrial setting?",
      options: [
        "a. It acts only as a simple protocol translator between devices and the cloud.",
        "b. It aggregates, preprocesses, and secures data from disparate local sensors before forwarding it to the WAN.",
        "c. It is solely responsible for managing the physical security of the local network.",
        "d. It functions purely as a local router with no intelligence layer."
      ],
      answer: 1 // Focus on the aggregation, preprocessing, and security functions
    },
    {
      q: "What is the fundamental challenge in scaling IoT security across a massive number of heterogeneous devices?",
      options: [
        "a. The inability to implement simple encryption algorithms.",
        "b. Managing diverse security policies, ensuring device onboarding security, and maintaining a dynamic reputation system.",
        "c. The lack of available cloud infrastructure.",
        "d. The physical impossibility of achieving perfect data isolation."
      ],
      answer: 1 // Focus on the complexity of heterogeneous security management
    }
  ]
};
