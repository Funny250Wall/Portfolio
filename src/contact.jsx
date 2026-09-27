import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
const [formData, setFormData] = useState({
firstName: '',
lastName: '',
contactNumber: '',
email: '',
message: ''
});


const navigate = useNavigate();

const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
        ...formData,
        [name]: value
    });
};

const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);

    navigate('/');
    //This will send the user back to the home page when they click submit yknow
};

return (
    //mY OWN info goes at the start
    <div>
        <h1>Contact Me</h1>

        <section>
            <h2>Contact Information</h2>
            <p>Email: sgyoung1025@gmail.com</p>
            <p>Phone: 647-529-5434</p>
        </section>
        
        <section>
            <h2>Send a Message</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="contactNumber">Contact Number:</label>
                    <input
                        type="tel"
                        id="contactNumber"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        required
                    />
                </div>

                <button type="submit">Send Message</button>
            </form>
        </section>
    </div>
);


}

export default Contact;

