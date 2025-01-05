import ContainerWrapper from '../../layout/Components/ContainerWrapper';
import Box from '@mui/material/Box';
import SliderAds from './SliderLanding';
import BoxAd from './BoxAd';

function Landing() {
    return (
        <div className="main-header-container w-full content-center py-[15px]">
            <ContainerWrapper>
                <div className="flex flex-col lg:flex-row gap-4 justify-between min-h-[fit-content] h-[490px] max-h-[fit-content]">
                    <SliderAds />
                    <Box sx={{flexDirection: {xs: 'row', md: 'column'}, display:'flex', gap: '10px', justifyContent: 'space-between'}}>
                        <BoxAd 
                            content={{title: 'New Arrivals', offer: <span>Summer<br /> SALE 20% OFF</span>} } 
                            img={<img src="src/assets/Landing/3.jpg" className='h-full w-full' alt="placeholder" />}
                        />
                        <BoxAd 
                            content={{title: 'Gaming 4k', offer: <span>Desktop &<br /> Labtops <br /> SALE 20% OFF</span>} } 
                            img={<img src="src/assets/Landing/2.jpg" className='h-full w-full' alt="placeholder" />}
                        />
                    </Box>
                </div>
            </ContainerWrapper>
        </div>
    );
}



export default Landing;