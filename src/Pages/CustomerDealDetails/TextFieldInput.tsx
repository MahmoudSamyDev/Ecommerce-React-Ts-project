import TextField from '@mui/material/TextField';

interface TextFieldInputProps {
    label: string;
    name: string;
    handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextFieldInput({ label, handler }: TextFieldInputProps) {
    return (
        <TextField
            id="outlined-basic"
            label={label}
            onChange={handler}
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
    )
}

export default TextFieldInput