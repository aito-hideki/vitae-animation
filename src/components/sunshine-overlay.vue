<template>
  <img
    class="fixed-screen w-screen h-screen object-cover"
    src="/images/noisetop-1.webp"
    loading="lazy"
    sizes="100vw"
    height="981"
    width="1437"
    srcset="/images/noisetop-1.webp"
  >
  <div class="sunshine-ellipse flex flex-center fixed-screen bg-sun mix-blend-overlay">
    <div class="sunshine-ellipse__small-ellipse bg-tomato" />
    <div class="sunshine-ellipse__large-ellipse" />
  </div>
</template>

<style>
.sunshine-ellipse__small-ellipse {
  position: absolute;
  top: calc(38% - 104px);
  width: 433px;
  height: 208px;
  filter: blur(92px);
  opacity: 0.7;
}
.sunshine-ellipse__large-ellipse {
  position: absolute;
  top: calc(38% - 175px);
  width: 990px;
  height: 350px;
  filter: blur(200px);
  opacity: 0.7;
  background-color: #FD6;
}
</style>
