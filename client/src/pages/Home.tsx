const Home = () => {
  return (
    <div className='p-16 w-full'>
      <div className='container w-1/2'>
        <h1>Home</h1>
        <p>Amonus: an ai-powered flashcard generator</p>
      </div>
      <div className='container w-1/2 mt-4'>
        <h1>New Moment</h1>
        <p>Create a new moment to work on</p>
      </div>
      <div className='container w-1/2 mt-4'>
        <h1>Your moments</h1>
        <p>Moments that you've created and worked on</p>
        <ul>
          <li>
            <a>Schindler's List Reflection</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home