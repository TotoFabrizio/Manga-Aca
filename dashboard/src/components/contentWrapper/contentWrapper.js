import Stats from "./stats/stats"
import ProductsTable from "./productsTable/productTable";
import LastProduct from "./lastProductDetail/lastProduct";
import GenreInDb from "./genreInDb/genreInDb";

function contentWrapper(){
    return(
        <div>
            <Stats />
            <div className="d-flex">
                <LastProduct />
                <GenreInDb />
            </div>  
            <ProductsTable />
        </div>     
    )
};

export default contentWrapper;