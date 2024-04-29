/**
 * @copyright Copyright (c) 2019 Team Popcorn <teampopcornberlin@gmail.com>
 *
 * @copyright Copyright (c) 2020 Georg Ehrke
 *
 * @author Team Popcorn <teampopcornberlin@gmail.com>
 *
 * @author Georg Ehrke <oc.list@georgehrke.com>
 *
 * @author Grigory Vodyanov <scratchx@gmx.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
import { IMPORT_STAGE_DEFAULT } from '../models/consts.js'
import { defineStore } from 'pinia'

export default defineStore('importState', {
	state: () => {
		return {
			total: 0,
			accepted: 0,
			denied: 0,
			stage: IMPORT_STAGE_DEFAULT,
		}
	},
	actions: {
		/**
		 * Reset to the default state
		 */
		resetState() {
			this.total = 0
			this.accepted = 0
			this.denied = 0
			this.stage = IMPORT_STAGE_DEFAULT
		},
	},
})
