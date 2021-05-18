import Image from "next/image"

const EstablishmentReview: React.FC = () => (
    <div className="establishment-details__reviews">
		<div className="review-card review-card-2">
            <p className="review-card__description">
                This is a lovely place, great location minutes from very attractive high street with great independent shops, pubs, restaurants and bars, interesting harbour and seafront/ beach. The very attractive accommodation is spotless.
            </p>
            <div className="review-card__user-box">
                <div className="review-card__user-photo">
                    <Image src="/assets/users/female-2.jpg" alt="User 1" width={60} height={60} />
                </div>
                <div className="review-card__user-info">
                    <h6 className="review-card__user-name">Alessandra Lim</h6>
                    <p className="review-card__date">13 August 2020</p>
                </div>
                <div className="review-card__rating">8.0</div>
            </div>
        </div>

		<div className="review-card review-card-2">
            <p className="review-card__description">
                A brilliant stay and a beautiful room! Spacious and beautifully decorated. We had a lovely 2 nights and cant wait to come back to explore Bergen more. We will definitely look here again!
            </p>
            <div className="review-card__user-box">
                <div className="review-card__user-photo">
                    <Image src="/assets/users/male-1.jpg" alt="User 1" width={60} height={60} />
                </div>
                <div className="review-card__user-info">
                    <h6 className="review-card__user-name">John Finley</h6>
                    <p className="review-card__date">26 May 2018</p>
                </div>
                <div className="review-card__rating">10</div>
            </div>
        </div>
	</div>
);


export default EstablishmentReview;