/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let response = new ListNode();
    let finalResponse = response;

    let carry = 0;
    let result;

    while (l1 || l2 || carry) {
        result = carry;

        if (l1) {
            result += l1.val;
            l1 = l1.next;
        }

        if (l2) {
            result += l2.val;
            l2 = l2.next;
        }

        carry = result / 10 | 0;

        response.next = new ListNode(result % 10);
        response = response.next
    }
    return finalResponse.next;

/* vou testar com esse biggerLength depois
    let biggerLength = l1.length > l2.length ? l1.length : l2.length

    for (let i = 0; i < biggerLength; i++) {
        let v1 = l1[i] || 0;
        let v2 = l2[i] || 0;
        let result = v1 + v2;

        response.push(result%10+carry);

        carry = result / 10 | 0;   
    }

    */
//    return response;
};

