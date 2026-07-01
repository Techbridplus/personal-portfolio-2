import { useState, useEffect } from 'react';

export function Typewriter({ words }: { words: string[] }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    let typingSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && currentText === word) {
      typingSpeed = 2000; // Pause at end of word
      setIsDeleting(true);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
      typingSpeed = 500; // Pause before next word
    }

    const timer = setTimeout(() => {
      setCurrentText(
        isDeleting
          ? word.substring(0, currentText.length - 1)
          : word.substring(0, currentText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className="font-mono text-transparent bg-clip-text bg-gradient-to-r from-sky-glow to-cerulean font-bold">
      {currentText}
      <span className="animate-pulse text-sky-glow">|</span>
    </span>
  );
}
