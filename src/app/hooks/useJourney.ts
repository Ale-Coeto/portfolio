const useJourney = () => {
    const journey = [
        {
            title: 'ICPC Mexico National Finals',
            description: 'Actively competing with a team of three in ICPC competitive programming contests.',
            date: 'Nov 2024',
            place: ["Top 25"],
            image: '/images/journey/ICPC2024.png',
            href: 'https://Icpc.global/',
        },
        {
            title: 'Changemakers Social Challenge',
            description: 'Developed Mi Herencia to empower communities and promote turism in Mexico.',
            place: [],
            image: '/images/journey/Changemakers.jpg',
            date: 'Nov 2024',
        },
        {
            title: 'NASA Space Apps',
            description: 'Developed Crop Connect to empower farmers with data-driven insights and tools to optimize their operations.',
            place: ["1st National"],
            image: '/images/journey/nasa.png',
            date: 'Oct 2024',
        },
        {
            title: 'Distinguished Students in Engineering',
            description: 'Recognized as part of the top 1% of distinguished students in the School of Engineering at ITESM.',
            date: 'Sept 2024',
        },
        {
            title: 'STEP Internship',
            description: 'Google STEP Internship for software engineering.',
            date: 'Jun 2024',
            image: '/images/journey/Google.png',
            href: 'https://github.com/RoBorregos/home'
        },
        {
            title: 'Swift Student Challenge (WWDC)',
            description: 'Recognized by Apple as distinguished winner and awarded a scholarship to attend WWDC.',
            date: 'Jun 2024',
            image: '/images/journey/Apple.jpg',
            href: 'https://github.com/RoBorregos/home'
        },
        {
            title: 'RoboCup@Home',
            description: 'Developed computer vision algorithms for a general purpose service robot.',
            place: ["2nd National"],
            date: 'Apr 2024',
            image: '/images/journey/Home.jpeg',
            href: 'https://github.com/RoBorregos/home'
        },
        {
            title: 'ICPC Mexico Grand Prix',
            description: 'Actively competing with a team of three in ICPC competitive programming contests.',
            tools: "C++, Java",
            place: ["3rd place on campus ICPC Mexico Grand Prix"],
            date: 'Sept 2023',
            image: '/images/journey/ICPC.jpg',
            href: 'https://Icpc.global/'
        },
        {
            title: 'Hack Mty 2023',
            description: 'Developed research assistant with my team, earning 1st place in the Softek Challenge',
            tools: "Python, OpenCv",
            place: ["7th International"],
            date: 'Sept 2023',
            image: '/images/journey/HackMty.jpg',
            href: 'https://github.com/cyberbotics/wrestling'
        },
        {
            title: 'Robocup Soccer Lightweight',
            description: 'Programmed the movement, sensor libraries, vision and algorithms of two soccer playing robots.',
            tools: "Arduino CLI, CPP, Micro-python",
            place: ["3rd National", "2nd Regional"],
            image: '/images/journey/Rbrgs.png',
            date: 'Apr 2023',
            href: 'https://www.robocup.org/leagues/18'
        },
        {
            title: 'Distinguished Students in Engineering',
            description: 'Recognized as part of the top 1% of distinguished students in the School of Engineering at ITESM.',
            date: 'Apr 2023',
            href: 'https://www.robocup.org/leagues/18'
        },
        {
            title: 'Hackathon Caterpillar',
            description: 'Developed a smart shower prototype to optimize water consumption.',
            place: ["1st"],
            image: '/images/journey/Caterpillar2.png',
            date: 'Jul 2022',
            href: 'https://www.firstinspires.org/robotics/frc'
        },
        {
            title: 'FIRST Robotics Competition',
            description: 'Led the engineering team and participated as robot driver in the seasons 2020-2022.',
            tools: "Java",
            place: ["Rank 8/40 (Monterrey)", "Ranking 10/44 (Las Vegas)"],
            image: '/images/journey/FRC.png',
            date: 'Mar 2022',
            href: 'https://www.firstinspires.org/robotics/frc'
        },
        {
            title: 'World Educational Robot Contest',
            description: 'Programmed the robot for the WER competition in 2019.',
            tools: "Abilix",
            place: [],
            date: 'Oct 2019',
            image: '/images/journey/WER.png',
            href: 'http://www.wergame.org/about_wer.php'
        },
        {
            title: 'MIT Patrones Hermosos',
            description: 'Summer camp for girls to learn about programming.',
            date: 'May 2019',
            image: '/images/journey/mit.jpg',
            href: '',
        },
        {
            title: 'World Robot Olympiad',
            description: 'Programmed and built the robot with my team for the WRO competitions in 2017 and 2018.',
            tools: "LEGO Mindstorms",
            place: ["4th Regional", "5th National"],
            date: 'Sept 2018',
            image: '/images/journey/WRO.png',
            href: 'https://wro-association.org/'
        },
        
    ]

    return journey;
}

export default useJourney;