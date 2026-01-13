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

        carry = Math.floor(result/10)
        response.next = new ListNode(result % 10);
        response = response.next
    }
    return finalResponse.next;
};
