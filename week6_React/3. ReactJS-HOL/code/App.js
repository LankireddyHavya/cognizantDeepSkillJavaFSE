import './App.css';
import { CalculateScore } from './components/CalculateScore';

function App() {
  return (
    <div>
       <CalculateScore Name={"Havya"}
       School={"KL University"}
       total={298}
       goal={3}
       /> 
    </div>
  );
}

export default App;
