const useCompetitions = () => {
    const competition = [
        {
            title: 'Robocup Soccer Lightweight',
            description: 'Programmed the movement, sensor libraries, vision and algorithms of two soccer playing robots.',
            tools: "Arduino CLI, CPP, Micro-python",
            place: ["3rd National", "2nd Regional"],
            image: '/images/projects/Rbrgs.png',
            href: 'https://www.robocup.org/leagues/18'
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