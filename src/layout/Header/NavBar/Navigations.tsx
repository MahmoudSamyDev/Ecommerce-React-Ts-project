import NavList from './NavSections/HomeNavigations/NavList';
import { HomeNavigations, ShopNavigations } from '../../../utilities/data';

import './Navigations.css';

function Navigations() {
    return (
        <div className="navigations h-full w-[fit-content] text-black flex items-center justidy-between">
            <ul className="hidden justify-between items-center md:flex relative">
                <NavList title='Home' navs={HomeNavigations}/>
                <NavList title='Shop' navs={ShopNavigations}/>
                <NavList title='About' navs={HomeNavigations}/>
                <NavList title='Contact'/>
            </ul>
        </div>
    );
}

export default Navigations;