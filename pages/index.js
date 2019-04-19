import React , {Component } from 'react';
import * as randomColor from 'randomcolor';


class index extends Component{
   ctx=null;
   canvas=null;
   state={
        error:false,
        checking:true,
        color:randomColor(),//perpendicular color
        color2:randomColor()//base color
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

       if(sqc===(sqa+sqb)){
            return {status:true,a,b,c};
        }
       return {status:false,error:"Values Don't pass Pythagoras Theorem"};
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
        setTimeout(data=>{
                
        let canvas = this.canvas = this.refs.canvasCtx
        canvas.width=window.innerWidth-20;
        canvas.height=window.innerHeight*2;
        let ctx = this.ctx = this.canvas.getContext("2d");
        let { points , scaleFactor } = this.drawTriangle({canvas:this.canvas,ctx:this.ctx,a,b,c});
    //    for perpendicular
        {
            let width1 = this.getWidth([...points[0],...points[1]]);
                this.drawRectangle({
                    ctx:ctx,
                    points:points[0],
                    width:width1,
                    height:width1,
                    value:a,
                    type:'p',
                    mainColor:this.state.color
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
                value:b,
                type:'b',
                mainColor:this.state.color2
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
                value:c,
                type:'h'
            });

        }
    },200);

    }
    drawRectangle=({ ctx ,points:[x,y],width,height , rotate ,scale ,value,mainColor=randomColor(),type})=>{
        ctx.moveTo(x,y);
        ctx.lineWidth = 2;
        ctx.moveTo(0,0);
        ctx.save();
                ctx.translate(x,y);
                ctx.rotate(-(rotate+90)* Math.PI / 180);
                if(type!="h"){
                    ctx.fillStyle=mainColor;
                }

                ctx.fillRect(0,0,width,height );
                ctx.translate(-x,-y);
                ctx.font="30px Arial";
                ctx.fillStyle="green";

                    if(rotate){

                        ctx.translate(x,y);
                        ctx.rotate((rotate+90)* Math.PI / 180);
                        ctx.fillText(value,0,-width/2);
                        ctx.rotate(-(rotate+90)* Math.PI / 180);
                        ctx.translate(-x,-y);

                    }else{
                        ctx.fillText(value,x+(width/2)-15,y+width/2);
                    }

                ctx.stroke();
                this.drawingInnerLines({x,y,width,scale,ctx,value,type});
        ctx.restore();
        ctx.stroke();
        window.ctx=ctx;
    }
    
    drawingInnerLines({x=0,y=0,width,scale,ctx,value,type}){
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
            if(type=="h"){
                    console.log('hi this is hypotaneus working on its lines');
                    // console.log(verticalLines,horizontalLines);
                    this.paintingHRect({verticalLines,horizontalLines,scale,width});
            }
           
    }
    paintingHRect=({verticalLines,horizontalLines})=>{
            console.log(verticalLines,horizontalLines);
    }
    drawTriangle=({canvas,ctx,a,b,c})=>{
        ctx.beginPath();
        let scaleFactor=(c<30) ? 30:15
        
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
        
        ctx.fillStyle="yellow";
        ctx.fill();
        ctx.closePath();
        ctx.strokeStyle="#333";
        ctx.stroke();    
            

        return {points,scaleFactor};
    }
    render(){
        
        if(this.state.checking || this.state.error){
                return  (
                    <React.Fragment>
                               <div className="msg">
                                        {this.state.error || "Wait loading..."} 
                               </div>
                               <div className="instruction">
                                            <p> Query Params : </p>
                                            <p> 'a' , 'b' can be interchanged for Base And Perpendicular</p>
                                            <p> 'c' Must be hypotenuse </p>
                                </div>
                               <style jsx>{`
                                    .msg{
                                        font-weight:bold;
                                        width:100%;
                                        font-size:2rem;
                                        text-align:center;
                                    }
                                    .instruction p {
                                        font-weight:bold;
                                        font-color:#424242;
                                    }
                               `}
                               </style>
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