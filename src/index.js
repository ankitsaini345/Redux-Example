const { store } = require("./store");


store.subscribe(()=> {
    console.log('store changed. state: ', store.getState());
})

store.dispatch({type: "add"})
console.log(store.getState());