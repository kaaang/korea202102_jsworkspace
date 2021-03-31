/*
달력의 셀 하나를 표현하는 사각형
일정 등록 및 날짜 표가 가능한 객체
*/


class DateBox{
    constructor(container, width, height,text,bg){
        this.container=container;
        this.div=document.createElement("div");
        this.width=width;
        this.height=height;
        this.bg=bg;
        this.div.innerText=text;
        
        this.title;//제목보관용
        this.content;//내용보관용
        
        this.init();
    }

    init(){
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        this.div.style.background=this.bg;
        this.div.style.border="1px solid red";
        this.div.style.boxSizing="border-box";
        this.div.style.float="left";

        this.container.appendChild(this.div);
        var bg=this.bg
        var me=this;//이 클래스로부터 장차 미래에 메모리에 올라갈 인스턴스 자신

        //이벤트 구현
        this.div.addEventListener("mouseover",function(){
            this.style.background="gray";
        });
        this.div.addEventListener("mouseout",function(){
            this.style.background=bg;
        });
        this.div.addEventListener("click",function(){
            //현재 날짜 박스가 어레이의 몇번째 요소인지 역추적

            var index = boxArray.indexOf(me)

            openDialog(index);
        });
    }
}