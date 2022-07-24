import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Landing from './components/landing/Landing';
import HomePage from './components/landing/Homepage';

const AppRouter = () => {

    return(
        <div>
            <Routes>
                <Route path='/' element={<Landing/>} />
                <Route path='/home' element={<HomePage/>} />
            </Routes>
        </div>
    );

}

export default AppRouter;