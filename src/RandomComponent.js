import React, {
  useState,
  useEffect,
  useContext
} from 'react';

import { AwesomeContext } from './ContextProvider';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '30vh',
    paddingTop: '30px',
  },
}

export default function RandomComponent() {
  // State Hooks
  const [counter, setCounter] = useState(0);
  const [textFromButton, setTextFromButton] = useState('lel from button');
  const [textFromEffect, setTextFromEffect] = useState('Loading...');

  // Context Hooks
  const awesomeContext = useContext(AwesomeContext);

  // Effects Hooks
  useEffect(() => {
    console.log('In effect hook!');
    setInterval(

      () => setTextFromEffect('After render!'), 3000
    )
  }, []);
  // [] as second argument prevents infinite loop, making the effect only run once

  // Handlers
  const handleClick = () => setTextFromButton('new lel from button');
  const handleIncrease = () => setCounter(counter + 1);
  const handleDecrease = () => setCounter(counter - 1);
  return (
    <React.Fragment>
      <div style={styles.container}>
        {counter}
        <div>
          <button onClick={handleDecrease}>Less</button>
          <button onClick={handleIncrease}>More</button>
        </div>
      </div>
      <div style={styles.container}>
        {textFromButton}
        <button onClick={handleClick}>Click me to change text!</button>
      </div>
      <div style={styles.container}>
        {textFromEffect}
      </div>
      <div style={styles.container}>
        {awesomeContext.awesomeVariable}
      </div>
    </React.Fragment>
  );
}