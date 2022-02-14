import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Courses />
            </div>
          }
        ></Route>
        <Route
          path="/createCourse"
          element={
            <div>
              <Header />
              <CreateCourse />
            </div>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
