import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Learner from "./routers/Paths/Learner";
import Login from "./screens/Auth/Login";
import NotFound from "./screens/Errors/NotFound";
const App: React.FC = () => {
    const router = createBrowserRouter([
         { path: Learner.LOGIN, element: <Login/> },
          { path: '*', element: <NotFound/> },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
