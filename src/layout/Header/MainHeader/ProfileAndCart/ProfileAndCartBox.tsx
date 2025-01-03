import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';

const buttomStyle = {
    padding: 0,
    margin: 0,
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    minWidth: 0,
}

function ProfileAndCartBox() {
    return (
        <div className="flex items-center justify-center">
            {/* Profile Button */}
            <Button
                variant="text"
                sx={buttomStyle}
            >
                <PersonOutlineIcon sx={{ color: '#2b3445', cursor: 'pointer' }} />
            </Button>

            {/* Shopping Cart Button */}
            <Button
                variant="text"
                sx={buttomStyle}
            >
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlinedIcon sx={{ color: '#2b3445', cursor: 'pointer' }} />
                </Badge>
            </Button>
        </div>
    );
}

export default ProfileAndCartBox;
