import Vue from 'vue'

export const state = () => ({
  boards: [],
})

export const mutations = {
  loadBoard(state, board) {
    state.boards.push(board)
  },
  addBoard(state, board) {
    if(!board || !board.id || !board.title || !board.icon || !board.filter) {
      console.log("Try to add invalid board: " + JSON.stringify(board))
      return false
    }

    state.boards.push(board)
    this.$localStore.setBoard(board)
  },
  editBoard(state, board) {
    let index = state.boards.findIndex(r => r.id === board.id)
    if(index === -1) {
      console.log("Try to edit unknown board: " + JSON.stringify(board))
      return false
    }

    Vue.set(state.boards, index, board)
    this.$localStore.setBoard(board)
  },
  deleteBoard(state, boardId) {
    let index = state.boards.findIndex(r => r.id === boardId)
    state.boards.splice(index, 1)

    this.$localStore.removeBoard(boardId)
  },
  clearBoards(state){
    state.boards = []
    this.$localStore.clearBoards()
  },
}

export const getters = {
  getBoardById(state, id) {
    return state.boards.filter(n => n.id === id)[0]
  },
  getAvailableTags(state) {
    let tagMap = {}
    for(let board of state.boards) {
      if(board.filter.tags) {
        for(let curTag of Object.keys(board.filter.tags)) {
          tagMap[curTag] = true
        }
      }
    }

    return Object.keys(tagMap).sort()
  }
}

export const actions = {
  init(ctx) {
    this.$localStore.getBoards()
      .then(boards => {
        for(let board of boards) {
          ctx.commit('loadBoard', board)
        }
      })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
