import React, { useState } from 'react';

type Result = {
  image: string;
  text: string;
};

const results: Result[] = [
  {
    image: 'https://farm6.staticflickr.com/5343/30212993894_85351f21ba.jpg',
    text: 'You won a prize!'
  },
  {
    image: 'https://live.staticflickr.com/65535/49389103952_ff4b2cf256.jpg',
    text: 'Better luck next time.'
  },
  {
    image: 'https://www.meme-arsenal.com/memes/a8de9f6b7f517e3cf04ae0593f5b05b6.jpg',
    text: 'Congratulations! You won a big prize!'
  }
];

const Lottery: React.FC = () => {
  const [showGif, setShowGif] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  const handleClick = () => {
    setResult(null);
    setShowGif(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * results.length);
      setResult(results[randomIndex]);
      setShowGif(false);
    }, 3000);
  };

  return (
    <div>
      {showGif && (
        <img src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif" alt="loading" />
      )}
      {result && (
        <>
          <img src={result.image} alt="result" />
          <p>{result.text}</p>
        </>
      )}
      {!showGif && (<button onClick={handleClick}>Play</button>)}
    </div>
  );
};

export default Lottery;
