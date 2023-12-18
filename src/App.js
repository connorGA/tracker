import logo from './logo.svg';
import './App.css';
import {DateComponent} from './DateComponent';
import { CodeColumn } from './CodeColumn';
import { MusicColumn } from './MusicColumn';
import { ExcerciseColumn } from './ExcerciseColumn';
function App() {
  return (
    <div>
      <>
      <DateComponent />
      <CodeColumn />
      <MusicColumn />
      <ExcerciseColumn />
  
      </>
      {/* Your main app content goes here */}
    </div>
  );
};




export default App;
