
Polymer('v-image-slider', {
  currentIndex: 0,
  nImages: 0,
  sliderWidth: 200,
  created: function() {
          this.images = [];
  },
  ready: function() {
    this.nImages=this.shadowRoot.querySelectorAll('li').length;
    var ulElem = this.shadowRoot.querySelectorAll('ul')[0];
    ulElem.style.width=this.sliderWidth*this.nImages+"px";
  },
  scrollRight: function() {
    var elems= this.shadowRoot.querySelectorAll('li');
    if (this.currentIndex < elems.length-1) {
      var curElem=elems[this.currentIndex];
      var nextIndex=this.currentIndex+1;
      var curPos=-this.sliderWidth*this.currentIndex;
      var nextPos=-1*(this.sliderWidth*nextIndex);
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
    var elems= this.shadowRoot.querySelectorAll('li');
    if (this.currentIndex > 0) {

      var curElem=elems[this.currentIndex];
      var nextIndex=this.currentIndex-1;
      var curPos=-this.sliderWidth*this.currentIndex;
      var nextPos=-1*(this.sliderWidth*nextIndex);
      var animations=[];
      var animationProps={direction: "alternate",duration: 1000,iterations:1,fill: 'forwards'};
      var animationTransition=[
        {left: curPos+'px'}, { left: nextPos+'px'}
      ];
      for(i=0;i<elems.length;i++) {
        animations.push(new Animation(elems[i],animationTransition,animationProps));
      }
      var player=document.timeline.play(new AnimationGroup(animations));
      this.currentIndex--;
    }
  }
});
