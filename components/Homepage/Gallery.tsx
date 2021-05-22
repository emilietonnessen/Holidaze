import { Image } from "../../constants/interfaces";


const Gallery: React.FC = () => (
        <section className="gallery">
            {images.map((img: Image) => (
                <figure className={`gallery__item gallery__item--${img.id}`} key={img.id}>
                    <img className="gallery__img" src={img.src} alt={img.alt} />   
                </figure> 
            ))}
    </section>
);


export default Gallery;


const images = [
    {
        id: 1,
        src: "/assets/gallery/gallery-1.jpg",
        alt: "Young man Looking over Bergen",
    },
    {
        id: 2,
        src: "/assets/gallery/gallery-2.jpg",
        alt: "Coast House",
    },
    {
        id: 3,
        src: "/assets/gallery/gallery-3.jpg",
        alt: "Young woman looking over Bergen",
    },
    {
        id: 4,
        src: "/assets/gallery/gallery-4.jpg",
        alt: "Red house beside waterfall",
    },
    {
        id: 5,
        src: "/assets/gallery/gallery-5.jpg",
        alt: "Yellow house at Bryggen",
    },
    {
        id: 6,
        src: "/assets/gallery/gallery-6.jpg",
        alt: "Mountain Lift",
    },
    {
        id: 7,
        src: "/assets/gallery/gallery-7.jpg",
        alt: "View over Bergen ",
    },
    {
        id: 8,
        src: "/assets/gallery/gallery-8.jpg",
        alt: "Family enjoying dinner",
    },
    {
        id: 9,
        src: "/assets/gallery/gallery-9.jpg",
        alt: "The streets of Bergen",
    },
    {
        id: 10,
        src: "/assets/gallery/gallery-10.jpg",
        alt: "Norwegian Flag in the sunset",
    },
    {
        id: 11,
        src: "/assets/gallery/gallery-11.jpg",
        alt: "Bergen Brygge",
    },
    {
        id: 12,
        src: "/assets/gallery/gallery-12.jpg",
        alt: "Walking in the mountains ",
    },
    {
        id: 13,
        src: "/assets/gallery/gallery-13.jpg",
        alt: "The fish market",
    },
    {
        id: 14,
        src: "/assets/gallery/gallery-14.jpg",
        alt: "Parachuting over Bergen",
    },
]