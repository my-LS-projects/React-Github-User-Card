import React from "react"
import UserCard from "./UserCard"
import axios from "axios"


class User extends React.Component {
    constructor(){
        super();
        this.state = {
            me: [],
        }
    }

    componentDidMount = () => {
        axios.get('https://api.github.com/users/frescocodes')
        .then(response => {
            console.log("RES: ", response)
            this.setState({ me: response.data})
            console.log("UPDATED STATE :", this.state)
        })
        .catch(error => {
            console.log("ERROR: ", error)
        })
    }

    render() {
        return (
            <>
                {console.log("ME", this.state.me)}
                <UserCard name={this.state.me.name} username={this.state.me.login} blog={this.state.me.blog} bio={this.state.me.bio} avatar_url={this.state.me.avatar_url}/>
            </>
        )
    }
}

export default User