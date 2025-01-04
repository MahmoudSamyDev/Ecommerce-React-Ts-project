import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";

type MenuName = "home" | "shop";

interface MobileNavItemProps {
    menuName: MenuName;
    openMenus: any;
    handleMenu: (menuName: MenuName) => (event: React.MouseEvent) => void;
}
function MobileNavItem({
    menuName,
    openMenus,
    handleMenu,
}: MobileNavItemProps) {
return (
        <div className="menu">
        <ListItemButton onClick={handleMenu(menuName)}>
            <ListItemText primary={openMenus[menuName].title} />

            {openMenus[menuName].show ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse in={openMenus[menuName].show} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            {openMenus[menuName].options?.map((nav: any, index: number) => (
                <ListItemButton key={index} sx={{ pl: 4 }}>
                <ListItemText primary={nav.title} />
                </ListItemButton>
            ))}
            </List>
        </Collapse>
        </div>
    );
}

export default MobileNavItem;
