
import {useNavigate } from "react-router-dom"

export default function EuropePage({tab1, tab2, tab3, tab4}) {

   const navigate = useNavigate()

    return (
              <nav className='tabBar'>
                 <ul>
                    <li className={tab1} onClick={() => navigate('/moon')}><a href=''>MOON</a></li>
                    <li className={tab2} onClick={() => navigate('/mars')}><a href=''>MARS</a></li>
                    <li className={tab3} onClick={() => navigate('/europe')}><a href=''>EUROPE</a></li>
                    <li className={tab4} onClick={() => navigate('/titan')}><a href=''>TITAN</a></li>
                 </ul>
              </nav>
    )
}