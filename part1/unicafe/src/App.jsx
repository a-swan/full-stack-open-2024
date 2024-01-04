import { useState } from 'react';
import { Header } from './Header';
import { Button } from './Button';
import { Statistics } from './Statistics';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header heading="Give Feedback" />

      <Button label="good" onButtonClicked={() => setGood(good + 1)} />
      <Button label="neutral" onButtonClicked={() => setNeutral(neutral + 1)} />
      <Button label="bad" onButtonClicked={() => setBad(bad + 1)} />

      <Header heading="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
