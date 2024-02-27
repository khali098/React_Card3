
import './SummaryContent.css'
import Rectangle  from './Rectangle'
import bolt from '../Assets/bolt.svg'
import brain from '../Assets/brain.svg'
import comment from '../Assets/comment.svg'
import eye from '../Assets/eye.svg'

function Summary(){
    return(
        <div className="Container">
            
                <h3>Summary</h3>
                

                <div className="Rectangle">

     <Rectangle image={bolt} proprety={"Reaction"} evaluation={"80  "} bgColor='#fff8f4' textColor='red' />
     <Rectangle image={brain} proprety={"Memory"} evaluation={"92 "} bgColor='#fffcef' textColor='#f1d486' imgColor='#f1d486'/>
     <Rectangle image={comment} proprety={"Verbal"} evaluation={"61 "} bgColor='#f2fbfa' textColor='#7ec1ad' imgColor='#7ec1ad' />
     <Rectangle image={eye} proprety={"Visual"} evaluation={"72 "} bgColor='#f3f3fe' textColor='#656ca3' imgColor='#656ca3' />

     
    
            </div>
            <button> Continue </button>
            
            
        </div>
    )
}

export default Summary