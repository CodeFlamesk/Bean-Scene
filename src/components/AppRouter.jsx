import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '@pages/Home'; // Імпорт домашньої сторінки

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    );
};

export default AppRouter;
