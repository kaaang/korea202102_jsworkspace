class Bullet{
    constructor(container,src,width,height,x,y,velX,velY){
        //멤버변수(객체와 생명을 같이하는 변수)
        this.container=container;
        this.img=document.createElement("img");
        this.src=src;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.velX=velX;
        this.velY=velY;

        //총알의 모습을 설정해본다.
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

        if(this.x>screen.width){
            var index=bulletArray.indexOf(this);
            removeObject(this.container, this.img, bulletArray,index);
        }
    }
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }

}