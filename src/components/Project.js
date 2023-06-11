import React from 'react';
import LavanyaPicture from '../assets/LavanyaPicture.jpg';
import gradebookImage from '../assets/gradebookImage.png';
import passwordGeneratorImage from '../assets/passwordGeneratorImage.png';
import quizImage from '../assets/quizImage.png';
import restaurantFinderImage from '../assets/restaurantFinderImage.png';
import terminalImage from '../assets/terminalImage.png';
import weatherImage from '../assets/weatherImage.png';

const AboutMe = () => {
    return (<section class="section-container">
        <h1 id="About-Me">About Me</h1>
        <section class="content-container">
            <img src={LavanyaPicture} alt="Lavanya Natchiappan" />
            <p> Hello! My name is Lavanya (pronounced Lava-nya) and
                I am a customer success manager learning to code.
                I have previously worked with large hospital systems in the EMR space
                and with small business owners in the trucking industry.
                I am hoping to expand on my technical skill set so that I can work
                as a full-stack developer to innovate in healthcare.
                In my free time, I love making delicious food and playing board games.
                Feel free to check out some of my work below
                and contact me if you have any questions!
            </p>
        </section>
    </section>
)};

const Portfolio = () => {
    return (<div>
        <h1 id="Portfolio">My Portfolio</h1>
        <div>
            <h3>Javascript Coding Quiz</h3>
            <img src={quizImage} alt="a cartoon quiz" />
            <a href="https://lavanat.github.io/JavaScript-Coding-Quiz/">Deployed Application</a>
            <a href="https://github.com/lavanat/JavaScript-Coding-Quiz">Github Repo</a>
        </div>
        <div>
            <h3>Password Generator</h3>
            <img src={passwordGeneratorImage} alt="a cartoon lock with astericks to represent a password" />
            <a href="https://lavanat.github.io/password-generator/">Deployed Application</a>
            <a href="https://github.com/lavanat/password-generator">Github Repo</a>
        </div>
        <div>
            <h3>Weather Forecast Display</h3>
            <img src={weatherImage} alt="a cartoon of different types of weather" />
            <a href="https://lavanat.github.io/weather-forecast/">Deployed Application</a>
            <a href="https://github.com/lavanat/weather-forecast">Github Repo</a>
        </div>
        <div>
            <h3>Local Restaurant Finder</h3>
            <img src={restaurantFinderImage} alt="a cartoon location pin with a plate inside of it" />
            <a href="https://lavanat.github.io/First-Up-Kickshaw/">Deployed Application</a>
            <a href="https://github.com/lavanat/First-Up-Kickshaw">Github Repo</a>
        </div>
        <div>
            <h3>Teacher Sync</h3>
            <img src={gradebookImage} alt="a cartoon gradebook" />
            <a href="https://secret-coast-72135.herokuapp.com/">Deployed Application</a>
            <a href="https://github.com/lavanat/teacher-sync">Github Repo</a>
        </div>
        <div>
            <h3>Text Editor</h3>
            <img src={terminalImage} alt="a cartoon computer terminal" />
            <a href="https://stormy-headland-20419.herokuapp.com/">Deployed Application</a>
            <a href="https://github.com/lavanat/text-editor">Github Repo</a>
        </div>
    </div>
)};

const Contact = () => {
    return (<div>
        <h1>Contact Me</h1>
        <form>
            <div>
                <label>Name</label>
                <input
                    type='text'
                    name='name'
                    pattern='^[A-Za-z\s]+$'
                    required
                />
            </div>
            <div>
                <label>Email Address</label>
                <input
                    type='email'
                    name='email'
                    pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
                    required
                />
            </div>
            <div>
                <label>Message</label>
                <textarea
                    rows='10'
                    name='message'
                    required>
                </textarea>
            </div>
            <button>Send Message</button>
        </form>
    </div>
)};

const Resume = () => {
return (<div>
    <h1>Resume</h1>
    <div>
        <p>
            Download my <a href="https://drive.google.com/file/d/1cKaPKUFesjT4aGaFZhFhtporbGNxf635/view?usp=sharing">resume</a>
        </p>
    </div>
    <div>
        <h2>Front-end Proficiencies</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>React</li>
            <li>Bootstrap</li>
        </ul>
    </div>
    <div>
        <h2>Back-end Proficiencies</h2>
        <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>GraphQL</li>
        </ul>
    </div>
</div>
)};

export {AboutMe, Portfolio, Contact, Resume};