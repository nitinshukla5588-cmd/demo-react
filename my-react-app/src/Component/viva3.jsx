import { useState } from 'react';
export default function LiveInput() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Live Input Display</h1>
      
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
        style={{
          padding: '10px',
          fontSize: '16px',
          width: '300px',
          border: '2px solid #ffffff',
          borderRadius: '4px'
        }}
      />

      <div style={{ marginTop: '20px' }}>
        <h2>Live Display:</h2>
        <p style={{ fontSize: '18px', color: '#e22323' }}>
          {inputValue || '(Start typing...)'}
        </p>
      </div>
    </div>
  );
}
