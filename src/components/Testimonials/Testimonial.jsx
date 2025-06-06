import { useState } from 'react';
import './testimonial.css'


const cards = [
  { title: 'Card 1', content: 'This is the first card.' },
  { title: 'Card 2', content: 'This is the second card.' },
  { title: 'Card 3', content: 'This is the third card.' },
  { title: 'Card 4', content: 'This is the fourth card.' },
];

const Testimonial = () => {
  const [currentIndex,setCurrentIndex] = useState(0);  
 const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className='testimonial-container'>
  <button onClick={handlePrev}>◀</button>
      
      <div>
        <h2>{cards[currentIndex].title}</h2>
        <p>{cards[currentIndex].content}</p>
      </div>

      <button onClick={handleNext}>▶</button>
    </div>
  )
}

export default Testimonial