
import {Box, Typography} from '@mui/material'
import Europe from '../../../assets/assets/destination/image-mars.webp';

import { useNavigate } from 'react-router-dom';
export default function EuropePage() {

  const navigate  = useNavigate()
      return  (
            <Box className='box--Container'>
            <Box className='planet-container'>
                <img src={Europe} alt='europe' />
            </Box>
            <Box className='planet-content' component='section'>
            <nav className='tabBar'>
                 <ul>
                    <li  onClick={() => navigate('/moon')}><a href=''>MOON</a></li>
                    <li  onClick={() => navigate('/mars')}><a href=''>MARS</a></li>
                    <li onClick={() => navigate('/europe')}><a href=''>EUROPE</a></li>
                    <li  onClick={() => navigate('/titan')}><a href=''>TITAN</a></li>
                 </ul>
              </nav>
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