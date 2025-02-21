import styled from "styled-components";

const PRIMARY_BLUE = "rgb(25, 36, 64)";
const SECONDARY_ORANGE = "rgb(244, 151, 25)";
const SECONDARY_BLUE = "rgb(188, 222, 240)";

export const Card = styled.div`
  box-shadow: 5px 2px 2px 2px ${PRIMARY_BLUE};
  border-radius: 10px;
  background-color: ${({ props }) =>
    props.severity === "low" ? SECONDARY_BLUE : SECONDARY_ORANGE};
  color: white;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  margin: 1rem;
  padding: 0.5rem;
  color: black;

  & > :nth-child(1) {
  }
`;

export const Sidebar = styled.div``;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
`;

export const Severity = styled.p`
  font-weight: ${({ props }) =>
    props.severity === "high" ? "bold" : "normal"};
`;
