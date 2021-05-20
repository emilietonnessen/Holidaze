import { ButtonModal } from '../UI/Button';

const EstablishmentCTA: React.FC = () => (
    <section className="establishment-cta" id="establishment-cta">
		<h3 className="establishment-cta__title">Good news we have 3 rooms left!</h3>
		<ButtonModal theme="primary" size="cta" type="submit" name="booking">book now</ButtonModal>
	</section>
);

export default EstablishmentCTA;