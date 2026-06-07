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
		<!-- Bottom Nav -->
		<view class="bottom-nav">
			<view class="nav-item" @tap="navTo('home')">
				<text class="nav-icon">🏠</text>
				<text class="nav-label">首页</text>
			</view>
			<view class="nav-item nav-item-active" @tap="navTo('reward')">
				<text class="nav-icon nav-icon-active">⭐</text>
				<text class="nav-label nav-label-active">奖惩</text>
			</view>
			<view class="nav-item" @tap="navTo('shop')">
				<text class="nav-icon">🛒</text>
				<text class="nav-label">店铺</text>
			</view>
			<view class="nav-item" @tap="navTo('profile')">
				<text class="nav-icon">👤</text>
				<text class="nav-label">我的</text>
			</view>
		</view>
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
						tag: '专注进取',
						icon: '📖',
						bgColor: '#ffd93d',
						iconColor: '#725e00',
						current: 5,
						total: 5,
						progressColor: '#725c00',
						isGift: true
					},
					{
						name: '生活习惯',
						tag: '作息规律',
						icon: '🌙',
						bgColor: '#ffdcc4',
						iconColor: '#6f3800',
						current: 3,
						total: 5,
						progressColor: '#924c00',
						isGift: false
					},
					{
						name: '学习科目',
						tag: '勤学好问',
						icon: '📐',
						bgColor: '#ccd7ee',
						iconColor: '#525d71',
						current: 2,
						total: 5,
						progressColor: '#545f72',
						isGift: false
					},
					{
						name: '学习成绩',
						tag: '突破自我',
						icon: '🏆',
						bgColor: 'rgba(168, 214, 114, 0.2)',
						iconColor: '#A8D672',
						current: 4,
						total: 5,
						progressColor: '#A8D672',
						isGift: false
					},
					{
						name: '性格养成',
						tag: '善良诚实',
						icon: '❤️',
						bgColor: 'rgba(177, 156, 217, 0.2)',
						iconColor: '#B19CD9',
						current: 1,
						total: 5,
						progressColor: '#B19CD9',
						isGift: false
					}
				]
			}
		},
		methods: {
			switchTab(tab) {
				this.activeTab = tab
			},
			showDetail() {},
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
			navTo(page) {
				const routes = {
					home: '/pages/index/index',
					reward: '/pages/reward-center/reward-center',
					shop: '/pages/prize-snack/prize-snack',
					profile: '/pages/profile/profile'
				}
				if (routes[page]) {
					uni.navigateTo({ url: routes[page] })
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
		position: sticky;
		top: 0;
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
		color: #725c00;
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
	.bottom-nav {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		z-index: 50;
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding: 8px 16px 16px;
		background: rgba(245, 243, 238, 0.9);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border-top: 1px solid rgba(209, 198, 171, 0.3);
		border-radius: 1rem 1rem 0 0;
		box-shadow: 0 -4px 20px 0 rgba(0, 0, 0, 0.05);
	}
	.nav-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 8px 16px;
		border-radius: 1rem;
		color: #48473a;
	}
	.nav-item:active {
		transform: scale(0.9);
	}
	.nav-item-active {
		background: #ffd214;
		color: #705b00;
	}
	.nav-icon {
		font-size: 24px;
	}
	.nav-icon-active {
		font-weight: 700;
	}
	.nav-label {
		font-size: 12px;
		font-weight: 700;
		letter-spacing: 0.05em;
		margin-top: 4px;
		font-family: 'Plus Jakarta Sans', 'PingFang SC', sans-serif;
	}
	.nav-label-active {
		font-weight: 700;
	}
</style>
