import cohere from "../../assets/cohere.png";
import MomentList from "../../components/MomentList/MomentList";

const Home = () => {
  return (
    <div className="w-full home">
      <div className="w-full bg-accentbutyoucanbarelyseeit p-6">
        <h1>Home</h1>
        <p className="flex items-center">
          Memento: an ai-powered flashcard generator, powered by{" "}
          <img
            id="cohere"
            className="h-8"
            src={cohere}
            alt="cohere"
          ></img>{" "}
        </p>
      </div>
      <div className="p-16">
        <div className="flex gap-10">
          <div className="container">
            <h1>New Moment</h1>
            <p>Create a new Moment to work on</p>
            <button className="mt-4">New Moment</button>
          </div>
          <div className="container">
            <h1>Return to session</h1>
            <p>
              Return to where you last left off, at your last
              edited Moment
            </p>
            <button className="mt-4">Return to Moment</button>
          </div>
        </div>
        <div className="container w-full mt-10">
          <h1>Study "insert name of flashcards"</h1>
          <p>Study your ai-generated flashcards</p>
          <button className="mt-4">Study</button>
        </div>
        <div className="container w-full mt-10">
          <h1>Your Moments</h1>
          <p>Moments that you've created and worked on</p>
          <MomentList className='mt-4'/>
        </div>
      </div>
    </div>
  );
};

export default Home