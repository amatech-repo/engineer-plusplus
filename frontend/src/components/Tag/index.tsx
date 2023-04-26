import styled from "styled-components";
import tagsData from "../data/tagMocks.json";
import { useState } from 'react';

const mockData = tagsData;

interface Props {
    listTitle: string
}

const Tag = ({ tag, selected, onClick }: any) => {
    return (
        <TagButton selected={selected} onClick={onClick}>
            {tag}
        </TagButton>
    );
};


const TagList = ({ selectedTags, onClickTag }: any) => {
    return (
        <TagListContainer>
            {mockData.map((tag) => (
            <Tag
                key={tag.id}
                tag={tag.name}
                selected={selectedTags.includes(tag)}
                onClick={() => onClickTag(tag)}
            />
            ))}
        </TagListContainer>
    );
};

const TagSelect = (props: Props) => {
    const { listTitle } = props;
    const [selectedTags, setSelectedTags] = useState([]);

    const handleTagClick = (tag: any) => {
        setSelectedTags((prevSelectedTags) =>
        prevSelectedTags.includes(tag)
            ? prevSelectedTags.filter((t) => t !== tag)
            : [...prevSelectedTags, tag]
        );
    };

    return (
        <Container>
            <h3>{ listTitle }</h3>
            <TagList selectedTags={selectedTags} onClickTag={handleTagClick} />
        </Container>
    );
}

export default TagSelect;

const Container = styled.div `
    margin-top: 47px;
    width: 100%;
`;

const TagListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

const TagButton = styled.button`
    background-color: ${(props) => (props.selected ? "blue" : "white")};
    color: ${(props) => (props.selected ? "white" : "black")};
    border: 1px solid #9A9A9A;
    border-radius: 16px;
    padding: 8px 16px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => (props.selected ? "blue" : "#b2b2b2c2")};
    }
`;