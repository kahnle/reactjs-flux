import React, { useState, useEffect } from "react";
import courseStore from "../stores/courseStore.js";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import { loadCourses, deleteCourse } from "../actions/courseActions";
import { toast } from "react-toastify";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [deletedFLag, setDeletedFLag] = useState(
    courseStore.getDeletedAlertFlag
  );

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) {
      loadCourses();
    }
    return () => {
      courseStore.removeChangeListener(onChange);
    }; // cleanup on unmount
  }, []);

  function onChange() {
    setCourses(courseStore.getCourses());
    if (courseStore.getDeletedAlertFlag()) {
      toast.success("Course deleted.");
    }
  }

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} deleteCourse={deleteCourse} />
    </>
  );
}

export default CoursesPage;
