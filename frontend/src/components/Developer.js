import React from 'react';

const Developer = ({ name, description, github, linkedin, image }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
            <img src={image} alt={name} className="rounded-full w-36 h-36 object-cover transition-transform transform hover:scale-110" />
            <div className="mt-4">
                <h2 className="text-xl font-semibold text-gray-800 transition-colors hover:text-teal-600">{name}</h2>
                <p className="mt-2 text-gray-600">{description}</p>
                <div className="mt-4">
                    <a href={github} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 text-sm mx-2 tooltip">
                        GitHub Profile
                        <span className="tooltiptext bg-gray-700 text-white p-2 rounded-md text-xs absolute -mt-8 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300">
                            View GitHub
                        </span>
                    </a>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 text-sm mx-2 tooltip">
                        LinkedIn
                        <span className="tooltiptext bg-gray-700 text-white p-2 rounded-md text-xs absolute -mt-8 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300">
                            View LinkedIn
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export {Developer};
