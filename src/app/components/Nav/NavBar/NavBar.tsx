import useRoutes from '@/app/hooks/useSections';
import NavElement from './NavElement';
import DesktopBar from './DesktopBar';


const NavBar = ({ children }: {
    children: React.ReactNode
}) => {


    return (
        <div>
            <DesktopBar />
            {children}

        </div>
    )
}

export default NavBar;