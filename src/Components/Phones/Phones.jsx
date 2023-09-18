import axios from "axios";
import { useEffect, useState } from "react";
import { XAxis, YAxis, Tooltip, BarChart, Legend, Bar } from "recharts";

import { Grid } from "react-loader-spinner";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [loding, setLoding] = useState(true);

  useEffect(() => {
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res => res.json())
    axios.get("https://openapi.programming-hero.com/api/phones?search=iphone").then((data) => {
      const phoneData = data.data.data;
      const fakeDatas = phoneData.map((phone) => {
        const newObj = {
          name: phone.phone_name,
          price: parseInt(phone.slug.split("-")[1]),
        };
        return newObj;
      });
      console.log(fakeDatas);
      setPhones(fakeDatas);
      setLoding(false);
    });
  }, []);
  return (
    <div>
      <div className="flex justify-center w-full">
        {loding && (
          <Grid
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )}
      </div>
      <h2 className="text-5xl font-bold text-center mt-5 mb-5">Phones: {phones.length}</h2>

      <BarChart width={1200} height={400} data={phones}>
        <Bar dataKey="price" fill="green"></Bar>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Legend></Legend>
      </BarChart>
    </div>
  );
};

export default Phones;
