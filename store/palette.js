import { randomInt } from '@/util/random'

const PALETTE = [
  ['B97A95', 'F6AE99', 'F2E1C1'],
  ['DEEDF0', 'F4C7AB', 'B2B8A3'],
  ['7B6079', 'A7D0CD', 'FFE9D6'],
  ['E8E9A1', 'E6B566', 'E5707E'],
  ['A6DCEF', 'F2AAAA', 'E36387'],
]

export const state = () => ({
  currPalette: [],
})

export const mutations = {
  init(_state) {
    _state.currPalette = PALETTE[randomInt(0, PALETTE.length - 1)]
  },
}
