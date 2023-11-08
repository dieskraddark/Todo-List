const intialData = {
    list: []
}
const todoReducers = (state = intialData, action) => {
    switch (action.type) {
        case "ADD_TODO":

            const { id, data } = action.payload;
           
            return {
                ...state,//get intial data 
                list: [
                    ...state.list,// pervious data 
                    {
                        id: id,
                        data: data // new data added 
                    }
                ]
            } 
            default: return state;
    }
}
export default todoReducers;