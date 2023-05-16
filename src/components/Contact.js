import React, {useState} from 'react';

const Contact = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const validateEmail = (email) => {
   
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) {
      setNameError(true);
    }
    if (!validateEmail(email)) {
      setEmailError(true);
    }

    if (!message) {
      setMessageError(true);
    }
    if (name && message && validateEmail(email)) {
    
      
      window.location.href = `mailto:johnwilday@gmail.com?subject=${name}&body=${message}`

      setName("");
      setEmail("");
      setMessage("");
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(false);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    setMessageError(false);
  };

  return (
    <div className="full-bkg" style={{marginTop: "-30px"}}>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <br/>
        <input
          type="text"
          id="name"
          name="name"
          className="name-input" 
          value={name}
          onChange={handleNameChange}
          onBlur={() => setNameError(!name)}
        />
        {nameError && <span style={{ color: "red" }}>Name is required</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <br/>
        <input
          type="email"
          id="email"
          name="email"
          className="name-input"
          value={email}
          onChange={handleEmailChange}
          onBlur={() => setEmailError(!validateEmail(email))}
        />
        {emailError && (
          <span style={{ color: "red" }}>Email is invalid</span>
        )}
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <br/>
        <textarea
          id="message"
          name="message"
          style={{width: "25%", }}
          rows="7"
          value={message}
          onChange={handleMessageChange}
          onBlur={() => setMessageError(!message)}
        />
        {messageError && (
          <span style={{ color: "red" }}>Please enter a message</span>
        )}
      </div>
      
      <button style={{marginBottom: "55px"}} className="form-btn" type="submit">Submit</button>
    </form>
    </div>
  );
};
  
  
  
  
  
  
  
  
  
  
  // return (
  //   <div style={{backgroundColor: "blue", height: "500px"}}>
  //     Contact
  //   </div>
  // )


export default Contact
