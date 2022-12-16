import { useSelector,useDispatch } from "react-redux"
import { buyIceCream } from "../redux/icecream/iceCreamAction"

const IceCreamContainer=()=>{
    const numOfIceCreams=useSelector(state=>state.iceCream.numOfIceCreams)
    const dispatch=useDispatch()
    return(<div>
        <h1>Number of IceCreams-{numOfIceCreams}</h1>
        <button onClick={()=>dispatch(buyIceCream())}>buyIceCream</button>
    </div>)
}

export default IceCreamContainer