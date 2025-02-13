import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

interface NavLink {
    name: string;
    icon: JSX.Element;
}

interface NavSection {
    header: string;
    links: NavLink[];
}
export default function ReviewSideNav({ menu }: { menu: NavSection[] }) {
    console.log(menu[1]);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <span className='text-[grey] pl-[15px] text-[16px]'>{menu[0].header}</span>
            <List sx={{ cursor: 'pointer' }}>
                {
                    menu[0].links.map((link, index) => (
                        <div className='border-l-[2px] duration-300 border-[transparent] hover:border-officialRed pl-[10px]'>
                            <ListItem
                                key={index}
                                sx={{
                                    transition: 'color 0.3s ease',
                                    marginBottom: '10px',
                                    padding: '0',
                                    '&:hover': {
                                        '& .MuiListItemIcon-root': {
                                            color: '#c50f1e',
                                            transition: 'color 0.3s ease',
                                        },
                                        '& .MuiListItemText-primary': {
                                            color: '#c50f1e',
                                            transition: 'color 0.3s ease',
                                        },
                                    },
                                }}
                            >
                                <ListItemIcon sx={{ minWidth: 'fit-content' }}>
                                    {link.icon}
                                </ListItemIcon>
                                <ListItemText primary={link.name} sx={{ marginLeft: '14px', "& .MuiTypography-body1": { fontSize: '14px' } }} />
                            </ListItem>
                        </div>
                    ))
                }
            </List>
        </Box>
    );
}