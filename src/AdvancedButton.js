import { useState } from 'react';
import randomColor from 'randomcolor';

export default function AdvancedButton() {
  const [hue, setHue] = useState('');
  const [lum, setLum] = useState('');

  const [color, setColor] = useState();

  const handleGenerate = () => {
    const color = randomColor({
      luminosity: { lum },
      hue: { hue },
    });

    setColor(color);
  };

  return (
    <div className="body">
      <div style={{ backgroundColor: color }} className="container">
        <button onClick={handleGenerate}>Generate</button>
      </div>
      <label>
        {' '}
        Type in a hue
        <input
          value={hue}
          onChange={(event) => {
            setHue(event.currentTarget.value);
          }}
        />
      </label>
      <label>
        {' '}
        Type in a hue
        <input
          value={lum}
          onChange={(event) => {
            setLum(event.currentTarget.value);
          }}
        />
      </label>
      {hue} {color}
    </div>
  );
}
