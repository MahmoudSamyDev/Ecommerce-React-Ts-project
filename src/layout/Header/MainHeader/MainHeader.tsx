import ContainerWrapper from "../../Components/ContainerWrapper";
import Logo from "./Logo";
import SearchBar from "./SearchBar/SearchBar";
import ProfileAndCartBox from "./ProfileAndCart/ProfileAndCartBox";

function MainHeader() {
    return (
        <div className="main-header-container w-full content-center py-[10px]">
            <ContainerWrapper>
                <div className="w-[100%] h-[100%] flex flex-col md:flex-row justify-between items-center">
                    <Logo />
                    <SearchBar />
                    <ProfileAndCartBox />
                </div>
            </ContainerWrapper>
        </div>
    );
}


export default MainHeader;