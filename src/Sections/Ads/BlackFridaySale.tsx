import ContainerWrapper from "../../layout/Components/ContainerWrapper";
import './adsStyle.css';

function BlackFridaySale() {
    return (
        <div className="main-header-container w-full content-center mb-[50px]">
            <ContainerWrapper>
                <div className="w-full overflow-hidden min-h-[100px] h-[100px] max-h-[fit-content] rounded-[14px] my-[10px] content-center py-[15px] md:py-0 bg-[#183257] flex items-center justify-center">
                    <div className="relative w-[calc(100%-10px)] h-[calc(100%-10px)] flex items-center rounded-[14px] my-[10px] content-center py-[15px] md:py-0 border border-dashed border-white">
                        <span className="text-[35px] font-[500] absolute z-[10] hidden lg:block">Black Friday Sale!</span>
                        <span className="bg-background skew-x-[-50deg] w-[30%] h-[calc(100%+20px)] absolute top-[-10px] left-[-100px] flex items-center z-[7] hidden lg:block"></span>
                        <div className="absolute right-2 w-[10%] h-[90%] bg-[#183257] my-[10px] flex justify-center items-center z-[7] hidden md:flex">
                            <button className='bg-white text-[#183257] text-[13px] rounded-[4px] w-[100px] h-[30px] transition duration-300 ease-in-out hover:bg-[#183257] hover:text-white'>Shop Now</button>
                        </div>
                        <span className="block text-white w-[90%] h-[70%] absolute z-[5] left-[10%] loader font-bold text-[30px] overflow-hidden relative h-full w-full flex items-center"></span>
                    </div>
                </div>
            </ContainerWrapper>
        </div>
    );
}

export default BlackFridaySale;
