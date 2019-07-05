<template>
  <footer class="footer">
    <ul>
      <li><a href="https://github.com/etclabscore/jade-explorer/" target="_blank">Explorer</a></li>
      <li><a href="https://service-runner.jade.builders" target="_blank">Service Runner</a></li>
      <li><a href="https://github.com/etclabscore/jade" target="_blank">GitHub</a></li>
      <li><a href="https://discord.gg/rsQ4esV" target="_blank">Discord</a></li>
    </ul>
  </footer>
</template>

<style lang="stylus" scoped>
  @require '../styles/config'

  footer
    font-size $fsSmall
    padding 6em 0 2em 10em

    &.home
      margin-left 2em

    ul
      margin 0

      li
        display inline-block
        margin-right 2em

        &:first-child
          padding 0

        &:before
          content ''
          padding 0

        a
          color $subduedColor

          &:hover
            color $accentColor

</style>
