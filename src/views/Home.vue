<template>
  <ModuleApp>
  
  <ModuleHeader><h1>memo</h1></ModuleHeader>

  <ModuleMain><MemoList :items="list"></MemoList></ModuleMain>

  <ModuleFooter>
    <p class="new"><router-link to="/new">＋</router-link></p>
  </ModuleFooter>

  </ModuleApp>
</template>

<script>
import ModuleApp from "../views/modules/ModuleApp";
import ModuleHeader from "../views/modules/ModuleHeader";
import ModuleMain from "../views/modules/ModuleMain";
import ModuleFooter from "../views/modules/ModuleFooter";
import MemoList from "../components/MemoList";
export default {
  name: "Home",
  components: { ModuleApp, ModuleHeader, ModuleMain, ModuleFooter, MemoList },
  computed: {
    list() {
      return this.$store.getters.list;
    }
  },
  methods: {}
};
</script>
