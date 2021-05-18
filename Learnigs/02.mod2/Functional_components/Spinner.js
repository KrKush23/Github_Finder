import React, { Fragment } from 'react';
import spinner from './spinner.gif';

// const Spinner = () => {
//   return (
//     <Fragment>
//       <img
//         src={spinner}
//         alt="Loading.."
//         style={{ width: '200px', margin: 'auto', display: 'block' }}
//       />
//     </Fragment>
//   );
// };

//  == if just one js component is returned and nothing else
//  == then, brackets can be removed
const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt="Loading.."
      style={{ width: '200px', margin: 'auto', display: 'block' }}
    />
  </Fragment>
);
export default Spinner;
