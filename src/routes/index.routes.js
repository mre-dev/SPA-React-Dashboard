import { PATHS } from 'configs/routes.config';

import {
    NotFoundPage,
    UsersPage,
    AboutPage
} from 'pages';

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicRtoutes } from './public.routes';

export function AppRouting() {
    return(
        <BrowserRouter>
                <Routes>
                    <Route element={<PublicRtoutes/>}>
                        <Route path={PATHS.HOME} element={<UsersPage/> } />
                        <Route path={PATHS.USERS} element={<UsersPage/> } />
                        <Route path={PATHS.ABOUT_US} element={<AboutPage/> } />
                        <Route path={PATHS.PAGE404} element={<NotFoundPage /> } />
                    </Route>
                </Routes>
        </BrowserRouter>
    );
}