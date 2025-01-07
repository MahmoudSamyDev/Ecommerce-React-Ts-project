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
            <div className='w-full flex justify-center items-center gap-4 h-full'>
                <div className='flex w-[78%] h-full sm:w-[40%] md:w-[50%] lg:w-[80%] justify-start items-center content-center mx-auto'>
                    <div className='icon mr-[15px] w-[25%] flex justify-center items-center'>{card?.icon}</div>
                    <div className='content leading-[18px] text-left lg:grow-0'>
                        <span className='block'>{card?.title}</span>
                        <span className='block text-[grey] text-[12px]'>{card?.description}</span>
                    </div>

                </div>
            </div>
        </Grid>
    );
}

export default Value;