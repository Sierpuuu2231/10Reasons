var vsOpts = {
    slides: document.querySelectorAll('.v-slide'),
    list: document.querySelector('.v-slides'),
    duration: 0.3,
    lineHeight: 50
  }
  
  var vSlide = gsap.timeline({
    paused: true,
    repeat: -1
  });
  
  vsOpts.slides.forEach(function(slide, i) {
    // Create a label
    let label = "slide" + i;
    vSlide.add(label);
    
    // Move the whole word
    vSlide.to(vsOpts.list, {
      duration: vsOpts.duration,
      y: i * -1 * vsOpts.lineHeight
    }, label);
    
    // Move each letter
    let letters = new SplitText(slide, {type:"chars"}).chars;
    vSlide.from(letters, {
      duration: vsOpts.duration,
      y: 50,
      stagger: vsOpts.duration / 10
    }, label);
    
    // Add some blank space before the next animation
    vSlide.to({}, {duration: 1});
  })
  vSlide.play();