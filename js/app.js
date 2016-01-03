var inputObj,
    encObj,
    decObj;

//Prototype function to getBytes from the string
String.prototype.getBytes = function () {
  var bytes = [];
  for (var i = 0; i < this.length; ++i) {
    bytes.push(this.charCodeAt(i));
  }
  return bytes;
};

//Utility function to convert base64 array to string
function baseToString(array) {
  return String.fromCharCode.apply(String, array);
}


function onInputKeyUp(){

    var val = inputObj.value;
    var encStr = encode(val);
    encObj.innerHTML = encStr;

    //Decoding should be done only if string is a multiple of 4
    //Else it is not a valid base64
    if(val.length%4 == 0){
      var decStr = decode(val);
      decObj.innerHTML = decStr;
    }
}

function encode(val){
  return base64js.fromByteArray(val.getBytes());
}

function decode(val){
  return baseToString(base64js.toByteArray(val));
}

//Self invoking function to initiate event and initialise objects
(function(){
  inputObj = document.getElementById("inp");
  encObj = document.getElementById("encoded");
  decObj = document.getElementById("decoded");

  inputObj.addEventListener("keyup",onInputKeyUp);

})();
