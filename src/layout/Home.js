import React from "react";
import img2 from './job2.jpg';

const Home = () => {
  const styleHome = {style:"width: 10rem; height: 5rem;"};
  return (
    // <div id="scroll-container">
    // <div className="card align-middle shadow-lg p-3 mb-5 bg-body rounded">
    <div>
      {/* <h1 className="card align-middle shadow-lg p-3 mb-5 bg-body rounded">Online Job Portal</h1> */}
      {/* <div class="card" style={styleHome}>
  <img src={img2} class="card-img-top" alt="image_1" style={styleHome}/>
</div> */}
<article style={{ backgroundImage: `url(${img2})`, maxWidth: "1300px", padding: "20px 10px", margin: "30px 80px", maxHeight:"900px"}}>
      {/* <h1>React Is Awesome</h1> */}
      <h1 className="card align-middle shadow-lg p-3 mb-5 bg-body rounded">Online Job Portal</h1>
      {/* <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, illum? A ab suscipit, beatae neque tenetur possimus, eius necessitatibus optio pariatur soluta vitae cupiditate assumenda dolores. Minima odio facilis dicta!</h2>
      <div>Dummy Jobs </div> */}
      {/* <img src={img2} class="card-img-top" alt="image_1" style={styleHome}/> */}
      <div class="card" style={styleHome}>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card align-middle shadow-lg p-3 mb-5 bg-body rounded">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" class="card-link">Card link</a>
    <a href="/" class="card-link">Another link</a>
  </div>
</div>

    </article>
    </div>
    // </div>
  );
};

export default Home;
