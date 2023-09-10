import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
import Users from "./Users";
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Users />}></Route>
      <Route path='/create' element={<CreateUser />}></Route>
      <Route path='/edit/:id' element={<UpdateUser />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
