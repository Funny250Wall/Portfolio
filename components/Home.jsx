import { Link } from 'react-router-dom';
export default function Home() {
    return (
    <div>
    <p>Welcome to my Portfolio!</p>
    <Link to="/About">
    <button>About Me</button>
    </Link>
    <h2>Mission Statement</h2>
    <p>I will work very hard if you hire me.</p>
    </div>
    );
}