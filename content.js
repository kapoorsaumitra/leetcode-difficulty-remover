function removeDifficultyIndicators() {
    const difficultyClasses = [
      'text-difficulty-easy',
      'text-difficulty-medium',
      'text-difficulty-hard'
    ];
    
    difficultyClasses.forEach(className => {
      const elements = document.querySelectorAll(`.${className}`);
      elements.forEach(element => {
        if (element.tagName.toLowerCase() === 'div') {
          element.remove();
        } else {
          element.style.display = 'none';
        }
      });
    });
  }
  
  removeDifficultyIndicators();
  
  const observer = new MutationObserver(removeDifficultyIndicators);
  observer.observe(document.body, { childList: true, subtree: true });