import { Link } from 'react-router-dom';
import React, {Component, Fragment} from 'react';
import {Image } from 'semantic-ui-react'

class Streams extends React.Component{

    formatValue = (value) =>{
        if (value > 999 && value < 999999)
            return (Math.round(value / 1000)) + 'k';
        else if (value > 999999)
            return (Math.round(value / 1000000)) + 'M';
    };

    loadStreams = () => {
        const {streams} = this.props;

        return streams.map(stream => (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4" key={stream.channel._id}>
                <Link to={`/streams/${stream.channel._id}`}>
                <div className="card">
                    <div className="viewers">
                        {this.formatValue(stream.viewers)}
                    </div>
                    <Image src={stream.preview.medium} wrapped ui={false} />
                    <div className="content">
                        <div className="banner">
                            <img src={stream.channel.logo} alt=""></img>
                        </div>
                        <div className="info">
                            <span>
                                <span className="player">{stream.channel.display_name}</span>
                                {this.formatValue(stream.channel.followers)} followers</span>
                            <span className="game">{stream.game}</span>
                        </div>
                    </div>
                </div> 
                </Link>
            </div>
        ));
    };

    render(){
        const {streams} = this.props;

        return(

         <Fragment>             
             {streams.length === 0 && (
                <div className="empty"></div>
            )}
            
            <div className="streams">
                <span className="results">{streams.length > 0 ? (streams.length + ' streams were found') : ''}</span>
                <div className="row">
                    {this.loadStreams()}
                </div>
            </div>
         </Fragment>
        );
    }
}

export default Streams;
