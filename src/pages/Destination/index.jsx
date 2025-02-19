
import EuropePage from '../../components/Destination-pages/Europe';
import MarsPage from '../../components/Destination-pages/Mars';
import MoonPage from '../../components/Destination-pages/Moon';
import TitansPage from '../../components/Destination-pages/Titans';
import Navbar from '../../components/Nav/Navbar';

import { Navigate, Route, Routes } from "react-router-dom"
export default function Destination()  {

    return (
        <section className='banner-Destination '>
            <Navbar whereTo0={'link'} whereTo1={'link active'} whereTo2={'link'} whereTo3={'link'}  />
            
   
        </section>
    )
}