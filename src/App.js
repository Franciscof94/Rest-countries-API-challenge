import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Countries from './Components/Countries/Countries';
import Country from './Components/Country/Country';
import Header from './Components/Header/Header';
import GlobalStyle from './GlobalStyles';

function App() {

  const [isDarkMode, setDarkMode] = useState(false);
  


  return (
    <div className="App">
    <GlobalStyle isDarkMode={isDarkMode} />
        <Router>
            <Header setDarkMode={setDarkMode} isDarkMode={isDarkMode} />
          <Routes>
              <Route path="/" exact element={<Countries isDarkMode={isDarkMode}  />}></Route>
              <Route path="/:country" element={<Country isDarkMode={isDarkMode}  />}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
