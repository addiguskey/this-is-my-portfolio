import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const styles = {
  label: {
    fontWeight: "bold",
    fontSize: 20,
  },
  input: {
    width: "100%",
    marginBottom: 10,
    border: "none",
    borderBottom: " 2px solid #2d62a2",
  },
  send: {
    width: "100%",
    marginBottom: "15rem",
    border: "none",
  },
};
export default function ContactForm(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // "YOUR_SERVICE_ID",
        "service_vitaccj",
        //   "YOUR_TEMPLATE_ID",
        "template_o0ox5g4",
        form.current,
        // "YOUR_PUBLIC_KEY"
        "vDmeerxkRbH-zgu0Y"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        props.openMsgMadolFunc(true);
        props.checkIsErrorFunc(false);
        //empty input field after each submit
        e.target.reset();
      })
      .catch((err) => {
        props.openMsgMadolFunc(true);
        props.checkIsErrorFunc(true);
        console.log("FAILED...", err);
      });
  };
  //   const emailSent = sendEmail.state.response;

  return (
    <form ref={form} onSubmit={sendEmail} style={styles.form}>
      <label style={styles.label}>Name</label>
      <input
        type="text"
        name="user_name"
        style={styles.input}
        // className="bg-transparent"
      />
      <label style={styles.label}>Email</label>
      <input type="email" name="user_email" style={styles.input} />
      <label style={styles.label}>Message</label>
      <textarea name="message" style={styles.input} />
      <input
        type="submit"
        value="Send"
        style={styles.send}
        className="btn btn-outline-dark"
      />
      <div>
        {/* {emailSent ? (
          <p>I will get back to you ASAP !</p>
        ) : (
          <p>
            Ope, something went wrong! Please contact me directly at{" "}
            <a href="mailto:addisonguskey@gmail.com">addisonguskey@gmail.com</a>{" "}
            directly.
          </p>
        )} */}
      </div>
    </form>
  );
}
