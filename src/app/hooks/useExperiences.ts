const useExperiences = () => {
    const experience = [
        {
            title: "Roborregos",
            position: "Software Developer",
            date: "2022 - Present",
            info: "Software developer at the representative Robotics Team from Tecnológico de Monterrey"
            ,
            bullets: [
                "Competed in regional and national robotics tournaments representing ITESM.",
                "Currently part of the Robocup @Home team, learning ROS and machine learning for computer vision.",
                "Working on the authentication and registration of users for an inventory webpage.",
                "Programmed the movement, sensor libraries and algorithms of two soccer playing robots, using arduino CLI, C++ and micro-python for computer vision algorithms.",
                "Achieved 3rd place with my team (of three) in the National Mexican Robotics Tournament in the Soccer Lightweight category.",
            ],
            images: [
                "/images/photos/Rbrgs1.png",
                "/images/photos/Rbrgs2.png",
            ],
            icon: "/images/logos/Roborregos.png",
            iconColor: "black"

        },
        {
            title: "WIT",
            position: "Vicepresident of Women in technology",
            date: "March 2023 - Present",
            info: "Coordinating the student group WIT from Tecnológico de Monterrey as vicepresident.",
            bullets: [
                "Developing the action plan for the following semester",
                "Teaching programming through the MIT App Inventor tool to 40 students"
            ],
            images: [],
            icon: "/images/logos/Wit.png",
            iconColor: "white"

        },
        {
            title: "VantTec",
            position: "Software Developer",
            date: "2022 - Present",
            info: "Developer at the research group Non Tripulated Autonomous Vehicles from Tecnológico de Monterrey",
            bullets: [
                "Part of the Roboboat team on the mechanics and software areas.",
                "Currently learning ROS 2 (Robot Operationg System)"
            ],
            images: [
                "/images/photos/VantTec.png",
            ],
            icon: "/images/logos/VantTec.png",
            iconColor: "blue"
        },
        {
            title: "Voltec",
            position: "Mentor and Ex-Team Leader",
            date: "2019 - Present",
            info: "Leading the engineering department of the FIRST high school team VOLTEC Robotics",
            bullets: [
                "Teaching countinously programming and robotics to more than 20 3rd grade students and over 20 highschool students.",
                "Mentoring the FIRST FTC (9 students) and FRC (over 20 students) teams.",
                "Achieved top 10 in the national FTC (2023) competition and earning a place on the FRC world championship (2023).",
                "Participated in the FIRST Robotics Competition (2019-2022) as robot driver and engineering leader"
            ],
            images: [
                "/images/photos/Voltec.png",
                "/images/photos/Voltec2.png",
                "/images/photos/Voltec3.png",
                "/images/photos/Voltec4.png"
            ],
            icon: "/images/logos/Voltec.png",
            iconColor: "blue"
        },
        {
            title: "Vitales",
            position: "Marketing Coordinator",
            date: "2020 - 2021",
            info: "Coordinated the marketing team on proyects and campaigns with the aim of serving the community and meeting ecological goals",
            bullets: [
                "Organized ecological campaigns through social media, shelter visits and inclusion events, impacting over 200 people.",
            ],
            images: [
                "/images/photos/Vitales.png",
            ],
            icon: "/images/logos/Vitales.png",
            iconColor: "white"
        }
    ]

    return experience;
}

export default useExperiences;