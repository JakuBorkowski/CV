import Elemnt from "./Elemnt";

function WorkExp() {
  const data =[
    {
      id:0,
      date:"0000-0000",
      position:"specjalista do spraw różnorakich",
      companyName:"szlachta też pracuje",
      jobDescryption:"ja jestem człowiek pracujący, żadnej pracy się nie boję!"
    },
    {
      id:1,
      date:"0000-0000",
      position:"specjalista do spraw różnorakich",
      companyName:"szlachta też pracuje",
      jobDescryption:"ja jestem człowiek pracujący, żadnej pracy się nie boję!"
    },
    {
      id:2,
      date:"0000-0000",
      position:"specjalista do spraw różnorakich",
      companyName:"szlachta też pracuje",
      jobDescryption:"ja jestem człowiek pracujący, żadnej pracy się nie boję!"
    }
  ]
    return (
    <div className='WorkExp'>
        <h1 className="elementHeader">Doświadczenie zawodowe:</h1>
        <ul>{data.map(data=>  <Elemnt key={data.id} data={data}/> )}</ul>
    </div>
    );
  }
  
  export default WorkExp;
  