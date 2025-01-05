import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function LanguageSwitcher() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [SelectedLanguage, setSelectedLanguage] = useState<'EN' | 'AR'>('EN');
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (lang?: 'EN' | 'AR') => {
        if (lang) {
            setSelectedLanguage(lang);
        }
        setAnchorEl(null);
    };
    return (
        <>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{color: 'white', padding: '0', fontSize: '10px'}}
            >
                {SelectedLanguage} <KeyboardArrowDownIcon sx={{fontSize: '20px'}}/>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={() => handleClose()}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem sx={{fontSize: '12px', paddingX: 2}} onClick={() => handleClose('EN')}>EN</MenuItem>
                <MenuItem sx={{fontSize: '12px', paddingX: 2}} onClick={() => handleClose('AR')}>AR</MenuItem>
            </Menu>
        </>
    );
}

export default LanguageSwitcher;