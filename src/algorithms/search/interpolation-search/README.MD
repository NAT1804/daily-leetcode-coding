# Interpolation Search
## Definition
<p>Interpolation search = improments over binary search best used for "uniformly" distributed data "guesses" where a value might bes based on calculated probe results if probe is incorrect, search area is narrowed, and a new probe is calculated</p>
<p>Runtime complexity: average case O(log(log n))</p>
<p>worst case: O(n) [values increase exponentially]</p>

<code>
probe = low + (high - low) * (value - arr[low]) / (arr[high] - arr[low])
</code>

## Advantages

## Disadvantages