import Navbar from '../../components/Nav/Navbar';

export default function Home()  {

    return (
        <div className='banner-Home'>
            <Navbar whereTo0={'link active'} whereTo1={'link'} whereTo2={'link'} whereTo3={'link'}  />
            <section className='container-home'>
               <h2 id='home-title'>SO, YOU WANT TO TRAVEL TO <br></br> <strong className='up-title'>SPACE</strong> </h2>
               <p id='home-txt'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
               <button className='space-btn'>Explore</button>
            </section>
        </div>
    )
}