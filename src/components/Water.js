import React from 'react';

function Water({glasses, onAdd, onRemove}) {
   return (
       <div>
          <h1>number of glasses drank, {glasses}</h1>
           {glasses > 0 && <p>{glasses * 250} ml</p>}
           <button onClick={onAdd}>+</button>
           <button onClick={onRemove}>-</button>
       </div>
   )
}

export default Water
