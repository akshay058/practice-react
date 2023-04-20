import React, { useState } from "react";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [inputVal, setInputVal] = useState("");
  const [todoArr, setTodoArr] = useState([
    { id: "6954125", text: "Todo 1", completed: false },
    { id: "bb34433", text: "Todo 2", completed: true },
  ]);
  const [isEditing, setIsEditing] = useState({
    editing: false,
    editId: "",
  });
  const onAddTodoHandler = () => {
    if (!inputVal) return;
    setTodoArr([
      ...todoArr,
      {
        id: crypto.randomUUID().split("-")[0],
        text: inputVal,
        completed: false,
      },
    ]);
    console.log(todoArr);

    //crypto.randomUUID for random id generation..........
  };

  const onDeleteHandler = (id) => {
    console.log(id);
    // const filteredArr = todoArr.filter((ele) => ele.id !== id);
    // setTodoArr(filteredArr);
    // by splice method delete........
    const idx = todoArr.findIndex((elem) => elem.id === id);
    const cloneArr = [...todoArr];
    cloneArr.splice(idx, 1);
    setTodoArr(cloneArr);
  };

  const onEditHandler = (id, text) => {
    setInputVal(text);
    setIsEditing({ ...isEditing, editing: true, editId: id });
  };

  const updateTodoHandler = () => {
    const cloneArr = [...todoArr];
    const elemIdx = cloneArr.findIndex((elem) => elem.id === isEditing.editId);
    const newTodoBeAdded = {
      id: isEditing.editId,
      text: inputVal,
    };
    cloneArr[elemIdx] = newTodoBeAdded;
    setTodoArr(cloneArr);
    setInputVal("");
    setIsEditing({ editing: false, editId: "" });
  };

  const handleCompleted = (todo) => {
    console.log(todo);
    const cloneArr = [...todoArr];
    const elem = cloneArr.findIndex((elem) => elem.id === todo.id);
    const newTodoBeAdded = {
      ...todo,
      completed: !todo.completed,
    };
    cloneArr[elem] = newTodoBeAdded;
    setTodoArr(cloneArr);
  };

  return (
    <div className="container">
      <h2 className="mt-3">Todo App</h2>
      <div className="d-flex align-items-end justify-content-center">
        <input
          className="form-control mt-3 w-50 align-self-center"
          placeholder="Add Todo "
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        ></input>
        {!isEditing.editing ? (
          <button
            className="btn btn-primary ms-3"
            onClick={() => onAddTodoHandler()}
          >
            Add Todo
          </button>
        ) : (
          <button
            className="btn btn-warning ms-3"
            onClick={() => updateTodoHandler()}
          >
            Update
          </button>
        )}
      </div>
      <div className="d-flex flex-column align-items-center mt-3">
        {todoArr.length > 0 &&
          todoArr.map((todo, index) => {
            return (
              <TodoItem
                key={index}
                onDeleteHandler={onDeleteHandler}
                todo={todo}
                onEditHandler={onEditHandler}
                handleCompleted={handleCompleted}
              />
            );
          })}
      </div>
    </div>
  );
}
