import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from "./components/Header";
import { CharactersList } from './components/CharactersList';
import { CharacterDetails } from './components/CharacterDetails';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header name="Jenny" />
          <Routes>
            <Route exact path='/' element={<CharactersList/>} />
            <Route path='/character/:id' element={<CharacterDetails/>}/>
          </Routes> 
      </Router>
    </div>
  );
}

export default App;
