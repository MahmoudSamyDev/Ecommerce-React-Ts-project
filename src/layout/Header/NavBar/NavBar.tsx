import ContainerWrapper from "../../Components/ContainerWrapper";
import CategoriesMenu from "./CategoriesMenu";
import Navigations from "./Navigations";

function NavBar() {
    return (
        <div className="navBar w-full h-[40px] relative z-[1000] text-[14px] mt-[15px]">
            <ContainerWrapper>
                <div className="w-full flex flex-col md:flex-row justify-between items-center relative h-full">
                    <CategoriesMenu />
                    <Navigations />
                </div>
            </ContainerWrapper>
        </div>
    );
}

export default NavBar;
