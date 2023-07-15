const useResearch = () => {
    const research = [
        {
            title: 'Motor Efficiency and Temperature',
            description: 'Research about the relationship between the efficiency of a DC motor and its temperature.',
            image: '/images/projects/research/Mono.png',
            href: '/pdfs/Monografia.pdf'
        },
        {
            title: 'Elipse area and matrices',
            description: 'Mathemeatical exploration with the objective of finding a method to calculate the area of an eclipse through lineal algebra.',
            image: '/images/projects/research/Mate.png',
            href: '/pdfs/Mate.pdf'
        },
        {
            title: "Sales and social media marketing",
            description: 'Reasearch that evaluates the implementation of social media marketing strategies to increment the sales of a business.',
            image: '/images/projects/research/Business.png',
            href: '/pdfs/Business.pdf'
        },
        {
            title: "Damped pendulum",
            description: 'Research with the objective of finding the relation between the mechanical energy and the number of cycles of a damped pendulum.',
            image: '/images/projects/research/Physics.png',
            href: '/pdfs/Fisica.pdf'
        }
    ]

    return research;
}

export default useResearch;