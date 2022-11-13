import React from 'react';
import './QuizSection.css';
import img1 from './assets/12WCF4D0-ineonlife-game-shaped-neon-signs-neon.jpg';
import img2 from './assets/609d3fbafedbcd581b25f845_1620918202171.jpg';
import img3 from './assets/ea61d622cd87b6a9235885a640563481.jpg'

const data = [
    {
        id:1,
        img: img1,
        title: "Upcoming Quiz",
        desc: "Show off your smarts with actively participating in these cool trivia questions"
    },
    {
        id:2,
        img: img2,
        title: "Upcoming Quiz",
        desc: "Show off your smarts with actively participating in these cool trivia questions"
    },
    {
        id:3,
        img: img3,
        title: "Upcoming Quiz",
        desc: "Show off your smarts with actively participating in these cool trivia questions"
    }
]
function QuizSection() {
  return (
    <>
    <center>
    <div className='quizpart'>
    <h2 className='participate'>Participate in Trivias and earn +7 Entries</h2>
    </div>
        <div className='quizcards'>
            {data.map((image)=>

                <div className='card'>
                    <img src={image.img}/>
                    <h3>{image.title}</h3>
                    <p>{image.desc}</p>
                </div>
            )}
        </div>
    </center>
    </>
  )
}

export default QuizSection