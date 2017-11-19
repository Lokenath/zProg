function ListNode(data) {
    this.data = data;
    this.next = null;
}
function SinglyList() {
    this._length = 0;
    this.head = null;
}
SinglyList.prototype.add = function(value) {
    var ListNode = new ListNode(value),
        currentListNode = this.head;
 
    // 1st use-case: an empty list 
    if (!currentListNode) {
        this.head = ListNode;
        this._length++;
         
        return ListNode;
    }
 
    // 2nd use-case: a non-empty list
    while (currentListNode.next) {
        currentListNode = currentListNode.next;
    }
 
    currentListNode.next = ListNode;
 
    this._length++;
     
    return ListNode;
};
SinglyList.prototype.searchListNodeAt = function(position) {
    var currentListNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Failure: non-existent ListNode in this list.'};
 
    // 1st use-case: an invalid position 
    if (length === 0 || position < 1 || position > length) {
        throw new Error(message.failure);
    }
 
    // 2nd use-case: a valid position 
    while (count < position) {
        currentListNode = currentListNode.next;
        count++;
    }
 
    return currentListNode;
};
SinglyList.prototype.remove = function(position) {
    var currentListNode = this.head,
        length = this._length,
        count = 0,
        message = {failure: 'Failure: non-existent ListNode in this list.'},
        beforeListNodeToDelete = null,
        ListNodeToDelete = null,
        deletedListNode = null;
 
    // 1st use-case: an invalid position
    if (position < 0 || position > length) {
        throw new Error(message.failure);
    }
 
    // 2nd use-case: the first ListNode is removed
    if (position === 1) {
        this.head = currentListNode.next;
        deletedListNode = currentListNode;
        currentListNode = null;
        this._length--;
         
        return deletedListNode;
    }
 
    // 3rd use-case: any other ListNode is removed
    while (count < position) {
        beforeListNodeToDelete = currentListNode;
        ListNodeToDelete = currentListNode.next;
        count++;
    }
 
    beforeListNodeToDelete.next = ListNodeToDelete.next;
    deletedListNode = ListNodeToDelete;
    ListNodeToDelete = null;
    this._length--;
 
    return deletedListNode;
};

SinglyList.prototype.reverse = function() {
    var prev = null;
    var current = this.head;
    var next = null;
    while (current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    this.head = prev;
}