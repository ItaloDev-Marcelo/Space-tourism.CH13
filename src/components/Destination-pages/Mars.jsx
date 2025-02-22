
import {Box, Typography} from '@mui/material'
import {useContext} from 'react';
import { GlobalContext } from '../../context/GlobalContext'
import Mars from '../../assets/assets/destination/image-mars.webp';

export default function MarsPage({tab1, tab2, tab3, tab4}) {
  const {destinationData, nav } = useContext(GlobalContext) 
    return  (
        <Box className={destinationData === 'Mars' ? 'box--Container active' : 'box--Container'}>
        
        <Box className='planet-container'>
        <h1 className='global-title'><span className='des-num'>01</span> <span className='t1'>pick your destination</span></h1>
          
              <img src={Mars} alt='mars' />
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