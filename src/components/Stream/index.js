import { getStream } from '../../utils';
import { Embed } from 'semantic-ui-react';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

class Stream extends React.Component{

    state = {
        displayName: '',
        title: '',
        banner: '',
        viewers: 0,
        toggle: false
    };

    componentWillMount = () => {
        this.updateState(); 
        setInterval(() => this.updateState(), 1000);
    };

    updateState = () => {
        const {match} = this.props;

        getStream(match.params.channelId).then(response => {
            this.setState({
                displayName: response.data.stream.channel.display_name,
                title: response.data.stream.channel.status,
                banner: response.data.stream.channel.logo,
                viewers: response.data.stream.viewers
            });
        });
    };

    handleClick = () => {
        this.toggle = !this.toggle;
      }

    render(){
        const { displayName, title, banner, viewers, toggle } = this.state;

        return (
            
<Fragment>
	<div className="header center">
		<Link to={'/'}>
			<div className="logo"></div>
		</Link>
	</div>
	<div className="streaming">
		<Embed  active
                url={`https://player.twitch.tv/?channel=${displayName}`}                                 
                iframe={{
                    allowFullScreen: true
                }}
        />
		<div className="details">
            <img src={banner} alt=""></img>
			<div className="description">
                <span className="player">{displayName}
					<span className="viewers">{viewers} watching now!</span>
				</span>
				<span className="title">{title}</span>
            </div>
			<button onClick={this.handleClick}>CHAT</button>
        </div>
        
        {this.toggle && (
		    <div>
			    <Embed  active
                        url={`https://www.twitch.tv/embed/${displayName}/chat`}
                        iframe={{
                            allowFullScreen: true
                        }}
                />
		    </div>
        )}
	</div>
</Fragment>
        );
    }

}

export default Stream
