
export const toDoReducer = ( initialState = [], action ) => {

    switch (action.type) {
        case 'Add toDo':
            
            return [ ...initialState, action.payload];

        case 'Remove toDo':

            return initialState.filter( toDo => toDo.id !== action.payload)

        case 'Toggle toDo':

        return initialState.map( toDo => {
            if( toDo.id === action.payload ){
                return {
                    ...toDo,
                    done: !toDo.done
                }
            }
             return toDo
        })

        default: 
            return initialState;
    }
}