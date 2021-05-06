import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={Home}/>
        <Route path = "/about" component={About}/>
        <Route path = "/login" component={Login}/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
