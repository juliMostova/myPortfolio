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
  const [errorMg, setErrorMg] = useState("");

  const onSubmit = async (data) => {
    setErrorMg("");
    const response = await formspreeSubmit(data);
    if (response.error) {
      setErrorMg("Failed to send message. Try again.");
    }
  };

  useEffect(() => {
    if (state.succeeded) {
      setSuccessMsg("Your message has been sent successfully!");
      reset();

      const timer = setTimeout(() => setSuccessMsg(""), 4000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, reset]);

  return (
    <section className={styles.section} aria-labelledby="contact-heading">
      <h1 id="contact-heading" className={styles.head}>
        Contact Me
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
        noValidate
      >
        <div className={styles.field}>
          <label htmlFor="name">Ваше ім'я</label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            {...register("name", {
              required: "Please enter your name",
              pattern: {
                value: /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s'-]+$/,
                message: "Name can only contain letters",
              },
            })}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && (
            <p role="alert" className={styles.error}>
              {errors.name.message}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Адреса кому лист</label>
          <input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            {...register("email", {
              required: "Please enter your email",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && (
            <p role="alert" className={styles.error}>
              {errors.email.message}
            </p>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="message">Ваш текст</label>
          <textarea
            id="message"
            placeholder="Your message..."
            {...register("message", {
              required: "Please write a message",
              minLength: {
                value: 10,
                message: "Message is too short (min 10 characters)",
              },
            })}
            aria-invalid={errors.message ? "true" : "false"}
          />
          {errors.message && (
            <p role="alert" className={styles.error}>
              {errors.message.message}
            </p>
          )}
        </div>

        {successMsg && (
          <p role="alert" className={styles.success}>
            {successMsg}
          </p>
        )}
        {errorMg && (
          <p role="alert" className={styles.error}>
            {errorMg}
          </p>
        )}

        <button
          type="submit"
          disabled={state.submitting}
          className={styles.submit}
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}

export default Contact;
