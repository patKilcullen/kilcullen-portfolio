import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";

export function sendEmail(predefinedData) {
  emailjs
    .sendForm(
      "service_cwl5x9f",
      "template_mk2ys9u",
      predefinedData, // Pass the HTML form element
      "DjYodCG_HrCBt8ZZM"
    )
    .then(
      (result) => {
        console.log("Email successfully sent:", result.text);
      },
      (error) => {
        console.log("Failed to send email:", error.text);
      }
    );
}

export default function EmailOnMount({type}) {
  const formRef = useRef(null);
  const [emailSent, setEmailSent] = useState(false); // Track if email has been sent

  useEffect(() => {
    // Only send the email if it hasn't been sent yet
    if (!emailSent && formRef.current) {
      sendEmail(formRef.current); // Pass the form element to emailjs.sendForm
      setEmailSent(true); // Set the flag to true to prevent further emails
    }
  }, [emailSent]); // emailSent as a dependency ensures this runs only once
  return (
    <form ref={formRef} style={{ display: "none" }}>
      <input type="hidden" name="from_name" value={type} />
      <input type="hidden" name="from_email" value="johndoe@example.com" />
      <input type="hidden" name="subject" value="Test Subject" />
      <input
        type="hidden"
        name="html_message"
        value="This is a test email message."
      />
    </form>
  );
}
