class BounceBall{
    constructor(wrapper,wrapper_w,wrapper_h,src,velX,velY){
        this.wrapper = wrapper;
        this.src = src;
        this.wrapper_w = wrapper_w;
        this.wrapper_h = wrapper_h;
        this.velX = velX;
        this.velY = velY;
        this.r=0;
        this.speed = 5;


        this.width = 20;
        this.height = 20;
        this.top = wrapper_h-100;
        this.left = wrapper_w/2;


        this.img=document.createElement("img");
        this.img.src = this.src;

        this.img.style.width = this.width+"px";
        this.img.style.height = this.height+"px";

        this.img.style.position="absolute";
        this.img.style.left = this.left+"px";
        this.img.style.top = this.top+"px";
        this.img.style.padding = 0+"px";
        
        this.wrapper.appendChild(this.img);
    }

    

    tick(){
        
        
        // this.style.opacity=0.3;
        
        
        if(hitTest(this.img, bar)){
            this.velY =-this.speed;
        }
        
        this.left += this.velX;
        this.top += this.velY;
        
        if(this.top<=0){
            this.velY *=-1;
        }
        if(this.left >= this.wrapper_w-this.width || this.left<=0){
            this.velX *=-1;
        }
        if(this.top >= this.wrapper_h-this.height ){
            flag=false;
            var div=document.createElement("div");
            div.style.fontSize="30px";
            div.style.textAlign="center";
            div.style.color="blcok";
            div.style.fontWeight="bold";
            div.style.height="400px";

            div.style.position="absolute";
            div.style.top=600+"px";
            div.style.left=200+"px";
            div.innerHTML="GAME OVER <br><a href=\"javascript:location.reload()\">REPLAY?</a>";

            this.wrapper.appendChild(div);
        }
        
        // this.r++;
        if(blockArray.length<=10){
            this.speed = 10;
        }
        
        for(var i=0; i<blockArray.length;i++){
            if(hitTest(this.img, blockArray[i].img)){

                blockArray[i].img.style.opacity = parseInt(blockArray[i].img.style.opacity)-0.25;

                switch(hitTestAll(this.img, blockArray[i].img)){
                    case 1: 
                        this.left = this.left-10;
                        this.velX =-this.speed;
                        break;
                    case 2: 
                        this.top = this.top-10;
                        this.velY =-this.speed;
                        break;
                    case 3: 
                        this.left = this.left+10;
                        this.velX =this.speed;
                        break;
                    case 4: 
                        this.top = this.top+10;
                        this.velY =this.speed;
                        break;
                }
                
                if(blockArray[i].img.style.opacity<=0){
                    removeObject(this.wrapper, blockArray[i].img, blockArray,i);
                }
                if(blockArray.length==0){
                    flag=false;
                    var div=document.createElement("div");
                    div.style.fontSize="30px";
                    div.style.textAlign="center";
                    div.style.color="blcok";
                    div.style.fontWeight="bold";
                    div.style.height="400px";

                    div.style.position="absolute";
                    div.style.top=600+"px";
                    div.style.left=200+"px";
                    div.innerHTML="GAME SUCCESS <br><a href=\"javascript:location.reload()\">REPLAY?</a>";

                    this.wrapper.appendChild(div);
                }
            }
        }
        
        

        
    }

    render(){
        this.img.style.left=this.left+"px";
        this.img.style.top=this.top+"px";
        
        // this.img.style.transform="rotate("+this.r+"deg)";
    }

    

}