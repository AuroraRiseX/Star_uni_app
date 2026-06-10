Component({
  data: {
    selected: 0,
    list: [
      {
        pagePath: '/pages/index/index',
        text: '首页'
      },
      {
        pagePath: '/pages/reward-center/reward-center',
        text: '奖惩'
      },
      {
        pagePath: '/pages/shop/shop',
        text: '店铺'
      },
      {
        pagePath: '/pages/profile/profile',
        text: '我的'
      }
    ]
  },
  methods: {
    switchTab(e) {
      const index = e.currentTarget.dataset.index;
      this.setData({ selected: index });
      const url = this.data.list[index].pagePath;
      wx.switchTab({ url });
    }
  }
});