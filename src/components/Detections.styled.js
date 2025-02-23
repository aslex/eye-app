import styled from "styled-components";
import {
  PRIMARY_BLUE,
  SECONDARY_BLUE,
  SECONDARY_ORANGE,
} from "./constants.styled";

export const Title = styled.h4`
  font-size: 2rem;
`;
export const Id = styled.h5`
  font-size: 0.6rem;
  font-weight: lighter;
`;
export const Card = styled.div`
  box-shadow: 5px 2px 2px 2px ${PRIMARY_BLUE};
  border-radius: 10px;
  background-color: ${({ props }) =>
    props.severity === "low" ? SECONDARY_BLUE : SECONDARY_ORANGE};
  color: white;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0 1rem;
  margin-top: 1rem;
  padding: 0.5rem;
  color: black;
  & p {
    font-size: 0.8rem;
  }

  & > :nth-child(1) {
    grid-column: 1 / 3;
  }
  & > :nth-child(5) {
    grid-column: -6 / -4;
    grid-row: 2 / 3;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(3, minmax(0, 1fr));
    gap: 0;

    & > :nth-child(1) {
      grid-column: 1/3;
    }
    & > :nth-child(5) {
      grid-column: auto;
      grid-row: auto;
      align-content: end;
    }
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
  justify-content: center;
`;

export const Severity = styled.p`
  font-weight: ${({ props }) =>
    props.severity === "high" ? "bold" : "normal"};
`;
