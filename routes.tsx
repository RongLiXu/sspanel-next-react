import { lazy } from 'react';

import Auth from '@/components/auth/index';

let Login = lazy(() => import(/* webpackChunkName: "login" */ './components/login'));
let Home = lazy(() => import(/* webpackChunkName: "home" */ '@/pages/home'));


let routes = [
    {
        path: '/',
        element: <Auth><Home /></Auth>,
        loader: (e:any) =>{
            return '我是 loader data: ' + JSON.stringify(e)
        },
    },
    {
        path: '/login',
        element: <Login />,
        layout: '',
    },
    {
        path: '/logout',
        layout: '',
        element: <div>logout</div>,
    },
];

export default routes;