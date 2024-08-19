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
        },
        bugAssignedToUser: (bugs, action) => {
            const { bugId, userId } = action.payload;
            const index = bugs.findIndex((bug) => bug.id === bugId);
            bugs[index].userId = userId;
        },
    }
})

export const { bugAdded, bugRemoved, bugResolved,bugAssignedToUser } = slice.actions;
export default slice.reducer;

export const getUnresolvedBugs = (bugs) => bugs.filter((bug) => !bug.resolved)

export const getBugsbyUser = (userId) => (bugs) => bugs.filter((bug) => bug.userId === userId)

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
