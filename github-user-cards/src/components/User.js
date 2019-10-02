import React from "react"
import UserCard from "./UserCard"
import axios from "axios"


class User extends React.Component {
    constructor(props){
        super();
    }

    render() {
        return (
            <>
                {console.log("ME", this.props)}
                <UserCard name={this.props.name} username={this.props.username} blog={this.props.blog} bio={this.props.bio} avatar_url={this.props.avatar_url}/>
            </>
        )
    }
}

export default User