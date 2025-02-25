import Navbar from '../../components/Nav/Navbar';
import Vehicle from '../../components/Tecnhology/Vehicle';
import Spaceport from '../../components/Tecnhology/Spaceport';
import Capsule from '../../components/Tecnhology/Capsule'
import { Box} from '@mui/material';

export default function Tecnhology()  {
    return (
        <Box className='banner-Tecnhology '>
            <Navbar whereTo0={'link'} whereTo1={'link'} whereTo2={'link'} whereTo3={'link active'}  />
            <Vehicle/>
            <Spaceport/>
            <Capsule/>
        </Box>
    )
}