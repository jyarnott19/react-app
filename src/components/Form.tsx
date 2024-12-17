import React, { useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  age: z
    .number({ invalid_type_error: "Age field is required." })
    .min(18, { message: "You must be at least 18 years old." }),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  //console.log(errors);
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
          {...register("name")} // register the input element with the react-hook-form
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        {/* assign the ageRef to the age input element */}
        <input
          {...register("age", { valueAsNumber: true })} // register the input element with the react-hook-form
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
