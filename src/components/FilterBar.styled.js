import styled from "styled-components";
import { PRIMARY_BLUE } from "./constants.styled";

export const Sidebar = styled.div`
  position: sticky;
  align-self: start;
  top: 0;
`;

export const FilterButton = styled.button`
  padding: 0.5rem;
  border-radius: 2rem;
  margin-right: 0.2rem;
  background-color: ${({ props }) => (props.active ? PRIMARY_BLUE : "white")};
  color: ${({ props }) => (!props.active ? PRIMARY_BLUE : "white")};
`;

export const SearchBar = styled.input`
  width: 80%;
  height: 1.5rem;
  border-radius: 2rem;
  text-align: center;
  margin-top: 2rem;
`;
