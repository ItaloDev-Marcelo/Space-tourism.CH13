import Navbar from '../../components/Nav/Navbar';
import {Stack, Box} from '@mui/material'
export default function Home()  {

    return (
        <Stack className='banner-Home '>
             <Navbar whereTo0={'link active'} whereTo1={'link'} whereTo2={'link'} whereTo3={'link'}  />
            <Stack  component='section' className='container-home'> 
                <Box>
                <h2 id='home-title'>SO, YOU WANT TO TRAVEL TO <br></br> <strong className='up-title'>SPACE</strong> </h2>
               <p id='home-txt'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </Box>
                <Box id='btn-container' >
               <button className='space-btn'>Explore</button>
                </Box>
            </Stack>
        </Stack>
    )
}