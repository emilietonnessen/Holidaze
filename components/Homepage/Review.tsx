import Image from 'next/image';
import {ButtonLink} from '../UI/Button';

const Review: React.FC = () => (
    <section className="review">
        <div className="review__gallery">
            <div className="review__family-img">
                <Image  src="/assets/review-family.jpg" alt="Bergen View" layout="responsive" width={330} height={504} />
            </div>
                
        </div>
        <div className="review__content">
            <div className="review__box">
                <h5 className="review__tag">Happy Customers</h5>
                <h3 className="review__title">"The best decision of our lives"</h3>
                <p className="paragraph review__paragraph">
                    This is a gorgeous place to stay, fantastic location, and views to die for! Great amenities and very clean, would definitely go back soon.
                </p>
                <ButtonLink link="/establishments" theme="primary" size="lg">
                    book now
                </ButtonLink>
            </div>
        </div>
    </section>
);


export default Review;