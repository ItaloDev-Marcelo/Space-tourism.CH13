import Navbar from '../../components/Nav/Navbar';
import Commander from '../../components/Crew-pages/crew-commander';
import Engineer from '../../components/Crew-pages/crew-engineer';
import Pilot from '../../components/Crew-pages/crew-pilot';
import Specialist from '../../components/Crew-pages/crew-specialist';


export default function Crew()  {
    return (
        <section className='banner-Crew '>
            <Navbar whereTo0={'link'} whereTo1={'link'} whereTo2={'link active'} whereTo3={'link'}  />
            <Commander/>
            <Specialist/>
            <Pilot/>
            <Engineer/>
        </section>
    )
}