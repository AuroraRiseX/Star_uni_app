<template>
  <view class="page-shop">
    <!-- Header -->
    <top-header title="兑换小店" />

    <!-- Content -->
    <view class="shop-content">
      <!-- Tab Switcher -->
      <view class="tab-switcher">
        <view
          class="tab-btn"
          :class="{ 'tab-active': activeTab === 'star' }"
          @tap="activeTab = 'star'"
        >
          <text class="tab-text" :class="{ 'tab-text-active': activeTab === 'star' }">星星兑换</text>
        </view>
        <view
          class="tab-btn"
          :class="{ 'tab-active-punish': activeTab === 'cloud' }"
          @tap="activeTab = 'cloud'"
        >
          <text class="tab-text" :class="{ 'tab-text-active-punish': activeTab === 'cloud' }">乌云惩罚</text>
        </view>
      </view>

      <!-- Star Exchange Section -->
      <view class="section-star" v-if="activeTab === 'star'">
        <view class="shop-grid">
          <!-- Card 1: 零食兑换卡 -->
          <view class="shop-card">
            <view class="card-image-wrap">
              <image
                class="card-image"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvG8WMXnPjjPqGJeeJS2Dg7eQjY_zrnxiPgmTx-fzKe6Ik1OJBFaCkhIXAuXjSWDRAlHC3lJu9UupGoOyufkOIzpzrSn3C3PENcKNe_nRVRyXIC4Pju87tW0XacW79eYAcfFlJv56evDhSwvJB2n6YE3dpxTMZXddaasJ1Z0oc9G9xro9IRTQtxin83BLR1o-ptpxFJ7GssWWIZ3Vgu6CyyS1VfWJKTAvyOE8jfTUWq-it62lISUwtimKLu1jzlPx67hW2FyTXsn9o"
                mode="aspectFill"
              />
            </view>
            <view class="card-info">
              <text class="card-name">零食兑换卡</text>
              <view class="price-badge">
                <text class="price-text">⭐ 10 颗</text>
              </view>
            </view>
          </view>

          <!-- Card 2: 游戏时间卡 -->
          <view class="shop-card">
            <view class="card-image-wrap">
              <image
                class="card-image"
                src="https://lh3.googleusercontent.com/aida/AP1WRLtA795mXvA8Q1DhcHvz7dSsmHKAxXt34kWTFpIBfBVYjUSrgZI7kSpHszJqDhpl545vUkxCIbLDGzzH5kObW1Rtgbyh3boaA4L8zLkqTV1rf59iGUKvSDTUEb_0kWmpk6HtcRWV5nRFuX-B9YrNj4LKsGc7NAs71lyy80o__z3o3tbOfLvEYi7XPjhLht9kb1JC_vYChzR8sjPuKR3RZnLt8kVhsHE7pYzs3MIQAFFw4CDrP2eQKHM0m3-K"
                mode="aspectFill"
              />
            </view>
            <view class="card-info">
              <text class="card-name">游戏时间卡</text>
              <view class="price-badge">
                <text class="price-text">⭐ 20 颗</text>
              </view>
            </view>
          </view>

          <!-- Card 3: 万能许愿卡 -->
          <view class="shop-card">
            <view class="card-image-wrap">
              <image
                class="card-image"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXK9EV5NhU5tMWDuFx47E0DIB4u6B534mL1D3SuAlcb3Sbvf8onQOi_bEP9UqNnfDy6UaO_2_cTRX6McmKCaIRhlE2XxQKUCxfbzHeBvtGTcxgf6axjc0Mber3w7SnHBFc8xtSVVP-FQ87JYSf5Uwfz0JUo_GDH8Q78_YiEL7VkGZ1rXbx-IdK_RoQ3h4U6iXs3pFUsArvlCLOX0C1SfNqWaS5wLITmzQdbaoYFhqbkAh19Hmd2qE2jTrprjcheFsXAOlFG_OoKx7G"
                mode="aspectFill"
              />
            </view>
            <view class="card-info">
              <text class="card-name">万能许愿卡</text>
              <view class="price-badge">
                <text class="price-text">⭐ 50 颗</text>
              </view>
            </view>
          </view>

          <!-- Card 4: 去动物园 -->
          <view class="shop-card">
            <view class="card-image-wrap">
              <image
                class="card-image"
                src="https://lh3.googleusercontent.com/aida/AP1WRLs6dBYGKG1I7TS_sl78MxMqPKXBIXSUMAXa5HntZ4NGKNfiaxQc9t_lE1ChBbhXz4SV755W-d1oJbHeC7Y81R1fUBvSGWF57s9XOxCtjGhTNcaZQKzhRlMf2oKCkldx7NbGcZykC7y7odeIevqBHLUBfIYRL3PxkNE9Gss8-zMO4pxcWzERBEuUVnChUmQd30LbqUQm4ezkZbAZAdGEUavnmWrtFELWS2PVx9TP8DJIg_p6cZPTO1KeqzpW"
                mode="aspectFill"
              />
            </view>
            <view class="card-info">
              <text class="card-name">去动物园</text>
              <view class="price-badge">
                <text class="price-text">⭐ 100 颗</text>
              </view>
            </view>
          </view>

          <!-- Card 5: 去游乐场 (Full Width) -->
          <view class="shop-card-full">
            <view class="full-card-image-wrap">
              <image
                class="full-card-image"
                src="https://lh3.googleusercontent.com/aida/AP1WRLvOEt3FEvdHaemHX0VaB23r58PmoW1bYnOKPRARnfOaeGeXJ9jGuVEqSsnbAspjVfbEOJmzZOL0VtGlrOcjR47tdsNw_LfSUe65sF57g8O1B_WYCQO9XCfovaE6aj2tVhUFs25xNueswy_ZiVmKV26rSF40JgSj-dgq9oI4RNjd_42VTug-gOygi32pylDMFC-AJwMcp2SOnDwC_YX5EFDWszC5meubtqi03-mYe9CA3rZb3KrFZZuuqhI"
                mode="aspectFill"
              />
            </view>
            <view class="full-card-info">
              <text class="full-card-name">去游乐场</text>
              <text class="full-card-desc">包含全天通票与纪念礼品</text>
              <view class="price-badge">
                <text class="price-text price-text-lg">⭐ 120 颗</text>
              </view>
            </view>
          </view>
        </view>

        <!-- Add New Prize Button -->
        <view class="add-btn-outline" hover-class="add-btn-outline-active">
          <image class="add-outline-icon" src="/static/icons/add_circle.svg" />
          <text class="add-outline-text">添加新奖项</text>
        </view>
      </view>

      <!-- Cloud Punishment Section -->
      <view class="section-cloud" v-if="activeTab === 'cloud'">
        <!-- 打扫房间 -->
        <view class="card-neu card-punish">
          <view class="punish-row">
            <view class="punish-left">
              <view class="icon-box icon-bg-error">
                <image class="punish-icon" src="/static/icons/cleaning_services.svg" />
              </view>
              <view class="punish-info">
                <text class="punish-title">打扫房间</text>
                <text class="punish-desc">自己整理玩具和书桌</text>
              </view>
            </view>
            <view class="cloud-badge">
              <text class="cloud-badge-text">☁️ 1 朵</text>
            </view>
          </view>
        </view>

        <!-- 加练字帖 -->
        <view class="card-neu card-punish">
          <view class="punish-row">
            <view class="punish-left">
              <view class="icon-box icon-bg-error">
                <image class="punish-icon" src="/static/icons/menu_book.svg" />
              </view>
              <view class="punish-info">
                <text class="punish-title">加练字帖</text>
                <text class="punish-desc">额外完成两页字帖</text>
              </view>
            </view>
            <view class="cloud-badge">
              <text class="cloud-badge-text">☁️ 2 朵</text>
            </view>
          </view>
        </view>

        <!-- 没收电子产品 -->
        <view class="card-neu card-punish">
          <view class="punish-row">
            <view class="punish-left">
              <view class="icon-box icon-bg-error">
                <image class="punish-icon" src="/static/icons/tv_off.svg" />
              </view>
              <view class="punish-info">
                <text class="punish-title">没收电子产品</text>
                <text class="punish-desc">周末停玩平板一天</text>
              </view>
            </view>
            <view class="cloud-badge">
              <text class="cloud-badge-text">☁️ 5 朵</text>
            </view>
          </view>
        </view>

        <!-- Add New Punishment Button -->
        <view class="add-btn-outline-error" hover-class="add-btn-outline-error-active">
          <image class="add-outline-icon" src="/static/icons/add_circle.svg" />
          <text class="add-outline-text-error">添加新惩罚</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onShow } from '@dcloudio/uni-app'
import TopHeader from '@/components/top-header/top-header.vue'

const activeTab = ref<'star' | 'cloud'>('star')

onShow(() => {
  const page = getCurrentPages().pop()
  if (page && typeof (page as any).getTabBar === 'function' && (page as any).getTabBar()) {
    ;(page as any).getTabBar().setData({ selected: 2 })
  }
})
</script>

<style scoped>
.page-shop {
  min-height: 100vh;
  background: radial-gradient(circle at top, #FFF9EB 0%, #FAFAFA 100%);
  padding-bottom: 200rpx;
}

.shop-content {
  padding: 180rpx 40rpx 200rpx;
  max-width: 800rpx;
  margin: 0 auto;
  box-sizing: border-box;
}

/* Tab Switcher */
.tab-switcher {
  background: #f4f3f3;
  padding: 12rpx;
  border-radius: 32rpx;
  display: flex;
  align-items: center;
  box-shadow: inset 0 2rpx 8rpx rgba(0, 0, 0, 0.06);
  margin-bottom: 48rpx;
}

.tab-btn {
  flex: 1;
  padding: 24rpx 0;
  border-radius: 24rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.tab-active {
  background: #ffffff;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.06);
}

.tab-active-punish {
  background: #ffffff;
  box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.06);
}

.tab-text {
  font-size: 28rpx;
  font-weight: 700;
  color: #4d4633;
}

.tab-text-active {
  color: #705d00;
}

.tab-text-active-punish {
  color: #ba1a1a;
}

/* Shop Grid */
.shop-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24rpx;
}

.shop-card {
  background: #ffffff;
  border-radius: 48rpx;
  padding: 32rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.03);
  border: 2rpx solid rgba(208, 198, 173, 0.2);
}

.card-image-wrap {
  width: 100%;
  aspect-ratio: 1;
  border-radius: 32rpx;
  overflow: hidden;
  background: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24rpx;
}

.card-image {
  width: 100%;
  height: 100%;
}

.card-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16rpx;
}

.card-name {
  font-size: 28rpx;
  font-weight: 700;
  color: #1a1c1c;
}

.price-badge {
  display: inline-flex;
  align-items: center;
  background: #ffd93d;
  padding: 8rpx 32rpx;
  border-radius: 9999px;
}

.price-text {
  font-size: 24rpx;
  font-weight: 700;
  color: #725e00;
}

.price-text-lg {
  font-size: 28rpx;
}

/* Full Width Card */
.shop-card-full {
  grid-column: 1 / -1;
  background: #ffffff;
  border-radius: 48rpx;
  padding: 40rpx;
  display: flex;
  align-items: center;
  gap: 32rpx;
  box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.03);
  border: 2rpx solid rgba(208, 198, 173, 0.2);
}

.full-card-image-wrap {
  width: 192rpx;
  height: 192rpx;
  border-radius: 32rpx;
  overflow: hidden;
  background: #fafafa;
  flex-shrink: 0;
}

.full-card-image {
  width: 100%;
  height: 100%;
}

.full-card-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.full-card-name {
  font-size: 32rpx;
  font-weight: 700;
  color: #1a1c1c;
}

.full-card-desc {
  font-size: 24rpx;
  color: #4d4633;
  margin-top: 4rpx;
  margin-bottom: 20rpx;
}

/* Add Button Outline */
.add-btn-outline {
  margin-top: 48rpx;
  width: 100%;
  padding: 40rpx;
  border-radius: 48rpx;
  border: 4rpx dashed #d0c6ad;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16rpx;
}

.add-btn-outline-active {
  background: #f4f3f3;
}

.add-outline-icon {
  width: 40rpx;
  height: 40rpx;
}

.add-outline-text {
  font-size: 28rpx;
  font-weight: 700;
  color: #4d4633;
}

/* Cloud Section */
.section-cloud {
  display: flex;
  flex-direction: column;
  gap: 24rpx;
}

.card-neu {
  background: #ffffff;
  border-radius: 40rpx;
  padding: 40rpx;
  box-shadow: 0 20rpx 50rpx -10rpx rgba(0, 0, 0, 0.05), 0 16rpx 20rpx -12rpx rgba(0, 0, 0, 0.05);
  border: 2rpx solid rgba(255, 255, 255, 0.8);
}

.card-punish {
  border-left: 8rpx solid #ba1a1a;
}

.punish-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.punish-left {
  display: flex;
  align-items: center;
  gap: 28rpx;
}

.icon-box {
  width: 96rpx;
  height: 96rpx;
  border-radius: 28rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-bg-error {
  background: rgba(255, 218, 214, 0.25);
}

.punish-icon {
  width: 48rpx;
  height: 48rpx;
}

.punish-info {
  display: flex;
  flex-direction: column;
}

.punish-title {
  font-size: 28rpx;
  font-weight: 700;
  color: #1a1c1c;
}

.punish-desc {
  font-size: 24rpx;
  color: rgba(186, 26, 26, 0.6);
  margin-top: 4rpx;
}

.cloud-badge {
  display: inline-flex;
  align-items: center;
  background: #ffdad6;
  padding: 8rpx 32rpx;
  border-radius: 9999px;
}

.cloud-badge-text {
  font-size: 24rpx;
  font-weight: 700;
  color: #ba1a1a;
}

/* Add Punishment Button */
.add-btn-outline-error {
  margin-top: 24rpx;
  width: 100%;
  padding: 40rpx;
  border-radius: 48rpx;
  border: 4rpx dashed rgba(186, 26, 26, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16rpx;
}

.add-btn-outline-error-active {
  background: rgba(186, 26, 26, 0.05);
}

.add-outline-text-error {
  font-size: 28rpx;
  font-weight: 700;
  color: #ba1a1a;
}
</style>