
Polymer('v-image-slider', {
  currentIndex: 0,
  ready: function() {
    this.addEventListener('scroll-right-action',function(e){
      scrollRight();
    })
  },
  testclick: function() {
    this.fire('scroll-right-action',{msg: "scroll event"});
  },
  scrollRight: function() {
    var width=200;
    var elem =this.shadowRoot.querySelector('li');
    var elems= this.shadowRoot.querySelectorAll('li');
    console.log(elems[1].getAttribute("left"));
    console.log(this.currentIndex);
    var curElem=elems[this.currentIndex];
    var nextIndex=this.currentIndex+1;
    var curPos=-200*this.currentIndex;
    var nextPos=-1*(200*nextIndex);
    var animations=[];
    var animationProps={direction: "alternate",duration: 1000,iterations:1,fill: 'forwards'};
    var animationTransition=[
      {left: curPos+'px'}, { left: nextPos+'px'}
    ];
    for(i=0;i<elems.length;i++) {
      animations.push(new Animation(elems[i],animationTransition,animationProps));
    }
    var player=document.timeline.play(new AnimationGroup(animations));
    this.currentIndex++;
  }
});
