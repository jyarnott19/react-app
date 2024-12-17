import React, { useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();
  // console.log(register("name"));

  // const [person, updatePerson] = useState({
  //   name: "",
  //   age: "",
  // });
  //initialize refs to null because the elements are not yet rendered. When they are rendered, the ref will be assigned to the input element
  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);
  //const person = { name: "", age: 0 };
  //handle the form submission in a function that writes to the console (normally you would send the data to a server).
  // const handleSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   // person.name = nameRef.current?.value || "";
  //   // person.age = parseInt(ageRef.current?.value || "0");
  //   console.log(person);
  // };
  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    //assign the handleSubmit function to the form's onSubmit event
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        {/* assign the nameRef to the name input element */}
        <input
          {...(register("name"), { required: true }, { minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        {/* assign the ageRef to the age input element */}
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
