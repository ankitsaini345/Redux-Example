export const reducer = (state = [], action) => {

    if (action.type == "add")
        return [1, 2]
    return state;
}