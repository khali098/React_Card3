import './Rectangle.css'

function Rectangle({image, proprety, evaluation,imgColor,bgColor,textColor, imgFilter}){
    return(
       
                <div className="Rectangle">
                    
                    <div className='box' style={{backgroundColor:bgColor}}>

            <div className="Proprety" style={{color:textColor}}>

                <img src={image} alt="PropretyIcon" style={{color:imgColor, filter:imgFilter}}  />
                <p> {proprety}  </p>
                
                

            </div>
            <div className="Note">
                <p className='Evaluation'>{evaluation}</p>
                <p > / 100</p>

            </div>
           
            </div>
            </div>
     
    )
}

export default Rectangle