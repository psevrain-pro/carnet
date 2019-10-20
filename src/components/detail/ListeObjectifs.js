import React from 'react';
import { connect } from 'react-redux';
import Objectif from './Objectif.js';


const ListeObjectifs = ({listeObjectifs}) => (
            <article className="tile is-child box is-12">
                <p className="title">Les objectifs du jour</p>
                <p className="subtitle">Donnez l'orientation de la journée (?)</p>
                {listeObjectifs.map( (item, index) => 
                  (<Objectif key={index} objectif={item} />))}
                
            </article>

);

const mapStateToProps = state => {
    return { listeObjectifs: [...state.detail.listeObjectifs, {label:"", check: false}] };
  };

export default connect(
    mapStateToProps
)(ListeObjectifs);