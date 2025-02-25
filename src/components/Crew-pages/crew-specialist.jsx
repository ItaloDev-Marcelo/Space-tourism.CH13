import { Box, Typography } from '@mui/material'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Mark from '../../assets/assets/crew/image-mark-shuttleworth.webp'
export default function Commander() {
    const {pagination, HundleBubble } = useContext(GlobalContext);
    return (
         <Box component='section' className={pagination ===  'Bob4' ? 'crew-item active' : 'crew-item'}>
           <Typography component='h1'  className='global-title'><span className='des-num'>02</span> <span className='t1'>Meet your crew</span></Typography >
            <Box className='crew--content' >
              <Typography component='h2'> <span className='title-op'>Mission Specialist</span>  <br /> 
              <Typography component='strong'>Mark Shuttleworth</Typography> </Typography>
              <Typography component='p'>  Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
  the Linux-based Ubuntu operating system. Shuttleworth became the first South 
  African to travel to space as a space tourist.</Typography>
            <Box className='points-container'>
               <Box className='pagination' onClick={() => HundleBubble('Bob1')}></Box>
               <Box className='pagination'  onClick={() => HundleBubble('Bob2')}></Box>
               <Box className='pagination'  onClick={() => HundleBubble('Bob3')}></Box>
               <Box className='pagination active'  onClick={() => HundleBubble('Bob4')}></Box>
            </Box>
            </Box>
            <Box className='container-Image'>
              <img src={Mark} alt='' />
            </Box>
         </Box>
    )
}