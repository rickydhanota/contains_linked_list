class Node{
    constructor(val){
        this.value=val;
        this.next=null;
    }
    display(){
        console.log("I am Node", this.value)
    }
}
class ListNode{
    constructor(val){
        var list=this.head
        if(list.val == val){
            return true
        }
        else{
            list = list.next
        }
        return this
    }
}

//The problems solution
// contains(value) {
//     var runner = this.head;
//     while(runner) {
//         if(runner.value == value) {
//             return true
//         }
//         runner = runner.next
//     }
//     return this
// }
