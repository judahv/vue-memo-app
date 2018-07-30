<template>
  <header id="header">
  <slot />
  </header>
</template>

<style lang="scss" scoped>

// キャンセルボタン
.cancel {
  position: absolute;
  top: 11px;
  left: 5px;
  a {
    color: #333;
  }
}

// 保存ボタン
.save {
  position: absolute;
  top: 11px;
  right: 5px;
}

</style>

