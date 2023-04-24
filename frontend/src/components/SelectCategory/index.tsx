import categoriesData from "../data/categoryMocks.json";
import { useState } from 'react';

const mockData = categoriesData;

const CatetoryList = () => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    return (
        <form>
            <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">--選択してください--</option>
                {mockData.map((category) => (
                    <option key={category.id} value={category.name}>
                        {category.name}
                    </option>
                ))}
            </select>
        </form>
    );
};

export default CatetoryList;

