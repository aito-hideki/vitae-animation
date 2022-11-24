<template>
  <div class="sunshine mix-blend-lighten">
    <video
      class="sunshine__video object-cover"
      autoplay
      loop
      muted
      playsinline
    >
      <source
        src="/videos/light-only-12-transcode.mp4"
        data-wf-ignore="true"
      >
      <source
        src="/videos/light-only-12-transcode.webm"
        data-wf-ignore="true"
      >
    </video>
  </div>
</template>

<style scoped>
.sunshine {
  position: fixed;
  top: -11%;
  left: -10%;
  right: -14.5%;
  bottom: -10%;
}
.sunshine__video {
  width: 100%;
  height: 100%;
  background-image: url('/videos/light-only-12-poster-00001.jpg');
  background-position: center;
  background-size: cover;
}
</style>
