function AddTaskForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <input type="text" name="taskName" />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default AddTaskForm;
