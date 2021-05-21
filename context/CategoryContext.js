import { createContext, useContext, useState } from 'react';

const CategoryContext = createContext();


export const CategoryProvider = ({ children }) => {
    const [activeCategory, setActiveCategory] = useState("explore");

    return (
        <CategoryContext.Provider value={[activeCategory, setActiveCategory]}>
            {children}
        </CategoryContext.Provider>
    );
}

export default CategoryContext;