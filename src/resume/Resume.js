import "./resume.css";
import Experience from "./experience/Experience";
import Education from "./education/Education";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";

const Resume = () => {
  return (
    <div className="resume">
      <div className="name">
        <h1 className="firstname">Ben</h1>
        <h1 className="lastname">Krowchuk</h1>
      </div>
      <div className="socials">
        <p className="phone">phone</p>
        <p className="email">email</p>
        <p className="linked-in">linked in</p>
        <p className="github">github</p>
      </div>

      <Education />
      <Experience />
      <Projects />
      <Skills />
    </div>
  );
};

export default Resume;
