//  -------- SIMPLE CARD COMPONENT ------ 
// This is the functional component to accept props. The child component.
// Props are parameters passed from the parent component
 function SimpleCard ({ title, content}){
    //title and content from parent component
    return (
    <div>
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
    );
}
export default SimpleCard;