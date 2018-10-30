function answer (word){
    let n = word.match(/[a-zA-Z]/g);
    let etc = word.match(/[^a-zA-Z]/g);
    let res = {};

    for(let i= 0; i<n.length; i++){
        if(res[n[i]] > 0){
            res[n[i]] = res[n[i]] + 1;
        }
        else {
            res[n[i]] = 1;
        }
    }

    res.etc = etc.length;
    console.log(res);
}

answer('bubur 888');