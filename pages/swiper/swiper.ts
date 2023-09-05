Page({
  data: {
    images: [
      'https://img1.baidu.com/it/u=2476098426,955621886&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
      'https://img2.baidu.com/it/u=1171226785,696116128&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500',
      'https://inews.gtimg.com/newsapp_bt/0/14034841668/1000',
      'https://img0.baidu.com/it/u=971647501,3413567946&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800',
    ],
    currentIndex: 0
  },
  handleSwiperChange(e: {detail: {current: number; source: 'autoplay' | 'touch' | ''}}) {
    this.setData({
      currentIndex: e.detail.current
    })
  }
})