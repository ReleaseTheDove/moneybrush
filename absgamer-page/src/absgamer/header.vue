<template>
  <Header class="header">
    <div class="header-content">
      <div><a href="" class="header-logo"> Absgamer-logo-svg </a></div>
      <div class="header-menu">
        <div class="d-flex">
          <div class="header-search">
            <div class="position-relative">
              <form method="get">
                <label class="header-label">
                  <input type="text" class="serach-input">
                  <img src="https://assets-cdn.github.com/images/search-shortcut-hint.svg" alt="" class="serarch-img">
                </label>
                
              </form>
            </div>
          </div>
        </div>
        <div class="d-flex"></div>
      </div>
    </div>
  </Header>
</template>

<script>
export default {
  methods: {
    search() {

    }
  }
}
</script>

<style lang="stylus" scoped>
.header
  z-index 32
  padding-top 12px
  padding-bottom 12px
  color rgba(255, 255, 255, 0.75)
  background-color #24292e
  font-size 14px
.header-content
  display flex
  padding-right 16px
  padding-left 16px
  justify-content space-between
  max-width 1012px
  margin-right auto
  margin-left auto
.header-logo
  margin -1px 15px -1px 02px
  color #ffffff
  white-space nowrap
.header-menu
  dislp flex
  flex 1 1 auto
  justify-content space-between
.d-flex
  display flex
.header-search
  width 300px
  font-size 13px
  position relative
.position-relative
  position relative
.header-label
  min-height 30px
  font-size inherit
  color #ffffff
  background-color rgba(255, 255, 255, 0.125)
  border 0
  box-shadow none
  width 100%
  max-width 100%
  padding 0
  font-weight 400
  vertical-align middle
  display flex
  position relative
  align-items center
  justify-content space-between
  line-height 20px
  background--webkit-mask-repeat no-repeat
  background-position right 8px center
  border-radius 3px
  outline none
.serach-input
  font-size inherit
  min-height 30px
  color #ffffff
  display table-cell
  width 100%
  padding-top 0
  padding-bottom 0
  background none
  border 0
  box-shadow none
  padding 6px 8px
  line-height 20px
  vertical-align  middle
  border-radius 3px
  outline none
  font-family inherit
  overflow visiable
.search-img
  margin-right 8px
  border-style  none

</style>


