import Accordion from '../../UI/Accordion';
import AddForm from './AddForm';

const AddEstablishments: React.FC = () => (
    <section className="add-establishments">
        <Accordion title="Add New Establishment">
            <AddForm />
        </Accordion>     
    </section>
);


export default AddEstablishments;

// Maybe remove this component and lift it out of the folder as its no use atm.