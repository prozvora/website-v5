import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import '../css/rubiks_top_view.css';

// 5x5 grid create sections with w/h and border if applicable

const CubeTopGrid = ({layout}) => {
  return (
    <div className="cube">
      {layout.map((row, index) => (
        <div className="row" key={index}>
          {row.map((sticker, stickerIndex) => {
            const thinRow = index === 0 || index === 4;
            const thinCol = stickerIndex === 0 || stickerIndex === 4;
            return (
              <div
                key={stickerIndex}
                // className={`face ${getClassCombos(index, stickerIndex)} color${sticker}`}
                className={cx(`face color${sticker}`, {
                  thinHeight: thinRow,
                  fullHeight: !thinRow,
                  thinWidth: thinCol,
                  fullWidth: !thinCol,
                })}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

CubeTopGrid.propTypes = {
  layout: PropTypes.array.isRequired,
};

export default CubeTopGrid;
