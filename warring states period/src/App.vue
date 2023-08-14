<template>
  <div class="website">
    <div class="main">
      <component :is="currentView" :language="language"></component>
    </div>
    <navigation @pageChanged="changePage" :language="language">test</navigation>
  </div>
</template>

<script>
import navigation from './components/navigation.vue';
import home from './views/home.vue';
import room from './views/room.vue';
import account from './views/account.vue';
import { markRaw } from 'vue';

const Home = markRaw(home);
const Room = markRaw(room);
const Account = markRaw(account);

export default {
  components: {
    navigation,
  },

  data() {
    return {

      // Constant

      functionList: [
        Home,
        Room,
        null,
        Account,
      ],

      pageList: [
        "home",
        "join",
        "blank",
        "account",
      ],

      // Variable

      selectedFunction: 0,

      // theme == 0 means: Dark mode; 
      // theme == 1 means: Light mode; 
      theme: 0,

      language: 'zh',
    }
  },

  computed: {
    currentView() {
      return this.functionList[this.selectedFunction];
    }
  },

  methods: {
    changePage(selectedFunction) {
      this.selectedFunction = selectedFunction;
    }
  }
}
</script>

<style>
.website {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

.main {
  width: 100%;
  height: 86vh;
  margin: 0 auto;
}
</style>