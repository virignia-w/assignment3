"use client";
import { PiInstagramLogo } from "react-icons/pi";



export default function Footer() {
    return (
        <>
            <div className="footer-container">
                <div className="footer">

                    <div className="explore">
                        <h2>Explore</h2>
                        <p>About Us</p>
                        <p>Jion Us</p>

                    </div>
                    <div className="email">
                        <h2>Policies</h2>
                        <p>Refund & Returns</p>
                        <p>Terms of Service</p>
                        <p>Delivery & Pickup Policy</p>
                        <p>Cancellation Policym</p>
                    </div>
                    <div className="touch">
                        <h2>Get in Touch</h2>
                        <p>Phone: (413) 663-6313</p>
                        <p>Email: crystalsoul@gmail.com</p>
                        <p>Location: 1970 soul Ave, Toronto, ON M59 9ZAs</p>
                    </div>
                    <div className="follow">
                        <h2>Follow Us</h2>
                        <PiInstagramLogo size={32}/>
                        <PiInstagramLogo size={32}/>
                    </div>
                </div>
            
            </div>

            <footer className="container-fluid text-center ">
                <p>&copy; 2024 Crystal Soul</p>
            </footer>
        </>
    );
}