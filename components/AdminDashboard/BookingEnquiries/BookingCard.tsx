import { useState } from "react";

import Feedback from "../../UI/Feedback";
import useAxios from "../../../hooks/useAxios";
import { ENQUIRY_URL } from "../../../constants/api";
import { BookingCardProps } from "../../../constants/interfaces";
import { Button } from "../../UI/Button";



const BookingCard: React.FC<BookingCardProps> = ({establishment, firstName, lastName, email, phone, startDate, endDate, room, message, read, id}) => {

    // State
    const [newMessage, setNewMessage] = useState<boolean>(read);
    const [deleting, setDeleting] = useState<boolean>(false)
    const [deleteError, setDeleteError] = useState<string | null>(null);
    const [deleteSuccess, setDeleteSuccess] = useState<boolean>(false);


    // Variables
    let url = `${ENQUIRY_URL}/${id}`;
    const http = useAxios();


    // Read new message handler
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


    // Delete Handler
    const deleteBookingEnquiryHandler = async () => {
        setDeleting(true);
        setDeleteError(null);
        setDeleteSuccess(false);

        const confirmDelete = window.confirm("Delete the message from " + name + "?");

        if (confirmDelete) {
            try {
				await http.delete(url);
               
                setDeleteSuccess(true);
			} catch (error) {
				setDeleteError(error.toString());
			} finally {
                setDeleting(false)
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

            <Button theme="dark-grey" size="sm" onClick={deleteBookingEnquiryHandler}>
                {deleting ? "deleting.." : "delete"}
            </Button>

            {/* Feedback: */}
            {deleteError && <Feedback theme="error">{deleteError}</Feedback>}
            {deleteSuccess && <Feedback theme="success">The Message was successfully deleted!</Feedback>}
        </div>
    );
}

export default BookingCard;