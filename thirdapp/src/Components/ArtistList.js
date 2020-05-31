import React from 'react';
import {Link} from 'react-router-dom'
const ArtistList=(props)=>{

const listArtist=({artistData})=>{
    if(artistData){
        return artistData.map((item)=>{
            const style={
                background:`url{'/images/covers/${item.cover}.jpg'}`
            }
            console.log('style',style)
            return(
                <Link to={`/artist/${item.id}`} className="artist_item" key={item.id} style={style} >
                <div >
                    {item.name}
                </div>
                </Link>
            )
        })
    }
   

}


    return(
        <div className="artist_list">
           {listArtist(props)}
        </div>
    )
}


export default ArtistList;