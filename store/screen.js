export const state = () => ({
  screenWidth: 0,
  tileHeight: 300,
  tileWidth: 485,
})

const FOOTER_HEIGHT = 64

export const mutations = {
  init(_state) {
    _state.screenWidth = window.innerWidth
    _state.tileHeight = Math.round((window.innerHeight - FOOTER_HEIGHT) / 3)
    _state.tileWidth = Math.round(_state.tileHeight * 1.618)
  },
}
