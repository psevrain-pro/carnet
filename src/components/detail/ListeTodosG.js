import React from 'react';
import { connect } from 'react-redux';
import TodoG from './TodoG.js';
import { todoToday, todoCheck, setFilter, addTodo, changeText } from '../../redux/actions.js';


class ListeTodosG extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: "" };
    }

    handleChange = text => this.setState({input: text});

    handleAdd = ()=> {
        this.props.addTodo(this.state.input);
        this.setState({input: ""});
    }

    render() {
        return (
            <div className="tile is-child box">
                <h2 className="title">Todo généraux</h2>
                <div className="tabs">
                    <ul>
                        <li className={this.props.filter === "ACTIVE" ? "is-active" : ""} ><a onClick={e => this.props.setFilter("ACTIVE")}>A faire ({this.props.numbers.nbActive})</a></li>
                        <li className={this.props.filter === "ALL" ? "is-active" : ""}><a onClick={e => this.props.setFilter("ALL")}>Tous ({this.props.numbers.nbAll})</a></li>
                        <li className={this.props.filter === "DONE" ? "is-active" : ""}><a onClick={e => this.props.setFilter("DONE")}>Faits ({this.props.numbers.nbDone})</a></li>
                    </ul>
                </div>
                <ul>
                    <ul>
                        {this.props.listeTodosG.map((todo, index) => (
                            <TodoG key={index} todo={todo} onToday={this.props.onClickToday} onCheck={this.props.todoCheck} />
                        ))}
                    </ul>
                </ul>
                <br></br>
                    <div className="field  has-addons">
                        <div className="control">
                            <input className="input" id="addText"
                                type="text" placeholder="Nouveau todo"
                                value={this.state.input}
                                onChange={e=>this.handleChange(e.target.value)}
                            />
                        </div>
                        <div className="control">
                            <button type="submit" onClick={e=>this.handleAdd()} className="button is-primary">Ajouter</button>
                        </div>
                    </div>
            </div>);
    }
}

const mapStateToProps = state => {
    let liste = [];
    switch (state.ui.todoFilter) {
        case "ACTIVE":
            liste = Object.keys(state.todos).filter((key) => state.todos[key].check === false).map((k) => state.todos[k]);
            break;
        case "DONE":
            liste = Object.keys(state.todos).filter((key) => state.todos[key].check === true).map((k) => state.todos[k]);
            break;
        case "ALL":
        default:
            liste = Object.keys(state.todos).filter((key) => true).map((k) => state.todos[k]);
    }
    liste.forEach((item) => item.today = state.detail.listeTodos.includes(item.id));

    const numbers = {
        nbActive: Object.keys(state.todos).filter((k) => !state.todos[k].check).length,
        nbDone: Object.keys(state.todos).filter((k) => state.todos[k].check).length,
        nbAll: Object.keys(state.todos).length
    }

    return {
        listeTodosG: liste,
        filter: state.ui.todoFilter,
        numbers: numbers
    };
};

export default connect(
    mapStateToProps,
    {
        onClickToday: todoToday,
        todoCheck: todoCheck,
        setFilter: setFilter,
        addTodo: addTodo
    }
)(ListeTodosG);