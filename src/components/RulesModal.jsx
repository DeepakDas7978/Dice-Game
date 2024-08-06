// import React from 'react';

// const RulesModal = ({ toggleRulesModal }) => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white text-black p-8 rounded-lg relative">
//         <span
//           className="absolute top-2 right-2 text-2xl cursor-pointer"
//           onClick={toggleRulesModal}
//         >
//           &times;
//         </span>
//         <h2 className="text-2xl mb-4">Rules</h2>
//         <ol className="list-decimal list-inside">
//           <li>Select a number between 1 and 6.</li>
//           <li>Click the dice to roll it.</li>
//           <li>If the rolled number matches your selected number, you get points equal to the rolled number.</li>
//           <li>If you don't select a number, you will be prompted to select one.</li>
//         </ol>
//       </div>
//     </div>
//   );
// };

// export default RulesModal;
import React from 'react';

const RulesModal = () => {
  return (
    <div className="bg-gray-300 text-black p-6 py-1 mb-2 rounded-lg ">
      <h2 className="text-2xl font-bold mb-4 text-left">How to play dice game</h2>
      <ul className="list-decimal list-inside text-left">
        <li>Select any number</li>
        <li>Click on dice image</li>
        <li>After click on dice if selected number is equal to dice number you will get same point as dice</li>
        <li>If you get wrong guess then 2 point will be deducted</li>
      </ul>
    </div>
  );
};

export default RulesModal;


