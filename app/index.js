const express = require('express')
let app = express()
app.use(function(req, res, next) {
    console.log('%s %s %s', req.method, req.url, req.path);
    next();
});
app.get('iRoam/jobs/:jid/:job',(req,res)=>{
    res.redirect(`https://maxc.ams3.digitaloceanspaces.com/jobs/${req.params.jid}/${req.params.jid}.html`)
})
app.listen(80)