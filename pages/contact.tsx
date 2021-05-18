import { META_CONTACT, TITLE_CONTACT } from '../constants/meta';
import { ContactFeedbackSuccess, ContactFeedbackError } from '../components/Contact/ContactFeedback';
import Layout from '../components/Layout';
import ContactInfo from '../components/Contact/ContactInfo';
import ContactForm from '../components/Contact/ContactForm';

const contact: React.FC = () => (
    <>
        <Layout page="contact" title={TITLE_CONTACT} description={META_CONTACT}>
            <div className="contact-background" />    

            <div className="contact-container">
                <ContactInfo />
                <ContactForm />
            </div>
        </Layout>

        <ContactFeedbackSuccess />
    </>
);

export default contact;