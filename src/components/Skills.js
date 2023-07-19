import "./SkillsStyles.css";
import image2 from "../assets/IMG_5096.jpg";

import React from 'react'

function displaySkill(skill) {
    let key = Object.keys(skill);
    return (<a href={skill[key].Link}>
                <img src={skill[key].Icon} alt={skill[key].altText} />
            </a>);
}


const Skills = () => {

    return (
        <div class="about-me">
        <div class="content">
          <div class="image-container">
            <img src={image2} alt="Profile Image"/>
          </div>
          <div class="text-container">
            <h2>About Me</h2>
            <p >
            My name is Gouthamaan Manimaran, and I am a first-year PhD student in Artificial Intelligence at the Technical University of Denmark. <br/> 
            I am passionate about technologies revolving around machine learning in healthcare and dedicated to making meaningful contributions to the field. 
            My current research focuses on identifying digital biomarkers for cardiovascular diseases like Heart Failure and Stroke. <br/> 
            Ideally, at the end of my research, I hope to have devised a risk score based on ambulatory electrocardiogram recording of a patient to find early warnings of 
            diseases so preventive measures can be taken. <br/> 
            Thank you for visiting my website! Feel free to explore my publications, and CV to learn more about my research and academic journey. 
            If you have any questions or would like to collaborate, please don't hesitate to contact me.
        </p>
          </div>
        </div>
      </div>
    )
  }


const Skills1 = () => {

    return (
        <div class="about-me">
        <div class="content">
          <div >
            <img src={image2} alt="Profile Image"/>
          </div>
          <div class="text-container">
            <h2>About Me</h2>
            <p class='mine'>
            My name is Gouthamaan Manimaran, and I am a first-year PhD student in Artificial Intelligence at the Technical University of Denmark. <br/> 
            I am passionate about technologies revolving around machine learning in healthcare and dedicated to making meaningful contributions to the field. 
            My current research focuses on identifying digital biomarkers for cardiovascular diseases like Heart Failure and Stroke. <br/> 
            Ideally, at the end of my research, I hope to have devised a risk score based on ambulatory electrocardiogram recording of a patient to find early warnings of 
            diseases so preventive measures can be taken. <br/> 
            Thank you for visiting my website! Feel free to explore my publications, and CV to learn more about my research and academic journey. 
            If you have any questions or would like to collaborate, please don't hesitate to contact me.
        </p>
          </div>
        </div>
      </div>
    )
  }

export default Skills