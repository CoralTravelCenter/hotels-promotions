const BODY = document.body;
let scrollPosition = 0;

export default {
  enable() {
    scrollPosition = window.pageYOffset;
    BODY.style.overflow = 'hidden';
    BODY.style.position = 'fixed';
    BODY.style.top = `-${scrollPosition}px`;
    BODY.style.width = '100%';
  },
  disable() {
    BODY.style.removeProperty('overflow');
    BODY.style.removeProperty('position');
    BODY.style.removeProperty('top');
    BODY.style.removeProperty('width');
    window.scrollTo(0, scrollPosition);
  }
};