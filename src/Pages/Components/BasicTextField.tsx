import TextField from '@mui/material/TextField';

function BasicTextField({name, label}: {name: string, label: string}) {
    return (
        <TextField 
            id="outlined-basic" 
            label={label} 
            variant="outlined"
            name={name}
            sx={{ 
                width: "100%", 
                borderRadius: '8px',
                margin: '20px 0',
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
    );
}

export default BasicTextField;