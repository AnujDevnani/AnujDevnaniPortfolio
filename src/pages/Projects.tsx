import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { Project } from '../types';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  const projects: Project[] = [
    {
      id: '1',
      title: 'AI music generator',
      description: 'A full-stack e-commerce solution with real-time inventory management and secure payment processing.',
      category: 'Fullstack AI',
      liveUrl: 'https://music-generative-ai.netlify.app',
      technologies: ['React', 'Next.js', 'Replicate API', 'Tailwind'],
      features: [
        'It is a wild ride of creativity where users can input their prompts and watch as the generator churns out unique music compositions.',
        'generative ai',
        'Gernerate music using prompts',
      ]
    },
    {
      id: '2',
      title: 'Credit limit optimizer',
      description: 'Mobile application that uses machine learning to predict an appropriate credit limit tailored to individual customers.',
      category: 'ml',
      technologies: ['Scikit-learn', 'Pandas', 'Python', 'Matplotlib', 'Numpy'],
      features: [
        'Predict an appropriate credit limit tailored to individual customers.',
        'Minimize default risk by analyzing patterns in historical data.',
        'Provide actionable insights to optimize credit allocation strategies.',
      ]
    },
    {
      id: '3',
      title: 'Stock Price Predictor',
      description: 'Developed a machine learning model to predict stock prices with high accuracy..',
      category: 'ml',
      technologies: ['Scikit-learn', 'Pandas', 'Python', 'Matplotlib', 'Numpy', 'TensorFlow/keras', 'Seaborn'],
      features: [
        'Analyze historical market data to identify trends and patterns.',
        'A machine learning model to predict stock prices with high accuracy.',
        'Provide insights for better investment and trading decisions.',
      ]
    },
    {
      id: '4',
      title: 'AI QRcode generator',
      description: 'Developed a full-stack web application using with Next.js serving a Replicate API with React as the frontend.',
      category: 'Fullstack AI',
      liveUrl: 'https://ai-qrcode-generator.netlify.app',
      technologies: ['React', 'Next.js', 'Replicate API', 'Tailwind'],
      features: [
        'Implemented GitHub OAuth to get data from users repositories.',
        'It is a wild ride of creativity where users can input their prompts and watch as the generator churns out unique qr code for the input site',
      ]
    }
  ];
  


  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ml', name: 'Machine Learning' },
    { id: 'DS', name: 'Data Science' },
    { id: 'Fullstack AI', name: 'Fullstack AI' },
    { id: 'web', name: 'Web Apps' }
    
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">My Projects</h1>
        
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-md transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;