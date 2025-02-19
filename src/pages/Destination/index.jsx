
import { useState } from 'react';
import EuropePage from '../../components/Destination-pages/Europe';
import MarsPage from '../../components/Destination-pages/Mars';
import MoonPage from '../../components/Destination-pages/Moon';
import TitansPage from '../../components/Destination-pages/Titans';
import Navbar from '../../components/Nav/Navbar';

export default function Destination()  {

    const [destination, setDestination]  =  useState('moon') 

    const nav = (i) => {
        setDestination(i)
    }

    console.log(destination)

    return (
        <section className='banner-Destination '>
            <Navbar whereTo0={'link'} whereTo1={'link active'} whereTo2={'link'} whereTo3={'link'}  />
        

           <div className='center'>
           {
                destination === 'moon' ? <div className='planets-wrapp'>
                        <nav className='tabBar'>
                 <ul>
                    <li className={destination === 'moon'  ? 'tab-link active' : 'tab-link' }  onClick={() => nav('moon')}><a href='#'>MOON</a></li>
                    <li className={destination === 'mars'  ? 'tab-link active' : 'tab-link' }  onClick={() => nav('mars')}><a href='#'>MARS</a></li>
                    <li className={destination === 'europe'  ? 'tab-link active' : 'tab-link' }  onClick={() => nav('europe')}><a href='#'>EUROPE</a></li>
                    <li className={destination === 'titan'  ? 'tab-link active' : 'tab-link' }  onClick={() => nav('titan')}><a href='#'>TITAN</a></li>
                 </ul>
              </nav>
                    <MoonPage/> </div>   :
                destination === 'mars' ? <div className='planets-wrapp'>
                        <nav className='tabBar'>
                 <ul>
                    <li className={destination === 'moon'  ? 'tab-link active' : 'tab-link' }  onClick={() => nav('moon')}><a href='#'>MOON</a></li>
                    <li className={destination === 'mars'  ? 'tab-link active' : 'tab-link' }  onClick={() => nav('mars')}><a href='#'>MARS</a></li>
                    <li className={destination === 'europe'  ? 'tab-link active' : 'tab-link' }  onClick={() => nav('europe')}><a href='#'>EUROPE</a></li>
                    <li className={destination === 'titan'  ? 'tab-link active' : 'tab-link' }  onClick={() => nav('titan')}><a href='#'>TITAN</a></li>
                 </ul>
              </nav>
              <MarsPage/>
                </div>  :
                destination === 'europe' ? <div className='planets-wrapp'>
                              <nav className='tabBar'>
                 <ul>
                    <li className={destination === 'moon'  ? 'tab-link active' : 'tab-link' }  onClick={() => nav('moon')}><a href='#'>MOON</a></li>
                    <li className={destination === 'mars'  ? 'tab-link active' : 'tab-link' }  onClick={() => nav('mars')}><a href='#'>MARS</a></li>
                    <li className={destination === 'europe'  ? 'tab-link active' : 'tab-link' }  onClick={() => nav('europe')}><a href='#'>EUROPE</a></li>
                    <li className={destination === 'titan'  ? 'tab-link active' : 'tab-link' }  onClick={() => nav('titan')}><a href='#'>TITAN</a></li>
                 </ul>
              </nav>
              <EuropePage/>
                </div>  :
                destination === 'titan' ? <div className='planets-wrapp'>
                          <nav className='tabBar'>
                 <ul>
                    <li className={destination === 'moon'  ? 'tab-link active' : 'tab-link' }  onClick={() => nav('moon')}><a href='#'>MOON</a></li>
                    <li className={destination === 'mars'  ? 'tab-link active' : 'tab-link' }  onClick={() => nav('mars')}><a href='#'>MARS</a></li>
                    <li className={destination === 'europe'  ? 'tab-link active' : 'tab-link' }  onClick={() => nav('europe')}><a href='#'>EUROPE</a></li>
                    <li className={destination === 'titan'  ? 'tab-link active' : 'tab-link' }  onClick={() => nav('titan')}><a href='#'>TITAN</a></li>
                 </ul>
              </nav>
                <TitansPage/>
                </div>  : null
             }
           </div>


        </section>
    )
}