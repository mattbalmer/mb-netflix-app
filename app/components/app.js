import React from 'react';
import TitleRow from './title-row';
import TitleList from './title-list';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var titleLists = this.props.titleLists;

        return (
            <main className='main'>
                {this.mapTitleLists(titleLists)}
                <TitleList titles={titleLists.mylist} />
            </main>
        )
    }

    // ---

    mapTitleLists(titleLists) {
        var html = [],
            config = this.props.config;

        for(let id in titleLists) {
            var titles = titleLists[id];
            html.push( <TitleRow name={config[id].name} titles={titles} action={config[id].action} /> );
        }

        return html;
    }
}