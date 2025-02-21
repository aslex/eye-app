import { useContext } from "react";
import { DataContext } from "../DataContext";
import { Card, Sidebar, Container, Severity } from "./Detections.styled";

export const DetectionsDashboard = () => {
  const { data, loading } = useContext(DataContext);
  const detections = data?.map((d) => {
    return (
      <Card key={d.id} props={d}>
        <h4>{d.title}</h4>
        <p>Status: {d.status}</p>
        <p>Service: {d.service}</p>
        <Severity props={d}>Severity: {d.severity}</Severity>
      </Card>
    );
  });
  return (
    <>
      <h1>detections list</h1>
      <Container>
        {loading && "data is loading.."}
        <Sidebar />
        <div>{detections}</div>
      </Container>
    </>
  );
};
