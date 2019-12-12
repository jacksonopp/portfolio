document.addEventListener('keyup', (e) => {
  console.log(e.code)
  if (e.code === 'KeyA') {
    analytics.track("Key Pressed", {
      key: e.code
    })
    analytics.identify("some user", {
      firstName: 'jackson',
      lastName: 'oppenheim'
    })
  }
});

