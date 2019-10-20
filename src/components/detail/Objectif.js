import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {objChange, objCheck} from '../../redux/actions.js';

const Objectif = ({ objectif, key, objChange, objCheck }) => (
    <div className="field is-grouped">
        <input className={objectif.check ? "input is-success":"input"} type="text" 
            placeholder="Nouvel objectif"
            defaultValue={objectif.label}
            onBlur={e => objChange(key, e.target.value)} 
        />
        &nbsp;
        <a onClick={e => objCheck(key)} className={objectif.check ? "button is-rounded is-success":"button is-rounded "}>
            <FontAwesomeIcon icon="check"  />
        </a>
    </div>

);


export default connect(
    null,
    {objChange, objCheck}
)(Objectif);