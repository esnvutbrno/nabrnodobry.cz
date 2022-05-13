import {createClient} from "@/plugins/contentful";
import {DateTime, Duration} from "@/utils/date";
import _ from "lodash";
import Vue from "vue";

export const state = () => ({
  events: null,
  eventsFlat: null,

  // now: DateTime.fromObject({year: 2022, month: 5, day: 13, hour: 13, minute: 30}).toISO(),
  now: DateTime.now().toISO(),
  startTime: null,

  eventInDetailId: null,
})

export const getters = {
  currentEventIndex(state) {
    const now = DateTime.fromISO(state.now)
    return _.findLastIndex(
      state.events,
      (e, i) => e.fields.when <= now
    )
  },
  currentEvent(state, g) {
    const event = g.currentEventIndex >= 0 ? state.events[g.currentEventIndex] : undefined;
    const now = DateTime.fromISO(state.now)

    if (!event) return;
    if (!event.fields.end) return event;
    if (event.fields.end > now) return event;
  },
  nextEvent(state, g) {
    const next = g.currentEventIndex >= 0 ? state.events[g.currentEventIndex + 1] : null;
    const now = DateTime.fromISO(state.now)
    const start = DateTime.fromISO(state.startTime)

    if (next) return next;
    if (now < start) return state.events[0];
  },
  byDays(s, g) {
    return _.sortBy(
      _.toPairs(
        _.groupBy(
          s.events,
          'fields.day'
        )
      ),
      '0'
    );
  },
  eventInDetail: (state) => {
    return _.find(state.eventsFlat, e => e.sys.id === state.eventInDetailId)
  }
}

export class EventState {
  static UPCOMING = 'upcoming'
  static CURRENT = 'current'
  static FINISHED = 'finished'
}

export const mutations = {
  regroupEvents(state) {
    const now = DateTime.fromISO(state.now)

    let foundCurrent = false;
    state.events.forEach((e, i) => {
      if (e.fields.when < now) {
        // so event time
        if (e.fields.end) {
          if (e.fields.end > now) {
            Vue.set(e.fields, 'state', EventState.CURRENT)
            foundCurrent = true
          } else {
            Vue.set(e.fields, 'state', EventState.FINISHED)
          }
        } else {
          Vue.set(e.fields, 'state', EventState.FINISHED)
        }
      } else {
        Vue.set(e.fields, 'state', EventState.UPCOMING)
      }
    })

    let activeBlock = null;
    state.events = state.events.map(e => {
      const currentEventBlock = e.fields.block;
      if (!currentEventBlock) {
        activeBlock = null;
        return e;
      }
      // current is in block
      if (activeBlock) {
        activeBlock.push(e)
        return;
      } else {
        activeBlock = [e]
        return {
          sys: {id: '_'},
          fields: {
            ...e.fields,

            title: currentEventBlock,
            events: activeBlock,
          }
        };
      }
    }).filter(v => v)

    state.events.forEach(block => {
      if (!block.fields.events) return;
      const eventsInBlock = block.fields.events;

      block.fields.till = eventsInBlock[eventsInBlock.length - 1].fields.till;
      block.fields.state =
        _.some(
          eventsInBlock,
          e => [EventState.CURRENT, EventState.UPCOMING].includes(e.fields.state)
        ) ? EventState.UPCOMING : EventState.FINISHED;

      // reset places
      const allPlaces = _.uniq(_.map(eventsInBlock, _.property('fields.place')).filter(Boolean))
      // console.log('places for block', block.fields.block, ':', allPlaces.map(p => p.fields.title))
      if (allPlaces.length === 1) {
        // single one place, so it's valid fo all events on block
        block.fields.place = allPlaces[0];
        eventsInBlock.forEach(
          e => Vue.set(e.fields, 'place', allPlaces[0])
        )
        // console.log(eventsInBlock)
      } else {
        // multiple or completely unknown
        block.fields.place = null;
      }

      const allVideos = _.uniq(_.map(eventsInBlock, _.property('fields.youtube')).filter(Boolean))
      if (allVideos.length === 1) {
        // single one place, so it's valid fo all events on block
        block.fields.youtube = allVideos[0];
        eventsInBlock.forEach(
          e => Vue.set(e.fields, 'youtube', allVideos[0])
        )
        // console.log(eventsInBlock)
      } else {
        // multiple or completely unknown
        block.fields.youtube = null;
      }
    })
  },
  setEvents(state, events) {
    state.eventsFlat = state.events = events.map((e, i) => {
      const when = DateTime.fromISO(e.fields.when);

      e.fields.when = when;
      e.fields.end = e.fields.length ?
        when.plus(Duration.fromObject({minutes: e.fields.length})) : undefined;

      e.fields.from = when.toFormat('t').replace(':00', '')
      e.fields.till = e.fields.end ? e.fields.end.toFormat('t').replace(':00', '') : '';

      e.fields.day = when.startOf('day').toFormat('D')
      e.fields.dayName = when.startOf('day').toFormat('cccc')
      e.fields.order = i

      return e;
    });
    state.startTime = state.events[0].fields.when.toISO();
  },
  setEventInDetailId(state, id) {
    state.eventInDetailId = id
  }
}

export const actions = {
  async loadEvents({commit, state}) {
    const client = createClient()

    const events = (await client.getEntries({
      content_type: 'event',
      order: 'fields.when',
      // 1 + event -> place -> parent place
      include: 4,
    })).items;

    commit('setEvents', events)
    commit('regroupEvents', events)
  }
}
