import {  BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

import React from 'react'

const Shop = () => {
  return (
    <div>
      <h1>I am the shop component</h1>
    </div>
  )
}


const App = () => {

  return (
    <div>
      <BrowserRouter>


      <Routes>
        <Route path='/' element={<Navigation />}>

        {/* index property tells react to render component Home on the home page "/" */}
        <Route index element={<Home />} />

        <Route path='/shop' element={<Shop />} />

        <Route path='/sign-in' element={<SignIn />} />

        </Route>
      </Routes>

    </BrowserRouter>
    </div>
  );
};

export default App;
