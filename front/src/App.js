import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
