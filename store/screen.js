export const state = () => ({
  screenWidth: 0,
  tileWidth: 0
})

export const mutations = {
  initScreenWidth(_state) {
    _state.screenWidth = window.innerWidth
  },
  initTileWidth(_state, width) {
    _state.tileWidth = width
  },
}
