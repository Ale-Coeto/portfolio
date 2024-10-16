const useCompetitions = () => {
    const competition = [
        {
            title: 'RoboCup@Home',
            description: 'Developed computer vision algorithms for a general purpose service robot.',
            tools: "Python, OpenCv, ROS, YOLO, REID, Face Recognition",
            place: ["2nd National"],
            image: '/images/projects/Home.jpeg',
            href: 'https://github.com/RoBorregos/home'
        },
        {
            title: 'ICPC',
            description: 'Actively competing with a team of three in ICPC competitive programming contests.',
            tools: "C++, Java",
            place: ["3th place on campus ICPC Mexico Grand Prix", "Classified for ICPC Nationals 2024"],
            image: '/images/projects/ICPC.jpg',
            href: 'https://Icpc.global/'
        },
        {
            title: 'Robocup Soccer Lightweight',
            description: 'Programmed the movement, sensor libraries, vision and algorithms of two soccer playing robots.',
            tools: "Arduino CLI, CPP, Micro-python",
            place: ["3rd National", "2nd Regional"],
            image: '/images/projects/Rbrgs.png',
            href: 'https://www.robocup.org/leagues/18'
        },
        {
            title: 'Nao Wrestling',
            description: 'Programmed vision and movement algorithms for a Nao robot to compete in a simlated wrestling match.',
            tools: "Python, OpenCv",
            place: ["7th International"],
            image: '/images/projects/Nao.png',
            href: 'https://github.com/cyberbotics/wrestling'
        },
        {
            title: 'FIRST Robotics Competition',
            description: 'Led the engineering team and participated as robot driver in the seasons 2020-2022.',
            tools: "Java",
            place: ["Rank 8/40 (Monterrey)", "Ranking 10/44 (Las Vegas)"],
            image: '/images/projects/FRC.png',
            href: 'https://www.firstinspires.org/robotics/frc'
        },
        {
            title: 'World Educational Robot Contest',
            description: 'Programmed the robot for the WER competition in 2019.',
            tools: "Abilix",
            place: [],
            image: '/images/projects/WER.png',
            href: 'http://www.wergame.org/about_wer.php'
        },
        {
            title: 'World Robot Olympiad',
            description: 'Programmed and built the robot with my team for the WRO competitions in 2017 and 2018.',
            tools: "LEGO Mindstorms",
            place: ["4th Regional", "5th National"],
            image: '/images/projects/WRO.png',
            href: 'https://wro-association.org/'
        },
    ]

    return competition;
}

export default useCompetitions;