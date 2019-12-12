document.addEventListener('keyup', (e) => {
  if (e.code === 'keyA') {
    analytics.track("Key Pressed", {
      key: e.code
    })
    analytics.identify("some user", {
      firstName: 'jackson',
      lastName: 'oppenheim'
    })
  }
});

