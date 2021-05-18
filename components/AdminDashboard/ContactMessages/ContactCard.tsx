import { useState } from "react";

interface ContactCardProps {
    name: string;
    email: string;
    message: string;
    topic: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ name, email, message, topic}) => {
    const [newMessage, setNewMessage] = useState(true);

    const newMessageHandler = () => {
        // Not good method - needs to change 
        setNewMessage(false)
    }

    return (
        <div className="booking-card" onClick={newMessageHandler}>

            <div className="booking-card__details">
                {newMessage ? <span className="booking-card__new">New!</span> : null}
                <p className="booking-card__constants">From:</p>
                <p className="booking-card__values">{name}</p>

                <p className="booking-card__constants">Topic:</p>
                <p className="booking-card__values">{topic}</p>

                <p className="booking-card__constants">Email:</p>
                <p className="booking-card__values">{email}</p>
            </div>

            <p className="booking-card__message">
                {message}
            </p>
        </div>
    )
}

export default ContactCard;