import { bugAdded, bugRemoved, bugResolved } from './store/bugs';
import store from './store/configureStore';

const unsubscribe = store.subscribe(() => {
    console.log('Store changed!', store.getState());
});

store.dispatch(bugAdded('Bug1'))
store.dispatch(bugAdded('Bug2'))
store.dispatch(bugAdded('Bug3'))

unsubscribe();

store.dispatch(bugRemoved(1))
store.dispatch(bugResolved(2))

console.log(store.getState());