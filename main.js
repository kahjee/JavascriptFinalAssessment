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
const nft_storage = []



// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _id, _eyeColor, _hairColor, _accessory) {
   const NFT = {
      "Name": _name,
      "Identification Number": _id,
      "Eye Color": _eyeColor,
      "Hair Color": _hairColor,
      "Accessory": _accessory
   }
   nft_storage.push(NFT);
   console.log("Minted: " + _name + "with identification number:" + _id);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   for(let i = 0;i < nft_storage.length; i++){
      console.log("The NFTs you currently own are the following:");
      console.log(nft_storage[i]);
   } 
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log("The number of NFTs you have in your storage is: " + nft_storage.length);
}

// call your functions below this line
mintNFT("Harper", "001", "Black", "Brown", "Glasses");
mintNFT("Ringo", "002", "Green", "Blond", "Shades");
mintNFT("Dan", "003", "Blue", "Black", "Gold Watch");
listNFTs();
getTotalSupply();
