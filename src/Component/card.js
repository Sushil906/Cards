
import React from 'react'

function Card({el}) {
  return (
    <div style={{border:"2px solid red",
                 width:"245px",
                 borderRadius:"10px",
                 display:"inline-block",        
                  padding:"10px",
                  margin:"45px",
                  boxShadow:"5px 10px 10px green"
                 }}>

        <img hight={"300px"}  src={el.cardImg}  alt="images"/>
        <h2>{el.title}</h2>
        <p>{el.OtherInfo}</p>
        <h3>{el.price}</h3>


   </div>
  )
}

export default Card