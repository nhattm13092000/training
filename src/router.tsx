import { Route, Routes } from "react-router-dom";
import Login from "./component/signin";
import Signup from "./component/signup";
import Welcome from "./component/welcome";
import Alllesson from "./component/allLesson";
import ProtectedRoutes from "./Services/ProtectedRoutes";

const router = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/lesson/*" element={<Alllesson />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default router;
