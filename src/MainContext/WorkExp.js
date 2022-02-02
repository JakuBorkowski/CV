import Elemnt from "./Elemnt";

function WorkExp() {
  const data =[
    {
      id:0,
      date:"2018-2020",
      position:"Uber Eats Driver",
      companyName:"Edynburg - Szkocja",
      jobDescryption:"czas spędzony na terenie wielkiej brytanii poświeciłem głównie szlifowaniu języka, praca dla Ubera miała bardzo elastyczny grafik"
    },
    {
      id:1,
      date:"2017-2018",
      position:"Obsługa Klienta",
      companyName:" LUX MED Sp. z o. o.",
      jobDescryption:"Obsługa pacjentów, umawianie na wizyty, udzielanie odpowiedzi na telefoniczne zapytania ze strony Pacjentów."
    },
    {
      id:2,
      date:"2016-2017",
      position:"Pracownik Magazynu",
      companyName:"Omnibus Hurtownia AGD",
      jobDescryption:"Kompletowanie zamówień, przyjmowanie zwrotów, kontakt z klientem, planowanie trasy dostawców."
    },
    {
      id:3,
      date:"2014-2016",
      position:"Konsultant",
      companyName:"Aviva",
      jobDescryption:"Telefoniczny kontakt z klientem, pozyskiwanie klientów dla działu sprzedaży, sprzedaż ubezpieczeń OC/AC, sprzedaż ubezpieczeń na życie"
    },
  
  ]
    return (
    <div className='WorkExp'>
        <h1 className="elementHeader">Doświadczenie zawodowe:</h1>
        <ul>{data.map(data=>  <Elemnt key={data.id} data={data}/> )}</ul>
    </div>
    );
  }
  
  export default WorkExp;
  