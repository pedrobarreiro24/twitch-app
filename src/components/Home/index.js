import React, {Component, Fragment} from 'react';
import Search from './Search';
import Streams from './Streams';

class Home extends React.Component {
    
    state = {
        streams: []
    };

    //SEARCH FOR STREAMS
    setStreams = streams => {
        this.setState({ streams });
    };

    render() {
        const {streams} = this.state;

        return (
            <Fragment>
                <Search setStreams={this.setStreams}/>
                <Streams streams={streams} />
            </Fragment>
        );
    }
}

export default Home;