import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Landing from './components/Landing/Landing';

const AppRouter = () => {

    return(
        <div>
            <Routes>
                <Route path='/' element={<Landing/>} />
            </Routes>
        </div>
    );

}

export default AppRouter;