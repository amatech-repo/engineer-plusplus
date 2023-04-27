import styled from "styled-components";
import tagsData from "../data/tagMocks.json";
import { useEffect, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRecoilState } from "recoil";
import { materialState } from "@/store/Auth/material";

const mockData = tagsData;

interface Props {
    listTitle: string
};

interface SelectedTagProps {
    tag: string
};

const Tag = ({ tag, selected, onClick }: any) => {
    return (
        <TagButton selected={selected} onClick={onClick}>
            {tag}
        </TagButton>
    );
};


const TagList = ({ selectedTags, onClickTag, isOpen}: any) => {
    if (!isOpen) return null;
    return (
        <TagListContainer>
            {mockData.map((tag) => {
                if (selectedTags.includes(tag)) {
                    return null;
                }
                return (
                <Tag
                    key={tag.id}
                    tag={tag.name}
                    selected={false}
                    onClick={() => onClickTag(tag)}
                />
                );
            })}
        </TagListContainer>
    );
};

const SelectedTag = ({ tag, onRemove }: SelectedTagProps & { onRemove: () => void}) => {


    return (
        <SelectedTagContainer>
            {tag}
            <RemoveButton onClick={onRemove}>×</RemoveButton>
        </SelectedTagContainer>
    );
};

const SelectedTags = ({ selectedTags, onRemoveTag }: { selectedTags: any[], onRemoveTag: (tag: any) => void }) => {
    // ここだとちゃんと値が入ってる
    const [material, setMaterial] = useRecoilState(materialState);
    console.log('SelectedTags: ', material);
    return (
        <SelectedTagsContainer>
            {selectedTags.map((tag) => (
            <SelectedTag key={tag.id} tag={tag.name} onRemove={ () => onRemoveTag(tag)}/>
            ))}
        </SelectedTagsContainer>
    );
};

const TagSelect = (props: Props) => {
    const { listTitle } = props;
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [isTagListOpen, setIsTagListOpen] = useState<boolean>(false);
    const [material, setMaterial] = useRecoilState(materialState);

    const handleTagClick = (tag: any) => {
        setSelectedTags((prevSelectedTags) =>
        prevSelectedTags.includes(tag)
            ? prevSelectedTags.filter((t) => t !== tag)
            : [...prevSelectedTags, tag]
        );
    };

    const handleRemoveTag = (tag: string) => {
        setSelectedTags((prevSelectedTags) => prevSelectedTags.filter((t) => t != tag));
    };

    useEffect(() => {
        setMaterial((prevMaterial) => ({
            ...prevMaterial,
            tags: selectedTags,
        }));
        // ここだとまだ値が反映されていない
        console.log('useEffect: ', material);
    }, [selectedTags, setSelectedTags]);

    const handleToggleTagList = () => {
        setIsTagListOpen(!isTagListOpen);
    }

    return (
        <Container>
            <h3 onClick={handleToggleTagList}>{listTitle} <KeyboardArrowDownIcon fontSize="large"/></h3>
            {selectedTags.length > 0 && (
                <SelectedTags selectedTags={selectedTags} onRemoveTag={handleRemoveTag}/>
            )}
            {isTagListOpen && <TagList selectedTags={selectedTags} onClickTag={handleTagClick}  isOpen={isTagListOpen}/>}
        </Container>
    );
};

export default TagSelect;

const Container = styled.div `
    margin-top: 47px;
    width: 100%;
`;

const TagListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 15px;
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

const SelectedTagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 10px;
`;

const SelectedTagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    background-color: #f2f2f2;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    padding: 8px;
`;

const RemoveButton = styled.button`
    background-color: transparent;
    border: none;
    font-size: 18px;
    cursor: pointer;
    margin-left: 8px;
`;
