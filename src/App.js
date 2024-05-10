import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import FormDados from './Components/FormDados';
import HomePrincipal from './Pages/HomePrincipal';
import Nav from './Pages/Nav';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Nav/>
        <Routes>
          <Route path="/" element={<HomePrincipal/>}/>
          <Route path="formdados" element={<FormDados/>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
