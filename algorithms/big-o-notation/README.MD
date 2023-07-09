# Big O notation
<i>"How code slows as data grows."</i>

## Definition
<ol>
  <li>Describes the performance of an algorithm as the amount of data increases</li>
  <li>Machine independent (# of steps to completion)</li>
  <li>Ignore smaller operation O(n + 1) -> O(n)</li>
</ol>

## Example
<ul>
  <li>O(1)
    <ul>
      <li>constant time</li>
      <li>random access of an element in an array</li>
      <li>inserting at the beginning of linkedlist</li>
    </ul>
  </li>
  <li>O(log n)
    <ul>
      <li>logarithmic time</li>
      <li>binary search</li>
      <li>inserting at the beginning of linkedlist</li>
    </ul>
  </li>
  <li>O(n) 
    <ul>
      <li>linear time</li>
      <li>looping through elements in an array</li>
      <li>searching through a linkedlist</li>
    </ul>
  </li>
  <li>O(nlog(n))
    <ul>
      <li>quasilinear time</li>
      <li>quick sort</li>
      <li>merge sort</li>
      <li>heap sort</li>
    </ul>
  </li>
  <li>O(n^2)
    <ul>
      <li>quadratic time</li>
      <li>insertion sort</li>
      <li>selection sort</li>
      <li>bubble sort</li>
    </ul>
  </li>
</ul>