import './App.css';
import { Route, Routes } from "react-router"
import Main from './Components/Main'
import Dashboard from "./Components/DashBoard"
import Subscriptions from './Pages/Subscriptions';
import IdVerification from './Pages/IdVerification';
import Settings from "./Pages/Settings"

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path='/' element={<Main />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='subscriptions' element={<Subscriptions />} />
          <Route path='id-verification' element={<IdVerification />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
