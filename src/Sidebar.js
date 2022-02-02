import Contact from "./Sidebar/contact"
import Education from "./Sidebar/Education";

function Sidebar() {
 
 
  return (
  <>
  <div className="Sidebar">
   <Contact/>
    <p className="about">Jestem "samoukiem". Zainteresowałem się branżą, ponieważ wielu moich znajomych - programistów sugerowało mi, że jest to praca, w której bym się odnalazł z moim sposobem myślenia i zawzięciem do rozwiązywania problemów. Okazuje się, że mieli rację, a programowanie sprawia mi przyjemność. Podczas nauki wspierali mnie wspomniani powyżej znajomi. Wielką radość sprawia mi to gdy mam okazję pokazać swój kod i usłyszeć że programista z kilkuletnim doświadczeniem sam by nie wpadł na takie rozwiązanie.</p>
    <Education/>
  </div>
    
  </>
  );
}

export default Sidebar;
