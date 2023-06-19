import { NavLink, Outlet } from "react-router-dom";

const homepageLesson = () => {
  return (
    <div className="container grid grid-cols-3">
      <NavLink
        to="/lesson/1"
        className="m-6 bg-slate-400 p-8 rounded cursor-pointer hover:bg-slate-200"
      >
        Lesson 1
      </NavLink>
      <a
        href="/lesson/2"
        className="m-6 bg-slate-400 p-8 rounded cursor-pointer hover:bg-slate-200"
      >
        Lesson 2
      </a>
      <a
        href="/lesson/3"
        className="m-6 bg-slate-400 p-8 rounded cursor-pointer hover:bg-slate-200"
      >
        Lesson 3
      </a>
      <a
        href="/lesson/4"
        className="m-6 bg-slate-400 p-8 rounded cursor-pointer hover:bg-slate-200"
      >
        Lesson 4
      </a>
      <a
        href="/lesson/5"
        className="m-6 bg-slate-400 p-8 rounded cursor-pointer hover:bg-slate-200"
      >
        Lesson 5
      </a>
      <a
        href="/lesson/6"
        className="m-6 bg-slate-400 p-8 rounded cursor-pointer hover:bg-slate-200"
      >
        Lesson 6
      </a>
      <a
        href=""
        className="m-6 bg-slate-400 p-8 rounded cursor-pointer hover:bg-slate-200"
      >
        Lesson 7
      </a>
      <a
        href=""
        className="m-6 bg-slate-400 p-8 rounded cursor-pointer hover:bg-slate-200"
      >
        Lesson 8
      </a>
      <Outlet />
    </div>
  );
};

export default homepageLesson;
