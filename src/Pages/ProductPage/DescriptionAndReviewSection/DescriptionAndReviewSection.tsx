import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ReviewsSection from './ReviewSection/ReviewsSection';
import DescriptionSection from './DescriptionSection';


function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function DescriptionAndReviewSection() {
    const [value, setValue] = React.useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{"& .MuiTabs-indicator": {backgroundColor: "#c50f1e"}}}>
                    <Tab label="Description" {...a11yProps(0)} sx={{"&.Mui-selected": {color: "#c50f1e"}}} />
                    <Tab label="Reviews" {...a11yProps(1)} sx={{"&.Mui-selected": {color: "#c50f1e"}}} />
                </Tabs>
            </Box>
            <DescriptionSection value={value} />
            <ReviewsSection value={value} />
        </Box>
    );
}