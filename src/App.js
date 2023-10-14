import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar';
import './App.css';
import { UserList } from './pages/UserList';
import { Home } from './pages/Home';
import { UserForm } from './pages/UserForm';
import { FaHome, FaPlus, FaList } from 'react-icons/fa';
import fileSys from './images/fileSys.png';


function App() {
  return (
    <div style={({ height: "100vh" }, { display: "flex" })}>
      <BrowserRouter>
        <Sidebar className='sidebarStyle'>
          <div>
            <img className="imageStyle" src={fileSys} alt="File System"/>
          </div>
          <Menu className='menuStyle'>
            <MenuItem>
              <h2>
                <Link to={'/'} className='itemStyle'>
                <FaHome /> Home
                </Link>
              </h2>
            </MenuItem>
            <MenuItem>
              <h2>
                <Link to={'/userList'} className='itemStyle'>
                <FaList /> User list
                </Link>
              </h2>
            </MenuItem>
            <MenuItem>
              <h2>
                <Link to={'/userForm'} className='itemStyle'>
                <FaPlus /> Add User
                </Link>
              </h2>
            </MenuItem>
          </Menu>
        </Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userList" element={<UserList />} />
          <Route path="/userForm" element={<UserForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;