const wantsTracking = localStorage.getItem("tracking");
console.log(wantsTracking);
const cookieNotif = document.querySelector(".cookie-notification");

// check if user wants tracking
function checkTracking() {
  if (wantsTracking === "yes") {
    return enableTracking();
  }
  if (wantsTracking === "no") {
    return disableTracking();
  }
  cookieNotif.classList.remove("hide");
  waitForAnswer();
}
checkTracking();

// enable
function enableTracking() {
  localStorage.setItem("tracking", "yes");
  !(function() {
    var analytics = (window.analytics = window.analytics || []);
    if (!analytics.initialize)
      if (analytics.invoked)
        window.console &&
          console.error &&
          console.error("Segment snippet included twice.");
      else {
        analytics.invoked = !0;
        analytics.methods = [
          "trackSubmit",
          "trackClick",
          "trackLink",
          "trackForm",
          "pageview",
          "identify",
          "reset",
          "group",
          "track",
          "ready",
          "alias",
          "debug",
          "page",
          "once",
          "off",
          "on"
        ];
        analytics.factory = function(t) {
          return function() {
            var e = Array.prototype.slice.call(arguments);
            e.unshift(t);
            analytics.push(e);
            return analytics;
          };
        };
        for (var t = 0; t < analytics.methods.length; t++) {
          var e = analytics.methods[t];
          analytics[e] = analytics.factory(e);
        }
        analytics.load = function(t, e) {
          var n = document.createElement("script");
          n.type = "text/javascript";
          n.async = !0;
          n.src =
            "https://cdn.segment.com/analytics.js/v1/" +
            t +
            "/analytics.min.js";
          var a = document.getElementsByTagName("script")[0];
          a.parentNode.insertBefore(n, a);
          analytics._loadOptions = e;
        };
        analytics.SNIPPET_VERSION = "4.1.0";
        analytics.load("fx2SlDUrvlDK1uDm6Da9DB7smQyNsMrA");
        analytics.page();
      }
  })();
  return console.log("tracking enabled");
}

// disable
function disableTracking() {
  localStorage.clear();
  localStorage.setItem("tracking", "no");
}

// yes or no?
function waitForAnswer() {
  // if they accept
  document.getElementById("accept").addEventListener("click", e => {
    document.getElementById("cookie-text").innerText =
      "This page will reload in 1.5 seconds to save your preferences";
    setTimeout(() => {
      enableTracking();
      window.location.reload();
    }, 1500);
  });

  // if they don't accept
  document.getElementById("dont-accept").addEventListener("click", e => {
    document.getElementById("cookie-text").innerText =
      "This page will reload in 1.5 seconds to save your preferences";
    setTimeout(() => {
      disableTracking();
      window.location.reload();
    }, 1500);
  });
}
