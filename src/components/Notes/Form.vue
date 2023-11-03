<template>
  <form>
    <textarea
        v-model="note.title"
        placeholder="Введите значение"
        class="form"
        required
    ></textarea>
    <TagsList isActive @onItemClick="handleTagClick" :items="getTags"/>
    <button @click="setNotes" class="btn btnPrimary" type="submit">Создать задачу</button>
  </form>
</template>

<script>
import TagsList from "@/components/UI/TagsList";
export default {
  name: "Form",
  components: { TagsList },
  data() {
    return {
      note: {
        id: null,
        title: null,
        tags: []
      },
      notes: null,
      isActive: false
    }
  },
  computed: {
    setNotes() {
      if (this.note.title) {
        this.$store.dispatch('addNotes', this.note)
        this.note.id = null
        this.note.title = ""
        this.note.tags = []
      }
    },
    getNotes() {
      this.notes = this.$store.getters.getNotes
      return this.$store.getters.getNotes
    },
    getTags() {
      return this.$store.getters.getTags
    },
  },
  methods: {
    handleTagClick(tag) {
      if (this.note.tags.length > 0) {
        for (let i = 0; i < this.note.tags.length; i++) {
          if (this.note.tags[i].id === tag.id) {
            this.note.tags.splice(i, 1)
            return
          }
        }
      }
      this.note.tags.push(tag)
    },
  }
}
</script>

<style lang="scss">
.form {
  margin-bottom: 0;
}

</style>