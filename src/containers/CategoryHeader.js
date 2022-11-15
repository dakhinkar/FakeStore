import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fectCategories } from '../redux/actions/productAction';
import { Link } from 'react-router-dom';
const CategoryHeader = () => {
    const category = useSelector((state) => state.categories[0]); 
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fectCategories());
    }, []);
    console.log("category ", category);
    return (
        <div class="ui secondary  menu">
            <Link to={`/`} >
                <a class="item active">
                    All
                </a>
            </Link>
            {
                category && category.map((ele, index) => (
                     <Link key={index.toString()} to={`/products/categories/${ele}`} >
                        <a class="item">
                            { ele }
                        </a>
                    </Link>
                ))
            }
        </div>
    )
}
export default CategoryHeader;
