import { useContext } from "react";
import { DataContext } from "../DataContext";
import { Title, Card, Container, Severity } from "./Detections.styled";
import { FilterBar } from "./FilterBar";

export const DetectionsDashboard = () => {
  const { filteredData, loading, error } = useContext(DataContext);
  const detections = filteredData?.map((d) => {
    return (
      <Card key={d.id} props={d}>
        <h4>{d.title}</h4>
        <p>Status: {d.status}</p>
        <p>Service: {d.service}</p>
        <Severity props={d}>Severity: {d.severity}</Severity>
      </Card>
    );
  });

  if (loading) {
    return <h4>data is loading..</h4>;
  }
  if (error) return <h2>An error ocurred: {error}</h2>;
  return (
    <>
      <Title>displaying {filteredData?.length} detections</Title>
      <Container>
        <FilterBar />
        {!filteredData?.length && <h2>No results.</h2>}
        <div>{detections}</div>
        {/* TO DO: add button to fetch more data */}
      </Container>
    </>
  );
};
