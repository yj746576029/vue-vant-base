let vConsole
if (process.env.NODE_ENV === 'production') {
  Promise.all([import(/* webpackChunkName: "VConsole" */ 'vconsole')])
    .then(([vConsoleModule]) => {
      let VConsole = vConsoleModule.default
      vConsole = new VConsole()
    })
}
export default vConsole
