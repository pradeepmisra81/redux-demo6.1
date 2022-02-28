import { useSelector,useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const incrementHandler = () => {
    dispatch({type: 'increment'});
  }

  const increseHandler = () => {
    dispatch({type: 'increse', amount: 5});
  }

  const decrementHandler = () => {
    dispatch({type: 'decrement'});
  }

  return (
    <div className={classes.counter}>
      <h1>Redux Demo6.1 (Counter)</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increseHandler}>Increse by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
