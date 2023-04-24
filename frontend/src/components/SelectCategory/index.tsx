import categoriesData from "../data/categoryMocks.json";
import { useState } from 'react';

const mockData = categoriesData;

interface Props {
    listTitle: string
}

const CatetoryList = (props: Props) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const { listTitle } = props

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    return (
        <>
            <h3>{ listTitle }</h3>
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
        </>
    );
};

export default CatetoryList;

