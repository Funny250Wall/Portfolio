import selfImage from './assets/about/selfImage.png';
export default function About() {
    return (
    <div>
    <img src={selfImage} alt="Self" />
    <h3>Samuel Young</h3>
    <p>About me</p>
    <p>I know several code languages such as C#, Java and Lua and I'm a dependable worker.</p>
    <a href="/Samuel_Young_Resume.pdf" target="_blank" rel="noopener noreferrer">
    My Resume
    </a>
    </div>
    );
}