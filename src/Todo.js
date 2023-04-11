import React, { useState } from "react";

export default function Todo() {
  const [inputVal, setInputVal] = useState("");
  const [todoArr, setTodoArr] = useState([
    { id: "6954125", text: "Todo 1" },
    { id: "bb34433", text: "Todo 2" },
  ]);
  const [isEditing, setIsEditing] = useState({
    editing: false,
    editId: "",
  });
  const onAddTodoHandler = () => {
    if (!inputVal) return;
    setTodoArr([
      ...todoArr,
      { id: crypto.randomUUID().split("-")[0], text: inputVal },
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
              <div className="row mt-2 w-75" key={index}>
                <div className="col-sm-3 col-md-5 fs-4 text-start ms-5">
                  {todo.text}{" "}
                </div>
                <button
                  className="col-2 offset-sm-1 offset-md-2 btn btn-info me-3"
                  onClick={() => {
                    onEditHandler(todo.id, todo.text);
                  }}
                >
                  Edit
                </button>
                <button
                  className="col-2 btn btn-danger"
                  onClick={() => onDeleteHandler(todo.id)}
                >
                  Delete
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}
