function a() {
    console.log ('This is function a running ');
}

// explicitly invoking the function a 
a();

(function () {
    console.log ("This is IIFE function running...");
})();