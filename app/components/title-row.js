import React from 'react';
import Title from './title';
import events from '../events';

export default class TitleRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { titles: props.titles };
    }
    render() {
        return (
            <section className='title-row'>
                <h2>{this.props.name}</h2>
                <div className='title-list-images'>
                    {this.mapTitles(this.state.titles)}
                </div>
            </section>
        )
    }
    componentDidMount() {
        var component = this;

        if(component.props.name == 'My List') {
            this.unsubscribe = events.on('data.mylist', (titles) => {
                this.setState({ titles: titles });
            });
        }
    }
    componentWillUnmount() {
        this.unsubscribe();
    }

    // ---

    mapTitles(titles) {
        return titles.map((title) => {
            return <Title title={title} action={this.props.action} />
        });
    }
}