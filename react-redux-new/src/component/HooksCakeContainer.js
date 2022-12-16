import {useSelector,useDispatch} from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'

const HooksCakeContainer=()=>{
    const numOfCakes=useSelector(state=>state.cake.numOfCakes)
    const dispatch=useDispatch()

    return(<div>
        <h2>Num of Cakess-{numOfCakes}</h2>
        <button onClick={()=>dispatch(buyCake())}>buyCake</button>
    </div>) 
}

export default HooksCakeContainer