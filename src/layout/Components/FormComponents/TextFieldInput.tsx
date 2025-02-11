import TextField from '@mui/material/TextField';

interface TextFieldInputProps {
    label: string;
    name: string;
    handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextFieldInput({ label, handler, name }: TextFieldInputProps) {
    return (
        <TextField
            id="outlined-basic"
            label={label}
            name={name}
            onChange={handler}
            variant="outlined"
            sx={{
                width: "100%",
                borderRadius: '8px',
                '& .MuiOutlinedInput-root': {
                    height: '40px', // Set the height of the input field
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
                    transform: 'translate(9px, 9px) scale(1)', // Adjust label position
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: '#c50f1e',
                    transform: 'translate(14px, -6px) scale(0.75)', // Adjust label position when focused
                },
                '& .MuiOutlinedInput-input': {
                    padding: '12px 14px', // Adjust padding to align text properly
                },
            }}
        />
    );
}

export default TextFieldInput;