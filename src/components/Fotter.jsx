import './fotter.css'

import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
 
 
 function Fotter(){
    return (
        <footer>
         <div className='footer-container'>
          <FaTwitter className='icon'/> <FaFacebook className='icon'/> <FaInstagram className='icon'/> <FaLinkedin className='icon'/>
         </div>

        </footer>
    )
 }
 export default Fotter;