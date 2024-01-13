// import Galary, { Profile } from "./components/Galary"; //DEFAULT & NAMED IMPORT IN ONE LINE :: OK
import GalaryPhoto from "./components/Galary"; //DEFAULT IMPORT ( DEFAIN ANY NAME LIKE, GalaryPhoto)
// import { Image as Img } from "./components/Profile"; //NAMED IMPORT AS ANY NAMED
import Profile, { Image } from "./components/Profile"; //DEFAULT IMPORT

function App() {
  return (
    <div>
      <Image />
      <Profile />
      <GalaryPhoto />
    </div>
  );
}

export default App;
