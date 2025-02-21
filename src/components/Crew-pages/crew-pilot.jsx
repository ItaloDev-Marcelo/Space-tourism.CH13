import { Box, Typography } from '@mui/material'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Victor from '../../assets/assets/crew/image-victor-glover.webp'
export default function Commander() {
   const {pagination, HundleBubble } = useContext(GlobalContext);
    return (
         <Box component='section' className={pagination ===  'Bob1' ? 'crew-item active' : 'crew-item'}>
           <h1 className='global-title'><span className='des-num'>02</span> <span className='t1'>Meet your crew</span></h1>
            <Box className='crew--content' >
              <Typography component='h2'>Pilot
              <Typography component='strong'>Victor Glover</Typography> </Typography>
              <Typography component='p'>Pilot on the first operational flight of the SpaceX Crew Dragon to the 
  International Space Station. Glover is a commander in the U.S. Navy where 
  he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
  station systems flight engineer. </Typography>
            <Box className='points-container'>
               <Box className='pagination '  onClick={() => HundleBubble('Bob1')}></Box>
               <Box className='pagination '  onClick={() => HundleBubble('Bob2')}></Box>
               <Box className='pagination active'  onClick={() => HundleBubble('Bob3')}></Box>
               <Box className='pagination '  onClick={() => HundleBubble('Bob4')}></Box>
            </Box>
            </Box>
            <Box className='container-Image'>
              <img src={Victor} alt='' />
            </Box>
         </Box>
    )
}