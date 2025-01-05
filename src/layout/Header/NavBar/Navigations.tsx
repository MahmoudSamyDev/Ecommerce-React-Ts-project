import NavList from './NavSections/HomeNavigations/NavList';
import { HomeNavigations, ShopNavigations } from '../../../utilities/data';
import MobileNavigations from './MobileNavigations';

import './Navigations.css';

function Navigations() {
    return (
        <div className="navigations h-[50px] w-[fit-content] text-black mr-[50px] flex items-center">

            <ul className="flex justify-between items-center mr-[40px] hidden md:flex relative">
                <NavList title='Home' navs={HomeNavigations}/>
                <NavList title='Shop' navs={ShopNavigations}/>
                <NavList title='About' navs={HomeNavigations}/>
                <NavList title='Contact' navs={HomeNavigations}/>
            </ul>

            <div className="absolute right-0 md:hidden">
                <MobileNavigations />
            </div>

        </div>
    );
}

export default Navigations;