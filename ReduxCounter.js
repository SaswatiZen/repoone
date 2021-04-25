import {useStore, useDispatch, useSelector} from 'react-redux';
function ReduxCounter(){
	const dispatch = useDispatch();
	const store = useStore();
	const count = useSelector(state=>state.count);
	console.log('inside redux counter');
	console.log(store);
	const increase = ()=>{
		dispatch({type: 'counter/increase'})
	}
	const decrease = ()=>{
		dispatch({type: 'counter/decrease'})
	}
	const square = ()=>{
		dispatch({type: 'counter/square'})
	}
	const squareroot = ()=>{
		dispatch({type: 'counter/squareroot'})
	}
	return (
		<div>
		count = {count}<br/>
		<button onClick={increase}>increase</button>
		<button onClick={decrease}>decrease</button>
		<button onClick={square}>square</button>
		<button onClick={squareroot}>squareroot</button>
		</div>
		)
}
export default ReduxCounter;