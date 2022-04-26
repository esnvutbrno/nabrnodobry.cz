export const state = () => ({
  current: 'default'
})

export const mutations = {
  change(state, theme) {
    state.current = theme
  }
}
