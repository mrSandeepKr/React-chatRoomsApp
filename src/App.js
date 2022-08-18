import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className='app__body'>
        <Router>
          <Sidebar />
          <Routes>
            <Route path='/' element={<Chat />}>
              <Route path='room' element={<Chat />}>
                <Route path=':roomId' element={<Chat />} />
              </Route>
            </Route>
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </Router>
      </div >
    </div >
  );
}

export default App;
