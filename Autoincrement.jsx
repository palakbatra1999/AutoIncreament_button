import React, { useState } from 'react'

const AutoIncrement = () => {
    
    const[Num,setNum]=useState(0);

    setInterval(function (){
       setNum(Num+1);
      },2000);
  return (
    <div>
      <button>{Num}</button>
    </div>
  )
}

export default AutoIncrement
