import { useState, useRef } from "react";
import { sendForm } from "@emailjs/browser";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  function handleFieldChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "message":
        setMessage(value);
        break;
    }
  }

  async function handleFormSubmit(e) {
    e.preventDefault();

    try {
      const result = await sendForm(
        "service_xf67cxh",
        "template_zao32ll",
        e.target,
        "BLXWK9ZkdcnOLC5RB"
      );
      console.info(result);
    } catch (err) {
      console.error(err);
    } finally {
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    }
  }

  return (
    <form
      className="bg-violet-900 p-8 rounded-2xl flex flex-col gap-2"
      onSubmit={handleFormSubmit}
      ref={form}
    >
      <h3 className="text-3xl font-bold">
        Hello
        {(firstName || lastName) &&
          `, ${firstName}${firstName && lastName && " "}${lastName}`}
        !
      </h3>
      <p className="text-xl font-semibod pb-2">
        I'm looking forward to hearing from you.
      </p>
      <div className="flex flex-row gap-2">
        <input
          className="bg-violet-600 placeholder-violet-400 p-2 rounded-lg text-lg"
          name="firstName"
          type="text"
          placeholder="First Name"
          onChange={handleFieldChange}
          value={firstName}
        />
        <input
          className="bg-violet-600 placeholder-violet-400 p-2 rounded-lg text-lg"
          name="lastName"
          type="text"
          placeholder="Last Name"
          onChange={handleFieldChange}
          value={lastName}
        />
      </div>
      <input
        className="bg-violet-600 placeholder-violet-400 p-2 rounded-lg text-lg"
        name="email"
        type="email"
        placeholder="E-Mail Address"
        onChange={handleFieldChange}
        value={email}
      />
      <textarea
        className="bg-violet-600 placeholder-violet-400 p-2 rounded-lg text-lg"
        placeholder="Perhaps a nice message?"
        onChange={handleFieldChange}
        value={message}
      />
      <button
        className="bg-violet-400 font-semibold hover:bg-violet-600 p-2 rounded-lg text-lg min-h-fit"
        type="submit"
      >
        LGTM
      </button>
    </form>
  );
}
