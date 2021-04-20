import React, { useState, useEffect } from 'react';

const TestButton = () => {

    const [count, setCount] = useState(3);
    const [hasData, setHasData] = useState(false);

    useEffect(() => {
        // Körs när komponenten har renderats första gången
        // och varje gång komponenten uppdateras
        console.log('useEffect körs');
        document.title = 'Running useEffects...';

    })

    useEffect(() => {
        // Körs när komponenten har renderats första gången
        // Här passar det att starta ett asyncroint API-anrop
        console.log('useEffect []');
    }, [])

    useEffect(() => {
        // Körs när komponenten har renderats första gången
        // och när count uppdateras
        console.log(' useEffects körs - count har ändrats', count);
    }, [count])

    useEffect(() => {
        // Körs när komponenten har renderats första gången
        // och när hasData uppdateras
        console.log(' useEffects körs - hasData har ändrats', hasData);
    }, [hasData])

    console.log("TestButton function körs");

    return (
        <div>
            <div>
                <button onClick={() => setCount(count + 1)} >Tryck!</button>
                {count}
            </div>
            <div>
                <button onClick={() => setHasData(true)}>Simulate get data from API</button>
            </div>
        </div>
    )
}

export default TestButton;