import Accordion from '../../UI/Accordion';
import AddForm from './AddForm';

const AddEstablishments: React.FC = () => {
    return (
        <section className="add-establishments">
            <Accordion title="Add New Establishment">
                <AddForm />
            </Accordion>     
        </section>
    );
}

export default AddEstablishments;