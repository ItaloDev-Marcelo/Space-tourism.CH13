
import {Box} from '@mui/material'
import Navbar from '../../components/Nav/Navbar';
import MoonPage from '../../components/Destination-pages/Moon';
import MarsPage from '../../components/Destination-pages/Mars';
import EuropePage from '../../components/Destination-pages/Europe';
import TitanPage from '../../components/Destination-pages/Titan';

export default function Destination()  {


    return (
        <Box component='section' className='banner-Destination '>
            <Navbar whereTo0={'link'} whereTo1={'link active'} whereTo2={'link'} whereTo3={'link'}  />
            <MoonPage  tab1={'tab-link active'} tab2={'tab-link'} tab3={'tab-link'} tab4={'tab-link'} />
            <MarsPage  tab1={'tab-link'} tab2={'tab-link active'} tab3={'tab-link'} tab4={'tab-link'} />
            <EuropePage  tab1={'tab-link'} tab2={'tab-link'} tab3={'tab-link active'} tab4={'tab-link'}/>
            <TitanPage tab1={'tab-link'} tab2={'tab-link'} tab3={'tab-link'} tab4={'tab-link active'} />
        </Box>
    )
}