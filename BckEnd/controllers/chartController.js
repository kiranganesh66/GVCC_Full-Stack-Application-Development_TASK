// // Dummy data for chart dashboard
// const getChartData = (req, res) => {
//     const data = [
//       { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
//       { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
//       { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
//       { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
//       { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
//       { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
//     ];
//     res.json(data);
//   };
  
//   module.exports = { getChartData };
  const getChartData = async (req, res) => {
  try {
    const chartData = [
      { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
      { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    ];
    res.json(chartData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getChartData };