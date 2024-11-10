import Notepad from './components/Notepad';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NotesProvider } from './context/NotesContext';
function App() {
  return (
   
    <div>
      <Notepad/>
    </div>
   
  );
}

export default App;
