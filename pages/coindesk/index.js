import React, { useState } from 'react';
import CoindeskChart from '../../components/CoindeskChart';
import Modal from '../../components/Modal';
import coinStyles from '../../styles/Coindesk.module.css';

export const getStaticProps = async () => {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');

  const data = await res.json();

  return {
    props: {
      coins: data,
    },
  };
};

const CoinDeskWrapper = ({ coins }) => {
  const { disclaimer, chartName, time, bpi } = coins;

  const [showModal, setShowModal] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState({});

  const currencyBpi = Object.keys(bpi);

  let localArray = [];

  const chartData = currencyBpi.map((curr) => {
    let temp = {};
    let tdata = bpi[curr];
    temp = {
      ...tdata,
      //   rate: Number(tdata.rate),
    };
    localArray.push(temp);
  });

  const onShowDetails = (selectedCurr) => {
    setSelectedCurrency(selectedCurr);
    setShowModal(true);
  };

  return (
    <div className='container mx-auto'>
      <div>
        <h5 className='coin-title mx-auto font-mono text-2xl font-extrabold'>
          {chartName}
        </h5>
        <div className='timestamps text-xs indent-px text-stone-300'>
          <span>updated at: {time.updated}</span>
        </div>
      </div>
      <div className='flex justify-between'>
        {currencyBpi.length > 0 && (
          <div className='coins-details w-3/4'>
            {currencyBpi.map((curr) => (
              <div className='flex flex-row justify-between  min-h-max my-5 shadow-sm p-3 rounded'>
                <div key={curr} className=''>
                  {curr}
                  <span
                    style={{ color: 'blue' }}
                    dangerouslySetInnerHTML={{
                      __html: `(${bpi[curr].symbol})`,
                    }}
                  />
                </div>
                <button
                  className={coinStyles.btn}
                  onClick={() => onShowDetails(bpi[curr])}
                >
                  Details
                </button>
              </div>
            ))}
          </div>
        )}
        <CoindeskChart chartData={localArray} />
      </div>

      <div className='info text-xs font-serif'>{disclaimer}</div>
      {showModal && <Modal onClose={setShowModal} data={selectedCurrency} />}
    </div>
  );
};

export default CoinDeskWrapper;
