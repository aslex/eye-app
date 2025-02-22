import styled from "styled-components";
import {
  PRIMARY_BLUE,
  SECONDARY_BLUE,
  SECONDARY_ORANGE,
} from "./constants.styled";

export const Title = styled.h4``;

export const Card = styled.div`
  box-shadow: 5px 2px 2px 2px ${PRIMARY_BLUE};
  border-radius: 10px;
  background-color: ${({ props }) =>
    props.severity === "low" ? SECONDARY_BLUE : SECONDARY_ORANGE};
  color: white;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1rem;
  padding: 0.5rem;
  color: black;

  & > :nth-child(1) {
    grid-column: 1 / 3;
  }

  @media (max-width: 900px) {
    grid-auto-flow: row;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(3, minmax(0, 1fr));
    gap: 0;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
`;

export const Severity = styled.p`
  font-weight: ${({ props }) =>
    props.severity === "high" ? "bold" : "normal"};
`;
