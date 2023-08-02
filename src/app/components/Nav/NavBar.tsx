import useRoutes from '@/app/hooks/useSections';
import NavElement from './NavElement';
import DesktopBar from './DesktopBar';
import MobileBar from './MobileBar';
import { IoIosArrowUp } from 'react-icons/io';


const NavBar = ({ children }: {
    children: React.ReactNode
}) => {


    return (
        <div>
            <DesktopBar />
            <MobileBar />
            {children}
            
        </div>
    )
}

export default NavBar;