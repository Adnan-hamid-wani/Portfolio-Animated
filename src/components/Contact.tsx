import { Github, Linkedin, Mail } from 'lucide-react';

function Contact() {
  return (
    <div className=" bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 text-center" >
            <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
            <p className="text-xl mb-8">
              I'm always open to discussing new projects and opportunities.
            </p>
            <a
              href="mailto:contact@example.com"
              className="px-8 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </a>
             <div className="flex gap-6 justify-center  mt-10">
        <a href="https://github.com/Adnan-hamid-wani" className="hover:text-blue-400 transition-colors">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/adnan-hamid-wani-283847204/" className="hover:text-blue-400 transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="mailto:adnanaduuu@gmail.com" className="hover:text-blue-400 transition-colors">
          <Mail size={24} />
        </a>
      </div>
          </div>  )
}

export default Contact