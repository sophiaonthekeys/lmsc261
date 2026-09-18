let numFrogs = prompt("How many frogs are jumping in?");
const maxFrogCapacity = 15;
let isPondOverCapacity = numFrogs > maxFrogCapacity;
let messageToPrint = isPondOverCapacity ? "It's too crowded!" : "Come on in!";
print(messageToPrint);