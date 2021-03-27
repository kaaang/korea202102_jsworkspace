// 1:무기 전환
// 2:적군 모두 소멸
// 3:hp추가
// 4:주인공 속도


class Item{
    constructor(itemRole,container,width,height,x,y,velX,velY){
        this.itemRole=itemRole;
        this.container=container
        this.img=document.createElement("img");
        this.src=itemRole.src;
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
        this.x +=this.velX;
        this.y +=this.velY;
        if(this.x<0){
            removeObject(this.container, this.img,itemArray, itemArray.indexOf(this));
        }
    }
    render(){
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";
    }
}