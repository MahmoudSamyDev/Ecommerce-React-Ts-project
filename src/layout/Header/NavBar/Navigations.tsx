import ExpandMore from '@mui/icons-material/ExpandMore';
import './Navigations.css';

function Navigations() {
    return (
        <div className="navigations h-[50px] w-[30%] text-black">
            <ul className="flex justify-between items-center h-[50px]">
                <li className="h-[50px] w-[23%] flex justify-center items-center cursor-pointer hover:bg-[#f3f8fa]">
                    <span>Home</span>
                    <ExpandMore />
                </li>
                <li className="h-[50px] w-[23%] flex justify-center items-center cursor-pointer hover:bg-[#f3f8fa]">
                    <span>Shop</span>
                    <ExpandMore />
                </li>
                <li className="h-[50px] w-[23%] flex justify-center items-center cursor-pointer hover:bg-[#f3f8fa]">
                    <span>About</span>
                    <ExpandMore />
                </li>
                <li className="h-[50px] w-[23%] flex justify-center items-center cursor-pointer hover:bg-[#f3f8fa]">
                    <span>Contact</span>
                    <ExpandMore />
                </li>
            </ul>
        </div>
    );
}

export default Navigations;