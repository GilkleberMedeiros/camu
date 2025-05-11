

self.onmessage = (message) => {
    const parentRect = message.data.parentRect;
    const targetRect = message.data.targetRect;

    const isWithinBounds = (
        targetRect.top >= parentRect.top &&
        targetRect.left >= parentRect.left &&
        targetRect.bottom <= parentRect.bottom &&
        targetRect.right <= parentRect.right
    );

    self.postMessage({ isWithinBounds });
}
