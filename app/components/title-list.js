import React from 'react';
import events from '../events';

export default class TitleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { titles: props.titles };
    }
    render() {
        return (
            <section className='title-list'>
                <h2>My List Titles</h2>
                {this.mapTitles(this.state.titles)}
            </section>
        )
    }
    componentDidMount() {
        this.unsubscribe = events.on('data.mylist', (titles) => {
            this.setState({ titles: titles });
        });
    }
    componentWillUnmount() {
        this.unsubscribe();
    }

    // ---

    mapTitles(titles) {
        return titles
            .map(function(title) {
                return title.title
            })
            .join(', ');
    }
}