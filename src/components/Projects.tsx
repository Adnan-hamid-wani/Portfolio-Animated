interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;  // Add link property
}

const projects: Project[] = [
  {
    title: "Task Manager Web App",
    description: "Developed a full-stack Task Manager web application that enables users to create, manage, and organize tasks efficiently.",
    image: "https://www.bing.com/th/id/OGC.9129f44795f3b00c2b8ad68fe43e73da?pid=1.7&rurl=https%3a%2f%2fmedia.geeksforgeeks.org%2fwp-content%2fuploads%2f20231017123939%2fBuild-a-Task-Management-App-using-Next-Js.gif&ehk=ij5fiTDkrtkKyh0oWlzWZWumvwlLTRHXE3HtV%2fTm2cY%3d",
    technologies: ["React", "MongoDb", "Firebase"],
    link: "https://task-manager-app-6cb68.web.app"
  },
  {
    title: "Poll Web App",
    description: "Created a web-based polling platform allowing users to create, vote, and track poll results.",
    image: "https://www.bing.com/th/id/OGC.5566edf825315727f8ba89d7adf495ac?pid=1.7&rurl=https%3a%2f%2fgithub.com%2fOfficeDev%2fmicrosoft-teams-poll-app%2fwiki%2fimages%2fPollTemplateCompose.gif&ehk=EmUwGIn7UKEUEkzeKwrFSbPS8yE5PntioTKTQLDmc30%3d",
    technologies: ["Python", "Django"],
    link: "https://github.com/Adnan-hamid-wani/Django-PollApp/tree/main/CA3%20Django/Django-Poll-App"
  },
  {
    title: "Course Web App",
    description: "Developed an interactive course management app with dynamic course listings, user reviews, and responsive design.",
    image: "https://www.bing.com/th/id/OGC.8efb7273caf5d89ab561a15d076cdbf0?pid=1.7&rurl=https%3a%2f%2fsupport.glofox.com%2fhc%2farticle_attachments%2f360005705158%2fClients__web_integration__course_view.gif&ehk=ePGioPUiMSfvnKpUEc8NVMo5JtJ%2f9hhxCKyZk1zUf%2bM%3d",
    technologies: ["React js"],
    link: "https://github.com/Adnan-hamid-wani/Course-Detail-Page"
  },
  {
    title: "Tic Tac Toe Game",
    description: "Created a console-based Tic Tac Toe game with AI using the Minimax algorithm.",
    image: "https://www.bing.com/th/id/OGC.da85b9d71ba25d2f8083371568efb3c4?pid=1.7&rurl=https%3a%2f%2fuser-images.githubusercontent.com%2f17960677%2f147065983-8d3fdddf-8e6a-435f-9d94-ab25aea66a73.gif&ehk=rl%2b2eKIyZTTPaHN%2fOKqxKl8Pys%2b8bdnSICg08SOdFCk%3d",
    technologies: ["C++", "DSA"],
    link: "https://onlinegdb.com/edit/CEK1rvng4"
  },
];

export function Projects() {
  return (
    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto p-8">
      {projects.map((project, index) => (
        <a 
          key={index} 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 hover:bg-white/20 transition-all">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
