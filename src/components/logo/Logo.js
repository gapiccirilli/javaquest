

export default function Logo({ path="/", dimensions={width: "20rem", height: "6rem"} }) {
  
    return (
      <img className="logo" src={path} style={{width: dimensions.width, height: dimensions.height}} />
    );
  }