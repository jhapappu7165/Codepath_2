import React, { useState } from 'react';
import Flashcard from './Flashcard';
import './App.css';

function App() {
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [shuffledCards, setShuffledCards] = useState(cards);

  const handleGuessSubmit = () => {
    const correctAnswer = shuffledCards[currentIndex].answer.toLowerCase().trim();
    const userAnswer = userGuess.toLowerCase().trim();

    if (correctAnswer === userAnswer) {
      setFeedback('✅ Correct!');
      const newStreak = currentStreak + 1;
      setCurrentStreak(newStreak);
      if (newStreak > longestStreak) {
        setLongestStreak(newStreak);
      }
    } else {
      setFeedback('❌ Incorrect, try again!');
      setCurrentStreak(0); // reset streak
    }
  };

  const handleNext = () => {
    if (currentIndex < shuffledCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setFeedback('');
      setUserGuess('');
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setFeedback('');
      setUserGuess('');
    }
  };

  const handleShuffle = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
    setCurrentIndex(0);
    setFeedback('');
    setUserGuess('');
    setCurrentStreak(0);
  };

  return (
    <div className="App">
      <div className="header-container">
        <h1>The Ultimate Nepal Heritage Explorer!</h1>
        <p>How well do you know World Heritage Sites of Nepal? Test your knowledge here!</p>
        <p>Number of cards: {cards.length}</p>
        <p>Current Streak: {currentStreak}, Longest Streak: {longestStreak}</p>
      </div>

      <Flashcard
        displayText={shuffledCards[currentIndex].question}
        color={shuffledCards[currentIndex].color}
        onCardClick={() => {}}
      />

      <div style={{ marginTop: '10px' }}>
        <label>
          <strong>Guess the answer here:</strong>{' '}
          <input
            type="text"
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
            placeholder="Place your answer here..."
          />
        </label>
        <button onClick={handleGuessSubmit}>Submit Guess</button>
      </div>

      <p>{feedback}</p>

      <div style={{ marginTop: '10px' }}>
        <button onClick={handlePrev} disabled={currentIndex === 0}>←</button>
        <button onClick={handleNext} disabled={currentIndex === shuffledCards.length - 1}>→</button>
        <button onClick={handleShuffle}>Shuffle Cards</button>
      </div>
    </div>
  );
}

export default App;