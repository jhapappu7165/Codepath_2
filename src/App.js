import React, { useState } from 'react';
import Flashcard from './Flashcard';
import './App.css';

function App() {
  const cards = [
    {
      question: "Which Durbar Square in Nepal is located at the heart of the capital city?",
      answer: "Kathmandu Durbar Square",
      color: "#f8de7e"
    },
    {
      question: "Which Durbar Square in Nepal is famous for its Krishna Temple built entirely of stone?",
      answer: "Patan Durbar Square",
      color: "#c3f0ca"
    },
    {
      question: "Which Durbar Square in Nepal is known for its Nyatapola Temple?",
      answer: "Bhaktapur Durbar Square",
      color: "#ffc9de"
    },
    {
      question: "Which UNESCO World Heritage Site in Nepal is also called the Monkey Temple?",
      answer: "Swayambhunath Stupa",
      color: "#bde0fe"
    },
    {
      question: "Which is the largest spherical stupa in Nepal?",
      answer: "Boudhanath Stupa",
      color: "#fcd5ce"
    },
    {
      question: "Which sacred Hindu temple in Kathmandu is dedicated to Lord Shiva?",
      answer: "Pashupatinath Temple",
      color: "#d0f4de"
    },
    {
      question: "Which ancient Hindu temple in Bhaktapur is the oldest temple inscription found in Nepal?",
      answer: "Changu Narayan Temple",
      color: "#f6bd60"
    },
    {
      question: "What is the birthplace of Lord Buddha, located in southern Nepal?",
      answer: "Lumbini",
      color: "#ffdac1"
    },
    {
      question: "Which national park in Nepal is home to the endangered one-horned rhinoceros?",
      answer: "Chitwan National Park",
      color: "#e4c1f9"
    },
    {
      question: "Which national park in Nepal includes Mount Everest?",
      answer: "Sagarmatha National Park",
      color: "#a0c4ff"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [shuffledCards, setShuffledCards] = useState(cards);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isStart, setIsStart] = useState(true); // NEW

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
    if (isStart) {
      setIsStart(false);
      setCurrentIndex(0);
      setIsFlipped(false);
      setFeedback('');
      setUserGuess('');
    } else if (currentIndex < shuffledCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
      setFeedback('');
      setUserGuess('');
    }
  };

  const handlePrev = () => {
    if (!isStart && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
      setFeedback('');
      setUserGuess('');
    }
  };

  const handleShuffle = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
    setIsStart(false);
    setCurrentIndex(0);
    setIsFlipped(false);
    setFeedback('');
    setUserGuess('');
    setCurrentStreak(0);
  };

  const handleCardClick = () => {
    if (isStart) {
      setIsFlipped(!isFlipped);
    } else {
      setIsFlipped(!isFlipped);
    }
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
        displayText={
          isStart
            ? (isFlipped ? "Press the next arrow to start the flashcards :)" : "Start!")
            : (isFlipped ? shuffledCards[currentIndex].answer : shuffledCards[currentIndex].question)
        }
        color={
          isStart
            ? "#f5f5f5"
            : shuffledCards[currentIndex].color
        }
        onCardClick={handleCardClick}
      />

      <div className="bottom-container">
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
          <button onClick={handlePrev} disabled={isStart || currentIndex === 0}>←</button>
          <button onClick={handleNext} disabled={!isStart && currentIndex === shuffledCards.length - 1}>→</button>
          <button onClick={handleShuffle}>Shuffle Cards</button>
        </div>
      </div>
    </div>
  );
}

export default App;
