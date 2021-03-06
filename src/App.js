import './App.css';
import { useState } from 'react';
import randomColor from 'randomcolor';

export default function App() {
  const [hue, setHue] = useState('');
  const [lum, setLum] = useState('');
  const [color, setColor] = useState();

  const hueLum = {
    luminosity: lum,
    hue: hue,
  };

  return (
    <div className="body">
      <div style={{ backgroundColor: color }} className="container">
        Generated Color: {color}
      </div>
      <button
        style={{ backgroundColor: color }}
        onClick={() => setColor(randomColor(hueLum))}
      >
        Generate
      </button>
      <div>
        {hue} {lum}
        <div style={{ backgroundColor: color }} />
      </div>
      <label>
        Type in a hue:
        <input
          value={hue}
          onChange={(event) => {
            setHue(event.currentTarget.value);
          }}
        />
      </label>
      <label>
        Type in a lum:
        <input
          value={lum}
          onChange={(event) => {
            setLum(event.currentTarget.value);
          }}
        />
      </label>
    </div>
  );
}
