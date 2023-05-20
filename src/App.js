import {Header} from './components/Header'
import {Main} from './components/Main'
import {Sidebar} from './components/Sidebar'
import {Footer} from './components/Footer'
import './App-grid.css'

function App() {
  return (
    <div className='App'>
        <Header />
        <Main />
        <Sidebar />
        <Footer />
    </div>
  );
}

export default App;
