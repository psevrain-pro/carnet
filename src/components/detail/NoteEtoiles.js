import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NoteEtoiles = ({ note, sujet, callbackClick }) => (
    <div>
        <FontAwesomeIcon onClick={ e=> callbackClick(sujet, 1)} icon={note>0?["fas", "star"]:["far", "star"]} />
        <FontAwesomeIcon onClick={ e=> callbackClick(sujet, 2)} icon={note>1?["fas", "star"]:["far", "star"]} />
        <FontAwesomeIcon onClick={ e=> callbackClick(sujet, 3)} icon={note>2?["fas", "star"]:["far", "star"]} />
        <FontAwesomeIcon onClick={ e=> callbackClick(sujet, 4)} icon={note>3?["fas", "star"]:["far", "star"]} />
        <FontAwesomeIcon onClick={ e=> callbackClick(sujet, 5)} icon={note>4?["fas", "star"]:["far", "star"]} />
    </div>
);


export default (NoteEtoiles);



