import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);
  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };
  const handleDecrement = (amount: number) => {
    dispatch(decrement(amount));
  };
  return (
    <>
      <h1>Counter with Redux</h1>
      <button onClick={() => handleIncrement(1)}>Increment</button>
      <button onClick={() => handleIncrement(5)}>Increment By 5</button>
      <div>{count}</div>
      <button onClick={() => handleDecrement(1)}>Decrement</button>
      <button onClick={() => handleDecrement(5)}>Decrement By 5</button>
    </>
  );
}

export default App;
