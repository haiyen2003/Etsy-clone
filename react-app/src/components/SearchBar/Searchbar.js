import {useState, useEffect, cloneElement} from 'react';
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import './searchbar.css';
import { thunkGetAllProduct } from "../../store/product";
import {thunkgetSearch} from '../../store/search';

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
    console.log(str);
    return str;
  }
  const resultstore = results;
  console.log(resultstore);

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
    dispatch(thunkGetAllProduct())
  }, [dispatch]);
  useEffect(()=>{
    console.log('prodcuts----------', products)
  },[product])

  return(
   <>
   <div className='searchbar'>

   <input
      type = 'text'
      className='searchinput'
      placeholder='Search for anything'
      onChange={(e)=>setSearchWord(e.target.value)}
      value={searchWord}
   />
   <div type="submit" className='search_btn'>
    <i className="fa-solid fa-magnifying-glass fa-lg "></i>
   </div>

   </div>

   {(showDropdown && searchResult.length > 0 ) && (
    <div className='search_dropdown'>
    { searchResult.map((product)=>(

      <NavLink to={`/products/${product.id}`} className='search_dropdown_navlink' onClick={()=>setSearchWord("")}>
      <div className='search_dropdown_info'>

      <div className='dropdown_image_container'>
      <img src={product.previewImage} alt="product" className='search_dropdown_img'/>
      </div>

        <div className='search_dropdown_text' >{product.name.slice(0,270)}</div>

      </div>
      </NavLink>
    ))
    }
    </div>
   )}

   {(showDropdown && !searchResult.length) && (
     <div className='search_dropdown'>
      <h2>We couldn't find any results for "{searchWord}"</h2>
     </div>
    )
   }

  </>
 );
}
export default Searchbar
