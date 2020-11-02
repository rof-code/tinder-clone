
import './App.css';
import Header from './Header.js';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
function App() {
  //BEM convertion name app
  return (
    <div className="app">
     <Header />
     <TinderCards />
     <SwipeButtons />
    </div>
  );
}

export default App;
