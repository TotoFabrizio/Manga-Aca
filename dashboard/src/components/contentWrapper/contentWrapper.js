import Stats from "./stats/stats"
import ProductsTable from "./productsTable/productTable";
import LastProduct from "./lastProductDetail/lastProduct";

function contentWrapper(){
    return(
        <div>
            <Stats />
            <LastProduct />
            <ProductsTable />
        </div>     
    )
};

export default contentWrapper;