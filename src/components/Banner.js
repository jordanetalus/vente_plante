import '../styles/Banner.css'
import logo from '../assets/logo.png'
function Banner() {
    return (
        <di className='lmj-banner'>
            <img src={logo} alt="la maison jungle "  className='lmj-logo'/>
            <h1 className='lmj-title'>La maison jungle</h1>
        </di>
    )
}

export default Banner