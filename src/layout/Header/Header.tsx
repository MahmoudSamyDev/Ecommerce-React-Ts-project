import TopBar from './TopBar/TopBar';
import MainHeader from './MainHeader/MainHeader';
import NavBar from './NavBar/NavBar';

function Header() {
    return (
        <header className='header'>
            <TopBar />
            <MainHeader />
            <NavBar />
        </header>
    );
}

export default Header;