/**
 * Christmas effects - remove after holidays
 * 1. Falling snowflakes background animation
 * 2. Click to spawn snowflakes
 */
(function() {
  'use strict';

  function init() {
  // Create snowflake container
  const snowContainer = document.createElement('div');
  snowContainer.id = 'snow-container';
  snowContainer.setAttribute('aria-hidden', 'true');
  document.body.appendChild(snowContainer);

  // Inject styles
  const style = document.createElement('style');
  style.textContent = `
    #snow-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 9999;
      overflow: hidden;
    }
    .snowflake {
      position: absolute;
      color: #b8d4e8;
      font-size: 1rem;
      user-select: none;
      pointer-events: none;
      animation: fall linear forwards;
    }
    .snowflake.clicked {
      animation: fadeOut 1.5s ease-out forwards;
    }
    @keyframes fall {
      0% {
        transform: translateY(-10px) rotate(0deg);
        opacity: 1;
      }
      100% {
        transform: translateY(100vh) rotate(360deg);
        opacity: 0.3;
      }
    }
    @keyframes fadeOut {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      100% {
        transform: scale(2);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  const snowflakeChars = ['❄', '❅', '❆', '✻', '✼'];

  // Create a falling snowflake
  function createSnowflake() {
    const snowflake = document.createElement('span');
    snowflake.className = 'snowflake';
    snowflake.textContent = snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)];
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.fontSize = (Math.random() * 0.8 + 0.5) + 'rem';
    snowflake.style.opacity = Math.random() * 0.6 + 0.4;

    const duration = Math.random() * 5 + 8; // 8-13 seconds
    snowflake.style.animationDuration = duration + 's';

    snowContainer.appendChild(snowflake);

    // Remove after animation
    setTimeout(() => snowflake.remove(), duration * 1000);
  }

  // Spawn snowflake on click
  function createClickSnowflake(x, y) {
    const snowflake = document.createElement('span');
    snowflake.className = 'snowflake clicked';
    snowflake.textContent = snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)];
    snowflake.style.left = x + 'px';
    snowflake.style.top = y + 'px';
    snowflake.style.fontSize = '1.5rem';

    snowContainer.appendChild(snowflake);

    setTimeout(() => snowflake.remove(), 1500);
  }

  // Start falling snow - gentle, not too many
  let snowInterval = setInterval(createSnowflake, 400);

  // Create a few initial snowflakes
  for (let i = 0; i < 8; i++) {
    setTimeout(createSnowflake, i * 200);
  }

  // Click handler for spawning snowflakes
  document.addEventListener('click', function(e) {
    // Don't spawn on interactive elements
    if (e.target.closest('a, button, input, textarea, select, [onclick]')) {
      return;
    }
    createClickSnowflake(e.clientX, e.clientY);
  });

  // Reduce snowfall when tab is not visible
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      clearInterval(snowInterval);
    } else {
      snowInterval = setInterval(createSnowflake, 400);
    }
  });
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
