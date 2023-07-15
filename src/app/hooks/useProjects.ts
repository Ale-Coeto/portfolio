const useProjects = () => {
    const projects = [
        {
            title: 'Roborregos Inventory',
            description: 'Authentication and registration of users for an inventory webpage.',
            tools: "React, Typescript, Prisma, Azure AD.",
            image: '/images/projects/react.png',
            href: 'aa'
        },
        {
            title: 'Hackathon Caterpillar',
            description: 'Smart shower head prototype. Project presented in an interview with Bar Emprende, summarized in the magazine MIT Sloan Management Review.',
            tools: "Arduino, Onshape.",
            image: '/images/projects/Caterpillar.png',
            href: 'aa'
        },
        {
            title: "Agenda Desktop App",
            description: 'Desktop application for a small business, integrating an agenda and customer record system.',
            tools: "Java",
            image: '/images/projects/App.png',
            href: 'aa'
        },
        {
            title: 'Water level sensor',
            description: "Device designed to measure water level on a water tank and present the mearurements through wifi on an web page.",
            image: '/images/projects/Medidor.png',
            href: 'aa'
        },
        {
            title: "Matlab projects",
            description: 'Matlab simulation proyects',
            image: '/images/projects/Matlab.png',
            href: 'aa'
        }
    ];

    return projects;
}

export default useProjects;