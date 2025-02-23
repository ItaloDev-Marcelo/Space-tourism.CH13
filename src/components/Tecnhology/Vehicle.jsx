import VehicleMobile from  '../../assets/assets/technology/image-launch-vehicle-landscape.jpg';
import VehicleDesk from  '../../assets/assets/technology/image-launch-vehicle-portrait.jpg';
import {Box, Typography} from '@mui/material';

import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
export default function Capsule() {
     const {tacPagination, TacNav } = useContext(GlobalContext);
     return (
          <Box component='section' className={tacPagination === 'Crew1' ? 'Tac-container active' : 'Tac-container'}>
               <h1 className='global-title'><span className='des-num'>03</span> <span className='t1'>space lunch 101</span></h1>
               <Box className='container-image' >
                 <img src={VehicleMobile} alt='' className='Mobile' />
                 <img src={VehicleDesk } alt='' className='Desktop' />
               </Box>
               <Box className='Tac-content'>
                 <nav className='Tac-Nav'>
                    <ul>
                        <li className='Tac-Link active' onClick={() => TacNav('Crew1')}><a href='#'>1</a></li>
                        <li className='Tac-Link' onClick={() => TacNav('Crew2')}><a href='#'>2</a></li>
                        <li className='Tac-Link' onClick={() => TacNav('Crew3')}><a href='#'>3</a></li>
                    </ul>
                 </nav>
                 <Box className='content-info'>
                   <Typography component='h2'> <span className='title-op'>The terminology...</span> <br /> <strong>Launch vehicle</strong> </Typography>
                   <Typography component='p'> A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
  payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
  WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
  it's quite an awe-inspiring sight on the launch pad!</Typography>
                 </Box>
               </Box>
          </Box>
     )
}