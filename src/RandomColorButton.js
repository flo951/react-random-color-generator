import { useState } from 'react';
import randomColor from 'randomcolor';

export default function RandomColorButton() {
  const [color, setColor] = useState();

  const handleGenerate = () => {
    const color = randomColor();
    setColor(color);

    console.log(color);
  };
  return (
    <div style={{ backgroundColor: color }} className="container">
      <button onClick={handleGenerate} backgroundcolor={color}>
        Generate {color}
      </button>
    </div>
  );
}
