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
							<image
								:src="item.src"
								class="avatar-img"
								mode="widthFix"
							></image>
						</view>
						<view class="upload-btn">
							<text class="upload-icon">📷</text>
						</view>
					</view>
				</view>
				<view class="name-section">
					<text class="label">宝贝的名字</text>
					<view class="input-wrapper">
						<input
							class="name-input"
							:class="{ 'input-error': showError }"
							type="text"
							v-model="babyName"
							placeholder="例如：小星星"
							placeholder-style="color: rgba(208, 198, 173, 0.6)"
						/>
						<text class="input-icon">✏️</text>
					</view>
				</view>
			</view>
			<view class="terms">
				<text class="terms-text">点击下方按钮即表示您同意我们的</text>
				<text class="terms-text"><text class="underline">用户协议</text> 与 <text class="underline">隐私政策</text></text>
			</view>
			<view class="footer">
				<button class="squishy-btn" @tap="startJourney">
					<text>开启成长之旅</text>
					<text class="btn-icon">🚀</text>
				</button>
			</view>
		</view>
		<view class="overlay" :class="{ show: showOverlay }">
			<view class="overlay-card" :class="{ show: showOverlay }">
				<view class="overlay-icon-wrapper">
					<text class="overlay-icon">⭐</text>
				</view>
				<text class="overlay-text">出发啦！</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				babyName: '',
				selectedAvatar: 0,
				showOverlay: false,
				showError: false,
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
					this.showError = true
					setTimeout(() => {
						this.showError = false
					}, 1000)
					return
				}
				this.showOverlay = true
				setTimeout(() => {
					uni.switchTab({ url: '/pages/index/index' })
				}, 1500)
			}
		}
	}
</script>

<style lang="scss">
	.page {
		min-height: 100vh;
		background-color: #faf9f9;
		color: #1a1c1c;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		overflow: hidden;
		padding: 0 20px;
	}
	.bg-blur {
		position: absolute;
		border-radius: 50%;
		filter: blur(60px);
		opacity: 0.3;
		pointer-events: none;
		&.top-left {
			top: -80px;
			left: -80px;
			width: 256px;
			height: 256px;
			background: #ffe173;
		}
		&.bottom-right {
			bottom: -80px;
			right: -80px;
			width: 320px;
			height: 320px;
			background: #ffdcc6;
			opacity: 0.2;
		}
	}
	.floating-star {
		position: absolute;
		font-size: 40px;
		animation: float 6s ease-in-out infinite;
		pointer-events: none;
		&.star-1 {
			top: 40px;
			right: 40px;
			animation-delay: 0s;
		}
		&.star-2 {
			bottom: 160px;
			left: 40px;
			font-size: 32px;
			animation-delay: 2s;
		}
	}
	@keyframes float {
		0%, 100% { transform: translateY(0) rotate(0deg); }
		50% { transform: translateY(-20px) rotate(10deg); }
	}
	.main-container {
		width: 100%;
		max-width: 440px;
		z-index: 10;
		display: flex;
		flex-direction: column;
		gap: 40px;
		padding-top: 40px;
	}
	.header {
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 8px;
		.title {
			font-size: 26px;
			font-weight: 700;
			line-height: 32px;
			letter-spacing: -0.02em;
			color: #1a1c1c;
			font-family: 'Plus Jakarta Sans', 'PingFang SC', sans-serif;
		}
		.subtitle {
			font-size: 16px;
			line-height: 24px;
			font-weight: 500;
			color: #4d4633;
			opacity: 0.8;
			font-family: 'Quicksand', 'PingFang SC', sans-serif;
		}
	}
	.glass-card {
		background: rgba(255, 255, 255, 0.4);
		backdrop-filter: blur(20px);
		-webkit-backdrop-filter: blur(20px);
		border: 1.5px solid rgba(255, 255, 255, 0.6);
		border-radius: 2rem;
		padding: 24px;
		box-shadow: 0 10px 30px -5px rgba(255, 132, 0, 0.1);
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	.label {
		font-size: 14px;
		line-height: 20px;
		letter-spacing: 0.05em;
		font-weight: 700;
		color: #48473a;
		display: block;
		margin-bottom: 12px;
		font-family: 'Quicksand', 'PingFang SC', sans-serif;
	}
	.avatar-section {
		display: flex;
		flex-direction: column;
	}
	.avatar-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.avatar-item {
		width: 64px;
		height: 64px;
		border-radius: 9999px;
		border: 4px solid transparent;
		overflow: hidden;
		background: #f4f3f3;
		transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
		&.active {
			border-color: #705d00;
			transform: scale(1.1);
		}
	}
	.avatar-img {
		width: 100%;
		height: 100%;
	}
	.upload-btn {
		width: 64px;
		height: 64px;
		border-radius: 9999px;
		border: 2px dashed #d0c6ad;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.upload-icon {
		font-size: 32px;
		color: #d0c6ad;
	}
	.name-section {
		display: flex;
		flex-direction: column;
	}
	.input-wrapper {
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
		border-radius: 1rem;
		font-size: 18px;
		line-height: 28px;
		font-weight: 500;
		font-family: 'Quicksand', 'PingFang SC', sans-serif;
		color: #1a1c1c;
		transition: border-color 0.2s;
		&:focus {
			border-color: #944a00;
		}
		&.input-error {
			border-color: #ba1a1a;
		}
	}
	.input-icon {
		position: absolute;
		right: 24px;
		font-size: 18px;
		color: #d0c6ad;
		pointer-events: none;
	}
	.terms {
		text-align: center;
		margin-top: -24px;
	}
	.terms-text {
		font-size: 12px;
		line-height: 16px;
		font-weight: 600;
		color: rgba(77, 70, 51, 0.6);
		display: block;
		font-family: 'Quicksand', 'PingFang SC', sans-serif;
	}
	.underline {
		text-decoration: underline;
	}
	.footer {
		padding-top: 0;
	}
	.squishy-btn {
		width: 100%;
		height: 56px;
		background: #ffd93d;
		color: #725e00;
		font-size: 24px;
		line-height: 30px;
		font-weight: 700;
		border-radius: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		box-shadow: 0 4px 0px #b08d00;
		transition: all 0.1s ease;
		border: none;
		padding: 0;
		font-family: 'Plus Jakarta Sans', 'PingFang SC', sans-serif;
		&:active {
			transform: translateY(2px);
			box-shadow: 0 2px 0px #b08d00;
		}
	}
	.btn-icon {
		font-size: 24px;
	}
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
		&.show {
			opacity: 1;
		}
	}
	.overlay-card {
		background: #ffffff;
		padding: 24px;
		border-radius: 2rem;
		box-shadow: 0 10px 30px -5px rgba(255, 132, 0, 0.1);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 24px;
		transform: scale(0.9);
		transition: transform 0.5s;
		&.show {
			transform: scale(1);
		}
	}
	.overlay-icon-wrapper {
		width: 80px;
		height: 80px;
		background: #ffd93d;
		border-radius: 9999px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.overlay-icon {
		font-size: 48px;
	}
	.overlay-text {
		font-size: 24px;
		line-height: 30px;
		font-weight: 700;
		color: #1a1c1c;
		font-family: 'Plus Jakarta Sans', 'PingFang SC', sans-serif;
	}
</style>
