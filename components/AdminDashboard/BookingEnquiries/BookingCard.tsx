import { useState } from "react";

import Feedback from "../../UI/Feedback";
import useAxios from "../../../hooks/useAxios";
import { ENQUIRY_URL } from "../../../constants/api";
import { BookingCardProps } from "../../../constants/interfaces";
import { Button } from "../../UI/Button";



const BookingCard: React.FC<BookingCardProps> = ({establishment, firstName, lastName, email, phone, startDate, endDate, room, message, read, id, data}) => {

    // State
    const [newMessage, setNewMessage] = useState<boolean>(read);
    const [deleting, setDeleting] = useState<boolean>(false)
    const [deleteError, setDeleteError] = useState<string | null>(null);
    const [deleteSuccess, setDeleteSuccess] = useState<boolean>(false);


    // Variables
    let url = `${ENQUIRY_URL}/${id}`;
    const http = useAxios();


    // Read new message handler
    const readMessageHandler = () => {
        if (read === false) {
            data.read = true;
            http.put(url, data);
            setNewMessage(true);
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
				setDeleting(true);
				await http.delete(url);
                setDeleteSuccess(true);
                setTimeout(() => { window.location.reload() }, 1000);
			} catch (error) {
				setDeleteError(error.toString());
			} finally {
                setDeleting(false)
            }
        } else {
            setDeleting(false);
        }
    }
    


    return (
        <div className="admin-card" onClick={readMessageHandler} >
            
            <div className="admin-card__header">
                <h3 className="admin-card__title">{establishment}</h3>
                {!newMessage ? <span className="admin-card__new">New!</span> : null}
            </div>

            <div className="admin-card__details">
                <p className="admin-card__constants">From:</p>
                <p className="admin-card__values">{firstName} {lastName}</p>

                <p className="admin-card__constants">Email:</p>
                <p className="admin-card__values">{email}</p>

                <p className="admin-card__constants">Phone:</p>
                <p className="admin-card__values">{phone}</p>

                <p className="admin-card__constants">Date:</p>
                <p className="admin-card__values">{startDate} - {endDate}</p>

                <p className="admin-card__constants">Room:</p>
                <p className="admin-card__values">{room}</p>
            </div>

            <p className="admin-card__message">
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