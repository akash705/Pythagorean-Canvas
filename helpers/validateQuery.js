// helper function 
const validation=({a,b,c})=>{
    console.log(a,b,c);
    if(!Number(a)){
     return {status:false,error:"value 'A' is Invalid"};
    }
    else if(!Number(b)){
         return {status:false,error:"value 'B' is Invalid"}
    }
    else if(!Number(c)){
        return {status:false,error:"value 'C' is Invalid"};
    }
    // perpendicular     
    let sqa=Math.pow(a,2);
    // base
    let sqb=Math.pow(b,2);
    // h    
    let sqc=Math.pow(c,2);
    
 //    a should be small

    if(sqc===(sqa+sqb)){
        if(a  > b){
            [a,b]=[b,a];
            console.log('swapping vlaues');
        }
         return {status:true,a,b,c};
     }
    return {status:false,error:"Values Don't pass Pythagoras Theorem"};
}
export default validation;
