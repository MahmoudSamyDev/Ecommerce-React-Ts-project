import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ExpandMore from '@mui/icons-material/ExpandMore';


export default function NavSection() {
const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
const open = Boolean(anchorEl);
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
};
const handleClose = () => {
    setAnchorEl(null);
};

return (
    <div className="h-[50px] w-[23%] flex justify-center items-center cursor-pointer hover:bg-[#f3f8fa]">
        <span onClick={handleClick} className="block h-[50px] w-[100%] flex justify-center items-center cursor-pointer hover:bg-[#f3f8fa]">
            <span>Home</span>
            <ExpandMore />
        </span>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
    </div>
);
}