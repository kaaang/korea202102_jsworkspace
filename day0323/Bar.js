// 현실의 객체 중 이퀄라이저 막대기를 정의한다.
//우리가 정의한 이러한 객체를 가리켜 사용자 정의 객체라 하며
// 자료형은 문자?숫자?논리값? ---> 객체형
// 이때 Bar객체 자료형을 개발자가 정의했다는것은, 기존에 세상에 없던 새로운 자료형을
// 정의했다고 하여, Bar형이라고 한다
class Bar{
    constructor(container,width,height,x,y,bg,targetH){
        this.container=container;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.bg=bg;
        this.a=0.1;
        this.targetH=targetH;

        this.div=document.createElement("div");
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";

        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
        this.div.style.background=this.bg;

        this.div.style.border="1px solid black";
        this.div.style.boxSizing="border-box";

        this.container.appendChild(this.div);
    }
    
    //객체가 보유한 변수들을 이용하여 원하는 변화를 주면, 움직임을 표현할 수 있다
    //즉 움직임 방식을 결정할 수 있는 객체안의 함수를 그리켜 메서드(method)한다

    render(){
        //물체위히=기존물체위치 + 비율*(남은거리(목표지점-물체 기존위치))
        this.div.style.height=parseFloat(this.div.style.height)+this.a*(this.targetH-parseFloat(this.div.style.height))+"px";
        this.div.innerText=parseInt(this.div.style.height);
    }

}