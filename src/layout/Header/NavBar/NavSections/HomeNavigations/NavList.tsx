import ExpandMore from '@mui/icons-material/ExpandMore';
import { Box, Paper } from '@mui/material';
import NavObject from './NavObject';

interface NavListProps {
    navs?: {title: string, elements?: string[]}[];
    title: string;
}

function NavList({navs, title}: NavListProps): JSX.Element {
    return (
        <Box
            className="relative h-[30px] w-[23%] px-[12px] flex justify-center items-center cursor-pointer hover:bg-[#f3f8fa]"
            sx={{ "&:hover .show": { display: "block" } }}
        >
            <span>{title}</span>
            { navs && <ExpandMore />}
            

            {/* Categories */}
            <Box className='show'
                sx={{
                    position: 'absolute',
                    width: '200px',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                    display: 'none',
                    background: 'transparent',
                    // background: 'red',
                    top: "30px",
                }}
            >
                <Paper sx={{marginTop: '20px', borderRadius: '14px'}}>
                        { navs && navs?.map((nav, index) => <NavObject key={index} nav={nav} />) }
                </Paper>
            </Box>
            

        </Box>
    );
}

export default NavList;