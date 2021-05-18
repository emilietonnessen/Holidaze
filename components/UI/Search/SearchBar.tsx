import * as icons from '../Icons';
import * as interfaces from '../../../constants/interfaces';

const SearchBar: React.FC<interfaces.SearchBarProps> = ({theme, search, value, clearSearch, iconType}) => (
    <div className="search__bar">
        <input 
            type="text" 
            className={theme ?  `search__input search__input--${theme}` : 'search__input'} 
            placeholder="Search.."
            onChange={search}
            value={value} />

        <button className="search__button" onClick={clearSearch} >
            {iconType ? <icons.Cross /> : <icons.Search />} 
        </button>
    </div>
);

export default SearchBar;