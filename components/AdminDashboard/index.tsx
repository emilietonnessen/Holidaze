import Edit from "./Edit";
import Add from "./Add";
import BookingEnquiries from "./BookingEnquiries";
import ContactMessages from "./ContactMessages";

const index: React.FC = () => (
    <div className="admin-dashboard">
        <div className="admin-dashboard__group">
            <BookingEnquiries />
            <ContactMessages />
        </div>
        <div className="admin-dashboard__group">
            <Add />
            <Edit />
        </div>
    </div>
);

export default index;