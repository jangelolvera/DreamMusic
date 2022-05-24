import './App.css';
import { Fragment, useEffect, useState } from 'react';
import {
  BrowserRouter as
  Router,
  Route,
  Routes,
} from "react-router-dom";
import {Instruments} from './components';
import {Courses} from './components';

function App() {

  const [products, setProducts] = useState([]);

  async function test() {
    
    const response = await fetch(`/api/test`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    const res = await response.json()
    console.log(res[1])

    var newProducts= [];

    for (let i = 0; i < res.length; i++) {
      newProducts.push(res[i]);
    }

    setProducts(newProducts);

    console.log(newProducts[1].id);
  }
  useEffect(() => {
    test()
  }, [])

  return (

      <Router>
        <Routes>

          <Route path="/" element={<Instruments products={products}/>}></Route>
          <Route path="/cursos" element={<Courses/>}></Route>
          


        </Routes>
      </Router>
 
  );
}

export default App;
