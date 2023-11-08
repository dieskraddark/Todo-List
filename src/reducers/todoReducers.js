const intialState = {
    list: []
}
const todoReducers = (state = intialState, action) => {
    switch (action.type) {
        case "ADD_TODO":

            const { id, data } = action.payload;

            return {
                ...state,//get intial data 
                data: [
                    ...state.list,// pervious data 
                    {
                        id: id,
                        data: data // new data added 
                    }]
            }
    }
}
export default todoReducers