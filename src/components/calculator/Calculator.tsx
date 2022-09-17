
import React ,{useState} from 'react'
import './calculator.css'

const Calculator = () => {
    const [num1, setNum1] = useState<number>(0);
    const [num2, setNum2] = useState<number>(0);
    const [result,setResult]= useState<number | string>(0);

// console.log(num1,num2);

    function Calc (condition:string):void{
     

        switch(condition){
            case "PLUS":
                setResult(num1+num2);
                break;

            case "MINUS":
                setResult(num1-num2);
                break;

                case 'MULTIPLY':
                    setResult(num1*num2);
                    break;

                case "DIVIDE":
                    setResult( num2 === 0 ? 'infinite' : num1/num2 )
                    break;

                default:
                    setResult(num2===0 ? "infinite" :num1 % num2);
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
    <div className='left'></div>
   <div className='middle'>
   <h2>welcome </h2>
   <div className='input-container'>
       <div className='input'>
           
           <input type='number' placeholder='Enter First Number ' value={num1!==0 ? num1 :0} onChange={(e) => setNum1( parseFloat( e.target.value))}></input>
      
   
           <input type='number' placeholder='Enter second number' value={num2 !==0 ? num2 :0 } onChange={(e) => setNum2(parseFloat( e.target.value))}></input>

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