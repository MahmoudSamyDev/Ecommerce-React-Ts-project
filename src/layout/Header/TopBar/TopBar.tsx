import SocialMediaBox from "./SocialMedia";
import LanguageSwitcher from "./LanguageSwitcher";
import ContainerWrapper from "../../../layout/Components/ContainerWrapper";


function TopBar() {
    return (
        <div className="top-bar-container w-full bg-darkBlue">
            <ContainerWrapper>
                <div className='top-bar flex-col md:flex-row py-[6px] flex justify-between items-center text-white'>
                    <div className="w-full md:w-[200px] flex justify-between items-center space-x-[20px]">
                        <span className='bg-[#1d2e3a] rounded-[25px] block w-[fit-content] px-[12px]'>Hot</span>
                        <span className='text-[12px]'>Free Express Shipping</span>
                    </div>
                    <div className="w-full md:w-[150px] justify-between flex items-center space-x-[20px]">
                        <LanguageSwitcher />
                        <SocialMediaBox />
                    </div>
                </div>
            </ContainerWrapper>
            
        </div>
    );
}

export default TopBar;

