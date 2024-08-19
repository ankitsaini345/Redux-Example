// import { createAction, createReducer } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

let lastId = 0;

const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {
        bugAdded: (bugs, action) => {
            bugs.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false,
            })
        },
        bugRemoved: (bugs, action) => {
            bugs.filter(bug => bug.id !== action.payload.id)
        },
        bugResolved: (bugs, action) => {
            const index = bugs.findIndex((bug) => bug.id === action.payload.id);
            bugs[index].resolved = true
        }
    }
})

export const { bugAdded, bugRemoved, bugResolved } = slice.actions;
export default slice.reducer;


// Old Actions
// export const bugAdded = createAction('bugAdded')
// export const bugRemoved = createAction('bugRemoved')
// export const bugResolved = createAction('bugResolved')

// Old Reducer
// export const reducer = createReducer([], (builder) => {
//     builder
//         .addCase(bugAdded, (bugs, action) => {
//             bugs.push({
//                 id: ++lastId,
//                 description: action.payload.description,
//                 resolved: false,
//             })
//         })
//         .addCase(bugRemoved, (bugs, action) => {
//             bugs.filter(bug => bug.id !== action.payload.id)
//         })
//         .addCase(bugResolved, (bugs, action) => {
//             const index = bugs.findIndex((bug) => bug.id === action.payload.id);
//             bugs[index].resolved = true
//         })
// })
