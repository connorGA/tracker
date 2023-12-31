import logo from './logo.svg';
import './App.css';
import Calendar from './Calendar';
import { CodeColumn } from './CodeColumn';
import { MusicColumn } from './MusicColumn';
import { ExcerciseColumn } from './ExcerciseColumn';
function App() {
  return (
    <div>
      <>
      <Calendar />
      <CodeColumn />
      <MusicColumn />
      <ExcerciseColumn />
  
      </>
      {/* Your main app content goes here */}
    </div>
  );
};




export default App;
