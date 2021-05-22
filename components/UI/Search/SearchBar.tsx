import { Cross, Search} from '../Icons';
import { SearchBarProps } from '../../../constants/interfaces';
import { black } from '../../../constants/colors';

const SearchBar: React.FC<SearchBarProps> = ({theme, search, value, clearSearch, iconType}) => (
    <div className="search__bar">
        <input 
            type="text" 
            className={theme ?  `search__input search__input--${theme}` : 'search__input'} 
            placeholder="Search establishments.."
            onChange={search}
            value={value} />

        <button className="search__button" onClick={clearSearch} >
            {iconType ? <Cross color={black} /> : <Search color={black} />} 
        </button>
    </div>
);

export default SearchBar;