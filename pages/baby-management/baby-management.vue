<template>
	<view class="page">
		<view style="height: var(--status-bar-height);"></view>

		<!-- Topbar-sj -->
		<view class="topbar-sj">
			<view class="topbar-left">
				<view class="back-btn" @tap="goBack">
					<text class="back-icon">←</text>
				</view>
				<text class="topbar-title">宝贝管理</text>
			</view>
			<view class="info-icon-wrap">
				<text class="info-icon">ℹ️</text>
			</view>
		</view>

		<scroll-view scroll-y class="scroll-area">
			<!-- 居中说明文字 -->
			<view class="intro-section">
				<text class="intro-text">在这里管理您的家庭成员，记录每个宝贝的成长足迹。</text>
			</view>

			<!-- 宝贝列表 -->
			<view class="baby-list">
				<!-- 米米 -->
				<view class="baby-card">
					<view class="baby-left">
						<view class="baby-avatar">
							<image
								class="avatar-img"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3P44riaTroN9h2_E1YZ-tLtL1-wGM8KqyMuowOKBxcAHyhCFGYkXrTt5PZGLGu_u7JzyEpwV62rjk9Wa32OLI5YUpti_QAHOgOasQfsZWcbh7y3hHdL4p0Mh8v-pP8PLvI2o1VrtgQ8pmq-GyqOijVacbierLgBQIS-WU0mjDxQyhZOtv1ZW58s8dQwAsBjAdT1uzhcft3UY5fK6YfEtZ1B6opKdHX1DM-J5uRYeKddcBy7E5ZeeygygscKg7j6bVCs0HBGdVzu1W"
								mode="aspectFill"
							></image>
						</view>
						<view class="baby-info">
							<text class="baby-name">米米 (Mimi)</text>
							<text class="baby-stars">已收集 128 颗星星</text>
						</view>
					</view>
					<view class="edit-btn" @tap="onEdit('米米')">
						<text class="edit-btn-text">✏️ 编辑</text>
					</view>
				</view>

				<!-- 乐乐 -->
				<view class="baby-card">
					<view class="baby-left">
						<view class="baby-avatar">
							<image
								class="avatar-img"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMCnT9CsruoFN3L4mlF4ajjihcZn7yDgEwzPSAuFaRpcJL4MVfMdHS7nNYi73sEbLgWI-Ffoj1tlkz5NM2NDZ4dPBm3g1FVuLS_yoklvjM9cJGEjBNfLHStB9Tj4ocm7gsBEW_eO2_QnEOzfGD9SCevXaQPA7uTREhFHvUssDAVPObrg9ZoQQ4uSUV3AMXAejXOyqploo0p89Ifzu03TxTa9oC7v33i91pG8ZNpI4LD04WYLkgchiQLfrEvJzbdQk6LcMbfrkwsmh6"
								mode="aspectFill"
							></image>
						</view>
						<view class="baby-info">
							<text class="baby-name">乐乐 (Lele)</text>
							<text class="baby-stars">已收集 85 颗星星</text>
						</view>
					</view>
					<view class="edit-btn" @tap="onEdit('乐乐')">
						<text class="edit-btn-text">✏️ 编辑</text>
					</view>
				</view>
			</view>

			<!-- 添加新宝贝虚线区域 opacity 0.4 -->
			<view class="add-dashed-area">
				<text class="dashed-icon">👶</text>
				<text class="dashed-text">添加更多宝贝，开启精彩旅程</text>
			</view>

			<view style="height: 200rpx;"></view>
		</scroll-view>

		<!-- 底部"添加新宝贝" squishy 按钮 -->
		<view class="bottom-bar">
			<view class="add-btn" @tap="onAddBaby">
				<text class="add-btn-icon">＋</text>
				<text class="add-btn-text">添加新宝贝</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			goBack() {
				uni.navigateBack()
			},
			onEdit(name) {
				uni.showToast({
					icon: 'none',
					title: '正在编辑 ' + name + ' 的资料...',
					duration: 1500
				})
			},
			onAddBaby() {
				uni.showToast({
					icon: 'none',
					title: '正在准备添加新宝贝...',
					duration: 1500
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

	/* ===== Topbar-sj ===== */
	.topbar-sj {
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 50;
		background: rgba(250, 249, 249, 0.4);
		backdrop-filter: blur(24rpx);
		-webkit-backdrop-filter: blur(24rpx);
		border-bottom: 2rpx solid rgba(255, 255, 255, 0.2);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 16rpx 40rpx;
		padding-top: calc(16rpx + var(--status-bar-height));
	}

	.topbar-left {
		display: flex;
		align-items: center;
		gap: 16rpx;
	}

	.back-btn {
		width: 72rpx;
		height: 72rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
	}

	.back-btn:active {
		transform: scale(0.9);
	}

	.back-icon {
		font-size: 40rpx;
		color: #705d00;
	}

	.topbar-title {
		font-size: 48rpx;
		font-weight: 700;
		color: #944a00;
	}

	.info-icon-wrap {
		width: 72rpx;
		height: 72rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.info-icon {
		font-size: 36rpx;
	}

	/* ===== Scroll Area ===== */
	.scroll-area {
		flex: 1;
		padding: 200rpx 40rpx 220rpx;
	}

	/* ===== Intro Section ===== */
	.intro-section {
		margin-bottom: 64rpx;
		text-align: center;
	}

	.intro-text {
		font-size: 32rpx;
		color: #4d4633;
		line-height: 1.6;
	}

	/* ===== Baby List ===== */
	.baby-list {
		display: flex;
		flex-direction: column;
		gap: 28rpx;
	}

	.baby-card {
		background: rgba(255, 255, 255, 0.4);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 3rpx solid rgba(255, 255, 255, 0.6);
		border-radius: 32rpx;
		padding: 40rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-shadow: 0 40rpx 100rpx -24rpx rgba(255, 132, 0, 0.1);
	}

	.baby-card:active {
		transform: translateY(-2rpx);
	}

	.baby-left {
		display: flex;
		align-items: center;
		gap: 32rpx;
	}

	.baby-avatar {
		width: 128rpx;
		height: 128rpx;
		border-radius: 50%;
		overflow: hidden;
		border: 4rpx solid #ffe173;
		flex-shrink: 0;
	}

	.avatar-img {
		width: 100%;
		height: 100%;
	}

	.baby-info {
		display: flex;
		flex-direction: column;
	}

	.baby-name {
		font-size: 48rpx;
		font-weight: 700;
		color: #1a1c1c;
	}

	.baby-stars {
		font-size: 24rpx;
		font-weight: 600;
		color: #7e7761;
		margin-top: 8rpx;
	}

	/* 编辑按钮: 圆角pill, 边框#d0c6ad */
	.edit-btn {
		padding: 16rpx 32rpx;
		border-radius: 999rpx;
		border: 2rpx solid #d0c6ad;
		background: transparent;
		flex-shrink: 0;
	}

	.edit-btn:active {
		opacity: 0.7;
	}

	.edit-btn-text {
		font-size: 26rpx;
		font-weight: 700;
		color: #705d00;
	}

	/* ===== 添加新宝贝虚线区域 opacity 0.4 ===== */
	.add-dashed-area {
		margin-top: 64rpx;
		padding: 64rpx 40rpx;
		border: 4rpx dashed #d0c6ad;
		border-radius: 32rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		opacity: 0.4;
	}

	.dashed-icon {
		font-size: 80rpx;
		margin-bottom: 16rpx;
	}

	.dashed-text {
		font-size: 28rpx;
		color: #7e7761;
	}

	/* ===== Bottom Bar ===== */
	.bottom-bar {
		position: fixed;
		bottom: 0;
		width: 100%;
		padding: 32rpx 40rpx;
		padding-bottom: calc(32rpx + env(safe-area-inset-bottom));
		background: linear-gradient(to top, #faf9f9 60%, transparent);
		display: flex;
		justify-content: center;
	}

	/* squishy 按钮: #ffd93d, box-shadow 4px 0 #e8c426 */
	.add-btn {
		width: 100%;
		background-color: #ffd93d;
		color: #725e00;
		font-size: 44rpx;
		font-weight: 700;
		padding: 28rpx 0;
		border-radius: 999rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 16rpx;
		box-shadow: 4px 0 0 #e8c426;
		border: none;
	}

	.add-btn:active {
		transform: translateY(4rpx);
		box-shadow: 2px 0 0 #e8c426;
	}

	.add-btn-icon {
		font-size: 44rpx;
		font-weight: 700;
	}

	.add-btn-text {
		font-size: 44rpx;
		font-weight: 700;
		color: #725e00;
	}
</style>
