import {Box, Typography} from '@mui/material'

export default function EuropePage({icon,title,text,info0,info1,info2,info3,tab1, tab2, tab3,tab4}) {

      return  (
            <Box className={'box--Container ' + title}>
            <Box className='planet-container'>
                <img src={icon} alt={title} />
            </Box>
            <Box className='planet-content' component='section'>
                <Box component='article'>
                  <nav className='tabBar'>
                  <ul>
                    <li className={tab1} onClick={() => navigate('/moon')}><a href=''>MOON</a></li>
                    <li className={tab2} onClick={() => navigate('/mars')}><a href=''>MARS</a></li>
                    <li className={tab3} onClick={() => navigate('/europe')}><a href=''>EUROPE</a></li>
                    <li className={tab4} onClick={() => navigate('/titan')}><a href=''>TITAN</a></li>
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