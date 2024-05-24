import Home from "./pages/Home";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import SocialMedia from "./pages/churchInfo/socialMedia/SocialMedia";
import AccountDetails from "./pages/churchInfo/accountDetails/AccountDetails";
import Announcements from "./pages/churchInfo/announcements/Announcements";
import Cith from "./pages/churchInfo/cith/Cith";
import MembersData from "./pages/churchInfo/cith/MembersData";
import Devotion from "./pages/churchInfo/devotion/Devotion";
import Testimony from "./pages/churchInfo/devotion/Testimony";
import Prayer from "./pages/churchInfo/devotion/Prayer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/socials" element={<SocialMedia />} />
        <Route path="/partner" element={<AccountDetails />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/church_in_the_home" element={<Cith />} />
        <Route path="/church_in_the_home/updpate_data" element={<MembersData />} />
        <Route path="/devotion" element={<Devotion />} />
        <Route path="/devotion/testimony" element={<Testimony />} />
        <Route path="/devotion/prayer_request" element={<Prayer />} />
      </Routes>
    </div>
  );
}

export default App;
