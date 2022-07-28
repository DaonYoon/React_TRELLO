import { Draggable } from "react-beautiful-dnd"
import styled from "styled-components";
import React from "react";



const Card = styled.div`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: ${(props) => props.theme.cardColor};
`;

interface IDrag {
    toDo: string;
    index: number;
}

function DragabbleCard ({toDo, index}: IDrag) {

    
    return (
            
        <Draggable key={toDo} draggableId={toDo} index={index}>
        {(magic) => (
          <Card
            ref={magic.innerRef}
            {...magic.dragHandleProps}
            {...magic.draggableProps}
          >
            {toDo}
          </Card>
        )}
      </Draggable>
    )
}

export default React.memo(DragabbleCard)