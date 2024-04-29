/**
 * @copyright Copyright (c) 2020 Georg Ehrke
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
 * but WITHOUT ANY WARRANTY without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

import { defineStore } from 'pinia'

export default defineStore('davRestrictions', {
	state: () => {
		return {
			minimumDate: '1970-01-01T00:00:00Z',
			maximumDate: '2037-12-31T23:59:59Z',
		}
	},
	actions: {
		loadDavRestrictionsFromServer({ minimumDate, maximumDate }) {
			this.minimumDate = minimumDate
			this.maximumDate = maximumDate
		},
	},
})
