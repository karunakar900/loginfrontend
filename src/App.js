import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Logincomponent from './components/Logincomponent';
import Signupcomponent from './components/Signupcomponent';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Logincomponent />} />
                <Route path="/register" element={<Signupcomponent />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
