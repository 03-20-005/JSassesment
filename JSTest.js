/* 
// Metacrafters - Beginning Javascript
//
// This is a javascript playground for testing your javascript code!
// When you are ready to test, simply right click and select "Run Code"
// to see the result print below. If you have more then one snippet of code,
// you can highlight the code you want to test, and then right click and select "Run Code"
*/

// Enter your code below this line

// Code example
/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = []
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _eyeColor, _shirtype, _bling ) {
   const NFT = {
    "name": _name,
    "eyeColor": _eyeColor,
    "shirtype": _shirtype,
    "bling": _bling
    }
    NFTs.push(NFT);
    console.log("Minted:" + _name);
}
// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
for (let i=0; i < NFTs.length; i++) {
    console.log("\nID: \t\t" + (i+1)); 
    console.log("Name: \t\t" + NFTs[i].name);
    console.log("EyeColor: \t" + NFTs[i].eyeColor);
    console.log("Shirt Type: " + NFTs[i].shirtype);
    console.log("Bling:\t\t " + NFTs[i].bling);
}
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n" + NFTs.length);
}

// call your functions below this line
mintNFT("Carl", "Brown", "Polo", "Diamond Chain");
mintNFT("Justine", "Brown", "Polo", "Diamond Chain");
mintNFT("Pedir", "Brown", "Polo", "Diamond Chain");
mintNFT("Ramal", "Brown", "Polo", "Diamond Chain");
listNFTs();
getTotalSupply();

