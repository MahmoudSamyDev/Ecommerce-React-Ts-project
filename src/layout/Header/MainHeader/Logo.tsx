import LogoSVG from '../../../assets/logo.svg';


function Logo() {
    return (
        <div className="logo flex justify-center items-center">
            <img src={LogoSVG} className='w-[100%] h-[80px]' alt="Logo" />
        </div>
    )
}

export default Logo;