

const express = require("express");
const app = express();
const PORT = 7777;
const path = require("path");
const hbs = require("hbs");
// / Make everything inside of public/ available to the browser (styles, images, frontend scripts)
app.use(express.static(path.join(__dirname, "public"))); // rock solid syntax
const fs = require("fs");
app.use(express.urlencoded({ extended : false})); // above, add req.body => allow you to parse the posted data





// indicates express where our "views" templates are located
// view is a term part of MVC design pattern... more coming. in a nutshell, a view is a page ; )
app.set("views", path.join(__dirname, "views"));
// indicates express wich view engine this app will use ; )
app.set("view engine", "hbs"); // in this case hbs, there are others ... pug/jade etc.engine !
hbs.registerPartials(path.join(__dirname, "views/partials"));
// what is a view engine ???
// basicaly a way to code HTML++ (loops, conditionals
hbs.registerPartials(path.join(__dirname, "views/partials"));

const data = [
    {
        img : "images/Photos/Brésil/Brésil1.jpg"
        
    },
    {
        img :"images/Photos/Brésil/Brésil2.jpg"
        
    },
    {
        img : "images/Photos/Brésil/Brésil3.jpg"
        
    },
    {
        img : "images/Photos/Brésil/Brésil4.jpg"
        
    },
    {
        img : "images/Photos/Brésil/Brésil5.jpg"
        
    },
    {
        img : "images/Photos/Brésil/Brésil6.jpg"
        
    },
    {
        img : "images/Photos/Brésil/Brésil7.jpg"
        
    },
    {
        img : "images/Photos/Brésil/Brésil8.jpg"
        
    },
    {
        img : "images/Photos/Brésil/Brésil9.jpg"
        
    },
    {
        img : "images/Photos/Brésil/Brésil10.jpg"
        
    },
    {
        img : "images/Photos/Brésil/Brésil11.jpg"
        
    },
    {
        img : "images/Photos/Brésil/Brésil12.jpg"
        
    },
    {
        img : "images/Photos/Brésil/Brésil13.jpg"
        
    },
    {
        img : "images/Photos/Brésil/Brésil14.jpg"
        
    },
    {
        img : "images/Photos/Brésil/Brésil15.jpg"
        
    },
    {
        img : "images/Photos/Brésil/Brésil16.jpg"
        
    },
    {
        img : "images/Photos/Brésil/Brésil17.jpg"
        
    },
    {
        img : "images/Photos/Brésil/Brésil18.jpg"
        
    },
    {
        img : "images/Photos/Brésil/Brésil19.jpg"
        
    },
    {
        img : "images/Photos/Brésil/Brésil20.jpg"
        
    },
    {
        img : "images/Photos/Oman/Oman1.jpg"
    },
    {
        img : "images/Photos/Oman/Oman2.jpg"
    },
    {
        img : "images/Photos/Oman/Oman3.jpg"
    },
    {
        img : "images/Photos/Oman/Oman4.jpg"
    },
    {
        img : "images/Photos/Oman/Oman5.jpg"
    },
    {
        img : "images/Photos/Oman/Oman6.jpg"
    },
    {
        img : "images/Photos/Oman/Oman7.jpg"
    },
    {
        img : "images/Photos/Oman/Oman8.jpg"
    },
    {
        img : "images/Photos/Oman/Oman9.jpg"
    },
    {
        img : "images/Photos/Oman/Oman10.jpg"
    },
    {
        img : "images/Photos/Oman/Oman11.jpg"
    },
    {
        img : "images/Photos/Oman/Oman12.jpg"
    },
    {
        img : "images/Photos/Oman/Oman13.jpg"
    },
    {
        img : "images/Photos/Oman/Oman14.jpg"
    },
    {
        img : "images/Photos/Oman/Oman15.jpg"
    },
    {
        img : "images/Photos/Oman/Oman16.jpg"
    },
    {
        img : "images/Photos/Oman/Oman17.jpg"
    },
    {
        img : "images/Photos/Oman/Oman18.jpg"
    },
    {
        img : "images/Photos/Oman/Oman19.jpg"
    },
    {
        img : "images/Photos/Oman/Oman20.jpg"
    },
    {
        img : "images/Photos/Oman/Oman21.jpg"
    },
    {
        img : "images/Photos/Oman/Oman22.jpg"
    },
    {
        img : "images/Photos/Oman/Oman23.jpg"
    },
    {
        img :"images/Photos/Copenhague/Copenhague1.jpg  "    
    },  
    {
        img :"images/Photos/Copenhague/Copenhague2.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague3.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague4.jpg  "    
    },      
    {
        img :"images/Photos/Copenhague/Copenhague5.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague6.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague7.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague8.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague9.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague10.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague11.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague12.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague13.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague14.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague15.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague16.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague17.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague18.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague19.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague20.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague21.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague22.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague23.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague24.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague25.jpg  "    
    },
    {
        img :"images/Photos/Copenhague/Copenhague26.jpg  "    
    },
    {
        img :"images/Photos/Copenhague/Copenhague27.jpg  "    
    },
    {
        img :"images/Photos/Copenhague/Copenhague28.jpg  "    
    }, 
    {
        img : "images/Photos/Niger/Niger1.jpg"
    },
    {
        img : "images/Photos/Niger/Niger2.jpg"
    },
    {
        img : "images/Photos/Niger/Niger3.jpg"
    },
    {
        img : "images/Photos/Niger/Niger4.jpg"
    },
    {
        img : "images/Photos/Niger/Niger5.jpg"
    },
    {
        img : "images/Photos/Niger/Niger6.jpg"
    },
    {
        img : "images/Photos/Niger/Niger7.jpg"
    },
    {
        img : "images/Photos/Niger/Niger8.jpg"
    },
    {
        img : "images/Photos/Niger/Niger9.jpg"
    },
    {
        img : "images/Photos/Niger/Niger10.jpg"
    },
    {
        img : "images/Photos/Niger/Niger11.jpg"
    },
    {
        img : "images/Photos/Niger/Niger12.jpg"
    },
    {
        img : "images/Photos/Niger/Niger13.jpg"
    },
    {
        img : "images/Photos/Niger/Niger14.jpg"
    },
    {
        img : "images/Photos/Niger/Niger15.jpg"
    },
    {
        img : "images/Photos/Niger/Niger16.jpg"
    },
    {
        img : "images/Photos/Niger/Niger17.jpg"
    },
    {
        img : "images/Photos/Niger/Niger18.jpg"
    },
    {
        img : "images/Photos/Niger/Niger19.jpg"
    },
    {
        img : "images/Photos/Niger/Niger20.jpg"
    },
    {
        img : "images/Photos/Niger/Niger21.jpg"
    },
    {
        img : "images/Photos/Niger/Niger22.jpg"
    },
    {
        img : "images/Photos/Niger/Niger23.jpg"
    },
    {
        img : "images/Photos/Niger/Niger24.jpg"
    },
    {
        img : "images/Photos/Niger/Niger25.jpg"
    },
    {
        img : "images/Photos/Niger/Niger26.jpg"
    },
    {
        img : "images/Photos/Niger/Niger27.jpg"
    },
    {
        img : "images/Photos/Niger/Niger28.jpg"
    },
    {
        img : "images/Photos/Niger/Niger29.jpg"
    },
    {
        img : "images/Photos/Niger/Niger30.jpg"
    },
    {
        img : "images/Photos/Niger/Niger31.jpg"
    },
    {
        img : "images/Photos/Niger/Niger32.jpg"
    },
    {
        img : "images/Photos/Niger/Niger33.jpg"
    },
    {
        img : "images/Photos/Niger/Niger34.jpg"
    },
    {
        img : "images/Photos/Niger/Niger35.jpg"
    },
    {
        img : "images/Photos/Niger/Niger36.jpg"
    },
    {
        img : "images/Photos/Niger/Niger37.jpg"
    },
]
const dataNiger = [
    {
        img : "images/Photos/Niger/Niger1.jpg"
    },
    {
        img : "images/Photos/Niger/Niger2.jpg"
    },
    {
        img : "images/Photos/Niger/Niger3.jpg"
    },
    {
        img : "images/Photos/Niger/Niger4.jpg"
    },
    {
        img : "images/Photos/Niger/Niger5.jpg"
    },
    {
        img : "images/Photos/Niger/Niger6.jpg"
    },
    {
        img : "images/Photos/Niger/Niger7.jpg"
    },
    {
        img : "images/Photos/Niger/Niger8.jpg"
    },
    {
        img : "images/Photos/Niger/Niger9.jpg"
    },
    {
        img : "images/Photos/Niger/Niger10.jpg"
    },
    {
        img : "images/Photos/Niger/Niger11.jpg"
    },
    {
        img : "images/Photos/Niger/Niger12.jpg"
    },
    {
        img : "images/Photos/Niger/Niger13.jpg"
    },
    {
        img : "images/Photos/Niger/Niger14.jpg"
    },
    {
        img : "images/Photos/Niger/Niger15.jpg"
    },
    {
        img : "images/Photos/Niger/Niger16.jpg"
    },
    {
        img : "images/Photos/Niger/Niger17.jpg"
    },
    {
        img : "images/Photos/Niger/Niger18.jpg"
    },
    {
        img : "images/Photos/Niger/Niger19.jpg"
    },
    {
        img : "images/Photos/Niger/Niger20.jpg"
    },
    {
        img : "images/Photos/Niger/Niger21.jpg"
    },
    {
        img : "images/Photos/Niger/Niger22.jpg"
    },
    {
        img : "images/Photos/Niger/Niger23.jpg"
    },
    {
        img : "images/Photos/Niger/Niger24.jpg"
    },
    {
        img : "images/Photos/Niger/Niger25.jpg"
    },
    {
        img : "images/Photos/Niger/Niger26.jpg"
    },
    {
        img : "images/Photos/Niger/Niger27.jpg"
    },
    {
        img : "images/Photos/Niger/Niger28.jpg"
    },
    {
        img : "images/Photos/Niger/Niger29.jpg"
    },
    {
        img : "images/Photos/Niger/Niger30.jpg"
    },
    {
        img : "images/Photos/Niger/Niger31.jpg"
    },
    {
        img : "images/Photos/Niger/Niger32.jpg"
    },
    {
        img : "images/Photos/Niger/Niger33.jpg"
    },
    {
        img : "images/Photos/Niger/Niger34.jpg"
    },
    {
        img : "images/Photos/Niger/Niger35.jpg"
    },
    {
        img : "images/Photos/Niger/Niger36.jpg"
    },
    {
        img : "images/Photos/Niger/Niger37.jpg"
    }

]
const dataBresil = [
    {
        img : "images/Photos/Brésil/Brésil1.jpg"
        
    },
    {
        img :"images/Photos/Brésil/Brésil2.jpg"
        
    },
    {
        img : "images/Photos/Brésil/Brésil3.jpg"
        
    },
    {
        img : "images/Photos/Brésil/Brésil4.jpg"
        
    },
    {
        img : "images/Photos/Brésil/Brésil5.jpg"
        
    },
    {
        img : "images/Photos/Brésil/Brésil6.jpg"
        
    },
    {
        img : "images/Photos/Brésil/Brésil7.jpg"
        
    },
    {
        img : "images/Photos/Brésil/Brésil8.jpg"
        
    },
    {
        img : "images/Photos/Brésil/Brésil9.jpg"
        
    },
    {
        img : "images/Photos/Brésil/Brésil10.jpg"
        
    },
    {
        img : "images/Photos/Brésil/Brésil11.jpg"
        
    },
    {
        img : "images/Photos/Brésil/Brésil12.jpg"
        
    },
    {
        img : "images/Photos/Brésil/Brésil13.jpg"
        
    },
    {
        img : "images/Photos/Brésil/Brésil14.jpg"
        
    },
    {
        img : "images/Photos/Brésil/Brésil15.jpg"
        
    },
    {
        img : "images/Photos/Brésil/Brésil16.jpg"
        
    },
    {
        img : "images/Photos/Brésil/Brésil17.jpg"
        
    },
    {
        img : "images/Photos/Brésil/Brésil18.jpg"
        
    },
    {
        img : "images/Photos/Brésil/Brésil19.jpg"
        
    },
    {
        img : "images/Photos/Brésil/Brésil20.jpg"
        
    },

]
const dataCopenhague =[
    {
        img :"images/Photos/Copenhague/Copenhague1.jpg  "    
    },  
    {
        img :"images/Photos/Copenhague/Copenhague2.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague3.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague4.jpg  "    
    },      
    {
        img :"images/Photos/Copenhague/Copenhague5.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague6.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague7.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague8.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague9.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague10.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague11.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague12.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague13.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague14.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague15.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague16.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague17.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague18.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague19.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague20.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague21.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague22.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague23.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague24.jpg  "    
    }, 
    {
        img :"images/Photos/Copenhague/Copenhague25.jpg  "    
    },
    {
        img :"images/Photos/Copenhague/Copenhague26.jpg  "    
    },
    {
        img :"images/Photos/Copenhague/Copenhague27.jpg  "    
    },
    {
        img :"images/Photos/Copenhague/Copenhague28.jpg  "    
    }, 

]
const dataOman =[
    {
        img : "images/Photos/Oman/Oman1.jpg"
    },
    {
        img : "images/Photos/Oman/Oman2.jpg"
    },
    {
        img : "images/Photos/Oman/Oman3.jpg"
    },
    {
        img : "images/Photos/Oman/Oman4.jpg"
    },
    {
        img : "images/Photos/Oman/Oman5.jpg"
    },
    {
        img : "images/Photos/Oman/Oman6.jpg"
    },
    {
        img : "images/Photos/Oman/Oman7.jpg"
    },
    {
        img : "images/Photos/Oman/Oman8.jpg"
    },
    {
        img : "images/Photos/Oman/Oman9.jpg"
    },
    {
        img : "images/Photos/Oman/Oman10.jpg"
    },
    {
        img : "images/Photos/Oman/Oman11.jpg"
    },
    {
        img : "images/Photos/Oman/Oman12.jpg"
    },
    {
        img : "images/Photos/Oman/Oman13.jpg"
    },
    {
        img : "images/Photos/Oman/Oman14.jpg"
    },
    {
        img : "images/Photos/Oman/Oman15.jpg"
    },
    {
        img : "images/Photos/Oman/Oman16.jpg"
    },
    {
        img : "images/Photos/Oman/Oman17.jpg"
    },
    {
        img : "images/Photos/Oman/Oman18.jpg"
    },
    {
        img : "images/Photos/Oman/Oman19.jpg"
    },
    {
        img : "images/Photos/Oman/Oman20.jpg"
    },
    {
        img : "images/Photos/Oman/Oman21.jpg"
    },
    {
        img : "images/Photos/Oman/Oman22.jpg"
    },
    {
        img : "images/Photos/Oman/Oman23.jpg"
    },
]







app.get('/', (req, res, next) => {
    console.log(req);
    res.render('home.hbs');
});

app.get('/home', (req, res, next) => {
    console.log(req);
    res.render('home.hbs');
});



app.get('/about', (req, res, next) => {
    console.log(req);
    res.render('about.hbs');
});



app.get('/photogallery', (req, res, next) => {
    console.log(req);
    res.render('photogallery.hbs', {data});
});

app.get('photogallery/Niger', (req, res, next) => {
    console.log(req);
    res.render('photogallery.hbs', {dataNiger});
});

app.get('photogallery/Oman', (req, res, next) => {
    console.log(req);
    res.render('photogallery.hbs', {dataOman});
});

app.get('photogallery/Copenhague', (req, res, next) => {
    console.log(req);
    res.render('photogallery.hbs', {dataCopenhague});
});

app.get('photogallery/Bresil', (req, res, next) => {
    console.log(req);
    res.render('photogallery.hbs', {dataBresil});
});


// app.get('/photogallery/:pays', async (req, res, next) => {
//         try{
//             const dir = await fs.promises.opendir("./public/images/photos/"+req.params.pays);
//             const data = { photos : [ ]}
//             for await (const dirent of dir) {
//                 data.photos.push("/images/photos/Oman/"+dirent.name);
//             //   console.log(dirent.name);
//             }
//             console.log(data);
//             res.render('photogallery.hbs', data);
//         }catch(err){
//             console.log(err)
//         }

// } )



    // Server Started
 app.listen(7777, () => {
    console.log('My first app listening on port 3000! @http://localhost:7777 ')
  });