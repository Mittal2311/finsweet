const express = require("express");
const next = require("next");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.get("/Home", (req, res) => {
    app.render(req, res, "/Home");
  });
  // server.get("/Offers", (req, res) => {
  //   app.render(req, res, "/Offers");
  // });
  server.get("/CheckOut", (req, res) => {
    app.render(req, res, "/CheckOut");
  });
  server.get("/Login", (req, res) => {
    app.render(req, res, "/Login");
  });
  server.get("/Myorderlist", (req, res) => {
    // app.render(req, res, "/Myorderlist");
    app.render(req, res, "/Myorderlist");
  });
  server.get('/CategoryList/:subcategory',(req,res)=>{
    const subcategory = parseInt(req.params.subcategory.split('-').pop());
    const queryParams = {
      subcategory:subcategory
    } // pass params to URL
    app.render(req,res,'/CategoryList',queryParams);
  });
  server.all("*", (req, res) => {
    return handle (req, res, "/");
  });
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});