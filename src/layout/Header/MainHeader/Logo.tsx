import LogoSVG from '../../../assets/logo.svg';


function Logo() {
    return (
        <div className="logo flex justify-center items-center">
            <img src={LogoSVG} className='w-[300px] h-[100px]'  alt="Logo" />
        </div>
    )
}

export default Logo;