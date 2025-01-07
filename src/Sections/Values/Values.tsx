import ContainerWrapper from "../../layout/Components/ContainerWrapper";
import {valuesCards } from "../../utilities/data";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Value from "./ValueCard";


function Values() {
    return (
        <div className="main-header-container w-full content-center mb-[50px]">
            <ContainerWrapper>
                <div className="w-[100%] bg-white min-h-[100px] max-h-[fit-content] rounded-[14px] my-[10px] content-center py-[15px] md:py-0">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            {
                                valuesCards.map(card => (
                                    <Value key={card.id} card={card} />
                                ))
                            }
                        </Grid>
                    </Box>
                </div>
            </ContainerWrapper>
        </div>
    );
}

export default Values;
