const productsServices = require("../../services/productService");

const controller = {
    allProducts: async(req,res) =>{
        const products = await productsServices.findAll();
        const genres = await productsServices.genres(); 
        const volGen = await productsServices.voluGenre();

        let cantPorGener = []
        genres.map((gen,index)=>{
            let count = 0;
            for (const volGenre of volGen) {
                if(gen.id == volGenre.genre_id){
                    count++;
                }            
            }
            cantPorGener[index] = count;
        })

        res.json({
            product: products,
            genres: genres,
            cantPorGener: cantPorGener,
        })
    },
    lastProduct: async(req,res) =>{
        const products = await productsServices.findAll();
        const last = products.pop();

        res.json(
            {lastProd: last,
            });
    },
    cantByGenre: async(req,res) =>{
        const genres = await productsServices.genres(); 
        const volGen = await productsServices.voluGenre();

        let cantPorGener = []
        genres.map((gen,index)=>{
            let count = 0;
            for (const volGenre of volGen) {
                if(gen.id == volGenre.genre_id){
                    count++;
                }            
            }
            cantPorGener[index] = count;
        })

        res.json({
            cantPorGenre: cantPorGener,
            genres: genres
        }) 
    }
};

module.exports = controller;