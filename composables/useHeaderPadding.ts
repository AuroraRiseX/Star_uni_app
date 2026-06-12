/**
 * useHeaderPadding - 动态计算顶部安全区高度
 * 
 * 解决问题：
 * 1. CSS calc() 混合 rpx/px 单位在真机上可能不生效
 * 2. 不同机型状态栏高度不同（灵动岛 ~59px, 刘海屏 47px, 普通 20px）
 * 3. top-header 是 position: fixed，内容区需要正确的 padding-top 避免被遮挡
 * 
 * 使用方式：
 * const { headerPaddingTop } = useHeaderPadding()
 * // 在模板中 :style="{ paddingTop: headerPaddingTop }"
 */

import { ref, onMounted } from 'vue'

export function useHeaderPadding() {
  const headerPaddingTop = ref('120px') // 默认值

  onMounted(() => {
    try {
      const sys = uni.getSystemInfoSync()
      
      // 获取安全区域顶部（状态栏 + 灵动岛）
      let safeTop = (sys as any).safeAreaInsets?.top || sys.statusBarHeight || 44
      
      // 获取屏幕宽度用于 rpx -> px 换算
      // rpx = px * 750 / screenWidth
      const screenWidth = sys.screenWidth || 375
      
      // 将 rpx 单位转为实际 px
      // 128rpx = header-inner 高度
      // 60rpx = 呼吸空间
      const headerInnerPx = (128 / 750) * screenWidth
      const breathPx = (60 / 750) * screenWidth
      
      // 总高度 = 安全区 + header-inner + 呼吸空间 + 额外余量(10px)
      const totalHeight = safeTop + headerInnerPx + breathPx + 10
      
      console.log('[useHeaderPadding] safeTop:', safeTop, 'headerInner:', headerInnerPx.toFixed(1), 'breath:', breathPx.toFixed(1), 'total:', totalHeight.toFixed(1))
      
      headerPaddingTop.value = `${totalHeight}px`
    } catch (e) {
      console.warn('[useHeaderPadding] 计算失败，使用默认值:', e)
      headerPaddingTop.value = '140px'
    }
  })

  return { headerPaddingTop }
}
