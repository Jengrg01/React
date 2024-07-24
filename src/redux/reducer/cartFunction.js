const initialvalue = {
    cartCount: 0,
}
const cartFunction = (state=initialvalue, action)=>{
    switch(action.type){
        case "ADD_TO_CART":
           return {cartCount:++state.cartCount}
        case "SUB_TO_CART":
            if(state.cartCount>0){
                  return {
                    cartCount: --state.cartCount,
                  };
            }
          else{
            return state
          }
        default:
            return state
    }   
}
export default cartFunction