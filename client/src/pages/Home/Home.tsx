import cohere from "../../assets/cohere.png";
import MomentList from "../../components/MomentList/MomentList";
import { createMoment } from "../../utils/createMoment";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
    const navigate = useNavigate();

    const [lastEdited, setLastEdited] = useState(
        localStorage.getItem("lastEdited") ?? "0"
      );
    
      function storageChange() {
        setLastEdited(localStorage.getItem("lastEdited") ?? lastEdited);
      }
    
      useEffect(() => {
        storageChange();
        window.addEventListener("storage", storageChange);
        return window.removeEventListener("storage", storageChange);
      }, [navigate]);
    
    return (
        <div className="w-full home">
            <div className="w-full bg-accentbutyoucanbarelyseeit p-6">
                <h1>Home</h1>
                <p>⚡ Smarter flashcards, Smarter learning.</p>
                <p className="flex items-center">
                    Memento is an ai-powered flashcard generator, featuring{" "}
                    <img
                        id="cohere"
                        className="h-8"
                        src={cohere}
                        alt="cohere"
                    ></img>{" "}
                </p>
            </div>
            <div className="p-12">
                <div className="flex gap-10">
                    <div className="container">
                        <h1>New Moment</h1>
                        <p>Create a new Moment to work on</p>
                        <button className="mt-4" onClick={() => {
                            const momentId = createMoment();
                            navigate(`/edit/${momentId}`);
                            location.reload();
                        }}>New Moment</button>
                    </div>
                    <div className="container">
                        <h1>Return to session</h1>
                        <p>
                            Return to where you last left off, at your last
                            edited Moment
                        </p>
                        <button onClick={() => navigate(`/edit/${lastEdited}`)} className="mt-4">Return to Moment</button>
                    </div>
                </div>
                <div className="container w-full mt-10">
                    <h1>Study Flashcards</h1>
                    <p>Study your ai-generated flashcards with the built-in spaced repitition system</p>
                    <button className="mt-4" onClick={() => navigate('/cards')}>Study</button>
                </div>
                <div className="container w-full mt-10">
                    <h1>Your Moments</h1>
                    <p>Moments that you've created and worked on</p>
                    <MomentList className="mt-4" />
                </div>
            </div>
        </div>
    );
};

export default Home;
