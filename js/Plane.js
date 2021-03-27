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


        //주인공과 적이 충돌
        for(var i=0;i<enemyArray.length;i++){
            if(hitTest(this.img, enemyArray[i].img)){
                removeObject(this.container, enemyArray[i].img, enemyArray,i);
                //hp 제거
                removeObject(info, hpArray[hpArray.length-1].img, hpArray,hpArray.length-1);

                //주인공의 에너지가 모두 소진되었는지
                if(hpArray.length==0){
                    var div=document.createElement("div");
                    div.style.fontSize="100px";
                    div.style.textAlign="center";
                    div.style.color="#ffffff";
                    div.style.fontWeight="bold";
                    div.style.height="600px";
                    div.innerHTML="GAME OVER <br><a href=\"javascript:location.reload()\">REPLAY?</a>";

                    this.container.appendChild(div);
                }
            }
        }

        for(var i=0; i<itemArray.length;i++){
            if(hitTest(this.img, itemArray[i].img)){
                // for(var j=0;j<roleArray.length;j++){
                //     if(itemArray[i].src==roleArray[j].src){
                //         var loop = enemyArray.length;
                //         switch(roleArray[j].role){
                //             case 0: weaponIndex=2;break;
                //             case 1: {
                //                 for(var a=0;a<loop;a++){
                //                     removeObject(this.container, enemyArray[0].img, enemyArray,0);
                //                 } 
                //                 break;

                //             }
                //             case 2: 
                //                 plusHP();
                //                 break;
                //             case 3: 
                //                 speed =  15;
                //                 break;
                //         }

                //     }
                // }
                var itemRole=itemArray[i].itemRole;
                removeObject(this.container, itemArray[i].img, itemArray,i);
                switch(itemRole.role){
                    case 0:changeWeapon();break;
                    case 1:clearEnemy();break;
                    case 2:increaseHp();break;
                    case 3:speedUp();break;
                }
            }
        }





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