import {Box, Typography} from '@mui/material'
import {useContext} from 'react';
import { GlobalContext } from '../../context/GlobalContext'
import Europe from '../../assets/assets/destination/image-europa.webp';

export default function EuropePage({tab1, tab2, tab3, tab4}) {

  const {destinationData, nav } = useContext(GlobalContext) 

      return  (
             <Box className={destinationData === 'Europe' ? 'box--Container active' : 'box--Container'}>
            <Box className='planet-container'>
            <Typography component='h1' className='global-title'><span className='des-num'>01</span> <span className='t1'>pick your destination</span></Typography>
          
                <img src={Europe} alt='europe' />
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