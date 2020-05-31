import React from 'react';

function DisplayComponent(props){
      console.log(">>>",props)
    const renderList=({mydata})=>{
        if(mydata){
            return mydata.map((item)=>{
                return(
                    <div>
                       <h1> {item.title}</h1>
                    </div>
                )
            })
        }
    }

    
    return(
        <div>
            News Details
            {renderList(props)}
        </div>
    )
}


export default DisplayComponent;