import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { CountriesList, StatesList } from '../../../utilities/data';
import BasicSelection from '../../../layout/Components/FormComponents/BasicSelection';

function ShippingEstimates() {

    return (
        <section className='shipping-stimations'>
            <div className='flex gap-[8px] items-center mb-[20px]'>
                <span className='text-black text-[16px]'>Shipping Estimates</span>
            </div>
            <Box sx={{ minWidth: 120 }}>
                
                <FormControl fullWidth sx={{margin: '10px 0', display: 'flex', flexDirection: 'column', gap: '20px'}}>
                    <BasicSelection list={CountriesList} label='Country'/>
                    <BasicSelection list={StatesList} label='State'/>
                    <TextField 
                        id="outlined-basic" 
                        label="Zip Code" 
                        variant="outlined" 
                        sx={{ 
                            width: "100%",
                            borderRadius: '8px',
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'grey',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'black',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#c50f1e',
                                },
                            },
                            '& .MuiInputLabel-root': {
                                color: 'grey',
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: '#c50f1e',
                            },
                        }}
                    />
                </FormControl>
            </Box>
        </section>
    );
}

export default ShippingEstimates;