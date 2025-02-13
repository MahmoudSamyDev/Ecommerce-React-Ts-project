import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Button from '@mui/material/Button';
import CartSideBar from './CartSideBar';
import MobileNavigations from '../../NavBar/MobileNavigations';

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
        <div className="flex items-center justify-between w-full md:w-[fit-content]">
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
                    <CartSideBar />
                </Button>
            </div>
            <div className='block md:hidden'>
                <MobileNavigations />
            </div>
        </div>
    );
}

export default ProfileAndCartBox;
