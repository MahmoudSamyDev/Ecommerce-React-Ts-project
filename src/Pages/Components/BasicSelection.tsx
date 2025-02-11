
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

interface BasicSelection_TP {
    label: string;
    list: { id: number; name: string; value: string }[];
}
function BasicSelection({label, list}: BasicSelection_TP) {
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel
                    id="demo-simple-select-label"
                    sx={{
                        color: 'grey',
                        '&.Mui-focused': {
                            color: '#c50f1e',
                        },
                    }}
                >
                    {label}
                </InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label={label}
                sx={{
                    height: 'fit-content',
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'grey',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'black',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#c50f1e',
                    },
                    '& .MuiInputLabel-root': {
                        color: 'grey',
                    },
                    '&:hover .MuiInputLabel-root': {
                        color: 'black',
                    },
                }}
                >
                    {
                        list.map((item) => {
                            return <MenuItem key={item.id} value={item.value}>{item.name}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
        </Box>
    )
}

export default BasicSelection;