const logger = (state) => (next) => (action) => {
    // console.log('store ', state);
    // console.log('next ', next);
    // console.log('action ', action);
    next(action)
}

export default logger;
