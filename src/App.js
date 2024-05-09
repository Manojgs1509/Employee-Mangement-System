
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';
import EmployeeList from './Components/EmployeeList';
import { AddEmployee } from './Components/AddEmployee';


function App() {
  return (
    <div className="App">
      <Header/>
      <Footer/>
       <BrowserRouter>
           <div className='container'>
              <Routes>
                  <Route index path='/' element={<EmployeeList/>}/>
                  <Route  path='/employee-list' element={<EmployeeList/>}/>
                   <Route path='add-employee' element={<AddEmployee/>}/>
                   <Route path='/edit-employee/:id' element={<AddEmployee/>}/>
              </Routes>
           </div>
       </BrowserRouter>
    </div>
  );
}

export default App;
