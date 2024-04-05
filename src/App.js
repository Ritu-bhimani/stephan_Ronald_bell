import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header';
import Description from './components/description';
import Details from './components/details';

function App() {
  return (
    <div className="App">
      <div className='container mx-auto'>



        <BrowserRouter>
          <Routes>
            {/* <Route element={<Header />}></Route> */}
            <Route path='/' element={<Description />}></Route>
            <Route path='/read_more' element={<Details />}></Route>
          </Routes>

        </BrowserRouter>
      </div>
    </div>

  );
}

export default App;
