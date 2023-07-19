import imageus from "../src/assets/us.jpg";
import wnet from "../src/assets/wnet.jpg";
import qubit from "../src/assets/qubit.jpg";

const portfolio = {
    heroImg: "https://images.unsplash.com/photo-1662638600507-0846616ec508?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1030&q=80",
    heroImg2: "https://images.unsplash.com/photo-1662638600476-d563fffbb072?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    resume: "https://drive.google.com/file/d/1F5mLsKFuCoktvRlDX1xzk7ek_hhRXBCR/view?usp=sharing",
    about1:"PhD Student",
    about2:"AI Researcher",
    city: "Copenhagen, Denmark",
    phone: "+45-91868335",
    email: "goutham123manimaran@gmail.com",
    github: "https://github.com/goubeast",
    linkedin: "https://www.linkedin.com/in/goutham-manimaran-574287176/",
    twitter: "https://twitter.com/goubeast",
    instagram: "https://www.instagram.com/goubeast/",

    projects: [
        {
            id: 1,
            name: "Focal-WNet: An Architecture Unifying Convolution and Attention for Depth Estimation",
            desc: "IEEE I2CT '22",
            link: "https://ieeexplore.ieee.org/abstract/document/9824488",
            icon: wnet
        },
        {
            id: 2,
            name: "Evaluation Tool to Diagnose Faults and Discrepancy in Semi-Automated or Manual Annotations in Ultrasound Cine Loops",
            desc: "IEEE EMBC '22",
            link: "https://ieeexplore.ieee.org/abstract/document/9871001",
            icon: imageus
        },
        {
            id: 3,
            name: "Implementation of 5-Qubit approach-based Shor's Algorithm in IBM Qiskit",
            desc: "IEEE PuneCon '21",
            link: "https://ieeexplore.ieee.org/abstract/document/9686492",
            icon: qubit
        },
    ],
    workExp:[
        {
            id: 1,
            companyName:"Technical University of Denmark",
            location:"Copenhagen, Denmark",
            position: "PhD Student",
            time: "Jan 2023 - Dec 2025",
            desc: ["My current research revolves around utilizing machine learning techniques to identify digital biomarkers associated with cardiovascular diseases. This research project is financially supported by Innovation Fund Denmark and conducted in collaboration with Bispebjerg Hospital and Cortrium ApS.",
                   "The primary focus of this research involves analyzing ECG signals in an ambulatory setting, particularly during sleep or exercise, to establish correlations between arrhythmias  and specific activities. Furthermore, we are actively involved in developing a mobile application that will streamline data acquisition from patients, enabling seamless analysis and patient monitoring.",
                   "By exploring the potential of digital biomarkers and leveraging advanced technology, our goal is to enhance the diagnosis,  understanding, and management of cardiovascular diseases.",
                ]
        },
        {
            id: 2,
            companyName:"Philips Research",
            location:"Bangalore, India",
            position: "Research Intern",
            time: "Jan 2020 - May 2020",
            desc: ["During my one-year internship at Philips from 2021 to 2022, I focused on Computer Vision applications within the field of Fetal Echocardiography. My primary responsibilities involved designing deep learning models for the detection of Cardio-Thoracic Ratio and implementing segmentation algorithms.",
                   "Additionally, I had the opportunity to contribute to a project funded by the Bill and Melinda Gates Foundation. In this project, I developed models for the automatic assessment of Amniotic Fluid Index and accurate placement of the placenta in the womb. These models utilized videos captured by the Philips Lumify device.",
                "During this time, I also had the privilege of publishing a paper at EMBC'22. The paper focused on measuring the quality of manual annotation using semi-supervised learning techniques, offering valuable insights into improving the annotation process."]
        }
    ],
    
};

export default portfolio;
