
Polymer('v-image-slider', {
  ready: function() {
    this.addEventListener('scroll-right-action',function(e){
      scrollRight();
    })
  },
  testclick: function() {
    this.fire('scroll-right-action',{msg: "scroll event"});
  },
  scrollRight: function() {
    var elem =this.shadowRoot.querySelector('li');
    var elems= this.shadowRoot.querySelectorAll('li');
    var animations=[];
    for(i=0;i<elems.length;i++) {
      animations.push(new Animation(elems[i], [
        {left: '0px'}, { left: '-200px'}
      ],{direction: "alternate",duration: 1000,iterations:1,fill: 'forwards'}));

    }
    var player=document.timeline.play(new AnimationGroup(animations));
  }
});
