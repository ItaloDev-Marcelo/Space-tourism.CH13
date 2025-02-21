import {Box, Typography} from '@mui/material'

export default function EuropePage({icon,title,text,info0,info1,info2,info3,tab1, tab2, tab3,tab4,hundleUpdate,select}) {


      return  (
            <Box className={'box--Container ' + title} id={title} >
            <Box className='planet-container'>
                <img src={icon} alt={title} />
            </Box>
            <Box className='planet-content' component='section'>
                <Box component='article'>
                  <nav className='tabBar'>
                  <ul>
                    <li className={tab1} ><a href='#Moon'>MOON</a></li>
                    <li className={tab2} ><a href='#Mars'>MARS</a></li>
                    <li className={tab3} ><a href='#Europa'>EUROPE</a></li>
                    <li className={tab4} ><a href='#Titan'>TITAN</a></li>
                 </ul>
                  </nav>
                  <Typography component='h2' className='planet-title'>{title}</Typography>
                  <Typography component='p'>{text}</Typography>
                  <Box className='normal-line'></Box>
                  <Box className='row-infomation'>
                     <Box className='item'>
                     <Typography component='h3' className='item-title'>{info0} </Typography> 
                     <Typography component='h4' className='item-subtitle'>{info1} </Typography>
                     </Box>
                     <Box className='item'>
                     <Typography component='h3' className='item-title'>{info2} </Typography> 
                     <Typography component='h4' className='item-subtitle'>{info3} </Typography>
                     </Box>
                  </Box>
                </Box>
            </Box>
          </Box>
        ) 
}