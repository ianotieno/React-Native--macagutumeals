import {mocks} from './mock';
import camelize from 'camelize';


export const restarantRequest=(location = "51.219448,4.402464" ) => {
   return new Promise((resolve, reject)=>{
  const  mock = mocks[location];
  if(!mock){
    reject("not found")
  };
  resolve(mock)
   });

};
restarantRequest().then((result)=>{
    console.log(camelize(result));
}).catch((erro)=>{
    console.log(erro)
})