import Navbar from '../../components/Nav/Navbar';
import Vehicle from '../../components/Tecnhology/Vehicle';
import Spaceport from '../../components/Tecnhology/Spaceport';
import Capsule from '../../components/Tecnhology/Capsule'
export default function Tecnhology()  {
    return (
        <section className='banner-Tecnhology '>
            <Navbar whereTo0={'link'} whereTo1={'link'} whereTo2={'link'} whereTo3={'link active'}  />
            <Vehicle/>
            <Spaceport/>
            <Capsule/>
        </section>
    )
}