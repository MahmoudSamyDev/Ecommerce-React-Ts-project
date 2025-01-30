import { useState } from 'react';
import { ElectronicsSection } from '../../utilities/data';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function StorePage() {
    const [priceValue, setPriceValue] = useState<number[]>([0, 3000]);

    const handleChange = (_event: Event, newValue: number | number[]) => {
        setPriceValue(newValue as number[]);
    };

    function valuetext(value: number) {
        return `$${value}`;
    }

    return(
        <div className="category-navigation bg-white h-[fit-content] p-[15px] my-auto p-[25px] rounded-[14px] shadow">
            <span className='font-bold block text-[15px]'>Categories</span>
            <div className='navs'>
                {
                    ElectronicsSection.navs.map((nav: any) => (
                        <span key={nav.id} className='block my-[10px] cursor-pointer text-[15px] text-[grey]'>{nav.title}</span>
                    ))
                }
            </div>
            <span className='font-bold block text-[15px] mt-[35px]'>Price Range</span>
            <div className='price-range'>
                <Box sx={{ width: '100%' }}>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={priceValue}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                    />
                </Box>
                <div className='price-range-values flex justify-between gap-[5px]'>
                    <span className='text-[15px] block border border-[#e3e3e3] rounded-[5px] w-[100px] h-[30px] flex justify-center items-center'>${priceValue[0]}</span>
                    <span className='hidden lg:block'>_</span>
                    <span className='text-[15px] block border border-[#e3e3e3] rounded-[5px] w-[100px] h-[30px] flex justify-center items-center'>${priceValue[1]}</span>
                </div>
            </div>
            <span className='font-bold block text-[15px] mt-[35px]'>Brands</span>
            <div className='brands-box'>
                <FormGroup>
                    <FormControlLabel control={<Checkbox sx={{".MuiSvgIcon-root": {width: '18px', height: '18px'}}}/>} label="Brand A" sx={{'.MuiTypography-root': {fontSize: '15px'}}}/>
                    <FormControlLabel control={<Checkbox sx={{".MuiSvgIcon-root": {width: '18px', height: '18px'}}}/>} label="Brand B" sx={{'.MuiTypography-root': {fontSize: '15px'}}}/>
                    <FormControlLabel control={<Checkbox sx={{".MuiSvgIcon-root": {width: '18px', height: '18px'}}}/>} label="Brand C" sx={{'.MuiTypography-root': {fontSize: '15px'}}}/>
                    <FormControlLabel control={<Checkbox sx={{".MuiSvgIcon-root": {width: '18px', height: '18px'}}}/>} label="Brand D" sx={{'.MuiTypography-root': {fontSize: '15px'}}}/>
                </FormGroup>
            </div>
            <hr className='my-[20px]'></hr>
            <div className='brands-box'>
                <FormGroup>
                    <FormControlLabel control={<Checkbox sx={{".MuiSvgIcon-root": {width: '18px', height: '18px'}}}/>} label="On Sale" sx={{'.MuiTypography-root': {fontSize: '15px'}}}/>
                    <FormControlLabel control={<Checkbox sx={{".MuiSvgIcon-root": {width: '18px', height: '18px'}}}/>} label="Limited Offer" sx={{'.MuiTypography-root': {fontSize: '15px'}}}/>
                    <FormControlLabel control={<Checkbox sx={{".MuiSvgIcon-root": {width: '18px', height: '18px'}}}/>} label="Full Price" sx={{'.MuiTypography-root': {fontSize: '15px'}}}/>
                </FormGroup>
            </div>
            <span className='font-bold block text-[15px] mt-[35px]'>Ratings</span>
            <div className='ratings'>
                <FormGroup>
                    <FormControlLabel control={<Checkbox sx={{".MuiSvgIcon-root": {width: '18px', height: '18px'}}}/>} label={<Rating name="read-only" value={4} readOnly sx={{"&.MuiRating-readOnly": {fontSize: '18px'}}}/>}/>
                    <FormControlLabel control={<Checkbox sx={{".MuiSvgIcon-root": {width: '18px', height: '18px'}}}/>} label={<Rating name="read-only" value={4} readOnly sx={{"&.MuiRating-readOnly": {fontSize: '18px'}}}/>}/>
                    <FormControlLabel control={<Checkbox sx={{".MuiSvgIcon-root": {width: '18px', height: '18px'}}}/>} label={<Rating name="read-only" value={4} readOnly sx={{"&.MuiRating-readOnly": {fontSize: '18px'}}}/>}/>
                    <FormControlLabel control={<Checkbox sx={{".MuiSvgIcon-root": {width: '18px', height: '18px'}}}/>} label={<Rating name="read-only" value={4} readOnly sx={{"&.MuiRating-readOnly": {fontSize: '18px'}}}/>}/>
                    <FormControlLabel control={<Checkbox sx={{".MuiSvgIcon-root": {width: '18px', height: '18px'}}}/>} label={<Rating name="read-only" value={4} readOnly sx={{"&.MuiRating-readOnly": {fontSize: '18px'}}}/>}/>
                </FormGroup>
            </div>
        </div>
    )
}

export default StorePage;