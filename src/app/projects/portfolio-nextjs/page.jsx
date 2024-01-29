import ProjectBlock from "../../components/ProjectBlock";

export default function Projects() {
    return (

        <div className="min-h-screen w-full">
            <ProjectBlock
                projectImages={[
                    {
                        url: "../portfolio-home.png",
                        alt: "img1"
                    },
                    {
                        url: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg",
                        alt: "img2"
                    }
                ]}
                projectName="Portfolio (NextJS)"
                projectDesc="My portfolio for storing information and links to my projects. I used this project as an opportunity to learn a few new frameworks."
                projectApp="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjty_-V7IKEAxWkgf0HHXV6CHcQPAgJ"
                projectCode="https://github.com/RyanRFH/PortfolioNextJS"
                projectTech={[
                    {
                        name: "NextJS",
                        desc: "NextJS is a React framework, I decided to learn it in order to expand my capabilities with React and to see if I enjoyed using it as a development enviroment."
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