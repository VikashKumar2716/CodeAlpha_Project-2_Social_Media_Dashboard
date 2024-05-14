console.log("hello");
let btns = document.querySelectorAll(".btn");

let drop= document.querySelectorAll(".dropdown-content");

let bars=document.querySelector(".bars");

let sidebar=document.querySelector(".sidebar");

let Cont=document.querySelector(".container");

let fullDetail= document.querySelectorAll(".menu-detail span");

let para= document.querySelectorAll(".card p");


let click=0;

let bar=0;
bars.addEventListener("click",function(){
    if(bar==0){
        for(let i=0;i<fullDetail.length;i++){
            if(bar>=0){
                console.log("bar is cliked");
                sidebar.style.width="280px";
                Cont.style.left="280px";
                fullDetail[i].style.display="flex";
                console.log(bar);
                }
        };
        bar++;
    }
    else{
        for(let i=0;i<fullDetail.length;i++){
            sidebar.style.width="80px";
            Cont.style.left="80px";
            fullDetail[i].style.display="none";
            bar=0;
        };
    };

});

for (btn of btns){
    btn.addEventListener("click",function(){
    
        if(click==0){
            console.log("button was cliked");
            console.log(this);
            let num=this.getAttribute("id");
            console.dir(drop[num]);
            drop[num].style.display="flex";
            this.style.background="white";
            
            click++;
        }
        else{
            let num=this.getAttribute("id");
            this.style.border="1px solid transparent"
            drop[num].style.display="none";   
            this.style.background="none";
            click=0;     
        }
    });
};




let curr1=2400000;
let curr2=6030000;
let curr3=287000;
let curr4=17400000;


live(curr1,0);
live(curr2,1);
live(curr3,2);
live(curr4,3);



function live(curr,i){
    // for(let i=0;i<para.length;i++){
        // console.log(this);
        setInterval(()=>{
            let rand=getRandom();
            if(rand>0){
                para[i].style.color="green";
            }
            else{
                para[i].style.color="red";
            }
            curr=curr+rand;
            para[i].innerHTML=`Live Count:- ${curr}`;
        },2000);
    // }
}


function getRandom(){
    let rand=Math.floor(Math.random()*10-3);
    return rand;
}


