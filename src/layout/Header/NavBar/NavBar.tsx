import ContainerWrapper from "../../Components/ContainerWrapper";
import CategoriesMenu from "./CategoriesMenu";
import Navigations from "./Navigations";

function NavBar() {
    return (
        <div className="navBar w-full h-[50px] relative z-[1000] text-[14px] bg-[green]">
            <ContainerWrapper>
                <div className="w-[100%] flex flex-col md:flex-row justify-between items-center relative h-[50px]">
                    <CategoriesMenu />
                    <Navigations />
                </div>
            </ContainerWrapper>
        </div>
    );
}

export default NavBar;
