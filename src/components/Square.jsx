// const Square = props => {
//    return (
//       <div>
//          {props.value}
//          <h5>Children will be redered below</h5>
//          <div>{props.children}</div>
//       </div>
//    );
// };

// const Square = ({ value, children }) => {
//     //   console.log(children);
//     return (
//         <div>
//             {value}

//             <h5>Children will be redered below</h5>
//             <div>{children}</div>
//         </div>
//     );
// }; // using object destructuring, because we know only one prop


const Square = ({ value}) => {
   return (
      <button type="button" className="square">
         {value}
      </button>
   );
};

export default Square;
