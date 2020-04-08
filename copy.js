let object1 = {
  expanded: false,
  name: "3",
  fields: [
    {
      columnname: "projectName",
      datatype: "String",
      nullable: "true",
    },
    {
      columnname: "artifactId",
      datatype: "String",
      nullable: "true",
    },
    {
      columnname: "groupId",
      datatype: "String",
      nullable: "true",
    },
  ],
};

//let resultShallow = Object.assign(object1);
//console.log(resultShallow);

let resultDeep = JSON.parse(JSON.stringify(object1));
console.log(resultDeep);

console.log(object1);
