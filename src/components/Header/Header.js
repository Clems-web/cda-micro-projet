import './Header.scss';
import logo from '../../assets/images/logo-voiture.png';

export const Header = function () {
    return (
        <div className='Header'>
            <div className='ImgContainer'>
                <img src={logo} alt="Ma voiture est cassée"/>
            </div>
            <div className='Navbar'>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>CONTACT</li>
                    <li>SUPPORT</li>
                    <li>DOWNLOAD</li>
                </ul>
            </div>
        </div>
    )
}