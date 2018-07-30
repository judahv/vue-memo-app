<template>
  <div v-if="items.length <= 0" class="nomatch">
    <p>メモはありません</p>
  </div>
  <div v-else class="list">
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.memo }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MemoList',
  props: {
    items: {
      type: Array,
      default: [],// 配列の中身　id:Number（id番号） memo:String（メモ中身）
      required: true,
    }
  },
};
</script>

<style lang="scss" scoped>
.nomatch {
  padding: 10px;
  text-align: center;
}

.list li {
  display: flex;
  padding: 5px;
  border-bottom: 1px solid #eee;
  line-height: 20px;
  white-space: pre;
}
</style>
