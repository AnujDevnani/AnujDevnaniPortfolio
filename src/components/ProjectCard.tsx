import React from 'react';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              View Project <ExternalLink size={16} className="ml-1" />
            </a>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center text-gray-600 hover:text-blue-600"
          >
            {isExpanded ? 'Less Details' : 'More Details'}
            {isExpanded ? (
              <ChevronUp size={16} className="ml-1" />
            ) : (
              <ChevronDown size={16} className="ml-1" />
            )}
          </button>
        </div>

        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <h4 className="font-semibold text-gray-800 mb-2">Key Features</h4>
            <ul className="list-disc list-inside mb-4">
              {project.features.map((feature, index) => (
                <li key={index} className="text-gray-600">
                  {feature}
                </li>
              ))}
            </ul>
            <h4 className="font-semibold text-gray-800 mb-2">Challenges</h4>
            <p className="text-gray-600">{project.challenges}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;