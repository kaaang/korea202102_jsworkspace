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

        //적을 맞췄을때
        //만일 적군과 총알인 내가 충돌하게 된다면, 제거 대상은 적군 뿐 아니라 나도 해당
        for(var i=0;i<enemyArray.length;i++){
            //객체 자체는 무형의 단위일뿐 style을 가질 수 없다 그렇기 때문에 img 접근
            var hitResult=hitTest(this.img, enemyArray[i].img);
            if(hitResult){
                removeObject(this.container, enemyArray[i].img, enemyArray,i);
                removeObject(this.container, this.img, bulletArray, bulletArray.indexOf(this));
            }
        }


        //스크린을 벗어났을때
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