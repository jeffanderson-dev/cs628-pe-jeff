// src/Resume.js
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume">
      <div className="header">
        <h1>Jeff Anderson</h1>
        <p>San Diego ✈ Italy</p>
        <p>
          <a href="mailto:jeff@nderson.vip">jeff@nderson.vip</a> |{' '}
          <a href="https://github.com/jeffanderson-dev" target="_blank" rel="noreferrer">GitHub</a> |{' '}
          <a href="https://linkedin.com/in/j3ff/" target="_blank" rel="noreferrer">LinkedIn</a> |{' '}
          <a href="tel:+393444351007"> +39 344 435 1007</a>
          </p>
        <p>
            Student email: <a href="mailto:andersonjeffrey@cityuniversity.edu">andersonjeffrey@cityuniversity.edu</a>
        </p>
      </div>

      <div className="section">
        <h2>Profile</h2>
        <p>
          Software administrator and developer with a decade of experience in networking,
          troubleshooting, and debugging server infrastructure and a variety of code bases and
          operating systems. Looking for a role where I can continue to learn and grow my skill set.
          I hold an Active Security Clearance.
        </p>
      </div>

      <div className="section experience">
        <h2>Work Experience</h2>

        <h3>Site Lead & Senior Principal Engineer, Raytheon Intelligence & Space</h3>
        <p>08.2021 - Present, Catania, Italy</p>
        <ul>
          <li>Lead FSR team for Global Hawk UAV at Edwards AFB</li>
          <li>Maintained CISCO routers, Juniper firewalls, and network servers</li>
          <li>Administered Windows and Linux systems using vSphere, Active Directory, NIS</li>
          <li>Debugged experimental hardware/software and gave engineering feedback</li>
          <li>Implemented hardware/software plans involving RF and data links</li>
        </ul>

        <h3>Computer Scientist, NAWCWD</h3>
        <p>11.2020 - 08.2021, Ridgecrest, CA</p>
        <ul>
          <li>Managed 64 servers and hypervisors for Navy projects</li>
          <li>Stabilized Red Hat Linux systems and improved team workflows</li>
          <li>Developed C#/XAML UI for active military apps</li>
          <li>Wrote automation scripts using Bash, Python, YAML, Sed, and Awk</li>
        </ul>
      </div>

      <div className="section education">
        <h2>Education</h2>
        <h3>City University of Seattle</h3>
        <p>M.S. in Computer Science (In Progress)</p>
        <p>GPA : 3.97 / 4.0</p>
        <h3>CSU, Chico</h3>
        <p>B.S. in Computer Science</p>
        <p>GPA: 3.6 / 4.0</p>
      </div>

      <div className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Linux/Windows System Administration</li>
          <li>Python, C++, Bash, C#, JavaScript</li>
          <li>NodeJS, Git, Agile, AWS</li>
        </ul>
      </div>

      <div className="section projects">
        <h2>Projects</h2>

        <h3>Easy Grocery</h3>
        <p>
          Cross-platform mobile app using Flutter & Python, Firebase backend,
          price comparison scraping
        </p>

        <h3>UPNXT</h3>
        <p>
          PWA written in Svelte, Firebase backend, Kanban task/project management
        </p>
      </div>

      <div className="section">
        <h2>Languages</h2>
        <p>English (native) | German | French | Italian | Spanish</p>
      </div>
    </div>
  );
};

export default Resume;