import React ,{ useState} from 'react';
import './calculator.css'


const Calculator = () => {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result,setResult]= useState(0);

console.log(num1,num2);

    function Calc (condition){
        let n1 = parseFloat(num1)
        let n2 = parseFloat(num2)

        switch(condition){
            case "PLUS":
                setResult(n1+n2);
                break;

            case "MINUS":
                setResult(n1-n2);
                break;

                case 'MULTIPLY':
                    setResult(n1*n2);
                    break;

                    case "DIVIDE":
                     setResult( n2 === 0 ? 'infinite' : n1/n2 )
                     break;

                    default:
                        setResult(n2===0 ? "infinite" :n1 % n2);
                        break;

        }

    };

    function Clear(){
      
    setNum1(0);
    setNum2(0);
    setResult(0);
    };


  return (
   
    <div className='calc-container'>
         <div className='left'>
        
        </div>
        <div className='middle'>
        <h2>welcome </h2>
        <div className='input-container'>
            <div className='input'>
                
                <input type='nember' placeholder='Enter First Number ' value={num1!==0 ? num1 :"0"} onChange={(e) => setNum1(e.target.value)}></input>
           
        
                <input type='nember' placeholder='Enter second number' value={num2 !==0 ? num2 :'0' } onChange={(e) => setNum2(e.target.value)}></input>

            </div>

            <h3> result: <span> {result}</span></h3>

        </div>
        
        <div className='btn-container'>
            <div className='btn-div'>
            <button className="btn btn-success" onClick={() => Calc("PLUS")}>Addition  </button>
            <button className="btn btn-primary" onClick={() => Calc("MINUS")}>Subtract  </button>
            <button className="btn" onClick={Clear}>Clear </button>
           
            </div>
            <div className='btn-div'>
            <button className="btn btn-warning" onClick={() => Calc("MULTIPLY")}>Multiplication  </button>
            <button className="btn btn-danger" onClick={() => Calc("DIVIDE")}>Division  </button>
            </div>
        </div>
        </div>
      
        
        
    
    </div>
  )
}

export default Calculator