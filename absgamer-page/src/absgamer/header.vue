<template>
  <Header class="header">
    <div class="header-content">
      <div>
        <a href="" class="header-logo">
          <img src="../assets/images/logo.svg" alt="logo.svg">
        </a>
      </div>
      <div class="header-menu">
        <div class="d-flex">
          <div class="header-search">
            <div class="position-relative">
              <form method="get">
                <label class="header-label">
                  <input type="text" class="serach-input" placeholder="Search">
                  <img
                    src="../assets/images/search-shortcut-hint.svg"
                    alt="search-shortcut-hint.svg" class="serarch-img">
                </label>
              </form>
            </div>
          </div>
          <ul>
            <li><a href="" class="navlink">模拟经营</a></li>
            <li><a href="" class="navlink">策略</a></li>
            <li><a href="" class="navlink">moba</a></li>
          </ul>
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
      alert('sadfasd')
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
.search-img
  margin-right 8px
  border-style  none
.navlink
  color rgba(255, 255, 255, 0.75)
  padding-right 8px
  padding-left 8px
</style>


