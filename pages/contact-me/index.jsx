import Head from "next/head";
import { useState } from "react";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      const emailPattern =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (name.length < 2) {
        throw "Please enter a valid name";
      }
      if (!emailPattern.test(email)) {
        throw "Please enter a valid email address";
      }
      if (message.length < 2) {
        throw "Please enter a valid message";
      }
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      alert(err);
      return;
    }
  };

  return (
    <>
      <Head>
        <title>Contact Victor Ubere</title>
      </Head>
      <section className="flex  flex-col items-center justify-center p-4">
        <h2 className="font-[600] text-[22px]">Contact Me</h2>
        <form
          onSubmit={submitHandler}
          className="flex flex-col justify-center items-center p-2 pt-5 w-[80vw] max-w-[500px] border mt-5 rounded-[5px] shadow-[1px_1px_2px_2px_rgba(0,0,0,0.6)] h-[300px]"
        >
          <input
            name="name"
            id="name"
            type="name"
            value={name}
            onChange={({ target }) => setName(target.value)}
            placeholder="John Doe"
            className="border border-[#0007] w-[90%] rounded-[3px] p-2 m-2 placeholder:text-[#0009] placeholder:text-[14px] focus:outline-none focus:ring-1 focus:ring-[#0008]"
          />
          <input
            name="email"
            id="email"
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            placeholder="johndoe@email.com"
            className="border border-[#0007] w-[90%] rounded-[3px] p-2 m-2 placeholder:text-[#0009] placeholder:text-[14px] focus:outline-none focus:ring-1 focus:ring-[#0008]"
          />
          <textarea
            value={message}
            placeholder="Your message..."
            className="border border-[#0007] text-[14px] w-[90%] rounded-[3px] p-2 m-2 placeholder:text-[#0009] placeholder:text-[12px] focus:outline-none focus:ring-1 focus:ring-[#0008] resize-none h-[100px] p-3"
            onChange={({ target }) => setMessage(target.value)}
          
          />
          <button
            type="submit"
            className="px-4 py-1 border rounded-[3px] bg-[#66f6] hover:bg-[#66f] text-white"
          >
            Send
          </button>
        </form>
      </section>
    </>
  );
}
