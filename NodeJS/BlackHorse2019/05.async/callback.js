function getMsg(callback) {
    setTimeout(() => {
        callback({
            msg:'hello!'
        })
    }, 2000);
}

getMsg((obj) => {
    console.log(obj);
})