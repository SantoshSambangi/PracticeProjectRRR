import { useState } from "react";
import React from "react";
import { AiFillDatabase } from "react-icons/ai";

const someData = [
  {
    name: "one",
    id: 1,
    city: {
      address: {
        pincode: "524132",
      },
    },
  },
  {
    name: "two",
    id: 2,
    city: {
      pincode: ["santosh", "sambangi"],
    },
  },
];

const Karthik = () => {
  const [data, setData] = useState([]);

  //   fetch("https://fakestoreapi.com/products/1")
  //     .then((res) => res.json())
  //     .then((json) => setData(json));
  //   console.log(data);
  return (
    <div>
      {/* {someData.map((data, index) => {
        return (
          <div key={index}>
            <h1>{data.name}</h1>
            <h1>{}</h1>
          </div>
        );
      })} */}
    </div>
  );
};

export default Karthik;
