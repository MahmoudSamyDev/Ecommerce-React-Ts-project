import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, Paper } from '@mui/material';


function NavObject({nav}: {nav: {title: string, elements?: string[]}}) {
    return (
        <ListItemButton sx={{py: 0, alignItems: 'center', position: 'relative', "&:hover .show-market-list": { display: "block" }}}>
            <ListItemText primary={nav?.title} />
            {nav?.elements && <ChevronRightIcon />}

            <Box className='show-market-list'
                sx={{
                    position: 'absolute',
                    width: '200px',
                    bgcolor: 'background.paper',
                    display: 'none',
                    background: 'transparent',
                    top: 0,
                    left: '98%',
                }}
            >
                {nav?.elements && (
                    <Paper sx={{marginLeft: '10px', width: 'fit-content'}}>
                        <List component="nav" aria-label="secondary mailbox folder">
                            {
                                nav?.elements?.map((element, index) => {
                                    return (
                                        <ListItemButton key={index} sx={{py: 0, alignItems: 'center'}}>
                                            <ListItemText primary={element} />
                                        </ListItemButton>
                                    )
                                })
                            }
                        </List>
                    </Paper>
                )}
            </Box>
        </ListItemButton>
    )
}

export default NavObject