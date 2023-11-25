//var MyInfo = {yourName: "Anwar", village: 'lakshmipur', motherName: "khadija begum", phoneNo: "012345556"};

//console.log(MyInfo.motherName);

//var NewPro = MyInfo["phoneNo"];
//console.log(NewPro);

function MyInfo(yourName,village,phoneNo,MotherName){
    this.yourName = yourName;
    this.MotherName = MotherName;
    this.phoneNo = phoneNo;
    this.village = village;
}
var NewObj = new MyInfo("Anwar", "khadija begum", "0220209029", "lakshmipur" );
console.log(NewObj);

var num =70;
var MyCondition = (num < 40) ? "tumi amar theke onek boro hoye geso": "ami tomar theke onek boro hioye gesi";
console.log(MyCondition);
