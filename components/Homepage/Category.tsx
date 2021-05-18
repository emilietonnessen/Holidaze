import Image from 'next/image';
import Link from 'next/link';

const Category: React.FC = () => {
    return (
        <section className="category">
            <div className="category__scroll">
                <div className="category__grid">
                    <Link href="/establishments">
                        <a className="category__link">
                            <div className="category__box">
                                <Image className="category__image" src="/assets/hotels.jpg" alt="Hotels" layout="responsive" width={600} height={600} />
                                <h5 className="category__title">Hotels</h5>
                            </div>
                        </a>
                    </Link>

                    <Link href="/establishments">
                        <a className="category__link">
                            <div className="category__box">
                                <Image className="category__image" src="/assets/bnb.jpg" alt="Hotels" layout="responsive" width={600} height={600} />
                                <h5 className="category__title">Bed & Breakfast</h5>
                            </div>
                        </a>
                    </Link>

                    <Link href="/establishments">
                        <a className="category__link">
                            <div className="category__box">
                                <Image className="category__image" src="/assets/guesthouse.jpg" alt="Hotels" layout="responsive" width={600} height={600} />
                                <h5 className="category__title">Guesthouses</h5>
                            </div>
                        </a>
                    </Link>
                </div>
                
            </div>
        </section>
    );
}

export default Category; 