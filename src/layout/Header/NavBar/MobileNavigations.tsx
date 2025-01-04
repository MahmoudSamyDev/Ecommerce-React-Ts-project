import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import { HomeNavigations, ShopNavigations } from '../../../utilities/data';

type Anchor = 'top';
type MenuName = 'home' | 'shop';

export default function AnchorTemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false,
    });

    const [openMenus, setOpenMenus] = React.useState({
        home: false,
        shop: false
    });

    const handleMenu = (menuName: MenuName) => (event: React.MouseEvent) => {
        event.stopPropagation();
        setOpenMenus(prev => ({
            ...prev,
            [menuName]: !prev[menuName]
        }));
    };

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }
            setState({ ...state, [anchor]: open });
        };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === 'top' ? 'auto' : 250 }}
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>

                <ListItemButton onClick={handleMenu('home')}>
                    <ListItemText primary="Home" />
                    {openMenus.home ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openMenus.home} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {HomeNavigations?.map((nav, index) => (
                            <ListItemButton key={index} sx={{ pl: 4 }}>
                                <ListItemText primary={nav.title} />
                            </ListItemButton>
                        ))}
                    </List>
                </Collapse>

                <ListItemButton onClick={handleMenu('shop')}>
                    <ListItemText primary="Shop" />
                    {openMenus.shop ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openMenus.shop} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {ShopNavigations?.map((nav, index) => (
                            <ListItemButton key={index} sx={{ pl: 4 }}>
                                <ListItemText primary={nav.title} />
                            </ListItemButton>
                        ))}
                    </List>
                </Collapse>
            </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment>
                <Button onClick={toggleDrawer('top', true)}>
                    <MenuIcon />
                </Button>
                <Drawer
                    anchor={'top'}
                    open={state['top']}
                    onClose={toggleDrawer('top', false)}
                >
                    {list('top')}
                </Drawer>
            </React.Fragment>
        </div>
    );
}