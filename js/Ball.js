class Ball{
    //new 연산자에 의해 호출되는 메서드를 생성자 메서드라고 하고,
    // 생성자 메서드의 목적인 이 객체가 인스턴스화 될때, 즉 사물이 
    // 탄생할때 알맞는 개성을 부여하기 위함이다.
    // 모습!
    constructor(container,src,width,height,velX,velY){
        //객체와 함께 살아감 즉 객체가 죽을때 같이 죽음
        //따라서 this로 명시된 객체가 보유한 변수를 가리켜 멤버 변수라고 한다
        this.container=container;
        this.src=src;
        
        this.width=width;
        this.height=height;
        
        this.x=0;
        this.y=0;

        this.velX=velX;
        this.velY=velY;

        this.limitX=parseInt(this.container.style.width);
        this.limitY=parseInt(this.container.style.height);

        this.r=0;

        
        this.img=document.createElement("img");//공을 감쌀 img
        this.img.src=this.src;
        // this.img.style.background="red";
        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";
        this.img.style.position="absolute";
        this.img.style.left=0+"px";
        this.img.style.top=0+"px";
        this.img.style.padding=0+"px";

        this.container.appendChild(this.img);
    }

    //공의 동작
    move(){
        this.x += this.velX;
        this.y += this.velY;

        if(this.y >= this.limitY-this.height || this.y<=0){
            this.velY *=-1;
        }
        if(this.x >= this.limitX-this.width || this.x<=0){
            this.velX *=-1;
        }

        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
        this.r++;
        this.img.style.transform="rotate("+this.r+"deg)";
        
    }
}