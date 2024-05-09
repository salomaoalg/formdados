import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import FormDados from './Components/FormDados';


function App() {
  return (
    <div className="App">
      <h1>Pagina Principal</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="formdados" element={<FormDados/>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
