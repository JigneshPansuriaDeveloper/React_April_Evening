import React from 'react';


const Albums =(props)=>{
    const showAlbums=({albumdata})=>{
        if(albumdata){
           return albumdata.map((item,index)=>{
                return(
                    <img src={`/images/albums/${item.cover}.jpg`} key={item.index} />
                )

            })
        }

    }
    return(
        <div className="album_list">
            {showAlbums(props)}
        
        </div>
    )
}


export default Albums;