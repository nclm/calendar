<template>
	<NcModal size="large"
		:name="t('calendar', 'Availability of rooms')"
		@close="closeRoomAvailability">
		<div class="modal__content__header">
			<h2>{{ t('calendar', 'Find a room') }}</h2>
			<div v-for="room in rooms" :key="room.id">
				<p>{{ room.displayName }}</p>
			</div>
			<div class="busy_button">
				<NcButton @click="findRoomAvailiability">
					{{ t('calendar',' Check room availability') }}
				</NcButton>
			</div>
		</div>
	</NcModal>
</template>
<script>
import { NcModal, NcButton } from '@nextcloud/vue'
export default {
	name: 'RoomAvailability',
	components: {
		NcModal,
		NcButton,
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
		findRoomAvailiability() {
			//
		},
	},
}
</script>
<style scoped lang="scss">

</style>
