import React from 'react';
import ProjectThumbnail from '../components/ProjectThumbnail';

const page = () => {
    return (
        <div className="mt-[80px] ml-[5px] lg:ml-[100px] lg:min-h-[590px] mb-[50px]">
            <h1 className="text-6xl font-bebas text-blue-700 lg:text-8xl">Projects</h1>
            <div className='mt-[50px] flex justify-evenly flex-wrap'>
                <ProjectThumbnail projName="Portfolio (NextJS)" projImg="portfolio-home.png" projLink="/projects/portfolio-nextjs" />
                <ProjectThumbnail projName="MusiKa (React)" projImg="portfolio-home.png" projLink="/projects/"/>
                <ProjectThumbnail projName="3D Portfolio (ThreeJS)" projImg="portfolio-home.png" projLink="/projects/"/>
                <ProjectThumbnail projName="Cats4Lyfe (React)" projImg="portfolio-home.png" projLink="/projects/"/>
                <ProjectThumbnail projName="Weather Checker (React)" projImg="portfolio-home.png" projLink="/projects/"/>
                <ProjectThumbnail projName="Test Driven Development" projImg="portfolio-home.png" projLink="/projects/"/>
                <ProjectThumbnail projName="To Do List (React)" projImg="portfolio-home.png" projLink="/projects/"/>
                <ProjectThumbnail projName="Calculator (React)" projImg="portfolio-home.png" projLink="/projects/"/>
                <ProjectThumbnail projName="Dice Game (React)" projImg="portfolio-home.png" projLink="/projects/"/>
                <ProjectThumbnail projName="Backend (MERN)" projImg="portfolio-home.png" projLink="/projects/"/>
            </div>

        </div>
    );
};

export default page;