import ContainerWrapper from "../../Components/ContainerWrapper";
import CategoriesMenu from "./CategoriesMenu";

function NavBar() {
    return (
        <div className="navBar w-full h-[50px] my-[10px]">
            <ContainerWrapper>
                <div className="w-[100%] flex flex-col md:flex-row justify-between items-center relative bg-[red]">
                    <CategoriesMenu />
                </div>
            </ContainerWrapper>
        </div>
    );
}

export default NavBar;
