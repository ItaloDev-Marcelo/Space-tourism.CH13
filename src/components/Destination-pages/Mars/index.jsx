
import {Box, Typography} from '@mui/material'
import Mars from '../../../assets/assets/destination/image-mars.webp';

export default function MarsPage() {
    return  (
        <Box className='box--Container'>
        <Box className='planet-container'>
              <img src={Mars} alt='mars' />
        </Box>
        <Box className='planet-content' component='section'>
            <Box component='article'>
              <Typography component='h2' className='planet-title'>Mars</Typography>
              <Typography component='p'> Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
  the tallest planetary mountain in our solar system. It’s two and a half times 
  the size of Everest!</Typography>
              <Box className='normal-line'></Box>
              <Box className='row-infomation'>
                 <Box className='item'>
                 <Typography component='h3' className='item-title'>Avg. distance</Typography> 
                 <Typography component='h4' className='item-subtitle'>225 mil. km</Typography>
                 </Box>
                 <Box className='item'>
                 <Typography component='h3' className='item-title'> Est. travel time</Typography> 
                 <Typography component='h4' className='item-subtitle'> 9 months</Typography>
                 </Box>
              </Box>
            </Box>
        </Box>
      </Box>
    ) 
}