import './App.css';
import { Route, Routes } from "react-router"
import Main from './Components/Main'
import Dashboard from "./Components/DashBoard"
import Subscriptions from './Pages/Subscriptions';
import IdVerification from './Pages/IdVerification';
import Settings from "./Pages/Settings"
import Home from './Pages/Home';
import EthneenCommunity from './Pages/EthneenCommunity';

function App() {

  return (
    <div className="App">
      <Routes >
        <Route path='/home' element={<Home />} />
        <Route path='/community' element={<EthneenCommunity />} />
        <Route path='/' element={<Main />}>
          <Route index element={<Dashboard />} />
          <Route path='subscriptions' element={<Subscriptions />} />
          <Route path='id-verification' element={<IdVerification />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
