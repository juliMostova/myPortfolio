import { useForm as useReactHookForm } from "react-hook-form";
import { useForm as useFormspree } from "@formspree/react";
import { useEffect, useState } from "react";
import styles from "./ContactStyle.module.css";

function Contact() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useReactHookForm({ mode: "onBlur" });

  const [state, formspreeSubmit] = useFormspree("mnnplqyp");
  const [successMsg, setSuccessMsg] = useState("");

  const onSubmit = async (data) => {
    await formspreeSubmit(data);

  };

  useEffect(() => {
    if (state.succeeded) {
     setSuccessMsg("Your message has been sent successfully!");
reset();

const timer = setTimeout(()=>{
  setSuccessMsg("");
},3000);


return ()=>clearInterval(timer);
    }
  }, [state.succeeded,reset]);

  return (
    <section className={styles.container}>
      <h1 className={styles.head}>Contact</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Name"
          {...register("name", {
            required: "Please enter your name.",
            pattern: {
              value: /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s'-]+$/,
              message: "Name can only contain letters.",
            },
          })}
        />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}

        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Please enter your email.",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address.",
            },
          })}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}

        <textarea
          placeholder="Message"
          {...register("message", {
            required: "Please write a message.",
            minLength: {
              value: 3,
              message: "Message is too short.",
            },
          })}
          />
        {errors.message && (
          <p className={styles.error}>{errors.message.message}</p>
        )}

        {successMsg && <p className={styles.success}>{successMsg}</p>}
        <input type="submit" disabled={state.submitting} />
      </form>
    </section>
  );
}

export default Contact;