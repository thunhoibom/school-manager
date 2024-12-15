import Login from '../src/container/Login/Login.jsx';
import Menu from '../src/container/Menu/Menu.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';

import Account from './container/Menu/Account/Account.jsx';
import Scores from './container/Menu/Scores/Scores.jsx';
import Subjects from './container/Menu/Subjects/Subjects.jsx';
import QuanLyThoiKhoaBieu from './container/Menu/quanLyThoiKhoaBieu/QuanLyThoiKhoaBieu.jsx';
import QuanLyLichKiemTra from './container/Menu/quanLyLichKiemTra/QuanLyLichKiemTra.jsx';
import QuanLyHocSinh from './container/Menu/quanLyHocSinh/QuanLyHocSinh.jsx';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />}></Route>
        <Route path="menu" element={<Menu />}>
          <Route path="account" element={<Account />}></Route>
          <Route path="scores" element={<Scores />}></Route>
          <Route path="subjects" element={<Subjects />}></Route>
          <Route path="schedule" element={<QuanLyThoiKhoaBieu />}></Route>
          <Route path="exams" element={<QuanLyLichKiemTra />}></Route>
          <Route path="students" element={<QuanLyHocSinh />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
