import { Router, Route } from 'wouter'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Newsletter from './pages/Newsletter'
import './App.css'

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/newsletter" component={Newsletter} />
    </Router>
  )
}

export default App