import React from 'react'
import './Contact.css'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "105c0fb8-6a57-4558-87cd-8be8d9aeda46");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'><form action="" onSubmit={onSubmit}>
        <label htmlFor="">Your Name</label>
        <input type="text" name='name' placeholder='Enter your name' required/>
        <label htmlFor="">Phone Number</label>
        <input type="tel" name='phn' placeholder='Enter your Phone Number' required/>
        <label htmlFor="">Message</label>
        <textarea name="message" rows={6} placeholder='Enter your message' required></textarea>
        <button className='btn dark'>Submit</button>
        </form>
        <span>{result}</span>
        </div>
  )
}

export default Contact