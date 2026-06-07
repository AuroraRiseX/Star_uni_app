<template>
	<view class="page">
		<view style="height: var(--status-bar-height);"></view>
		<view class="bg-blur top-left"></view>
		<view class="bg-blur bottom-right"></view>
		<view class="floating-star star-1">⭐</view>
		<view class="floating-star star-2">⭐</view>
		<view class="main-container">
			<view class="header">
				<text class="title">欢迎来到星星罐</text>
				<text class="subtitle">开启宝贝的第一个习惯养成计划</text>
			</view>
			<view class="glass-card">
				<view class="avatar-section">
					<text class="label">选择一个小头像</text>
					<view class="avatar-row">
						<view
							v-for="(item, index) in avatars"
							:key="index"
							class="avatar-item"
							:class="{ active: selectedAvatar === index }"
							@tap="selectAvatar(index)"
						>
							<image :src="item.src" class="avatar-img" mode="widthFix"></image>
						</view>
						<view class="upload-btn">
							<text class="upload-icon">📷</text>
						</view>
					</view>
				</view>
				<view class="name-section">
					<text class="label">宝贝的名字</text>
					<view class="input-wrap">
						<input
							class="name-input"
							v-model="babyName"
							placeholder="例如：小星星"
							placeholder-style="color: #d0c6ad"
						/>
						<text class="edit-icon">✏️</text>
					</view>
				</view>
			</view>
			<view class="terms">
				<text class="terms-text">点击下方按钮即表示您同意我们的</text>
				<text class="terms-link">用户协议</text>
				<text class="terms-text"> 与 </text>
				<text class="terms-link">隐私政策</text>
			</view>
			<view class="footer-action">
				<button class="squishy-btn" @tap="startJourney">
					<text>开启成长之旅</text>
					<text class="btn-icon">🚀</text>
				</button>
			</view>
		</view>
		<view class="overlay" :class="{ show: showSuccess }">
			<view class="success-card" :class="{ scale: showSuccess }">
				<view class="success-icon">⭐</view>
				<text class="success-text">出发啦！</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				selectedAvatar: 0,
				babyName: '',
				showSuccess: false,
				avatars: [
					{
						src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1pHi45H4nUVY_OfqqSw_1Gpx7MztbkTQ7SPy0nlMdlqc8d3S013EXlnXsdNYSd2T4oJtIQUMHHJNG7UEbdst170Z524UuI03qKvcEflBLcvnNDDV4b-BGUwTNkj-lYvXr6wQJXyQJaedFAIyEohPW8U6TfhHv_N1qsoqPuVib63OmzNXSBn8w480olq-5tppxXp6ImQCeHkjL8NWbzRJSzReFmODrWKcpVWqQkOjls1BSsqamvHWWNUkuWagXxCN9vjD-w42rhJ1f'
					},
					{
						src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIu6dAvzS3DHRepjpNgmkCjPQqcNrOKvMDu6zv_nvp0VkqLoJtmmbKRk3Qq1OHf-2AIIfvxi7ZYolzdFwylwKrWqILaCCeCucNDnbZ-bQC8VnF64fnQLEWk30SjyABlKH66amGU_Y5ziyywEtRE2pfynfHrKJU0ge6S6Uuap76CwlOruQf2PrfJra62bR3p6_4IVZwpiUIiPEYy3Z4VIQlKSTvSKgk9RavDEmfDZbrqsV78hlVD80CTkPmgN9OSc0OOHguP4CF-miM'
					},
					{
						src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4MTNFYauIJZOr2TXRIz30t4e52_QALIUl_-vZCByYokN31zo2KIjpGkoW5gUsYCV_7Q7no-FJou55qZN6EUWLy5ChfkHbCaEiNQM64VoMDWz33IBnLUVr2LjVXv-Q0KNtLcqz2N5azR66b1gwidrIuecd9g_HCDp-H6DAO7UMNfH7w2ShpU3Yv39M3TmvZVMddnZ4P3yTudpT64YVsPj6n0yvVHsjhRsu1yFUw-jobQZduPTYBFluitfdImOxF3KO5fq2o90s3PXe'
					}
				]
			}
		},
		methods: {
			selectAvatar(index) {
				this.selectedAvatar = index
			},
			startJourney() {
				if (!this.babyName.trim()) {
					uni.showToast({ title: '请输入宝贝的名字', icon: 'none' })
					return
				}
				this.showSuccess = true
				setTimeout(() => {
					uni.navigateTo({ url: '/pages/star-jar/star-jar' })
				}, 1500)
			}
		}
	}
</script>

<style>
	.page {
		min-height: 100vh;
		background: #faf9f9;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 20px;
		position: relative;
		overflow: hidden;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}
	.bg-blur {
		position: absolute;
		border-radius: 50%;
		filter: blur(60px);
		pointer-events: none;
	}
	.top-left {
		top: -80px;
		left: -80px;
		width: 256px;
		height: 256px;
		background: rgba(255, 225, 115, 0.3);
	}
	.bottom-right {
		bottom: -80px;
		right: -80px;
		width: 320px;
		height: 320px;
		background: rgba(255, 183, 132, 0.2);
	}
	.floating-star {
		position: absolute;
		animation: float 6s ease-in-out infinite;
		font-size: 40px;
	}
	.star-1 { top: 40px; right: 40px; animation-delay: 0s; }
	.star-2 { bottom: 160px; left: 40px; animation-delay: 2s; font-size: 32px; }
	@keyframes float {
		0%, 100% { transform: translateY(0) rotate(0deg); }
		50% { transform: translateY(-20px) rotate(10deg); }
	}
	.main-container {
		width: 100%;
		max-width: 480px;
		z-index: 10;
		display: flex;
		flex-direction: column;
		gap: 40px;
		padding-top: 60px;
	}
	.header { text-align: center; display: flex; flex-direction: column; gap: 8px; }
	.title {
		font-size: 26px;
		font-weight: 700;
		color: #1a1c1c;
		letter-spacing: -0.02em;
	}
	.subtitle {
		font-size: 16px;
		color: #4d4633;
		opacity: 0.8;
	}
	.glass-card {
		background: rgba(255, 255, 255, 0.4);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 1.5px solid rgba(255, 255, 255, 0.6);
		border-radius: 1rem;
		padding: 24px;
		box-shadow: 0 10px 30px -5px rgba(255, 132, 0, 0.1);
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	.label {
		font-size: 14px;
		font-weight: 700;
		letter-spacing: 0.05em;
		color: #48473a;
		display: block;
	}
	.avatar-section { display: flex; flex-direction: column; gap: 12px; }
	.avatar-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 8px 0;
	}
	.avatar-item {
		width: 64px;
		height: 64px;
		border-radius: 50%;
		border: 4px solid transparent;
		overflow: hidden;
		background: #f4f3f3;
		transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	.avatar-item.active {
		border-color: #705d00;
		transform: scale(1.1);
	}
	.avatar-img { width: 100%; height: 100%; }
	.upload-btn {
		width: 64px;
		height: 64px;
		border-radius: 50%;
		border: 2px dashed #d0c6ad;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.upload-icon { font-size: 32px; color: #d0c6ad; }
	.name-section { display: flex; flex-direction: column; gap: 12px; }
	.input-wrap {
		position: relative;
		display: flex;
		align-items: center;
	}
	.name-input {
		width: 100%;
		height: 56px;
		padding: 0 24px;
		background: #ffffff;
		border: 2px solid #e3e2e2;
		border-radius: 12px;
		font-size: 18px;
		color: #1a1c1c;
		box-sizing: border-box;
	}
	.edit-icon {
		position: absolute;
		right: 24px;
		font-size: 20px;
		color: #d0c6ad;
		pointer-events: none;
	}
	.terms {
		text-align: center;
		font-size: 12px;
		color: #4d4633;
		opacity: 0.6;
	}
	.terms-link { text-decoration: underline; }
	.footer-action { padding-top: 24px; }
	.squishy-btn {
		width: 100%;
		height: 56px;
		background: #ffd93d;
		color: #725e00;
		font-size: 24px;
		font-weight: 700;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		box-shadow: 0 4px 0px #b08d00;
		transition: all 0.1s ease;
		border: none;
		padding: 0;
		line-height: 56px;
	}
	.squishy-btn:active {
		transform: translateY(2px);
		box-shadow: 0 2px 0px #b08d00;
	}
	.btn-icon { font-size: 24px; }
	.overlay {
		position: fixed;
		inset: 0;
		z-index: 50;
		display: flex;
		align-items: center;
		justify-content: center;
		pointer-events: none;
		opacity: 0;
		transition: opacity 0.5s;
	}
	.overlay.show { opacity: 1; }
	.success-card {
		background: #ffffff;
		padding: 40px;
		border-radius: 1rem;
		box-shadow: 0 10px 30px -5px rgba(255, 132, 0, 0.1);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 24px;
		transform: scale(0.9);
		transition: transform 0.5s;
	}
	.success-card.scale { transform: scale(1); }
	.success-icon {
		width: 80px;
		height: 80px;
		background: #ffd93d;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 48px;
	}
	.success-text {
		font-size: 24px;
		font-weight: 700;
		color: #1a1c1c;
	}
</style>
