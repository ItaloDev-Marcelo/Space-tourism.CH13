// import data from './data'
// import Slider from './slider/index'
import Navbar from '../../components/Nav/Navbar';
import MoonPage from '../../components/Destination-pages/Moon/index'
import MarsPage from '../../components/Destination-pages/Mars/index'
import EuropePage from '../../components/Destination-pages/Europe/index'
import TitanPage from '../../components/Destination-pages/Titans/index'
export default function Destination()  {


  // const Planents  = data.map(i =>  {
  //               return (
  //                 <Slider 
  //                icon={i.icon} title={i.title} text={i.text} 
  //               tab1={i.tab1} tab2={i.tab2} tab3={i.tab3} tab4={i.tab4}
  //               info0={i.info0} info1={i.info1} info2={i.info2} info3={i.info3}
  //               />
  //               ) 
  //             }) 

    return (
        <section className='banner-Destination '>
            <div className='md'>
            <Navbar whereTo0={'link'} whereTo1={'link active'} whereTo2={'link'} whereTo3={'link'}  />
            <MoonPage  tab1={'link active'} tab2={'link'} tab3={'link'} tab4={'link'} />
            <MarsPage  tab1={'link'} tab2={'link active'} tab3={'link'} tab4={'link'} />
            <EuropePage  tab1={'link'} tab2={'link'} tab3={'link active'} tab4={'link'}/>
            <TitanPage tab1={'link'} tab2={'link'} tab3={'link'} tab4={'link active'} />
            </div>
        </section>
    )
}