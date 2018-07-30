<template>
  <footer id="footer">
  <slot />
  </footer>
</template>

<style lang="scss" scoped>

#footer {
  position: relative;
  width: 100%;
  height: 35px;
  border-top: 1px solid #eee;
}

// 新規追加ボタン
.new {
  position: absolute;
  top: 3px;
  right: 5px;
  a {
    display: inline-block;
    padding: 5px;
    color: #ccc;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
