import { useRef } from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DragabbleCard from "./DraggableCard";

const Wrapper = styled.div`
  width: 300px;
  padding-top: 10px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 300px;
  display:flex;
    flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

interface IAreaProps {
    isDraggingOver: boolean
    isDraggingFromThis: boolean;
}

const Area = styled.div<IAreaProps>`
background-color: ${props => props.isDraggingOver ? "#dfe6e9" : props.isDraggingFromThis ? "#b2bec3" : "transparent"};
flex-grow: 1;
transition: background-color: 0.3s ease-in-out;
padding:20px;
`

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

function Board({ toDos, boardId }: IBoardProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const onClick = () => {
        inputRef.current?.focus()
    };
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <input ref={inputRef} placeholder="grap me" />
      <button onClick={onClick}>Click me</button>
      <Droppable droppableId={boardId}>
        {(magic, snapshot) => (
          <Area isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)} isDraggingOver={snapshot.isDraggingOver} ref={magic.innerRef} {...magic.droppableProps}>
            {toDos.map((toDo, index) => (
              <DragabbleCard key={toDo} index={index} toDo={toDo} />
            ))}
            {magic.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}
export default Board;