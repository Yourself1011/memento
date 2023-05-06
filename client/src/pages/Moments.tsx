import MomentList from "../components/MomentList/MomentList"

const Moments = () => {
  return (
    <div className='w-full h-full'>
      <div className='w-full bg-accentbutyoucanbarelyseeit p-6'>
        <h1>Moments</h1>
        <p className='flex items-center'>A comprehensive list of all your Moments</p>
      </div>
      <MomentList className='m-8'/>
    </div>
  )
}

export default Moments