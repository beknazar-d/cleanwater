import '../pagechanger/pagechanger.css';
import string3 from'../images/string3.png';
import string1 from '../images/string1.png';
const Page = () => {
    
    return (
        <div className='main'>
            <button className='page-button right-btn'><img className='string-image' src={string1} alt="stringleft" /></button>
                <div className="page">
                    <span className='span first'>1</span> из <span className='span second'>1</span>
                </div>
            <button className='page-button left-btn'><img className='string-image' src={string3} alt="rightstring" /></button>
        </div>
    )
}
export default Page