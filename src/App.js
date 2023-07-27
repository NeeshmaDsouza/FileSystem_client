import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { UserList } from './pages/UserList';
import { UserForm } from './pages/UserForm';
import { Sidebar } from 'react-pro-sidebar';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="UserList" element={<UserList />} />
        <Route path="userForm" element={<userForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
