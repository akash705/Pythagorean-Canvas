import React, {Component} from 'react';
import * as randomColor from 'randomcolor';


import validation from  '../helpers/validateQuery';
// a will always be perpendicular

// b will alway be base

// c will always be hypotenuse

class Updated extends Component{

    constructor(props){
            super(props);
    }
    static async  getInitialProps({props,query}){
        // basic validation
        if(!query || !Object.keys(query).length){
            return ({
                    errorStatus:true,
                    error:'No Parameters Found',
            });
        }
        // Checking for valid Data 
        let {a,b,c} = query;
        let status,error;
        ({status:status,a=a,b=b,c=c,error} = validation({a,b,c}));
      
        if(!status){
            return ({
                errorStatus:true,
                error
            })
        }

        return ({
           ...props,
           ...query,
           a,b,c,
           color:randomColor(),
           color2:randomColor()
        });
    }

    componentDidMount(){
        if(!this.props.errorStatus){
            console.log(this.props);
            this.setupCanvas( {perpendicular:this.props.a, base: this.props.b ,hypotenuse: this.props.c} );
        }
    }

    render(){
        if(this.props.errorStatus){
            return (
                <React.Fragment>
                    <h1>
                                {this.props.error}
                    </h1>
                    <div className="instruction">
                                <p> Query Params : </p>
                                <p> 'a' , 'b' can be interchanged for Base And Perpendicular</p>
                                <p> 'c' Must be hypotenuse </p>
                    </div>
                </React.Fragment>
            )
        }
        // success case rendering canvas
        return (
            <React.Fragment>
                <canvas ref={(inp)=>{this.canvas=inp}}>

                </canvas>
                <style global jsx>{`
                    
                    body{
                        margin:0px;
                    }
                `}</style>
            </React.Fragment>
            
        )
    }


    setupCanvas=({perpendicular:a,base:b,hypotenuse:c})=>{
        this.canvas.width = window.innerWidth - 20;
        this.canvas.height = window.innerHeight * 2;
        this.ctx = this.canvas.getContext("2d");
        this.canvas.style['border'] = "1px solid black";
        this.scaleFactor = (c < 30) ? 30 : 15;
        let {
            points
        } = this.drawTriangle({
            a,
            b,
            c,
            scaleFactor:this.scaleFactor
        });

        {
            let width1 = this.getWidth([...points[0], ...points[1]]);
            this.drawRectangle({
                points: points[0],
                width: width1,
                height: width1,
                value: a,
                type: 'p',
                mainColor:this.props.color
            });
            this.drawingText({point:points[0],text:a,type:'p',scaleFactor:this.scaleFactor});
        }
        {
            let width2 = this.getWidth([...points[1],...points[2]]);
            this.drawRectangle({
                points:points[2],
                width:width2,
                height:width2,
                value:b,
                type:'b',
                mainColor:this.props.color2
            });
            this.drawingText({point:points[1],text:b,type:'b',scaleFactor:this.scaleFactor});
        }
        {
            let angle = Math.acos(b/c)*180/Math.PI;
            let width3= this.getWidth([...points[0],...points[2]]);
            this.drawRectangle({
                points:points[2],
                width:width3,
                height:width3  ,
                rotate:angle,
                value:c,
                type:'h'
            });
            this.drawingText({point:points[2],text:c,type:'h',scaleFactor:this.scaleFactor,rotate:angle});
        }
    }
    
    drawRectangle=({ points:[x,y],width , rotate ,scale =this.scaleFactor,value,mainColor,type})=>{
        this.ctx.moveTo(x,y);
        this.ctx.lineWidth = 2;
        this.ctx.moveTo(0,0);
        this.ctx.save();
        this.ctx.translate(x,y); 
                if(!Number.isNaN(rotate)){
                    this.ctx.rotate(-(rotate+90)* Math.PI / 180);
                }
                if(type!="h"){
                    this.ctx.fillStyle=mainColor;
                }
                this.ctx.fillRect(0,0,width,width);
                this.ctx.translate(-x,-y);
                this.ctx.stroke();
                this.drawingInnerLines({x,y,width,scale,value,type});
        this.ctx.restore();
        this.ctx.stroke();
    }

    drawingInnerLines=({x=0,y=0,width,value,type})=>{
        let horizontalLines=[];
        let verticalLines=[];
        let NumberofBoxes=value;
        let distance = width/value;
        for(let i=1;i<NumberofBoxes;i++){
            let x1 = x;
            let y1 = y+(distance*i);
            this.ctx.beginPath();
            this.ctx.moveTo(x1,y1);
            this.ctx.lineTo(x1+width,y1);
            this.ctx.stroke();
            
            horizontalLines.push([x1+width,y1]);
            let x2 = x+(distance*i);
            let y2 = y;
            this.ctx.moveTo(x2,y2);
            this.ctx.beginPath();
            this.ctx.moveTo(x2,y2);
            this.ctx.lineTo(x2,y2+width);
            this.ctx.stroke();
            verticalLines.push([x2+width,y2]);
        } 
        if(type=="h"){   
                this.paintingHRect({verticalLines,horizontalLines,scale:this.scale,width,distance});
        }
       
    }

    paintingHRect=({verticalLines,horizontalLines,distance,width,scale,ctx=this.ctx})=>{
        ctx.fillStyle=this.props.color;
        for(let i=horizontalLines.length-1;i>=-1;i--){
            let points=horizontalLines[i];
            if(points){
                let x = points[0]-distance;
                // console.log('points',x,points[1]);
                ctx.fillRect(x,points[1],distance,distance);
                ctx.strokeStyle="black";
                ctx.stroke();
            }else{
                points= horizontalLines[0];
                let x = points[0]-(distance);
                console.log('last point',x,points[1]);
                ctx.fillRect(x,points[1]-distance,distance,distance);

            }
        }
        for(let i=verticalLines.length-1;i>=-1;i--){
            let points=verticalLines[i];
            if(points){
                let y = points[1]+width-distance;
                ctx.fillRect(points[0]-width,y,distance,distance);
                ctx.strokeStyle="white";
                ctx.stroke();
                // console.log('points',points[0]-width,y);
            }else{
                points= verticalLines[verticalLines.length-1];
                let y = points[1]+(width-distance);
                let x = points[0]-(width+distance*verticalLines.length);
                ctx.fillRect(x,y,distance,distance);
            }
        }
    }

    drawTriangle=({ctx=this.ctx,a,b,c,scaleFactor=this.scaleFactor})=>{
        ctx.beginPath();

        let initialPoint = [window.innerWidth / 2, window.innerHeight / 2];
        let points = [
            [...initialPoint]
        ];

        ctx.moveTo(...initialPoint);

        let x = initialPoint[0];
        let y = initialPoint[1] + (a * scaleFactor);

        points.push([x, y]);

        ctx.lineTo(x, y);

        x = x - (b * scaleFactor);

        points.push([x, y]);

        ctx.lineTo(x, y);

        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.closePath();
        ctx.strokeStyle = "#333";
        ctx.stroke();


        return {
            points,
            scaleFactor
        };
    }

    drawingText=({point:[x,y],text,ctx=this.ctx,type,scaleFactor,rotate})=>{
        ctx.resetTransform();
        ctx.font="30px Arial";
    
        if(!type){
            return  0;
        }
        if(type=="p"){
            let length = text*scaleFactor;
            let point = [x,(y+length/2)]
            ctx.fillStyle="black"
            ctx.fillText(text,...point)
            ctx.fillStyle=this.props.color;
        }
        else if(type=="b"){
            let length = text*scaleFactor;
            let point = [(x-length/2),y];
            ctx.fillStyle="black"
            ctx.fillText(text,...point)
            ctx.fillStyle=this.props.color2
        }
        else if(type=="h"){
            let length = text*scaleFactor;
            let point=[];
            if(text < 10){
                 point = [x+(length/2),y-(length/2)+30];
            }
            else{
                point=[x+(length/4)-90,y-(length/4)];
            }
            ctx.fillStyle="black"
            ctx.fillText(text,...point)
            ctx.fillStyle=this.props.color2
            
            ctx.translate(x,y);
            ctx.rotate(-(rotate+90)* Math.PI / 180);
            ctx.translate(-x,-y);

        }
        ctx.stroke();

    }   

    getWidth=([x1,y1,x2,y2])=>{
        var x=Math.pow((x2-x1),2);
        var y = Math.pow((y2-y1),2);
        return Math.abs(Math.sqrt(x+y));
    }

}

export default Updated;

