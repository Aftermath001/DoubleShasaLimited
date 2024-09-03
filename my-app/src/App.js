import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';

function App() {
  return (
    <div  className="app">
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Layout/>}>
            
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
