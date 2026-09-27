import placeImage from './assets/project/placeholder.png';
import pdashImage from './assets/project/pixelDash.png';
export default function Project() {
    return (
    <div>
    <p>My Projects</p>
    <p><img src={pdashImage} alt="pDash" /> Pixel Dash - Playtester, Demo released, development in progress</p>
    <br></br>
    <p><img src={placeImage} alt="place" /> I don't have any more projects to highlight</p>
    <br></br>
    <p><img src={placeImage} alt="place" /> I don't have any more projects to highlight</p>
    </div>
    );
    //Just text next to images
}