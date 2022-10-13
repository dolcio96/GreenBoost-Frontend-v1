import React from 'react'



const Test = (props) => {
    console.log(props);
      return (<>
    <p>{props.connection.due}</p>
  </>)

}

export default Test