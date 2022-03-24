
<script>

import AppHeader from './components/layout/AppHeader.vue';
import AppFooter from './components/layout/AppFooter.vue';
import topnav from './components/layout/AppHeaderTopNav.vue';

	// Including font-awesome here means it's avaialble to all components
import 'font-awesome/css/font-awesome.css'; // TODO: Despite this being imported here, it's only going to be used sparingly.

export default {
	components: {
		AppHeader,
		topnav, // TODO: Move this into AppHeader.vue
		AppFooter
	},
	mounted() {
		$("body").on( "swiperight", function(event){ $(".menu-icon").click(); });
		$(document).foundation();
	},
	
}
</script>

<template>
	<div class="off-canvas-wrapper">
		<div class="off-canvas position-left" id="off-canvas" data-off-canvas>
			<p>Off canvas content goes here</p>
		</div>
		<div id="canvas-content" class="off-canvas-content in-canvas-for-small" data-off-canvas-content>
			<header class="grid-y">
				<div class="cell shrink">
					<div class="grid-container header-content">
						<AppHeader></AppHeader>
					</div>
				</div>
				<div class="cell shrink">
					<div class="grid-container full">
						<div class="top-bar-container" data-sticky-container>
							<div class="sticky" data-sticky data-options="anchor: main; marginTop: 0;">
								<div class="title-bar" data-responsive-toggle="foundation-topbar-items" data-hide-for="medium">
									<button class="menu-icon" type="button" data-toggle="off-canvas"></button>
									<div class="title-bar-title">Menu</div>
								</div>
								<div class="top-bar grid-container">
									<div class="top-bar-left">
										<topnav></topnav>
									</div>
									<div class="top-bar-right">
										<search></search>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			<main id="main" class="cell auto">
				<div class="grid-container collapse full content-area">
					<router-view></router-view>
				</div>
			</main>
			<footer class="cell shrink grid-container">
				<AppFooter></AppFooter>
			</footer>
		</div>
	</div>
</template>

<style lang="scss">
body {
	width: 100%;
	
	.off-canvas-content {
		display: flex;
		min-height: 100vh;
		flex-direction: column;
	}
}

header {
	border-radius: 1em 1em 0 0;
	margin-top: 5px;
	.title-bar {
		display: none;
	}
	.top-bar, .top-bar ul {
		background-color: #e6e6e6;
	}
}

main {
	display: table; /* fixes the height of the main element */
	margin: 0 auto;
	max-width: 75rem;
}

footer {
	background-color: rgba(255, 255, 255, .95);
	border-radius: 0 0 1em 1em;
	margin-bottom: 5px;
}

</style>