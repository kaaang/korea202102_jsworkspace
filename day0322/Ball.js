class Ball{
    //new 연산자에 의해 호출되는 메서드를 생성자 메서드라고 하고,
    // 생성자 메서드의 목적인 이 객체가 인스턴스화 될때, 즉 사물이 
    // 탄생할때 알맞는 개성을 부여하기 위함이다.
    // 모습!
    constructor(container){
        this.container=container;

        
        this.div=document.createElement("div");//공을 감쌀 div
        this.div.style.width=35+"px";
        this.div.style.height=35+"px";
        this.div.style.background="red";
        this.div.innerText="●";
        this.div.style.fontSize=35+"px";
        this.div.style.position="absolute";
        this.div.style.left=0+"px";
        this.div.style.top=0+"px";

        this.container.appendChild(this.div);
    }


}