// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  toSwiperPage() {
    wx.navigateTo({
      url: '/pages/swiper/swiper'
    })
  },
  toMovable() {
    wx.navigateTo({
      url: '/pages/movable/movable'
    })
  }
})
