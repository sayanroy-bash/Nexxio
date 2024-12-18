
function Display(data) {
  return (
    <div style={{width:"500px"}}>
        <img src={data.data.image} alt="" style={{width:"100px"}}/>
        <h1>{data.data.name}</h1>
        <p>{data.data.description}</p>
    </div>
  )
}

export default Display