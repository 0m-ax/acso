"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get('/wp-embed/:jid', function (req, res) {
    res.send("\n    <!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\"\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">\n    <html>\n    <style>\n        html,body {\n            margin:0px;\n        }\n        .wrapper         {width:100%; height:100%;}\n        .h_iframe        {position:relative; padding-bottom:56.25%;}\n        .h_iframe iframe {position:absolute;top:0;left:0; width:100%; height:100%; }\n    </style>\n    <body>\n        <div class=\"wrapper\">\n            <div class=\"h_iframe\">\n                <iframe src=\"https://app.iroam.website/iRoam/jobs/" + req.params.jid + "/" + req.params.jid + ".html\" frameborder=\"0\" allowfullscreen></iframe>\n            </div>\n        </div> \n    </body> \n    </html>");
});
app.listen(8080);
//# sourceMappingURL=index.js.map