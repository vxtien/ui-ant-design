import './App.css';
import 'antd/dist/reset.css';
import Addmin from './components/Admin';
import { Route, Routes } from 'react-router-dom';
import Demo from './components/Demo';

function App() {
  return (
    <div className="App">
      <Addmin/>
      {/* <Demo/> */}
      <Routes>
        <Route path='/'></Route>
        <Route path='/setting-fee'></Route>
        <Route path='/setting-fee-receiver'></Route>
      </Routes>
    </div>
  );
}

export default App;
