Polymer('simple-image-slider', {
  currentIndex: 0,
  elems: null,
  nImages: 0,
  created: function() {
      var DEFAULT_WIDTH=200;
      var DEFAULT_HEIGHT=200;
          this.images = [];
          //if widht is not null nor undefined
          if(!this.width) {
            this.width=DEFAULT_WIDTH;
          }
          //if height is not null nor undefined
          if(!this.height) {
            this.height=DEFAULT_HEIGHT;
          }
  },
  ready: function() {
    this.elems= this.shadowRoot.querySelectorAll('li');
    this.nImages=this.shadowRoot.querySelectorAll('li').length;
    var ulElem = this.shadowRoot.querySelectorAll('ul')[0];
    ulElem.style.width=this.width*this.nImages+"px";
  },
  scrollRight: function() {
    this.slideAnimation(this.currentIndex+1);
  },
  scrollLeftEvent: function() {
    this.slideAnimation(this.currentIndex-1);
  },
  //Perform sliding animation of the current image, to the image with index
  //nextIndex. nextIndex can be any integer
  slideAnimation: function(nextIndex) {
    if(nextIndex>=0 && nextIndex<this.nImages) {
      var animations=[];
      var curPos=-this.width*this.currentIndex;
      var nextPos=-1*(this.width*(nextIndex));
      var animationProps={direction: "alternate",duration: 1000,iterations:1,fill: 'forwards'};
      var animationTransition=[
        {left: curPos+'px'}, { left: nextPos+'px'}
      ];
      for(i=0;i<this.nImages;i++) {
        animations.push(new Animation(this.elems[i],animationTransition,animationProps));
      }
      var player=document.timeline.play(new AnimationGroup(animations));
      this.currentIndex=nextIndex;
    }
  }
});
