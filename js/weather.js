
 var weather=new Vue({
	   el:'#weather',
	   data:
	   {
		 
		 weather:
		 {
			 marginLeft:350+'px',
			 width:680+'px',
			 height:600+'px',
			 //backgroundColor:'green'
		 },
		 location:
		 {
			 width:680+'px',
			 height:55+'px',
			 //backgroundColor:'red'
		 },
		 iconlocation:
		 {
			 marginLeft:270+'px',
			 marginTop:5+'px',
			 fontSize:45+'px'
		 },
		 locationtext:
		 {
			 fontSize:30+'px',
			 marginTop:5+'px',
			 position:'absolute'
		 },
		 search:
		 {
			 width:680+'px',
			 height:50+'px',
			 marginTop:18+'px',
			 //backgroundColor:'yellow'
		 },
		 searchinput:
		 {
			 width:340+'px',
			 position:'absolute'
		 },
		 IPsearch:
		 {
			 width:320+'px',
			 marginLeft:360+'px',
			 position:'absolute'
		 },
		 refresh:
		 {
			 border:0+'px',
			 backgroundColor:'#fff',
		 },
		 
		 hrstyle:
		 {
			 width:280+'px',
			 marginTop:13+'px',
			 position:'absolute'
		 },
		 nowweathertext:
		 {
			
			 marginLeft:300+'px',
			 marginTop:2+'px',
			 textAlign:'center',
			 position:'absolute'

		 },
		 hrstyletwo:
		 {
			 marginLeft:385+'px',
			 width:290+'px',
			 marginTop:13+'px',
			 position:'absolute'
		 },
		 NowWeatherCard:
		 {
			 width:680+'px',
			 height:220+'px',
			 marginTop:40+'px'
		 },
		 hrstylethree:
		 {
			 width:250+'px',
			 marginTop:25+'px',
			 position:'absolute'
		 },
		  RecentlyThreeWeatherText:
		 {
			
			 marginLeft:275+'px',
			 marginTop:13+'px',
			 textAlign:'center',
			 position:'absolute'

		 },
		 hrstylefour:
		 {
			 marginLeft:405+'px',
			 width:273+'px',
			 marginTop:25+'px',
			 position:'absolute'
		 },
		 TodayCard:
		 {
			 width:200+'px',
			 marginTop:60+'px',
			 height:200+'px',
			 position:'absolute'
		 },
		 TheSecondCard:
		 {
			 width:200+'px',
			 marginTop:60+'px',
			 marginLeft:245+'px',
			 height:200+'px',
			 position:'absolute'
		 },
		 TheThirdCard:
		 {
			 width:200+'px',
			 marginTop:60+'px',
			 marginLeft:479+'px',
			 height:200+'px',
			 position:'absolute'
		 },
		 Today:
		 {
			 fontSize:20+'px',
			 position:'absolute'
		 },
		 temp:
		 {
			 fontSize:60+'px',
			 marginTop:50+'px',
			 position:'absolute'
		 },
		 condtxt:
		 {
			 fontSize:25+'px',
			 marginTop:140+'px',
			 marginLeft:90+'px',
			 position:'absolute'
		 },
		 WeatherPC:
		 {
			 width:150+'px',
			 height:150+'px',
			 marginLeft:210+'px',
			 marginTop:30+'px',
			 //backgroundColor:'black',
			 position:'absolute'
		 },
		 bodyTemp:
		 {
			 fontSize:20+'px',
			 marginTop:30+'px',
			 marginLeft:400+'px',
			 position:'absolute'
		 },
		 humidity:
		 {
			 fontSize:20+'px',
			 marginTop:30+'px',
			 marginLeft:510+'px',
			 position:'absolute'
		 },
		 WindyDirection:
		 {
			 fontSize:20+'px',
			 marginTop:110+'px',
			 marginLeft:510+'px',
			 position:'absolute'
		 },
		 WindyPower:
		 {
			 fontSize:20+'px',
			 marginTop:110+'px',
			 marginLeft:400+'px',
			 position:'absolute'

		 },
		 AtmospherePressure:
		 {
			 fontSize:20+'px',
			 marginTop:160+'px',
			 marginLeft:400+'px',
			 position:'absolute'
		 },
		 bodyTempValue:
		 {
			 fontSize:20+'px',
			 fontWeight:600,
			 marginTop:2+'px',
			 marginLeft:400+'px',
			 position:'absolute'
		 },
		 humidityValue:
		 {
			 fontSize:20+'px',
			 fontWeight:600,
			 marginTop:2+'px',
			 marginLeft:515+'px',
			 position:'absolute'
		 },
		 WindyDirectionValue:
		 {
			 fontSize:20+'px',
			 fontWeight:600,
			 marginTop:80+'px',
			 marginLeft:509+'px',
			 position:'absolute'
		 },
		 WindyPowerValue:
		 {
			 fontSize:20+'px',
			 fontWeight:600,
			 marginLeft:409+'px',
			 marginTop:80+'px',
			 position:'absolute'
		 },
		 AtmospherePressureValue:
		 {
			 fontSize:20+'px',
			 fontWeight:600,
			 marginLeft:495+'px',
			 marginTop:160+'px',
			 position:'absolute'

		 },
		 updatetime:{
			 fontSize:16+'px',
			 marginLeft:580+'px',
			 marginTop:170+'px',
			 position:'absolute'
		 },
		 mystyle:{
			position:'absolute'
		 },
		today:{
			fontWeight:800,
			marginLeft:50+'px',
			position:'absolute'

		 },
		Temp:{
			fontSize:23+'px',
			marginTop:30+'px',
			position:'absolute'
		 },
		condTxt:{
			marginTop:100+'px',
			fontSize:15+'px',
			position:'absolute'
		 },
		winddir:{
			marginTop:125+'px',
			fontSize:15+'px',
			position:'absolute'
		 },
		windsc:{
			marginTop:125+'px',
			marginLeft:100+'px',
			fontSize:15+'px',
			position:'absolute'
		 },
		waterpop:{
			marginTop:150+'px',
			fontSize:15+'px',
			position:'absolute'
		 },
		nowweatherpc:{
			width:50+'px',
			height:50+'px',
			marginTop:55+'px',
			position:'absolute'
		 },
		nowweatherpctwo:{
			width:50+'px',
			height:50+'px',
			marginTop:55+'px',
			marginLeft:110+'px',
			position:'absolute'
		 },
		TheSecondmystyle:{
				position:'absolute'
		 },
		TheSecondtoday:{
			fontWeight:800,
			marginLeft:50+'px',
			position:'absolute'
		},
		TheSecondTemp:{
			fontSize:23+'px',
			marginTop:30+'px',
			position:'absolute'
		},
		TheSecondcondTxt:{
			marginTop:100+'px',
			fontSize:15+'px',
			position:'absolute'
		},
		TheSecondwinddir:{
			marginTop:125+'px',
			fontSize:15+'px',
			position:'absolute'
		},
		TheSecondwindsc:{
			marginTop:125+'px',
			marginLeft:100+'px',
			fontSize:15+'px',
			position:'absolute'
		},
		TheSecondwaterpop:{
			marginTop:150+'px',
			fontSize:15+'px',
			position:'absolute'
		},
		thesecondweatherpc:{
			width:50+'px',
			height:50+'px',
			marginTop:55+'px',
			position:'absolute'
		},
		thesecondweatherpctwo:{
			width:50+'px',
			height:50+'px',
			marginTop:55+'px',
			marginLeft:110+'px',
			position:'absolute'
		},
		TheThirdmystyle:{
				position:'absolute'
		},
		TheThirdtoday:{
			fontWeight:800,
			marginLeft:50+'px',
			position:'absolute'
		},
		TheThirdTemp:{
			fontSize:23+'px',
			marginTop:30+'px',
			position:'absolute'
		},
		TheThirdcondTxt:{
			marginTop:100+'px',
			fontSize:15+'px',
			position:'absolute'
		},
		TheThirdwinddir:{
			marginTop:125+'px',
			fontSize:15+'px',
			position:'absolute'
		},
		TheThirdwindsc:{
			marginTop:125+'px',
			marginLeft:100+'px',
			fontSize:15+'px',
			position:'absolute'
		},
		TheThirdwaterpop:{
			marginTop:150+'px',
			fontSize:15+'px',
			position:'absolute'
		},
		thethirdweatherpc:{
			width:50+'px',
			height:50+'px',
			marginTop:55+'px',
			position:'absolute'
		},
		thethirdweatherpctwo:{
			width:50+'px',
			height:50+'px',
			marginTop:55+'px',
			marginLeft:110+'px',
			position:'absolute'
		}
	  },
		
	mounted:function()
	 {
		var xmlHttp;//获得实况天气
		var xmlHttpgetforecast;//获得3天天气预报
		var HeFengkey="&"+"key"+"="+"dad99f28d0e344ecb45765e293f075c6";
		if(window.ActiveXObject)//IE5 IE6是以ActiveXObject的方式
		{
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
			xmlHttpgetforecast=new ActiveXObject("Microsoft.XMLHTTP");
		}
		else
		{
			xmlHttp=new XMLHttpRequest();
			xmlHttpgetforecast=new XMLHttpRequest();
		}
		
		xmlHttpgetforecast.onreadystatechange=function()
		{
		if(xmlHttpgetforecast.readyState==4&&xmlHttpgetforecast.status==200)
		{
			var data=JSON.parse(xmlHttpgetforecast.responseText);
			document.getElementById("mystyle").innerHTML=data.HeWeather6[0].daily_forecast[0].date.slice(8,10)+"日";//日期
			document.getElementById("TheSecondmystyle").innerHTML=data.HeWeather6[0].daily_forecast[1].date.slice(8,10)+"日";//日期
			document.getElementById("TheThirdmystyle").innerHTML=data.HeWeather6[0].daily_forecast[2].date.slice(8,10)+"日";
			document.getElementById("today").innerHTML="今天";
			document.getElementById("TheSecondtoday").innerHTML="明天";
			document.getElementById("TheThirdtoday").innerHTML="后天";
			document.getElementById("Temp").innerHTML=data.HeWeather6[0].daily_forecast[0].tmp_min+"&nbsp;~&nbsp;"+data.HeWeather6[0].daily_forecast[0].tmp_max+"℃";
			document.getElementById("TheSecondTemp").innerHTML=data.HeWeather6[0].daily_forecast[1].tmp_min+"&nbsp;~&nbsp;"+data.HeWeather6[0].daily_forecast[1].tmp_max+"℃";
			document.getElementById("TheThirdTemp").innerHTML=data.HeWeather6[0].daily_forecast[2].tmp_min+"&nbsp;~&nbsp;"+data.HeWeather6[0].daily_forecast[2].tmp_max+"℃";
			if(data.HeWeather6[0].daily_forecast[0].cond_txt_d==data.HeWeather6[0].daily_forecast[0].cond_txt_n)
			{
			document.getElementById("condTxt").innerHTML=data.HeWeather6[0].daily_forecast[0].cond_txt_d;
			}
			else 
			{
			document.getElementById("condTxt").innerHTML=data.HeWeather6[0].daily_forecast[0].cond_txt_d+"转"+data.HeWeather6[0].daily_forecast[0].cond_txt_n;
			}
			if(data.HeWeather6[0].daily_forecast[1].cond_txt_d==data.HeWeather6[0].daily_forecast[1].cond_txt_n)
			{
			document.getElementById("TheSecondcondTxt").innerHTML=data.HeWeather6[0].daily_forecast[1].cond_txt_d;
			}
			else 
			{
			document.getElementById("TheSecondcondTxt").innerHTML=data.HeWeather6[0].daily_forecast[1].cond_txt_d+"转"+data.HeWeather6[0].daily_forecast[1].cond_txt_n;
			}
			if(data.HeWeather6[0].daily_forecast[2].cond_txt_d==data.HeWeather6[0].daily_forecast[2].cond_txt_n)
			{
			document.getElementById("TheThirdcondTxt").innerHTML=data.HeWeather6[0].daily_forecast[2].cond_txt_d;
			}
			else
			{
			document.getElementById("TheThirdcondTxt").innerHTML=data.HeWeather6[0].daily_forecast[2].cond_txt_d+"转"+data.HeWeather6[0].daily_forecast[2].cond_txt_n;
			}
			document.getElementById("winddir").innerHTML=data.HeWeather6[0].daily_forecast[0].wind_dir;
			document.getElementById("TheSecondwinddir").innerHTML=data.HeWeather6[0].daily_forecast[1].wind_dir;
			document.getElementById("TheThirdwinddir").innerHTML=data.HeWeather6[0].daily_forecast[2].wind_dir;
			document.getElementById("windsc").innerHTML=data.HeWeather6[0].daily_forecast[0].wind_sc+"级";
			document.getElementById("TheSecondwindsc").innerHTML=data.HeWeather6[0].daily_forecast[1].wind_sc+"级";
			document.getElementById("TheThirdwindsc").innerHTML=data.HeWeather6[0].daily_forecast[2].wind_sc+"级";
			document.getElementById("waterpop").innerHTML="降水概率:&nbsp;&nbsp;"+data.HeWeather6[0].daily_forecast[0].pop+"％";
			document.getElementById("TheSecondwaterpop").innerHTML="降水概率:&nbsp;&nbsp;"+data.HeWeather6[0].daily_forecast[1].pop+"％";
			document.getElementById("TheThirdwaterpop").innerHTML="降水概率:&nbsp;&nbsp;"+data.HeWeather6[0].daily_forecast[2].pop+"％";
			var $nowweatherpc=$(".nowweatherpc");
			var $nowweatherpctwo=$(".nowweatherpctwo");
			var $thesecondweatherpc=$("#thesecondweatherpc");
			var $thesecondweatherpctwo=$("#thesecondweatherpctwo");
			var $thethirdweatherpc=$("#thethirdweatherpc");
			var $thethirdweatherpcthree=$("#thethirdweatherpctwo");
			if(data.HeWeather6[0].daily_forecast[0].cond_txt_d=="小雨")
			{
			$nowweatherpc.css("background-image","url(../img/smallrain.png)");
			$nowweatherpc.css("background-repeat","no-repeat");
			$nowweatherpc.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[1].cond_txt_d=="小雨")
			{
			$thesecondweatherpc.css("background-image","url(../img/smallrain.png)");
			$thesecondweatherpc.css("background-repeat","no-repeat");
			$thesecondweatherpc.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[2].cond_txt_d=="小雨")
			{
			$thethirdweatherpc.css("background-image","url(../img/smallrain.png)");
			$thethirdweatherpc.css("background-repeat","no-repeat");
			$thethirdweatherpc.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[0].cond_txt_n=="小雨")
			{
			$nowweatherpctwo.css("background-image","url(../img/smallrain.png)");
			$nowweatherpctwo.css("background-repeat","no-repeat");
			$nowweatherpctwo.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[1].cond_txt_n=="小雨")
			{
			$thesecondweatherpctwo.css("background-image","url(../img/smallrain.png)");
			$thesecondweatherpctwo.css("background-repeat","no-repeat");
			$thesecondweatherpctwo.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[2].cond_txt_n=="小雨")
			{
			$thethirdweatherpcthree.css("background-image","url(../img/smallrain.png)");
			$thethirdweatherpcthree.css("background-repeat","no-repeat");
			$thethirdweatherpcthree.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[0].cond_txt_d=="中雨")
			{
			$nowweatherpc.css("background-image","url(../img/middlerain.png)");
			$nowweatherpc.css("background-repeat","no-repeat");
			$nowweatherpc.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[1].cond_txt_d=="中雨")
			{
			$thesecondweatherpc.css("background-image","url(../img/middlerain.png)");
			$thesecondweatherpc.css("background-repeat","no-repeat");
			$thesecondweatherpc.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[2].cond_txt_d=="中雨")
			{
			$thethirdweatherpc.css("background-image","url(../img/middlerain.png)");
			$thethirdweatherpc.css("background-repeat","no-repeat");
			$thethirdweatherpc.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[0].cond_txt_n=="中雨")
			{
			$nowweatherpctwo.css("background-image","url(../img/middlerain.png)");
			$nowweatherpctwo.css("background-repeat","no-repeat");
			$nowweatherpctwo.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[1].cond_txt_n=="中雨")
			{
			$thesecondweatherpctwo.css("background-image","url(../img/middlerain.png)");
			$thesecondweatherpctwo.css("background-repeat","no-repeat");
			$thesecondweatherpctwo.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[2].cond_txt_n=="中雨")
			{
			$thethirdweatherpcthree.css("background-image","url(../img/middlerain.png)");
			$thethirdweatherpcthree.css("background-repeat","no-repeat");
			$thethirdweatherpcthree.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[0].cond_txt_d=="大雨")
			{
			$nowweatherpc.css("background-image","url(../img/bigrain.png)");
			$nowweatherpc.css("background-repeat","no-repeat");
			$nowweatherpc.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[1].cond_txt_d=="大雨")
			{
			$thesecondweatherpc.css("background-image","url(../img/bigrain.png)");
			$thesecondweatherpc.css("background-repeat","no-repeat");
			$thesecondweatherpc.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[2].cond_txt_d=="大雨")
			{
			$thethirdweatherpc.css("background-image","url(../img/bigrain.png)");
			$thethirdweatherpc.css("background-repeat","no-repeat");
			$thethirdweatherpc.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[0].cond_txt_n=="大雨")
			{
			$nowweatherpctwo.css("background-image","url(../img/bigrain.png)");
			$nowweatherpctwo.css("background-repeat","no-repeat");
			$nowweatherpctwo.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[1].cond_txt_n=="大雨")
			{
			$thesecondweatherpctwo.css("background-image","url(../img/bigrain.png)");
			$thesecondweatherpctwo.css("background-repeat","no-repeat");
			$thesecondweatherpctwo.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[2].cond_txt_n=="大雨")
			{
			$thethirdweatherpcthree.css("background-image","url(../img/bigrain.png)");
			$thethirdweatherpcthree.css("background-repeat","no-repeat");
			$thethirdweatherpcthree.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[0].cond_txt_d=="晴")
			{
			$nowweatherpc.css("background-image","url(../img/sunny.png)");
			$nowweatherpc.css("background-repeat","no-repeat");
			$nowweatherpc.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[1].cond_txt_d=="晴")
			{
			$thesecondweatherpc.css("background-image","url(../img/sunny.png)");
			$thesecondweatherpc.css("background-repeat","no-repeat");
			$thesecondweatherpc.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[2].cond_txt_d=="晴")
			{
			$thethirdweatherpc.css("background-image","url(../img/sunny.png)");
			$thethirdweatherpc.css("background-repeat","no-repeat");
			$thethirdweatherpc.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[0].cond_txt_n=="晴")
			{
			$nowweatherpctwo.css("background-image","url(../img/sunny.png)");
			$nowweatherpctwo.css("background-repeat","no-repeat");
			$nowweatherpctwo.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[1].cond_txt_n=="晴")
			{
			$thesecondweatherpctwo.css("background-image","url(../img/sunny.png)");
			$thesecondweatherpctwo.css("background-repeat","no-repeat");
			$thesecondweatherpctwo.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[2].cond_txt_n=="晴")
			{
			$thethirdweatherpcthree.css("background-image","url(../img/sunny.png)");
			$thethirdweatherpcthree.css("background-repeat","no-repeat");
			$thethirdweatherpcthree.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[0].cond_txt_d=="多云")
			{
			$nowweatherpc.css("background-image","url(../img/morecloudy.png)");
			$nowweatherpc.css("background-repeat","no-repeat");
			$nowweatherpc.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[1].cond_txt_d=="多云")
			{
			$thesecondweatherpc.css("background-image","url(../img/morecloudy.png)");
			$thesecondweatherpc.css("background-repeat","no-repeat");
			$thesecondweatherpc.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[2].cond_txt_d=="多云")
			{
			$thethirdweatherpc.css("background-image","url(../img/morecloudy.png)");
			$thethirdweatherpc.css("background-repeat","no-repeat");
			$thethirdweatherpc.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[0].cond_txt_n=="多云")
			{
			$nowweatherpctwo.css("background-image","url(../img/morecloudy.png)");
			$nowweatherpctwo.css("background-repeat","no-repeat");
			$nowweatherpctwo.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[1].cond_txt_n=="多云")
			{
			$thesecondweatherpctwo.css("background-image","url(../img/morecloudy.png)");
			$thesecondweatherpctwo.css("background-repeat","no-repeat");
			$thesecondweatherpctwo.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[2].cond_txt_n=="多云")
			{
			$thethirdweatherpcthree.css("background-image","url(../img/morecloudy.png)");
			$thethirdweatherpcthree.css("background-repeat","no-repeat");
			$thethirdweatherpcthree.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[0].cond_txt_d=="晴间多云")
			{
			$nowweatherpc.css("background-image","url(../img/sunnyandcloudy.png)");
			$nowweatherpc.css("background-repeat","no-repeat");
			$nowweatherpc.css("background-size","50px 50px");

			}
			if(data.HeWeather6[0].daily_forecast[1].cond_txt_d=="晴间多云")
			{
			$thesecondweatherpc.css("background-image","url(../img/sunnyandcloudy.png)");
			$thesecondweatherpc.css("background-repeat","no-repeat");
			$thesecondweatherpc.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[2].cond_txt_d=="晴间多云")
			{
			$thethirdweatherpc.css("background-image","url(../img/sunnyandcloudy.png)");
			$thethirdweatherpc.css("background-repeat","no-repeat");
			$thethirdweatherpc.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[0].cond_txt_n=="晴间多云")
			{
			$nowweatherpctwo.css("background-image","url(../img/sunnyandcloudy.png)");
			$nowweatherpctwo.css("background-repeat","no-repeat");
			$nowweatherpctwo.css("background-size","50px 50px");

			}
			if(data.HeWeather6[0].daily_forecast[1].cond_txt_n=="晴间多云")
			{
			$thesecondweatherpctwo.css("background-image","url(../img/sunnyandcloudy.png)");
			$thesecondweatherpctwo.css("background-repeat","no-repeat");
			$thesecondweatherpctwo.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[2].cond_txt_n=="晴间多云")
			{
			$thethirdweatherpcthree.css("background-image","url(../img/sunnyandcloudy.png)");
			$thethirdweatherpcthree.css("background-repeat","no-repeat");
			$thethirdweatherpcthree.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[0].cond_txt_d=="阴")
			{
			$nowweatherpc.css("background-image","url(../img/dark.png)");
			$nowweatherpc.css("background-repeat","no-repeat");
			$nowweatherpc.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[1].cond_txt_d=="阴")
			{
			$thesecondweatherpc.css("background-image","url(../img/dark.png)");
			$thesecondweatherpc.css("background-repeat","no-repeat");
			$thesecondweatherpc.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[2].cond_txt_d=="阴")
			{
			$thethirdweatherpc.css("background-image","url(../img/dark.png)");
			$thethirdweatherpc.css("background-repeat","no-repeat");
			$thethirdweatherpc.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[0].cond_txt_n=="阴")
			{
			$nowweatherpctwo.css("background-image","url(../img/dark.png)");
			$nowweatherpctwo.css("background-repeat","no-repeat");
			$nowweatherpctwo.css("background-size","50px 50px");

			}
			if(data.HeWeather6[0].daily_forecast[1].cond_txt_n=="阴")
			{
			$thesecondweatherpctwo.css("background-image","url(../img/dark.png)");
			$thesecondweatherpctwo.css("background-repeat","no-repeat");
			$thesecondweatherpctwo.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[2].cond_txt_n=="阴")
			{
			$thethirdweatherpcthree.css("background-image","url(../img/dark.png)");
			$thethirdweatherpcthree.css("background-repeat","no-repeat");
			$thethirdweatherpcthree.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[0].cond_txt_d=="暴雨")
			{
			$nowweatherpc.css("background-image","url(../img/baoyu.png)");
			$nowweatherpc.css("background-repeat","no-repeat");
			$nowweatherpc.css("background-size","50px 50px");

			}
			if(data.HeWeather6[0].daily_forecast[1].cond_txt_d=="暴雨")
			{
			$thesecondweatherpc.css("background-image","url(../img/baoyu.png)");
			$thesecondweatherpc.css("background-repeat","no-repeat");
			$thesecondweatherpc.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[2].cond_txt_d=="暴雨")
			{
			$thethirdweatherpc.css("background-image","url(../img/baoyu.png)");
			$thethirdweatherpc.css("background-repeat","no-repeat");
			$thethirdweatherpc.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[0].cond_txt_n=="暴雨")
			{
			$nowweatherpctwo.css("background-image","url(../img/baoyu.png)");
			$nowweatherpctwo.css("background-repeat","no-repeat");
			$nowweatherpctwo.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[1].cond_txt_n=="暴雨")
			{
			$thesecondweatherpctwo.css("background-image","url(../img/baoyu.png)");
			$thesecondweatherpctwo.css("background-repeat","no-repeat");
			$thesecondweatherpctwo.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[2].cond_txt_n=="暴雨")
			{
			$thethirdweatherpcthree.css("background-image","url(../img/baoyu.png)");
			$thethirdweatherpcthree.css("background-repeat","no-repeat");
			$thethirdweatherpcthree.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[0].cond_txt_d=="阵雨")
			{
			$nowweatherpc.css("background-image","url(../img/zhenyu.png)");
			$nowweatherpc.css("background-repeat","no-repeat");
			$nowweatherpc.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[1].cond_txt_d=="阵雨")
			{
			$thesecondweatherpc.css("background-image","url(../img/zhenyu.png)");
			$thesecondweatherpc.css("background-repeat","no-repeat");
			$thesecondweatherpc.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[2].cond_txt_d=="阵雨")
			{
			$thethirdweatherpc.css("background-image","url(../img/zhenyu.png)");
			$thethirdweatherpc.css("background-repeat","no-repeat");
			$thethirdweatherpc.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[0].cond_txt_n=="阵雨")
			{
			$nowweatherpctwo.css("background-image","url(../img/zhenyu.png)");
			$nowweatherpctwo.css("background-repeat","no-repeat");
			$nowweatherpctwo.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[1].cond_txt_n=="阵雨")
			{
			$thesecondweatherpctwo.css("background-image","url(../img/zhenyu.png)");
			$thesecondweatherpctwo.css("background-repeat","no-repeat");
			$thesecondweatherpctwo.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[2].cond_txt_n=="阵雨")
			{
			$thethirdweatherpcthree.css("background-image","url(../img/zhenyu.png)");
			$thethirdweatherpcthree.css("background-repeat","no-repeat");
			$thethirdweatherpcthree.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[0].cond_txt_d=="雷阵雨")
			{
			$nowweatherpc.css("background-image","url(../img/leizhenyu.png)");
			$nowweatherpc.css("background-repeat","no-repeat");
			$nowweatherpc.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[1].cond_txt_d=="雷阵雨")
			{
			$thesecondweatherpc.css("background-image","url(../img/leizhenyu.png)");
			$thesecondweatherpc.css("background-repeat","no-repeat");
			$thesecondweatherpc.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[2].cond_txt_d=="雷阵雨")
			{
			$thethirdweatherpc.css("background-image","url(../img/leizhenyu.png)");
			$thethirdweatherpc.css("background-repeat","no-repeat");
			$thethirdweatherpc.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[0].cond_txt_n=="雷阵雨")
			{
			$nowweatherpctwo.css("background-image","url(../img/leizhenyu.png)");
			$nowweatherpctwo.css("background-repeat","no-repeat");
			$nowweatherpctwo.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[1].cond_txt_n=="雷阵雨")
			{
			$thesecondweatherpctwo.css("background-image","url(../img/leizhenyu.png)");
			$thesecondweatherpctwo.css("background-repeat","no-repeat");
			$thesecondweatherpctwo.css("background-size","50px 50px");
			}
			if(data.HeWeather6[0].daily_forecast[2].cond_txt_n=="雷阵雨")
			{
			$thethirdweatherpcthree.css("background-image","url(../img/leizhenyu.png)");
			$thethirdweatherpcthree.css("background-repeat","no-repeat");
			$thethirdweatherpcthree.css("background-size","50px 50px");
			}
			}
			}
			xmlHttp.onreadystatechange=function()//一旦readyState值改变，将会调用该函数，回调函数
			{
			if(xmlHttp.readyState==4&&xmlHttp.status==200)
			{
			var data = JSON.parse(xmlHttp.responseText);//data为json对象
			var $WeatherPC=$(".WeatherPC");
			/*应用样式图片*/
			if(data.HeWeather6[0].now.cond_txt=="晴")
			{
			$WeatherPC.css("background-image","url(../img/sunny.png)");
			$WeatherPC.css("background-repeat","no-repeat");
			$WeatherPC.css("background-size","120px 120px");
			}
			if(data.HeWeather6[0].now.cond_txt=="晴间多云")
			{
			$WeatherPC.css("background-image","url(../img/sunnyandcloudy.png)");
			$WeatherPC.css("background-repeat","no-repeat");
			$WeatherPC.css("background-size","120px 120px");
			}
			if(data.HeWeather6[0].now.cond_txt=="多云")
			{
			$WeatherPC.css("background-image","url(../img/morecloudy.png)");
			$WeatherPC.css("background-repeat","no-repeat");
			$WeatherPC.css("background-size","120px 120px");
			}
			if(data.HeWeather6[0].now.cond_txt=="阴")
			{
			$WeatherPC.css("background-image","url(../img/dark.png)");
			$WeatherPC.css("background-repeat","no-repeat");
			$WeatherPC.css("background-size","120px 120px");
			}
			if(data.HeWeather6[0].now.cond_txt=="小雨")
			{
			$WeatherPC.css("background-image","url(../img/smallrain.png)");
			$WeatherPC.css("background-repeat","no-repeat");
			$WeatherPC.css("background-size","120px 120px");
			}
			if(data.HeWeather6[0].now.cond_txt=="中雨")
			{
			$WeatherPC.css("background-image","url(../img/middlerain.png)");
			$WeatherPC.css("background-repeat","no-repeat");
			$WeatherPC.css("background-size","120px 120px");
			}
			if(data.HeWeather6[0].now.cond_txt=="大雨")
			{
			$WeatherPC.css("background-image","url(../img/bigrain.png)");
			$WeatherPC.css("background-repeat","no-repeat");
			$WeatherPC.css("background-size","120px 120px");
			}
			var Time=data.HeWeather6[0].update.loc;//当地时间
			var month=Time.slice(5,7);//获取到月份
			var day=Time.slice(8,10);//获取到具体日期
			/*将地理位置显示在页面上*/
			
			var $location=$("#locationtext");
			$location.html(data.HeWeather6[0].basic.location);
			/*将日期显示在页面上*/
			var $Today=$("#Today");
			$Today.html(month+"月"+day+"号");
			/*获得实时温度值数据显示在页面上*/
			var $temp=$("#temp");
			 $temp.html(data.HeWeather6[0].now.tmp+"℃");
			 /*获得具体天气情况显示在页面上*/
			 var $condtxt=$("#condtxt");
			 $condtxt.html(data.HeWeather6[0].now.cond_txt);
			/*获得体感温度数据显示在页面上*/
			var $bodyTempValue=$("#bodyTempValue");
			$bodyTempValue.html(data.HeWeather6[0].now.fl+"℃");
			/*获得湿度值数据显示在页面上*/
			var $humidityValue=$("#humidityValue");
			$humidityValue.html(data.HeWeather6[0].now.hum);
			/*获得风向值数据显示在页面上*/
			var $WindyDirectionValue=$("#WindyDirectionValue");
			$WindyDirectionValue.html(data.HeWeather6[0].now.wind_dir);
			/*获得风力值数据显示在页面上*/
			var $WindyPowerValue=$("#WindyPowerValue");
			$WindyPowerValue.html(data.HeWeather6[0].now.wind_sc);
			/*获得大气压强值数据显示在页面上*/
			var $AtmospherePressureValue=$("#AtmospherePressureValue");
			 $AtmospherePressureValue.html(data.HeWeather6[0].now.pres);
			document.getElementById("updatetime").innerHTML=data.HeWeather6[0].update.loc.slice(11,16)+"发布";
			}
		}
		
			xmlHttp.open('GET',"https://free-api.heweather.com/s6/weather/now?location=shenzhen"+HeFengkey,true);
			xmlHttpgetforecast.open('GET',"https://free-api.heweather.com/s6/weather/forecast?location=shenzhen"+HeFengkey,true);
			xmlHttp.send();//发送请求
			xmlHttpgetforecast.send();
		
			
			
		},
		methods:{
		getcityweather:function(){
			$cityname=$("#cityname");
			var location=$cityname.val()+"";
			var xmlHttp;//获得实况天气
			var xmlHttpgetforecast;
			var HeFengkey="&"+"key"+"="+"dad99f28d0e344ecb45765e293f075c6";
			if(window.ActiveXObject)//IE5 IE6是以ActiveXObject的方式
			{
				xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
				xmlHttpgetforecast=new ActiveXObject("Microsoft.XMLHTTP");
			}
			else
			{
				xmlHttp=new XMLHttpRequest();
				xmlHttpgetforecast=new XMLHttpRequest();
			}
			
	xmlHttpgetforecast.onreadystatechange=function()
	{
	if(xmlHttpgetforecast.readyState==4&&xmlHttpgetforecast.status==200)
	{
		var data=JSON.parse(xmlHttpgetforecast.responseText);
		document.getElementById("mystyle").innerHTML=data.HeWeather6[0].daily_forecast[0].date.slice(8,10)+"日";//日期
		document.getElementById("TheSecondmystyle").innerHTML=data.HeWeather6[0].daily_forecast[1].date.slice(8,10)+"日";//日期
		document.getElementById("TheThirdmystyle").innerHTML=data.HeWeather6[0].daily_forecast[2].date.slice(8,10)+"日";
		document.getElementById("today").innerHTML="今天";
		document.getElementById("TheSecondtoday").innerHTML="明天";
		document.getElementById("TheThirdtoday").innerHTML="后天";
		document.getElementById("Temp").innerHTML=data.HeWeather6[0].daily_forecast[0].tmp_min+"&nbsp;~&nbsp;"+data.HeWeather6[0].daily_forecast[0].tmp_max+"℃";
		document.getElementById("TheSecondTemp").innerHTML=data.HeWeather6[0].daily_forecast[1].tmp_min+"&nbsp;~&nbsp;"+data.HeWeather6[0].daily_forecast[1].tmp_max+"℃";
		document.getElementById("TheThirdTemp").innerHTML=data.HeWeather6[0].daily_forecast[2].tmp_min+"&nbsp;~&nbsp;"+data.HeWeather6[0].daily_forecast[2].tmp_max+"℃";
		if(data.HeWeather6[0].daily_forecast[0].cond_txt_d==data.HeWeather6[0].daily_forecast[0].cond_txt_n)
		{
		document.getElementById("condTxt").innerHTML=data.HeWeather6[0].daily_forecast[0].cond_txt_d;
		}
		else 
		{
		document.getElementById("condTxt").innerHTML=data.HeWeather6[0].daily_forecast[0].cond_txt_d+"转"+data.HeWeather6[0].daily_forecast[0].cond_txt_n;
		}
		if(data.HeWeather6[0].daily_forecast[1].cond_txt_d==data.HeWeather6[0].daily_forecast[1].cond_txt_n)
		{
		document.getElementById("TheSecondcondTxt").innerHTML=data.HeWeather6[0].daily_forecast[1].cond_txt_d;
		}
		else 
		{
		document.getElementById("TheSecondcondTxt").innerHTML=data.HeWeather6[0].daily_forecast[1].cond_txt_d+"转"+data.HeWeather6[0].daily_forecast[1].cond_txt_n;
		}
		if(data.HeWeather6[0].daily_forecast[2].cond_txt_d==data.HeWeather6[0].daily_forecast[2].cond_txt_n)
		{
			document.getElementById("TheThirdcondTxt").innerHTML=data.HeWeather6[0].daily_forecast[2].cond_txt_d;
		}
		else
		{
			document.getElementById("TheThirdcondTxt").innerHTML=data.HeWeather6[0].daily_forecast[2].cond_txt_d+"转"+data.HeWeather6[0].daily_forecast[2].cond_txt_n;
		}
		document.getElementById("winddir").innerHTML=data.HeWeather6[0].daily_forecast[0].wind_dir;
		document.getElementById("TheSecondwinddir").innerHTML=data.HeWeather6[0].daily_forecast[1].wind_dir;
		document.getElementById("TheThirdwinddir").innerHTML=data.HeWeather6[0].daily_forecast[2].wind_dir;
		document.getElementById("windsc").innerHTML=data.HeWeather6[0].daily_forecast[0].wind_sc+"级";
		document.getElementById("TheSecondwindsc").innerHTML=data.HeWeather6[0].daily_forecast[1].wind_sc+"级";
		document.getElementById("TheThirdwindsc").innerHTML=data.HeWeather6[0].daily_forecast[2].wind_sc+"级";
		document.getElementById("waterpop").innerHTML="降水概率:&nbsp;&nbsp;"+data.HeWeather6[0].daily_forecast[0].pop+"％";
		document.getElementById("TheSecondwaterpop").innerHTML="降水概率:&nbsp;&nbsp;"+data.HeWeather6[0].daily_forecast[1].pop+"％";
		document.getElementById("TheThirdwaterpop").innerHTML="降水概率:&nbsp;&nbsp;"+data.HeWeather6[0].daily_forecast[2].pop+"％";
		var $nowweatherpc=$(".nowweatherpc");
		var $nowweatherpctwo=$(".nowweatherpctwo");
		var $thesecondweatherpc=$("#thesecondweatherpc");
		var $thesecondweatherpctwo=$("#thesecondweatherpctwo");
		var $thethirdweatherpc=$("#thethirdweatherpc");
		var $thethirdweatherpcthree=$("#thethirdweatherpctwo");
		if(data.HeWeather6[0].daily_forecast[0].cond_txt_d=="小雨")
		{
			$nowweatherpc.css("background-image","url(../img/smallrain.png)");
			$nowweatherpc.css("background-repeat","no-repeat");
			$nowweatherpc.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[1].cond_txt_d=="小雨")
		{
			$thesecondweatherpc.css("background-image","url(../img/smallrain.png)");
			$thesecondweatherpc.css("background-repeat","no-repeat");
			$thesecondweatherpc.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[2].cond_txt_d=="小雨")
		{
			$thethirdweatherpc.css("background-image","url(../img/smallrain.png)");
			$thethirdweatherpc.css("background-repeat","no-repeat");
			$thethirdweatherpc.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[0].cond_txt_n=="小雨")
		{
			$nowweatherpctwo.css("background-image","url(../img/smallrain.png)");
			$nowweatherpctwo.css("background-repeat","no-repeat");
			$nowweatherpctwo.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[1].cond_txt_n=="小雨")
		{
			$thesecondweatherpctwo.css("background-image","url(../img/smallrain.png)");
			$thesecondweatherpctwo.css("background-repeat","no-repeat");
			$thesecondweatherpctwo.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[2].cond_txt_n=="小雨")
		{
			$thethirdweatherpcthree.css("background-image","url(../img/smallrain.png)");
			$thethirdweatherpcthree.css("background-repeat","no-repeat");
			$thethirdweatherpcthree.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[0].cond_txt_d=="中雨")
		{
			$nowweatherpc.css("background-image","url(../img/middlerain.png)");
			$nowweatherpc.css("background-repeat","no-repeat");
			$nowweatherpc.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[1].cond_txt_d=="中雨")
		{
			$thesecondweatherpc.css("background-image","url(../img/middlerain.png)");
			$thesecondweatherpc.css("background-repeat","no-repeat");
			$thesecondweatherpc.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[2].cond_txt_d=="中雨")
		{
			$thethirdweatherpc.css("background-image","url(../img/middlerain.png)");
			$thethirdweatherpc.css("background-repeat","no-repeat");
			$thethirdweatherpc.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[0].cond_txt_n=="中雨")
		{
			$nowweatherpctwo.css("background-image","url(../img/middlerain.png)");
			$nowweatherpctwo.css("background-repeat","no-repeat");
			$nowweatherpctwo.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[1].cond_txt_n=="中雨")
		{
			$thesecondweatherpctwo.css("background-image","url(../img/middlerain.png)");
			$thesecondweatherpctwo.css("background-repeat","no-repeat");
			$thesecondweatherpctwo.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[2].cond_txt_n=="中雨")
		{
			$thethirdweatherpcthree.css("background-image","url(../img/middlerain.png)");
			$thethirdweatherpcthree.css("background-repeat","no-repeat");
			$thethirdweatherpcthree.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[0].cond_txt_d=="大雨")
		{
			$nowweatherpc.css("background-image","url(../img/bigrain.png)");
			$nowweatherpc.css("background-repeat","no-repeat");
			$nowweatherpc.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[1].cond_txt_d=="大雨")
		{
			$thesecondweatherpc.css("background-image","url(../img/bigrain.png)");
			$thesecondweatherpc.css("background-repeat","no-repeat");
			$thesecondweatherpc.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[2].cond_txt_d=="大雨")
		{
			$thethirdweatherpc.css("background-image","url(../img/bigrain.png)");
			$thethirdweatherpc.css("background-repeat","no-repeat");
			$thethirdweatherpc.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[0].cond_txt_n=="大雨")
		{
			$nowweatherpctwo.css("background-image","url(../img/bigrain.png)");
			$nowweatherpctwo.css("background-repeat","no-repeat");
			$nowweatherpctwo.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[1].cond_txt_n=="大雨")
		{
			$thesecondweatherpctwo.css("background-image","url(../img/bigrain.png)");
			$thesecondweatherpctwo.css("background-repeat","no-repeat");
			$thesecondweatherpctwo.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[2].cond_txt_n=="大雨")
		{
			$thethirdweatherpcthree.css("background-image","url(../img/bigrain.png)");
			$thethirdweatherpcthree.css("background-repeat","no-repeat");
			$thethirdweatherpcthree.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[0].cond_txt_d=="晴")
		{
			$nowweatherpc.css("background-image","url(../img/sunny.png)");
			$nowweatherpc.css("background-repeat","no-repeat");
			$nowweatherpc.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[1].cond_txt_d=="晴")
		{
			$thesecondweatherpc.css("background-image","url(../img/sunny.png)");
			$thesecondweatherpc.css("background-repeat","no-repeat");
			$thesecondweatherpc.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[2].cond_txt_d=="晴")
		{
			$thethirdweatherpc.css("background-image","url(../img/sunny.png)");
			$thethirdweatherpc.css("background-repeat","no-repeat");
			$thethirdweatherpc.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[0].cond_txt_n=="晴")
		{
			$nowweatherpctwo.css("background-image","url(../img/sunny.png)");
			$nowweatherpctwo.css("background-repeat","no-repeat");
			$nowweatherpctwo.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[1].cond_txt_n=="晴")
		{
			$thesecondweatherpctwo.css("background-image","url(../img/sunny.png)");
			$thesecondweatherpctwo.css("background-repeat","no-repeat");
			$thesecondweatherpctwo.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[2].cond_txt_n=="晴")
		{
			$thethirdweatherpcthree.css("background-image","url(../img/sunny.png)");
			$thethirdweatherpcthree.css("background-repeat","no-repeat");
			$thethirdweatherpcthree.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[0].cond_txt_d=="多云")
		{
			$nowweatherpc.css("background-image","url(../img/morecloudy.png)");
			$nowweatherpc.css("background-repeat","no-repeat");
			$nowweatherpc.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[1].cond_txt_d=="多云")
		{
			$thesecondweatherpc.css("background-image","url(../img/morecloudy.png)");
			$thesecondweatherpc.css("background-repeat","no-repeat");
			$thesecondweatherpc.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[2].cond_txt_d=="多云")
		{
			$thethirdweatherpc.css("background-image","url(../img/morecloudy.png)");
			$thethirdweatherpc.css("background-repeat","no-repeat");
			$thethirdweatherpc.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[0].cond_txt_n=="多云")
		{
			$nowweatherpctwo.css("background-image","url(../img/morecloudy.png)");
			$nowweatherpctwo.css("background-repeat","no-repeat");
			$nowweatherpctwo.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[1].cond_txt_n=="多云")
		{
			$thesecondweatherpctwo.css("background-image","url(../img/morecloudy.png)");
			$thesecondweatherpctwo.css("background-repeat","no-repeat");
			$thesecondweatherpctwo.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[2].cond_txt_n=="多云")
		{
			$thethirdweatherpcthree.css("background-image","url(../img/morecloudy.png)");
			$thethirdweatherpcthree.css("background-repeat","no-repeat");
			$thethirdweatherpcthree.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[0].cond_txt_d=="晴间多云")
		{
			$nowweatherpc.css("background-image","url(../img/sunnyandcloudy.png)");
			$nowweatherpc.css("background-repeat","no-repeat");
			$nowweatherpc.css("background-size","50px 50px");
			
		}
		if(data.HeWeather6[0].daily_forecast[1].cond_txt_d=="晴间多云")
		{
			$thesecondweatherpc.css("background-image","url(../img/sunnyandcloudy.png)");
			$thesecondweatherpc.css("background-repeat","no-repeat");
			$thesecondweatherpc.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[2].cond_txt_d=="晴间多云")
		{
			$thethirdweatherpc.css("background-image","url(../img/sunnyandcloudy.png)");
			$thethirdweatherpc.css("background-repeat","no-repeat");
			$thethirdweatherpc.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[0].cond_txt_n=="晴间多云")
		{
			$nowweatherpctwo.css("background-image","url(../img/sunnyandcloudy.png)");
			$nowweatherpctwo.css("background-repeat","no-repeat");
			$nowweatherpctwo.css("background-size","50px 50px");
			
		}
		if(data.HeWeather6[0].daily_forecast[1].cond_txt_n=="晴间多云")
		{
			$thesecondweatherpctwo.css("background-image","url(../img/sunnyandcloudy.png)");
			$thesecondweatherpctwo.css("background-repeat","no-repeat");
			$thesecondweatherpctwo.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[2].cond_txt_n=="晴间多云")
		{
			$thethirdweatherpcthree.css("background-image","url(../img/sunnyandcloudy.png)");
			$thethirdweatherpcthree.css("background-repeat","no-repeat");
			$thethirdweatherpcthree.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[0].cond_txt_d=="阴")
		{
			$nowweatherpc.css("background-image","url(../img/dark.png)");
			$nowweatherpc.css("background-repeat","no-repeat");
			$nowweatherpc.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[1].cond_txt_d=="阴")
		{
			$thesecondweatherpc.css("background-image","url(../img/dark.png)");
			$thesecondweatherpc.css("background-repeat","no-repeat");
			$thesecondweatherpc.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[2].cond_txt_d=="阴")
		{
			$thethirdweatherpc.css("background-image","url(../img/dark.png)");
			$thethirdweatherpc.css("background-repeat","no-repeat");
			$thethirdweatherpc.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[0].cond_txt_n=="阴")
		{
			$nowweatherpctwo.css("background-image","url(../img/dark.png)");
			$nowweatherpctwo.css("background-repeat","no-repeat");
			$nowweatherpctwo.css("background-size","50px 50px");
		
		}
		if(data.HeWeather6[0].daily_forecast[1].cond_txt_n=="阴")
		{
			$thesecondweatherpctwo.css("background-image","url(../img/dark.png)");
			$thesecondweatherpctwo.css("background-repeat","no-repeat");
			$thesecondweatherpctwo.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[2].cond_txt_n=="阴")
		{
			$thethirdweatherpcthree.css("background-image","url(../img/dark.png)");
			$thethirdweatherpcthree.css("background-repeat","no-repeat");
			$thethirdweatherpcthree.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[0].cond_txt_d=="暴雨")
		{
			$nowweatherpc.css("background-image","url(../img/baoyu.png)");
			$nowweatherpc.css("background-repeat","no-repeat");
			$nowweatherpc.css("background-size","50px 50px");
			
		}
		if(data.HeWeather6[0].daily_forecast[1].cond_txt_d=="暴雨")
		{
			$thesecondweatherpc.css("background-image","url(../img/baoyu.png)");
			$thesecondweatherpc.css("background-repeat","no-repeat");
			$thesecondweatherpc.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[2].cond_txt_d=="暴雨")
		{
			$thethirdweatherpc.css("background-image","url(../img/baoyu.png)");
			$thethirdweatherpc.css("background-repeat","no-repeat");
			$thethirdweatherpc.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[0].cond_txt_n=="暴雨")
		{
			$nowweatherpctwo.css("background-image","url(../img/baoyu.png)");
			$nowweatherpctwo.css("background-repeat","no-repeat");
			$nowweatherpctwo.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[1].cond_txt_n=="暴雨")
		{
			$thesecondweatherpctwo.css("background-image","url(../img/baoyu.png)");
			$thesecondweatherpctwo.css("background-repeat","no-repeat");
			$thesecondweatherpctwo.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[2].cond_txt_n=="暴雨")
		{
			$thethirdweatherpcthree.css("background-image","url(../img/baoyu.png)");
			$thethirdweatherpcthree.css("background-repeat","no-repeat");
			$thethirdweatherpcthree.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[0].cond_txt_d=="阵雨")
		{
			$nowweatherpc.css("background-image","url(../img/zhenyu.png)");
			$nowweatherpc.css("background-repeat","no-repeat");
			$nowweatherpc.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[1].cond_txt_d=="阵雨")
		{
			$thesecondweatherpc.css("background-image","url(../img/zhenyu.png)");
			$thesecondweatherpc.css("background-repeat","no-repeat");
			$thesecondweatherpc.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[2].cond_txt_d=="阵雨")
		{
			$thethirdweatherpc.css("background-image","url(../img/zhenyu.png)");
			$thethirdweatherpc.css("background-repeat","no-repeat");
			$thethirdweatherpc.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[0].cond_txt_n=="阵雨")
		{
			$nowweatherpctwo.css("background-image","url(../img/zhenyu.png)");
			$nowweatherpctwo.css("background-repeat","no-repeat");
			$nowweatherpctwo.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[1].cond_txt_n=="阵雨")
		{
			$thesecondweatherpctwo.css("background-image","url(../img/zhenyu.png)");
			$thesecondweatherpctwo.css("background-repeat","no-repeat");
			$thesecondweatherpctwo.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[2].cond_txt_n=="阵雨")
		{
			$thethirdweatherpcthree.css("background-image","url(../img/zhenyu.png)");
			$thethirdweatherpcthree.css("background-repeat","no-repeat");
			$thethirdweatherpcthree.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[0].cond_txt_d=="雷阵雨")
		{
			$nowweatherpc.css("background-image","url(../img/leizhenyu.png)");
			$nowweatherpc.css("background-repeat","no-repeat");
			$nowweatherpc.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[1].cond_txt_d=="雷阵雨")
		{
			$thesecondweatherpc.css("background-image","url(../img/leizhenyu.png)");
			$thesecondweatherpc.css("background-repeat","no-repeat");
			$thesecondweatherpc.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[2].cond_txt_d=="雷阵雨")
		{
			$thethirdweatherpc.css("background-image","url(../img/leizhenyu.png)");
			$thethirdweatherpc.css("background-repeat","no-repeat");
			$thethirdweatherpc.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[0].cond_txt_n=="雷阵雨")
		{
			$nowweatherpctwo.css("background-image","url(../img/leizhenyu.png)");
			$nowweatherpctwo.css("background-repeat","no-repeat");
			$nowweatherpctwo.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[1].cond_txt_n=="雷阵雨")
		{
			$thesecondweatherpctwo.css("background-image","url(../img/leizhenyu.png)");
			$thesecondweatherpctwo.css("background-repeat","no-repeat");
			$thesecondweatherpctwo.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[2].cond_txt_n=="雷阵雨")
		{
			$thethirdweatherpcthree.css("background-image","url(../img/leizhenyu.png)");
			$thethirdweatherpcthree.css("background-repeat","no-repeat");
			$thethirdweatherpcthree.css("background-size","50px 50px");
		}
		
		if(data.HeWeather6[0].daily_forecast[0].cond_txt_d=="雾")
		{
			$nowweatherpc.css("background-image","url(../img/wu.png)");
			$nowweatherpc.css("background-repeat","no-repeat");
			$nowweatherpc.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[1].cond_txt_d=="雾")
		{
			$thesecondweatherpc.css("background-image","url(../img/wu.png)");
			$thesecondweatherpc.css("background-repeat","no-repeat");
			$thesecondweatherpc.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[2].cond_txt_d=="雾")
		{
			$thethirdweatherpc.css("background-image","url(../img/wu.png)");
			$thethirdweatherpc.css("background-repeat","no-repeat");
			$thethirdweatherpc.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[0].cond_txt_n=="雾")
		{
			$nowweatherpctwo.css("background-image","url(../img/wu.png)");
			$nowweatherpctwo.css("background-repeat","no-repeat");
			$nowweatherpctwo.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[1].cond_txt_n=="雾")
		{
			$thesecondweatherpctwo.css("background-image","url(../img/wu.png)");
			$thesecondweatherpctwo.css("background-repeat","no-repeat");
			$thesecondweatherpctwo.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[2].cond_txt_n=="雾")
		{
			$thethirdweatherpcthree.css("background-image","url(../img/wu.png)");
			$thethirdweatherpcthree.css("background-repeat","no-repeat");
			$thethirdweatherpcthree.css("background-size","50px 50px");
		}
		
		if(data.HeWeather6[0].daily_forecast[0].cond_txt_d=="霾")
		{
			$nowweatherpc.css("background-image","url(../img/mai.png)");
			$nowweatherpc.css("background-repeat","no-repeat");
			$nowweatherpc.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[1].cond_txt_d=="霾")
		{
			$thesecondweatherpc.css("background-image","url(../img/mai.png)");
			$thesecondweatherpc.css("background-repeat","no-repeat");
			$thesecondweatherpc.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[2].cond_txt_d=="霾")
		{
			$thethirdweatherpc.css("background-image","url(../img/mai.png)");
			$thethirdweatherpc.css("background-repeat","no-repeat");
			$thethirdweatherpc.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[0].cond_txt_n=="霾")
		{
			$nowweatherpctwo.css("background-image","url(../img/mai.png)");
			$nowweatherpctwo.css("background-repeat","no-repeat");
			$nowweatherpctwo.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[1].cond_txt_n=="霾")
		{
			$thesecondweatherpctwo.css("background-image","url(../img/mai.png)");
			$thesecondweatherpctwo.css("background-repeat","no-repeat");
			$thesecondweatherpctwo.css("background-size","50px 50px");
		}
		if(data.HeWeather6[0].daily_forecast[2].cond_txt_n=="霾")
		{
			$thethirdweatherpcthree.css("background-image","url(../img/mai.png)");
			$thethirdweatherpcthree.css("background-repeat","no-repeat");
			$thethirdweatherpcthree.css("background-size","50px 50px");
		}
	}
}
	xmlHttp.onreadystatechange=function()//一旦readyState值改变，将会调用该函数，回调函数
	{
		if(xmlHttp.readyState==4&&xmlHttp.status==200)
		{
			var data = JSON.parse(xmlHttp.responseText);//data为json对象
			var $WeatherPC=$(".WeatherPC");
			/*应用样式图片*/
			if(data.HeWeather6[0].now.cond_txt=="晴")
			{
				$WeatherPC.css("background-image","url(../img/sunny.png)");
				$WeatherPC.css("background-repeat","no-repeat");
				$WeatherPC.css("background-size","120px 120px");
			}
			if(data.HeWeather6[0].now.cond_txt=="晴间多云")
			{
				$WeatherPC.css("background-image","url(../img/sunnyandcloudy.png)");
				$WeatherPC.css("background-repeat","no-repeat");
				$WeatherPC.css("background-size","120px 120px");
			}
			if(data.HeWeather6[0].now.cond_txt=="多云")
			{
				$WeatherPC.css("background-image","url(../img/morecloudy.png)");
				$WeatherPC.css("background-repeat","no-repeat");
				$WeatherPC.css("background-size","120px 120px");
			}
			if(data.HeWeather6[0].now.cond_txt=="阴")
			{
				$WeatherPC.css("background-image","url(../img/dark.png)");
				$WeatherPC.css("background-repeat","no-repeat");
				$WeatherPC.css("background-size","120px 120px");
			}
			if(data.HeWeather6[0].now.cond_txt=="小雨")
			{
				$WeatherPC.css("background-image","url(../img/smallrain.png)");
				$WeatherPC.css("background-repeat","no-repeat");
				$WeatherPC.css("background-size","120px 120px");
			}
			if(data.HeWeather6[0].now.cond_txt=="中雨")
			{
				$WeatherPC.css("background-image","url(../img/middlerain.png)");
				$WeatherPC.css("background-repeat","no-repeat");
				$WeatherPC.css("background-size","120px 120px");
			}
			if(data.HeWeather6[0].now.cond_txt=="大雨")
			{
				$WeatherPC.css("background-image","url(../img/bigrain.png)");
				$WeatherPC.css("background-repeat","no-repeat");
				$WeatherPC.css("background-size","120px 120px");
			}
			if(data.HeWeather6[0].now.cond_txt=="雾")
			{
				$WeatherPC.css("background-image","url(../img/wu.png)");
				$WeatherPC.css("background-repeat","no-repeat");
				$WeatherPC.css("background-size","120px 120px");
			}
			if(data.HeWeather6[0].now.cond_txt=="霾")
			{
				$WeatherPC.css("background-image","url(../img/mai.png)");
				$WeatherPC.css("background-repeat","no-repeat");
				$WeatherPC.css("background-size","120px 120px");
			}
			var Time=data.HeWeather6[0].update.loc;//当地时间
			var month=Time.slice(5,7);//获取到月份
			var day=Time.slice(8,10);//获取到具体日期
			/*将地理位置显示在页面上*/
			
			var $location=$("#locationtext");
			$location.html(data.HeWeather6[0].basic.location);
			/*将日期显示在页面上*/
			var $Today=$("#Today");
			$Today.html(month+"月"+day+"号");
			/*获得实时温度值数据显示在页面上*/
			var $temp=$("#temp");
			$temp.html(data.HeWeather6[0].now.tmp+"℃");
			/*获得具体天气情况显示在页面上*/
			var $condtxt=$("#condtxt");
			$condtxt.html(data.HeWeather6[0].now.cond_txt);
			/*获得体感温度数据显示在页面上*/
			var $bodyTempValue=$("#bodyTempValue");
			$bodyTempValue.html(data.HeWeather6[0].now.fl+"℃");
			/*获得湿度值数据显示在页面上*/
			var $humidityValue=$("#humidityValue");
			$humidityValue.html(data.HeWeather6[0].now.hum);
			/*获得风向值数据显示在页面上*/
			var $WindyDirectionValue=$("#WindyDirectionValue");
			$WindyDirectionValue.html(data.HeWeather6[0].now.wind_dir);
			/*获得风力值数据显示在页面上*/
			var $WindyPowerValue=$("#WindyPowerValue");
			$WindyPowerValue.html(data.HeWeather6[0].now.wind_sc);
			/*获得大气压强值数据显示在页面上*/
			var $AtmospherePressureValue=$("#AtmospherePressureValue");
			$AtmospherePressureValue.html(data.HeWeather6[0].now.pres);
		}
	}
				
		xmlHttp.open('GET',"https://free-api.heweather.com/s6/weather/now?location="+location+HeFengkey,true);
		xmlHttpgetforecast.open('GET',"https://free-api.heweather.com/s6/weather/forecast?location="+location+HeFengkey,true);
		xmlHttp.send();//发送请求
		xmlHttpgetforecast.send();
	},
	/*根据IP地址进行自动定位*/
	IPaddressgetlocation:function(){
		var xmlHttp;
		var $ipname=$("#ipname");
		var $cityname=$("#cityname");
		if(window.ActiveXObject)//IE5 IE6是以ActiveXObject的方式
		{
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");	
		}
		else
		{
			xmlHttp=new XMLHttpRequest();
		}
		xmlHttp.onreadystatechange=function(){
			var data=JSON.parse(xmlHttp.responseText);
			$cityname.val(data.city);
		}
		var IP=$ipname.val()+"";
		var IPkey="&key="+"55a28100b9c28237604d88655f545317";
		xmlHttp.open("GET","https://restapi.amap.com/v3/ip?ip="+IP+IPkey,true);
		xmlHttp.send();
			}
		}
   });
	