import React from 'react';
import YouTube_clone from "../assets/YouTube_clone.png"
import Task_Master from "../assets/Task_Master.png"
import Text_to_Speech from "../assets/Text_to_Speech.png"
import Simon_game from "../assets/Simon_game.png"
import Expense_Tracker from "../assets/Expense_Tracker.png"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: YouTube_clone,
      title: "Youtube Clone",
      description: "Developed a website for having better knowledge on APIs and routing in react.A Responsive website using ReactJS,CSS & material UI for components and symbols.",
      links: {
        site: "https://mohan-56.github.io/youtube-clone/",
        github: "https://github.com/mohan-56/youtube-clone",
      },
    },
    {
      img: Task_Master,
      title: "Task Master",
      description: "Organize your day,Achieve your goals. This website stores progress in local storage.Implemented features such as task creation, deletion, and completion.",
      links: {
        site: "https://mohan-56.github.io/react-app-deployment-in-github/",
        github: "https://github.com/mohan-56/Task_Master",
      },
    },
    {
      img: Text_to_Speech,
      title: "Text to Speech",
      description: " Convert text input into spoken words.Adjust pitch, rate, and voice for a personalized speech experience.Compatible with modern web browsers that support the Web Speech API.",
      links: {
        site: "https://mohan-56.github.io/Text-to-speech/",
        github: "https://github.com/mohan-56/Text-to-speech",
      },
    },
    {
      img: Simon_game,
      title: "Simon game",
      description: "Developed a game using frontend technologies, so that any user can play it from any device.",
      links: {
        site: "https://mohan-56.github.io/simon-game/",
        github: "https://github.com/mohan-56/simon-game",
      },
    },
    {
      img: Expense_Tracker,
      title: "Expense Tracker",
      description: "An online expenses tracker which tracks our expenses day to day",
      links: {
        site: "https://smart-spend2023.000webhostapp.com/index.php",
        github: "https://github.com/mohan-56/Expense-Tracker",
      },
    },
  ]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300 text-2xl'>
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio
