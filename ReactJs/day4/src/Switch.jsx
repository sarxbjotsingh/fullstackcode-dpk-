import React, { useState } from 'react';

function Switch() {
    const [val1, setVal1] = useState('');
    const [val2, setVal2] = useState('');

    const handleChange = () => {
        setVal1(val2);
        setVal2(val1);
    };

    return (
        <>
            <input type="text" value={val1} onChange={(e) => setVal1(e.target.value)} />
            <input type="text" value={val2} onChange={(e) => setVal2(e.target.value)} />
            <button onClick={handleChange}>Swap</button>
        </>
    );
}

export default Switch;
