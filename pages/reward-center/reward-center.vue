<template>
	<view class="page">
		<view style="height: var(--status-bar-height);"></view>
		<view class="top-bar">
			<view class="top-bar-left">
				<view class="avatar-circle">
					<image
						class="top-avatar"
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCWRa5gL7QsVQjOzXvZey1ko8RN6HzN2RQlxCM1F3wmY0mPJY4sXT2TD_3eZZfo9LXEcwQf7OJhhACzMjOwnCfPVZWu00eOSkxe_XG5-PZRj9kFdHW2FdeDeEoPfm_WEhZIyTdMdR2wjQkj5oTqiMMN5dK1bQoENbT28X_Repucm0OLpL5gS7M-IX9pI-fVfYO1bQlyJPeEL4OPA15IzLYxmOewlDzCIxgY30n9HjKZfcShRKutDMGeae8teqR4FwsiT92BSdSfhc2"
						mode="widthFix"
					></image>
				</view>
				<text class="top-title">奖惩中心</text>
			</view>
			<view class="detail-btn" @tap="showDetail">
				<text class="detail-text">明细 &gt;</text>
			</view>
		</view>
		<scroll-view scroll-y class="main-scroll">
			<!-- Tabs -->
			<view class="tab-bar">
				<view class="tab tab-active" @tap="switchTab('reward')">
					<text class="tab-icon">⭐</text>
					<text class="tab-label">🌟 奖励赚取</text>
				</view>
				<view class="tab tab-inactive" @tap="switchTab('punish')">
					<text class="tab-icon">☁️</text>
					<text class="tab-label">☁️ 惩罚记录</text>
				</view>
			</view>
			<!-- Rule Notice -->
			<view class="rule-card">
				<text class="rule-icon">💡</text>
				<text class="rule-text">
					<text class="rule-bold">星星罐法则:</text>
					好习惯攒星星，坏习惯攒乌云。积满星星即可打开神秘宝箱，乌云散去才能重见阳光哦！
				</text>
			</view>
			<!-- Category List -->
			<view class="category-list">
				<view
					v-for="(item, index) in categories"
					:key="index"
					class="category-card"
					@tap="goCategoryDetail(item)"
				>
					<view class="category-header">
						<view class="category-left">
							<view
								class="category-icon-box"
								:style="{ background: item.bgColor, color: item.iconColor }"
							>
								<text class="category-icon">{{ item.icon }}</text>
							</view>
							<view class="category-info">
								<text class="category-name">{{ item.name }}</text>
								<text class="category-tag">{{ item.tag }}</text>
							</view>
						</view>
						<text
							class="category-count"
							:style="{ color: item.progress >= 1 ? '#725c00' : 'rgba(77, 70, 50, 0.5)' }"
						>{{ item.current }}/{{ item.total }}</text>
					</view>
					<view class="progress-row">
						<view class="progress-track">
							<view
								class="progress-fill"
								:style="{
									width: (item.current / item.total * 100) + '%',
									background: item.progressColor
								}"
							>
								<view class="shimmer"></view>
							</view>
						</view>
						<view
							v-if="isGiftItem(index)"
							class="gift-box animate-glow"
							@tap="openGift"
						>
							<text class="gift-icon">🎁</text>
						</view>
						<view
							v-else
							class="chest-box animate-shake"
						>
							<text class="chest-icon">📦</text>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeTab: 'reward',
				categories: [
					{
						name: '学习习惯',
						tag: '改正拖拉',
						icon: '📖',
						bgColor: '#ccd7ee',
						iconColor: '#525d71',
						current: 12,
						total: 20,
						progressColor: '#7A869A',
						punishPage: '/pages/punishment-learning/punishment-learning'
					},
					{
						name: '生活习惯',
						tag: '早睡早起',
						icon: '🌙',
						bgColor: 'rgba(168, 214, 114, 0.2)',
						iconColor: '#A8D672',
						current: 5,
						total: 15,
						progressColor: '#A8D672',
						punishPage: '/pages/punishment-life/punishment-life'
					},
					{
						name: '学习成绩',
						tag: '查漏补缺',
						icon: '🏫',
						bgColor: 'rgba(177, 156, 217, 0.2)',
						iconColor: '#B19CD9',
						current: 8,
						total: 30,
						progressColor: '#B19CD9',
						punishPage: '/pages/punishment-academic/punishment-academic'
					},
					{
						name: '性格养成',
						tag: '戒骄戒躁',
						icon: '😊',
						bgColor: '#ffdcc4',
						iconColor: '#6f3800',
						current: 3,
						total: 20,
						progressColor: '#7A869A',
						punishPage: '/pages/punishment-character/punishment-character'
					}
				]
			}
		},
		methods: {
			switchTab(tab) {
				if (tab === 'punish') {
					uni.navigateTo({ url: '/pages/punishment-center/punishment-center' })
				} else {
					this.activeTab = tab
				}
			},
			showDetail() {
				uni.navigateTo({ url: '/pages/star-jar-detail/star-jar-detail' })
			},
			isGiftItem(index) {
				return this.categories[index].current >= this.categories[index].total
			},
			openGift() {
				uni.showToast({
					title: '🎉 恭喜！你成功兑换了一个惊喜宝箱！',
					icon: 'none',
					duration: 2000
				})
			},
			goCategoryDetail(item) {
				const pageMap = {
					'学习习惯': '/pages/learning-subjects/learning-subjects',
					'性格养成': '/pages/character-building/character-building',
					'学习成绩': '/pages/academic-performance/academic-performance',
					'生活习惯': '/pages/life-habits/life-habits'
				}
				const url = pageMap[item.name]
				if (url) {
					uni.navigateTo({ url })
				}
			},
			goHome() {
				uni.switchTab({ url: '/pages/index/index' })
			},
			goReward() {},
			goShop() {
				uni.switchTab({ url: '/pages/prize-universal/prize-universal' })
			},
			goProfile() {
				uni.switchTab({ url: '/pages/profile/profile' })
			}
		},
		onShow() {
			// 设置自定义 tab-bar 选中状态为"奖惩"（index=1）
			if (typeof this.$mp !== 'undefined' && this.$mp.page) {
				const tabBar = this.$mp.page.getTabBar && this.$mp.page.getTabBar()
				if (tabBar) {
					tabBar.setData({ selected: 1 })
				}
			}
		}
	}
</script>

<style lang="scss">
	.page {
		min-height: 884px;
		background-color: #fbf9f4;
		color: #1b1c19;
		font-family: 'Plus Jakarta Sans', 'PingFang SC', sans-serif;
		padding-bottom: 128px;
	}
	.top-bar {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 40;
		background: rgba(251, 249, 244, 0.8);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 8px 24px;
	}
	.top-bar-left {
		display: flex;
		align-items: center;
		gap: 12px;
	}
	.avatar-circle {
		width: 40px;
		height: 40px;
		border-radius: 9999px;
		border: 2px solid #ffe07e;
		overflow: hidden;
		background: #eae8e3;
	}
	.top-avatar {
		width: 100%;
		height: 100%;
	}
	.top-title {
		font-size: 20px;
		line-height: 1.4;
		font-weight: 700;
		color: #924c00;
		font-family: 'Plus Jakarta Sans', 'PingFang SC', sans-serif;
	}
	.detail-btn {
		padding: 4px 12px;
		border-radius: 9999px;
	}
	.detail-btn:active {
		background: #eae8e3;
	}
	.detail-text {
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.05em;
		color: #725c00;
		font-family: 'Plus Jakarta Sans', 'PingFang SC', sans-serif;
	}
	.main-scroll {
		padding: 24px 24px;
		padding-top: 136px;
		max-width: 672px;
		margin: 0 auto;
	}
	.tab-bar {
		background: #f5f3ee;
		padding: 6px;
		border-radius: 1rem;
		display: flex;
		align-items: center;
		box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
	}
	.tab {
		flex: 1;
		padding: 12px 0;
		border-radius: 0.75rem;
		font-size: 20px;
		line-height: 1.4;
		font-weight: 700;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		transition: all 0.3s;
		font-family: 'Plus Jakarta Sans', 'PingFang SC', sans-serif;
		&.tab-active {
			background: #ffffff;
			box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
			color: #725c00;
		}
		&.tab-inactive {
			color: #4d4632;
		}
	}
	.tab-icon {
		font-size: 20px;
	}
	.tab-label {
		font-size: 20px;
	}
	.rule-card {
		background: rgba(255, 224, 126, 0.3);
		border: 1px solid #ffe07e;
		border-radius: 2rem;
		padding: 20px;
		display: flex;
		align-items: flex-start;
		gap: 12px;
		margin-top: 24px;
	}
	.rule-icon {
		font-size: 24px;
		flex-shrink: 0;
	}
	.rule-text {
		font-size: 16px;
		line-height: 1.5;
		font-weight: 500;
		color: #564500;
		font-family: 'Plus Jakarta Sans', 'PingFang SC', sans-serif;
	}
	.rule-bold {
		font-weight: 700;
	}
	.category-list {
		margin-top: 24px;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	.category-card {
		background: #fffdf9;
		border: 1px solid rgba(209, 198, 171, 0.3);
		border-radius: 2rem;
		padding: 20px;
		box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.03);
		transition: box-shadow 0.2s;
	}
	.category-card:active {
		box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
	}
	.category-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 16px;
	}
	.category-left {
		display: flex;
		align-items: center;
		gap: 12px;
	}
	.category-icon-box {
		width: 48px;
		height: 48px;
		border-radius: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 24px;
		flex-shrink: 0;
	}
	.category-icon {
		font-size: 24px;
	}
	.category-info {
		display: flex;
		flex-direction: column;
	}
	.category-name {
		font-size: 20px;
		line-height: 1.4;
		font-weight: 700;
		color: #1b1c19;
		font-family: 'Plus Jakarta Sans', 'PingFang SC', sans-serif;
	}
	.category-tag {
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.05em;
		color: #4d4632;
		opacity: 0.7;
		text-transform: uppercase;
		font-family: 'Plus Jakarta Sans', 'PingFang SC', sans-serif;
	}
	.category-count {
		font-size: 48px;
		line-height: 1.1;
		letter-spacing: -0.02em;
		font-weight: 800;
		font-family: 'Plus Jakarta Sans', 'PingFang SC', sans-serif;
	}
	.progress-row {
		display: flex;
		align-items: center;
		gap: 16px;
	}
	.progress-track {
		flex: 1;
		height: 16px;
		background: #e4e2dd;
		border-radius: 9999px;
		overflow: hidden;
		position: relative;
	}
	.progress-fill {
		height: 100%;
		border-radius: 9999px;
		position: relative;
		overflow: hidden;
	}
	.shimmer {
		position: absolute;
		inset: 0;
		background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%);
		background-size: 200% 100%;
		animation: shimmer 2s infinite linear;
	}
	@keyframes shimmer {
		0% { background-position: -200% 0; }
		100% { background-position: 200% 0; }
	}
	.gift-box {
		cursor: pointer;
		animation: glow 1.5s infinite ease-in-out;
	}
	.gift-icon {
		font-size: 36px;
		color: #924c00;
	}
	.chest-box {
		opacity: 0.6;
		animation: shake 0.5s infinite ease-in-out;
	}
	.chest-icon {
		font-size: 36px;
		color: #4d4632;
	}
	@keyframes glow {
		0%, 100% { filter: drop-shadow(0 0 2px #ffd214); }
		50% { filter: drop-shadow(0 0 8px #ffd214); }
	}
	@keyframes shake {
		0%, 100% { transform: rotate(0deg); }
		25% { transform: rotate(-5deg); }
		75% { transform: rotate(5deg); }
	}
</style>
