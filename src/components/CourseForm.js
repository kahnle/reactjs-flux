import React from "react";
import InputText from "./common/TextInput";
import SelectInput from "./common/SelectInput";
import PropTypes from "prop-types";

function CourseForm(props) {
  let selectData = [
    {
      id: 1,
      name: "Cory House"
    },
    {
      id: 2,
      name: "Scott Allen"
    }
  ];
  return (
    <form onSubmit={props.onSubmit}>
      <InputText
        id="title"
        label="Title"
        name="title"
        onChange={props.onChange}
        value={props.course.title}
        error={props.errors.title}
      />

      <SelectInput
        id="author"
        name="authorId"
        label="author"
        data={selectData}
        onChange={props.onChange}
        value={"" + props.course.authorId || ""}
        error={props.errors.authorId}
      />

      <InputText
        id="category"
        label="Category"
        name="category"
        onChange={props.onChange}
        value={props.course.category}
        error={props.errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default CourseForm;
