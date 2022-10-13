
// let quick1=""; //퀵메뉴 이미지를 저장 할 변수 만듬

// for(let i=0; i<20; i++){
//     if(i<10){
//     quick1 += `<img src="img/quick01/quick01_0000${i}.png"/>`;
//     }else{
//     quick1 += `<img src="img/quick01/quick01_000${i}.png"/>`;

//     for(let j=1; j<5; j++){
//     }
// }
// }
// document.querySelector("span.quick1").innerHTML = quick1;

let span = document.querySelectorAll(".content1 span")
console.log(span)
for(let j=0; j<span.length; j++){ //0,1,2,3 span4개 불러오는 포문
    let images='' //이미지 저장 함수
    for(let i=0; i<20; i++){ //img 20개 생성하는 포문
    if(i<10){
    images += `<img src="img/quick0${j+1}/quick0${j+1}_0000${i}.png"/>`;
    }else{
    images += `<img src="img/quick0${j+1}/quick0${j+1}_000${i}.png"/>`;
    }
}
    span[j].innerHTML = images;
}
let appear='' //이미지 저장 함수
for(let k=0; k<57; k++){ //img 57개 생성하는 포문
    if(k<10){
    appear += `<img src="img/appear/appear_0000${k}.png"/>`;
    }
    else{
    appear += `<img src="img/appear/appear_000${k}.png"/>`;
    }
}
document.querySelector("a.appear").innerHTML = appear;

let loop='' //이미지 저장 함수
for(let n=0; n<82; n++){ //img 20개 생성하는 포문
    if(n<10){
    loop += `<img src="img/loop/loop_0000${n}.png"/>`;
    }
    else{
    loop += `<img src="img/loop/loop_000${n}.png"/>`;
    }
}
document.querySelector("a.loop").innerHTML = loop;

// 로그인 애니메이션
//appear 0~56개 이미지
//animation: ani 2.85s linear 0s 1 ;
//animation: ani 2.85s linear 0.05s 1 ;
//animation: ani 2.85s linear 0.1s 1 ;

//loop
//animation: ani 4.1s linear 2.85s infinite;
//animation: ani 4.1s linear 2.90s infinite;
//animation: ani 4.1s linear 2.95s infinite;

// const loginimg = document.querySelectorAll("span.login>a>img")
// console.log(loginimg)
//  for(let i=0;i<loginimg.length;i++){
//     if(i == 2)
//     loginimg[i] += `animation: ani 4.1s linear 0.0${5*i}s 1 ;`
//  }

const delay = 0.05;
const appearimg = document.querySelectorAll(".appear>img")
const loopimg = document.querySelectorAll(".loop>img")
for(let i=0;i<appearimg.length;i++){
    appearimg[i].style.animation = ` ani 2.85s linear ${delay*i}s 1`;
}
for(let j=0;j<loopimg.length;j++){
    loopimg[j].style.animation = ` ani 4.1s linear ${2.85+(delay*j)}s infinite`;
}




// 고객센터
//toggle 0~81개 이미지

const center = document.querySelector(".topmenu>dd:nth-of-type(5)")
center.addEventListener("click",()=>{
    e.preventDefault();
    center.classList.toggle("on")
    if(center.classList.contains("on")){ //센터에 클래스on이 포함되어있니?그렇다면
        center.children[0].setAttribute("title","고객센터 닫기") //센터의첫번째자식(a)에 타이틀 속성에 고객센터 닫기를 부여하자! 
    }else{ //on이 없을때
        center.children[0].setAttribute("title","고객센터 열기")
    }   
})

const hdwrap = document.querySelector(".header_wrap")
const gnbmenu = document.querySelectorAll(".gnb>ul>li")
const submenu = document.querySelectorAll(".gnb>ul>li>ul") //하위ul
const search = document.querySelector(".srch_open") //검색버튼
const srchform = document.querySelector("form.srch") //검색박스

for(var i=0;i<gnbmenu.length;i++){ //li하나만 뜨는게 아닌 모든  li를 선택하기위해
    gnbmenu[i].addEventListener('mouseover',()=>{
        //탑메뉴에 on있으면 떼라
        //검색박스에 on있으면 떼라
        if(center.classList.contains("on")){
            center.classList.remove("on")
        }
        if(search.classList.contains("on")){
            search.classList.remove("on")
            srchform.classList.remove("on")
        }
        
        hdwrap.classList.add("on")
        submenu.forEach(item=>{
            item.classList.add("on")
        })
    }) //mouseover
    gnbmenu[i].addEventListener('mouseout',()=>{
        hdwrap.classList.remove("on")
        submenu.forEach(item=>{
            item.classList.remove("on")
        })
    })//mouseout

    gnbmenu[i].children[0].addEventListener('focus',()=>{
        hdwrap.classList.add("on")
        submenu.forEach(item=>{
            item.classList.add("on")
        })
    }) //mouseover
    gnbmenu[i].children[0].addEventListener('blur',()=>{
        hdwrap.classList.remove("on")
        submenu.forEach(item=>{
            item.classList.remove("on")
        })
    })//mouseout
}

search.addEventListener("click",()=>{
    search.classList.toggle("on")
    srchform.classList.toggle("on")

    if(search.classList.contains("on")){
        search.children[0].setAttribute("title","검색입력서식 닫기")
    }else{ //on이 없을때
        search.children[0].setAttribute("title","검색입력서식 열기")
    }   
})


 //배너이미지
// let bannerimg = document.querySelectorAll(".banner_frame h3")
// for(i=0;i<13;i++){
//     bannerimg[i].style.backgroundImg = '/img/banner_bg_sec${i}.jpg";';
// }
// console.log(bannerimg);


//배너
const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector ('.prev');
const bnnFrame = document.querySelector ('.banner_frame');
const bnnSection = document.querySelectorAll('.banner_frame>section');//0~11번 섹션

const arrowA = document.querySelectorAll('.banner_arrow>a')
const rollingA = document.querySelectorAll('.banner_rolling a')

const bnn_rollA = document.querySelectorAll('.banner_rolling li a')
//next버튼 눌렀을때 배너번호 1증가 마지막배너번호보다크면 배너번호 다시 0으로
let bnnNum = 0;
let lastNum= bnnSection.length - 1;

let bnnW = document.querySelector('body>section').offsetWidth;
window.addEventListener('resize',()=>{
    bnnW = document.querySelector('body>section').offsetWidth;
})


let secWhite = (bannerNumber) =>{ //인자값받는 매개변수
//         // white부분
        if(bnnSection[bnnNum].classList.contains('white')){ //bnnNum을 전달 받아야함
            arrowA.forEach(item=>{
                item.classList.add('white')
            })
            rollingA.forEach(item=>{
                item.classList.add('white')
            })
        }else{
            arrowA.forEach(item=>{
                item.classList.remove('white')
            })
            rollingA.forEach(item=>{
                item.classList.remove('white')
            })
        }

        bnn_rollA.forEach(item=>{
            item.classList.remove('on')
        })
    bnn_rollA[bannerNumber].classList.add('on')    
}
secWhite(0)

btnNext.addEventListener ('click', e => {
    e.preventDefault();
    bnnNum++;
    if(bnnNum>lastNum) bnnNum = 0;
    bnnFrame.style.left = `${-bnnNum*bnnW}px`;
    secWhite(bnnNum); //함수인자값 전달해줌
})


btnPrev.addEventListener('click',e =>{
    e.preventDefault();
    bnnNum--;
    if(bnnNum<0) bnnNum=lastNum;
        bnnFrame.style.left = `${-bnnNum*bnnW}px`;

        bnn_rollA.forEach(item=>{
            item.classList.remove('on')
        })
    bnn_rollA[bnnNum].classList.add('on')
    console.log(bnnNum)
    secWhite(bnnNum);
})

// //배너프레임 left값 변경해서 배너 움직이게

// //prev버튼 눌렀을때


// //오토배너 작동 - setTimeout 사용,재귀함수 사용
let autoBanner =() => {
    bnnNum++;
    if(bnnNum>lastNum) bnnNum = 0;
    bnnFrame.style.left = `${-bnnNum*bnnW}px`;
    secWhite(bnnNum); //함수인자값 전달해줌

    let autoBnn = setTimeout(autoBanner,5000)
}
  let autoBnn = setTimeout(autoBanner,5000);


// //재생/멈춤
let flag = true;
let btnplay = document.querySelector('a.btn_play')
btnplay.addEventListener('click',e=>{
    e.preventDefault()
    if(flag){
        clearTimeout(autoBnn);
        btnplay.classList.add('pause')
        flag = false;
    }else{
        clearTimeout(autoBnn);
        btnplay.classList.remove('pause')
        flag = true;
    }
})

// // 롤링클릭
const bnnRolllist = document.querySelectorAll('.banner_rolling li')

for(let i=0;i<bnnRolllist.length;i++){
    bnnRolllist[i].addEventListener('click',e=>{
        e.preventDefault()
        clearTimeout(autoBnn);
        bnnFrame.style.left = `${-i*bnnW}px`;
        secWhite(i);
    })
}

//content1
//마우스 올렸을 때 이미지에 애니메이션 적용
//떼면 이미지에 애니메이션 삭제

//내가 쓴거
// const content1_list = document.querySelectorAll('.content1 li') 
// let conimg = document.querySelectorAll('.content1>ul>li>a>span>img')
// for(let i=0;i<content1_list.length;i++){
//     content1_list[i].addEventListener('mouseover',e=>{
//         e.preventDefault()
//         for(k=0;k<conimg.length;k++){
//         conimg[k].style.animation = ` ani 1.5s linear ${delay*k}s 1`;
//         }
//     })
// } //이렇게 쓰면 이미지가 80개 들어옴. 이럴땐 개수를 정해주는게 좋소
// for(let i=0;i<content1_list.length;i++){
// content1_list[i].addEventListener('mouseout',e=>{
//     e.preventDefault()
//     for(let k=0;k<20;k++){
//         conimg[k].style.animation = 'none';
//         }
// })
// }
const content1Li = document.querySelectorAll(".content1 ul li");
for(let i=0;i<content1Li.length;i++){
    content1Li[i].addEventListener("mouseover",e=>{
        for(let k = 0; k < 20; k++){
            let imgLi = e.currentTarget.children[0].children[0].children;
            imgLi[k].style.animation = `ani 1s linear ${delay * k}s 1`;
                }
            })
}

for(let i=0;i<content1Li.length;i++){
    content1Li[i].addEventListener("mouseout",e => {
        for(let k = 0; k < 20; k++){
            let imgLi = e.currentTarget.children[0].children[0].children;
            imgLi[k].style.animation = 'none';
                }
            })
    }

// 스크롤 이벤트
// const btntop =document.querySelector('.top img');
// top.addEventListener('click',e=>{
//     e.preventDefault();
//     window.scroll({
//         top: 0,
//         left: 0,
//         behavior: 'smooth'
//     })
// })

window.addEventListener('scroll',()=>{
    let scroll = document.querySelector('html').scrollTop;
    //도넛
    const doughnut_L_L =  document.querySelector('.doughnut_Left_L')
    const doughnut_L_s =  document.querySelector('.doughnut_Left_s')
    const combine_L =  document.querySelector('.combine_Left')
    
    const doughnut_R_m =  document.querySelector('.doughnut_right_M')
    const doughnut_R_s =  document.querySelector('.doughnut_right_s')
    const combine_R =  document.querySelector('.combine_right')

    const center_m = document.querySelector('.doughnut_Center_M')
    const center_s = document.querySelector('.doughnut_Center_s')


    combine_L.style.top = `${scroll*0.3}px`
    doughnut_L_L.style.top = `${scroll*0.5}px`
    doughnut_L_s.style.top = `${1310-scroll*0.8}px`

    doughnut_R_m.style.top = `${1310-scroll*0.7}px`
    doughnut_R_s.style.top = `${1310-scroll*0.3}px`
    combine_R.style.top = `${scroll*0.7}px`

    center_m.style.top = `${1310-scroll*0.7}px`
    center_s.style.top = `${scroll*0.3}px`

    // //탑버튼
    // if(scroll<=0){
    //     btntop.classList.remove('on','ab')
    // }else if(scroll>0 && scroll<2700){
    //     btntop.classList.remove('ab')
    //     btntop.classList.add('on')
    // }else{
    //     btntop.classList.add('ab')
    // }
})

//content3 
//li하나 하나에 마우스오버하면 모든 li에 .on을 지우고 마우스 오버한 li만 .on이 붙어라
// const con3_li = document.querySelectorAll('.content3_inner>div>ul>li') //내가 쓴거
// console.log(con3_li)
// for(let i=0;i<con3_li.length;i++){
//     con3_li[i].addEventListener('mouseover',e=>{
//         e.preventDefault()
//         con3_li.forEach(item =>{
//         item.classList.remove('on')
//         })    
//     })
    
//     con3_li[i].classList.add('on')
// }

var all = document.querySelectorAll('.content3_inner>div>ul>li')
all.forEach(item=>{
    item.addEventListener('mouseover',e=>{
        e.currentTarget.classList.add('on')
    })
    item.addEventListener('mouseout',e=>{
        e.currentTarget.classList.remove('on')
    })
})

//li 하나하나를 클릭했을때 클래스속성값을 가져와야함.가져와서 변수에 저장하고
//변수값이랑 비교하고 변수값과 정확하게 일치하는 케이스(스위치 케이스문 사용)에서 해당 클래스이름에 해당되는 li만 보이게 설정한다.
// const brand = document.querySelectorAll('.content3_inner>ul>li')
// const brandList = document.querySelectorAll('.content3_inner>div>ul>li')
// const All =  document.querySelectorAll('.content3_inner>div>ul>li.all')
// const ents =  document.querySelectorAll('.content3_inner>div>ul>li.ent')
// const shops =  document.querySelectorAll('.content3_inner>div>ul>li.shop')
// const dinners =  document.querySelectorAll('.content3_inner>div>ul>li.dinner')
// const box =  document.querySelector('.content3_inner>div>ul>li.box')
// console.log(brand)
// console.log(ents)
// brandList.forEach(items=>{}
//     items.addEventListener('click',e=>{
//         let list = brand[i]
        
//         console.log(items)
//         e.preventDefault();
//         e.currentTarget.children[0].classList.add('on')
//         switch(e.currentTarget.children[0].classList.contains('on')){
//             case e.currentTarget.classList == 'ent':
//                 ents.style.display = 'none';
//             break;

//             case 2:
//                 All.style.opacity = 0;
//                 ents.classList.add('on')

//             break;
//         }
//     })
// })
const brandList = document.querySelectorAll('.content3_inner>ul>li>a')
const All =  document.querySelectorAll('.content3_inner>div>ul>li')
const ents =  document.querySelectorAll('.content3_inner>div>ul>li.ent')
const shops =  document.querySelectorAll('.content3_inner>div>ul>li.shop')
const dinners =  document.querySelectorAll('.content3_inner>div>ul>li.dinner')
const box =  document.querySelectorAll('.content3_inner>div>ul>li.box')
for(var d=0;d<brandList.length;d++){
    brandList[d].addEventListener('click',e=>{
        e.preventDefault();
        brandList.forEach(items=>{
            items.classList.remove('on')
        })
        e.currentTarget.classList.add('on')
    let className = e.currentTarget.parentElement.getAttribute("class");

    all.forEach(item=>{
        item.style.display = 'none';
    })

        switch(className){
        case 'all':
            All.forEach(item=>{
                item.style.display = 'block';
            })
            break;

        case 'ent':
            ents.forEach(item=>{
                item.style.display = 'block';
            })
            break;

        case 'shop':
            shops.forEach(item=>{
                item.style.display = 'block';
            })
            break;

        case 'dinner':
            dinners.forEach(item=>{
                item.style.display = 'block';
            })
            break;

        case 'box':
            box.forEach(item=>{
                item.style.display = 'block';
            })
            break;
    }
    })
    }

//패밀리사이트
const site = document.querySelector('.family_site')
site.addEventListener('click',e=>{
    e.preventDefault();
    site.classList.toggle('on')

    if(e.currentTarget.classList.contains('on')){
        e.currentTarget.children[0].setAttribute('title','닫기')
    }else{
        e.currentTarget.children[0].setAttribute('title','열기')
    }
})

// 스크롤이 0보다 커지면 .top에 .on 추가
// 더 내려가면 .on 삭제 .ab 추가
const btnTop = document.querySelector('.top');

window.addEventListener('scroll', (e) => {
  let scroll = document.querySelector('html').scrollTop;

  if (scroll > 0) {
    btnTop.classList.remove('ab');
    btnTop.classList.add('on');
  }
  if (scroll > 2000) {
    btnTop.classList.remove('on');
    btnTop.classList.add('ab');
  }
});

// 탑버튼 클릭 시 부드럽게 올라가게
btnTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

//햄버거 버튼 클릭
const body = document.querySelector('body')
const bg = document.querySelector('.bg')


const mobBtn = document.querySelector('.mobBtn')
const mobBtn_cl = document.querySelector('.mobBtn_cl')
const mob = document.querySelector('.mob')

mobBtn.addEventListener('click',e=>{
    e.preventDefault()
    body.classList.add('on')
    mob.classList.add('on')
    bg.classList.add('on')
    mobBtn_cl.classList.add('on')
})

mobBtn_cl.addEventListener('click',e=>{
    e.preventDefault()
    body.classList.remove('on')
    mob.classList.remove('on')
    bg.classList.remove('on')
    mobBtn_cl.classList.remove('on')
})

// 모바일 탑메뉴 하위 ul토글
const mob_client_center = document.querySelector('dl.mob_topMenu>dd:nth-of-type(5)')
mob_client_center.addEventListener('click',e=>{
    e.preventDefault()
    e.currentTarget.classList.toggle('on')
})

// 모바일 gnb
// .mob_gnb>ul>li를 눌렀을때 li에 on을 붙이기
// 다른li를 눌렀을땐 있던 on 다 지우기

const mobgnb_ul = document.querySelector('.mob_gnb>ul')
const mobgnb_li=document.querySelectorAll('.mob_gnb>ul>li')
const little_li = document.querySelectorAll('mob_gnb>ul>li>ul')
const click = document.querySelector('.mob_gnb>ul>li.on')
console.log(click)


for(let i=0;i<mobgnb_li.length;i++){
    mobgnb_li[i].addEventListener('click',e=>{
        e.preventDefault()
        mobgnb_li.forEach(item=>{
        item.classList.remove('on')
    })
    mobgnb_li[i].classList.add('on')

    if( e.target === e.currentTarget ){
        mobgnb_li[i].classList.remove('on')
    }
})
}



