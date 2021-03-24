// 비행기를 정의해본다
//비행기라는 사용자 정의 자료형을 선ㄷ언

class Plane{
    //객체의 초기화는 생성자 메서드가 담당한다
    constructor(container,src,width,height,x,y,velX,velY){
        this.container=container
        this.img=document.createElement("img");
        this.src=src;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.velX=velX;
        this.velY=velY;

        this.img.src=this.src;

        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        this.img.style.position="absolute";
        
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        this.container.appendChild(this.img);
    }

    tick(){
        this.x += this.velX;
        this.y += this.velY;
        if(this.x<=0){
            this.x=0;
        }
        // console.log("x : ", this.x)
        // console.log("sc : ", window.screenX)

        // if(this.x >= window.innerWidth-this.width){
        //     this.x=window.innerWidth-this.width;
        // }
        if(this.x >=screen.width-this.width){
            this.x=screen.width-this.width;
        }
        if(this.y<=0){
            this.y=0;
        }
        if(this.y>=600-this.height){
            this.y=600-this.height;
        }
    }


    //변경된 값을 화면에 보여주기 위한 그래픽 처리
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}