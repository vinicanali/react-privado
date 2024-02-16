export function reducer(state, action) {
    const { type, payload } = action;

    switch (type) {
        case "SET_CITIES":
            return { ...state };
        default:
            return state;
    }
}