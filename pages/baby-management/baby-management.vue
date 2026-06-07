<template>
	<view class="page">
		<view style="height: var(--status-bar-height);"></view>

		<view class="top-bar">
			<view class="top-left">
				<text class="back-btn">←</text>
				<text class="top-title">宝贝管理</text>
			</view>
			<text class="info-btn">ℹ️</text>
		</view>

		<scroll-view scroll-y class="scroll-area">
			<view class="intro">
				<text class="intro-text">在这里管理您的家庭成员，记录每个宝贝的成长足迹。</text>
			</view>

			<view class="list">
				<view class="child-card" v-for="(child, index) in children" :key="index">
					<view class="card-left">
						<view class="avatar">
							<image class="avatar-img" :src="child.avatar" mode="aspectFill"></image>
						</view>
						<view class="child-info">
							<text class="child-name">{{child.name}}</text>
							<text class="child-stars">已收集 {{child.stars}} 颗星星</text>
						</view>
					</view>
					<button class="edit-btn" @tap="onEdit(child)">
						<text class="edit-icon">✏️</text>
						<text>编辑</text>
					</button>
				</view>

				<view class="empty-state">
					<text class="empty-icon">👶</text>
					<text class="empty-text">添加更多宝贝，开启精彩旅程</text>
				</view>
			</view>

			<view class="bottom-spacer"></view>
		</scroll-view>

		<view class="bottom-bar">
			<button class="add-btn" @tap="onAddBaby">
				<text class="add-icon">＋</text>
				<text>添加新宝贝</text>
			</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				children: [
					{
						name: '米米 (Mimi)',
						stars: 128,
						avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3P44riaTroN9h2_E1YZ-tLtL1-wGM8KqyMuowOKBxcAHyhCFGYkXrTt5PZGLGu_u7JzyEpwV62rjk9Wa32OLI5YUpti_QAHOgOasQfsZWcbh7y3hHdL4p0Mh8v-pP8PLvI2o1VrtgQ8pmq-GyqOijVacbierLgBQIS-WU0mjDxQyhZOtv1ZW58s8dQwAsBjAdT1uzhcft3UY5fK6YfEtZ1B6opKdHX1DM-J5uRYeKddcBy7E5ZeeygygscKg7j6bVCs0HBGdVzu1W'
					},
					{
						name: '乐乐 (Lele)',
						stars: 85,
						avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMCnT9CsruoFN3L4mlF4ajjihcZn7yDgEwzPSAuFaRpcJL4MVfMdHS7nNYi73sEbLgWI-Ffoj1tlkz5NM2NDZ4dPBm3g1FVuLS_yoklvjM9cJGEjBNfLHStB9Tj4ocm7gsBEW_eO2_QnEOzfGD9SCevXaQPA7uTREhFHvUssDAVPObrg9ZoQQ4uSUV3AMXAejXOyqploo0p89Ifzu03TxTa9oC7v33i91pG8ZNpI4LD04WYLkgchiQLfrEvJzbdQk6LcMbfrkwsmh6'
					}
				]
			}
		},
		methods: {
			onEdit(child) {
				uni.showToast({
					icon: 'none',
					title: `编辑 ${child.name}`
				})
			},
			onAddBaby() {
				uni.showToast({
					icon: 'none',
					title: '添加新宝贝'
				})
			}
		}
	}
</script>

<style>
	.page {
		background-color: #faf9f9;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		background-image:
			radial-gradient(circle at 10% 20%, rgba(255, 225, 115, 0.1) 0%, transparent 40%),
			radial-gradient(circle at 90% 80%, rgba(255, 132, 0, 0.05) 0%, transparent 40%);
	}

	.top-bar {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 50;
		background-color: rgba(255,255,255,0.4);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border-bottom: 2rpx solid rgba(255,255,255,0.2);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 16rpx 40rpx;
		padding-top: calc(16rpx + var(--status-bar-height));
	}
	.top-left {
		display: flex;
		align-items: center;
		gap: 8rpx;
	}
	.back-btn {
		font-size: 48rpx;
		color: #705d00;
		padding: 8rpx;
	}
	.top-title {
		font-size: 48rpx;
		font-weight: 700;
		color: #944a00;
	}
	.info-btn {
		font-size: 40rpx;
		padding: 8rpx;
	}

	.scroll-area {
		flex: 1;
		padding: 192rpx 40rpx 200rpx;
	}

	.intro {
		margin-bottom: 80rpx;
		text-align: center;
	}
	.intro-text {
		font-size: 36rpx;
		color: #4d4633;
		line-height: 1.5;
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: 32rpx;
	}

	.child-card {
		background: rgba(255, 255, 255, 0.4);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 3rpx solid rgba(255, 255, 255, 0.6);
		border-radius: 32rpx;
		padding: 48rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-shadow: 0 60rpx 120rpx -24rpx rgba(255, 132, 0, 0.1);
		transition: transform 0.2s;
	}
	.child-card:active {
		transform: translateY(-4rpx);
	}

	.card-left {
		display: flex;
		align-items: center;
		gap: 48rpx;
	}

	.avatar {
		width: 128rpx;
		height: 128rpx;
		border-radius: 50%;
		overflow: hidden;
		border: 4rpx solid #ffe173;
	}
	.avatar-img {
		width: 100%;
		height: 100%;
	}

	.child-info {
		display: flex;
		flex-direction: column;
	}
	.child-name {
		font-size: 48rpx;
		font-weight: 700;
		color: #1a1c1c;
	}
	.child-stars {
		font-size: 24rpx;
		font-weight: 600;
		color: #7e7761;
		margin-top: 8rpx;
	}

	.edit-btn {
		display: flex;
		align-items: center;
		gap: 8rpx;
		padding: 16rpx 32rpx;
		border-radius: 999rpx;
		border: 2rpx solid #d0c6ad;
		background: transparent;
		color: #705d00;
		font-size: 28rpx;
		font-weight: 700;
		line-height: 1.2;
		min-width: auto;
	}
	.edit-btn::after {
		border: none;
	}
	.edit-icon {
		font-size: 36rpx;
	}

	.empty-state {
		margin-top: 80rpx;
		padding: 80rpx;
		border: 4rpx dashed #d0c6ad;
		border-radius: 32rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		opacity: 0.4;
	}
	.empty-icon {
		font-size: 96rpx;
		margin-bottom: 16rpx;
	}
	.empty-text {
		font-size: 32rpx;
		color: #7e7761;
	}

	.bottom-spacer {
		height: 32rpx;
	}

	.bottom-bar {
		position: fixed;
		bottom: 0;
		width: 100%;
		padding: 40rpx;
		padding-bottom: calc(40rpx + env(safe-area-inset-bottom));
		background: linear-gradient(to top, #faf9f9 60%, transparent);
	}
	.add-btn {
		width: 100%;
		height: 112rpx;
		background-color: #ffd93d;
		color: #725e00;
		border-radius: 32rpx;
		font-size: 48rpx;
		font-weight: 700;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 16rpx;
		box-shadow: 0 8rpx 0px #944a00;
		border: none;
		line-height: 1.4;
	}
	.add-btn::after {
		border: none;
	}
	.add-btn:active {
		transform: translateY(4rpx);
		box-shadow: 0 4rpx 0px #944a00;
	}
	.add-icon {
		font-size: 48rpx;
		font-weight: 700;
	}
</style>
