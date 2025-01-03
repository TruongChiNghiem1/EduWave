import React from "react";
import './sass/app.scss'
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import Learner from "./routers/Paths/Learner";
import LearnerLayout from "./layouts/LearnerLayout.tsx";
import LearnerRoutes from "./routers/Routes/Learner.tsx";
const App: React.FC = () => {
    const router = createBrowserRouter([
        {
            path:'/',
            element: <Navigate to={Learner.DASHBOARD}/>
        },
        {
            element: (<LearnerLayout/>),
            children: LearnerRoutes
        },

    ]);

    return <RouterProvider router={router} />;
}

export default App;
