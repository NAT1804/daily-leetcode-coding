# Doubly Linked Lists
## Definition
<p>Linked List stores Nodes in 2 part (data + address)</p>
<p>Nodes are in non-consecutive memory locations. Elements are linked using pointers</p>
<p>Linear data structure</p>
<pre>
                                 Doubly Linked List
Node                             Node                             Node
[address | data | address]  <->  [address | data | address]   <->  [address | data | address]
</pre>
<p>Function</p>
<ul>
  <li>add = offer()</li>
  <li>remove = poll()</li>
  <li>element = peek()</li>
</ul>

## Advantages
<ul>
  <li>Dynamic Data Structure (allocates needed memory while running)</li>
  <li>Insertion and Deletion of Nodes is easy O(1)</li>
  <li>No/Low memory waste</li>
</ul>

## Disadvantages
<ul>
  <li>Greater memory usage (additional pointer)</li>
  <li>No random access of elements (no index [i])</li>
  <li>Accessing/Searching elements is more time consuming. O(n)</li>
</ul>

## Uses
<ul>
  <li>Implement Stacks, Queues</li>
  <li>GPS navigation</li>
  <li>Music playlist</li>
</ul>