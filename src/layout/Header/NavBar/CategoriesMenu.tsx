import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt,
    faHouse,
    faSuitcaseMedical,
    faVolleyball,
    faPlugCircleBolt,
    faCarRear,
    faDice } from '@fortawesome/free-solid-svg-icons';
import CategoryIcon from '@mui/icons-material/Category';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const categories = [
    { name: 'All Categories', icon: <CategoryIcon sx={{fontSize: '14px'}} />, more: true },
    { name: 'Electronics', icon: <FontAwesomeIcon icon={faPlugCircleBolt} />, more: true },
    { name: 'Automobile', icon: <FontAwesomeIcon icon={faCarRear} />, more: true },
    { name: 'Fashion', icon: <FontAwesomeIcon icon={faShirt} />, more: true },
    { name: 'Home & Garden', icon: <FontAwesomeIcon icon={faHouse} />, more: true },
    { name: 'Health & Beauty', icon: <FontAwesomeIcon icon={faSuitcaseMedical} />, more: true },
    { name: 'Sports', icon: <FontAwesomeIcon icon={faVolleyball} />, more: true },
    { name: 'Toys & Hobbies', icon: <FontAwesomeIcon icon={faDice} />, more: true },
];

function CategoriesMenu() {
    const [open, setOpen] = React.useState(false);
    const menuRef = React.useRef<HTMLDivElement>(null);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setOpen(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='categoriesMenu flex-1'>
            <List
                ref={menuRef}
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 1000,
                    height: '100%',
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <ListItemButton onClick={handleClick} sx={{ height: '100%', background: '#f0f0f0', borderRadius: '5px' }}>
                    <div className='flex items-center mr-[20px]'>
                        <CategoryIcon sx={{fontSize: '18px', marginRight: '15px'}} />
                        <ListItemText sx={{".MuiTypography-root": {fontSize: '13px'}, fontSize: '10px'}} primary="All Categories"/>
                    </div>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" sx={{background: 'white', padding: '0'}} unmountOnExit>
                    <List component="div" disablePadding>
                        {categories.map((category, index) => (
                            <ListItemButton  sx={{paddingY: '5px'}} key={index}>
                                <ListItemIcon>
                                    {category.icon}
                                </ListItemIcon>
                                <ListItemText sx={{".MuiTypography-root": {fontSize: '13px'}}}  primary={category.name} />
                                {category.more ? <ChevronRightIcon /> : null}
                            </ListItemButton>
                        ))}
                    </List>
                </Collapse>
            </List>
        </div>
    );
}

export default CategoriesMenu;
