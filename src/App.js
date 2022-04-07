
import './App.css';
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import User from './pages/User';
import { GitHubProvider } from './context/github/GitHubContext';
import { AlertProvider } from './context/alert/AlertContext';

function App() {
  return (
    <GitHubProvider>
      <AlertProvider>
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar/>
        <main className='flex flex-col justify-between h-screen'>
          <Routes>

            {['/','/home'].map((path)=> (<Route path={path} element={<Home/>} key={Date.now()}/>) )}

            <Route path='/about' element={<About/>}/>

            <Route path='/notfound' element={<NotFound/>}/>
            
            <Route path='/user/:logn' element={<User/>}/>

          </Routes>
          
        </main>
        
      </div>
    </Router>
    </AlertProvider>
    </GitHubProvider>
  );
}

export default App;
