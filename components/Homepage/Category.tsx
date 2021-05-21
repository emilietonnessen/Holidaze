import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import CategoryContext from '../../context/CategoryContext';

const Category: React.FC = () => {

    const [activeCategory, setActiveCategory]: any = useContext(CategoryContext)

    console.log("[Homepage Category]", activeCategory);


    
    const hotelHandler = () => {
        setActiveCategory("hotel")
    }

    const bnbHandler = () => {  
        setActiveCategory("bedandbreakfast")
    }

    const guesthouseHandler = () => {   
        setActiveCategory("guesthouse")
    }   


    return (
        
        <section className="category">
            <div className="category__scroll">
                <div className="category__grid">

                    <Link href="/establishments">
                        <a className="category__link" onClick={hotelHandler}>
                            <div className="category__box">
                                <Image className="category__image" src="/assets/hotels.jpg" alt="Hotels" layout="responsive" width={600} height={600} />
                                <h5 className="category__title">Hotels</h5>
                            </div>
                        </a>
                    </Link>

                    <Link href="/establishments">
                        <a className="category__link" onClick={bnbHandler}>
                            <div className="category__box">
                                <Image className="category__image" src="/assets/bnb.jpg" alt="Hotels" layout="responsive" width={600} height={600} />
                                <h5 className="category__title">Bed & Breakfast</h5>
                            </div>
                        </a>
                    </Link>

                    <Link href="/establishments">
                        <a className="category__link" onClick={guesthouseHandler}>
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