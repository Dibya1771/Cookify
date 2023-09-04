import React, { useState } from "react";
import "../../CSS/About.css";
import bikuImage from "../../Images/dibya.jpg";
import sanskarImage from "../../Images/sanskar.jpg";
import nakinaImage from "../../Images/nakina.jpg";
import arjyaImage from "../../Images/arjya.jpg";
import somuImage from "../../Images/somu.jpg";

const MemberCard = ({ name, image, des }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (

        <div className={`ssss_container ${isFlipped ? "s_flipped" : ""}`}>
            <div
                className="s_front"
                onMouseEnter={handleCardFlip}
                onMouseLeave={handleCardFlip}
            >
                <img src={image} className="s_image" alt="Profile" />
                <h2>{name}</h2>

            </div>
            <div className="s_back">
                <p>{des}</p>
            </div>
        </div>

    );
};

const About = () => {
    const members = [
        {
            name: "Dibya Ranjan Rath",
            image: bikuImage,
            des: "Hello, I am a 3rd year B-Tech student in the Computer Science and Engineering (CSE) branch at Silicon Institute of Technology, Bhubaneswar. With a passion for technology and a dedication to learning, I strive for excellence in my studies and aim to make a meaningful contribution to the field of computer science. SIC-20BCSE62",
        },
        {
            name: "Sanskar Mohanty",
            image: sanskarImage,
            des: "Hello, I am a 3rd year B-Tech student in the Computer Science and Engineering (CSE) branch at Silicon Institute of Technology, Bhubaneswar. With a passion for technology and a dedication to learning, I strive for excellence in my studies and aim to make a meaningful contribution to the field of computer science.\n SIC-20BCSE46",
        },
        {
            name: "Nakina Baba Sai",
            image: nakinaImage,
            des: "Hello, I am a 3rd year B-Tech student in the Computer Science and Engineering (CSE) branch at Silicon Institute of Technology, Bhubaneswar. With a passion for technology and a dedication to learning, I strive for excellence in my studies and aim to make a meaningful contribution to the field of computer science.\n SIC-20BCEE09",
        },
        {
            name: "Arjyabrat",
            image: arjyaImage,
            des: "Hello, I am a 3rd year B-Tech student in the Computer Science and Engineering (CSE) branch at Silicon Institute of Technology, Bhubaneswar. With a passion for technology and a dedication to learning, I strive for excellence in my studies and aim to make a meaningful contribution to the field of computer science.\n SIC-20BCSE66",
        },
        {
            name: "Soumendra Pradhan",
            image: somuImage,
            des: "Hello, I am a 3rd year B-Tech student in the Computer Science and Engineering (CSE) branch at Silicon Institute of Technology, Bhubaneswar. With a passion for technology and a dedication to learning, I strive for excellence in my studies and aim to make a meaningful contribution to the field of computer science.\n SIC-21BCSL08",
        },
    ];

    return (
        <div className="s_about">
            <div class="s_set">
                <h1>About Us</h1>
                <div id="linemovement"></div>
            </div>
            <p>
                We are a passionate team dedicated to providing exceptional solutions and experiences tailored to your needs
            </p>
            <div className="s_Card">
                {members.map((member, index) => (
                    <MemberCard
                        key={index}
                        name={member.name}
                        image={member.image}
                        des={member.des}
                    />
                ))}
            </div>
        </div>
    );
};

export default About;