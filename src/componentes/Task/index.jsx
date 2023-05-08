import styled from "styled-components";

function Task(props) {
  const { name, onToggle, onChange } = props;

  return (
    <MyTask>
      <input type="checkbox" onChange={onChange} onToggle={onToggle} />
      <span>{name}</span>
    </MyTask>
  );
}

export { Task };

const MyTask = styled.div`
  display: flex;
  flex: 1;
  justify-items: center;
  align-items: center;
  text-align: center;
`;
