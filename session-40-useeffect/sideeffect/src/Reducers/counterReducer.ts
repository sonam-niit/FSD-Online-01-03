type State = {
    count: number;
}

type Action =
 | {type: "increment"}
 | {type: "decrement"}
 | {type: "reset"}

const initialState: State = {
    count: 0
}

export function reducer(state: State, action: Action):State {
    switch (action.type){
        case "increment":
            return {count: state.count +1}
            // take old state increase by 1 and set it to count variable
        case "decrement":
            return {count: state.count -1}
        case "reset":
            return initialState;
        default:
            return state;
    }
}