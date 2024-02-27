import './Result.css'

export default function Result(){
    return(
        <div className="Left_Container">
            <p>Your Result</p>

            <div className="Cercle">
                <p className='numero'>76</p>
                <p className='numero_of'>of 100</p>
            </div>

            <div className="BottomSection">
                <p className='mention'>Great</p>
                <p className='description'>Your scored higher than 65% of the people who have taken these tests</p>
            </div>

        </div>
    )
}