import { useState } from 'react'
import Home from './pages/home';
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-dark">
        <div>
          <Home />
        </div>
        <div>
          <div className="author-info">
            Coded by <a href="#">John Muriithi</a> | Challenge by
            <a
              href="https://www.devchallenges.io?ref=challenge"
              target="_blank"
            >
              devChallenges.io
            </a>
          </div>
        </div>
    </div>
  );
}

export default App
