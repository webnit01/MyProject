
const Error = () =>{
    const Error = {
        fontFamily:'sans-serif',    
        textAlign:'center',
        maxWidth:'429px',
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%, -50%)'
    };
    const Error_heading = {
        margin:'0',
        fontSize:'150px',
        lineHeight:'150px',
        fontWeight:'bold',
    }
    
    return(
        <>
            <div style={Error}>
                <h1 style={Error_heading}>404</h1>
                <h2>Page Not Found</h2>
                <p>The resource requested could not be found on this server!</p>
            </div>
        </>
    );
}
export default Error;