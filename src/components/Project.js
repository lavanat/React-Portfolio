import React, {useState} from 'react';

function aboutMe(props) {
    return <section class="section-container">
    <h2 id="About-Me">About Me</h2>
    <section class="content-container">
    <img src="../assets/Lavanya-picture" alt="picture of Lavanya Natchiappan"/>
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
};

function portfolio(props) {
return <div>
    <h2 id="Portfolio">My Portfolio</h2>
    <div>
        <h3>Javascript Coding Quiz</h3>
        <img src="../assets/quiz-image" alt="a cartoon image of a quiz"/>
        <a href="https://lavanat.github.io/JavaScript-Coding-Quiz/">Deployed Application</a>
        <a href="https://github.com/lavanat/JavaScript-Coding-Quiz">Github Repo</a>
    </div>
    <div>
        <h3>Password Generator</h3>
        <img src="../assets/password-generator-image" alt="a cartoon image of lock with astericks to represent a password"/>
        <a href="https://lavanat.github.io/password-generator/">Deployed Application</a>
        <a href="https://github.com/lavanat/password-generator">Github Repo</a>
    </div>
    <div>
        <h3>Weather Forecast Display</h3>
        <img src="../assets/weather-image" alt="a cartoon image of different types of weather"/>
        <a href="https://lavanat.github.io/weather-forecast/">Deployed Application</a>
        <a href="https://github.com/lavanat/weather-forecast">Github Repo</a>
    </div>
    <div>
        <h3>Local Restaurant Finder</h3>
        <img src="../assets/restaurant-finder-image" alt="a cartoon image of a location pin with a plate inside of it"/>
        <a href="https://lavanat.github.io/First-Up-Kickshaw/">Deployed Application</a>
        <a href="https://github.com/lavanat/First-Up-Kickshaw">Github Repo</a>
    </div>
    <div>
        <h3>Teacher Sync</h3>
        <img src="../assets/gradebook-image" alt="a cartoon image of a gradebook"/>
        <a href="https://secret-coast-72135.herokuapp.com/">Deployed Application</a>
        <a href="https://github.com/lavanat/teacher-sync">Github Repo</a>
    </div>
    <div>
        <h3>Text Editor</h3>
        <img src="../assets/terminal-image" alt="a cartoon image of a computer terminal"/>
        <a href="https://stormy-headland-20419.herokuapp.com/">Deployed Application</a>
        <a href="https://github.com/lavanat/text-editor">Github Repo</a>
    </div>
</div>
};