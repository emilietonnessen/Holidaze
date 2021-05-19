import { useState } from "react";
import { ENQUIRY_URL } from "../../../constants/api";
import { BookingCardProps } from "../../../constants/interfaces";
import useAxios from "../../../hooks/useAxios";


const BookingCard: React.FC<BookingCardProps> = ({establishment, firstName, lastName, email, phone, startDate, endDate, room, message, read, id, onClick}) => {
    const [newMessage, setNewMessage] = useState(read);
    let url = `${ENQUIRY_URL}/${id}`;
    const http = useAxios();


    async function readMessageHandler() {
        if (read === false) {
            try {
                const response = await http.get(url);
                const data = response.data;

                data.read = true;

                const updateResponse = await http.put(url, data);
                setNewMessage(true);
            } 
            catch (error) {
                console.log(error);
            } 
        }
    }


    return (
        <div className="booking-card" onClick={readMessageHandler} >
            
            <div className="booking-card__header">
                <h3 className="booking-card__title">{establishment}</h3>
                {!newMessage ? <span className="booking-card__new">New!</span> : null}
            </div>

            <div className="booking-card__details">
                <p className="booking-card__constants">From:</p>
                <p className="booking-card__values">{firstName} {lastName}</p>

                <p className="booking-card__constants">Email:</p>
                <p className="booking-card__values">{email}</p>

                <p className="booking-card__constants">Phone:</p>
                <p className="booking-card__values">{phone}</p>

                <p className="booking-card__constants">Date:</p>
                <p className="booking-card__values">{startDate} - {endDate}</p>

                <p className="booking-card__constants">Room:</p>
                <p className="booking-card__values">{room}</p>
            </div>

            <p className="booking-card__message">
                {message}
            </p>
        </div>
    );
}

export default BookingCard;