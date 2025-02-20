import { useContext } from "react";
import { DataContext } from "../DataContext";

export const DetectionsDashboard = () => {
  const { data } = useContext(DataContext);
  const detections = data?.map((d) => {
    return (
      <div key={d.id}>
        <h5>{d.eyed}</h5>
      </div>
    );
  });
  return (
    <>
      <h1>detections list</h1>
      {detections}
    </>
  );
};
