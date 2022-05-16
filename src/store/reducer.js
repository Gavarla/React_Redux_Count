const initialState = {
       count:1
}

const reducer = (state=initialState,action)=>{
  if(action.type==="Inc"){
    return {count:state.count +1}
  }
  
  if(action.type==="Dec"){
    return {count:state.count -1}
  }
  

  return state

}
export default reducer;