import { useState } from "react";
import styled from "styled-components";

type Props = {
  totalPages: number;
  onPageChange: (page: number) => void;
  currentPage: number;
};

const Pagination = ({ totalPages, onPageChange, currentPage }: Props) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleClick = (page: number) => {
    onPageChange(page);
  };

  return (
    <Container>
      {pageNumbers.map((page) => (
        <PageButton
          key={page}
          onClick={() => handleClick(page)}
          active={currentPage === page}
        >
          {page}
        </PageButton>
      ))}
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  /* border-top: 1px solid #ddd; */
  padding: 1rem;
`;

const PageButton = styled.button<{ active: boolean }>`
  background-color: ${(props) => (props.active ? "#4b9ce2" : "#f0f0f0")};
  color: ${(props) => (props.active ? "#fff" : "#555")};
  font-size: 1rem;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #4b9ce2;
    color: #fff;
  }
`;
