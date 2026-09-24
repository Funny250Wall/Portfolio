import computerImage from './assets/services/compooter.png';
import phoneImage from './assets/services/Ifone.png';
import codeImage from './assets/services/codeWork.png';
export default function Services() {
    return (
    <div>
    <p>My Services</p>
    <br></br>
    <img src={computerImage} alt="Computer" /> <p>Web Development</p>
    <br></br>
    <img src={phoneImage} alt="iphone" /> <p>Apps Development</p>
    <br></br>
    <img src={codeImage} alt="code" /> <p>General Code Bullshittery</p>
    </div>
    );
    //All images are stored in an assets folder specific to this part of the site for organisation
}