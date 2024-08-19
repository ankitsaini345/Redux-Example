import { bugAdded, bugRemoved, bugResolved } from './store/bugs';
import store from './store/configureStore';
import { projectAdded } from './store/projects';

const unsubscribe = store.subscribe(() => {
    console.log('Store changed!', store.getState());
});

store.dispatch(projectAdded({ name: 'Project 1' }));
store.dispatch(bugAdded({ description: 'Bug1' }))
store.dispatch(bugAdded({ description: 'Bug2' }))
store.dispatch(bugAdded({ description: 'Bug3' }))

unsubscribe();

store.dispatch(bugRemoved({ id: 1 }))
store.dispatch(bugResolved({ id: 2 }))

console.log(store.getState());