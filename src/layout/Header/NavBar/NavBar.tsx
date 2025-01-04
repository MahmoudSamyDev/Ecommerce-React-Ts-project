import ContainerWrapper from "../../Components/ContainerWrapper";
import CategoriesMenu from "./CategoriesMenu";
import Navigations from "./Navigations";

function NavBar() {
    return (
        <div className="navBar w-full h-[50px] my-[10px]">
            <ContainerWrapper>
                <div className="w-[100%] flex flex-col md:flex-row justify-between items-center relative h-[50px]">
                    <div>
                        <CategoriesMenu />
                    </div>
                    <Navigations />
                </div>
            </ContainerWrapper>
        </div>
    );
}

export default NavBar;
