import React from "react";
import { useRef } from "react";
import { IoIosSend, IoMdSend } from "react-icons/io";
import emailjs from "emailjs-com";
import { useState } from "react";
import { RiLoader4Fill } from "react-icons/ri";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_nqewf68",
        "template_se7yijb",
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        "v_lIlRzqp-fOO6bam"
      )
      .then(
        (result) => {
          alert("Message sent Successfully");
          console.log("Email sent.", result.text);

          setName("");
          setEmail("");
          setMessage("");
          //   setLoading(false);
        },
        (error) => {
          alert("Failed to send Message");
          console.log("Error sending Email", error.text);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className=" mt-6 mb-2 max-md:mb-11 flex flex-col gap-5 justify-center items-center">
      <div>
        <h2 className="topic">Send a Message!</h2>
      </div>

      <div className="bg-gray-200 text-black dark_values px-10 py-10 rounded-sm ">
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col gap-3 justify-center">
            <div className="flex flex-col gap-2">
              <label className=" form_label_styles " htmlFor="Name">
                Name
              </label>
              <input
                className="form_input_styles"
                type="text"
                placeholder="Type your Name"
                id="name"
                name="from_name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className=" form_label_styles " htmlFor="Email">
                Email
              </label>
              <input
                className="form_input_styles"
                type="email"
                placeholder="Type your Email"
                id="email"
                name="from_email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className=" form_label_styles " htmlFor="Message">
                Message
              </label>
              <textarea
                className="form_input_styles"
                type="text"
                cols={30}
                placeholder="Type your message"
                id="message"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                required
              />
            </div>

            <div className="w-full flex flex-row gap-3 justify-center items-center py-3 cursor-pointer text-center mt-2 bg-button-color">
              <button
                type="submit"
                disabled={loading}
                className="flex flex-row gap-4 text-white"
              >
                <IoMdSend className="text-white dark:text-white text-xl" />

                {loading && (
                  <RiLoader4Fill className="inline-block animate-spin" />
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
