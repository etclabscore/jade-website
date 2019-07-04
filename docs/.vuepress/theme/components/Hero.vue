<template>
  <div class="hero relative content-block">
    <div class="hero-image">
      <img
        alt="Ethereum.org Hero Image"
        class="hide-dark"
        width="auto"
        height="auto"
        src="https://raw.githubusercontent.com/etclabscore/jade-media-assets/master/jade-logo-light/jade-logo-light%20(PNG)/256x256.png"
      />
      <img
        alt="Ethereum.org Hero Image - Dark"
        class="show-dark"
        width="auto"
        height="auto"
        src="https://raw.githubusercontent.com/etclabscore/jade-media-assets/master/jade-logo-dark/jade-logo-dark%20(PNG)/256x256.png"
      />
    </div>
  </div>
</template>

<style lang="stylus" scoped>
@require '../styles/config';

.hero-image {
  width: 70vw;
  padding-bottom: 5vh;
  max-width: 60vw;
  margin: 0 auto;
}

.hero {
  padding: 2em;
  max-width: 60vw;
  padding-bottom: 15vh;

  img {
    max-width: 100%;
    height: auto !important;
    margin: 0 auto;
    display: block;
    padding-top: 10%;
  }
}

.hero-block {
  position: absolute;

  .header {
    position: absolute;
    margin-left: -1.1em;
  }

  .content {
    padding-top: $lhRegular;
  }

  &.beginners {
    top: 6em;
    left: 8.5em;
  }

  &.learn {
    top: 9em;
    right: 2.5em;
  }

  &.use {
    top: 18em;
    left: 0.5em;
  }

  &.build {
    top: 22em;
    right: 7.5em;
  }
}

@media screen and (max-width: $breakL) {
  .hero {
    margin-top: 1em;
    max-width: 70vw;
  }

  .hero-block {
    &.beginners {
      top: 4em;
      left: 3.5em;
    }

    &.learn {
      top: 6em;
      right: 0em;
    }

    &.use {
      top: 14em;
      left: 0.5em;
    }

    &.build {
      top: 17em;
      right: 3.5em;
    }
  }
}

@media screen and (max-width: $breakS) {
  .hero-image {
    padding-top: 10vh;
    max-width: 50vw;
  }
}
</style>
