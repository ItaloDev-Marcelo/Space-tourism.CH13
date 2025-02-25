import { Box, Typography } from '@mui/material'
import Commander from '../../assets/assets/crew/image-douglas-hurley.webp'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'

export default function Commander1() {

   const {pagination, HundleBubble } = useContext(GlobalContext);

    return (
         <Box component='section' className={pagination ===  'Bob1' ? 'crew-item active' : 'crew-item'}>
            <Typography  component='h1' className='global-title'><span className='des-num'>02</span> <span className='t1'>Meet your crew</span></Typography >
            <Box className='crew--content' >
              <Typography component='h2'>  <span className='title-op'>Commander</span> <br /> 
              <Typography component='strong'>Douglas Hurley</Typography>  </Typography>
              <Typography component='p'>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
  and former NASA astronaut. He launched into space for the third time as 
  commander of Crew Dragon Demo-2.</Typography>
            <Box className='points-container'>
               <Box className='pagination active'   onClick={() => HundleBubble('Bob1')}></Box>
               <Box className='pagination'  onClick={() => HundleBubble('Bob2')}></Box>
               <Box className='pagination'  onClick={() => HundleBubble('Bob3')}></Box>
               <Box className='pagination'  onClick={() => HundleBubble('Bob4')}></Box>
            </Box>
            </Box>
            <Box className='container-Image'>
              <img src={Commander} alt='' />
            </Box>
         </Box>
    )
}