import React from 'react';
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";

type MenuName = "home" | "shop";

interface NavigationItem {
    title: string;
    elements?: string[];
}

interface MenuState {
    title: string;
    show: boolean;
    options: {
        elements: NavigationItem[];
        show: boolean;
    };
}

interface OpenSubMenus {
    [key: string]: boolean;
}

interface MobileNavItemProps {
    menuName: MenuName;
    openMenus: {
        [key in MenuName]: MenuState;
    };
    handleMenu: (menuName: MenuName) => (event: React.MouseEvent) => void;
}

function MobileNavItem({
    menuName,
    openMenus,
    handleMenu,
}: MobileNavItemProps) {
    // State to track which sub-menus are open
    const [openSubMenus, setOpenSubMenus] = React.useState<OpenSubMenus>({});

    // Handle sub-menu toggle
    const handleSubMenu = (navTitle: string) => (event: React.MouseEvent) => {
        event.stopPropagation();
        setOpenSubMenus(prev => ({
            ...prev,
            [navTitle]: !prev[navTitle]
        }));
    };

    return (
        <div className="menu">
            {/* Main menu button (Home/Shop) */}
            <ListItemButton onClick={handleMenu(menuName)}>
                <ListItemText primary={openMenus[menuName].title} />
                {openMenus[menuName].show ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            {/* First level collapse (shows Market, Gadgets, etc.) */}
            <Collapse in={openMenus[menuName].show} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {openMenus[menuName].options.elements.map((nav: NavigationItem, index: number) => (
                        <React.Fragment key={index}>
                            {/* Navigation item with optional sub-menu */}
                            <ListItemButton 
                                sx={{ pl: 4 }}
                                onClick={nav.elements ? handleSubMenu(nav.title) : undefined}
                            >
                                <ListItemText primary={nav.title} />
                                {nav.elements && (
                                    openSubMenus[nav.title] ? <ExpandLess /> : <ExpandMore />
                                )}
                            </ListItemButton>

                            {/* Sub-menu items (if they exist) */}
                            {nav.elements && (
                                <Collapse in={openSubMenus[nav.title]} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {nav.elements.map((element: string, elementIndex: number) => (
                                            <ListItemButton 
                                                key={elementIndex} 
                                                sx={{ pl: 8 }}
                                            >
                                                <ListItemText primary={element} />
                                            </ListItemButton>
                                        ))}
                                    </List>
                                </Collapse>
                            )}
                        </React.Fragment>
                    ))}
                </List>
            </Collapse>
        </div>
    );
}

export default MobileNavItem;