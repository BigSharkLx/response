export default function(){
  var timer=null;
  var indexNum=0;
  var photo=document.getElementsByClassName("photo");
  var len =photo.length;
  var arr=document.getElementById("arrow");
  var arrow=document.getElementById("arrow").getElementsByTagName("a");
  var dots=document.getElementById("dots").getElementsByTagName("span");
  // 遍历所有图片
  for(var everyphoto of photo){
    everyphoto.onmouseover=function(){
      // 鼠标滑入停止轮播
      clearInterval(timer);

      // 鼠标滑入显示前后导航图标
      arr.style.display="block";


    };

    everyphoto.onmouseout=function(){
      // 鼠标离开隐藏前后导航图标

      arr.style.display="none";

      // 鼠标离开自动轮播
      timer = setInterval(function(){
        indexNum++;
        if(indexNum==len){
          indexNum=0;
        }
        changePhoto();
      },3000);

    };
    //  点击上一张
    arrow[0].onclick=function(){
      indexNum--;
      if(indexNum<0){
        indexNum=len-1;
      }
      changePhoto();
  };
    //  点击下一张
    arrow[1].onclick=function(){
      indexNum++;
      if(indexNum==len){
        indexNum=0;
      }
      changePhoto();
    };
    //  下方导航按钮
    function dotsOnmouseOver(i,lib){
      lib[i].onmouseover=function(){
        clearInterval(timer);
        indexNum=i;
        changePhoto();
      };
    }
  for(var m=0;m<len;m++){
  dotsOnmouseOver(m,dots);
  }
  }
  // 手动添加鼠标滑过离开事件
  everyphoto.onmouseout();

  // 前后导航滑过显示
  arr.onmouseover=function(){
    arr.style.display="block";
  };
  // 图片切换函数
  function changePhoto(){
    for(var all of photo){
      all.style.display="none";
      photo[indexNum].style.display="block";
    }
    for(var d of dots){
      d.style.backgroundColor="#fff";
      dots[indexNum].style.backgroundColor="red";
    }
  }
}
