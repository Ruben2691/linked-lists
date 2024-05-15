// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        let newNode = new SinglyLinkedNode(val)
        this.length++
        if(!this.head){
            this.head = newNode
        }else{
        newNode.next = this.head
        this.head = newNode
        }
        return this

        // Write your hypothesis on the time complexity of this method here
        // the time complexity of this is O(1) because it isn't iterating nor
        // it is simply adding a node and just assigning it to the new head and
        // setting pointers
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);
        this.length++
        if (this.head === null) {
            this.head = newNode;
            return this;
        }

        // this start the iteration from the head
        let curr = this.head;
        // this means as long as the next property of the current node isn't null
        // or falsy it will keep iterating
        while (curr.next) {
            // this re assigns the curr variable to the next property(by that i mean node)
            curr = curr.next;
        }
        // this sets the curr nodes next property to the new node
        curr.next = newNode;
        // this returns the updated list
        return this;

        // Write your hypothesis on the time complexity of this method here
        // the time complexity of this is is O(n) because it has to iterate
        // from the head each time to reach the tail every time
    }

    removeFromHead() {

       if(this.head === null){
        return undefined
       }
       // this is storing the head head that will be removed
       let prevHead = this.head
       // this is reassigning the head to the new one(basically the next node)
       this.head = this.head.next
       // then it's decreasing the linked list length
       this.length--
       // then its returning the removed head
       return prevHead
        // Write your hypothesis on the time complexity of this method here
        // this is O(1) because it doesn't have to iterate
        // and it's just reassigning the pointers adn reducing the length
    }

    removeFromTail() {
        // this checks if there is anything is in the linked list
        if(this.head === null){
            // if there isn't it returns undefined
            return undefined
           }
           // this checks if there is one element in the linked list
           if(this.length === 1){
            // if there is then id reduces the length
           this.length--
           // after it sets the head property to null
           return this.head = null
           }
           // this reduces the length of the list
           this.length--
           // these 2 vars point to the head property
           let curr = this.head
           let prev = this.head
           // this condition checks if the next property is truthy
           while(curr.next){
            // this checks if the curr var is looking at the head
            if(curr !== this.head){
                // if it isn't it will set the prev to var to the next
                // node in the list
                prev = prev.next
            }
            // this will move the curr var forward to the to the next node
            curr = curr.next
            // console.log(curr.value, prev.value)
           }
           prev.next = null

           return curr
        // Write your hypothesis on the time complexity of this method here
        // this is an O(n) because it has to iterate through the entire linked list
        // to get to the tail each time to be able to remove it
    }

    peekAtHead() {
        // Return the value of head node
        if(this.head === null){
            return undefined
           }
        return this.head.value

        // Write your hypothesis on the time complexity of this method here
        // this is O(1) time because it is not iterating
        // just keying into the heads value
    }

    print() {
       let curr = this.head
       if(curr === null){
        return
       }
       while(curr){
        console.log(curr.value, '->')
        curr = curr.next

       }
       console.log('NULL')
        // Write your hypothesis on the time complexity of this method here
        // this is also a O(n) because it needs to iterate through each element
        // in the list so it can print each value
    }
}

// linkedList = new SinglyLinkedList();
// linkedList.addToHead('A');
// linkedList.addToTail('B');
// linkedList.addToTail('C');
// linkedList.print()
// linkedList.removeFromTail();
// linkedList.print()
// linkedList.removeFromTail();
// linkedList.print()
// linkedList.removeFromTail();
// linkedList.print()


module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
