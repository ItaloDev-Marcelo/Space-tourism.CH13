
import {Box, Typography} from '@mui/material'
import Europe from '../../../assets/assets/destination/image-europa.webp';

export default function EuropePage() {

      return  (
            <Box className='box--Container'>
            <Box className='planet-container'>
                <img src={Europe} alt='europe' />
            </Box>
            <Box className='planet-content' component='section'>
                <Box component='article'>
                  <Typography component='h2' className='planet-title'>Europa</Typography>
                  <Typography component='p'> The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
  winter lover’s dream. With an icy surface, it’s perfect for a bit of 
  ice skating, curling, hockey, or simple relaxation in your snug 
  wintery cabin.</Typography>
                  <Box className='normal-line'></Box>
                  <Box className='row-infomation'>
                     <Box className='item'>
                     <Typography component='h3' className='item-title'>  Avg. distance</Typography> 
                     <Typography component='h4' className='item-subtitle'>  628 mil. km</Typography>
                     </Box>
                     <Box className='item'>
                     <Typography component='h3' className='item-title'>Est. travel time</Typography> 
                     <Typography component='h4' className='item-subtitle'>  3 years</Typography>
                     </Box>
                  </Box>
                </Box>
            </Box>
          </Box>
        ) 
}