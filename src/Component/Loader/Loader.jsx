

import {RotatingTriangles } from  'react-loader-spinner'
const Loader = () => {
    return (
        <div className='flex justify-center items-center'>
        <RotatingTriangles
        visible={true}
        height="80"
        width="80"
        colors={['#E03ED8', '#FB21F0', '#E03ED8']}
        ariaLabel="rotating-triangels-loading"
        wrapperStyle={{}}
        wrapperClass="rotating-triangels-wrapper"
      /> 
        </div>
    );
};

export default Loader;