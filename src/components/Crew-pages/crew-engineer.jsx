import { Box, Typography } from '@mui/material'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import Anousheh from '../../assets/assets/crew/image-anousheh-ansari.webp'
export default function Commander() {
   
   const {pagination, HundleBubble } = useContext(GlobalContext);

    return (
         <Box component='section' className={pagination ===  'Bob1' ? 'crew-item active' : 'crew-item'}>
            <h1 className='global-title'><span className='des-num'>02</span> <span className='t1'>Meet your crew</span></h1>
            <Box className='crew--content' >
              <Typography component='h2'>Flight Engineer
              <Typography component='strong'>Anousheh Ansari</Typography> </Typography>
              <Typography component='p'>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
  Ansari was the fourth self-funded space tourist, the first self-funded woman to 
  fly to the ISS, and the first Iranian in space. </Typography>
            <Box className='points-container'>
               <Box className='pagination'  onClick={() => HundleBubble('Bob1')}></Box>
               <Box className='pagination active'  onClick={() => HundleBubble('Bob2')}></Box>
               <Box className='pagination '  onClick={() => HundleBubble('Bob3')}></Box>
               <Box className='pagination '  onClick={() => HundleBubble('Bob4')}></Box>
            </Box>
            </Box>
            <Box className='container-Image'>
              <img src={Anousheh} alt='' />
            </Box>
         </Box>
    )
}