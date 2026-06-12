Component({
  data: {
    selected: 0,
    safeBottom: 0,
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

  lifetimes: {
    attached() {
      this.calcSafeArea()
    }
  },

  methods: {
    calcSafeArea() {
      try {
        const sysInfo = wx.getSystemInfoSync()
        
        // 获取底部安全区高度
        // iOS 全面屏机型 (iPhone X+) 有 Home Indicator，约 34px
        // 旧机型和非全面屏设备为 0
        let safeBottom = 0
        
        // 优先使用 safeAreaInsets (微信基础库 2.20.1+)
        if (sysInfo.safeAreaInsets && sysInfo.safeAreaInsets.bottom) {
          safeBottom = sysInfo.safeAreaInsets.bottom
        } 
        // fallback: 通过屏幕高度和 safeArea 高度差值计算
        else if (sysInfo.screenHeight && sysInfo.safeArea && sysInfo.safeArea.height) {
          safeBottom = sysInfo.screenHeight - sysInfo.safeArea.bottom
        }
        // 最终 fallback: 根据机型判断
        else {
          const model = sysInfo.model || ''
          const isFullScreen = /iPhone X|iPhone 11|iPhone 12|iPhone 13|iPhone 14|iPhone 15|iPhone 16/i.test(model)
          if (isFullScreen) {
            safeBottom = 34
          }
        }

        console.log('[TabBar] safeBottom:', safeBottom, 'model:', sysInfo.model)
        this.setData({ safeBottom })
      } catch (e) {
        console.warn('[TabBar] 获取安全区失败:', e)
        this.setData({ safeBottom: 0 })
      }
    },

    switchTab(e) {
      const index = Number(e.currentTarget.dataset.index)
      const selected = this.data.selected
      
      // 重复点击当前已高亮的图标：保持高亮状态，不重复跳转
      if (index === selected) {
        return
      }
      
      this.setData({ selected: index })
      const url = this.data.list[index].pagePath
      wx.switchTab({ url })
    }
  }
})
