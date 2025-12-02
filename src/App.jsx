import { BrowserRouter  as Router , Route , Routes } from 'react-router-dom';
import Header from './Composants/Header'
import Main from './Composants/Main'
import CountrieContext from './Hook/CountrieContext';
import Home from './Page/Home';
import DetailPays from './Page/DetailPays';





function App() {
  return (

    <Router>

       <div className="App bg-blue-950 min-h-full">
       <CountrieContext>
          <Header></Header>
          <Routes>
               
               <Route path='/' element={<Home/>} />
               <Route path='/pays/:name' element={<DetailPays/>} />
              
          </Routes>
       </CountrieContext>
      </div>


    </Router>
   
  );
}

export default App;