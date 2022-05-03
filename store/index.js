export const actions = {
  async nuxtServerInit({dispatch}) {
    await dispatch('events/loadEvents')
  },
}
