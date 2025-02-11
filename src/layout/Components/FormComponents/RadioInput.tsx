import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

interface RadioInputProps {
    checkedMethod: boolean;
    name: string;
    label: string;
}

function RadioInput({checkedMethod, name, label}: RadioInputProps) {
    return (
        <FormControlLabel
            checked={checkedMethod}
            name={name}
            value={name}
            control={<Radio />}
            label={label}
            sx={{
                "& .MuiSvgIcon-root": {
                    color: '#c50f1e',
                },
                "& .MuiRadio-root": {
                    color: '#c50f1e',
                },
                "&.Mui-checked": {
                    color: '#c50f1e',
                },
            }}
        />
    );
}

export default RadioInput;