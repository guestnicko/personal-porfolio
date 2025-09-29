import SkillCard from "../components/cards/skills-card";
import TechStackCard from "../components/cards/tech-stack-card";
import NavBar from "../components/NavBar";
import TechStacks from "../data/techs.json";
import Skill from "../data/skills.json";
import Projects from "../data/projects.json";
import Education from "../data/educations.json";
import Achievements from "../data/achievements.json";
export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main className="bg-[#eaebed] p-2 ">
        {/* Hero Section */}
        <section className="flex justify-center gap-3 font-bold text-3xl">
          <div>
            <span className="font-semibold text-[#006989]">Hi, I am</span>{" "}
            <br />
            <span className="text-[#d7263D] text-4xl font-bold">
              {" "}
              Don Dominick
            </span>
            <br />
            <p className="text-[#006989] font-semibold text-xl">
              I am Aspiring Software Engineer
            </p>
          </div>
          <div>
            <img
              src="https://placehold.co/400"
              alt=""
              className="object-cover"
            />
          </div>
        </section>
        {/* About Me Section */}
        <section className="border-2">
          <h1 className="text-4xl text-center font-bold">About Me</h1>
          <div className="max-w-[500px] w-full text-center border-2 border-red-300">
            <p>Hi, I am Don Dominick Enargan an aspiring software engineer</p>
          </div>
        </section>
        {/* Skills  */}
        <section>
          <h1 className="text-4xl text-center font-bold">Skills</h1>
          <div className="max-w-[500px] w-full text-center border-2 border-red-300">
            <p>Hi, I am Don Dominick Enargan an aspiring software engineer</p>
          </div>
        </section>
        {/* Tech Stack & Languages */}
        <section>
          <h1 className="text-4xl text-center font-bold">
            Frameworks & Languages
          </h1>
          <div className="max-w-[500px] w-full text-center flex gap-1 justify-center">
            {TechStacks.map((stack) => (
              <TechStackCard logo={stack.logo} />
            ))}
          </div>{" "}
          <div className="max-w-[500px] w-full text-center flex gap-1 justify-center">
            {Skill.map((stack) => (
              <SkillCard logo={stack.logo} label={stack.label} />
            ))}
          </div>{" "}
        </section>

        {/* Projects */}
        <section>
          <h1 className="text-4xl text-center font-bold">Projects</h1>
          <div className="max-w-[500px] w-full text-center border-2 border-red-300">
            <p>Hi, I am Don Dominick Enargan an aspiring software engineer</p>
          </div>
        </section>
        {/* Education */}
        <section>
          <h1 className="text-4xl text-center font-bold">Education</h1>
          <div className="max-w-[500px] w-full text-center border-2 border-red-300">
            <p>Hi, I am Don Dominick Enargan an aspiring software engineer</p>
          </div>
        </section>
        {/* Achievements */}
        <section>
          <h1 className="text-4xl text-center font-bold">
            Achievements & Competitions
          </h1>
          <div className="max-w-[500px] w-full text-center border-2 border-red-300">
            <p>Hi, I am Don Dominick Enargan an aspiring software engineer</p>
          </div>
        </section>
        {/* Contact Section */}
        <section>
          <h1 className="text-4xl text-center font-bold">Contact Me</h1>
          <div className="max-w-[500px] w-full text-center border-2 border-red-300">
            <p>Hi, I am Don Dominick Enargan an aspiring software engineer</p>
          </div>
        </section>
      </main>
    </>
  );
}
