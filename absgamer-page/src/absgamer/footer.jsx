import '../assets/styles/footer.styl'

export default {
  data() {
    return {
      author: "Simon"
    }
  },
  render() {
    return (
      <div class="footer px-3">
        <div class="d-flex f6 pt-6 pb-2 
          mt-6 position-relative flex-justify-between 
          text-gray border-tray-light border-top">
          <ul class="footer-ul">
          <li class="mr-3">@ 2018 written by Simon Tribbiani.</li>
            <li class="mr-3"><a href="./">About</a></li>
            <li class="mr-3"><a href="./">Help</a></li>
            <li class="mr-3"><a href="./">Func</a></li>
            <li class="mr-3"><a href="./">Ohoho</a></li>
          </ul>
        </div>
        <div class="footer-blank"><span class="light"></span></div>
      </div>
    )
  }
}