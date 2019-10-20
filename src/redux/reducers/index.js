import { combineReducers } from "redux";

import listeObjectifs from "./detail/listeObjectifs";
import complement from "./detail/complement";
import listeFaits from "./detail/listeFaits";
import notes from "./detail/notes";
import listeTodos from "./detail/listeTodos";

import todos from "./todos";
import ui from "./ui";



export default combineReducers(
    {
        detail:combineReducers({listeObjectifs, listeFaits, complement, notes , listeTodos }), 
        todos,
        ui
    }
);