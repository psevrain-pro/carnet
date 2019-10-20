import React from 'react';
import { connect } from 'react-redux';
import NoteEtoiles from './NoteEtoiles.js';
import {notClick } from '../../redux/actions.js';


const Notes = ({ notes, callbackClick }) => (
    <div className="tile is-child box">
        <div>
            <h2 className="subtitle">Note du jour</h2>
            <h1 className="title is-centered">{notes.global.toFixed(2)}/5</h1>
        </div>
        <div>
            <ul>
                <li>
                    <div className="label">Sport</div>
                    <div>
                        <NoteEtoiles note={notes.sport} sujet="sport" callbackClick={callbackClick}/>
                    </div>
                </li>
                <li>
                    <div className="label">Boisson</div>
                    <div>
                        <NoteEtoiles note={notes.boisson} sujet="boisson" callbackClick={callbackClick} />
                    </div>
                </li>
                <li>
                    <div className="label">Nourriture</div>
                    <div>
                        <NoteEtoiles note={notes.nourriture} sujet="nourriture" callbackClick={callbackClick} />
                    </div>
                </li>
                <li>
                    <div className="label">Social</div>
                    <div>
                        <NoteEtoiles note={notes.social} sujet="social" callbackClick={callbackClick}/>
                    </div>
                </li>
                <li>
                    <div className="label">Apprendre</div>
                    <div>
                        <NoteEtoiles note={notes.apprendre} sujet="apprendre" callbackClick={callbackClick}/>
                    </div>
                </li>
            </ul>
        </div>
    </div>
);

const mapStateToProps = state => {
    return { notes: state.detail.notes };
};

export default connect(
    mapStateToProps,
    {callbackClick: (sujet, note)=>notClick(sujet, note),}
)(Notes);