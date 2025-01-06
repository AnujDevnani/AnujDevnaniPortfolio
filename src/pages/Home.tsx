import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const skills = [
    'Deeplearning',
    'Java',
    'Data Structures & Algorithms',
    'Machine Learning',
    'Python',
    'Node.js',
    'GitHub',
    'Neural Networks',
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between py-20">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Hi, I'm <span className="text-blue-600">Anuj Devnani</span>
              <br />
              Data scientist & software engineer
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              As a data scientist, I analyze data to uncover patterns, trends, and insights that solve problems or support decision-making. I collect, clean, and organize data, then use tools like statistical models and visualizations to make the data understandable and actionable.

              As a machine learning engineer, I build systems that let computers learn from data and make predictions or decisions on their own. I design, train, and optimize algorithms to handle tasks like recognizing images, predicting outcomes, or automating repetitive processes.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              View My Work
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src=""
              alt="Professional headshot"
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mx-auto shadow-lg"
            />
          </div>
        </div>

        <div className="py-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Core Skills & Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {skill}
                </h3>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{
                      width: `${Math.floor(Math.random() * 30 + 70)}%`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
