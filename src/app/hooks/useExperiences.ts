const useExperiences = () => {
    const work = [
        {
            title: "Oracle",
            position: "Software Engineering Intern",
            date: "Feb 2025 - Present",
            info: "Part time SWE intern of the 5G Networks team.",
            bullets: [
                "Working with backend services.",
            ],
            images: [],
            icon: "/images/logos/Oracle.png",
            iconColor: "white"
        },
        {
            title: "Google",
            position: "STEP Intern",
            date: "Jun 2024 - Sep 2024",
            info: "Google STEP (Student Training in Engineering Program) intern in the Cloud GEM Devices team. (Google Endpoint Management)"
            ,
            bullets: [
                "Developed new “Show last known location” feature for company-owned lost devices through the Admin Console, displaying a dialog containing a map with a marker and a window with lost details and geocode address after fetching the info from the device.",
                "Completed design process and full stack implementation using java, javascript, gRPC, Google Maps API and internal frameworks."
            ],
            images: [],
            icon: "/images/logos/Google.jpeg",
            iconColor: "black"
        },
        {
            title: "ITESM",
            position: "DevOps OnCampus Intern",
            date: "Feb 2024 - Dec 2025",
            info: "DevOps at Crowd Counting project, aiming to collect environment information from a park through cameras and sensors."
            ,
            bullets: [
                "Evaluating and implementing re-identification models for multi-camera people tracking with anchor-guided clustering.",
                "Programming with python, pytorch, openCV and yolo. Using Conda environments in an Azure Linux VM.",
                "Developing APIs to host different vision algorithms such as birds-eye-view using Docker, AWS, FastAPI and bash scripts."
            ],
            images: [
                
            ],
            icon: "/images/logos/Tec.png",
            iconColor: "white"
        },
    ]

    const leadership = [
        {
            title: "Roborregos",
            position: "President and Software Developer",
            date: "Dec 2022 - Present",
            info: "Software developer and president of the representative Robotics Team from Tecnológico de Monterrey."
            ,
            bullets: [
                "Competed in regional, national and international robotics tournaments representing ITESM.",
                "Leading the computer vision team for the RoboCup @Home competition.",
                "Programmed soccer playing robots, achieving 3rd national place in the Robocup Soccer Lightweight competition.",
                "Leading and organizing the yearly on-campus robotics competition Candidates 2024, with over 300 participants."
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
            date: "March 2023 - June 2024",
            info: "Coordinating the student group WIT from Tecnológico de Monterrey as vicepresident.",
            bullets: [
                "Coordinated the student group Women in Technology from Tecnológico de Monterrey as vicepresident.",
                "Organizing events with my team to enhance the progress of women in tech and promote inclusiveness, impacting over 100 students",
                "Taught programming and app development with the MIT App Inventor tool to 20 middle school students.",
                "Lead the development of the group's webpage."
            ],
            images: [],
            icon: "/images/logos/Wit.png",
            iconColor: "white"

        },
        {
            title: "Voltec",
            position: "Mentor and Ex-Team Leader",
            date: "Aug 2019 - June 2024",
            info: "Led the engineering department of the FIRST high school team VOLTEC Robotics",
            bullets: [
                "Taught programming and robotics to more than 20 3rd grade students and over 20 highschool students.",
                "Mentoring the FIRST FTC (9 students) and FRC (over 20 students) teams.",
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

    return {
        "work": work,
        "leadership": leadership
    };
}

export default useExperiences;