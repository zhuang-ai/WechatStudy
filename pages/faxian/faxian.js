Page({
  data: {
    sortindex:0,  //排序索引
    sortid:null,  //排序id
    sort:[],
    gamelist:[], //游戏列表
    scrolltop:null, //滚动位置
    page: 0  //分页
  },
  onLoad: function () { //加载数据渲染页面
    this.fetchGameData();
    this.fetchSortData();
  },
  fetchSortData:function(){ //获取筛选条件
    this.setData({
      "sort": [
          {
              "id": 0,
              "title": "热门榜单"
          },
          {
              "id": 1,
              "title": "最新发布"
          },
          {
              "id": 2,
              "title": "最多点击"
          },
      ]
    })
  },
  fetchGameData:function(){  //获取会议室列表
    const perpage = 10;
    this.setData({
      page:this.data.page+1
    })
    const page = this.data.page;
    const newlist = [];
    for (var i = (page-1)*perpage; i < page*perpage; i++) {
      newlist.push({
        "id":i+1,
        "name":"今日新游（"+(i+1)+"）",
        "status": "编辑推荐",
        "coments": Math.floor(Math.random()*1000),
        "imgurl": '../../images/banner_02.jpg',
      })
    }
    this.setData({
      gamelist:this.data.gamelist.concat(newlist)
    })
  },
  setSortBy:function(e){ //选择排序方式
    const d= this.data;
    const dataset = e.currentTarget.dataset;
    this.setData({
      sortindex:dataset.sortindex,
      sortid:dataset.sortid
    })
    console.log('排序方式id：'+this.data.sortid);
  },
  setStatusClass:function(e){ //设置状态颜色
    console.log(e);
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
      gamelist:[]
    })
    this.fetchGameData();
    this.fetchSortData();
    setTimeout(()=>{
      wx.stopPullDownRefresh()
    },1000)
  }
})