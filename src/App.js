import './App.css';
import React from 'react';
import me from './assets/images/resume.jpg';
import instagram from './assets/images/instagram.png';
import github from './assets/images/github.png';
import website from './assets/images/website.png';
import Content from './components/Content';
import Education from './components/Education';
import Tools from './components/Tools';
import Work from './components/Work';

function App() {
  return (
    <div className="wrapper">
		<link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900&display=swap" rel="stylesheet"></link>
		<div className="container">

			<div className="left">
				<img className="main-image" src={me} alt="A picture of me"/>
				<div className="image-content">
					<h3>Hello, I'm Daniel Chung</h3>
					<p>A Web developer that aims to create impactful websites and applications with effective code.</p>
					<div className="links">
						<a href="https://github.com/pikachungg" target="_blank">
							<img className="image-links" src={github} alt="icon link for my: github"/>
						</a>
						<a href="https://www.instagram.com/pikachungg/" target="_blank">
							<img className="image-links" src={instagram} alt="icon link for my: instagram "/>
						</a>
						<a href="https://pikachungg.github.io/portfolio/" target="_blank">
							<img className="image-links" src={website} alt="icon link for my: website"/>
						</a>
					</div>
				</div>
			</div>

			<div className="right">
				<div className="space"></div>
				{/* Introduction */}
				<Content title="Intro:"
				paragraph1="Hi! I'm a web developer based in Rochester, New York. I'm currently in my third year pursuing a degree in Web and Mobile Computing at Rochester Institute of Technology (RIT)."
				paragraph2="I specialize in building websites and applications with easy to use and modern user interfaces and back-ends. I enjoy developing both front-end and back-end for all my sites and apps."
				paragraph3="I'm currently looking for a Co-Op in Summer/Fall or double-block 2020."
				/>
				<div className="space"></div>
				{/* Education */}
				<Education title="Education:"
				university="Rochester Institute of Technology"
				collegeName="Golisano College of Computing and Information Sciences"
				titleMajor="Major: "
				titleMinor="Minor: "
				Major="Web and Mobile Computing"
				Minor="Computer Science"
				expected="Expected Graduation: Spring 2022"
				/>
				<div className="space"></div>
				{/* TOOLS */}
				<Tools title="Tools: "
				languages="LANGUAGES: "
				languagesAll="Python, Java, MySQL, HTML5, CSS3, JavaScript, PHP"
				frameworksLibraries="FRAMEWORKS/LIBRARIES: "
				frameworksAll="React, Bootstrap"
				design="DESIGN: "
				designAll="Adobe Photoshop, Adobe XD"
				/>


				<div className="space"></div>
				{/* WORK */}
				<Work title="Work: "
				place="bbb Shoes and Boots"
				position="Software Developer"
				duration="May 2019 - Aug 2019"
				description="Built four useful applications for the company to facilitate the communication between information in their database and the user. Used HTML/CSS, JavaScript, and PHP."
				/>

				<Work title=""
				place="The Commons"
				position="Line Cook"
				duration="Sep 2017 - Aug 2016"
				description="Worked efficiently under pressure during rush-hour shifts. Implemented a faster way for closing and cleaning at the end of the day."
				/>	

				<Work title=""
				place="bbb Shoes & Boots"
				position="Social Media Intern"
				duration="Jan 2016 - Aug 2016"
				description="Photographed company's products, edited the pictures, and introduced creative ideas for social media posts. Used my pictures for the company's website and social media. Learned how to use Photoshop."
				/>
								
				<div className="space"></div>
				{/* project */}
				<Work title="Projects:"
				place="Project"
				position="Swoop"
				duration="In development"
				description="Developed a game with mental health as the primary goal. Aimed to reduce stress and anxiety through a relaxing and engaging experience. Developed using HTML/CSS, JavaScript, and ReactJS."
				/>	

				<Work title=""
				place="Personal Project"
				position="Personal Website"
				duration="Feb 2020 - Mar2020"
				description="Created a personal website to display my portofolio and information about me. Developed with HTML/CSS and ReactJS."
				/>	

				<Work title=""
				place="Personal Project"
				position="Discordgg"
				duration="In development"
				description="Built a Discord bot that retrieves information from Riot Games' League of Legends API and displays on Discord. Keeps track of player's stats and in-game information, depending on what is asked. Currently being developed with Python."
				/>
				
				{/* Leadership */}
				<div className="space"></div>
				<Work title="Leadership:"
				place="Web Developer"
				position="Asian Cultural Society"
				duration="Dec2020 - Present"
				description="In charged of developing all web related work inside of ACS and creating scripts to automate tasks. Managing Discord, Slack and the website."
				/>
				<Work title=""
				place="Executive Assistant Web Developer"
				position="Asian Cultural Society"
				duration="Aug 2020 - Dec 2020"
				description="Helping with the development of web related work of ACS and create scripts to automate tasks. Managing Discord, Slack and the website"
				/>
				<Work title=""
				place="Squad Leader"
				position="TECHO Panama"
				duration="Aug 2015 - Present"
				description="Developed leadership skills by actively cooperating with society to diminish poverty in Panama. Led more than nine teams in building houses."
				/>

				{/* FOOTER */}

				<footer>
					<div className="footer">
						<p>Developed by: Daniel Chung</p>
						<p>Contact: pikachungg@gmail.com</p>
					</div>
				</footer>

			</div>
		</div>
    </div>
  );
}

export default App;
