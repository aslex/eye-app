export const getAnalyticsData = async (page) => {
  try {
    const res = await fetch(
      `https://front.heyering.com/detections?limit=50&page=${page}`,
      {
        method: "GET",
        headers: {
          Authorization: process.env.REACT_APP_API_KEY,
        },
      }
    );
    return await res.json();
  } catch (err) {
    console.error("GET detections failed");
    return new Error("GET detections failed");
  }
};
