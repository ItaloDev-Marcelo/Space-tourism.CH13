
import {Box, Typography} from '@mui/material'

import {useContext} from 'react';
import { GlobalContext } from '../../context/GlobalContext'

import Moon from '../../../assets/assets/destination/image-moon.webp';

export default function MoonPage({tab1, tab2, tab3, tab4}) {

     const {destinationData, nav } = useContext(GlobalContext) 
     

     return <Box className={destinationData === 'Moon' ? 'box--Container active' : 'box--Container'}>
       <h1 className='global-title'><span className='des-num'>01</span> <span className='t1'>pick your destination</span></h1>
          
     <Box className='planet-container'>
       <img src={Moon} alt='moon' />
     </Box>
     <Box className='planet-content' component='section'>

         <Box component='article'>
         <nav className='tabBar'>
                 <ul>
                    <li className={tab1} onClick={() => nav('Moon')} ><a href='#'>MOON</a></li>
                    <li className={tab2} onClick={() => nav('Mars')}><a href='#'>MARS</a></li>
                    <li className={tab3} onClick={() => nav('Europe')}><a href='#'>EUROPE</a></li>
                    <li className={tab4} onClick={() => nav('Titan')} ><a href='#'>TITAN</a></li>
                 </ul>
              </nav>
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
}