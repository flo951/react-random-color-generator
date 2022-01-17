import randomcolor from 'randomcolor';
import AdvancedButton from './AdvancedButton';
import './App.css';
import RandomColorButton from './RandomColorButton';

function App() {
  return (
    <div>
      <div>
        <RandomColorButton />
      </div>
      <div>
        <AdvancedButton />
      </div>
    </div>
  );
}

export default App;
