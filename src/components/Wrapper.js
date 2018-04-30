import React from 'react';

function Wrapper({className, children}) {
   return (
      <div className={className}>
          {children}
      </div>
   )
}

export default Wrapper