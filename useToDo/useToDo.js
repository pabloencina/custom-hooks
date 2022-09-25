import { useEffect, useReducer } from "react";
import { toDoReducer } from "./toDoReducer";

const useToDo = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem("toDos")) || [];
      };

    const initialState = [];

    const [toDos, dispatchToDo] = useReducer(toDoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);


    const handleNewToDo = (toDo) => {
        const action = {
          type: "Add toDo",
          payload: toDo,
        };
        dispatchToDo(action);
      };
    
      const handleDeleteToDo = ( id ) => {
        console.log({ id });
        dispatchToDo({
          type: "Remove toDo",
          payload: id,
        });
      };
    
      const handleToggleToDo = ( id ) => {
            dispatchToDo({
                type: "Toggle toDo",
                payload: id
            })
      }


  return {
    toDos,
    handleNewToDo,
    handleDeleteToDo,
    handleToggleToDo,
    toDosCount : toDos.length,
    pendingToDosCount : toDos.filter(toDo => !toDo.done).length
  }
}

export default useToDo
