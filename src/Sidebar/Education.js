import Elemnt from "../MainContext/Elemnt";

function Education(props) {
  const data =[
    {
      id:0,
      date:"0000-0000",
      position:"specjalista do spraw różnorakich",
      companyName:"szlachta też pracuje",
      jobDescryption:"ja jestem człowiek pracujący, żadnej pracy się nie boję!"
    },
  ]
    return (
    <div className='Education'>
        <h1 className="elementHeader">Edukacja:</h1>
        <ul>{data.map(data=>  <Elemnt key={data.id} data={data}/> )}</ul>
    </div>
    );
  }
  
  export default Education;
  