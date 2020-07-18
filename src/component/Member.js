import React, { Component } from 'react';
import Avatar from './member/Avatar.js';
import Info from "./member/Info.js";
import Comment from "./member/Comment.js";
class Member extends Component {
    render() {
        var memberList = {
            name: "Truong Van A",
            info: {
                age: "20",
                add: "Trieu An",
                comment: "Chua co bo",
            }
        }
        return (
            <div className="container">
                <Avatar name={memberList.name}></Avatar>
                <Info info={memberList.info}></Info>
                <Comment info={memberList.info}></Comment>
            </div>
        );
    }
}
export default Member;
