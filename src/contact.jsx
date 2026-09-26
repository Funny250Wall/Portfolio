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
        // Update the appropriate form field
    };

    const handleSubmit = (event) => {
        // Prevent normal browser submission

        // Form data could be processed here

        // Redirect to Home
    };

    return (
        <div>

            <section>
                <h1>Contact Me</h1>

                {/* Your contact information */}
            </section>

            <section>
                <h2>Send Me a Message</h2>

                <form onSubmit={handleSubmit}>

                    {/* First Name */}

                    {/* Last Name */}

                    {/* Contact Number */}

                    {/* Email */}

                    {/* Message */}

                    <button type="submit">
                        Send Message
                    </button>

                </form>
            </section>

        </div>
    );
}

export default Contact;
