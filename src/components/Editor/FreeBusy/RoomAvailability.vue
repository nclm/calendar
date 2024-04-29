<template>
	<NcModal size="large"
		:name="t('calendar', 'Availability of rooms')"
		@close="closeRoomAvailability">
		<div class="modal__content__header">
			<h2>{{ t('calendar', 'Find a room') }}</h2>
			<div v-for="room in rooms" :key="room.id">
				<p>{{ room.name }}</p>
			</div>
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
	computed: {
		rooms() {
			return this.$store.getters.getRoomPrincipals
		},
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
