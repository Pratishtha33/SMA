import React from 'react';
import { LineWave } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className='loader grid place-items-center h-screen -mt-36'>
      <LineWave
        height='200'
        width='200'
        color='#4fa94d'
        ariaLabel='line-wave'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
        firstLineColor=''
        middleLineColor=''
        lastLineColor=''
      />
    </div>
  );
};

export default Loader;
