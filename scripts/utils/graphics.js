/* 
interpolateColor takes two colors in hexadecimal format (color1 and color2), and a factor between 0 and 1. 
It returns a color that is the intermediate color between the two input colors, based on the factor.
*/

function interpolateColor(color1, color2, factor) {
    // Convert hex colors to integers by stripping the '#' and parsing the rest as base 16 (hex)
    let c1 = parseInt(color1.slice(1), 16),
        c2 = parseInt(color2.slice(1), 16);
  
    // Extract the red, green, and blue components from both colors
    let r1 = (c1 >> 16) & 255, g1 = (c1 >> 8) & 255, b1 = c1 & 255; // color1 (r, g, b)
    let r2 = (c2 >> 16) & 255, g2 = (c2 >> 8) & 255, b2 = c2 & 255; // color2 (r, g, b)
  
    // Calculate the interpolated color by blending the RGB components
    let r = Math.round(r1 + (r2 - r1) * factor), // Interpolated red value
        g = Math.round(g1 + (g2 - g1) * factor), // Interpolated green value
        b = Math.round(b1 + (b2 - b1) * factor); // Interpolated blue value
  
    // Return the resulting color as an RGB string
    return `rgb(${r},${g},${b})`;
  }


/*
The function calculates the number of steps based on the duration to determine how many updates should happen over time.
 */
export function animateColorChange(fromColor, toColor, duration) {
    // Convert the start and end colors from hex to RGB values (helper function)
    let startColor = fromColor;
    let endColor = toColor;
  
    // Calculate the total steps based on the duration (e.g., how smooth/long the transition should be)
    const steps = 60 * duration / 1000; // 60 frames per second * duration in seconds
    let step = 0; // Initialize step counter
  
    // Set up the interval to update the color over time
    const interval = setInterval(() => {
      // Calculate the interpolation factor based on the current step and total steps
      let factor = step / steps;
  
      // Use interpolateColor to calculate the intermediate color
      let currentColor = interpolateColor(startColor, endColor, factor);

      // Apply the current color to the background (or any other property you want to change)
      document.body.style.backgroundColor = currentColor;
      
      step++; // Increment the step counter
  
      // If we've reached the end of the animation, clear the interval
      if (step > steps) {
        clearInterval(interval); // Stop the interval when the animation is done
      }
    }, 1000 / 60); // Update at 60 frames per second (60 fps)
  }