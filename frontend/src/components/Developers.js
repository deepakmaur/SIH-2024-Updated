import React from 'react';
import { Developer } from './Developer'

const Developers = () => {
    const developers = [
        {
            name: 'Krishna Ketan Rai',
            description: 'You know who I am.',
            github: 'https://github.com/krikera',
            linkedin: 'https://linkedin.com/in/janedoe',
            image: 'wallpaperflare.com_wallpaper (10).jpg',
        },
        {
            name: 'Deepak Maurya',
            description: 'Full Stack Developer with experience in Node.js, React, and MongoDB.',
            github: 'https://github.com/deepakmaur',
            linkedin: 'https://linkedin.com/in/johnsmith',
            image: 'wallpaperflare.com_wallpaper (11).jpg',
        },
        {
            name: 'Gaurav Bhatt',
            description: 'Backend Developer with expertise in Python, Django, and REST APIs.',
            github: 'https://github.com/golubhattuk01',
            linkedin: 'https://linkedin.com/in/sarahjohnson',
            image: 'https://media.licdn.com/dms/image/v2/D5603AQEo8VtKQ6STcg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1706735581379?e=1730937600&v=beta&t=7mTs3YIDrfdguTuMXJxsRGMGBRy-Ri4GJizlYWmJcZo',
        },
        {
            name: 'Ankit Bhati',
            description: 'MERN stack Developer with java.',
            github: 'https://github.com/akb2102',
            linkedin: 'https://linkedin.com/in/alexbrown',
            image: 'wallpaperflare.com_wallpaper (13).jpg',
        },
        {
            name: 'Shreya Singh',
            description: 'Data Scientist specializing in Machine Learning and Data Visualization.',
            github: 'https://github.com/shreya23094',
            linkedin: 'https://linkedin.com/in/emilywhite',
            image: 'wallpaperflare.com_wallpaper (8).jpg',
        },
        {
            name: 'Pradyumn Pratap Singh',
            description: 'DevOps Engineer with experience in cloud infrastructure and CI/CD pipelines.',
            github: 'https://github.com/githubpradyumn',
            linkedin: 'https://linkedin.com/in/michaelgreen',
            image: 'wallpaperflare.com_wallpaper (9).jpg',
        },
    ];

    return (
        <div className="container mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {developers.map((dev, index) => (
                <Developer
                    key={index}
                    name={dev.name}
                    description={dev.description}
                    github={dev.github}
                    linkedin={dev.linkedin}
                    image={dev.image}
                />
            ))}
        </div>
    );
};

export {Developers};
