import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Get in Touch</h1>

          <div>
            <p className="text-gray-600 mb-8">
              I'm always interested in hearing about new projects and
              opportunities. Feel free to reach out if you'd like to connect!
            </p>

            <div className="space-y-6">
              <a
                href="mailto:anujdevnani135@gmail.com"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-6 h-6 mr-3" />
                anujdevnani135@gmail.com
              </a>
              <a
                href="tel:+916269064255"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-6 h-6 mr-3" />
                +916269064255
              </a>
              <a
                href="https://github.com/AnujDevnani/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Github className="w-6 h-6 mr-3" />
                GitHub Profile
              </a>
              <a
                href="https://www.linkedin.com/in/anuj-devnani-b06175273/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-6 h-6 mr-3" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;