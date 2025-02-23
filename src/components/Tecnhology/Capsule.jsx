import {Box, Typography} from '@mui/material';
import CapsulaMobile from '../../assets/assets/technology/image-space-capsule-landscape.jpg';
import CapsulaDesktop from '../../assets/assets/technology/image-space-capsule-portrait.jpg';

import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
export default function Capsule() {

     const {tacPagination, TacNav } = useContext(GlobalContext);

     return (
          <Box component='section' className={tacPagination === 'Crew3' ? 'Tac-container active' : 'Tac-container'}>
               <h1 className='global-title'><span className='des-num'>03</span> <span className='t1'>space lunch 101</span></h1>
               <Box className='container-image' >
               <img src={CapsulaMobile } alt='' className='Mobile' />
               <img src={CapsulaDesktop} alt='' className='Desktop' />
               </Box>
               <Box className='Tac-content'>
                 <nav className='Tac-Nav'>
                    <ul>
                        <li className='Tac-Link' onClick={() => TacNav('Crew1')}><a href='#'>1</a></li>
                        <li className='Tac-Link' onClick={() => TacNav('Crew2')}><a href='#'>2</a></li>
                        <li className='Tac-Link active' onClick={() => TacNav('Crew3')}><a href='#'>3</a></li>
                    </ul>
                 </nav>
                 <Box className='content-info'>
                   <Typography component='h2'> <span className='title-op'>The terminology...</span> <br /> <strong>Space capsule</strong> </Typography>
                   <Typography component='p'> A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
  capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
  you'll spend your time during the flight. It includes a space gym, cinema, 
  and plenty of other activities to keep you entertained.</Typography>
                 </Box>
               </Box>
          </Box>
     )
}