import { title } from "process";

const useProjects = () => {
    const projects = [
        {
            title: 'Swift Student Challenge',
            description: 'Introduction to climbing app, providing tips, tracking user progress and showing AR views of different climbing holds.\n Distinguished winner 2024!',
            tools: "Swift, ARKit, Reality, Combine, Core Data, Charts, Blender, Playgrounds, XCode",
            image: '/images/projects/Swift.png',
            href: 'https://github.com/Ale-Coeto/Swift-Student-Challenge-2024',
            categories: ["Favorite", "Mobile"]
        },
        {
            title: 'Security system IOT',
            description: 'Security system prototype for the elder. Access through face recognition, monitor with sensors and display in webpage.',
            tools: "React, Typescript, AWS EC2, Docker, Flask, Face-recognition, AWS Websocket API, Google OAuth, Tailwind, SQL, tRPC, Arduino",
            image: '/images/projects/IOT.png',
            href: 'https://github.com/Ale-Coeto/IOT_security-system',
            categories : ["Favorite", "Web", "IOT", "Computer vision"]
        },
        {
            title: 'FridaGO',
            description: 'Web app to revolutionize market experience and API to analyze supermarket camera feed',
            tools: "Yolo, OpenCV, FastAPI, OpenVino, React, Typescript, Prisma, TailwindCSS, tRPC, Docker, Clustering",
            image: '/images/projects/FridaGo.png',
            href: 'https://github.com/Ale-Coeto/FridaGo-API',
            categories: ["Web", "Computer vision"]
        },
        {
            title: 'Robocup @Home',
            description: 'Developed computer vision algorithms for a general purpose service robot. (Person tracking, face recognition, object detection)',
            tools: "Python, OpenCv, ROS, YOLO, REID, Face Recognition, Docker",
            image: '/images/projects/HomeProject.jpeg',
            href: 'https://github.com/RoBorregos/home-vision',
            categories: ["Robotics", "Computer vision"]
        },
        {
            title: 'FRIDA Assistant',
            description: 'Next app that allows users to store information, analyze it and find data through a semantic search and AI chat.',
            tools: "React, Typescript, Prisma, NextJs, TailwindCSS, NextAuth, PostgreSQL, Azure AD, AWS Polly, Google Cloud, tRPC, FRIDA",
            image: '/images/projects/FRIDA.png',
            href: 'https://github.com/IvanRomero03/frida-assistant',
            categories: ["Web", "AI", "Cloud"]
        },
        {
            title: 'Candidates Dashboard',
            description: 'Web app for a robotics competition. Displays general information, scores and schedule for each team',
            tools: "React, Typescript, Prisma, NextJs, TailwindCSS, NextAuth, tRPC, PostgreSQL",
            image: '/images/projects/Candidates.png',
            href: 'https://github.com/RoBorregos/CandidatesDashboard',
            categories: ["Web"]
        },
        {
            title: 'Smart Resource Manager',
            description: 'Web app to monitor energy consumption, get optimized routes and classify trash. Project for CEMEX Hack 2023.',
            tools: "React, Typescript, Prisma, NextJs, TailwindCSS, NextAuth, tRPC, AWS Websocket API",
            image: '/images/projects/Cemex.png',
            href: 'https://github.com/Oscar-gg/cemex_hacks_2023',
            categories: ["Web"]
        },
        {
            title: 'AWAQ Dashboard',
            description: 'Dashboard to visualize user progress as they go through their OnBoarding process with AWAQ.',
            tools: "ASP.NET, Bootstraps, C#, MySQL,Tailwind, Lookerstudio",
            image: '/images/projects/Awaq.png',
            href: 'https://github.com/Ale-Coeto/awak-dashboard',
            categories: ["Web"]
        },
        {
            title: 'Robocup Soccer',
            description: 'Programmed the movement, sensor libraries, vision and algorithms of two soccer playing robots.',
            tools: "Arduino, CPP, Micro-python",
            image: '/images/projects/Soccer.jpg',
            href: 'https://github.com/RoBorregos/robocup-soccerlight-2023',
            categories: ["Robotics"]
        },
        {
            title: 'Movie and Show Traker',
            description: 'Webpage to keep a movie and show watch-list, explore popular or trending content and see custom recomendations.',
            tools: "React, Typescript, Prisma, NextJs, TailwindCSS, NextAuth, The Movie Database API, MongoDB Atlas",
            image: '/images/projects/WatchList.png',
            href: 'https://github.com/Ale-Coeto/movie-tracker',
            categories: ["Web"]
        },
        {
            title: 'Roborregos Inventory',
            description: 'Authentication and registration of users for the inventory webpage of Roborregos.',
            tools: "React, Typescript, Prisma, NextJs, Azure AD, TailwindCSS",
            image: '/images/projects/Inventory.png',
            href: 'https://robo-almacen.vercel.app/',
            categories: ["Web", "IOT"]
        },
        {
            title: 'Hackathon Caterpillar',
            description: 'Smart shower head prototype. Project presented in an interview with Bar Emprende, summarized in the magazine MIT Sloan Management Review.',
            tools: "Arduino, Onshape",
            image: '/images/projects/Caterpillar.png',
            href: 'https://github.com/Ale-Coeto/RegaderaAutomatica',
            categories: ["IOT"]
        },
        {
            title: "Agenda Desktop App",
            description: 'Desktop application for a small business, integrating an agenda and customer record system.',
            tools: "Java",
            image: '/images/projects/App.png',
            href: 'https://github.com/Ale-Coeto/SpatucanApp',
            categories: ["Desktop"]
        },
        {
            title: 'Water level sensor',
            description: "Device designed to measure water level on a water tank and present the mearurements through wifi on an web page.",
            tools: 'HTML, CSS, Arduino',
            image: '/images/projects/Medidor.png',
            href: 'https://github.com/Ale-Coeto/MedidorTinaco',
            categories: ["IOT"]
        },
        {
            title: "Matlab projects",
            description: 'Matlab simulation proyects regarding kinematics, dynamics and energy conservation topics.',
            tools: "Matlab",
            image: '/images/projects/Matlab.png',
            href: 'https://github.com/Ale-Coeto/Projectos-Matlab',
            categories: ["Others"]
        }
    ];

    return projects;
}

export default useProjects;
