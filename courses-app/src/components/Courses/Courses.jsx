import React from "react";
import CourseCard from "./components/CourseCard/CourseCard";
import SearchBar from "./components/SearchBar/SearchBar";
import { mockedCoursesList } from "../../constants";

const outerDiv = {
  border: "2px solid blue",
  width: "90%",
  height: "600px",
  margin: "auto",
};

export function Courses() {
  return (
    <div style={outerDiv}>
      <SearchBar />
      {mockedCoursesList.map((el) => (
        <CourseCard key={el.id} data={el} />
      ))}
    </div>
  );
}

export default Courses;
