import React,{useState} from 'react'
import Title from "../layouts/Title";
import ContactLeft from './ContactLeft';

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your Messages has been sent Successfully!`);
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  
  
  }
  return (
    <section id="contacts" className="w-full py-20 border-b-[1px] border-b-black">
    <div className="flex items-center justify-center text-center">
      <Title title="Contact" des="Contact With Me" />
    </div>

    <div className="w-full">
            <div className="flex flex-col justify-between w-full h-auto lgl:flex-row">
              <ContactLeft/>
                <div className="w-full lgl:w-[60%] h-full flex flex-col py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b]
                gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
               <form className='flex flex-col w-full gap-4 py-2 lgl:gap-6 lgl:py-5'>
               {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
                 <div className='flex flex-col w-full gap-10 lgl:flex-row'>
                 <div className='flex flex-col w-full gap-4 lgl:w-1/2'>
                  <p className='text-sm tracking-wide text-gray-400 uppercase'>YOUR NAME</p>
                  <input onChange={(e)=>setUsername(e.target.value)}
                   value={username} 
                   className={`${
                    errMsg === "Username is required!" &&
                    "outline-designColor"
                  } contactInput`} 
                   type='text' />
                 </div>
                 <div className='flex flex-col w-full gap-4 lgl:w-1/2'>
                  <p className='text-sm text-gray-400 uppercase'>phone number</p>
                  <input onChange={(e)=>setPhoneNumber(e.target.value)} value={phoneNumber}
                   className={`${
                    errMsg === "Phone number is required!" &&
                    "outline-designColor"
                  } contactInput`} type='text' />
                 </div>
                 </div>

                 <div className='flex flex-col gap-4 '>
                 <p className='text-sm text-gray-400 uppercase'>Email</p>
                  <input onChange={(e)=>setEmail(e.target.value)} value={email} 
                  className={`${
                    errMsg === "Please give your Email!" &&
                    "outline-designColor"
                  } contactInput`} type='email' />
                 </div>
                 
                 <div className='flex flex-col gap-4 '>
                 <p className='text-sm text-gray-400 uppercase'>Subject</p>
                  <input onChange={(e)=>setSubject(e.target.value)} value={subject} 
                   className={`${
                    errMsg === "Plese give your Subject!" &&
                    "outline-designColor"
                  } contactInput`} type='text' />
                 </div>
                 <div className='flex flex-col gap-4 '>
                 <p className='text-sm text-gray-400 uppercase'>Your message</p>
                  <textarea onChange={(e)=>setMessage(e.target.value)} value={message}
                  className={`${
                    errMsg === "Message is required!" && "outline-designColor"
                  } contactTextArea`} cols="30" rows="8"></textarea>
                 </div>
                 <div w-full>
                  <button onClick={handleSend} className='w-full h-12 bg-[#141518] rounded-lg text-basetext-gray-400
                  tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] 
                  hover:border-designColor border-transparent'>Send Message</button>
                 </div>
                 {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
               </form>
              </div>
            </div>
          </div>
    </section>
   
  )
}

export default Contact
