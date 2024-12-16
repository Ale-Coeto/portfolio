import DesktopBar from './DesktopBar';
import MobileBar from './MobileBar';

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