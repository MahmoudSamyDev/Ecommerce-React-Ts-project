import { Search, SearchIconWrapper, StyledInputBase } from './SearchComponents'
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';

const options = [
    'All Categories',
    'Electronics',
    'Automobile',
    'Fashion',
    'Home & Garden',
    'Health & Beauty',
    'Sports',
    'Toys & Hobbies',
    'Others',
]
function SearchBar() {
    const [SelectedCategory, setSelectedCategory] = useState('All Categories');
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (category?: string) => {
        if (category) {
            setSelectedCategory(category);
        }
        setAnchorEl(null);
    };
    return(
        <div className='search-bar-container my-[30px] md:my-0 w-full md:w-[650px] flex justify-between border border-gray-300 bg-[#f5fcff] rounded-[22px] px-[0px]'>
            <Search>
                <SearchIconWrapper sx={{color: 'grey'}}>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    sx={{color: 'grey'}}
                />
            </Search>
            <div>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    sx={{color: 'grey', fontSize: '15px', marginY: 'auto'}}
                    onClick={handleClick}
                >
                    {SelectedCategory} <KeyboardArrowDownIcon />
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
                    {options.map((option) => (
                        <MenuItem
                            key={option}
                            onClick={() => handleClose(option)}
                            sx={{width: '170px'}}
                        >
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
        </div>
    )
}

export default SearchBar;