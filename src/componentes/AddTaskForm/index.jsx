import { useState } from "react";

function AddTaskForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        type="text"
        name="taskName"
        value={props.value}
        onChange={props.onChange}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default AddTaskForm;
