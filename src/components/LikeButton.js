import React from 'react';

export default class LikeButton extends React.Component {
    render() {
        return <button className="btn btn-primary">Like</button>;
        //return React.createElement('button', {class: 'btn btn-primary'}, 'Like');
    }
}