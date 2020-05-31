import React, { Component,Fragment } from 'react';
import Albums from './Albums'
import axios from 'axios';
const API_URL = " http://localhost:8900/artists";
class ArtistDetails extends Component {
    constructor() {
        super();
        this.state = {
            details: ''
        }
    }
    render() {
        console.log('id', this.props.match.params.id)
        let data = this.state.details
        return (
            <Fragment>
            <div className="artist_bio">
            <div className="artist_image">
                <span style={{background:`url("/images/covers/${data.cover}.jpg")`}}></span>
                <h3>{data.name}</h3>
                <div className="bio_text">{data.bio}</div>
            </div>
            </div>
            <Albums albumdata={data.albums} />
            </Fragment>
        )
    }



    async componentDidMount() {
        const response = await axios.get(`${API_URL}/${this.props.match.params.id}`)
        this.setState({ details: response.data })

    }


}


export default ArtistDetails