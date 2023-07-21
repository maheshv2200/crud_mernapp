

import { Box, Typography, styled } from '@mui/material';

import Youtube from '../Assets/Images/crud app.png';
import InstaTele from '../Assets/Images/crud2.png';

const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Image = styled('img')({
    width: '50%',
    height: '50%'
});

const CrudApplication= () => {

    return (
        <Header>
            <Typography variant="h4">CRUD APP</Typography>
            <Box style={{display: 'flex'}}>
                <Image src={Youtube} />
                <Image src={InstaTele} />
            </Box>
        </Header>
    )
}

export default CrudApplication ;