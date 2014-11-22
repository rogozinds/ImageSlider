
Polymer('v-image-slider', {
  currentIndex: 0,
  ready: function() {

  },
  scrollRight: function() {
    var width=200;
    var elems= this.shadowRoot.querySelectorAll('li');
    console.log(this.currentIndex +","+elems.length);
    if (this.currentIndex < elems.length-1) {
      var curElem=elems[this.currentIndex];
      var nextIndex=this.currentIndex+1;
      var curPos=-width*this.currentIndex;
      var nextPos=-1*(width*nextIndex);
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
  },
  scrollLeftEvent: function() {
    var width=200;
    var elems= this.shadowRoot.querySelectorAll('li');
    if (this.currentIndex > 0) {

      var curElem=elems[this.currentIndex];
      var nextIndex=this.currentIndex-1;
      var curPos=-width*this.currentIndex;
      var nextPos=-1*(width*nextIndex);
      var animations=[];
      var animationProps={direction: "alternate",duration: 1000,iterations:1,fill: 'forwards'};
      var animationTransition=[
        {left: curPos+'px'}, { left: nextPos+'px'}
      ];
      for(i=0;i<elems.length;i++) {
        animations.push(new Animation(elems[i],animationTransition,animationProps));
      }
      console.log(curPos +","+nextPos);
      var player=document.timeline.play(new AnimationGroup(animations));
      this.currentIndex--;
    }
  }
});
