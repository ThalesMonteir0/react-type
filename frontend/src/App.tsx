import React from 'react';
import {Route, Routes} from 'react-router-dom'
import HomeScreen from './components/screens/HomeScreen';
import ProductScreen from './components/screens/ProductScreen';



function App() {
    

  return(
        <div className="grid-container">
            <header className="row">
                <div>
                    <a className="brand" href="/">SportStore</a>
                </div>
                <div>
                    <a href="">Cart</a>
                    <a href="#">Sign in</a>
                </div>
            </header>
            <main>
            <Routes>
                    <Route  path="/" element={<HomeScreen/>}/>
                    <Route  path="/product/:id" element={<ProductScreen/>}/>
            </Routes>
            </main>
        </div>
  )
};


export default App;
