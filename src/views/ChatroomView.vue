<template>
  <div class="container">
    <NavBar/>
    <NewChatForm/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import getUser from "@/composables/getUser";
import {watch} from "vue";
import {useRouter} from "vue-router";
import NewChatForm from "@/components/NewChatForm";

export default {
  name: "ChatroomView",
  components: {NewChatForm, NavBar},
  setup() {
    const {user} = getUser()
    const router = useRouter()
    watch(user, () => {
      if (!user.value) {
        router.push({name: 'WelcomeView'})
      }
    })
  }
}
</script>

<style scoped>

</style>
