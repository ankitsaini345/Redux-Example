import { apiCallBegan } from './middlewares/api';
import {
    bugAdded,
    bugAssignedToUser,
    bugResolved,
    getBugsbyUser,
    loadBugs,
} from './store/bugs';
import store from './store/configureStore';
import { projectAdded } from './store/projects';
import { userAdded } from './store/users';

store.subscribe(() => {
    console.log('Store changed!', store.getState());
});

// store.dispatch(userAdded({ name: 'User 1' }));
//   store.dispatch(userAdded({ name: 'User 2' }));
//   store.dispatch(projectAdded({ name: 'Project 1' }));
//   store.dispatch(bugAdded({ description: 'Bug 1' }));
//   store.dispatch(bugAdded({ description: 'Bug 2' }));
//   store.dispatch(bugAdded({ description: 'Bug 3' }));
//   store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
//   store.dispatch(bugResolved({ id: 1 }));

store.dispatch(
    loadBugs()
);

const bugs = getBugsbyUser(1)(store.getState().entities.bugs);
console.log(bugs);