import React, {useEffect,useState} from 'react';
import {Doughnut} from 'react-chartjs-2';
import api from '../../services/api';
import './graphic.css';

interface User{
  id: number;
  first_name: string;
  last_name: string;
  participation: number;
}

function Graphic(){
  const [users, setUser] = useState<User[]>([]);
  useEffect(()=>{
      api.get('users').then(resp=>{
          setUser(resp.data);        
      })
  },[]);

  const state = {
    labels: [users[0].first_name, 'February', 'March',
             'April', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
          '#6800B4'
        ],
        hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350',
        '#35014F'
        ],
        data: [75, 59, 80, 81, 46]
      }
    ]
  }
return(
  <div>
      <Doughnut
        data={state}
        width={500}
        height={430}
        options={{
          legend:{
            display:true,
            position:'right',
            
          },
          maintainAspectRatio: false,
        }}
      />
  </div>
);
}

export default Graphic;
// export default class Graphic extends React.Component {
  
//   render() {   
//     return (
//       <div>
//         <Doughnut
//           data={state}
//           width={500}
//           height={430}
//           options={{
//             legend:{
//               display:true,
//               position:'right',
              
//             },
//             maintainAspectRatio: false,
//           }}
//         />
//       </div>
//     );
//   }
// }