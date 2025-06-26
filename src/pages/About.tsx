import React from 'react';
import { Download } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">About Me</h1>
          
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-6">
              Enthusiastic and results-driven Software Engineering student with a deep passion for creating robust and innovative solutions. Proficient in a diverse range of programming languages including C++, Java, Python, and C, coupled with a solid foundation in Object-Oriented Programming (OOP) and Data Structures & Algorithms and machine learning concepts.

              
            </p>
           
            <p className="text-gray-600 mb-6">Technical Skill Set:

Languages: C++, Java, Python, C
Concepts: Machine Learning, Object-Oriented Programming (OOP), Data Structures & Algorithms
            
            
            </p>
            
            <p className="text-gray-600 mb-6">Passion: Leveraging technology to solve complex problems and drive technological advancements.
Academic Pursuits:
Currently pursuing B-TECH in Computer Science at Medi-caps university, where I am gaining both theoretical knowledge and hands-on experience. My coursework has equipped me with a strong understanding of algorithms, data management, and software development methodologies.
            
            
            </p>
            
            <p className="text-gray-600 mb-6">Aspirations:
Eager to contribute my skills and knowledge to dynamic software development projects. I am particularly drawn to Artificial Intellingence and Machine Learning, where I aim to apply my technical acumen to drive innovation and make a meaningful impact.

              
            </p>
            
            <p className="text-gray-600 mb-6">Open to Opportunities:
Actively seeking internships, collaborative projects, and networking opportunities to further enrich my skills and gain real-world experience in the software engineering field.
            
            
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">
              Professional Background
            </h2>
            <div className="space-y-6">
  {/* SkillAgents Experience */}
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold text-gray-800">
      AI Automation Intern
    </h3>
    <p className="text-gray-600">SkillAgents.ai • 2025 - Present</p>
    <ul className="list-disc list-inside mt-4 text-gray-600">
      <li>Developed agentic AI workflows using RPA to automate SaaS user provisioning</li>
      <li>Integrated web scraping and browser automation without API dependencies</li>
      <li>Worked with Supabase, Zustand, and Google OAuth for seamless authentication</li>
      <li>Improved UX for AI-driven user management dashboard</li>
    </ul>
  </div>

  {/* Mindrift Experience */}
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold text-gray-800">
      AI Tutor (Freelance)
    </h3>
    <p className="text-gray-600">Mindrift.ai • 2025</p>
    <ul className="list-disc list-inside mt-4 text-gray-600">
      <li>Created AI-generated tutoring content for agent-assistant models</li>
      <li>Designed problem-solving datasets and prompt structures for model training</li>
      <li>Reviewed and refined content quality to align with platform guidelines</li>
      <li>Collaborated asynchronously in a high-performance freelance environment</li>
    </ul>
  </div>
</div>

            <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">
              Education
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">
                Bachelor of Technology in Computer Science
              </h3>
              <p className="text-gray-600">Medi-Caps University • 2022 - 2026</p>
            </div>

            <div className="mt-12">
              <a
                href="/Anuj_Devnani_resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Download Resume
                <Download size={20} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;