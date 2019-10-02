import React from "react"



class UserCard extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div className="user-card">
                <img src={`${this.props.avatar_url}`} className="user-portrait"></img>
                <h1>{this.props.name}</h1>
                <h2>{this.props.username}</h2>
                <a href={`${this.props.blog}`} target="_blank">Website</a>
                <p>"{this.props.bio}"</p>
            </div>
        )
    }
}

export default UserCard