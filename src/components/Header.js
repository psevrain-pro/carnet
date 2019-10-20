import React from 'react';
import {connect} from 'react-redux';

const Header= () => (
    <section className="hero is-primary">
    <div className="hero-body">
        <div className="container">
            <h1 className="title">
                Voici la belle journée du vendredi 11 Octobre 2019
            </h1>
            <h2 className="subtitle">
                YOLO!
            </h2>
        </div>
    </div>
    </section>
);

export default connect(
    null,
    {}
)(Header);