import PropTypes from "prop-types";
import PriceOption from "../PriceOPtion/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      features: [
        "Access to gym facilities",
        "Standard workout equipment",
        "Limited gym hours",
        "Access to locker room",
      ],
      price: 30.0,
    },
    {
      id: 2,
      name: "Premium Membership",
      features: [
        "Access to gym facilities",
        "Full range of workout equipment",
        "Extended gym hours",
        "Group fitness classes",
        "Access to locker room",
      ],
      price: 50.0,
    },
    {
      id: 3,
      name: "Platinum Membership",
      features: [
        "Access to gym facilities",
        "Full range of workout equipment",
        "24/7 gym access",
        "Personal training sessions",
        "Access to sauna and spa",
        "Access to locker room",
        "Towel service",
      ],
      price: 80.0,
    },
  ];

  return (
    <div>
      <h2 className="text-4xl font-bold text-center mt-5 animate-pulse">Best Price In The Town</h2>
     <div className="grid md:grid-cols-3 gap-5 text-center">
     {priceOptions.map((option) => (
        <PriceOption key={option.id} option={option}></PriceOption>
      ))}
     </div>
    </div>
  );
};

PriceOptions.propTypes = {};

export default PriceOptions;
