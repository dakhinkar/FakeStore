
import React, { useState } from "react";

const TableRow = ({ product }) => {
    console.log(product);
    const { image, title, price, category, description } = product;
    const [edit, setEdit] = useState(false);
    const [updateProduct, setProduct] = useState({ title, category, description, price });

    const setHandler = (field, e) => {
        setProduct((prev) => {
            const oldProduct = { ...prev };
            oldProduct.field = e.target.value;
            return oldProduct;
        })
    }

    const editHandler = (value) => {
        setEdit(value);
    }
    const cancelHandler = () => {
        setProduct({ title, category, description, price });
        editHandler(false);
    }

    const saveHandler = () => {
        editHandler(false);
    }

    const actionsPicker = () => {
        if (edit) {
            return (
                <>
                    <button class="circular ui icon button green" onClick={saveHandler}>
                        <i class="save alternate icon"></i>
                    </button>
                    <button class="circular ui icon button red"
                       onClick={cancelHandler} >
                        <i class="cancel icon"></i>
                    </button>
                </>
            );
        }
        return (
            <><button class="circular ui icon button blue" onClick={()=> editHandler(true)}>
                    <i class="pencil alternate icon"></i>
                </button>
                <button class="circular ui icon button red">
                    <i class="trash alternate outline icon"></i>
            </button>
               </>
        )
    }
    return (
       <tr class="center aligned">
            <td data-label="Product Image" class ="one wide">
                    <label class="ui transparent input">
                    <img src={image} class="ui mini rounded image">
                    </img>
                    <input type="file" style={{ display: "none" }}
                        disabled={edit ? false : true} />
                </label>

            </td>                     
            <td data-label="Product Name"  class ="three wide" >
                <div class={`ui transparent input ${edit ? "select" : ""}`}>
                    <input type="text"
                        value={updateProduct.title}
                        disabled={edit ? false : true}
                        onChange={(e) => setProduct("title" , e)}
                    />
                </div>
            </td>
            <td data-label="Category"  class ="two wide">
                    <div class={`ui transparent input ${edit ? "select" : ""}`}>
                    <input type="text"
                        value={updateProduct.category}
                        disabled={edit ? false : true}
                        onChange={(e) => setProduct("category" , e)}/>
                </div>
            </td>
            <td data-label="Description">
                <div class={`ui transparent input ${edit ? "select": ""}`}>
                    <textarea type="text"
                        value={updateProduct.description}
                        disabled={edit ? false : true}
                        onChange={(e) => setProduct("description" , e)}/>
                </div>
            </td>
            <td data-label="Price"  class ="center aligned one wide" >
                {/* <div class="ui transparent input">
                    <input type="text" value={price} disabled/>
                </div> */}
                <div class={`ui transparent input ${edit ? "select" : ""}`}>
                    <input type="number"
                        value={updateProduct.price}
                        disabled={edit ? false : true}
                        onChange={(e) => setProduct("price" , e)}/>
                </div>
            </td>
            <td data-label="Action" class ="two wide">
                {
                    actionsPicker()
               }
            </td>

        </tr>
  );
};

export default TableRow;
