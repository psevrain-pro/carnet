import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo.js';

const ListeTodos = ({listeTodos}) => (
    <div className="tile is-child box">
    <h2 className="title">Todo du jour</h2>
    <p className="subtitle">Accomplis : {listeTodos.filter( (t) => t.check).length}/{listeTodos.length} </p>

    <ul>
        {listeTodos.map( (todo, index) => (
            <Todo key={index} todo={todo} />
        ))}
    </ul>
</div>

);

const mapStateToProps = state => {
    //return { listeTodos: state.listeTodos.map( (index)=>state.listeTodosG.filter( (item)=> item.id===index)) };
    return { listeTodos: state.detail.listeTodos.map( (item)=>state.todos[item]) };

  };

export default connect(
    mapStateToProps,
    {}
)(ListeTodos);