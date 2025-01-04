import ExpandMore from '@mui/icons-material/ExpandMore';
import { Box, Paper } from '@mui/material';
import NavObject from './Market';

const navigations = [
    {
        title: 'Market',
        elements: ['Electronics', 'Fashion', 'Gadget', 'Gift Store', 'Health and beauty']
    }
]
function HomeNav(): JSX.Element {
    return (
        <Box
            className="relative h-[40px] w-[23%] flex justify-center items-center cursor-pointer hover:bg-[#f3f8fa]"
            sx={{ "&:hover .show": { display: "block" } }}
        >
            <span>Home</span>
            <ExpandMore />

            {/* Categories */}
            <Box className='show'
                sx={{
                    position: 'absolute',
                    width: '250px',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                    display: 'none',
                    background: 'transparent',
                    top: "35px",
                }}
            >
                <Paper sx={{marginTop: '20px'}}>
                        { navigations?.map((nav, index) => <NavObject key={index} nav={nav} />) }
                </Paper>
            </Box>
            

        </Box>
    );
}

export default HomeNav;