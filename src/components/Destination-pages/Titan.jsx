
import {Box, Typography} from '@mui/material'
import {useContext} from 'react';
import { GlobalContext } from '../../context/GlobalContext'
import Titan from '../../assets/assets/destination/image-titan.webp';

export default function TitansPage({tab1, tab2, tab3, tab4}) {

  const {destinationData, nav } = useContext(GlobalContext) 

      return  (
            <Box className={destinationData === 'Titan' ? 'box--Container active' : 'box--Container'}>
        
            <Box className='planet-container'>
            <h1 className='global-title'><span className='des-num'>01</span> <span className='t1'>pick your destination</span></h1>
          
                <img src={Titan} alt='titan' />
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
                  <Typography component='h2' className='planet-title'> Titan
                  </Typography>
                  <Typography component='p'> The only moon known to have a dense atmosphere other than Earth, Titan 
  is a home away from home (just a few hundred degrees colder!). As a 
  bonus, you get striking views of the Rings of Saturn.
</Typography>
                  <Box className='normal-line'></Box>
                  <Box className='row-infomation'>
                     <Box className='item'>
                     <Typography component='h3' className='item-title'> Avg. distance</Typography> 
                     <Typography component='h4' className='item-subtitle'>1.6 bil. km</Typography>
                     </Box>
                     <Box className='item'>
                     <Typography component='h3' className='item-title'> Est. travel time</Typography> 
                     <Typography component='h4' className='item-subtitle'> 7 years</Typography>
                     </Box>
                  </Box>
                </Box>
            </Box>
          </Box>
        ) 
}
