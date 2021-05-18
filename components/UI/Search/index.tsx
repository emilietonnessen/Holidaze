import { useState, useEffect } from 'react';
import axios from 'axios';

import * as interfaces from '../../../constants/interfaces';
import { ESTABLISHMENTS_URL } from '../../../constants/api';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

 
const Search: React.FC<interfaces.SearchProps> = ({theme}) => {

    // Declaring State 
    const [establishments, setEstablishments] = useState<interfaces.Establishment[]>([]);
    const [searchValue, setSearchValue] = useState<string>('');
    const [searchIcon, setSearchIcon] = useState<boolean>(false);


    // Variables
    let esta: interfaces.Establishment[] = establishments;
    let searchDisplay: boolean = false;


    // Fetching all the Establishment from the API
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(ESTABLISHMENTS_URL);
                setEstablishments(response.data);
            } catch (error) {
                console.log(error)
            }
        }; fetchData(); 
    }, []);


    // Setting the Search Value to the input value and Icon
    const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value.trim().toLowerCase());
        setSearchIcon(true);

        if (event.target.value.length === 0) {
            esta = [];
            setSearchIcon(false);
        }
    }


    // Clearing the search
    const clearSearchHandler = () => {
        setSearchValue("");
        setSearchIcon(false);
    }


    // Searching through matching results from the api 
    if (searchValue.length > 0 ) {
        esta = esta.filter(est => {
            return est.name.toLowerCase().match(searchValue);
        });

        searchDisplay = true;
    } 


    // Map through search Results
    const filteredSearchResults = esta.map(est => (
        <SearchResult key={est.id} name={est.name} thumbnail={est.thumbnail} stars={est.stars} slug={est.slug} />
    ));

    
    return (
        <div className="search" >
            <SearchBar 
                theme={theme}
                search={searchHandler}
                value={searchValue}
                clearSearch={clearSearchHandler}
                iconType={searchIcon} />

            <div className={!searchDisplay ? 'search-results u-display-none' : 'search-results u-display-block'} >
                {filteredSearchResults.length === 0 ? "No matching results.." : filteredSearchResults}
            </div>
        </div>
    );
}

export default Search;