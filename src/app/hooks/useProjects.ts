const useProjects = () => {
    const projects = [
        {
            title: 'Movie and Show Traker',
            description: 'Webpage to keep a movie and show watch-list, explore popular or trending content and see custom recomendations.',
            tools: "React, Typescript, Prisma, NextJs, TailwindCSS, NextAuth, The Movie Database API",
            image: '/images/projects/Watchlist.png',
            href: 'https://github.com/Ale-Coeto/movie-tracker'
        },
        {
            title: 'Roborregos Inventory',
            description: 'Authentication and registration of users for the inventory webpage of Roborregos.',
            tools: "React, Typescript, Prisma, NextJs, Azure AD, TailwindCSS",
            image: '/images/projects/Inventory.png',
            href: 'https://robo-almacen.vercel.app/'
        },
        {
            title: 'Hackathon Caterpillar',
            description: 'Smart shower head prototype. Project presented in an interview with Bar Emprende, summarized in the magazine MIT Sloan Management Review.',
            tools: "Arduino, Onshape",
            image: '/images/projects/Caterpillar.png',
            href: 'https://github.com/Ale-Coeto/RegaderaAutomatica'
        },
        {
            title: "Agenda Desktop App",
            description: 'Desktop application for a small business, integrating an agenda and customer record system.',
            tools: "Java",
            image: '/images/projects/App.png',
            href: 'https://github.com/Ale-Coeto/SpatucanApp'
        },
        {
            title: 'Water level sensor',
            description: "Device designed to measure water level on a water tank and present the mearurements through wifi on an web page.",
            tools: 'HTML, CSS, Arduino',
            image: '/images/projects/Medidor.png',
            href: 'https://github.com/Ale-Coeto/MedidorTinaco'
        },
        {
            title: "Matlab projects",
            description: 'Matlab simulation proyects regarding kinematics, dynamics and energy conservation topics.',
            tools: "Matlab",
            image: '/images/projects/Matlab.png',
            href: 'https://github.com/Ale-Coeto/Projectos-Matlab'
        }
    ];

    return projects;
}

export default useProjects;