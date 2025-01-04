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
    { name: 'All Categories', icon: <CategoryIcon />, more: true },
    { name: 'Electronics', icon: <FontAwesomeIcon icon={faPlugCircleBolt} />, more: true },
    { name: 'Automobile', icon: <FontAwesomeIcon icon={faCarRear} />, more: true },
    { name: 'Fashion', icon: <FontAwesomeIcon icon={faShirt} />, more: true },
    { name: 'Home & Garden', icon: <FontAwesomeIcon icon={faHouse} />, more: true },
    { name: 'Health & Beauty', icon: <FontAwesomeIcon icon={faSuitcaseMedical} />, more: true },
    { name: 'Sports', icon: <FontAwesomeIcon icon={faVolleyball} />, more: true },
    { name: 'Toys & Hobbies', icon: <FontAwesomeIcon icon={faDice} />, more: true },
    { name: 'Others' },
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
        <List
            ref={menuRef}
            sx={{
                width: '100%',
                heigth: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
                position: 'absolute',
                top: -8,
                left: 0,
                zIndex: 1000
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <CategoryIcon />
                </ListItemIcon>
                <ListItemText primary="All Categories"/>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {categories.map((category, index) => (
                        <ListItemButton key={index} sx={{ pl: 4 }}>
                            <ListItemIcon>
                                {category.icon}
                            </ListItemIcon>
                            <ListItemText primary={category.name} />
                            {category.more ? <ChevronRightIcon /> : null}
                        </ListItemButton>
                    ))}
                </List>
            </Collapse>
        </List>
    );
}

export default CategoriesMenu;
