const chainMaker = {
  currentChain:[],
  getLength() {
  },
  addLink(value) {
   this.currentChain.push(value);
   return this;
  },
  removeLink(position) {
    const valueOnPosition =  this.currentChain[position-1];
  
    if(valueOnPosition === undefined){
      this.currentChain = [];
      throw Error;
    }

    this.currentChain.splice(position -1,1);
    return  this;
  },
  reverseChain() {
    this.currentChain.reverse();
    return  this;
  },
  finishChain() {
    let finishString = "";
    this.currentChain.forEach((item, index, arr)=>{

      const templeteString=`( ${item} )~~`;
      finishString+=templeteString;
      
    });
    this.currentChain = [];
    return finishString.slice(0,-2);
  }
};

module.exports = chainMaker;
