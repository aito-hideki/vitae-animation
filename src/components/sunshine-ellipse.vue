<template>
  <div class="ellipse-sun flex flex-center fixed-screen bg-sun mix-blend-overlay">
    <div class="ellipse-sun__small-ellipse" />
    <div class="ellipse-sun__large-ellipse" />
  </div>
</template>

<style scoped>
.ellipse-sun__wrapper {
  width: 1084px;
  height: 653px;
  margin-top: -30px;
}
.ellipse-sun__small-ellipse {
  position: absolute;
  top: calc(38% - 104px);
  width: 433px;
  height: 208px;
  filter: blur(92px);
  opacity: 0.7;
  background-color: white;
}
.ellipse-sun__large-ellipse {
  position: absolute;
  top: calc(38% - 175px);
  width: 990px;
  height: 350px;
  filter: blur(92px);
  opacity: 0.7;
  background-color: #FD6;
}
</style>
