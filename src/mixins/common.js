export default {
  data() {
    return {
      timer: null,
      timeOut: 60,
      firstSend: true
    }
  },
  methods: {
    timeRun() {
      clearInterval(this.timer)
      this.timer = null
      this.timeOut = 60
      this.firstSend = false
      this.timer = setInterval(() => {
        if (this.timeOut <= 0) {
          this.timeOut = 60
          clearInterval(this.timer)
          this.timer = null
        } else {
          --this.timeOut
        }
      }, 1000)
    },
    relaunch(path) {
      this.$router.go(-history.length)
      this.$router.replace(path)
    }
  },
  beforeDestroy() {
    clearInterval(this.timer)
    this.timer = null
  }
}
