import React from 'react';
import { connect } from 'react-redux';

import ListeObjectifs from './detail/ListeObjectifs.js';
import Complement from './detail/Complement.js';
import ListeFaits from './detail/ListeFaits.js';
import Notes from './detail/Notes.js';
import ListeTodos from './detail/ListeTodos.js';
import ListeTodosG from './detail/ListeTodosG.js';

const Detail = () => (
    <section className="section">
        <div className="container">
            <div className="columns">
                <div className="column is-half">
                    <div className="tile is-ancestor ">
                        <div className="tile is-vertical is-parent">
                            <ListeObjectifs />
                            <Complement />
                            <ListeFaits />
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="tile is-ancestor">
                        <div className="tile is-parent is-vertical">
                            <Notes />
                            <ListeTodos />
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="tile is-ancestor">
                        <div className="tile is-parent is-vertical">
                            <ListeTodosG />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default connect(
    null,
    {}
)(Detail);