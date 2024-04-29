<template>
	<NcModal size="large"
		:name="t('calendar', 'Availability of rooms')"
		@close="closeRoomAvailability">
		<div class="modal__content__header">
			<h2>{{ $t('calendar', 'Find a room') }}</h2>
		</div>
	</NcModal>
</template>
<script>
import { NcModal } from '@nextcloud/vue'
export default {
	name: 'RoomAvailability',
	components: {
		NcModal,
	},
	data() {
		return {
			showRoomAvailabilityModel: false,
		}
	},
	methods: {
		closeRoomAvailability() {
			this.showRoomAvailabilityModel = false
		},
	},
}
</script>
<style scoped lang="scss">

</style>
