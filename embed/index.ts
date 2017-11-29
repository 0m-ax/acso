import * as express from "express";
import {html}  from 'lit-html'
const app = express()
app.get('/wp-embed/:jid',(req,res)=>{
    res.send(`
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN""http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html>
    <style>
        html,body {
            margin:0px;
        }
        .wrapper         {width:100%; height:100%;}
        .h_iframe        {position:relative; padding-bottom:56.25%;}
        .h_iframe iframe {position:absolute;top:0;left:0; width:100%; height:100%; }
    </style>
    <body>
        <div class="wrapper">
            <div class="h_iframe">
                <iframe src="https://app.iroam.website/iRoam/jobs/${req.params.jid}/${req.params.jid}.html" frameborder="0" allowfullscreen></iframe>
            </div>
        </div> 
    </body> 
    </html>`)
})
app.listen(80)