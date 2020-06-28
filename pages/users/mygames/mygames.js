Page({
  data: {
    reservelist:[]
  },
  onLoad: function () {
    this.fetchData();
  },
  fetchData:function(){
    var output = []
    for (let index = 1; index < 5; index++) {
      if(index<5){
        output.push({
          "id": index,
          "name": "第"+index+"个游戏",
          "imgurl": "../../../images/banner_02.jpg"
        })
      } 
    }
    this.setData({
      reservelist:this.data.reservelist.concat(output)
    })
  }
})
