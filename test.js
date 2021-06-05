console.log("start")
let app = JSON.parse($request.body);
app.storefrontId = '143380-1,29';
console.log("wait...")
console.log(app)
console.log("done")
sleep(1000).then(()=>{
$done({body:JSON.stringify(app)});
})
console.log("end")
