import React, { useState } from 'react';
import Flashcard from './Flashcard';
import './App.css';

const cards = [
  {
    question: "Which city is home to the famous Swayambhunath Stupa (Monkey Temple)?",
    answer: "Kathmandu",
    color: "#f8de7e"
  },
  {
    question: "Which ancient palace complex is listed as a World Heritage Site in Kathmandu?",
    answer: "Hanuman Dhoka Durbar Square",
    color: "#c3f0ca"
  },
  {
    question: "Which World Heritage Site is known for its medieval architecture in Bhaktapur?",
    answer: "Bhaktapur Durbar Square",
    color: "#ffc9de"
  },
  {
    question: "What is the main religious site in Lumbini?",
    answer: "Maya Devi Temple",
    color: "#bde0fe"
  },
  {
    question: "Which national park is famous for one-horned rhinoceroses?",
    answer: "Chitwan National Park",
    color: "#fcd5ce"
  },
  {
    question: "Where is Pashupatinath Temple located?",
    answer: "Kathmandu",
    color: "#d0f4de"
  },
  {
    question: "What is the name of the ancient Buddhist monastery in Patan?",
    answer: "Hiranya Varna Mahavihar",
    color: "#f6bd60"
  },
  {
    question: "Which mountain region is listed as a World Heritage Site?",
    answer: "Sagarmatha National Park",
    color: "#ffdac1"
  },
  {
    question: "Which site in Kathmandu valley is known for its five-story temple Nyatapola?",
    answer: "Bhaktapur",
    color: "#e4c1f9"
  },
  {
    question: "Which historical temple is dedicated to the Hindu god Krishna in Patan?",
    answer: "Krishna Mandir",
    color: "#a0c4ff"
  }
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(-1);  // -1 = Start!
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    let randomIndex = Math.floor(Math.random() * cards.length);
    setCurrentIndex(randomIndex);
    setIsFlipped(false);  // always reset to question side
  };

  const handleCardClick = () => {
    if (currentIndex === -1) {
      // If Start! card is clicked
      alert("Press the arrow button to start the flashcards :)");
    } else {
      setIsFlipped(!isFlipped);  // Flip the card
    }
  };

  return (
    <div className="App">
      <h1>The Ultimate Nepal Heritage Explorer!</h1>
      <p>How well do you know Nepal’s World Heritage Sites? Test your knowledge here!</p>
      <p>Number of cards: {cards.length}</p>

      <Flashcard
        displayText={
          currentIndex === -1
            ? "Start!"
            : isFlipped
              ? cards[currentIndex].answer
              : cards[currentIndex].question
        }
        color={
          currentIndex === -1
            ? "#f5f5f5"
            : cards[currentIndex].color
        }
        onCardClick={handleCardClick}
      />

      <button onClick={handleNext} className="next-button">→</button>
    </div>
  );
}

export default App;

// npm start