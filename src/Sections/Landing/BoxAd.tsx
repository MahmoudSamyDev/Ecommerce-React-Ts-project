import { Stack, Typography, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function BoxAd({content, img}: {content: {title: string, offer: React.ReactNode}, img: React.ReactNode}) {
    return(
        <Box sx={{position: 'relative', borderRadius: '14px', overflow: 'hidden'}}>
            <Stack sx={{position: 'absolute', top: '40%', left: '8%', transform: 'translateY(-50%)'}}>
                <Typography
                    component="span"
                >
                    {content.title}
                </Typography>
                <Typography
                    component="span"
                    sx={{fontSize: '18px', fontWeight: '600'}}
                >
                    {content.offer}
                </Typography>
                <Typography sx={{
                        marginTop: '10px',
                        fontSize: '14px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '80%',
                        cursor: 'pointer',
                        position: 'relative',
                        "&:hover .underline-decore": {width: '90%', backgroundColor: 'black'}
                    }}
                >
                    <span className='flex gap-2 mb-[4px]'>
                        <span>Shop Now</span>
                        <ArrowForwardIcon
                            sx={{fontSize: '18px',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        />
                    </span>
                    <span className='block underline-decore w-0 h-[1px] bg-black transition-all duration-200 ease-in-out'></span>
                </Typography>
            </Stack>
            {img}
        </Box>
    )
}

export default BoxAd;