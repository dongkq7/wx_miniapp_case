Page({
  data: {
    list: [{
      avatar: "/assets/images/1.png",
      nickname: "小狗",
      msg: "啥？？",
      time: "12:07",
      x: 0
    },
      {
        avatar: "/assets/images/2.png",
        nickname: "小兔",
        msg: "哈哈哈哈哈哈哈哈",
        time: "11:05",
        x: 0
      },
      {
        avatar: "/assets/images/3.png",
        nickname: "小羊",
        msg: "别睡了，起来嗨",
        time: "10:37",
        x: 0
      },
      {
        avatar: "/assets/images/4.png",
        nickname: "猫猫",
        msg: "你在哪呀",
        time: "05:20",
        x: 0
      },
      {
        avatar: "/assets/images/5.png",
        nickname: "猴猴",
        msg: "尊嘟假嘟",
        time: "03:47",
        x: 0
      },
      {
        avatar: "/assets/images/6.png",
        nickname: "大脸",
        msg: "去哪儿？",
        time: "03:03",
        x: 0
      }
    ],
    startX: 0
  },
  handleTouchStart(e: {touches: Array<{clientX: number}>}) {
    this.setData({
      startX: e.touches[0].clientX
    })
  },
  handleTouchEnd(e: {changedTouches: Array<{clientX: number}>; currentTarget: {dataset: {index: number}}}) {
    const currentX = e.changedTouches[0].clientX
    // 计算向左滑动的距离
    const dis = currentX - this.data.startX
    const arr = [...this.data.list]
    const index = e.currentTarget.dataset.index

    if (dis < 0) {
      // 向左拖动的距离已经满足了露出删除按钮
      if (dis < -30) {
        arr[index].x = -120
      } else {
        arr[index].x = 0
      }
    } else {
      //向右拖动
      arr[index].x = 0
    }
    this.setData({
      list: arr
    })
  }
})