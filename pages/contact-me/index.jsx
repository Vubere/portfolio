import Head from "next/head";
import { useState } from "react";

export default function ContactMe() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  

  const submitHandler = (e) => {
    e.preventDefault()
    setEmail('')
    setMessage('')
  }

  return (
    <>
      <Head>
        <title>Contact VUbere</title>
      </Head>
      <section>
        <h2>Contact Me</h2>
        <form onSubmit={submitHandler}>
          <input
          name="email"
          id="email"
          type="email"
          value={email}
          onChange={({target})=>setEmail(target.value)}
          required
          />
          <textarea
          value={message}
          onChange={({target})=>setMessage(target.value)}
          required
          />
          <button type="submit">Send</button>
        </form>
      </section>
    </>
  );
}
