import { LineChart, Line, XAxis, YAxis, Tooltip, BarChart, CartesianGrid, Legend, Bar } from "recharts";
const Chart = () => {
  const studentsData = [
    {
      name: "tanjin",
      math: 85,
      physics: 78,
      chemistry: 92,
      english: 88,
      bangla: 75,
      biology: 90,
    },
    {
      name: "miraz",
      math: 90,
      physics: 82,
      chemistry: 85,
      english: 78,
      bangla: 88,
      biology: 92,
    },
    {
      name: "santo",
      math: 75,
      physics: 88,
      chemistry: 80,
      english: 95,
      bangla: 70,
      biology: 85,
    },
    {
      name: "sakib",
      math: 92,
      physics: 76,
      chemistry: 89,
      english: 87,
      bangla: 78,
      biology: 91,
    },
    {
      name: "musfik",
      math: 80,
      physics: 90,
      chemistry: 83,
      english: 79,
      bangla: 91,
      biology: 84,
    },
    {
      name: "tamim",
      math: 88,
      physics: 85,
      chemistry: 94,
      english: 76,
      bangla: 85,
      biology: 88,
    },
    {
      name: "taskin",
      math: 78,
      physics: 91,
      chemistry: 87,
      english: 82,
      bangla: 79,
      biology: 89,
    },
    {
      name: "mustafz",
      math: 84,
      physics: 79,
      chemistry: 90,
      english: 84,
      bangla: 92,
      biology: 83,
    },
    {
      name: "naym",
      math: 91,
      physics: 87,
      chemistry: 78,
      english: 91,
      bangla: 77,
      biology: 87,
    },
    {
      name: "hredoy",
      math: 77,
      physics: 83,
      chemistry: 86,
      english: 89,
      bangla: 86,
      biology: 79,
    },
  ];

  return (
    <div>
      <div>
        <LineChart width={1000} height={600} data={studentsData}>
          <XAxis dataKey="name"></XAxis>
          <YAxis dataKey="math"></YAxis>
          <Tooltip></Tooltip>
          <Line type="monotone" dataKey="math" stroke="pink" />
          <Line type="monotone" dataKey="chemistry" stroke="green" />
          <Line type="monotone" dataKey="physics" stroke="tomato" />
          <Line type="monotone" dataKey="english" stroke="blue" />
          <Line type="monotone" dataKey="bangla" stroke="black" />
          <Line type="monotone" dataKey="biology" stroke="#8884d8" />
        </LineChart>
      </div>

      <div className="mt-8 border-t-2">
        <BarChart width={930} height={450} data={studentsData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="red" />
          <Bar dataKey="uv" fill="green" />
        </BarChart>
      </div>
    </div>
  );
};

export default Chart;
