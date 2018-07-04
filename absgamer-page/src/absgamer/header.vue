<template>
  <Header class="position-relative">
    <header class="Header f5">
      <div class="d-flex flex-justify-between px-3 container-lg">
        <div class="d-flex flex-justify-between">
          <div class="strange-height">
            <a href="" class="header-logo-invertocat">
              <img src="../assets/images/logo.svg" alt="logo.svg">
            </a>
          </div>
        </div>
        <div class="HeaderMenu d-flex flex-justify-between flex-auto">
          <div class="d-flex">
            <div>
              <div class="header-search position-relative">
                <div class="position-relative">
                  <form method="get" action="/search" accept-charset="UTF-8">
                    <label 
                      class="header-label d-flex position-relative
                        flex-items-center flex-justify-between">
                      <input 
                        type="text" class="form-control header-search-input" 
                        placeholder="Search" @keyup.enter="search">
                      <img
                        src="../assets/images/search-shortcut-hint.svg"
                        alt="search-shortcut-hint.svg" class="mr-2 img">
                    </label>
                  </form>
                </div>
              </div>
            </div>
            <ul class="d-flex pl-2 flex-items-center text-bold list-style-none">
              <li><a href="" class="HeaderNavlink px-2">模拟经营</a></li>
              <li><a href="" class="HeaderNavlink px-2">策略</a></li>
              <li><a href="" class="HeaderNavlink px-2">moba</a></li>
            </ul>
          </div>
          <div class="d-flex"></div>
        </div>
      </div>
    </header>
  </Header>
</template>

<script>
export default {
  methods: {
    search() {
      alert('sadfasd')
    }
  }
}
</script>

<style lang="stylus" scoped>
.Header
  z-index 32
  padding-top 12px
  padding-bottom 12px
  color rgba(255, 255, 255, 0.75)
  background-color #24292e
.container-lg
  max-width 1012px
  margin-right auto
  margin-left auto
.header-logo-invertocat
  margin -1px 15px -1px 02px
  color #ffffff
  white-space nowrap
.header-search
  width 300px
  font-size 13px
.header-label
  min-height 30px
  font-size inherit
  color #ffffff
  background-color rgba(255,255,255,0.125)
  border 0
  box-shadow none
  width 100%
  max-width 100%
  padding 0
  font-weight 400
  vertical-align middle 
.header-search-input
  font-size inherit
  min-height 30px
  color inherit
  display table-cell
  width 100%
  padding-top 0
  padding-bottom 0
  background none
  border 0
  box-shadow none
.HeaderNavlink
  color rgba(255, 255, 255, 0.75)
  display block
.strange-height
  height 32px
</style>


