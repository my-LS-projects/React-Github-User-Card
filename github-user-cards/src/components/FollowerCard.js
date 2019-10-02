import React from "react"



class FollowerCard extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div className="follower-card">
                <h2>{this.props.username}</h2>
                <img src={`${this.props.avatar_url}`} className="user-portrait"></img>
                <a href={`${this.props.github}`} target="_blank">View GitHub</a>
            </div>
        )
    }
}

export default FollowerCard