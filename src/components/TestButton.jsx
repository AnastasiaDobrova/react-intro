import React, { useState, useEffect } from 'react';

const TestButton = () => {

    const [count, setCount] = useState(3);
    const [hasData, setHasData] = useState(false);

    useEffect(() => {
        // K�rs n�r komponenten har renderats f�rsta g�ngen
        // och varje g�ng komponenten uppdateras
        console.log('useEffect k�rs');
        document.title = 'Running useEffects...';

    })

    useEffect(() => {
        // K�rs n�r komponenten har renderats f�rsta g�ngen
        // H�r passar det att starta ett asyncroint API-anrop
        console.log('useEffect []');
    }, [])

    useEffect(() => {
        // K�rs n�r komponenten har renderats f�rsta g�ngen
        // och n�r count uppdateras
        console.log(' useEffects k�rs - count har �ndrats', count);
    }, [count])

    useEffect(() => {
        // K�rs n�r komponenten har renderats f�rsta g�ngen
        // och n�r hasData uppdateras
        console.log(' useEffects k�rs - hasData har �ndrats', hasData);
    }, [hasData])

    console.log("TestButton function k�rs");

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