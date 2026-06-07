/**
 * 自定义底部导航栏组件
 * 1:1 复刻原型设计规格
 * - fixed bottom, 圆角顶部 12px
 * - 白色背景 #ffffff, 阴影 0 -4px 20px rgba(0,0,0,0.05)
 * - 4个Tab按钮: 首页/奖惩/商店/我的
 * - Active: 背景 #fd8b17, 颜色 #613100, 图标填充
 * - 默认: 颜色 #4d4632
 */
Component({
  data: {
    selected: 0,
    list: [
      {
        pagePath: '/pages/index/index',
        text: '首页',
        iconNormal: '/static/icons/home-outlined.svg',
        iconActive: '/static/icons/home-filled.svg'
      },
      {
        pagePath: '/pages/reward-center/reward-center',
        text: '奖惩',
        iconNormal: '/static/icons/stars-outlined.svg',
        iconActive: '/static/icons/stars-filled.svg'
      },
      {
        pagePath: '/pages/prize-universal/prize-universal',
        text: '商店',
        iconNormal: '/static/icons/storefront-outlined.svg',
        iconActive: '/static/icons/storefront-filled.svg'
      },
      {
        pagePath: '/pages/profile/profile',
        text: '我的',
        iconNormal: '/static/icons/person-outlined.svg',
        iconActive: '/static/icons/person-filled.svg'
      }
    ]
  },

  methods: {
    /** 切换 Tab 页面 */
    switchTab(e) {
      const data = e.currentTarget.dataset;
      const index = data.index;
      const path = data.path;

      if (index === this.data.selected) return;

      wx.switchTab({ url: path });
    }
  }
});
