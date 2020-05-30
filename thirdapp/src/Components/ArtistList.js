import React from 'react';
const ArtistList=(props)=>{

const listArtist=({artistData})=>{
    if(artistData){
        return artistData.map((item)=>{
            return(
                <div key={item.id}>
                    {item.name}
                </div>
            )
        })
    }
   

}


    return(
        <div>
           {listArtist(props)}
        </div>
    )
}


export default ArtistList;