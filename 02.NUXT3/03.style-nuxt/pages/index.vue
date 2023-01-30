<template>
  <div class="global-style">
    <h1>Home-page</h1>
    <p class="home-p">home-hahahahaha</p>
    <p class="home-sass">sass变量的使用</p>
  </div>
</template>
<style scoped lang="scss">
//@use '~/assets/styles/variables.scss' as vb;
  .home-p {
    color: rgb(115, 0, 255);
    font-size: 30px;
  }

  .home-sass {
    color: $fsColor;
    font-size: $fs20;
    @include border();
  }
</style>