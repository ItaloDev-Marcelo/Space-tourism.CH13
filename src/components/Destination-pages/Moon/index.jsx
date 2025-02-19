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
                <Typography component='h2' className='planet-title'></Typography>
                <Typography component='p'></Typography>
                <Box className='normal-line'></Box>
                <Box className='row-infomation'>
                   <Box className='item'>
                   <Typography component='h3' className='item-title'></Typography> 
                   <Typography component='h4' className='item-subtitle'></Typography>
                   </Box>
                </Box>
              </Box>
          </Box>
        </Box>
    )
}