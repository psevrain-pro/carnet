import React from 'react';
import { connect } from 'react-redux';
import Fait from './Fait.js';

const ListeFaits = ({listeFaits}) => (
    <div className="tile is-child box">
        <p className="title">Faits marquants de la journée</p>
        <div className="content">
            {listeFaits.map( (item, index) => 
               (<Fait fait={item} key={index} />))}
        </div>
    </div>

);

const mapStateToProps = state => {
    return { listeFaits: [...state.detail.listeFaits, {label: "", level: 0}] };
  };

export default connect(
    mapStateToProps
)(ListeFaits);