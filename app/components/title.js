import React from 'react';
import events from '../events';

export default class Title extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='title'>
                <img className='title-image' src={this.props.title.img} />
                <span className='action' onClick={this.moveTitle.bind(this)}> {this.props.action} </span>
            </div>
        )
    }

    // ---

    moveTitle() {
        events.trigger('title.' + this.props.action, this.props.title);
    }
}