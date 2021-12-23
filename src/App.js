import logo from './logo.svg';
import './App.css';
import TopNavbar from './components/TopNavbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNavbar from './components/SideNavbar';
import Filter from './components/Filter';
import { Provider } from 'react-redux';
import store from './redux/store'
import Dashboard from './Pages/Dashboard'
import CreateAsset from './Pages/CreateAsset';
import ViewAsset from './Pages/ViewAsset';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <SideNavbar /> 
            <Routes>
              <Route path="/asset" element={<ViewAsset />} />
              <Route path="/createasset" element={<CreateAsset />} />
            </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
