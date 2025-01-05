import TopBar from './TopBar/TopBar';
import MainHeader from './MainHeader/MainHeader';
import NavBar from './NavBar/NavBar';

function Header() {
    return (
        <header className='header'>
            <TopBar />
            <div className='bg-white py-[5px]'>
                <MainHeader />
                <NavBar />
            </div>
        </header>
    );
}

export default Header;