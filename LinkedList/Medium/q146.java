import java.util.*;

class q146 {

    class Node {
        int key;
        int value;

        Node(int key, int value) {
            this.key = key;
            this.value = value;
        }
    }

    int capacity;
    LinkedList<Node> list = new LinkedList<>();

    public LRUCache(int capacity) {
        this.capacity = capacity;
    }

    public int get(int key) {

        Iterator<Node> it = list.iterator();

        while (it.hasNext()) {
            Node node = it.next();

            if (node.key == key) {
                it.remove();
                list.addLast(node);
                return node.value;
            }
        }

        return -1;
    }

    public void put(int key, int value) {

        Iterator<Node> it = list.iterator();

        while (it.hasNext()) {
            Node node = it.next();

            if (node.key == key) {
                it.remove();
                node.value = value;
                list.addLast(node);
                return;
            }
        }

        if (list.size() == capacity) {
            list.removeFirst();
        }

        list.addLast(new Node(key, value));
    }

    public void display() {
        for (Node node : list) {
            System.out.print("(" + node.key + "," + node.value + ") ");
        }
        System.out.println();
    }
}