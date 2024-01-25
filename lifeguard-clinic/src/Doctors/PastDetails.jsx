import './Pastdetails.css'

const PastDetails =()=> {
  const doneWork = ['I am going to bring my complete blood count  analysis report with you via email.']
 const courseDone= ['complete blood report']
 const date ='6th febuary 2024'
  return (
    <div className='container-details h-[200px] w-[320px]
    bg-white text-black text-sm py-8 px-4 font-semibold rounded-xl'>
      <h4 className='name'>Hello Dr Rozy James</h4>
      <p className='done-job'>{doneWork}</p>
      <div className='date-work py-4 pl-4 w-[270px] h-[70px] mt-[5px] bg-yellow-400 rounded-lg'>
        <h5 className='complete-work'>{courseDone}</h5>
        <p className='complete-work-date'>{date}</p>
      </div>
    </div>
  )
}

export default PastDetails