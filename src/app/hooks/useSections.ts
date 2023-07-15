import {usePathname } from "next/navigation";

const useSections = () => {
    const routes = [
        {
            num: 1,
            label: 'About me',
            href: '#about'
        },
        {
            num: 2,
            label: 'Experience',
            href: '#experience'
        },
        {
            num: 3,
            label: 'Projects',
            href: '#projects'
        },
        {
            num: 4,
            label: 'Contact',
            href: '#contact'
        }
    ];
    return routes;
}

export default useSections;