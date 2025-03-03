import { useForm } from "react-hook-form";
import { useState } from "react";
import { useContext } from "react";
import styles from "./ContactStyle.module.css";

function Contact() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur" });

  const [correct, setCorrect] = useState('');

const submit = (data)=>{
console.log("Message",data)
setCorrect('Your message has been sent successfully!');
reset();
}



  return (
    <section className={styles.container}>
      <h1 className={styles.head}>Contact</h1>
      <form onSubmit={handleSubmit(submit)}>
        <input
          type="text"
          placeholder="Name"
          {...register("Name", {
            required: "Please enter your name.",
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: "Name can only contain letters.",
            },
          })}
        />
        {errors.Name && <p>{errors.Name.message}</p>}
<input type="email" placeholder="Email"
{...register("email", {
  required: "You need to type something",
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: "Please enter your email.",
  },
  minLength: {
    value: 5,
    message: "Email must be at least 5 characters",
  },
})}
/>
{errors.email && <p>{errors?.email.message}</p>}
<textarea placeholder="Message" name="message">

</textarea>
        <input type="submit" />
      </form>
    </section>
  );
}

export default Contact;
