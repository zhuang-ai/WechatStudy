//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //轮播图参数
    imgUrls: [
      './../../images/banner_02.jpg',
      './../../images/banner_02.jpg',
      './../../images/banner_02.jpg'
      
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
    //菜单参数
    menu:[
      {url:"lists",icon:"./../../images/icon_01.png",text:'今日推荐'},
      {url:"lists",icon:"./../../images/icon_02.png",text:'即将开测'},
      {url:"lists",icon:"./../../images/icon_03.png",text:'新游预约'},
      {url:"lists",icon:"./../../images/icon_04.png",text:'猜你喜欢'},
      {url:"lists",icon:"./../../images/icon_05.png",text:'往期推荐'},
      {url:"lists",icon:"./../../images/icon_06.png",text:'游戏测试'},
      {url:"lists",icon:"./../../images/icon_07.png",text:'最近更新'},
      {url:"lists",icon:"./../../images/icon_08.png",text:'近期最热'}
    ]
  },
})
