let node = (prevNode = null, value = 250, nextNode = null) => {
	//default node value
	return {
		prevNode,
		value,
		nextNode,
	};
};

//default object instance
let baseNode = node();

const Linkedlist = () => {
	return {
		prepend: function (value) {
			baseNode = node(null, value, baseNode);
			//set the second node's previous node to the first node in the list
			baseNode.nextNode.prevNode = baseNode;
		},

		append: function (value, node = baseNode) {
			if (node.nextNode == null) {
				node.nextNode = {
					prevNode: node,
					value: value,
					nextNode: null,
				};
				return;
			} else {
				let newNode = node.nextNode;
				this.append(value, newNode);
			}
		},

		size: function (node = baseNode, nodeAmount = 1) {
			if (node.nextNode == null) {
				console.log(nodeAmount);
				return nodeAmount;
			} else {
				nodeAmount++;
				let newNode = node.nextNode;
				this.size(newNode, nodeAmount++);
			}
		},

		head: function () {
			console.log(baseNode);
			return baseNode;
		},

		tail: function (node = baseNode) {
			if (node.nextNode == null) {
				console.log(node);
				return node;
			} else {
				let newNode = node.nextNode;
				this.tail(newNode);
			}
		},

		at: function (index, node = baseNode) {
			if (index == 0) {
				console.log(node);
				return node;
			} else {
				let newNode = node.nextNode;
				this.at(index - 1, newNode);
			}
		},

		pop: function (node = baseNode) {
			if (node.nextNode == null) {
				node.prevNode.nextNode = null;
				console.log(baseNode);
			} else {
				let newNode = node.nextNode;
				this.pop(newNode);
			}
		},

		contains: function (num, node = baseNode) {
			if (node.value == num) {
				console.log(true);
				return true;
			} else {
				if (node.nextNode == null) {
					console.log(false);
					return false;
				}
				let newNode = node.nextNode;
				this.contains(num, newNode);
			}
		},

		find: function (num, index = 0, node = baseNode) {
			if (node.value == num) {
				console.log(index);
				return index;
			} else {
				if (node.nextNode == null) {
					console.log(null);
					return null;
				}
				let newNode = node.nextNode;
				this.find(num, ++index, newNode);
			}
		},

		toString: function (node = baseNode, string = node.value) {
			if (node.nextNode == null) {
				return string;
			}

			let newNode = node.nextNode;
			return (string += " -> ") + this.toString(newNode, newNode.value);
		},
	};
};
