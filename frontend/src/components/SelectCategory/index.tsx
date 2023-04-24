import styled from "styled-components";
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
        <Container>
            <h3>{ listTitle }</h3>
            <form>
                <SelectContainer id="category" value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="">--選択してください--</option>
                    {mockData.map((category) => (
                        <option key={category.id} value={category.name}>
                            {category.name}
                        </option>
                    ))}
                </SelectContainer>
            </form>
        </Container>
    );
};

export default CatetoryList;

const Container = styled.div `
    margin-top: 47px;
    width: 100%;
`;

const SelectContainer = styled.select `
    width: 100%;
    border: 1px solid #9A9A9A;
    border-radius: 5px;
    padding: 4px;
    margin-top: 15px;
`;

