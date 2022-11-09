import { useContext } from "react";
import { SurveyContext } from "../../utils/context";


function Results() {

  const {answers, saveAnswers} = useContext(SurveyContext)

  console.log(answers)
  
    return (
      <div>Results</div>
    )
  }
  
  export default Results