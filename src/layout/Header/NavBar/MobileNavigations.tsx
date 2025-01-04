import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import { HomeNavigations, ShopNavigations } from '../../../utilities/data';
import MobileNavItem from './MobileNavItem';


type Anchor = 'top';
type MenuName = 'home' | 'shop';

export default function AnchorTemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false,
    });

    const [openMenus, setOpenMenus] = React.useState({
        home: {
            title: 'Home',
            show: false,
            options: {
                elements: HomeNavigations,
                show: true
            }
        },
        shop: {
            title: 'Shop',
            show: false,
            options: {
                elements: ShopNavigations,
                show: false
            }
        }
    });

    const handleMenu = (menuName: MenuName) => (event: React.MouseEvent) => {
        event.stopPropagation();
        setOpenMenus(prev => ({
            ...prev,
            [menuName]: {
                ...prev[menuName],
                show: !prev[menuName].show
            }
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

            {Object.keys(openMenus).map((menuName) => (
                <MobileNavItem 
                    key={menuName}
                    menuName={menuName as MenuName}
                    openMenus={openMenus}
                    handleMenu={handleMenu}
                />
            ))}
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