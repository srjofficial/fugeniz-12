// Events data for BODHI (Technical) and DRISHYA (Arts) pages

// Department-based structure
export const departments = [
    {
        id: "ai-ds",
        name: "Artificial Intelligence & Data Science Engineering ",
        abbr: "AI & DS",
        slug: "ai-ds",
        events: [
            {
                name: "CODERIFT",
                category: "GAME ZONE",
                dept: "AI & DS",
                description: "CODERIFT is a next-gen tech mystery hunt that challenges teams to decode patterns, interpret hidden systems, and uncover layered clues across digital and physical spaces. Players must rely on logic, observation, and technical intuition to progress—no obvious hints, just pure problem-solving under pressure.",
                image: "/images/events/coderift.png",
                prize: "10,000/-",
                fee: "90 per head",
                venue: "Mini Auditorium",
                formLink: "https://docs.google.com/forms/d/e/1FAIpQLSeopnTx9xdxIFVf9PHYG_wrwtY_OOo71exCN2CIh0sKzQ_vWQ/viewform?usp=publish-editor",
                date: "Feb 25",
                time: "1:00 PM",
                teamSize: "2-4 Members",
                coordinators: [
                    { name: "Ansaj", phone: "9895155001" },
                    { name: "Athul", phone: "9645028366" }
                ]
            },
            {
                name: "FRAMEDROP",
                category: "GAME ZONE",
                dept: "AI & DS",
                description: "A high-intensity competitive gaming event where players enter structured FIFA and FORZA HORIZON challenges across top titles and battle through tight brackets to climb the leaderboard and win real rewards. The stakes stay serious and the matches stay competitive. Once you’re done competing, step into the open console zones for uninterrupted gameplay and pure gaming thrill. No filler—just skill, reflex, and nonstop action. 🎮",
                image: "/images/events/framedrop.jpeg",
                prize: "5,000/-",
                fee: "100/- per Team",
                venue: "B102",
                formLink: "https://docs.google.com/forms/d/e/1FAIpQLSelnc9LOiDgN76FAKLFBqOxDR7B_7yjCai0K085IMlxAEMmDg/viewform?usp=publish-editor",
                date: "Feb 25-26",
                time: "10:00 AM - 4:00 PM",
                teamSize: "2 Members",
                coordinators: [
                    { name: "Alan Biju", phone: "8921208615" },
                    { name: "Devadath", phone: "8075360352" }
                ]
            }
        ]
    },
    {
        id: "computer-science",
        name: "Computer Science Engineering",
        abbr: "CSE",
        slug: "computer-science",
        events: [
            {
                name: "CODE AND CHAOS",
                category: "HACKATHON",
                dept: "CSE",
                description: "A 14 hour overnight hackathon based on the theme of Sustainable development. Build functional and scalable solutions for socially relevant problems.",
                image: "/images/events/codeandchaos.png",
                venue: "Programming Lab & AD Lab",
                coordinators: [
                    { name: "Benedict Chacko Mathew", phone: "6282031325" },
                    { name: "Kripa Sajo", phone: "8714031195" }
                ],
                prize: "25000/-",
                fee: "100 per head",
                formLink: "https://code-and-chaos.netlify.app/registration",
                date: "Feb 25-26",
                time: "6:00 PM-8:00 AM",
                teamSize: "1-4 Members",
                rules: [
                    "Teams should bring their own laptops and hardware kits.",
                    "Internet connectivity and power sockets will be provided.",
                    "The hackathon duration is 14 hours overnight.",
                    "Project must be built from scratch during the event."
                ]
            },
            {
                name: "TECH ARENA",
                category: "TECHNICAL",
                dept: "CSE",
                description: "A three level technical competition consisting file decryption, technical quizzes, and a final startup pitch.",
                image: "/images/events/techarena.jpeg",
                prize: "10,000/-",
                fee: "50 per head",
                date: "Feb 25",
                time: "11:00 AM",
                venue: "CCC lab",
                teamSize: "2 Members",
                formLink: "https://forms.gle/3GYJwFezqoUR5BLx8",
                coordinators: [
                    { name: "Sarah Swetha Thomas", phone: "8714793842" },
                    { name: "Eldho Aby", phone: "8281469701" }
                ]
            },
            {
                name: "STRANGER THINGS",
                category: "GAME",
                dept: "CSE",
                description: "A theme based treasure hunt event where participants solve puzzles, follow clues and survive multiple elimination rounds.",
                image: "/images/events/strangerthings.jpeg",
                prize: "10,000/-",
                fee: "50 per head",
                date: "Feb 26",
                time: "10:00 AM",
                venue: "4 Classrooms near CCC",
                teamSize: "4 Members",
                formLink: "https://forms.gle/cw4YFuzfb9vFFHPd7",
                coordinators: [
                    { name: "Deon Johny", phone: "9188083702" },
                    { name: "Keerthana K Anil", phone: "7306749927" }
                ]
            },
            {
                name: "QUIRK QUEST",
                category: "TECHNICAL",
                dept: "CSE",
                description: "A creative tech inspired competition involving puzzle challenges, prompt making, and a final craft and quiz fusion round.",
                image: "/images/events/quirkquest.jpeg",
                prize: "5,000/-",
                date: "Feb 26",
                time: "11:00 AM",
                fee: "50 per head",
                venue: "TBA",
                teamSize: "2 Members",
                formLink: "https://forms.gle/FogomJ9vV5YYg2iR9",
                coordinators: [
                    { name: "Neethu Cheriyan", phone: "9188654452" },
                    { name: "Brijil Thengumthottathil", phone: "9895107690" }
                ]
            }
        ]
    },
    {
        id: "computer-science-design",
        name: "Computer Science and Design Engineering",
        abbr: "CSD",
        slug: "computer-science-design",
        events: [
            {
                name: "FUNFINITY",
                category: "GAMES",
                dept: "CSD",
                description: `Funfinity is your ultimate fun zone at Bodhi 2026 — a vibrant space packed with games, challenges, and nonstop excitement. Walk in, play hard, and make it unforgettable.🎯 Games Lineup:

🔥 ZING – A fast paced ball throwing challenge.
🗝️ JUMANJI – An escape room packed with puzzles and surprises.
🎮 PLAYVERSE – VR and console gaming zone for immersive thrills.
🚩 Capture The Flag – Strategy, speed, and competitive action.`,
                image: "/images/events/fun.png",
                prize: "TBA",
                fee: "Spot Registration",
                venue: "D Block, Ground Floor",
                formLink: "#",
                date: "Feb 25-26",
                time: "Day 1: 1:45 PM - 4:00 PM | Day 2: 9:00 AM - 12:00 PM",
                teamSize: "Based on Games",
                coordinators: [
                    { name: "Dhanush", phone: "9605561391" },
                    { name: "Revathy", phone: "6238472684" }
                ]
            },
            {
                name: "AI VisionX",
                category: "WORKSHOP",
                dept: "CSD",
                description: "Learn how to generate, edit, and enhance eye catching visuals with ease. Perfect for beginners and creators who want to turn ideas into scroll stopping content.",
                image: "/images/events/vision.png",
                prize: "TBA",
                fee: "100 per Head",
                date: "Feb 26",
                time: "9:30 AM-12:30 PM",
                venue: "MBA Seminar Hall",
                teamSize: "Individual Event",
                formLink: "https://forms.gle/q2ApYe5safAjR8cj7",
                coordinators: [
                    { name: "Glen Jacob", phone: "7560851620" },
                    { name: "Naeema", phone: "8129440753" }
                ]
            }
        ]
    },
    {
        id: "information-technology",
        name: "Information Technology Engineering",
        abbr: "IT",
        slug: "information-technology",
        events: [
            {
                name: "SECUREBREAK",
                category: "TECHNICAL",
                dept: "IT",
                description: "Full-day experience learning to think like attackers. Recon → Exploitation → Reporting with live demos and CTF.",
                image: "/images/events/penetration.png",
                prize: "4,000/-",
                fee: "100/- per Head",
                date: "Feb 26",
                time: "10:00 AM",
                venue: "Programming lab",
                formLink: "https://forms.gle/AYfC9wAqWvxxuhfYA",
                coordinators: [
                    { name: "Abhijit Shaji", phone: "9526494491" },
                    { name: "Nivin K Sunil", phone: "8714930113" }
                ]
            },
            {
                name: "DRONEX: From Toy to Tactical",
                category: "WORKSHOP",
                dept: "IT",
                description: "Hands-on workshop introducing drone technology fundamentals, real-world uses, safety, and live flight demos.",
                image: "/images/events/drone.png",
                prize: "TBA",
                fee: "100/-",
                date: "Feb 25",
                time: "1:00 PM",
                venue: "Programming Lab",
                formLink: "https://forms.gle/4pgNiPDgYEYrGgX39",
                coordinators: [
                    { name: "Joyal Sojan", phone: "6282657146" },
                    { name: "Anusha Saji", phone: "8547935816" }
                ]
            }
        ]
    },
    {
        id: "eee",
        name: "Electrical and Electronics Engineering",
        abbr: "EEE",
        slug: "eee",
        events: [
            {
                name: "HACKTRONICS",
                category: "HACKATHON",
                dept: "EEE",
                description: " HACKTRONICS is a 12-hour hardware-based hackathon where participants can propose and develop their own creative projects throughout the event.",
                image: "/images/events/eeehack.jpeg",
                prize: "11,000",
                fee: "250 per team",
                date: "Feb 25-26",
                time: "7:30 PM -7:30 AM",
                venue: "Circuits and Systems Lab",
                teamSize: "Max 2 Members",
                formLink: "https://forms.gle/cDfvYqJYyDkLH25Z6 ",
                coordinators: [
                    { name: "Abraham", phone: "8547436923" },
                    { name: "Ashker", phone: "9946436741" }
                ]
            },
            {
                name: "REAL STEEL",
                category: "TECHNICAL",
                dept: "EEE",
                description: "High-intensity Robo War competition where teams battle custom-built robots in an enclosed arena.",
                image: "/images/events/realsteel.png",
                venue: "Main Auditorium",
                coordinators: [
                    { name: "Akshai", phone: "9048201463" },
                    { name: "Nikhil", phone: "9847416348" }
                ],
                prize: "15000",
                fee: "200 per Team",
                date: "Feb 26",
                time: "11:00 AM",
                formLink: "https://forms.gle/PT6RgCnFVrYhf3zY6",
                teamSize: "Max 4 Members",
                rules: [
                    "Robots must comply with the 30kg weight category specifications.",
                    "Wireless control is mandatory; tethered control is strictly prohibited.",
                    "Standard arena safety protocols must be followed during weapon testing.",
                    "Double elimination bracket system will be followed."
                ]
            }
        ]
    },
    {
        id: "electronics-communication",
        name: "Electronics & Communication Engineering",
        abbr: "ECE",
        slug: "electronics-communication",
        events: [
            {
                name: "3S BASH",
                category: "GAME",
                dept: "ECE",
                description: "Exciting mini-football tournament featuring teams of three. Fast, dynamic, and action-packed.",
                image: "/images/events/football.png",
                prize: "9,000/-",
                fee: "400 per Team",
                date: "Feb 26",
                time: "9:00 AM",
                venue: "R and D ground",
                teamSize: "3+2 (3 players + 2 substitutes)",
                formLink: "https://docs.google.com/forms/d/e/1FAIpQLSf3cCUNw6QSs8gBCfllPqB1hJJbeJ_u59C_FF-fpsz9j7egDg/viewform?usp=dialog",
                coordinators: [
                    { name: "Hisham Ebrahim", phone: "9633582362" },
                    { name: "Dheeraj S.M", phone: "8078070248" }
                ]
            },
            {
                name: "TECH TRAVERSE",
                category: "TECHNICAL",
                dept: "ECE",
                description: `This is an open-call for all engineering batches to showcase their most innovative and creative solutions. If you have a problem-solving mindset, we have a booth for you.
Whether you've built a physical Working Model 🛠️ or a groundbreaking Software Project 💻, this is your platform to shine.`,
                image: "/images/events/project.png",
                prize: "18,000/-",
                fee: "300 per team ",
                date: "Feb 25",
                time: "10:00 AM",
                venue: "Communication Lab 1 & 2",
                teamSize: "Max 4 Members",
                formLink: "https://forms.gle/PUSsWfdADLjH99Hp7",
                coordinators: [
                    { name: "Bazil Abee", phone: "7736851614" },
                    { name: "Ryan Ajil", phone: "9946252194" }
                ]
            }
        ]
    },
    {
        id: "civil",
        name: "Civil Engineering",
        abbr: "CIVIL",
        slug: "civil",
        events: [
            {
                name: "Bridge Building Competition",
                category: "MECH & MATTER ARENA",
                dept: "CIVIL",
                description: `The Bridge Making Competition is a hands-on engineering challenge where participants design and build a load-bearing bridge using popsicle (ice-cream) sticks and approved adhesives.
The event evaluates structural strength, efficiency, and smart design through controlled load testing`,
                image: "/images/events/bridge.png",
                prize: "5500",
                fee: "300 per Team",
                venue: "Concrete Lab",
                formLink: "https://forms.gle/PvkpgZXnroEnvBey7",
                date: "Feb 26",
                time: "10:30 AM - 4:00 PM",
                teamSize: "1-4 Members",
                coordinators: [
                    { name: "VINAYAK MANOHARAN", phone: "974638658" },
                    { name: "DELLA MARIYA GEORGE", phone: "9496740039" }
                ]
            },
            {
                name: "Concrete Cube Making Competition",
                category: "MECH & MATTER ARENA",
                dept: "CIVIL",
                description: `Are you ready to test your engineering instincts?
The Concrete Cube Making Competition 2026 – challenges you to cast a concrete cube that can withstand maximum compressive strength during testing.

Participants will compete in two exciting stages:
Stage 1: “Forge Phase” (Preparation Stage)— Teams will design and prepare their concrete mix using materials provided by the college.
Stage 2: “Titan Trial” (Testing Stage)— The prepared cubes will undergo professional compressive strength testing.

Basic Civil Engineering knowledge is sufficient to participate.`,
                image: "/images/events/cube.png",
                prize: "7500/-",
                fee: "500 per Team",
                venue: "GEOTECHNICAL ENGINEERING LABORATORY",
                formLink: "https://forms.gle/cyFTCYh79jKGnH4N6",
                date: "Feb 17",
                time: "10:30 AM-4:10 PM",
                teamSize: "Max 4 Members",
                coordinators: [
                    { name: "Mathews Thomas", phone: "7510567627" },
                    { name: "Aswin P Nair", phone: "6238701144" }
                ]
            }
        ]
    },
    {
        id: "mechanical",
        name: "Mechanical Engineering",
        abbr: "MECH",
        slug: "mechanical",
        events: [
            {
                name: "CAD MASTERS",
                category: "TECHNICAL",
                dept: "MECH",
                description: `The ultimate battlefield for designers is here.Where creativity meets accuracy.Where speed meets skill.Think you have what it takes to become a true CAD Master? 👑`,
                image: "/images/events/cad.png",
                prize: "1,500/-",
                fee: "50",
                venue: "Computer Lab, Mechanical Engineering Department, C Block 2nd Floor (C303)",
                formLink: "https://forms.gle/R9GfsG528LGoCHSFA",
                date: "Feb 25",
                time: "1:30 PM-2:30 PM",
                teamSize: "Individual Event",
                coordinators: [
                    { name: "Jentle Santhosh", phone: "9048404375" },
                    { name: "Bestin Shaju", phone: "740625689" }
                ]
            },
            {
                name: "ECU Tuning Workshop",
                category: "WORKSHOP",
                dept: "MECH",
                description: "Hands-on workshop on ECU tuning and vehicle performance optimization.",
                image: "/images/events/ecu.png",
                prize: "TBA",
                fee: "150",
                date: "Feb 26",
                time: "9:30 AM-12:30 PM",
                venue: "Mechanical Heat Engine Lab",
                teamSize: "Individual Event",
                formLink: "https://forms.gle/pMLHMCdEc9swMDTz7",
                coordinators: [
                    { name: "Athul Manoj", phone: "8590889549" },
                    { name: "Albin Roy", phone: "8848961032" }
                ]
            }
        ]
    },
    {
        id: "robotics-club",
        name: "Robotics Club",
        abbr: "ROBOTICS",
        slug: "robotics-club",
        events: [
            {
                name: "PATHX ",
                category: "TECHNICAL",
                dept: "ROBOTICS",
                description: `Build a fully autonomous bot capable of navigating a complex labyrinth of curves, intersections, and sharp turns in the shortest time possible. No remotes, no mercy—just pure code and sensors.
Calibration is Key: Can your sensors handle the glare?
Speed vs. Stability: Will you floor it or play it safe?
The Finish Line: Only the most optimized PID loops will survive.`,
                image: "/images/events/line.png",
                prize: "8,000/-",
                fee: "300 per Team",
                venue: "Circuits Lab 1 & 2",
                formLink: "https://forms.gle/TaAbq6QhRQ9NrzU88",
                date: "Feb 25",
                time: "10:00 AM",
                teamSize: "1-6 Members",
                coordinators: [
                    { name: "Don Dixon", phone: "9496693632" },
                    { name: "Albert Joseph", phone: "8590792532" }
                ]
            }
        ]
    },
    {
        id: "tinkerhub",
        name: "TinkerHub VJCET",
        abbr: "TINKERHUB",
        slug: "tinkerhub",
        events: [
            {
                name: "SOURCE CODE",
                category: "TECHNICAL",
                dept: "TINKERHUB",
                description: `Rebuilding with AI Prompt\n\nEver opened a website and wondered how it was built? At Bodhi 2026, TinkerHub VJCET gives you the chance to try it yourself. We'll provide a fully developed website, and your task is to recreate it as accurately as possible. You can use any tools (even AI 😌), notice the details, understand the structure, and build it cleanly.`,
                image: "/images/events/sourcecode.png",
                prize: "5,000/-",
                fee: "Free Registration",
                date: "Feb 25",
                time: "1:30 PM - 4:00 PM",
                venue: "TBA",
                teamSize: "Individual Event",
                formLink: "https://tinkerhub.org/events/4CW072REQ9/source-code",
                coordinators: [
                    { name: "Sebin Geo", phone: "9778396955" },
                    { name: "Anna Ajay", phone: "8289952499" }
                ]
            }
        ]
    }
]

// Category-based zones (for alternate view)
export const eventZones = [
    {
        id: "hackathon",
        title: "HACKATHON",
        tagline: "Build. Break. Innovate.",
        icon: "",
        events: [
            {
                name: "CODE AND CHAOS",
                category: "HACKATHON",
                dept: "CSE",
                description: "A 14 hour overnight hackathon based on the theme of Sustainable development. Build functional and scalable solutions for socially relevant problems.",
                image: "/images/events/codeandchaos.png",
                venue: "Programming Lab & AD Lab",
                coordinators: [
                    { name: "Benedict Chacko Mathew", phone: "6282031325" },
                    { name: "Kripa Sajo", phone: "8714031195" }
                ],
                prize: "25000/-",
                fee: "100 per head",
                formLink: "https://code-and-chaos.netlify.app/registration",
                date: "Feb 25-26",
                time: "6:00 PM-8:00 AM",
                teamSize: "1-4 Members",
                rules: [
                    "Teams should bring their own laptops and hardware kits.",
                    "Internet connectivity and power sockets will be provided.",
                    "The hackathon duration is 14 hours overnight.",
                    "Project must be built from scratch during the event."
                ]
            },
            {
                name: "HACKTRONICS",
                category: "HACKATHON",
                dept: "EEE",
                description: " HACKTRONICS is a 12-hour hardware-based hackathon where participants can propose and develop their own creative projects throughout the event.",
                image: "/images/events/eeehack.jpeg",
                prize: "11,000",
                fee: "250 per team",
                date: "Feb 25-26",
                time: "7:30 PM - 7:30 AM",
                venue: "Circuits and Systems Lab",
                teamSize: "Max 2 Members",
                formLink: "https://forms.gle/cDfvYqJYyDkLH25Z6 ",
                coordinators: [
                    { name: "Abraham", phone: "8547436923" },
                    { name: "Ashker", phone: "9946436741" }
                ]
            },
        ]
    },
    {
        id: "technical",
        title: "TECHNICAL",
        tagline: "Logic. Skill. Precision.",
        icon: "",
        events: [
            {
                name: "TECH ARENA",
                category: "TECHNICAL",
                dept: "CSE",
                description: "A three level technical competition consisting file decryption, technical quizzes, and a final startup pitch.",
                image: "/images/events/techarena.jpeg",
                prize: "10,000/-",
                fee: "50 per head",
                date: "Feb 25",
                time: "11:00 AM",
                venue: "CCC lab",
                teamSize: "2 Members",
                formLink: "https://forms.gle/3GYJwFezqoUR5BLx8",
                coordinators: [
                    { name: "Sarah Swetha Thomas", phone: "8714793842" },
                    { name: "Eldho Aby", phone: "8281469701" }
                ]
            },
            {
                name: "QUIRK QUEST",
                category: "TECHNICAL",
                dept: "CSE",
                description: "A creative tech inspired competition involving puzzle challenges, prompt making, and a final craft and quiz fusion round.",
                image: "/images/events/quirkquest.jpeg",
                prize: "5,000/-",
                date: "Feb 26",
                time: "11:00 AM",
                fee: "50 per head",
                venue: "TBA",
                teamSize: "2 Members",
                formLink: "https://forms.gle/FogomJ9vV5YYg2iR9",
                coordinators: [
                    { name: "Neethu Cheriyan", phone: "9188654452" },
                    { name: "Brijil Thengumthottathil", phone: "9895107690" }
                ]
            },
            {
                name: "TECH TRAVERSE",
                category: "TECHNICAL",
                dept: "ECE",
                description: `This is an open-call for all engineering batches to showcase their most innovative and creative solutions. If you have a problem-solving mindset, we have a booth for you.
Whether you've built a physical Working Model 🛠️ or a groundbreaking Software Project 💻, this is your platform to shine.`,
                image: "/images/events/project.png",
                prize: "18,000/-",
                fee: "300 per team ",
                date: "Feb 25",
                time: "10:00 AM",
                venue: "Communication Lab 1 & 2",
                teamSize: "Max 4 Members",
                formLink: "https://forms.gle/PUSsWfdADLjH99Hp7",
                coordinators: [
                    { name: "Bazil Abee", phone: "7736851614" },
                    { name: "Ryan Ajil", phone: "9946252194" }
                ]
            },
            {
                name: "CAD MASTERS",
                category: "TECHNICAL",
                dept: "MECH",
                description: `The ultimate battlefield for designers is here.Where creativity meets accuracy.Where speed meets skill.Think you have what it takes to become a true CAD Master? 👑`,
                image: "/images/events/cad.png",
                prize: "1,500/-",
                fee: "50",
                venue: "Computer Lab, Mechanical Engineering Department, C Block 2nd Floor (C303)",
                formLink: "https://forms.gle/R9GfsG528LGoCHSFA",
                date: "Feb 25",
                time: "1:30 PM-2:30 PM",
                teamSize: "Individual Event",
                coordinators: [
                    { name: "Jentle Santhosh", phone: "9048404375" },
                    { name: "Bestin Shaju", phone: "740625689" }
                ]
            },
            {
                name: "SECUREBREAK",
                category: "TECHNICAL",
                dept: "IT",
                description: "Full-day experience learning to think like attackers. Recon → Exploitation → Reporting with live demos and CTF.",
                image: "/images/events/penetration.png",
                prize: "4,000/-",
                fee: "100/- per Head",
                date: "Feb 26",
                time: "10:00 AM",
                venue: "Programming lab",
                formLink: "https://forms.gle/AYfC9wAqWvxxuhfYA",
                coordinators: [
                    { name: "Abhijit Shaji", phone: "9526494491" },
                    { name: "Nivin K Sunil", phone: "8714930113" }
                ]
            },
            {
                name: "REAL STEEL",
                category: "TECHNICAL",
                dept: "EEE",
                description: "High-intensity Robo War competition where teams battle custom-built robots in an enclosed arena.",
                image: "/images/events/realsteel.png",
                venue: "Main Auditorium",
                coordinators: [
                    { name: "Akshai", phone: "9048201463" },
                    { name: "Nikhil", phone: "9847416348" }
                ],
                prize: "15000",
                fee: "200 per Team",
                date: "Feb 26",
                time: "11:00 AM",
                formLink: "https://forms.gle/PT6RgCnFVrYhf3zY6",
                teamSize: "Max 4 Members",
                rules: [
                    "Robots must comply with the 30kg weight category specifications.",
                    "Wireless control is mandatory; tethered control is strictly prohibited.",
                    "Standard arena safety protocols must be followed during weapon testing.",
                    "Double elimination bracket system will be followed."
                ]
            },

            {
                name: "PATHX",
                category: "TECHNICAL",
                dept: "ROBOTICS",
                description: `Build a fully autonomous bot capable of navigating a complex labyrinth of curves, intersections, and sharp turns in the shortest time possible. No remotes, no mercy—just pure code and sensors.
Calibration is Key: Can your sensors handle the glare?
Speed vs. Stability: Will you floor it or play it safe?
The Finish Line: Only the most optimized PID loops will survive.`,
                image: "/images/events/line.png",
                prize: "8,000/-",
                fee: "300 per Team",
                venue: "Circuits Lab 1 & 2",
                formLink: "https://forms.gle/TaAbq6QhRQ9NrzU88",
                date: "Feb 25",
                time: "10:00 AM",
                teamSize: "1-6 Members",
                coordinators: [
                    { name: "Don Dixon", phone: "9496693632" },
                    { name: "Albert Joseph", phone: "8590792532" }
                ]
            },
            {
                name: "SOURCE CODE",
                category: "TECHNICAL",
                dept: "TINKERHUB",
                description: `Rebuilding with AI Prompt\n\nEver opened a website and wondered how it was built? At Bodhi 2026, TinkerHub VJCET gives you the chance to try it yourself. We'll provide a fully developed website, and your task is to recreate it as accurately as possible. You can use any tools (even AI 😌), notice the details, understand the structure, and build it cleanly.`,
                image: "/images/events/sourcecode.png",
                prize: "5,000/-",
                fee: "Free Registration",
                date: "Feb 25",
                time: "1:30 PM - 4:00 PM",
                venue: "TBA",
                teamSize: "Individual Event",
                formLink: "https://tinkerhub.org/events/4CW072REQ9/source-code",
                coordinators: [
                    { name: "Sebin Geo", phone: "9778396955" },
                    { name: "Anna Ajay", phone: "8289952499" }
                ]
            }
        ]
    },
    {
        id: "game-zone",
        title: "GAME ZONE",
        tagline: "Play fast. Play smart. Play to win.",
        icon: "",
        events: [
            {
                name: "CODERIFT",
                category: "GAME ZONE",
                dept: "AI & DS",
                description: "CODERIFT is a next-gen tech mystery hunt that challenges teams to decode patterns, interpret hidden systems, and uncover layered clues across digital and physical spaces. Players must rely on logic, observation, and technical intuition to progress—no obvious hints, just pure problem-solving under pressure.",
                image: "/images/events/coderift.png",
                prize: "10,000/-",
                fee: "90 per head",
                venue: "Mini Auditorium",
                formLink: "https://docs.google.com/forms/d/e/1FAIpQLSeopnTx9xdxIFVf9PHYG_wrwtY_OOo71exCN2CIh0sKzQ_vWQ/viewform?usp=publish-editor",
                date: "Feb 25",
                time: "1:00 PM",
                teamSize: "2-4 Members",
                coordinators: [
                    { name: "Ansaj", phone: "9895155001" },
                    { name: "Athul", phone: "9645028366" }
                ]
            },
            {
                name: "FRAMEDROP",
                category: "GAME ZONE",
                dept: "AI & DS",
                description: "A high-intensity competitive gaming event where players enter structured FIFA and FORZA HORIZON challenges across top titles and battle through tight brackets to climb the leaderboard and win real rewards. The stakes stay serious and the matches stay competitive. Once you’re done competing, step into the open console zones for uninterrupted gameplay and pure gaming thrill. No filler—just skill, reflex, and nonstop action. 🎮",
                image: "/images/events/framedrop.jpeg",
                prize: "5,000/-",
                fee: "100/- per Team",
                venue: "B102",
                formLink: "https://docs.google.com/forms/d/e/1FAIpQLSelnc9LOiDgN76FAKLFBqOxDR7B_7yjCai0K085IMlxAEMmDg/viewform?usp=publish-editor",
                date: "Feb 25-26",
                time: "10:00 AM - 4:00 PM",
                teamSize: "2 Members",
                coordinators: [
                    { name: "Alan Biju", phone: "8921208615" },
                    { name: "Devadath", phone: "8075360352" }
                ]
            },

            {
                name: "STRANGER THINGS",
                category: "GAME",
                dept: "CSE",
                description: "A theme based treasure hunt event where participants solve puzzles, follow clues and survive multiple elimination rounds.",
                image: "/images/events/strangerthings.jpeg",
                prize: "10,000/-",
                fee: "50 per head",
                date: "Feb 26",
                time: "10:00 AM",
                venue: "4 Classrooms near CCC",
                teamSize: "4 Members",
                formLink: "https://forms.gle/cw4YFuzfb9vFFHPd7",
                coordinators: [
                    { name: "Deon Johny", phone: "9188083702" },
                    { name: "Keerthana K Anil", phone: "7306749927" }
                ]
            },
            {
                name: "3S BASH",
                category: "GAME",
                dept: "ECE",
                description: "Exciting mini-football tournament featuring teams of three. Fast, dynamic, and action-packed.",
                image: "/images/events/football.png",
                prize: "9,000/-",
                fee: "400 per Team",
                date: "Feb 26",
                time: "9:00 AM",
                venue: "R and D ground",
                teamSize: "3+2 (3 players + 2 substitutes)",
                formLink: "https://docs.google.com/forms/d/e/1FAIpQLSf3cCUNw6QSs8gBCfllPqB1hJJbeJ_u59C_FF-fpsz9j7egDg/viewform?usp=dialog",
                coordinators: [
                    { name: "Hisham Ebrahim", phone: "9633582362" },
                    { name: "Dheeraj S.M", phone: "8078070248" }
                ]
            },
            {
                name: "FUNFINITY",
                category: "GAMES",
                dept: "CSD",
                description: `Funfinity is your ultimate fun zone at Bodhi 2026 — a vibrant space packed with games, challenges, and nonstop excitement. Walk in, play hard, and make it unforgettable.🎯 Games Lineup:

🔥 ZING – A fast paced ball throwing challenge.
🗝️ JUMANJI – An escape room packed with puzzles and surprises.
🎮 PLAYVERSE – VR and console gaming zone for immersive thrills.
🚩 Capture The Flag – Strategy, speed, and competitive action.`,
                image: "/images/events/fun.png",
                prize: "TBA",
                fee: "Spot Registration",
                venue: "D Block, Ground Floor",
                formLink: "#",
                date: "Feb 25-26",
                time: "Day 1: 1:45 PM - 4:00 PM | Day 2: 9:00 AM - 12:00 PM",
                teamSize: "Based on Games",
                coordinators: [
                    { name: "Dhanush", phone: "9605561391" },
                    { name: "Revathy", phone: "6238472684" }
                ]
            }
        ]
    },
    {
        id: "workshop",
        title: "WORKSHOP",
        tagline: "Hands-on. Real-world. No theory-only.",
        icon: "",
        events: [

            {
                name: "DRONEX: From Toy to Tactical",
                category: "WORKSHOP",
                dept: "IT",
                description: "Hands-on workshop introducing drone technology fundamentals, real-world uses, safety, and live flight demos.",
                image: "/images/events/drone.png",
                prize: "TBA",
                fee: "100/-",
                date: "Feb 25",
                time: "1:00 PM",
                venue: "Programming Lab",
                formLink: "https://forms.gle/4pgNiPDgYEYrGgX39",
                coordinators: [
                    { name: "Joyal Sojan", phone: "6282657146" },
                    { name: "Anusha Saji", phone: "8547935816" }
                ]
            },
            {
                name: "The Creator's Hub",
                category: "WORKSHOP",
                dept: "CSD",
                description: "Hands-on workshop focused on graphic design and video editing to master visual creativity.",
                image: "/images/events/fun.png",
                prize: "TBA",
                fee: "TBA",
                venue: "TBA",
                formLink: "#",
                coordinators: [
                    { name: "Alwin Lal", phone: "9744531108" },
                    { name: "Kevin Joseph", phone: "9074611663" }
                ]
            },

            {
                name: "ECU Tuning Workshop",
                category: "WORKSHOP",
                dept: "MECH",
                description: "Hands-on workshop on ECU tuning and vehicle performance optimization.",
                image: "/images/events/ecu.png",
                prize: "TBA",
                fee: "150",
                date: "Feb 26",
                time: "9:30 AM-12:30 PM",
                venue: "Mechanical Heat Engine Lab",
                teamSize: "Individual Event",
                formLink: "https://forms.gle/pMLHMCdEc9swMDTz7",
                coordinators: [
                    { name: "Athul Manoj", phone: "8590889549" },
                    { name: "Albin Roy", phone: "8848961032" }
                ]
            },
            {
                name: "AI VisionX",
                category: "WORKSHOP",
                dept: "CSD",
                description: "Learn how to generate, edit, and enhance eye catching visuals with ease. Perfect for beginners and creators who want to turn ideas into scroll stopping content.",
                image: "/images/events/vision.png",
                prize: "TBA",
                fee: "100 per Head",
                date: "Feb 26",
                time: "9:30 AM-12:30 PM",
                venue: "MBA Seminar Hall",
                teamSize: "Individual Event",
                formLink: "https://forms.gle/q2ApYe5safAjR8cj7",
                coordinators: [
                    { name: "Glen Jacob", phone: "7560851620" },
                    { name: "Naeema", phone: "8129440753" }
                ]
            }
        ]
    },
    {
        id: "mech-matter-arena",
        title: "MECH & MATTER ARENA",
        tagline: "Steel, circuits, concrete, and combat.",
        icon: "",
        events: [
            {
                name: "Bridge Building Competition",
                category: "MECH & MATTER ARENA",
                dept: "CIVIL",
                description: `The Bridge Making Competition is a hands-on engineering challenge where participants design and build a load-bearing bridge using popsicle (ice-cream) sticks and approved adhesives.
The event evaluates structural strength, efficiency, and smart design through controlled load testing`,
                image: "/images/events/bridge.png",
                prize: "5500",
                fee: "300 per Team",
                venue: "Concrete Lab",
                formLink: "https://forms.gle/PvkpgZXnroEnvBey7",
                date: "Feb 26",
                time: "10:30 AM - 4:00 PM",
                teamSize: "1-4 Members",
                coordinators: [
                    { name: "VINAYAK MANOHARAN", phone: "974638658" },
                    { name: "DELLA MARIYA GEORGE", phone: "9496740039" }
                ]
            },
            {
                name: "Concrete Cube Making Competition",
                category: "MECH & MATTER ARENA",
                dept: "CIVIL",
                description: `Are you ready to test your engineering instincts?
The Concrete Cube Making Competition 2026 – challenges you to cast a concrete cube that can withstand maximum compressive strength during testing.

Participants will compete in two exciting stages:
Stage 1: “Forge Phase” (Preparation Stage)— Teams will design and prepare their concrete mix using materials provided by the college.
Stage 2: “Titan Trial” (Testing Stage)— The prepared cubes will undergo professional compressive strength testing.

Basic Civil Engineering knowledge is sufficient to participate.`,
                image: "/images/events/cube.png",
                prize: "7500/-",
                fee: "500 per Team",
                venue: "GEOTECHNICAL ENGINEERING LABORATORY",
                formLink: "https://forms.gle/cyFTCYh79jKGnH4N6",
                date: "Feb 17",
                time: "10:30 AM-4:10 PM",
                teamSize: "Max 4 Members",
                coordinators: [
                    { name: "Mathews Thomas", phone: "7510567627" },
                    { name: "Aswin P Nair", phone: "6238701144" }
                ]
            }
        ]
    }
]

// Legacy support for technical events (keep for backward compatibility)
export const technicalEvents: any = {}

export const artsEvents = [
    // Day 1 - Feb 27
    { name: "VJC IDOL", description: "Event description", registrationUrl: "#", formLink: "#", date: "2026-02-27", time: "09:30 – 11:30 AM", location: "MAIN AUDITORIUM" },
    { name: "BLAST FROM THE PAST", description: "Event description", registrationUrl: "#", formLink: "#", date: "2026-02-27", time: "11:30 – 12:30 PM", location: "MAIN AUDITORIUM" },
    { name: "MOVIE SPOOF", description: "Event description", registrationUrl: "#", formLink: "#", date: "2026-02-27", time: "01:30 – 02:30 PM", location: "MAIN AUDITORIUM" },
    { name: "THIRUVATHIRA", description: "Event description", registrationUrl: "#", formLink: "#", date: "2026-02-27", time: "09:30 – 10:30 AM", location: "MINI AUDITORIUM" },
    { name: "BHARATHANATYAM", description: "Event description", registrationUrl: "#", formLink: "#", date: "2026-02-27", time: "10:30 – 11:30 AM", location: "MINI AUDITORIUM" },
    { name: "MAPILAPPATTU", description: "Event description", registrationUrl: "#", formLink: "#", date: "2026-02-27", time: "11:30 – 12:30 PM", location: "MINI AUDITORIUM" },
    { name: "MARGAMKALI", description: "Event description", registrationUrl: "#", formLink: "#", date: "2026-02-27", time: "01:30 – 02:30 PM", location: "MINI AUDITORIUM" },
    { name: "MONOACT", description: "Event description", registrationUrl: "#", formLink: "#", date: "2026-02-27", time: "09:30 – 10:30 AM", location: "PTC SEMINAR HALL" },
    { name: "FACE PAINTING", description: "Event description", registrationUrl: "#", formLink: "#", date: "2026-02-27", time: "10:30 – 11:30 AM", location: "PTC SEMINAR HALL" },
    { name: "MIMICRY", description: "Event description", registrationUrl: "#", formLink: "#", date: "2026-02-27", time: "11:30 – 12:30 PM", location: "PTC SEMINAR HALL" },
    { name: "INSTRUMENTAL MUSIC", description: "Event description", registrationUrl: "#", formLink: "#", date: "2026-02-27", time: "01:30 – 02:30 PM", location: "PTC SEMINAR HALL" },
    { name: "EXTEMPORE ENGLISH", description: "Event description", registrationUrl: "#", formLink: "#", date: "2026-02-27", time: "10:00 – 10:30 AM", location: "C 104" },
    { name: "EXTEMPORE MALAYALAM", description: "Event description", registrationUrl: "#", formLink: "#", date: "2026-02-27", time: "10:30 – 11:00 AM", location: "C 104" },
    { name: "RECITATION ENGLISH", description: "Event description", registrationUrl: "#", formLink: "#", date: "2026-02-27", time: "11:00 – 11:30 AM", location: "C 104" },
    { name: "RECITATION MALAYALAM", description: "Event description", registrationUrl: "#", formLink: "#", date: "2026-02-27", time: "11:30 – 12:00 PM", location: "C 104" },
    { name: "INTER-COLLEGE FASHION SHOW", description: "Event description", registrationUrl: "#", formLink: "#", date: "2026-02-27", time: "EVENING", location: "OPEN STAGE" },
    { name: "THAMARASSERY CHURAM", description: "Event description", registrationUrl: "#", formLink: "#", date: "2026-02-27", time: "EVENING", location: "OPEN STAGE" },

    // Day 2 - Feb 28
    { name: "MR. & MS. DRISHYA", description: "Event description", registrationUrl: "#", formLink: "#", date: "2026-02-28", time: "10:00 – 11:30 AM", location: "MAIN AUDITORIUM" },
    { name: "GROUP SONG", description: "Event description", registrationUrl: "#", formLink: "#", date: "2026-02-28", time: "11:30 – 12:30 PM", location: "MAIN AUDITORIUM" },
    { name: "GROUP DANCE", description: "Event description", registrationUrl: "#", formLink: "#", date: "2026-02-28", time: "02:00 – 04:00 PM", location: "MAIN AUDITORIUM" },
    { name: "OPPANA", description: "Event description", registrationUrl: "#", formLink: "#", date: "2026-02-28", time: "10:00 – 11:00 AM", location: "MINI AUDITORIUM" },
    { name: "DANCE TO THE BEAT", description: "Event description", registrationUrl: "#", formLink: "#", date: "2026-02-28", time: "11:00 – 12:00 PM", location: "MINI AUDITORIUM" },
    { name: "STEP N SYNCHRO", description: "Event description", registrationUrl: "#", formLink: "#", date: "2026-02-28", time: "12:00 – 01:00 PM", location: "MINI AUDITORIUM" },
    { name: "MIME", description: "Event description", registrationUrl: "#", formLink: "#", date: "2026-02-28", time: "01:30 – 02:30 PM", location: "MINI AUDITORIUM" },
    { name: "LIGHT MUSIC", description: "Event description", registrationUrl: "#", formLink: "#", date: "2026-02-28", time: "10:00 – 11:00 AM", location: "PTC SEMINAR HALL" },
    { name: "NADAN PATTU", description: "Event description", registrationUrl: "#", formLink: "#", date: "2026-02-28", time: "12:30 – 1:30 PM", location: "PTC SEMINAR HALL" },
    { name: "MEHANDI", description: "Event description", registrationUrl: "#", formLink: "#", date: "2026-02-28", time: "1:30 – 02:30 PM", location: "PTC SEMINAR HALL" },
    { name: "43 MILES & FEJO", description: "Event description", registrationUrl: "#", formLink: "#", date: "2026-02-28", time: "EVENING", location: "OPEN STAGE" },
]

// Sort functions
const sortByName = (a: any, b: any) => a.name.localeCompare(b.name);
const sortByTitle = (a: any, b: any) => a.title.localeCompare(b.title);

// Sort departments alphabetically
departments.sort(sortByName);

// Sort events within each department
departments.forEach(dept => {
    dept.events.sort(sortByName);
});

// Sort event zones alphabetically
eventZones.sort(sortByTitle);

// Sort events within each zone
eventZones.forEach(zone => {
    zone.events.sort(sortByName);
});

