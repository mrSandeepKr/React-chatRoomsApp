import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/LogIn/Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{user}] = useStateValue();

  return (
    <div className="app">
      {!user ? <Login/>:<LoggedInUser/>}
    </div>
  )
}

const LoggedInUser = () => {
  return (
      <div className='app__body'>
        <Router>
          <Sidebar />
          <Routes>
            <Route path='/' element={<Chat />}>
              <Route path='room' element={<Chat />}>
                <Route path=':roomId' element={<Chat />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </div >
  );
}

export default App;
