$(document).ready(function() {
  var paths = $('path:not(defs path)');

  paths.each(function(i, e) {
    e.style.strokeDasharray = e.style.strokeDashoffset = e.getTotalLength();
  });

  var tl = new TimelineMax();

  tl.add([
    TweenLite.to(paths.eq(0), 1, {strokeDashoffset: 0, delay: 0.0}),
    TweenLite.to(paths.eq(1), 1, {strokeDashoffset: 0, delay: 0.5}),
    TweenLite.to(paths.eq(2), 1, {strokeDashoffset: 0, delay: 0.10}),
    TweenLite.to(paths.eq(3), 1, {strokeDashoffset: 0, delay: 0.15}),
    TweenLite.to(paths.eq(4), 1, {strokeDashoffset: 0, delay: 0.20}),
    TweenLite.to(paths.eq(5), 1, {strokeDashoffset: 0, delay: 0.25}),
    TweenLite.to(paths.eq(6), 1, {strokeDashoffset: 0, delay: 0.30}),
    TweenLite.to(paths.eq(7), 1, {strokeDashoffset: 0, delay: 0.35}),
    TweenLite.to(paths.eq(8), 1, {strokeDashoffset: 0, delay: 0.40}),
    TweenLite.to(paths.eq(9), 1, {strokeDashoffset: 0, delay: 0.45}),
    TweenLite.to(paths.eq(10), 1, {strokeDashoffset: 0, delay: 0.50}),
    TweenLite.to(paths.eq(11), 1, {strokeDashoffset: 0, delay: 0.55}),
    TweenLite.to(paths.eq(12), 1, {strokeDashoffset: 0, delay: 0.60}),
    TweenLite.to(paths.eq(13), 1, {strokeDashoffset: 0, delay: 0.65}),
    TweenLite.to(paths.eq(14), 1, {strokeDashoffset: 0, delay: 0.70}),
    TweenLite.to(paths.eq(15), 1, {strokeDashoffset: 0, delay: 0.75}),
    TweenLite.to(paths.eq(16), 1, {strokeDashoffset: 0, delay: 0.80}),
    TweenLite.to(paths.eq(17), 1, {strokeDashoffset: 0, delay: 0.85}),
    TweenLite.to(paths.eq(18), 1, {strokeDashoffset: 0, delay: 0.90}),
    TweenLite.to(paths.eq(19), 1, {strokeDashoffset: 0, delay: 0.95}),
  ]);
});
