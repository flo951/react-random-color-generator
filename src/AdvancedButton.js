import { useState } from 'react';
import randomColor from 'randomcolor';

export default function AdvancedButton() {
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
        <button onClick={() => setColor(randomColor(hueLum))}>Generate</button>
        <div>
          {hue} {lum} <p>Generated Color: {color}</p>
        </div>
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
