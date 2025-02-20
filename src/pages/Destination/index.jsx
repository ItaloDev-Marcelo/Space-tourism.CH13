
import { useState } from 'react';
import data from './data'
import Navbar from '../../components/Nav/Navbar';
import Slider from './slider/index'
export default function Destination()  {

    const [destination, setDestination]  =  useState('moon') 

    const nav = (i) => {
        setDestination(i)
    }

    console.log(destination)

    return (
        <section className='banner-Destination '>
            <Navbar whereTo0={'link'} whereTo1={'link active'} whereTo2={'link'} whereTo3={'link'}  />
             {
              data.map(i =>  {
                return (
                  <Slider icon={i.icon} title={i.title} text={i.text} 
                tab1={i.tab1} tab2={i.tab2} tab3={i.tab3} tab4={i.tab4}
                info0={i.inf0} info1={i.info1} info2={i.info2} info3={i.info3}
                />
                ) 
              })
             }

        </section>
    )
}