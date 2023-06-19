import { NavLink } from "react-router-dom";
import Router from '../routerLesson'


const allLesson = () => {
  return (
    <div className="flex flex-col">
      <div className="border header flex justify-between items-center px-4 sticky top-0 h-[7vh] z-50 bg-white">
        <div>
          <NavLink
            to="/lesson/"
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700  active"
          >
            <span className="ml-3">All lesson</span>
          </NavLink>
        </div>
        <b>Bài thực hành react ( ts required )</b>
        <button className="bg-[rgb(37,99,235,1)] text-white text-sm px-3 rounded py-2 h-fit">
          Logout
        </button>
      </div>
      <div className="min-h-[93vh] flex">
        <div className="sidebar transition-transform -translate-x-full sm:translate-x-0 min-h-[100%] w-[8%]">
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul>
              <li>
                <NavLink
                  to="/lesson/1"
                  className={({ isActive }) => {
                    return `${isActive ? "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 mb-[10px] bg-[#4ADE80] " : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 mb-[10px]"}`;
                  }}
                >
                  <span className="ml-3">Lesson 1</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/lesson/2"
                  className={({ isActive }) => {
                    return `${isActive ? "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 mb-[10px] bg-[#4ADE80] " : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 mb-[10px]"}`;
                  }}
                >
                  <span className="ml-3">Lesson 2</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/lesson/3"
                  className={({ isActive }) => {
                    return `${isActive ? "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 mb-[10px] bg-[#4ADE80] " : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 mb-[10px]"}`;
                  }}
                >
                  <span className="ml-3">Lesson 3</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/lesson/4"
                  className={({ isActive }) => {
                    return `${isActive ? "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 mb-[10px] bg-[#4ADE80] " : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 mb-[10px]"}`;
                  }}
                >
                  <span className="ml-3">Lesson 4</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/lesson/5"
                  className={({ isActive }) => {
                    return `${isActive ? "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 mb-[10px] bg-[#4ADE80] " : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 mb-[10px]"}`;
                  }}
                >
                  <span className="ml-3">Lesson 5</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/lesson/6"
                  className={({ isActive }) => {
                    return `${isActive ? "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 mb-[10px] bg-[#4ADE80] " : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 mb-[10px]"}`;
                  }}
                >
                  <span className="ml-3">Lesson 6</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/lesson/1"
                  className={({ isActive }) => {
                    return `${isActive ? "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 mb-[10px] bg-[#4ADE80] " : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 mb-[10px]"}`;
                  }}
                >
                  <span className="ml-3">Lesson 7</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/lesson/1"
                  className={({ isActive }) => {
                    return `${isActive ? "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 mb-[10px] bg-[#4ADE80] mb" : "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 mb-[10px]"}`;
                  }}
                >
                  <span className="ml-3">Lesson 8</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="border min-h-[100%] body p-8 w-[92%]">
            <Router></Router>
        </div>
      </div>
    </div>
  );
};

export default allLesson;
