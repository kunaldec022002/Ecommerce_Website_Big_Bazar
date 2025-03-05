
import { Link } from 'react-router-dom';
import brandImg from './brand-img.png';

import './Navbar.css';

function Navbar()
{
    
    return(
        <div id='nav2'>

         <div className='Nav-container'>

            <input type='text' className='input-field' placeholder='Serach Product'/>

            <img src={brandImg} className='brand-img' alt='img'/>

            <Link to='/' className='links'>Home</Link>

            <Link to='/signup' className='links'>Signup</Link>
           
            <Link to='/login' className='links'>Login</Link>

         </div>

        </div>
       
    )
}

export default Navbar;