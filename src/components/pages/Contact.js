import React, { useState } from "react";
import ContactForm from "../contactForm";

const styles = {
  title: {
    // marginLeft: 80,
    marginTop: 25,
    // fontFamily: "Epilogue",
    // fontDisplay: "sans-serif",
    color: "#da5c3a",
    fontWeight: "bold",
  },
  p: {
    // fontFamily: "Montserrat",
    // fontDisplay: "sans-serif",
    fontSize: 18,
    color: "#3a3533",
  },
  a: {
    color: "#747c39",
    fontWeight: "bold",
  },
  card: {
    border: "transparent",
    // position: "relative",
    // float: "right",
    maxWidth: "20%",
    alignItems: "center",
  },
};
export default function Contact() {
  const [open, setOpen] = useState(false);
  const [isError, setError] = useState(false);

  const openMsgMadolFunc = (open) => {
    setOpen(open);
  };

  const checkIsErrorFunc = (isError) => {
    setError(isError);
  };
  return (
    <div className="p-5 mx-5">
      <h2 style={styles.title}>Let's Connect!</h2>

      <div className="align-items-center mx-5">
        <div>
          <p style={styles.p}>
            For any questions (general or on my projects) or just to connect-
            <p style={styles.p}>
              shoot me a message below or you can email me directly at{" "}
              <a href="mailto:addisonguskey@gmail.com" style={styles.a}>
                addisonguskey@gmail.com
              </a>{" "}
              !
            </p>
          </p>
          {/* <div
            className=" card contact-form bg-transparent "
            style={styles.card}
          > */}
          <ContactForm
            openMsgMadolFunc={openMsgMadolFunc}
            checkIsErrorFunc={checkIsErrorFunc}
          />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
