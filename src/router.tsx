import { Route, Routes } from "react-router-dom";
import Login from "./component/signin";
import Signup from "./component/signup"
import Welcome from "./component/welcome";
import Alllesson from "./component/allLesson";

const router = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/lesson/*" element={<Alllesson />} />
      </Route>
    </Routes>
  );
};

export default router;
