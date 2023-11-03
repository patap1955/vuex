import { createStore } from "vuex";
import {updateLocalNotes, getLocalNotes} from "../utils/localStorage"
import { notes, tags } from "../_configs"
export const store = createStore({
    state: {
        note: null,
        tag: null,
        notes : [],
    },
    mutations: {
        addNotes(state, note) {
            state.notes.push(note)
            console.log(note)
        },
        deleteNote(state, id) {
            const index = state.notes.findIndex(item => item.id === Number(id))
            state.notes.splice(index, 1)
        }
    },
    actions: {
        addNotes({ commit, state, getters }, note) {
            let id = null
            if(getters.getNotes.length > 0) {
                const lastNotes = getters.getNotes.at(-1)
                id = lastNotes.id + 1
            }
            const newNote = {
                id: id,
                title: note.title,
                tags:  note.tags,
            }

            commit('addNotes', newNote)
            updateLocalNotes(state.notes);
        },
        deleteNote({ commit, state }, id) {
            commit('deleteNote', id)
            updateLocalNotes(state.notes);
        }
    },
    getters: {
        getNotes(state) {
            if (state.notes.length === 0) {
                const localNotes = getLocalNotes();
                state.notes =
                    localNotes ? localNotes : notes;
            }
            return state.notes;
        },
        getTags() {
            return tags
        },
        getNotesLeght(state) {
            return state.notes.length
        },
    }
})