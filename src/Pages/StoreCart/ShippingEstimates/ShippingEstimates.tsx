import Box from '@mui/material/Box';
import { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import AquiredSelection from './AquiredSelection';
import TextField from '@mui/material/TextField';

const CountriesList = [
    {
        id: 0,
        name: 'United States',
        value: 'US'
    },
    {
        id: 1,
        name: 'Canada',
        value: 'CA'
    },
    {
        id: 2,
        name: 'Mexico',
        value: 'MX'
    },
    {
        id: 3,
        name: 'United Kingdom',
        value: 'UK'
    },
    {
        id: 4,
        name: 'Germany',
        value: 'DE'
    },
    {
        id: 5,
        name: 'France',
        value: 'FR'
    }
]

const StatesList = [
    {
        id: 0,
        name: 'California',
        value: 'CA'
    },
    {
        id: 1,
        name: 'Texas',
        value: 'TX'
    },
    {
        id: 2,
        name: 'New York',
        value: 'NY'
    },
    {
        id: 3,
        name: 'Florida',
        value: 'FL'
    },
    {
        id: 4,
        name: 'Illinois',
        value: 'IL'
    },
    {
        id: 5,
        name: 'Pennsylvania',
        value: 'PA'
    }
]

function ShippingEstimates() {
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');

    const handleChangeCountry = (event: SelectChangeEvent) => {
        setCountry(event.target.value as string);
    };
    const handleChangeState = (event: SelectChangeEvent) => {
        setState(event.target.value as string);
    };

    const countriesSelection = {selections: CountriesList, changableState: country, handler: handleChangeCountry, label: 'Country'}
    const statesSelection = {selections: StatesList, changableState: state, handler: handleChangeState, label: 'State'}
    return (
        <section className='shipping-stimations'>
            <div className='flex gap-[8px] items-center mb-[20px]'>
                <span className='text-black text-[16px]'>Shipping Estimates</span>
            </div>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth sx={{margin: '10px 0'}}>
                    <AquiredSelection properties={countriesSelection}/>
                </FormControl>
                <FormControl fullWidth sx={{margin: '10px 0'}}>
                    <AquiredSelection properties={statesSelection}/>
                </FormControl>
                <FormControl fullWidth sx={{margin: '10px 0'}}>
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