
function Elemnt(props) {
    return (
    <li key={props.data.id}>
        <ul className='Element'>
            <li className="date">
               {props.data.date}
            </li>
            <li className="data">
                <p>
                    <span>{props.data.position}</span> w <span>{props.data.companyName}</span> {props.data.jobDescryption}
                </p>
            </li>
        </ul>
    </li>
    );
  }
  
  export default Elemnt;
  