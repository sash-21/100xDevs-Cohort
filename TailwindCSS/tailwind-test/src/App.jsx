import './App.css'

function App() {
  return (
    <>
      { /* <div style={{display: "flex", justifyContent: "space-around"}}> */ }
      <div className='grid sm:grid-cols-12 grid-cols-1'>
        <div className='bg-blue-300 sm:col-span-5 col-span-1 text-center rounded-lg'>
          first div
        </div> 
        <div className='bg-red-300 sm:col-span-2 col-span-1'>
          second div
        </div>
        <div className='bg-green-300 sm:col-span-5 col-span-1'>
          third div
        </div>
      </div>
    </>
  ) 
}

export default App
