import BookingEnquiries from "./BookingEnquiries";
import ContactMessages from "./ContactMessages";
import Accordion from "../UI/Accordion";
import AddEstablishment from "./AddEstablishment";
import EditEstablishment from "./EditEstablishment";

const index: React.FC = () => (
    <div className="admin-dashboard">


        <div className="admin-dashboard__group">
            <BookingEnquiries />
            <ContactMessages />
        </div>


        <div className="admin-dashboard__group">

            {/* Add Establishment */}
            <section className="add-establishments">
                <Accordion title="Add New Establishment">
                    <AddEstablishment />
                </Accordion>     
            </section>

            {/* Edit Establishment */}
            <section className="edit-establishment">
                <Accordion title="Edit Establishment">
                    <EditEstablishment />
                </Accordion>        
            </section>

        </div>
    </div>
);

export default index;