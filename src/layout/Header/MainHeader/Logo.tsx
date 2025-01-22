import LogoSVG from '../../../assets/logo.svg';
import { Link } from 'react-router-dom';


function Logo() {
    return (
        <Link to='/home'>
            <div className="logo flex justify-center items-center">
                <img src={LogoSVG} className='w-[100%] h-[80px]' alt="Logo" />
            </div>
        </Link>
    )
}

export default Logo;