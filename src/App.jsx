import Header from './Composants/Header'
import Main from './Composants/Main'
import CountrieContext from './Hook/CountrieContext';




function App() {
  return (
    <div className="App bg-blue-950">

       <CountrieContext>
          <Header></Header>
          <Main></Main>
       </CountrieContext>
    </div>
  );
}

export default App;