import React from 'react';
import { connect } from 'react-redux';

const Complement = ( {complement}) => (
    <div className="tile is-child box">
        <p className="title">Notes complémentaires</p>
        <div className="content">
            <div className="field">
                <textarea className="textarea" placeholder="Commencez ici" rows="4" defaultValue={complement.label}></textarea>
            </div>
        </div>
    </div>
);

const mapStateToProps = state => {
    return { complement: state.detail.complement };
  };

export default connect(
    mapStateToProps
)(Complement);