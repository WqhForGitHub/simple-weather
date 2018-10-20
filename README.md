# simple-weather
它提供了实时天气和近三天天气信息，并且具有IP自动定位功能

## 效果图
### PC端
![效果图](http://pdi3m4use.bkt.clouddn.com/weathercard.png)
### 移动设备端
![移动设备端](http://pdi3m4use.bkt.clouddn.com/weatherapp.png)
## 技术框架
* Vue2 + Webpack + vue-router 
* Element(UI组件库)
* ES6/7(JS语法)、ESlint(JS语法规范)
* 和风天气图标库
## 特点
* 简洁的界面展示了实时天气和近三天天气信息
* 支持到区级和县级天气
* 可以自定义查询城市天气信息，支持拼音和中文输入
* 手动输入IP地址进行自动定位查询城市天气信息

## 天气接口和IP定位接口说明
* 天气接口：该天气的数据是调用和风天气API,通过是Ajax的xmlHttpRequest请求，key是直接给出的，由于注册的是免费版本，接口数据的调用次数是有限的。
* IP定位接口：该IP定位功能是调用高德地图API，通过也是Ajax的xmlHttpRequest请求，key是同样也是直接给出的，注册也是免费版本，接口同样有限制。
