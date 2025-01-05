import NavList from './NavSections/HomeNavigations/NavList';
import { HomeNavigations, ShopNavigations } from '../../../utilities/data';
import MobileNavigations from './MobileNavigations';

import './Navigations.css';

function Navigations() {
    return (
        <div className="navigations h-full w-[fit-content] text-black flex items-center justidy-between">

            <ul className="flex justify-between items-center hidden md:flex relative">
                <NavList title='Home' navs={HomeNavigations}/>
                <NavList title='Shop' navs={ShopNavigations}/>
                <NavList title='About' navs={HomeNavigations}/>
                <NavList title='Contact'/>
            </ul>

            <div className="absolute right-0 md:hidden">
                <MobileNavigations />
            </div>

        </div>
    );
}

export default Navigations;