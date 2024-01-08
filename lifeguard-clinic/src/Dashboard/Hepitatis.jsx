import {Chart as ChartJS, defaults} from 'chart.js/auto'
import { Bar,Doughnut } from 'react-chartjs-2'
defaults.plugins.title.display= true;
const Hepitatis=()=>{
  return (
    <div>
     <Doughnut
       data={{
         labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug',' Sept','Oct','Nov','Dec' ],
         datasets:[
          {
           label:'Hapitatis A',
           data:[10,  12, 10 , 25, 10 , 15 , 15, 16, 9, 0, 15, 10 ],
           backgroundColor:'rgba(43, 63, 229, 0.8)'
         },
         {
          label:'Hapitatis B',
           data:[5,  10, 15 , 20, 12 , 5 , 15, 5, 10, 0, 15, 5 ],
           backgroundColor:'rgba(250, 192, 19, 0.8)'
         },
         {
          label:'Hapitatis C',
           data:[5,  15, 5 , 10, 12 , 12 , 5, 5, 12, 0, 10, 15 ],
           backgroundColor:'rgba(253, 135, 135, 0.8)'
         },

        ]
       
        }}

        options={{
          plugins:{
          title:{
           text:'hepitatis patients (2023)',
          },
        },
        elements:{
          line:{
            tension:0.5
          },
        }
        }}
     >

     </Doughnut>
    </div>
  )
}

export default Hepitatis