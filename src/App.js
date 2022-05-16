import { Routes, Route} from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';

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
      <Routes>

        <Route path='/' element={<Navigation />}>
          {/* index property tells react to render component Home on the home page "/" */}
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        </Route>
      </Routes>

    </div>
  );
};

export default App;
