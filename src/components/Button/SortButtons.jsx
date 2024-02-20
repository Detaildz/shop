import React from 'react';

function SortButtons({ handleSortData }) {
  return (
    <div className="main-action-btn">
      <button
        onClick={() => {
          handleSortData('az');
        }}
      >
        Sort A-Z
      </button>
      <button onClick={handleSortData}>Sort Z-A</button>
    </div>
  );
}

export default SortButtons;
