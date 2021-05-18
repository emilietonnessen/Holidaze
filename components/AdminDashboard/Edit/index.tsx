import Accordion from "../../UI/Accordion";
import EditForm from "./EditForm";

const Edit: React.FC = () => (
    <section className="edit-establishment">
        <Accordion title="Edit Establishment">
            <EditForm />
        </Accordion>        
    </section>
);

export default Edit;