import {Box, Typography} from '@mui/material';
import SpacePortMobile from '../../assets/assets/technology/image-spaceport-landscape.jpg';
import SpacePortDesktop from '../../assets/assets/technology/image-spaceport-portrait.jpg';

import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
export default function Capsule() {
     const {tacPagination, TacNav } = useContext(GlobalContext);

     return (
          <Box component='section' className={tacPagination === 'Crew2' ? 'Tac-container active' : 'Tac-container'}>
               <Typography  component='h1'  className='global-title'><span className='des-num'>03</span> <span className='t1'>space lunch 101</span></Typography >
               <Box className='container-image' >
                 <img src={SpacePortMobile} alt='' className='Mobile' />
                 <img src={SpacePortDesktop} alt='' className='Desktop' />
               </Box>
               <Box className='Tac-content'>
                 <nav className='Tac-Nav'>
                    <ul className='tac-list'>
                        <li className='Tac-Link' onClick={() => TacNav('Crew1')}><a href='#'>1</a></li>
                        <li className='Tac-Link active' onClick={() => TacNav('Crew2')}><a href='#'>2</a></li>
                        <li className='Tac-Link' onClick={() => TacNav('Crew3')}><a href='#'>3</a></li>
                    </ul>
                 </nav>
                 <Box className='content-info'>
                   <Typography component='h2'> <span className='title-op'>The terminology...</span> <br />  <strong>Spaceport</strong> </Typography>
                   <Typography component='p'>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
  by analogy to the seaport for ships or airport for aircraft. Based in the 
  famous Cape Canaveral, our spaceport is ideally situated to take advantage 
  of the Earth’s rotation for launch.</Typography>
                 </Box>
               </Box>
          </Box>
     )
}