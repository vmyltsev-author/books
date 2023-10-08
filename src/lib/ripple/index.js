import { css } from 'lit';

export class Ripple {
  /**
   * Apply to the target of event ripple effect.
   *
   * @param {MouseEvent} event.
   */
  static handler = event => {
    const element = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(element.clientWidth, element.clientHeight);
    const radius = diameter / 2;

    circle.style.width = `${diameter}px`;
    circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (element.offsetLeft + radius)}px`;
    circle.style.top = `${event.clientY - (element.offsetTop + radius)}px`;
    circle.classList.add('ripple');

    // Check if ripple already exists and remove it
    const ripple = element.querySelector('span.ripple');
    if (ripple) {
      ripple.remove();
    }

    // Apply base styles
    element.classList.add('rippled');

    element.appendChild(circle);
  };

  static styles = css`
    .rippled {
      position: relative;
      overflow: hidden;
    }

    span.ripple {
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      background-color: rgba(255, 255, 255, 0.7);
      animation: ripple 500ms ease-in;
    }

    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
}
