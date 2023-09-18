import PropTypes from 'prop-types';
import Features from '../Features/Features';

const PriceOption = ({option}) => {

    const {name, price, features} = option;

    return (
        <div className='bg-yellow-800 text-white rounded-lg m-3 p-2 flex flex-col'>
            <h2>
                <span className='text-6xl font-semibold'>${price}</span>
                <span className='text-3xl font-medium'>/mon</span>
            </h2>
            <h3 className='text-4xl font-semibold pb-3 pt-3'>{name}</h3>
            <div className='flex-grow'>
            {
                features.map((featur, idx) => <Features key={idx} feature={featur}></Features>)
            }
            </div>
            <button className='btn w-full mt-5 font-bold text-3xl border-none hover:bg-blue-400'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
};

export default PriceOption;