import java.util.ArrayList;
import java.util.List;

/**
 * Represents a node in a singly linked list.
 */
class Node<T> {
    T val;
    Node<T> next;

    Node(T val) {
        this.val = val;
        this.next = null;
    }

    @Override
    public String toString() {
        return "Node {" +
                "val: " + this.val +
                ", next: " + (this.next != null ? this.next.val : null) +
                "}";
    }
}

public class SinglyLinkedList<T> {
    private Node<T> head;
    private Node<T> tail;
    private int length;

    public SinglyLinkedList() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * Adds a new node at the end.
     *
     * O(1) Time
     * @param val The value to be inserted.
     * @return The updated linked list.
     */
    public SinglyLinkedList<T> push(T val) {
        final Node<T> node = new Node<>(val);

        if (this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        
        this.length++;
        return this;
    }

    /**
     * Sets the tail to the node behind it; removes a node at the end.
     *
     * O(n) Time
     * @return The updated linked list.
     */
    public SinglyLinkedList<T> pop() {
        if (this.length == 0) return this;
        
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            Node<T> current = this.head;
            
            while (current.next != tail) {
                current = current.next;
            }
            current.next = null;
            this.tail = current;
        }

        this.length--;
        return this;
    }

    /**
     * Sets the head to the node after it; removes a node from the beginning.
     *
     * O(1) Time
     * @return The updated linked list.
     */
    public SinglyLinkedList<T> shift() {
        if (this.length == 0) return this;

        this.head = this.head.next;

        this.length--;
        if (this.length == 0) this.tail = null;

        return this;
    }

    /**
     * Adds a node to the beginning.
     *
     * O(1) Time
     * @param val The value to be inserted.
     * @return The updated linked list.
     */
    public SinglyLinkedList<T> unshift(T val) {
        final Node<T> node = new Node<>(val);

        if (this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        
        this.length++;
        return this;
    }

    /**
     * Get a node at a certain index.
     *
     * O(n) Time
     * @param index The index of the node to retrieve.
     * @return The node at the given index, or null if the index is out of bounds.
     */
    public Node<T> get(int index) {
        if (index < 0 || index >= this.length) return null;

        Node<T> current = this.head;
        for (int i = 0; i < index; i++) {
            current = current.next;
        }

        return current;
    }

    /**
     * Get head node; the first node.
     *
     * O(1) Time
     * @return The head node.
     */
    public Node<T> getHead() {
        return this.head;
    }

    /**
     * Get tail node; the last node.
     *
     * O(1) Time
     * @return The tail node.
     */
    public Node<T> getTail() {
        return this.tail;
    }

    /**
     * Set a value of a node based on an index.
     *
     * O(n) Time
     * @param val The new value to set.
     * @param index The index of the node to update.
     * @return The updated node, or null if the index is out of bounds.
     */
    public Node<T> set(T val, int index) {
        final Node<T> node = this.get(index);
        if (node != null) node.val = val;
        
        return node;
    }

    /**
     * Add a node at a specific position.
     *
     * O(n) Time
     * @param val The value to be inserted.
     * @param index The index at which to insert the node.
     * @return The updated linked list.
     */
    public SinglyLinkedList<T> insert(T val, int index) {
        if (index < 0 || index > this.length) return null;
        if (index == 0) return this.unshift(val);
        if (index == this.length) return this.push(val);

        final Node<T> newNode = new Node<>(val);
        final Node<T> prev = this.get(index - 1);

        newNode.next = prev.next;
        prev.next = newNode;

        this.length++;
        return this;
    }

    /**
     * Removes a node at a specific position.
     *
     * O(n) Time
     * @param index The index of the node to remove.
     * @return The updated linked list.
     */
    public SinglyLinkedList<T> remove(int index) {
        if (index < 0 || index >= this.length) return null;
        if (index == 0) return this.shift();
        if (index == this.length - 1) return this.pop();

        final Node<T> prev = this.get(index - 1);
        prev.next = prev.next.next;

        this.length--;
        return this;
    }

    /**
     * Flips the list backwards.
     *
     * O(n) Time
     * @return The updated linked list.
     */
    public SinglyLinkedList<T> reverse() {
        Node<T> current = this.head;
        Node<T> prev = null;
        Node<T> next = null;

        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.tail = this.head;
        this.head = prev;

        return this;
    }

    /**
     * Returns all linked list values in an array.
     *
     * O(n) Time
     * @return An array containing all the values in the linked list.
     */
    public List<T> values() {
        List<T> arr = new ArrayList<>();  
        Node<T> current = this.head;

        while (current != null) {
            arr.add(current.val);
            current = current.next;
        }

        return arr;
    }

    @Override
    public String toString() {
        return "SinglyLinkedList: {" +
                "\n  head: " + this.head +
                ",\n  tail: " + this.tail +
                ",\n  length: " + this.length +
                "\n}";
    }
}
