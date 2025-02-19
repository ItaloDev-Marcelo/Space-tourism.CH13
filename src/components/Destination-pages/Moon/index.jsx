import {Box, Typography} from '@mui/material'
import Moon from '../../../assets/assets/destination/image-moon.webp';

export default function MoonPage() {


    return  (
        <Box className='box--Container'>
          <Box className='planet-container'>
            <img src={Moon} alt='moon' />
          </Box>
          <Box className='planet-content' component='section'>
    
              <Box component='article'>
                <Typography component='h2' className='planet-title'> Moon</Typography>
                <Typography component='p'>See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
  regain perspective and come back refreshed. While you’re there, take in some history 
  by visiting the Luna 2 and Apollo 11 landing sites.</Typography>
                <Box className='normal-line'></Box>
                <Box className='row-infomation'>
                   <Box className='item'>
                   <Typography component='h3' className='item-title'>Avg. distance</Typography> 
                   <Typography component='h4' className='item-subtitle'>384,400 km</Typography>
                   </Box>
                   <Box className='item'>
                   <Typography component='h3' className='item-title'>Est. travel time</Typography> 
                   <Typography component='h4' className='item-subtitle'> 3 days</Typography>
                   </Box>
                </Box>
              </Box>
          </Box>
        </Box>
    )
}