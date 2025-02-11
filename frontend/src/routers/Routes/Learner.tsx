import Login from "../../screens/Auth/Login";
import Home from "../../screens/Home";
import Learner from "../Paths/Learner";

const LearnerRoutes = [
    { path: Learner.LOGIN, element: <Login/> },
    { path: Learner.DASHBOARD, element: <Home/> },
]

export default LearnerRoutes