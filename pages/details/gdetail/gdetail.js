Page({
  data: {
    activitydata:{},
    spaceimgs:[],
    currentIndex:1
  },
  btnclick:function () {
    wx.request({
      url: 'http://localhost:3333/users', 
      method: 'GET',
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success :(res)=> {
        this.setData({
          activitydata:{
            "name": res.data
          },
        })
      }
    })
  },
  onLoad: function (options) {
    console.log(options);
    this.setData({
      activitydata:{
        "name": options.name,
        "hoster": "蓝鲸网络"
      },
      spaceimgs:["./../../../images/banner_02.jpg","./../../../images/banner_02.jpg","./../../../images/banner_02.jpg"]
    })
    // setTimeout(()=>{
      wx.setNavigationBarTitle({
        title: this.data.activitydata.name
      })
    // },1000)
  },
  setCurrent: function(e){
    this.setData({
      currentIndex:e.detail.current+1
    })
  },
  imgPreview: function(){ //图片预览
    const imgs = this.data.spaceimgs;
    wx.previewImage({
      current: imgs[this.data.currentIndex-1], // 当前显示图片的http链接
      urls: imgs // 需要预览的图片http链接列表
    })
  },
  reserveHandle: function(){
    wx.navigateTo({
      url: '../spacereserve/spacereserve'
    })
  }

})
