import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  date: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, date }) => {
  return (
    <div className="border border-gray-300 rounded p-4 mb-4 bg-gray-50">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2">{description}</p>
      <div className="mt-2">
        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-blue-500 text-white rounded px-2 py-1 mr-2">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-gray-500 text-sm mt-2">{date}</p>
    </div>
  );
};

export default ProjectCard;