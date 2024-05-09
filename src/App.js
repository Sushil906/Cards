const array = [
  {
           cardImg: "https://m.media-amazon.com/images/I/81MZSImKjKL._AC_UY327_FMwebp_QL65_.jpg",

           title: "Three Stooges",

           OtherInfo: " Moe Howard , Larry Fine , Curly Howard and Shemp Howard",

           price: "₹1000"
  },
  {
    cardImg: "https://m.media-amazon.com/images/I/71t+rKXRR1L._AC_UY327_FMwebp_QL65_.jpg",

    title: "Sonic the Hedgehog ",


    OtherInfo: " Moe Howard , Larry Fine , Curly Howard and Shemp Howard",

    price: "₹1300"
},
{
  cardImg: "https://m.media-amazon.com/images/I/91+ULs4-VFL._AC_UY327_FMwebp_QL65_.jpg",

  title: "Raazi",

  OtherInfo: " Moe Howard , Larry Fine , Curly Howard and Shemp Howard",

  price: "₹1500"
},
{
  cardImg: "https://m.media-amazon.com/images/I/91vDgN-hP6L._AC_UY327_FMwebp_QL65_.jpg",

  title: "The Idea of You",

  OtherInfo: " Moe Howard , Larry Fine , Curly Howard and Shemp Howard",

  price: "₹1700"
},{
  cardImg: "https://m.media-amazon.com/images/I/91alva4BXOL._AC_UY327_FMwebp_QL65_.jpg",

  title: "Teri Batton Mein",

  OtherInfo: " Moe Howard , Larry Fine , Curly Howard and Shemp Howard",

  price: "₹2000"
},
{
  cardImg: "https://m.media-amazon.com/images/I/71nQXHocCPL._AC_UY327_FMwebp_QL65_.jpg",

  title: "Veeram",

  OtherInfo: " Moe Howard , Larry Fine , Curly Howard and Shemp Howard",

  price: "₹2500"
},
{
  cardImg: "https://m.media-amazon.com/images/I/81MZSImKjKL._AC_UY327_FMwebp_QL65_.jpg",

  title: "Three Stooges",

  OtherInfo: " Moe Howard , Larry Fine , Curly Howard and Shemp Howard",

  price: "₹3000"
},
{
  cardImg: "https://m.media-amazon.com/images/I/718cSz16DgL._AC_UY327_FMwebp_QL65_.jpg",

  title: "Rocketery",

  OtherInfo: " Moe Howard , Larry Fine , Curly Howard and Shemp Howard",

  price: "₹3500"
},
{
  cardImg: "https://m.media-amazon.com/images/I/A1p2B7OCVCL._AC_UY327_FMwebp_QL65_.jpg",

  title: "R.Rajkumar",

  OtherInfo: " Moe Howard , Larry Fine , Curly Howard and Shemp Howard",

  price: "₹4000"
},
{
  cardImg: "https://m.media-amazon.com/images/I/81rrg6y525L._AC_UY327_FMwebp_QL65_.jpg",

  title: "Jungle Huffle",

  OtherInfo: " Moe Howard , Larry Fine , Curly Howard and Shemp Howard",

  price: "₹5000"
}
]



function App() {
  return (
    <div style={{}}>
      {array.map((e)=>{

        return(  
        
        <div style={{border:"2px solid red",width:"245px",borderRadius:"10px",display: "inline-block",padding:"10px",margin:"45px",boxShadow:"5px 10px 10px green"}}>

        <img hight={"300px"}  src={e.cardImg}  alt=""/>
        <h2>{e.title}</h2>
        <p>{e.OtherInfo}</p>
        <h3>{e.price}</h3>


</div>
      )})}
     
    </div>
  );
}

export default App;
