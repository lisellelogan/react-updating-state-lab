// In the components/YouTubeDebugger.js file, create a YouTubeDebugger React component.

// Create a button with the class 'bitrate'. Clicking this button changes the settings.bitrate state property to 12.

// Create a button with the class 'resolution'. Clicking this button changes the settings.video.resolution state property to '720p'.

import React, { Component } from 'react';

export default class YoutubeDebugger extends Component {
    constructor(){
        super()

        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                resolution: '1080p'
                }
            }
        }
    }

    handleBitrateClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleResolutionClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    render(){
        return(
            <div>
                <button 
                className="bitrate"
                onClick={this.handleBitrateClick}>.bitrate</button>
                <button 
                className="resolution"
                onClick={this.handleResolutionClick}>.resolution</button>
            </div>
        )
    }

}