import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import dotenv from "dotenv"
dotenv.config({ path: "../../.env" })

export default function Contact() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const form = useRef()

  function handleFieldChange(e) {
    const { name, value } = e.target

    switch (name) {
      case "firstName":
        setFirstName(value)
        break
      case "lastName":
        setLastName(value)
        break
    }
  }

  async function handleFormSubmit(e) {
    e.preventDefault();

    try {
      const data = emailjs.sendForm(
        process.env.EJS_SERVICE,
        process.env.EJS_TEMPLATE,
        form.current,
        process.env.EJS_PUBLIC_KEY
      )
      console.info(data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form
      className="bg-violet-900 p-8 rounded-2xl flex flex-col gap-2 min-h-[36rem]"
      onSubmit={handleFormSubmit}
      ref={form}
    >
      <h3
        className="text-2xl font-bold"
      >
        Hi{(firstName || lastName) && `, ${firstName} ${lastName}`}!
      </h3>
      <p
        className="text-lg pb-2"
      >
        I'm looking forward to hearing from you.
      </p>
      <div className="flex flex-row gap-2">
        <input
          className="bg-violet-600 placeholder-violet-400 p-2 text-lg rounded-md"
          name="firstName"
          placeholder="First Name"
          type="text"
          onChange={handleFieldChange}
        />
        <input
          className="bg-violet-600 placeholder-violet-400 p-2 text-lg rounded-md"
          name="lastName"
          placeholder="Last Name"
          type="text"
          onChange={handleFieldChange}
        />
      </div>
      <input
        className="bg-violet-600 placeholder-violet-400 p-2 text-lg rounded-md"
        name="email"
        placeholder="E-Mail Address"
        type="email"
      />
      <textarea
        className="bg-violet-600 placeholder-violet-400 p-2 text-lg rounded-md h-full resize-none"
        name="message"
        placeholder="Message"
      />
      <button 
        type="submit"
        className="bg-violet-400 hover:bg-violet-600 p-2 text-lg rounded-md w-full"
      >
        Submit
      </button>
    </form>
  )
}
