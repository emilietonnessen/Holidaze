import Image from 'next/image';
import { RoomProps } from '../../constants/interfaces';


const EstablishmentRoom: React.FC<RoomProps> = ({lowestPrice}) => (
    <div className="establishment-details__rooms">
		<div className="room">
			<div className="room__photo">
				<Image src="/assets/rooms/standard.jpg" alt="Bedroom" height={200} width={300} layout="responsive" />
			</div>
				
			<div className="room__price">{lowestPrice} NOK</div>
				
			<div className="room__info">
				<h6 className="room__title">Standard Room</h6>
				<ul className="room__list">
					<li className="room__list-item">Two Persons</li>
					<li className="room__list-item">Queensized Bed</li>
				</ul>
			</div>
		</div>


		<div className="room">
			<div className="room__photo">
				<Image src="/assets/rooms/superior.jpg" alt="Bedroom" height={200} width={300} layout="responsive" />
			</div>
				
			<div className="room__price">1099 NOK<span className="room__offer">1599 NOK</span></div>
				
			<div className="room__info">
				<h6 className="room__title">Superior Room</h6>
				<ul className="room__list">
					<li className="room__list-item">Two Persons, one child</li>
					<li className="room__list-item">Queensized Bed, 1 single Bed</li>
				</ul>
			</div>
		</div>


		<div className="room">
			<div className="room__photo">
				<Image src="/assets/rooms/family.jpg" alt="Bedroom" height={200} width={300} layout="responsive" />
			</div>

			<div className="room__price">1899 NOK</div>

			<div className="room__info">
				<h6 className="room__title">Family Room</h6>
				<ul className="room__list">
					<li className="room__list-item">Three Persons, three children</li>
					<li className="room__list-item">Multiple bed combinations</li>
				</ul>
			</div>
		</div>
	</div>
);


export default EstablishmentRoom;