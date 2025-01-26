import Box from '@mui/material/Box';


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}


function DescriptionSection({ value }: { value: number }) {
    return (
        <CustomTabPanel value={value} index={0}>
            <div className='specifications'>
                <h2 className='mb-[10px] font-bold text-xl'>Specifications:</h2>
                <div className='specifications-details flex flex-col gap-[5px]'>
                    <span>Brand: Beats</span>
                    <span>Model: S450</span>
                    <span>Wireless Bluetooth Headset</span>
                    <span>FM Frequency Response: 87.5 – 108 MHz</span>
                    <span>Feature: FM Radio, Card Supported (Micro SD / TF)</span>
                    <span>Made in China</span>
                </div>
            </div>
        </CustomTabPanel>
    )
}

export default DescriptionSection