import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TestButton from './components/TestButton';
import Clock from './components/Clock';

function App() {
    const [showClock, setShowClock] = useState(true);

    let maybeClock = null;
    if (showClock) {
        maybeClock = <Clock />
    }


    return (
        <div className="App">
            <header className="App-header">
                <h1>Effects demo</h1>
            </header>
            <main>
                <TestButton />

                <button onClick={() => setShowClock(!showClock)}>Toggle clock</button>
                {maybeClock}
            </main>
        </div>
    );
}

export default App;