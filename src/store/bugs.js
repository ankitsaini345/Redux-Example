import { createAction, createReducer } from '@reduxjs/toolkit'

let lastId = 0;

//Actions

export const bugAdded = createAction('bugAdded')
export const bugRemoved = createAction('bugRemoved')
export const bugResolved = createAction('bugResolved')

//Old
// export const bugAdded = (description) => ({
//     type: BUG_ADDED,
//     payload: {
//         description
//     }
// })


//Reducer
export const reducer = createReducer([], (builder) => {
    builder
        .addCase(bugAdded, (bugs, action) => {
            bugs.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false,
            })
        })
        .addCase(bugRemoved, (bugs, action) => {
            bugs.filter(bug => bug.id !== action.payload.id)
        })
        .addCase(bugResolved, (bugs, action) => {
            const index = bugs.findIndex((bug) => bug.id === action.payload.id);
            bugs[index].resolved = true
        })
})

//Old
// export function reducer(state = [], action) {
//     switch (action.type) {
//         case BUG_ADDED:
//             return [
//                 ...state,
//                 {
//                     id: ++lastId,
//                     description: action.payload.description,
//                     resolved: false,
//                 },
//             ];
//         case BUG_REMOVED:
//             return state.filter((bug) => bug.id !== action.payload.id);
//         case BUG_RESOLVED:
//             return state.map((bug) => bug.id !== action.payload.id ? bug : { ...bug, resolved: true });
//         default:
//             return state;
//     }
// }