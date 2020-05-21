import React from 'react';

const DoLake=({lakes})=>(
  <ul>
  {lakes.map(b=>
      <li key={b.id}>{b.name}|trailhead:{b.trailhead}</li>
  )}

  </ul>
);

export default DoLake;
