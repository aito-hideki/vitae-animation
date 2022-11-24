<template>
  <div class="overlay-ellipse smaller-ellipse bg-tomato" />
  <div class="overlay-ellipse yellow-ellipse opacity-0" />
  <div class="overlay-ellipse larger-ellipse bg-tomato opacity-0" />
</template>

<style>
.overlay-ellipse {
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 50%;
  mix-blend-mode: overlay;
}
.smaller-ellipse {
  width: 420px;
  height: 200px;
  filter: blur(92px);
}
.yellow-ellipse {
  width: 1150px;
  height: 284px;
  filter: blur(92px);
  background-color: #FFC9AB;
}
.larger-ellipse {
  width: 1084px;
  height: 384px;
  filter: blur(200px);
}
</style>
