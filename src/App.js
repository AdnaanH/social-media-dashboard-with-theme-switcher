import BottomSection from "./components/BottomSection";
import Header from "./components/Header";
import TopSection from "./components/TopSection";


function App() {
  return (
    <div className='flex flex-col h-screen w-full '>
      <div>
        <Header />
      </div>
      <div className='flex-col items-center justify-center sm:items-start mt-4 sm:-mt-24'>
        <TopSection  />
        <BottomSection />
      </div>

    </div>  
  );
}

export default App;
