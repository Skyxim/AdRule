console.log("start")
let app = JSON.parse($request.body);
app.storefrontId = '143380-1,29';
console.log("wait...")
$done({body:JSON.stringify(app)});
console.log("end")
