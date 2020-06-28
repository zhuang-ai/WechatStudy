import util from './../../utils/util.js';
Page({
  data: {
    Gamelist:[], //游戏列表
    scrolltop:null, //滚动位置
    page: 0  //分页
  },
  onLoad: function () { //加载数据渲染页面
    this.fetchGameData();
  },
  fetchGameData:function(){  //获取游戏列表
    const perpage = 10;
    this.setData({
      page:this.data.page+1
    })
    const page = this.data.page;
    const newlist = [];
    for (var i = (page-1)*perpage; i < page*perpage; i++) {
      newlist.push({
        "id":i+1,
        "name":"推荐游戏"+(i+1),
        "contain": Math.floor(Math.random()*5000),
        "equipments":util.getRandomArray(["武侠","单机","内购","策略","卡牌"],Math.floor(Math.random()*6)),
        "imgurl":"./../../images/banner_02.jpg"
      })
    }
    this.setData({
      Gamelist:this.data.Gamelist.concat(newlist)
    })
  },
  scrollHandle:function(e){ //滚动事件
    this.setData({
      scrolltop:e.detail.scrollTop
    })
  },
  goToTop:function(){ //回到顶部
    this.setData({
      scrolltop:0
    })
  },
  scrollLoading:function(){ //滚动加载
    this.fetchGameData();
  },
  onPullDownRefresh:function(){ //下拉刷新
    this.setData({
      page:0,
      Gamelist:[]
    })
    this.fetchGameData();
    setTimeout(()=>{
      wx.stopPullDownRefresh()
    },1000)
  }
})