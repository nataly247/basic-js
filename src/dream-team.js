module.exports = function createDreamTeam(members) {
  let Str = "";
  let newArr = [];
  if(!Array.isArray(members)){
    return false;
  }
  for (let i = 0; i <= members.length; i++) {
    if (typeof (members[i]) == "string") {
      newArr.push(members[i].trim().toUpperCase()[0]);
    }
  }
  Str = newArr.sort().join("");
  return Str;
};
