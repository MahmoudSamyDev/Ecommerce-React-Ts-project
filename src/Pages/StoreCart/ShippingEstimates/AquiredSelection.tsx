import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { SelectChangeEvent } from '@mui/material/Select';

interface SelectionProps {
    selections: { id: number; name: string; value: string }[],
    changableState: string,
    handler: (event: SelectChangeEvent<string>, child: React.ReactNode) => void,
    label: string
}

function AquiredSelection({properties}: {properties: SelectionProps}) {
    return(
        <>
            <InputLabel
                id="demo-simple-select-label"
                sx={{
                    color: 'grey',
                    '&.Mui-focused': {
                        color: '#c50f1e',
                    },
                }}
            >
                {properties.label}
            </InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={properties.changableState}
                label="Country"
                onChange={properties.handler}
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
                    properties?.selections?.map((selection) => {
                        return <MenuItem value={selection.value}>{selection.name}</MenuItem>
                    })
                }
            </Select>
        </>
    )
}

export default AquiredSelection;