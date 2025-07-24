import Sidebar from "../../components/sidebar/Sidebar";
import Messagecontainer from "../../components/messages/Messagecontainer";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/your-background.jpg')" }}>
      <div className="flex w-full max-w-[1200px] h-[90vh] rounded-lg overflow-hidden backdrop-blur-md bg-white/20 shadow-xl border border-white/30">
        <Sidebar />
        <Messagecontainer />
      </div>
    </div>
  );
};

export default Home;

