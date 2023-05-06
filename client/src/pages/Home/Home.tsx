import './Home.scss'
import cohere from '../../assets/cohere.png'

const Home = () => {
  return (
    <div className='w-full home'>
      <div className='w-full bg-accentbutyoucanbarelyseeit p-6'>
        <h1>Home</h1>
        <p className='flex items-center'>Memento: an ai-powered flashcard generator, powered by <img id='cohere' src={cohere} alt='cohere'></img> </p>
      </div>
      <div className='p-16'>
        <div className='flex gap-10'>
          <div className='container'>
            <h1>New Moment</h1>
            <p>Create a new moment to work on</p>
          </div>
          <div className='container'>
            <h1>Return to session</h1>
            <p>Return to where you last left off, at your last edited note</p>
          </div>
        </div>
        <div className='container w-full mt-10'>
            <h1>Study "insert name of flashcards"</h1>
            <p>Study your ai-generated flashcards</p>
        </div>
        <div className='container w-full mt-10'>
          <h1>Your Moments</h1>
          <p>Moments that you've created and worked on</p>
          <div className='pages-container'>
            <div>
              <a>Schindler's List Reflection</a>
              <p>01/01/23</p>
            </div>
            <div>
              <a>Acids and Bases</a>
              <p>05/05/23</p>
            </div>
            <div>
              <a>Intro to Accounting</a>
              <p>69/69/69</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home