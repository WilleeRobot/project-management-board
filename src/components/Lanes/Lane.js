import styled from "styled-components";
import Task from "../Tasks/Task";

const LaneWrapper = styled.div`
  text-align: left;
  padding: 0 20px;
  background: #dd88d4;
  border-radius: 20px;
  min-height: 50vh;
  width: 20vw;

  @media (max-width: 768px) {
    margin-bottom: 5%;
  }
`;

const Title = styled.h2`
  width: 100%;
  padding: 10px 0px;
  text-align: center;
  border-bottom: 1px solid #505050;
`;

const Lane = ({
  onDragStart,
  onDragOver,
  onDrop,
  title,
  loading,
  error,
  laneId,
  tasks,
}) => {
  return (
    <LaneWrapper onDragOver={onDragOver} onDrop={(e) => onDrop(e, laneId)}>
      <Title>{title}</Title>
      {loading || error ? (
        <span>{error || "Loading..."}</span>
      ) : (
        tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            body={task.body}
            onDragStart={onDragStart}
          />
        ))
      )}
    </LaneWrapper>
  );
};

export default Lane;
