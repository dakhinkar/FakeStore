import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/actions/productAction";
import AddData from "../Inventory/AddData";
import TableRow from "../Inventory/TableRow";

const Inventory = () => {
    const dispatch = useDispatch();
     useEffect(() => {
        dispatch(fetchProducts());
     }, []) 
    const [addNew, setAddNew] = useState(false);
    let products = useSelector((state) => state.allProducts.products);
    return (<>
        {addNew && <AddData setAddNew={setAddNew}/>}
        <div class="ui secondary  menu inventory">
            <div class="ui item large header"> Product Inventory</div>
            <div class="right menu">
                <div class="item">
                    <div class="ui icon input">
                        <input type="text" placeholder="Search..." disabled/>
                        <i class="search link icon"></i>
                    </div>
                </div>
                <button class="ui icon button blue"
                    onClick={(e)=>setAddNew(true)}>
                    <i class="plus icon"></i>
                </button>
            </div>
        </div>
        <table class="ui selectable  celled table">      
            <thead>
                <tr class="center aligned">
                    <th>Product Image</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th class="left aligned">Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                Object.keys(products).length === 0 ? (
                    <div class="ui">
                        <div class="ui active inverted dimmer">
                            <div class="ui text loader">Loading</div>
                        </div>
                    </div>) :
                        (
                            products.map((product) => (

                                <TableRow
                                    key={product.id}
                                    product={product} />)
                            ))
                }
            </tbody>
        </table>
    </>
  );
};

export default Inventory;
