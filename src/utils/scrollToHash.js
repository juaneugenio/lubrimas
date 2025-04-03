export const scrollToHash = () => {
  const { hash } = window.location;
  if (hash) {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
};