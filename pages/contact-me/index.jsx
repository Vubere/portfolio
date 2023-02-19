import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

/* components */
import Head from "next/head";
import Modal from "../../components/modal";
import { useCloseOnBlur } from "../../hooks/useCloseonClickAway";

import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();
  const [status, setStatus] = useState("");
  

  const {
    ref: successRef,
    show: showSuccess,
    setShow: setShowSuccess,
  } = useCloseOnBlur();
  const {
    ref: errorRef,
    show: showError,
    setShow: setShowError,
  } = useCloseOnBlur();
  const { ref: loadingRef, show: showLoading, setShow: setShowLoading } = useCloseOnBlur();

  const emailPattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  

  const submitHandler = async (e) => {
    e.preventDefault();
    setShowLoading(true);
    try {
      if (name.length < 2) {
        throw { text: "Please enter a valid name" };
      }
      if (!emailPattern.test(email)) {
        throw { text: "Please enter a valid email address" };
      }
      if (message.length < 2) {
        throw { text: "Please enter a valid message" };
      }
      
      await emailjs.send(
        publicRuntimeConfig.serviceID,
        publicRuntimeConfig.templateID,
        {
          from_name: name,
          message: message,
          from_email: email,
          reply_to: email,
        },
        publicRuntimeConfig.publicKey
      );
      setShowLoading(false);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 2000);

      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      
      setShowLoading(false);
      setStatus(err?.text);
      setTimeout(() => {
        setStatus("");
        setShowError(false);
      }, 2000);
      setShowError(true);
      return;
    }
  };

  const disabled =
    name.length < 2 || message.length < 2 || !emailPattern.test(email);

  return (
    <>
      {showSuccess && (
        <Modal setShow={setShowSuccess} ref={successRef}>
          <p className="text-[#0f0] text-center ">Message sent successfully</p>
        </Modal>
      )}
      {showError && (
        <Modal setShow={setShowError} ref={errorRef}>
          <p className="text-center leading-[18px] text-[#f00]">
            {status || "Message not sent, check your network and retry."}
          </p>
        </Modal>
      )}
      {showLoading && (
        <Modal  setShow={setShowLoading} ref={loadingRef}>
          <p className="text-center leading-[18px] text-[#000f]">
            Sending message...
          </p>
        </Modal>
      )}
      <Head>
        <title>Contact Victor Ubere</title>
      </Head>
      <section className="flex  flex-col items-center justify-center p-4">
        <h2 className="font-[600] text-[22px]">Contact Me</h2>
        <form
          ref={form}
          onSubmit={submitHandler}
          className="flex flex-col justify-center items-center p-2 pt-5 w-[80vw] max-w-[400px] border mt-5 rounded-[5px] shadow-[1px_1px_2px_2px_rgba(0,0,0,0.6)] h-[300px]"
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
            id="message"
            name="message"
            placeholder="Your message..."
            className="border border-[#0007] text-[14px] w-[90%] rounded-[3px] px-2 m-2 placeholder:text-[#0009] placeholder:text-[12px] focus:outline-none focus:ring-1 focus:ring-[#0008] resize-none h-[100px] p-3"
            onChange={({ target }) => setMessage(target.value)}
          />
          <button
            type="submit"
            className={`px-4 py-1 border rounded-[3px] ${
              disabled ? "bg-[#66f8]" : "bg-[#66f]"
            } hover:bg-[#66f] text-white`}
          >
            Send
          </button>
        </form>
      </section>
    </>
  );
}
