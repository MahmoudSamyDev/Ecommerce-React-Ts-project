import Grid from '@mui/material/Grid2';


interface ValueCard {
    id: number;
    icon: JSX.Element;
    title: string;
    description: string;
}

function Value({card}: {card: ValueCard}) {
    return (
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <div className='w-[90%] flex justify-center items-center gap-4'>
                <div className='icon'>{card?.icon}</div>
                <div className='content leading-[18px]'>
                    <span className='block'>{card?.title}</span>
                    <span className='block text-[grey] text-[12px]'>{card?.description}</span>
                </div>
            </div>
        </Grid>
    );
}

export default Value;