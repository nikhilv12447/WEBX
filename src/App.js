import './App.css';
import { Route, Routes } from "react-router"
import Main from './Components/Main'
import Dashboard from "./Components/DashBoard"
import Subscriptions from './Pages/Subscriptions';
import IdVerification from './Pages/IdVerification';
import Settings from "./Pages/Settings"
import Home from './Pages/Home';
import EthneenCommunity from './Pages/EthneenCommunity';
import { useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState(false)

  if (isLogin) {
    return (
      <div className="App">
        <Routes >
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

  return <div className="App max-w-[1440px] mx-auto">
    <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/community' element={<EthneenCommunity />} />
    </Routes>
  </div>
}

export default App;
