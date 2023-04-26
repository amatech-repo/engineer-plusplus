import styled from "styled-components";
import tagsData from "../data/tagMocks.json";
import { useState } from "react";

const mockData = tagsData;

interface Props {
  listTitle: string;
}

interface TagProps {
  tag: string;
  selected: boolean;
  onClick: () => void;
}

interface TagListProps {
  selectedTags: string[];
  onClickTag: (tag: string) => void;
}

/* eslint-disable-next-line */
const Tag = ({ tag, selected, onClick }: TagProps) => {
  return (
    <TagButton selected={selected} onClick={onClick}>
      {tag}
    </TagButton>
  );
};

const TagList = ({ selectedTags, onClickTag }: TagListProps) => {
  return (
    <TagListContainer>
      {mockData.map((tag: any) => (
        <Tag key={tag.id} tag={tag.name} selected={selectedTags.includes(tag)} onClick={() => onClickTag(tag)} />
      ))}
    </TagListContainer>
  );
};

const TagSelect = (props: Props) => {
  const { listTitle } = props;
  const [selectedTags, setSelectedTags] = useState<any[]>([]);

  const handleTagClick = (tag: any) => {
    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.includes(tag) ? prevSelectedTags.filter((t) => t !== tag) : [...prevSelectedTags, tag]
    );
  };

  return (
    <Container>
      <h3>{listTitle}</h3>
      <TagList selectedTags={selectedTags} onClickTag={handleTagClick} />
    </Container>
  );
};

export default TagSelect;

const Container = styled.div`
  margin-top: 47px;
  width: 100%;
`;

const TagListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

interface TagButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected: boolean;
}

const TagButton = styled.button<TagButtonProps>`
  background-color: ${(props) => (props.selected ? "blue" : "white")};
  color: ${(props) => (props.selected ? "white" : "black")};
  border: 1px solid #9a9a9a;
  border-radius: 16px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.selected ? "blue" : "#b2b2b2c2")};
  }
`;
