import React, {useEffect, useState} from 'react';
import Socials from './Socials';

import '../css/Header.css';
import header from '../data/info.json';

export default function Header() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTextVisible(false);
      setTimeout(() => {
        setCurrentMessageIndex(prevIndex =>
          prevIndex >= header.headlines.length - 1 ? 0 : ++prevIndex
        );
        setIsTextVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <header className='App-header'>
      <h1>{header.name}</h1>
      <h2 style={{ opacity: isTextVisible ? 1 : 0, transition: 'opacity 0.5s' }}>{header.headlines[currentMessageIndex]}</h2>
      <Socials />
    </header>
  );
}