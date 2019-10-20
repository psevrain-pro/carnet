import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faiChange, faiCheck} from '../../redux/actions.js';

const Fait = ({ fait, key, faiChange, faiCheck }) => (
    <div className="field is-grouped">
        <input className="input is-success" 
            type="text" placeholder="Nouveau fait marquant de la journée"
            defaultValue={fait.label} 
            onBlur={e => faiChange(key, e.target.value)} 
        />
        &nbsp;
        <a onClick={e=> faiCheck(key, 1)}
            className={"button is-rounded " + (fait.level==1? "is-success":"")}>
            <FontAwesomeIcon icon="plus" />
        </a>
        <a  onClick={e=> faiCheck(key, -1)}
            className={"button is-rounded " + (fait.level==-1? "is-warning":"")}>
            <FontAwesomeIcon icon="minus" />
        </a>
    </div>
);


export default connect(
    null,
    {faiChange, faiCheck}
)(Fait);



