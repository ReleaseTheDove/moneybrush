import '../assets/styles/footer.styl'

export default {
  data() {
    return {
      author: "Simon"
    }
  },
  render() {
    return (
      <div id="footer">
        <div class="footer-content">
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