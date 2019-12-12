document.addEventListener('keyup', (e) => {
  analytics.track("Key Pressed", {
    key: e.code
  })
  analytics.identify("some user", {
    firstName: 'jackson',
    lastName: 'oppenheim'
  })
});

