export function createStore(reducerFn) {
    let state;
    const listenerArray = [];

    function getState() {
        return state;
    }

    function dispatch(action) {
        console.log("custom store");
        state = reducerFn(state, action);
        listenerArray.forEach(listener => {
            listener();
        });
    }

    function subscribe(listener) {
        listenerArray.push(listener);
    }

    return {
        getState,
        dispatch,
        subscribe
    }
}