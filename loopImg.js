// by Herpang 
// github Herpang
// boyuanyu321@gmail.com  2017/04/29

initLoop({  //我们只需要设置这里就可以了
	number:4, //显示几张轮播图
	width:'1000px',  //图片的宽度
	height:'500px'  //图片的高度
});
function initLoop(options){
	var container = document.getElementsByClassName('loopImg')[0],
		stringUl='', 
		stringA='',
		number = options&&options.number ||4, //默认是4张
		width = options&&options.width || '1000px',
		height = options&&options.height || '500px';
	for(let i=1;i<=number;i++){
		stringUl+="<li class='con'></li>";
		stringA+="<a href='#'' class='_blank'><img src='img/"+i+".jpg' class='i_mg' alt='第一张图片，看到此段文字时，说明图片加载失败''></a>";
	}
	container.innerHTML = `<ul id="d_d">${stringUl}</ul> ${stringA}`;
	var im_g = document.getElementsByClassName('i_mg');
	container.style.width = width;
	container.style.height = height;
	for(let i=0;i<im_g.length;i++){
		im_g[i].style.width = width;
		im_g[i].style.height = height;
	}
}	
var imc = document.querySelectorAll("a._blank"),//a标签 //此处曾经的bug已改
	ban = document.getElementById('d_d'), //整体
	cont = document.getElementsByClassName('con'),//li标签
    count = 0, //索引
    tools = (function(){	 
	var	clearAndSet = function (index){ //控制li
					for(let i=0;i<imc.length;i++){
						cont[i].className = 'con';
						}
					cont[index].className = 'con tet';
					},
		controlImg = function (index){ //控制图片显示
					for(var i=0;i<imc.length;i++){    	
						imc[i].style.filter = 'opacity(0)';
						}
					imc[index].style.filter = 'opacity(1)'; 
					},
		control = function (){  //控制流程
					if(count===imc.length){
						count = 0;
					}
					ma_in(count); 
					count++;
					}				
		return{clearAndSet:clearAndSet,
			controlImg:controlImg,
			control:control   }
})();
tools.control();
setInterval(tools.control,3000);  //定时器
function ma_in(index){  //控制流程
	tools.controlImg(index);
	tools.clearAndSet(index);
}
ban.addEventListener('mouseover',function(ev){//监听器
		let event = ev || window.event,
		tar = event.target ||event.srcElement;  
		if(tar.nodeName.toLowerCase() ==='li'){
			for(var i=0;i<imc.length;i++){    
				imc[i].style.filter = 'opacity(0)';
				if(tar===cont[i]){
					imc[i].style.filter = 'opacity(1)';
					count = i;
					tools.clearAndSet(i);
				}
			}	
		}
});