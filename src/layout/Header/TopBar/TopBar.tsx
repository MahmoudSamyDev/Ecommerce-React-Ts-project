import SocialMediaBox from "./SocialMedia";
import LanguageSwitcher from "./LanguageSwitcher";
import ContainerWrapper from "../../../layout/Components/ContainerWrapper";


function TopBar() {
    return (
        <div className="top-bar-container w-full bg-darkBlue min-h-[35px] max-h-[fit-content]">
            <ContainerWrapper>
                <div className='top-bar flex-col md:flex-row py-[6px] flex justify-between h-full items-center text-white'>
                    <div className="w-full md:w-[200px] flex justify-between items-center space-x-[20px]">
                        <span className='bg-[#1d2e3a] rounded-[25px] block w-[fit-content] text-[13px] px-[12px]'>Hot</span>
                        <span className='text-[11px]'>Free Express Shipping</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <LanguageSwitcher />
                        <SocialMediaBox />
                    </div>
                </div>
            </ContainerWrapper>
            
        </div>
    );
}

export default TopBar;

