// import { createAction, createReducer } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegan } from '../middlewares/api';

let lastId = 0;

const slice = createSlice({
    name: 'bugs',
    initialState: {
        list: [],
        loading: false,
        lastFetch: null,
    },
    reducers: {
        bugsReceived: (bugs, action) => {
            bugs.list = action.payload;
        },
        bugAdded: (bugs, action) => {
            bugs.list.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false,
            })
        },
        bugRemoved: (bugs, action) => {
            bugs.list.filter(bug => bug.id !== action.payload.id)
        },
        bugResolved: (bugs, action) => {
            const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
            bugs.list[index].resolved = true
        },
        bugAssignedToUser: (bugs, action) => {
            const { bugId, userId } = action.payload;
            const index = bugs.list.findIndex((bug) => bug.id === bugId);
            bugs.list[index].userId = userId;
        },
    }
})

const url = '/bugs';
export const loadBugs = () =>
  apiCallBegan({
    url,
    onSuccess: bugsReceived.type,
  });

export const { bugAdded, bugRemoved, bugResolved, bugAssignedToUser, bugsReceived } = slice.actions;
export default slice.reducer;

export const getUnresolvedBugs = (bugs) => bugs.list.filter((bug) => !bug.resolved)

export const getBugsbyUser = (userId) => (bugs) => bugs.list.filter((bug) => bug.userId === userId)
