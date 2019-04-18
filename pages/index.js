import React , {Component } from 'react';
import * as randomColor from 'randomcolor';


class index extends Component{
   ctx=null;
   canvas=null;
   state={
        error:false,
        checking:true,
    }
   static getInitialProps =({query,params})=>{
    return {query};
   }

   getWidth=([x1,y1,x2,y2])=>{
        var x=Math.pow((x2-x1),2);
        var y = Math.pow((y2-y1),2);
        return Math.abs(Math.sqrt(x+y));
   }
   randomColor=()=>{
       return randomColor();
   }
   validation=({a,b,c})=>{
       if(!a){
        return {status:false,error:"Value a is Invalid"};
       }
       else if(!b){
            return {status:false,error:"Value b is Invalid"}
       }
       else if(!c){
           return {status:false,error:"Value c is Invalid"};
       }
       // perpendicular samllest one    
       let sqa=Math.pow(a,2);
       // perpendicular middle one
       let sqb=Math.pow(b,2);
       // h    
       let sqc=Math.pow(c,2);

       if(sqc===(sqa+sqb)){
           
        // comment this if to changes the swapping of variables
             if(a < b){
                 console.log('changing sqa,sqb');
                 [a,b]=[b,a];
             }

            return {status:true,a,b,c};

        }
       return {status:false,error:"Invalid Properties values"};
   }
   componentDidMount(){
        // console.log(Objet.key)
        if(!this.props.query || !Object.keys(this.props.query).length){
            this.setState((state)=>({
                ...state,
                checking:false,
                error:"Invalid Params"
            }))
        }

        let {a,b,c} = this.props.query;
        let status,error;
        ({status,a=a,b=b,c=c,error} = this.validation({a,b,c}));
        if(status){
            this.setState((state)=>{
                return {
                    ...state,
                    checking:false,
                }
            })
            this.setupCanvas({a,b,c});
        }
        else{
            this.setState((state)=>{
               return  {
                    ...state,
                    checking:false,
                    error:error
                }
            })
        }

        if(!this.props.query){
            alert('Exception Handled');
        }
        
        if(!this.state.checking && !this.state.error){
            this.setupCanvas();
        }

    }
    setupCanvas=({a,b,c})=>{
        // artificial Delay to show come calculations are being made for this
        setTimeout(data=>{
                
        let canvas = this.canvas = this.refs.canvasCtx
        canvas.width=window.innerWidth-20;
        canvas.height=window.innerHeight*2;
        let ctx = this.ctx = this.canvas.getContext("2d");
        let { points , scaleFactor } = this.drawTriangle({canvas:this.canvas,ctx:this.ctx,a,b,c});
        {
            let width1 = this.getWidth([...points[0],...points[1]]);
                this.drawRectangle({
                    ctx:ctx,
                    points:points[0],
                    width:width1,
                    height:width1,
                    value:a
                });
        }
        // for base
        {
            let width2 = this.getWidth([...points[1],...points[2]]);
            this.drawRectangle({
                ctx,
                points:points[2],
                width:width2,
                height:width2,
                value:b
            });
        }

        // for hypotenuse 

        {
            let angle = Math.acos(b/c)*180/Math.PI;
            let width3= this.getWidth([...points[0],...points[2]]);
            this.drawRectangle({
                ctx,
                points:points[2],
                width:width3,
                height:width3  ,
                rotate:angle,
                value:c
            });

        }
    },200);

    }
    drawRectangle=({ ctx ,points:[x,y],width,height , rotate ,scale ,value})=>{
        ctx.moveTo(x,y);
        ctx.lineWidth = 2;
        ctx.moveTo(0,0);
        ctx.save();
                
                ctx.translate(x,y);
                ctx.rotate(-(rotate+90)* Math.PI / 180);
                ctx.fillStyle=this.randomColor();
                ctx.fillRect(0,0,width,height );
                ctx.translate(-x,-y);
                ctx.stroke();
                this.drawingInnerLines({x,y,width,scale,ctx,value});
                
        ctx.restore();
        ctx.stroke();
        window.ctx=ctx;
    }
    
    drawingInnerLines({x=0,y=0,width,scale,ctx,value}){
            // console.log(data);
            let horizontalLines=[];
            let verticalLines=[];
            let NumberofBoxes=value;
            let distance = width/value;
            // [x,y]=[0,0];
            for(let i=1;i<NumberofBoxes;i++){
                // horizzontal line
                let x1 = x;
                let y1 = y+(distance*i);
                ctx.beginPath();
                ctx.moveTo(x1,y1);
                ctx.lineTo(x1+width,y1);
                // ctx.strokeStyle="black";
                // ctx.lineWidth=1;
                ctx.stroke();
                horizontalLines.push([x1+width,y1]);

                let x2 = x+(distance*i);
                let y2 = y;
                ctx.beginPath();
                ctx.moveTo(x2,y2);
                ctx.lineTo(x2,y2+width);
                // ctx.strokeStyle="black";
                // ctx.lineWidth=1;
                ctx.stroke();
                verticalLines.push([x2+width,y2]);
            } 
            // console.log('horizontal lines',horizontalLines);
           
    }
    drawTriangle=({canvas,ctx,a,b,c})=>{
        ctx.beginPath();
        let scaleFactor=20;
        
        let initialPoint=[window.innerWidth/2,window.innerHeight/2];
        let points=[[...initialPoint]];

        ctx.moveTo(...initialPoint);
        
        let x= initialPoint[0];
        let y=initialPoint[1]+(a*scaleFactor);
        
        points.push([x,y]);
        

        ctx.lineTo(x,y);        
                
        x = x-(b*scaleFactor);
        
        points.push([x,y]);
        
        ctx.lineTo(x,y);
        
        
        ctx.closePath();
        ctx.strokeStyle="#333";
        ctx.stroke();    
            

        return {points,scaleFactor};
    }
    render(){
        
        if(this.state.checking || this.state.error){
                return  (
                    <React.Fragment>
                               {this.state.error || "Wait loading..."} 
                    </React.Fragment>
                )
        }

        if(this.state.error){
            alert(this.state.error);
            return 0;
        }


        return(
            <React.Fragment>
                
                <canvas ref="canvasCtx"  ></canvas>
                <style global jsx>{`
                    canvas{
                        border:1px solid black;
                      
                    }
                    body{
                        margin:0px;
                    }
                `}</style>
            </React.Fragment>
        )
    }
}
export default index;