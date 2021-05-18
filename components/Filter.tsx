import * as interfaces from '../constants/interfaces';

const Filter: React.FC<interfaces.FilterProps> = ({activeHotels, activeBnBs, activeGuesthouses, activeExplore, onClickHotels, onClickBnBs, onClickGuesthouses, onClickAll}) => (
    <div className="filter">
        <button className={activeHotels ? "filter__btn filter__btn--active" : "filter__btn" } onClick={onClickHotels}>
            hotels
        </button>
        <button className={activeBnBs ? "filter__btn filter__btn--active" : "filter__btn" } onClick={onClickBnBs}>
            bed & breakfast
        </button>
        <button className={activeGuesthouses ? "filter__btn filter__btn--active" : "filter__btn" } onClick={onClickGuesthouses}>
            guesthouses
        </button>
        <button className={activeExplore ? "filter__btn filter__btn--active" : "filter__btn" } onClick={onClickAll}>
            explore all
        </button>
    </div>
);


export default Filter;