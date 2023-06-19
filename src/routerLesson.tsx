import { Route, Routes } from "react-router-dom";
import HomepageLesson from "./component/lessson/homepageLesson";
import Lesson1 from "./component/lessson/lesson1";
import Lesson2 from "./component/lessson/lesson2";
import Lesson3 from "./component/lessson/lesson3";
import Lesson4 from "./component/lessson/lesson4";
import Lesson5 from "./component/lessson/lesson5";
import Lesson6 from "./component/lessson/lesson6";

const router = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<HomepageLesson />} />
        <Route path="/1" element={<Lesson1 />} />
        <Route path="/2" element={<Lesson2 />} />
        <Route path="/3" element={<Lesson3 />} />
        <Route path="/4" element={<Lesson4 />} />
        <Route path="/5" element={<Lesson5 />} />
        <Route path="/6" element={<Lesson6 />} />
      </Route>
    </Routes>
  );
};

export default router;
