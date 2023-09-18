import { MainBody, Sidebar } from "./components";
import PlayerSection from "./components/PlayerSection";
import { useStateContext } from "./context";
import PictureInPicture from "./components/PictureInPicture";
import FullScreen from "./components/FullScreen";

const address = "";

function App() {
  const { openPlayer } = useStateContext();
  const { openPip } = useStateContext();
  const { openBigScreen } = useStateContext();
  const { connect, account } = useStateContext();
  return (
    <div>
      {account ? (
        <div className="flex items-center overflow-hidden flex-row">
          <Sidebar />
          <div className="flex-1 mx-auto h-screen bg-[#1E1E1E] overflow-y-scroll flex-col text-white w-full  md:">
            {openBigScreen && <FullScreen/>}
            <MainBody />
          </div>
          {openPip && <PictureInPicture/>}
          {openPlayer && <PlayerSection />}
        </div>
      ) : (
        <div className="flex items-center w-screen h-screen justify-center flex-col">
          <span className="lg:text-5xl text-2xl font-extrabold md:text-3xl ">
            Welcome to FilMEDIA
          </span>
          <span className="md:text-lg text-sm font-bold my-9 w-[50%] text-center">
            A decentralized content sharing platform for every content creators
            around the world🌍, Do you want to be free from looting 📛, the
            centralized world and want to connect to your followers more 🫂, Join
            FilMedia and be way better with amazing experience.
          </span>
          <button
            onClick={connect}
            className="bg-white text-black px-5 py-2 mt-9 rounded-full text-lg font-bold"
          >
            Connect Wallet
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
