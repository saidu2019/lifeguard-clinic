import {Chart as ChartJS,defaults} from'chart.js/auto';
import{Bar, Doughnut, Line} from 'react-chartjs-2';

defaults.plugins.title.display=true;
defaults.plugins.title.align='start';
defaults.plugins.title.font.size=20;
defaults.plugins.title.color='black'

const Appointment=()=>{
  return(
  <div>
<Line
 data={{
   labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
           'Jul', 'Aug',' Sept','Oct','Nov','Dec'],
    datasets:[
      {
        label:'MedicalTreatment',
        data:[20,  15, 30 , 45, 60 , 65 , 55, 65, 75, 40, 35, 20 ],
        backgroundColor:'rgba(135,98,215)'
      },
    {
      label:'Medical Test',
      data:[25,  35, 20 , 35, 50 , 45 , 35, 45, 35, 35, 45, 25 ],
      backgroundColor:'rgba(255,152,255)',
      
    },
  ]
 }}
 options={{
  elements:{
   line:{
     tension:0.5
   },
  },
   plugins:{
    title:{
      text:"LifeGuard Medical Reviews (2023)",
    },
   },
 }}
 className='mt-5 h-[210px]'>

</Line>
  </div>
  )
}

export default Appointment