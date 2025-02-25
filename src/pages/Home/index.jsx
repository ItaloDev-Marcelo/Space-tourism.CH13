import Navbar from '../../components/Nav/Navbar';
import { Box, Typography} from '@mui/material';

export default function Home()  {
    return (
        <Box className='banner-Home '>
             <Navbar whereTo0={'link active'} whereTo1={'link'} whereTo2={'link'} whereTo3={'link'}  />
            <Box  component='section' className='container-home'> 
                <Box>
                <Typography component='h2' id='home-title'>SO, YOU WANT TO TRAVEL TO <br></br> <strong className='up-title'>SPACE</strong> </Typography>
               <Typography component='p' id='home-txt'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</Typography>
                </Box>
                <Box id='btn-container' >
               <button className='space-btn'><span>Explore</span></button>
                </Box>
            </Box>
        </Box>
    )
}