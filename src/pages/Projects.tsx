import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { Project } from '../types';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  const projects: Project[] = [
    {
      id: '1',
      title: 'Generative Adversarial Neural Network',
      description: 'A project leveraging Generative Adversarial Networks (GANs) to design and generate realistic fashion prototypes. This system uses AI to create innovative and diverse clothing designs, pushing the boundaries of creativity in the fashion industry.',
      category: 'Ds-ml',
      liveUrl: 'https://github.com/AnujDevnani',
      technologies: ["Python","TensorFlow","Keras","NumPy","Matplotlib","Pandas"],
      features: [
        "Realistic fashion prototype generation using GANs.",
        "Customizable design inputs for targeted outputs.",
        "AI-driven enhancement of creative possibilities in fashion.",
        "Visualization of generated designs in high resolution.",
        "Improved training stability using advanced GAN techniques like Wasserstein loss."
      ]
    },
    {
      id: '2',
      title: 'Deep CNN Image Classifier: Happy/Sad',
      description: 'A deep learning project that utilizes Convolutional Neural Networks (CNNs) to classify facial expressions as either happy or sad. This model analyzes facial features and provides accurate emotion detection using advanced image processing techniques.',
      category: 'Ds-ml',
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Matplotlib"],
      features: [
        "Binary classification of facial expressions into happy and sad categories.",
        "Deep CNN architecture for high accuracy in emotion detection.",
        "Real-time prediction support using webcam or live video feeds.",
        "Preprocessing pipeline including resizing, grayscale conversion, and normalization.",
        "Visualization of training metrics (accuracy and loss) using Matplotlib.",
        "Efficient model training using GPU acceleration."
      ]
    },
    {
      id: '3',
      title: 'AI Music Generator Using Replicate API',
      description: 'A cutting-edge project that uses the Replicate API to generate unique and customizable music tracks with AI. This tool allows users to explore the creative potential of AI in music composition, catering to diverse genres and styles.',
      category: 'Fullstack AI',
      liveUrl: 'https://music-generative-ai.netlify.app',
      technologies: ["Python", "Replicate API", "Flask/Django (for backend integration)", "JavaScript (for frontend)", "HTML/CSS",],
      features: [
        "Generate AI-composed music in various genres and styles.",
        "Customizable parameters for tempo, mood, and instruments.",
        "Integration with Replicate API for seamless AI model interaction.",
        "Real-time generation and playback of music tracks.",
        "Downloadable output in multiple formats (e.g., MP3, WAV).",
        "User-friendly interface for inputting music preferences.",
        "Scalable backend for handling multiple user requests efficiently."
      ]
    },
    {
      id: '4',
      title: 'Credit Limit Optimizer',
      description: 'A machine learning-driven tool designed to optimize credit limits for customers by analyzing spending patterns, risk profiles, and financial history. It aims to balance credit risk and customer satisfaction while boosting financial institution profitability.',
      category: 'Fullstack AI',
      liveUrl: 'https://music-generative-ai.netlify.app',
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow/Keras", "Matplotlib/Seaborn",],
      features: [
        "Customer segmentation based on credit behavior and financial history.",
        "Machine learning models to predict optimal credit limits.",
        "Risk assessment algorithms to minimize default rates.",
        "Real-time analytics dashboard for credit performance monitoring.",
        "Integration with existing banking systems for seamless implementation.",
        "Customizable thresholds for adjusting risk tolerance levels.",
        "Data visualization for insights into credit utilization and optimization."
      ]
    },
    {
      id: '5',
      title: 'Stock Price Predictor',
      description: 'A machine learning-based project designed to predict future stock prices using historical data and advanced algorithms. This system helps traders and investors make informed decisions by analyzing market trends and patterns.',
      category: 'Ds-ml',
      technologies: ['Scikit-learn', 'Pandas', 'Python', 'Matplotlib', 'Numpy', 'TensorFlow/keras', 'Seaborn'],
      features: [
        "Predict stock prices using machine learning models like Linear Regression, LSTM, and Random Forest.",
        "Visualization of historical data and predictions with interactive charts.",
        "Data preprocessing, including handling missing values and normalization.",
        "Support for multiple datasets and dynamic model training.",
        "Integration of technical indicators like Moving Averages, RSI, and Bollinger Bands.",
        "Evaluation metrics like RMSE and MAE for model performance analysis."
      ]
    },
    {
      id: '6',
      title: 'AI QRcode generator',
      description: 'A powerful tool that utilizes AI to generate visually appealing and customizable QR codes. Built using Replicate AI, this project combines functionality and design to elevate traditional QR code applications.',
      category: 'Fullstack AI',
      liveUrl: 'https://ai-qrcode-generator.netlify.app',
      technologies: ['React', 'Next.js', 'Replicate API', 'Tailwind'],
      features: [
        "AI-powered QR code generation for custom designs.",
        "Support for embedding URLs, text, or other data.",
        "Customizable styles, colors, and patterns for QR codes.",
        "Real-time preview of generated QR codes.",
        "High-resolution output for printing and digital use.",
        "Integration with Replicate AI for advanced design suggestions."
      ]
    }
  ];
  


  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'Ds-ml', name: 'Data Science & Machine Learning' },
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
