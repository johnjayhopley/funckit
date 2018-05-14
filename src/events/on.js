const on = (selector, eventTypes, callback) => {
  if (typeof selector !== 'string') {
    throw new Error(
      `Funckit on method requires aurgument one to be a 
       valid string selector `,
    );
  }

  this.elements = document.querySelectorAll(selector);

  if (!Array.isArray(eventTypes)) {
    this.eventTypes = [eventTypes];
  } else {
    this.eventTypes = eventTypes;
  }

  this.elements.forEach((element) => {
    this.eventTypes.forEach((eventType) => {
      element.addEventListener(eventType, (event) => {
        callback(event);
      });
    });
  });
};

export default on;
