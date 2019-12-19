document.addEventListener('keyup', e => {
  console.log("key", e.code)
  if (e.code === 'KeyA') {
    analytics.track("Key Pressed", {
      key: e.code
    })
    analytics.identify("this user pressed 'a'", {
      userName: userName
    })
  }
});

