<template>
  <ModuleApp>
    <ModuleHeader>
      <h1>新規追加</h1>
      <p class="cancel"><router-link to="/">キャンセル</router-link></p>
      <p class="save"><button type="button" @click="save">保存</button></p>
    </ModuleHeader>

    <ModuleMain>
      <textarea v-model="memo" class="edit"></textarea>
    </ModuleMain>

  </ModuleApp>
</template>

<script>
import ModuleApp from "../views/modules/ModuleApp";
import ModuleHeader from "../views/modules/ModuleHeader";
import ModuleMain from "../views/modules/ModuleMain";
export default {
  name: "New",
  components: { ModuleApp, ModuleHeader, ModuleMain },
  data() {
    return {
      memo: "",
    }
  },
  methods: {
    save() {
      console.log("save!!");
      console.log(this.memo);
      console.log(this.$store.getters.list);
      this.$store.dispatch('addMemo', this.memo);
      this.$router.push('/');
    }
  },
};
</script>


