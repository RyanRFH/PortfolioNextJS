import ProjectBlock from "../components/ProjectBlock";

export default function Projects() {
    return (

        <div className="min-h-screen">
            {/* Portfolio (NextJS) */}
            <ProjectBlock
                projectName="Portfolio (NextJS)"
                projectDesc="I used this project as an opportunity to learn how to use a few new bits of technology."
                projectTech={[
                    {
                        name: "NextJS",
                        desc: "NextJS is a React framework, I decided to learn it in order to expand my capabilities with React and to see if I enjoyed using as a development enviroment."
                    },
                    {
                        name: "TailwindCSS",
                        desc: "Tailwind is a CSS framework designed to speed up the styling process, I decided to learn this in order to develop my CSS abilities and because a lot of companies are using CSS frameworks"
                    },
                    {
                        name: "Flowbite",
                        desc: "Flowbite is an addon to Tailwind that includes a component library, useful for adding things like image sliders and modals"
                    },

                ]}
            />
        </div>
    );
}