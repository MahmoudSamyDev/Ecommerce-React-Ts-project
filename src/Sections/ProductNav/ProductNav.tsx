import ContainerWrapper from '../../layout/Components/ContainerWrapper';
import { Products } from '../../utilities/data';
import ProductBox from './ProductBox';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

function ProductNav() {
    return (
        <div className="product-nav-container w-full content-center py-[15px]">
            <ContainerWrapper>
                <div className="flex justify-center min-h-[fit-content] max-h-[fit-content]">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            { Products.map((product) => ( <ProductBox key={product.id} product={product}/> )) }
                        </Grid>
                    </Box>
                    
                </div>
            </ContainerWrapper>
        </div>
    );
}

export default ProductNav;