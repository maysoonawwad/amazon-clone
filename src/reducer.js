export const initialState = {
    basket : [],
    user: null ,
};

const reducer =  (state , action) =>{
    console.log(action);
    switch(action.type){
        case "SET_USER" : return{
            ...state ,
            user: action.user,
        }
        case 'ADD-TO-BASKET':
        // logic stuff (adding item)
          return {
              ...state,
             basket: [...state.basket , action.item],

            };
        break;
        case 'REMOVE-FROM-BASKET':
            // REMOVE ITEM 

            // we cloned the basket
            let newBasket=[...state.basket];
            // we check to see if product exists , remove it..
            const index= state.basket.findIndex((basketItem)=>basketItem.id === action.id);
            if (index >= 0){
                // remove it
                newBasket.splice(index, 1);

            }

            return { ...state, basket: newBasket};
            break;
        default : return state;
    }
}

export default reducer;