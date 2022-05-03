import {createClient} from "@/plugins/contentful";
import _ from "lodash";
import slug from "slug";
import index from 'contentful-rich-text-vue-renderer'

export const state = () => ({
  questions: null,
  categories: [],
  categoriesSlugs: [],

  activeCategorySlug: null,
  activeQuestionId: null,
  categoriesSlugsToTitles: {}
})

const findText = (document) => {
  // well.. don't ask :-D
  const rendered = index.render(
    (__, ___, c) => c,
    {props: {document: document}}
  )
  return _.flattenDeep(rendered).map(v => v.trim()).join(' ')
}

export const getters = {
  currentQuestions(state, getters) {
    return state.questions.filter((v) => v.fields.category === getters.activeCategoryTitle)
  },

  activeCategoryTitle(state) {
    return state.categoriesSlugsToTitles[state.activeCategorySlug]
  },
  activeQuestionTitle(state) {
    const q = _.find(state.questions, (q) => q.sys.id === state.activeQuestionId)
    return q ? findText(q.fields.question) : null
  },
}

export const mutations = {
  setQuestions(state, questions) {

    const categories = _.sortBy(Object.keys(_.groupBy(
      questions,
      _.property('fields.category')
    )).map(k => ({
      title: k,
      slug: slug(k),
    })), _.property('title'))
    let slugsToTitle = {};
    const slugs = categories.map(v => (slugsToTitle[v.slug] = v.title, v.slug))

    state.categories = categories
    state.questions = questions
    state.categoriesSlugsToTitles = slugsToTitle
    state.categoriesSlugs = slugs
  },
  setActiveCategorySlug(state, slug) {
    state.activeCategorySlug = slug
  },
  setActiveQuestionId(state, id) {
    state.activeQuestionId = id
  }
}

export const actions = {
  async loadQuestions({commit, state}) {
    const client = createClient()

    const questions = (await client.getEntries({
      content_type: 'faq',
    })).items;

    commit('setQuestions', questions)
  }

}
