import {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import './searchbar.css';
import { thunkGetAllProduct } from "../../store/product";

function Searchbar(){
  const product = useSelector((state) => state.product)
  const products = Object.values(product);
  const [searchWord, setSearchWord] =useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const[searchResult, setSearchResult] =useState([]);
  const dispatch = useDispatch();

  const results = (word) =>{
    const str =[];
    for (let i =0; i<products.length; i++){
      let product = products[i];
      if (product.name.toLowerCase().includes(word.toLowerCase())||
         product.description.toLowerCase().includes(word.toLowerCase()) ||
         product.category.toLowerCase().includes(word.toLowerCase())
      ){
        str.push(product)
      }

    }
    return str;

  }

  useEffect(() =>{
    if(searchWord.length){
      setShowDropdown(true);
      setSearchResult(results(searchWord))
    } else {
      setShowDropdown(false);
      setSearchResult([]);
    }
  }, [searchWord])

  useEffect(()=>{
    dispatch(thunkGetAllProduct ())
  }, [dispatch]);

  return(
   <>
   <div>
   <i className="fa-solid fa-magnifying-glass"></i>
   <input
      type = 'text'
      className='searchinput'
      placeholder='Search for anything'
      onChange={(e)=>setSearchWord(e.target.value)}
      value={searchWord}

   />
   </div>

   {(showDropdown && searchResult.length > 0 ) && (
    <div>
    { searchResult.map((product)=>(

      <NavLink to={`/products/${product.id}`} className='product_navlink' onClick={()=>setSearchWord("")}>
      <div className='product_info'>
        <div style={{ fontweight: '700' }}>{product.name}</div>

      </div>
      </NavLink>
    ))
    }
    </div>
   )}

   {(showDropdown && !searchResult.length) && (
     <div>
      <h2>We couldn't find any results for "{searchWord}"</h2>
     </div>

    )


   }

  </>
 );
}
export default Searchbar
